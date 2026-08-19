__d("EncryptedBackupsUploadQueueV3Scheduler", [
	"EBGenerateMessageTags",
	"EBMessageProbe",
	"EBUploadMessagesFromWorkerMutationDeferred",
	"EncryptedBackupsCreateAttachmentContext",
	"EncryptedBackupsUploadEntity",
	"EncryptedBackupsUploadQueueV3",
	"FBLogger",
	"I64",
	"MAWBridgeUpload",
	"MAWEBLSInWorkerSwitch",
	"MAWEBUploadTrackingUtils",
	"MAWProtobufValidator",
	"MWEBODSUtils",
	"MsgrSchedulerQPL",
	"NativeSchedulerTickStrategy",
	"QPLFlow",
	"TaskScheduler",
	"TaskSchedulerPriority",
	"WACommsConnectionState",
	"WAGlobals",
	"WAHashStringToNumber",
	"WAJids",
	"WAStanzaUtils",
	"WATimeUtils",
	"WAWaitForUserUnblocked",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"justknobx",
	"performanceAbsoluteNow",
	"qpl",
	"uuidv4"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h = function() {
		return r("FBLogger")("wmi").tags(["eb_upload", "upload_queue_v3_scheduler"]);
	}, y = null;
	function C() {
		return y !== null;
	}
	var b;
	function v() {
		return b;
	}
	var S = 1e3, R = 6e4, L = 0, E = null, k = {
		concurrency: 1,
		failOnTimeout: !0,
		promotionTimeoutMs: r("justknobx")._("1453"),
		timeoutMs: r("justknobx")._("1460")
	}, I = null;
	function T() {
		if (I == null) {
			var e = o("TaskScheduler").taskScheduler("EncryptedBackupsUploadQueueV3", k, o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy());
			e.setLifecycleListener(o("MsgrSchedulerQPL").makeMsgrSchedulerQPLListener()), I = e;
		}
		return I;
	}
	function D() {
		r("MAWEBLSInWorkerSwitch").onSet(function(e) {
			e === !0 && N();
		}), o("WACommsConnectionState").WACommsConnectionState.onSet(function(e) {
			e === !0 && ($(), N());
		}), o("EncryptedBackupsUploadQueueV3").getUploadQueue().subscribe(function(e) {
			e.type === "new_entities" && N();
		}), N();
	}
	function x() {
		return L === 0 ? 0 : Math.min(S * Math.pow(2, L - 1), R);
	}
	function $() {
		L = 0, E != null && (globalThis.clearTimeout(E), E = null);
	}
	function P() {
		var e = x();
		if (e === 0) {
			N();
			return;
		}
		E == null && (E = globalThis.setTimeout(function() {
			E = null, N();
		}, e));
	}
	function N() {
		return M.apply(this, arguments);
	}
	function M() {
		return M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (E != null) {
				h().DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["EB Upload is in backoff, skipping schedule"])));
				return;
			}
			if (y != null) {
				h().DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["EB Upload is already running"])));
				return;
			}
			yield o("WAWaitForUserUnblocked").waitForUserUnblocked();
			var t = o("QPLFlow").startQPLFlow(r("qpl")._(521475028, "909"));
			if (!r("MAWEBLSInWorkerSwitch").isEnabled()) {
				h().DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["EB is not enabled"]))), t.addPoint("eb_disabled"), t.endSuccess();
				return;
			}
			if (!o("WACommsConnectionState").WACommsConnectionState.isConnected()) {
				h().DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["WAComms connection is not established"]))), t.addPoint("wa_comms_not_connected"), t.endSuccess();
				return;
			}
			y = T().run(function() {
				return w(t);
			}, {
				name: "eb_upload_queue_v3",
				priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY
			});
			try {
				var n = yield y.promise;
				y = null, n && N();
			} catch (e) {
				y = null, L++;
				var a = r("getErrorSafe")(e);
				h().FATAL(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Runtime error during EB upload run: ", ""])), a.message), t.endFail("runtime_error"), P();
			}
		}), M.apply(this, arguments);
	}
	function w(e) {
		return A.apply(this, arguments);
	}
	function A() {
		return A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = [], n = 0, a = 0, i = yield o("EncryptedBackupsUploadQueueV3").getUploadQueue().readFromIndex("[attemptCount+addedAtMs]", {
				filter: function(i) {
					return Date.now() - i.timestampMs > o("WATimeUtils").DAY_MILLISECONDS * 30 ? (t.push(i.queueId), n++, !1) : o("MAWProtobufValidator").isProtobufValid(i.payload) ? i.attemptCount < r("justknobx")._("1596") : (t.push(i.queueId), a++, !1);
				},
				limit: r("justknobx")._("1676"),
				order: "asc"
			});
			if (e.addPoint("retrieved_entries", { int: { entriesCount: i.length } }), t.length > 0 && (yield o("EncryptedBackupsUploadQueueV3").getUploadQueue().delete(t), e.addPoint("deleted_invalid_entries", { int: {
				expiredEntryCount: n,
				invalidProtobufEntryCount: a
			} })), i.length === 0) return e.endSuccess(), t.length > 0;
			h().DEBUG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["upload queue uploading ", " messages"])), i.length);
			var l = [], s = [];
			for (var u of i) {
				var c;
				o("EBMessageProbe").EBMessageProbe.getInstance().addMarkerToItem(u.messageId, "message_picked_from_queue", {
					is_retroactive: u.debugInfo.isRetroactive || !1,
					trigger_source: "upload-message-from-mps"
				});
				var d = o("WAHashStringToNumber").hashStringToNumber(r("uuidv4")()), f = q(u, d);
				l.push(f), s.push(d), o("MAWEBUploadTrackingUtils").startUploadTracking(o("WAStanzaUtils").toStanzaId(u.messageId), o("WAJids").threadIdForChatJid(o("WAJids").unsafeCoerceToChatJid(u.threadId)), void 0, (c = u.debugInfo.triggerSource) != null ? c : "unknown", d, !0, u.debugInfo.isRetroactive || !1, f.attachmentBackupContext, "protobuf_only", u.attemptCount);
				var y = /^\d*$/.test(f.messageId);
				if (o("MAWEBUploadTrackingUtils").addAnnotationsWorkerOnly(d, { bool: { message_id_valid: y } }), !y) {
					var C;
					h().MUSTFIX(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Invalid message OTID: ", ""])), f.messageId), o("MWEBODSUtils").markODSForEB("upload", ((C = u.debugInfo.triggerSource) != null ? C : "unknown") + ".invalid_otid");
				}
			}
			e.addPoint("generated_bridge_upload_messages"), s.forEach(function(e) {
				return o("MAWEBUploadTrackingUtils").addPointWorkerOnly(e, "fire_protobuf_only_upload_bridge_event");
			});
			try {
				var v = yield o("EBUploadMessagesFromWorkerMutationDeferred").uploadMessagesFromWorker(l, "EncryptedBackupsUploadQueueV3");
				if (e.addPoint("received_upload_response"), v.success) {
					for (var S of i) o("EBMessageProbe").EBMessageProbe.getInstance().addMarkerToItem(S.messageId, "message_uploaded_via_graphql", {
						action_type: S.backupDirective.actionType,
						upload_type: "protobuf_only"
					}), o("EncryptedBackupsUploadQueueV3").queryMediaRestoreProbe(S);
					yield F(i, s), b = (g || (g = r("performanceAbsoluteNow")))(), $(), e.endSuccess();
				} else return yield O(i, s, v.error, !0), L++, e.endFail(v.error), v.error === "user_device_not_enrolled" || P(), !1;
			} catch (t) {
				var R = r("getErrorSafe")(t);
				return h().MUSTFIX(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Runtime error when doing GraphQL upload, ", ""])), R.message), yield O(i, s, R.message, !0), L++, e.endFail("graphql_runtime_error"), P(), !1;
			}
			return !0;
		}), A.apply(this, arguments);
	}
	function F(e, t) {
		return t.forEach(function(e) {
			return o("MAWEBUploadTrackingUtils").endSuccessWorkerOnly(e, "upload_queue_ack_worker_success");
		}), o("EncryptedBackupsUploadQueueV3").getUploadQueue().ack(e.map(function(e) {
			return e.queueId;
		}));
	}
	function O(e, t, n, r) {
		return B.apply(this, arguments);
	}
	function B() {
		return B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r) {
			if (t.forEach(function(e) {
				return o("MAWEBUploadTrackingUtils").endFailWorkerOnly(e, "upload_queue_ack_worker_" + (r ? "retriable" : "non_retriable") + "_error", { string: {
					error_description: o("MAWEBUploadTrackingUtils").EBUploadTrackingWorkerFailurePoints.FAILED_TO_ACK_MESSAGE,
					reason: n
				} });
			}), r) {
				yield o("EncryptedBackupsUploadQueueV3").getUploadQueue().put(e.map(function(e) {
					return babelHelpers.extends({}, e, { attemptCount: e.attemptCount + 1 });
				}));
				return;
			}
			yield o("EncryptedBackupsUploadQueueV3").getUploadQueue().ack(e.map(function(e) {
				return e.queueId;
			}));
		}), B.apply(this, arguments);
	}
	var W = o("WAJids").createJidUtils({ platform: "msgr" });
	function q(e, t) {
		var n = e.backupDirective.actionType === 3 ? e.backupDirective.originalMsgProtocolId.externalId : o("WAStanzaUtils").toStanzaId(e.messageId), r = W.toUserJid(e.senderId), a = o("WAJids").unsafeCoerceToChatJid(e.threadId), i = r === o("WAGlobals").getMyUserJid() ? o("WAJids").AUTHOR_ME : r, l = {
			author: i,
			chat: a,
			externalId: n
		}, s = o("EncryptedBackupsCreateAttachmentContext").createAttachmentContext(o("EncryptedBackupsUploadEntity").toEbBackupMessageBytes(e.payload)), u = o("MAWBridgeUpload").createBridgeUploadAttachmentBackupContext(void 0, "msgr", s), c = s.map(function(e) {
			return o("EBGenerateMessageTags").generateEBMessageTags(e.mediaType);
		}).filter(Boolean);
		return {
			actionType: e.backupDirective.actionType === 3 ? 2 : 1,
			attachmentBackupContext: u,
			authTs: void 0,
			echoDocument: void 0,
			echoEncodingLatencyNs: void 0,
			errorCode: void 0,
			errorMessage: void 0,
			messageId: e.backupDirective.originalMsgProtocolId.externalId,
			messageType: void 0,
			protoMsg: {
				backupActionType: e.backupDirective.actionType,
				msgId: l,
				originalMsgProtocolId: e.backupDirective.originalMsgProtocolId,
				protobuf: o("EncryptedBackupsUploadEntity").toEbBackupMessageBytes(e.payload),
				senderId: (f || (f = o("I64"))).of_string(o("WAJids").userIdFromJid(r)),
				serverTs: o("WATimeUtils").castMilliSecondsToUnixTime(e.timestampMs),
				sortOrderMs: o("WATimeUtils").castToMillisTime(e.timestampMs),
				supplementalKey: e.backupDirective.supplementalKey,
				tags: c
			},
			sortOrderMs: e.timestampMs,
			threadId: o("WAJids").threadIdForChatJid(a),
			traceId: t.toString(),
			uploadTrackingInstanceKey: t
		};
	}
	l.isUploadTaskScheduled = C, l.getLastSuccessfulAckTimestampMs = v, l.subscribeToUploadQueueUpdates = D;
}), 98);

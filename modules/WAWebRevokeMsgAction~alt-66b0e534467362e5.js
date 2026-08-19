__d("WAWebRevokeMsgAction", [
	"WAJobOrchestratorTypes",
	"WALogger",
	"WATimeUtils",
	"WAWebAck",
	"WAWebAddonProcessRevoke",
	"WAWebApiChat",
	"WAWebAssociationProcessor",
	"WAWebAssociationProcessorConstants",
	"WAWebBotBaseGating",
	"WAWebCmd",
	"WAWebCoexEditDeleteAlertUtils",
	"WAWebDBProcessMessage",
	"WAWebDBProcessRevokeMsgs",
	"WAWebErrorType",
	"WAWebFrontendMsgGetters",
	"WAWebFtsClient",
	"WAWebMedia",
	"WAWebMessageAssociationGatingUtils",
	"WAWebMessageSendPerfReporter",
	"WAWebMsgActionCapability",
	"WAWebMsgGetters",
	"WAWebMsgKey",
	"WAWebMsgModel",
	"WAWebMsgModelUtils",
	"WAWebMsgType",
	"WAWebNoop",
	"WAWebOpenCoexEditDeleteAlertModal",
	"WAWebOrchestratorNonPersistedJob",
	"WAWebPersistedJobDefinitions",
	"WAWebPersistedJobManagerWorkerCompatible",
	"WAWebRevoke",
	"WAWebSendMsgRecordAction",
	"WAWebSendMsgResultAction",
	"WAWebSendRevokeMessageWamEvent",
	"WAWebSimpleSignalPNToFBIDMigration",
	"WAWebStateUtils",
	"WAWebUpdateLastAddOnPreviewChatAction",
	"WAWebUserPrefsMeUser",
	"WAWebUserPrefsMultiDevice",
	"WAWebViewMode.flow",
	"WAWebWamMsgUtils",
	"WAWebWid",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m;
	function p(e, t, n) {
		var r, a, i, l = e.data, s = o("WAWebFrontendMsgGetters").getChat(l), u = (r = s == null || (a = s.id) == null ? void 0 : a.toString()) != null ? r : "", c = (s == null || (i = s.contact) == null ? void 0 : i.isHosted) === !0, d = o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage() === !0, m = e.type === "message" ? f({
			clearMedia: n,
			record: {
				type: "message",
				data: o("WAWebStateUtils").unproxy(e.data)
			},
			type: t
		}) : f({
			clearMedia: n,
			record: e,
			type: t
		});
		return m.then(function(e) {
			return e.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK && o("WAWebCoexEditDeleteAlertUtils").shouldShowCoexDeleteAlert(u, c) && (o("WAWebCoexEditDeleteAlertUtils").markCoexDeleteAlertShown(u), o("WAWebOpenCoexEditDeleteAlertModal").openCoexDeleteAlertModal(d)), e;
		});
	}
	function _(e, t) {
		return C(o("WAWebStateUtils").unproxy(e), t);
	}
	async function f(t) {
		var n, a = t.clearMedia, i = t.isAssociatedBotPluginRevoke, l = i === void 0 ? !1 : i, c = t.record, d = t.type, m = c.data;
		if (d === o("WAWebCmd").Revoke.Sender && !m.id.fromMe && !o("WAWebMsgActionCapability").canBotResponseBeRevokeByInvoker(m)) return Promise.reject(r("err")("revoking received message"));
		var p = m.id.remote.isGroup() && c.type === "addon" ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : o("WAWebUserPrefsMeUser").getMeUserOrThrow(), f = m.id.remote.isGroup() && ((n = o("WAWebFrontendMsgGetters").getChat(m).groupMetadata) == null ? void 0 : n.isLidAddressingMode), g = void 0;
		m.id.remote.isGroup() && (g = f === !0 ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : p);
		var h = new (r("WAWebMsgKey"))({
			id: await r("WAWebMsgKey").newId(),
			remote: m.id.remote,
			fromMe: !0,
			participant: g
		}), C = y(d), b = o("WATimeUtils").unixTime(), v = b - o("WAWebMsgGetters").getT(m), S = {
			id: h,
			from: f === !0 ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : p,
			to: m.id.remote,
			author: g,
			t: b,
			type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
			kind: o("WAWebMsgType").MsgKind.ProtocolRevoke,
			subtype: y(d),
			protocolMessageKey: m.id,
			clearMedia: !!a,
			local: !0,
			revokeDuration: v,
			revokeTimestamp: b,
			viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE
		};
		if (c.type === "addon") return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("sendMessage", async function() {
			var t = c.data;
			if (t.kind !== o("WAWebMsgType").MsgKind.CommentDecrypted) throw r("err")("_sendRevoke: only decrypted comment can be revoked from the UI");
			var n = babelHelpers.extends({}, S, {
				kind: o("WAWebMsgType").MsgKind.ProtocolAddonRevoke,
				targetMessageKey: t.parentMsgKey,
				revokeAddonType: t.type
			}), a = await o("WAWebSendMsgRecordAction").sendAddonRecord(n), i = a.messageSendResult;
			return i === o("WAWebSendMsgResultAction").SendMsgResult.OK ? (new (o("WAWebSendRevokeMessageWamEvent")).SendRevokeMessageWamEvent({
				messageType: o("WAWebWamMsgUtils").getWamMessageType(m),
				messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(m),
				revokeSendDelay: v
			}).commit(), await o("WAWebAddonProcessRevoke").processSentRevokeMsg(babelHelpers.extends({}, n, {
				t: o("WAWebMsgGetters").getT(m),
				ack: o("WAWebAck").ACK.SENT
			}), t)) : o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["failed to send revoke addon"]))).tags("addons", "messaging").sendLogs("failedSendRevokeMsg: " + t.type), a;
		}, { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION }).waitUntilCompleted();
		var R = babelHelpers.extends({}, S);
		if (o("WAWebBotBaseGating").isBotEnabled()) {
			var L, E = null, k = (L = m.mentionedJidList) == null ? void 0 : L.find(function(e) {
				return e.isBot();
			}), I = o("WAWebMsgGetters").getSender(m);
			if (I && I.isBot() ? E = I : k != null && m.isForwarded !== !0 && (E = k), E != null) {
				var T;
				E = (T = o("WAWebSimpleSignalPNToFBIDMigration").getDeprecatedPnChatForFbidInvoke(E)) != null ? T : E;
			}
			R.botRespOrInvocationRevokeBotWid = E, m.botTargetSenderJid instanceof r("WAWebWid") && (R.botTargetSenderJid = m.botTargetSenderJid);
		}
		var D = new (o("WAWebMsgModel")).Msg(R);
		return D.wamMessageSendPerfReporter = new (o("WAWebMessageSendPerfReporter")).MessageSendPerfReporter({
			chatWid: D.to,
			mediaType: o("WAWebWamMsgUtils").getWamMediaType(D),
			messageType: o("WAWebWamMsgUtils").getWamMessageType(D)
		}), D.wamMessageSendPerfReporter.setIsRevokeMessage(!0), o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("sendMessage", async function() {
			try {
				var e, t;
				(e = D.wamMessageSendPerfReporter) == null || e.startSavedStage(), await o("WAWebDBProcessMessage").storeMessages([R], o("WAWebFrontendMsgGetters").getChat(m).id), (t = D.wamMessageSendPerfReporter) == null || t.postSavedStage();
			} catch (e) {
				throw o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["_sendRevoke: failed to storeMessages into storage"]))).verbose().sendLogs("storeMessages failed"), e;
			}
			var n = await o("WAWebSendMsgRecordAction").sendMsgRecord(D), a = n.messageSendResult;
			if (l) throw o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["_sendRevoke path for associated with bot plugin msg"]))), r("err")("Expected exit for associated with bot plugin msg");
			return a === o("WAWebSendMsgResultAction").SendMsgResult.OK ? (new (o("WAWebSendRevokeMessageWamEvent")).SendRevokeMessageWamEvent({
				messageType: o("WAWebWamMsgUtils").getWamMessageType(m),
				messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(m),
				revokeSendDelay: v
			}).commit(), o("WAWebDBProcessRevokeMsgs").processRevokeMsgs([{
				revokeMsgKey: m.id,
				newMsgKey: h,
				timestamp: o("WAWebMsgGetters").getT(m),
				revokeTimestamp: b,
				subtype: C,
				sender: p,
				viewMode: D.viewMode
			}]).then(async function() {
				return o("WAWebUpdateLastAddOnPreviewChatAction").deleteModelsForLastAddOnPreview([m.id.toString()]), await o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().waitUntilPersisted(o("WAWebPersistedJobDefinitions").jobSerializers.deleteAddOns(o("WAWebFrontendMsgGetters").getChat(m).id.toString(), [m.id.toString()])), _(c.data, {
					msgKey: h,
					subtype: C,
					sender: p,
					revokeTimestamp: b,
					viewMode: D.viewMode
				}), { messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.OK };
			})) : Promise.resolve({ messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN });
		}, { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION }).waitUntilCompleted();
	}
	function g(e, t) {
		f({
			clearMedia: !1,
			isAssociatedBotPluginRevoke: !0,
			record: {
				type: "message",
				data: o("WAWebStateUtils").unproxy(e)
			},
			type: t
		}).catch(function(e) {
			o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[bot revoke] sendAssociatedBotPluginRevoke: ", ""])), e instanceof Error ? e.message : String(e));
		});
	}
	function h(e, t, n) {
		return f({
			clearMedia: n,
			isAssociatedBotPluginRevoke: !1,
			record: {
				type: "message",
				data: o("WAWebStateUtils").unproxy(e)
			},
			type: t
		});
	}
	function y(e) {
		switch (e) {
			case o("WAWebCmd").Revoke.Sender: return "sender_revoke";
			case o("WAWebCmd").Revoke.Admin: return "admin_revoke";
		}
	}
	function C(e, t) {
		var n, a, i, l = o("WAWebFrontendMsgGetters").getMaybeChat(e);
		if (!o("WAWebRevoke").isWithinRevokeWindow({
			revokedMsgKey: e.id,
			revokedMsgTimestamp: e.t,
			revokeTimestamp: o("WATimeUtils").unixTime()
		})) {
			o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["revoke: outside of revoke window, ", " has not been revoked"])), e.id.toString());
			return;
		}
		o("WAWebMsgModelUtils").typeIsMms(e) && o("WAWebMedia").deregisterMsg(e), l == null || l.removeFromCollection(e), e.trigger("revoked"), o("WAWebMsgGetters").clearMsgGetterCacheFor(e), o("WAWebFrontendMsgGetters").clearFrontendMsgGetterCacheFor(e);
		var s = e.getCollection(), u = e.id, c = o("WAWebRevoke").getMsgKeyAfterRevoke({
			originalKey: u,
			revokeKey: t.msgKey
		}), p = e.getMsgChunk();
		p && p.replaceId(u, c), e.forEachThreadMsgChunk(function(e) {
			e.replaceId(u, c);
		}), s.replaceId(u, c);
		var f = (n = l == null ? void 0 : l.isUnreadMsg(e)) != null ? n : !1, g = (a = l == null ? void 0 : l.isActiveUnreadMsg(e)) != null ? a : !1, h = e.associationType;
		if (h != null && o("WAWebMessageAssociationGatingUtils").isMessageAssociationInfraEnabled()) {
			var y = o("WAWebAssociationProcessor").getAssociationProcessorByAssociationType(h);
			y && y.processorType === o("WAWebAssociationProcessorConstants").AssociationProcessorType.WithDetachedMessages && e.detachAssociatedMsg();
		}
		var C = {
			isOverwrittenByRevoke: !0,
			id: c,
			type: o("WAWebMsgType").MSG_TYPE.REVOKED,
			subtype: t.subtype === "admin_revoke" ? "admin" : "sender",
			revokeSender: t.sender,
			revokeTimestamp: t.revokeTimestamp,
			protocolMessageKey: u,
			body: void 0,
			caption: void 0,
			clientUrl: void 0,
			deprecatedMms3Url: void 0,
			loc: void 0,
			lat: void 0,
			lng: void 0,
			isLive: void 0,
			accuracy: void 0,
			speed: void 0,
			degrees: void 0,
			comment: void 0,
			sequence: void 0,
			shareDuration: void 0,
			finalLat: void 0,
			finalLng: void 0,
			finalAccuracy: void 0,
			finalThumbnail: void 0,
			finalSpeed: void 0,
			finalDegrees: void 0,
			finalTimeOffset: void 0,
			title: void 0,
			description: void 0,
			matchedText: void 0,
			thumbnail: void 0,
			richPreviewType: void 0,
			doNotPlayInline: void 0,
			paymentLinkMetadata: void 0,
			quotedMsg: void 0,
			quotedStanzaID: void 0,
			quotedRemoteJid: void 0,
			quotedParticipant: void 0,
			mediaData: void 0,
			mentionedJidList: void 0,
			groupMentions: void 0,
			vcardList: void 0,
			star: !1,
			kicState: void 0,
			kicTimestampMs: void 0,
			kicKey: void 0,
			errorCode: o("WAWebErrorType").SendFailureErrorCode.NoError,
			isSendFailure: !1,
			viewMode: (i = t.viewMode) != null ? i : o("WAWebViewMode.flow").ViewModeType.VISIBLE,
			associationType: void 0,
			parentMsgKey: void 0
		};
		if (e.set(C), e.trigger("change:msgKey", {
			newKey: c,
			oldKey: u
		}), l) {
			var b;
			u.equals(l.lastReceivedKey) && (l.lastReceivedKey = c), (b = l.composeQuotedMsg) != null && b.id.equals(u) && (l.composeQuotedMsg = null), f && (l.unreadCount = Math.max(l.unreadCount - 1, 0), l.unreadDividerOffset += 1, o("WAWebApiChat").reduceChatUnreadCount(l.id.toString())), g && (l.activeUnreadCount = Math.max(l.activeUnreadCount - 1, 0));
		}
		if (r("WAWebWid").isBroadcast(u.remote)) {
			var v = o("WAWebMsgModelUtils").getBroadcastFanoutKeys(u), S = o("WAWebMsgModelUtils").getBroadcastFanoutKeys(c);
			if (!v || !S || v.length !== S.length) {
				o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
					"cannot fanout revoke: ",
					" ",
					""
				])), String(v), String(S));
				return;
			}
			v.forEach(function(e, n) {
				var r = s.get(e);
				r && _(r, {
					msgKey: S[n],
					subtype: t.subtype,
					sender: t.sender
				});
			}), o("WAWebFtsClient").ftsClient.purge([String(e.rowId)]).catch(r("WAWebNoop"));
			var R = l ? l.id.toString() : e.id.remote.toString();
			o("WAWebUpdateLastAddOnPreviewChatAction").deleteModelsForLastAddOnPreview([u.toString()]), o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().fireAndForget(o("WAWebPersistedJobDefinitions").jobSerializers.deleteAddOns(R.toString(), [u.toString()]));
		}
	}
	l.sendRevoke = p, l.revoke = _, l.sendAssociatedBotPluginRevoke = g, l.sendAssociatedChildMsgRevoke = h;
}), 98);

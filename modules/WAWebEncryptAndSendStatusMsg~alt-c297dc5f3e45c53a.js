__d("WAWebEncryptAndSendStatusMsg", [
	"WAJids",
	"WALogger",
	"WAWap",
	"WAWebAdvSignatureApi",
	"WAWebApiMessageInfoStore",
	"WAWebBackendJobs.flow",
	"WAWebBackendJobsCommon",
	"WAWebCommsAckParser",
	"WAWebCommsWapMd",
	"WAWebDBDeviceListFanout",
	"WAWebDeprecatedSendIqWorkerCompatible",
	"WAWebE2EProtoUtils",
	"WAWebGetGroupKeyDistributionMsg",
	"WAWebLidMigrationUtils",
	"WAWebLidStatusMigrationUtils",
	"WAWebManageE2ESessionsJob",
	"WAWebMsgFanoutTypes",
	"WAWebMsgKey",
	"WAWebPostPrekeysDepletionMetric",
	"WAWebProtobufsE2E.pb",
	"WAWebReportingTokenUtils",
	"WAWebSchemaMessageInfo",
	"WAWebSendMsgCommonApi",
	"WAWebSendMsgCreateFanoutStanza",
	"WAWebSessionScope",
	"WAWebSignal",
	"WAWebSignalProtocolStore",
	"WAWebStatusGatingUtils",
	"WAWebStatusPublishRequestArgs",
	"WAWebStatusSessionGatingUtils",
	"WAWebUserPrefsMeUser",
	"WAWebUserPrefsStatus",
	"WAWebWamEnumMessageDistributionEnumType",
	"WAWebWamEnumMessageType",
	"WAWebWamEnumPrekeysFetchContext",
	"WAWebWamNumberToSizeBucket",
	"WAWebWidFactory",
	"compactMap"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h, y, C;
	async function b(e) {
		var t = await o("WAWebSchemaMessageInfo").getMessageInfoTable().equals(["msgKey"], String(e));
		return t.length === 0 && (t = await o("WAWebSchemaMessageInfo").getMessageInfoTable().equals(["msgKey"], String(o("WAWebLidMigrationUtils").getAlternateMsgKey(e)))), t.map(function(e) {
			return o("WAWebLidStatusMigrationUtils").matWidConvert(o("WAWebWidFactory").createWid(e.receiverUserJid));
		});
	}
	function v(t, n) {
		var r = t.filter(function(e) {
			return !e.isLid();
		});
		r.length > 0 && o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"encryptAndSendStatusMsg: PN in ",
			": ",
			""
		])), n, r.map(function(e) {
			var t = o("WAWebLidMigrationUtils").toUserLid(e);
			return e.toLogString() + " (hasLidMapping=" + String(t != null) + ")";
		}));
	}
	async function S(e) {
		var t, n, a, i, l, h = e.metricsReporter, y = e.msgProtobuf, C = e.sendMsgRecord, S = C.data.id, T = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID), D = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(), x = E(y), $ = o("WAWebStatusSessionGatingUtils").shouldUseStatusSessionForOutgoingMessage() ? o("WAWebSessionScope").SessionScope.STATUS : o("WAWebSessionScope").SessionScope.DEFAULT, P = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(y);
		P === "reaction" && o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["encryptAndSendStatusMsg: unexpected reaction type for status message ", ""])), S.id).sendLogs("status-unexpected-reaction-type");
		var N, M, w, A = await r("WAWebUserPrefsStatus").getStatusList(), F = r("compactMap")(A.list, o("WAWebLidMigrationUtils").toUserLid);
		if (A.list = F.map(function(e) {
			return e;
		}), o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
			"encryptAndSendStatusMsg: start to send ",
			", revoke: ",
			""
		])), S.id, x), x) {
			var O;
			(O = h.sendPerfReporter) == null || O.setIsRevokeMessage(!0);
			var B = await b(x);
			if (k(B, A.list)) {
				o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["encryptAndSendStatusMsg: start to send direct revoke message"]))), v(B, "direct revoke senderList");
				var W = await o("WAWebDBDeviceListFanout").getFanOutList({
					wids: [].concat(B, [D]),
					shouldMergeAltDevices: !0
				});
				return v(W, "direct revoke deviceList"), I({
					deviceList: W,
					metricsReporter: h,
					msgProtobuf: y,
					sendMsgRecord: C,
					sessionScope: $
				});
			}
			N = B, M = !1;
		} else {
			if (A.list.length === 0) return;
			N = A.list, M = !0, w = o("WAWap").wap("meta", {
				status_setting: o("WAWebStatusPublishRequestArgs").toStatusSettingMetaAttribute(A.setting),
				session_scope: $ === o("WAWebSessionScope").SessionScope.STATUS ? o("WAWap").CUSTOM_STRING("status") : o("WAWap").DROP_ATTR
			});
		}
		v(N, "senderList");
		var q = await o("WAWebDBDeviceListFanout").getFanOutList({
			wids: [].concat(N, [D]),
			shouldMergeAltDevices: !0
		});
		o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["encryptAndSendStatusMsg: all device list size ", ""])), q.length), v(q, "deviceList after fanout");
		var U = await r("WAWebUserPrefsStatus").getStatusSkDistribList(q, { isFullAudience: M }), V = U.participantList, H = U.skDistribList;
		if (H.length > 0) {
			var G, z, j, K;
			o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["encryptAndSendStatusMsg: distribute ", " sender key"])), H.length), (G = h.sendReporter) == null || G.setMessageDistributionType(o("WAWebWamEnumMessageDistributionEnumType").MESSAGE_DISTRIBUTION_ENUM_TYPE.SENDER_KEY_DISTRIBUTION_MESSAGE), (z = h.sendReporter) == null || z.setSessionScope($), (j = h.sendReporter) == null || j.setDeviceCount(H.length), (K = h.sendPerfReporter) == null || K.setSenderKeyDistributionCount(H.length);
		}
		if (await o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(q.map(function(e) {
			return {
				msgKey: S,
				receiverId: e
			};
		})), o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["encryptAndSendStatusMsg: create receipts records"]))), H.length > 0) try {
			var Q, X;
			(Q = h.sendPerfReporter) == null || Q.startPrekeysFetchStage();
			var Y = await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
				identityChanged: !1,
				sessionScope: $,
				wids: H
			});
			(X = h.sendPerfReporter) == null || X.setFetchedPrekeyCount(Y == null ? void 0 : Y.missedPrekeyCount), o("WAWebPostPrekeysDepletionMetric").maybePostPrekeysDepletionMetric({
				count: Y == null ? void 0 : Y.depletedPrekeyCount,
				prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext").PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
				messageType: o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS,
				deviceSizeBucket: r("WAWebWamNumberToSizeBucket")(q.length)
			});
		} catch (e) {
			o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
				"encryptAndSendStatusMsg: ensureE2ESessions: failed for ",
				" devices: ",
				""
			])), H.length, e).tags("messaging");
		}
		(t = h.sendPerfReporter) == null || t.postPrekeysFetchStage(), (n = h.sendPerfReporter) == null || n.startClientEncryptStage();
		var J = await R(T, D, H, V, y, $), Z = J[0], ee = J[1], te = J[2];
		o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["encryptAndSendStatusMsg: encrypt message body done"])));
		var ne = await o("WAWebReportingTokenUtils").genReportingTokenBody(C.data, y), re = o("WAWap").wap("message", {
			id: o("WAWap").CUSTOM_STRING(S.id),
			to: o("WAWebCommsWapMd").CHAT_JID(T),
			type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(y),
			edit: o("WAWebSendMsgCommonApi").editAttribute(y, C.data.subtype)
		}, Z, ee, te, w, ne), oe = L(re);
		await o("WAWebSendMsgCommonApi").updateIdentityRange(C, q), await o("WAWebSignalProtocolStore").getSignalProtocolStore().flushBufferToDiskIfNotMemOnlyMode(), (a = h.sendPerfReporter) == null || a.postClientEncryptStage(), (i = h.sendPerfReporter) == null || i.startWrittenWireStage(), o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["encryptAndSendStatusMsg: start sending ", ""])), S.id), await o("WAWebDeprecatedSendIqWorkerCompatible").deprecatedSendStanzaAndReturnAck(re, o("WAWebCommsAckParser").toCoreAckTemplate({
			id: S.id,
			class: oe,
			from: T,
			participant: null
		})), (l = h.sendPerfReporter) == null || l.postWrittenWireStage(), await r("WAWebUserPrefsStatus").markStatusHasSenderKey(H);
	}
	async function R(e, t, n, r, a, i) {
		var l = o("WAWebSendMsgCommonApi").encodeAndPad(a), s = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(a), u = await o("WAWebSignal").Cipher.encryptSenderKeyMsgSignalProto(e, t, l), c = u.ciphertext, d = u.senderKeyBytes, m;
		o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
			"[session] genMessageBody: sessionScope=",
			" skDistribListLen=",
			""
		])), i, String(n.length)), n.length > 0 && (m = await o("WAWebGetGroupKeyDistributionMsg").getKeyDistributionMsg(null, e, n, d, !1, void 0, i));
		var p = [], _ = [], f = !1, g = null;
		m && m.length > 0 && (p = m.map(function(e) {
			var t = e.ciphertext, n = e.participant, r = e.type;
			return r === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg && (f = !0), o("WAWap").wap("to", { jid: o("WAWebCommsWapMd").DEVICE_JID(n) }, o("WAWap").wap("enc", {
				v: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString()),
				type: o("WAWap").CUSTOM_STRING(r)
			}, t));
		})), _ = r.map(function(e) {
			return o("WAWap").wap("to", { jid: o("WAWebCommsWapMd").USER_JID(e) });
		}), (_.length > 0 || p.length > 0) && (g = o("WAWap").wap("participants", null, p.concat(_)));
		var y = o("WAWap").wap("enc", {
			v: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString()),
			type: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobs.flow").CiphertextType.Skmsg),
			mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(s)
		}, c), C = null;
		if (f) {
			var b = await o("WAWebAdvSignatureApi").getADVEncodedIdentity();
			C = o("WAWap").wap("device-identity", null, b);
		}
		return [
			g,
			y,
			C
		];
	}
	function L(e) {
		if (o("WAWebStatusGatingUtils").isStatusStanzaSendEnabled()) {
			e.tag = "status";
			var t = Array.isArray(e.content) && e.content.some(function(e) {
				return e instanceof o("WAWap").WapNode && e.tag === "participants";
			});
			return t || delete e.attrs.device_fanout, "status";
		}
		return "message";
	}
	function E(e) {
		var t = e.protocolMessage, n = null;
		if ((t == null ? void 0 : t.type) === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE && t != null && t.key) {
			var a = t.key, i = a.id, l = a.participant, s = a.remoteJid;
			s != null && i != null && l != null && (n = new (r("WAWebMsgKey"))({
				remote: o("WAWebWidFactory").createWid(s),
				fromMe: !0,
				id: i,
				participant: o("WAWebWidFactory").createWid(l)
			}));
		}
		return n;
	}
	function k(e, t) {
		var n = new Set(t.map(function(e) {
			return o("WAWebWidFactory").asUserWidOrThrow(e).toString();
		}));
		return e.some(function(e) {
			return !o("WAWebUserPrefsMeUser").isMeAccount(e) && !n.has(o("WAWebWidFactory").asUserWidOrThrow(e).toString());
		});
	}
	async function I(e) {
		var t, n, r = e.deviceList, a = e.metricsReporter, i = e.msgProtobuf, l = e.sendMsgRecord, s = e.sessionScope, u = l.data.id, c = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID);
		o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
			"encryptAndSendStatusDirectMsg: send ",
			" to ",
			" device"
		])), u.id, r.length);
		var d = l.data.to, m = await o("WAWebSendMsgCreateFanoutStanza").createFanoutMsgStanza({
			chatId: d,
			deviceList: r,
			metricReporter: a,
			msgProtobuf: i,
			msgRecord: l,
			option: {
				fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT,
				sessionScope: s
			}
		}), p = m.stanza, _ = L(p);
		if (s === o("WAWebSessionScope").SessionScope.STATUS) {
			var f, g = (f = p.content) == null ? void 0 : f.find(function(e) {
				return e instanceof o("WAWap").WapNode && e.tag === "meta";
			});
			if (g instanceof o("WAWap").WapNode) g.attrs.session_scope = o("WAWap").CUSTOM_STRING("status");
			else {
				var h = new (o("WAWap")).WapNode("meta", { session_scope: o("WAWap").CUSTOM_STRING("status") }), b = p.content;
				p.content = Array.isArray(b) ? [].concat(b, [h]) : [h];
			}
		}
		await o("WAWebSignalProtocolStore").getSignalProtocolStore().flushBufferToDiskIfNotMemOnlyMode(), (t = a.sendPerfReporter) == null || t.startWrittenWireStage(), o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["encryptAndSendStatusDirectMsg: start sending ", ""])), u.id), await o("WAWebDeprecatedSendIqWorkerCompatible").deprecatedSendStanzaAndReturnAck(p, o("WAWebCommsAckParser").toCoreAckTemplate({
			id: u.id,
			class: _,
			from: c,
			participant: null
		})), (n = a.sendPerfReporter) == null || n.postWrittenWireStage();
	}
	l.calculateRevokeSenderList = b, l.encryptAndSendStatusMsg = S, l.genMessageBody = R, l.maybeApplyStatusTag = L, l.encryptAndSendStatusDirectMsg = I;
}), 98);

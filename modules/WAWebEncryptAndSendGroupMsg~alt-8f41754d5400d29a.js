__d("WAWebEncryptAndSendGroupMsg", [
	"WALogger",
	"WAWebApiParticipantStore",
	"WAWebE2EProtoGenerator",
	"WAWebGroupHistorySendGroupMsgJobUtils",
	"WAWebGroupMsgSendUtils",
	"WAWebLidMigrationUtils",
	"WAWebMsgKey",
	"WAWebMsgRcatUtils",
	"WAWebProtobufsE2E.pb",
	"WAWebSendGroupDirectJob",
	"WAWebSendGroupMsgJob",
	"WAWebSendGroupSkmsgJob",
	"WAWebSendMsgQueueMap",
	"WAWebWidFactory",
	"isStringNullOrEmpty"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c;
	function d(t) {
		var n, r = t.metricReporter, a = t.msgProtobuf, i = t.msgRecord, l = t.scheduledMsgMetadata, d = i.data, _ = d.id, g = d.to;
		return o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["encryptAndSendGroupMsg: queued ", ""])), _).tags("messaging"), (n = r.sendPerfReporter) == null || n.startWaitingToEncryptStage(), o("WAWebSendMsgQueueMap").sendMsgQueueMap.enqueue(g.toString(), async function() {
			var e, t, n, h, y, C;
			o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["encryptAndSendGroupMsg: sending ", ""])), _).tags("messaging"), (e = r.sendPerfReporter) == null || e.postWaitingToEncryptStage(), (t = r.sendPerfReporter) == null || t.startReadyToSendStage();
			var b = m(a), v = f(a), S = p(a), R = await o("WAWebGroupMsgSendUtils").getParticipantRecord(g.toString()), L = await o("WAWebGroupMsgSendUtils").getGroupData(g.toString(), R, i);
			(n = r.sendReporter) == null || n.setGroupData(L), (h = r.sendPerfReporter) == null || h.setGroupData(L);
			var E = (y = R == null ? void 0 : R.participants.map(function(e) {
				return o("WAWebWidFactory").createUserWidOrThrow(e);
			})) != null ? y : [], k = await o("WAWebMsgRcatUtils").genContentBindingForMsg(d, E), I = !!L.isLidAddressingMode, T;
			if (L.isCag === !0) {
				var D, x = !!L.amIAdmin;
				o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["encryptAndSendGroupMsg: CAG ", " "])), x ? "admin" : "non-admin").tags("messaging");
				var $ = a == null || (D = a.messageHistoryBundle) == null || (D = D.messageHistoryMetadata) == null ? void 0 : D.historyReceivers;
				if ($ != null && $.length > 0) {
					var P = await o("WAWebApiParticipantStore").getGroupSenderKeyListFromParticipantRecord(g, R), N = function(t) {
						return t.map(o("WAWebLidMigrationUtils").toAddressingModeFactory(I));
					}, M = await o("WAWebGroupHistorySendGroupMsgJobUtils").getGroupSendListForGroupHistoryBundle($.map(o("WAWebWidFactory").createWid), P, {
						normalizeAddressingModeFn: N,
						isLidAddressingMode: I
					});
					T = o("WAWebSendGroupMsgJob").filterIncorrectlyAddressedDevices(M, L);
				} else T = await o("WAWebSendGroupMsgJob").getCagMessageSendList({
					editedMsgKey: v,
					groupId: g,
					isAdmin: x,
					isLidAddressingMode: I,
					keptMessageKey: S,
					msgRecord: i,
					participantRecord: R,
					revokeMsgKey: b
				});
			} else {
				var w;
				o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
					"encryptAndSendGroupMsg: ",
					" group size: ",
					""
				])), o("WAWebGroupMsgSendUtils").formatGroupTypeForLog(L), R == null ? void 0 : R.participants.length).tags("messaging");
				var A = await o("WAWebSendGroupMsgJob").getMessageSendList(g, R, b, v, I, a == null || (w = a.messageHistoryBundle) == null || (w = w.messageHistoryMetadata) == null ? void 0 : w.historyReceivers);
				T = o("WAWebSendGroupMsgJob").filterIncorrectlyAddressedDevices(A, L);
			}
			var F = (L == null ? void 0 : L.isCapiGroup) === !0 ? o("WAWebE2EProtoGenerator").updateGroupMsgProtoWithCapiFlag(a) : a;
			if (T.type === o("WAWebSendGroupMsgJob").GROUP_MSG_TYPE.DIRECT) {
				var O, B, W = T, q = W.deviceList;
				return (O = r.sendReporter) == null || O.setDeviceCount(q.length), (B = r.sendPerfReporter) == null || B.setIsDirectedMessage(!0), o("WAWebSendGroupDirectJob").encryptAndSendGroupDirectMsg({
					deviceList: q,
					groupData: L,
					metricReporter: r,
					msgProtobuf: F,
					msgRecord: i,
					scheduledMsgMetadata: l
				});
			}
			var U = T, V = U.senderKeyList;
			return (C = r.sendReporter) == null || C.setDeviceCount(V.skList.length + V.skDistribList.length), o("WAWebSendGroupSkmsgJob").encryptAndSendSenderKeyMsg(i, F, V, L, r, k, l);
		});
	}
	function m(e) {
		var t = e.protocolMessage, n = null;
		if ((t == null ? void 0 : t.type) === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE && t != null && t.key) {
			var a = t.key, i = a.id, l = a.participant, s = a.remoteJid;
			!r("isStringNullOrEmpty")(s) && !r("isStringNullOrEmpty")(i) && !r("isStringNullOrEmpty")(l) && (n = new (r("WAWebMsgKey"))({
				remote: o("WAWebWidFactory").createWid(s),
				fromMe: !0,
				id: i,
				participant: o("WAWebWidFactory").createWid(l)
			}));
		}
		return n;
	}
	function p(e) {
		var t = e.keepInChatMessage;
		if (t != null && t.key) {
			var n = t.key, a = n.id, i = n.participant, l = n.remoteJid;
			if (!r("isStringNullOrEmpty")(l) && !r("isStringNullOrEmpty")(a) && !r("isStringNullOrEmpty")(i)) {
				var s = new (r("WAWebMsgKey"))({
					remote: o("WAWebWidFactory").createWid(l),
					fromMe: !0,
					id: a,
					participant: o("WAWebWidFactory").createWid(i)
				});
				return s;
			}
		}
		return null;
	}
	function _(e) {
		var t = e.id, n = e.participant, a = e.remoteJid;
		return r("isStringNullOrEmpty")(a) || r("isStringNullOrEmpty")(t) || r("isStringNullOrEmpty")(n) ? null : new (r("WAWebMsgKey"))({
			remote: o("WAWebWidFactory").createWid(a),
			fromMe: !0,
			id: t,
			participant: o("WAWebWidFactory").createWid(n)
		});
	}
	function f(e) {
		var t, n, r = e.protocolMessage, a = null;
		return (r == null ? void 0 : r.type) === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT && r != null && r.key ? a = _(r.key) : ((t = e.secretEncryptedMessage) == null ? void 0 : t.secretEncType) === o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType.MESSAGE_EDIT && ((n = e.secretEncryptedMessage) == null ? void 0 : n.targetMessageKey) != null && (a = _(e.secretEncryptedMessage.targetMessageKey)), a;
	}
	l.encryptAndSendGroupMsg = d;
}), 98);

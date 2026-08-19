__d("MAWSyncThreadDescriptionAdminMsg", [
	"ArmadilloDataTraceType",
	"MAWAckLevel",
	"MAWBridgeNewMsgHandler",
	"MAWBridgeStartTraceHandler",
	"MAWLocalizationType",
	"MAWMsgType",
	"MAWUserJidWrapper",
	"Promise",
	"WAJids",
	"WATimeUtils",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("WAJids").extractUserId(o("MAWUserJidWrapper").getMyUserJid());
	function u(t, a, i, l) {
		var s = l.externalId, u = l.msgId;
		return (e || (e = n("Promise"))).all([o("MAWBridgeStartTraceHandler").call(t, c(a, s, i)), o("MAWBridgeNewMsgHandler").call(t, d(a, s, u))]).then(r("emptyFunction"));
	}
	function c(e, t, n) {
		return {
			ack: o("MAWAckLevel").ACK.sent,
			externalId: t,
			isFirstMsg: !1,
			threadJid: e,
			threadKey: n,
			threadType: o("WAJids").switchOnMsgrChatJidType(e, {
				group: function(t) {
					return "Group";
				},
				user: function(t) {
					return "User";
				}
			}),
			traceType: o("ArmadilloDataTraceType").armadilloMessageSend,
			ts: o("WATimeUtils").castToUnixTime(0),
			type_: o("MAWMsgType").MSG_TYPE.ADMIN
		};
	}
	function d(e, t, n) {
		return {
			ack: o("MAWAckLevel").ACK.sent,
			adminContent: [],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.E2EE_THREAD_DESCRIPTION,
			adminVersion: 0,
			chatJid: e,
			externalId: t,
			forwardingScore: 0,
			isAdminMessage: !0,
			isAuthorMe: !1,
			isForwarded: !1,
			msgId: n,
			sender: s,
			sortOrderMs: 0,
			ts: o("WATimeUtils").castToUnixTime(0),
			type_: o("MAWMsgType").MSG_TYPE.ADMIN
		};
	}
	l.default = u;
}), 98);

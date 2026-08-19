__d("MAWBridgeThread", [
	"MAWTimeUtils",
	"WAJids",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, r, a) {
		var i = o("WAJids").switchOnMsgrChatJidType(e.jid, {
			group: function(t) {
				return !0;
			},
			user: function(t) {
				return !1;
			}
		});
		return {
			authoritativeThreadKey: n,
			cannotReplyReason: e.cannotReplyReason,
			clientThreadKey: t,
			description: r,
			folder: e.folder,
			instanceKey: a,
			isGroup: i,
			jid: e.jid,
			lastReadTs: o("MAWTimeUtils").ensureValidMillisTime(e.lastReadMsgTs) || o("WATimeUtils").castToMillisTime(0)
		};
	}
	l.createBridgeThread = e;
}), 98);

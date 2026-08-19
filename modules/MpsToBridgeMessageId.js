__d("MpsToBridgeMessageId", [
	"MAWJidUtils",
	"MpsTypes",
	"WAJids",
	"WAStanzaUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return o("MAWJidUtils").formatProtocolMsgIdFromExternalId(o("WAJids").unsafeCoerceToChatJid(e), o("WAStanzaUtils").toStanzaId(t));
	}
	function s(e) {
		var t = e.lastIndexOf("."), n = e.substring(0, t), r = e.substring(t + 1);
		return {
			messageId: o("MpsTypes").toMessageId(r),
			threadId: o("MpsTypes").toThreadId(n)
		};
	}
	l.mpsToBridgeMsgId = e, l.bridgeMsgIdToMps = s;
}), 98);

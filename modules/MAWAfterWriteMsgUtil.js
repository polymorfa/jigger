__d("MAWAfterWriteMsgUtil", [
	"ArmadilloDataTraceType",
	"MAWBridgeMsg",
	"MAWBridgeTrace",
	"MAWDbMsg",
	"MAWIndexedDb",
	"MAWXMAUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = e.dbMsg, n = e.isFirstMsg, r = e.openMessageOtid, a = e.openMessageParticipantCount, i = e.participantCount, l = e.quotedReplyAttachmentMeta, s = e.updatedThread, u = s.authoritativeThreadKey, c = s.jid;
		t.altIndex === o("MAWDbMsg").SPAM_ALT_INDEX || t.altIndex === o("MAWDbMsg").FUTUREPROOF_SPAM_ALT_INDEX || (o("MAWIndexedDb").afterTransaction({
			tag: "StartTrace",
			value: o("MAWBridgeTrace").createBridgeStartTraceData(t, c, o("ArmadilloDataTraceType").armadilloMessageSend, r, n, a, i, u)
		}), o("MAWXMAUtils").isXMAStoryReply(t.xmaMessageType) || o("MAWIndexedDb").afterTransaction({
			tag: "NewMsg",
			value: o("MAWBridgeMsg").createBridgeMsg(t, l)
		}));
	}
	l.writeMsgAfterTransaction = e;
}), 98);

__d("getReplyContentForNoteReply", ["WAJids"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		var n, r, a = e.author, i = e.msgId, l = o("WAJids").authorToUserId(a, t), s = (n = e.quote) == null || (n = n.content.msgContent) == null ? void 0 : n.content, u = (r = e.quote) == null ? void 0 : r.content.expirationTs;
		return {
			isNoteReply: !0,
			replyMediaExpirationTimestampMs: u != null ? u * 1e3 : void 0,
			replyMessageText: s,
			replySourceId: i,
			replyToUserId: l
		};
	}
	l.default = e;
}), 98);

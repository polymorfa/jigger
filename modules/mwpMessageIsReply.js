__d("mwpMessageIsReply", ["LSIntEnum", "LSMessageReplySourceTypeV2"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		return t.replySourceTypeV2 != null && (e || (e = o("LSIntEnum"))).toNumber(t.replySourceTypeV2) !== r("LSMessageReplySourceTypeV2").FORWARD;
	}
	l.default = s;
}), 98);

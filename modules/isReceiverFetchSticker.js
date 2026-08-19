__d("isReceiverFetchSticker", [
	"I64",
	"LSIntEnum",
	"MessagingAttachmentType"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t) {
		var n = t.attachmentType, a = (e || (e = o("I64"))).equal(n, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").STICKER)), i = t.receiverFetchId;
		return a && i != null;
	}
	l.default = u;
}), 98);

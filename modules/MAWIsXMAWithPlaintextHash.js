__d("MAWIsXMAWithPlaintextHash", [
	"I64",
	"LSIntEnum",
	"MessagingAttachmentType"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t) {
		return (e || (e = o("I64"))).equal(t.attachmentType, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").XMA)) ? ![
			t.xmaPreviewFbid,
			t.xmaHeaderImageFbid,
			t.xmaFaviconFbid
		].filter(Boolean).every(isFinite) : !1;
	}
	l.isXMAWithPlaintextHash = u;
}), 98);

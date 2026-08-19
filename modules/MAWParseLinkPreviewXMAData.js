__d("MAWParseLinkPreviewXMAData", [
	"E2EELinkPreviewXMADataStatus",
	"I64",
	"LSIntEnum"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t) {
		var n = t == null ? void 0 : t.status, a = t == null ? void 0 : t.data;
		if (t == null || n == null || a == null) return null;
		var i = (e || (e = o("I64"))).equal(n, (s || (s = o("LSIntEnum"))).ofNumber(r("E2EELinkPreviewXMADataStatus").DISABLED)), l = JSON.parse(a);
		return Object.keys(l).length === 0 || l.url == null || i ? null : l;
	}
	l.parseLinkPreviewXMAData = u;
}), 98);

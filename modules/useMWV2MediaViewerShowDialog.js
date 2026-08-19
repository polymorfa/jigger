__d("useMWV2MediaViewerShowDialog", [
	"JSResourceForInteraction",
	"MWV2MediaViewerFallback.react",
	"react",
	"react-compiler-runtime",
	"useMWXLazyDialog"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useEffect;
	function c(e) {
		return s.jsx(r("MWV2MediaViewerFallback.react"), { onClose: e });
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = o("react-compiler-runtime").c(8), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = r("JSResourceForInteraction")("MWV2MediaViewer.react").__setRef("useMWV2MediaViewerShowDialog"), t[0] = n) : n = t[0];
		var a = r("useMWXLazyDialog")(n, c), i = a[0], l = a[1], s, d;
		t[1] !== e || t[2] !== l ? (s = function() {
			e || l();
		}, d = [l, e], t[1] = e, t[2] = l, t[3] = s, t[4] = d) : (s = t[3], d = t[4]), u(s, d);
		var m;
		return t[5] !== l || t[6] !== i ? (m = [i, l], t[5] = l, t[6] = i, t[7] = m) : m = t[7], m;
	}
	l.default = d;
}), 98);

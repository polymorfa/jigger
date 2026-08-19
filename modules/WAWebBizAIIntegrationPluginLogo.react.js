__d("WAWebBizAIIntegrationPluginLogo.react", [
	"WDSIconIcGridView.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = { placeholder: {
		color: "xhslqc4",
		flexShrink: "x2lah0s",
		height: "xsdox4t",
		width: "x1useyqa",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(9), n = e.logoUri, a = e.testid, i = u(null), l = i[0], d = i[1], m = n != null && n !== l;
		if (m) {
			var p;
			t[0] !== n ? (p = function() {
				return d(n);
			}, t[0] = n, t[1] = p) : p = t[1];
			var _;
			t[2] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "xlr9sxt xvvg52n xwd4zgb xq8v1ta x2lah0s xsdox4t xl1xv1r x1useyqa" }, t[2] = _) : _ = t[2];
			var f;
			return t[3] !== n || t[4] !== p || t[5] !== a ? (f = s.jsx("img", babelHelpers.extends({
				alt: "",
				"data-testid": a,
				onError: p,
				src: n
			}, _)), t[3] = n, t[4] = p, t[5] = a, t[6] = f) : f = t[6], f;
		}
		var g = a + "-placeholder", h;
		return t[7] !== g ? (h = s.jsx(r("WDSIconIcGridView.react"), {
			iconXstyle: c.placeholder,
			testid: g
		}), t[7] = g, t[8] = h) : h = t[8], h;
	}
	l.default = d;
}), 98);

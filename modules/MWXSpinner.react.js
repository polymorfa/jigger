__d("MWXSpinner.react", [
	"fbt",
	"FDSProgressRingIndeterminate.react",
	"ScreenReaderText.react",
	"react",
	"react-compiler-runtime",
	"react-strict-dom"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(5), n = e.color, a = e.size, i = e.xstyle, l = n === "disabled_DEPRECATED" ? "dark" : n, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = u.jsx(r("ScreenReaderText.react"), { text: s._(
			/*BTDS*/
			""
		) }), t[0] = c) : c = t[0];
		var d;
		return t[1] !== l || t[2] !== a || t[3] !== i ? (d = u.jsxs(o("react-strict-dom").html.div, { children: [c, u.jsx(r("FDSProgressRingIndeterminate.react"), {
			color: l,
			isDecorative: !0,
			size: a,
			xstyle: i
		})] }), t[1] = l, t[2] = a, t[3] = i, t[4] = d) : d = t[4], d;
	}
	l.default = c;
}), 226);

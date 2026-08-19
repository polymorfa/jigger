__d("MWInboxSettingsDivider.react", [
	"MWVerticalRhythm",
	"react",
	"react-compiler-runtime",
	"react-strict-dom"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { divider: {
		backgroundColor: "x1kpc9vs",
		height: "xjm9jq1",
		$$css: !0
	} };
	function c(e) {
		var t = o("react-compiler-runtime").c(8), n = e.marginVertical, a = n, i = a != null ? a : 10, l;
		t[0] !== i ? (l = s.jsx(r("MWVerticalRhythm"), { height: i }), t[0] = i, t[1] = l) : l = t[1];
		var c;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (c = s.jsx(o("react-strict-dom").html.div, { style: u.divider }), t[2] = c) : c = t[2];
		var d;
		t[3] !== i ? (d = s.jsx(r("MWVerticalRhythm"), { height: i }), t[3] = i, t[4] = d) : d = t[4];
		var m;
		return t[5] !== l || t[6] !== d ? (m = s.jsxs(o("react-strict-dom").html.div, { children: [
			l,
			c,
			d
		] }), t[5] = l, t[6] = d, t[7] = m) : m = t[7], m;
	}
	l.default = c;
}), 98);

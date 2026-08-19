__d("WAWebDeveloperToolsDividerWithText.react", [
	"WAWebFlexBox.react",
	"WAWebText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { container: {
		textAlign: "x2b8uid",
		$$css: !0
	} };
	function c(e) {
		var t = o("react-compiler-runtime").c(6), n = e.text, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = s.jsx("div", { className: "x1q0q8m5 x1iyjqo2 xso031l xqf2s3x" }), t[0] = r) : r = t[0];
		var a;
		t[1] !== n ? (a = s.jsx(o("WAWebText.react").WAWebTextSmall, { children: n }), t[1] = n, t[2] = a) : a = t[2];
		var i;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (i = s.jsx("div", { className: "x1q0q8m5 x1iyjqo2 xso031l x150mmf0" }), t[3] = i) : i = t[3];
		var l;
		return t[4] !== a ? (l = s.jsxs(o("WAWebFlexBox.react").FlexRow, {
			align: "center",
			xstyle: u.container,
			children: [
				r,
				a,
				i
			]
		}), t[4] = a, t[5] = l) : l = t[5], l;
	}
	l.default = c;
}), 98);

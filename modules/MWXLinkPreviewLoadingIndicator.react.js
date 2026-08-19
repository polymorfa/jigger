__d("MWXLinkPreviewLoadingIndicator.react", [
	"MWXGlimmer.react",
	"MWXIconLink",
	"MWXIconStrict.react",
	"MWXText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { glimmer: {
		borderStartStartRadius: "x1obq294",
		borderStartEndRadius: "x5a5i1n",
		borderEndEndRadius: "xde0f50",
		borderEndStartRadius: "x15x8krk",
		height: "xng8ra",
		width: "xh8yej3",
		$$css: !0
	} };
	function c(e) {
		var t = o("react-compiler-runtime").c(5), n = e.title;
		if (n == null) return null;
		var a, i, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "x6s0dn4 x1amjocr x78zum5 x1q0g3np x5yr21d x1xnnf8n x106a9eq" }, i = s.jsx(r("MWXIconStrict.react"), {
			color: "secondary",
			icon: r("MWXIconLink"),
			size: 16
		}), l = { className: "x1iyjqo2" }, t[0] = a, t[1] = i, t[2] = l) : (a = t[0], i = t[1], l = t[2]);
		var c;
		return t[3] !== n ? (c = s.jsx(r("MWXGlimmer.react"), {
			index: 0,
			xstyle: u.glimmer,
			children: s.jsxs("div", babelHelpers.extends({}, a, { children: [i, s.jsx("div", babelHelpers.extends({}, l, { children: s.jsx(r("MWXText.react"), {
				type: "body4",
				children: n
			}) }))] }))
		}), t[3] = n, t[4] = c) : c = t[4], c;
	}
	l.default = c;
}), 98);

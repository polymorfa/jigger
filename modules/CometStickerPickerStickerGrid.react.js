__d("CometStickerPickerStickerGrid.react", [
	"BaseFlexibleGrid.react",
	"CometPickerScrollableArea.react",
	"CometStickerPickerNullState.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { root: {
		marginTop: "x1xmf6yo",
		marginInlineEnd: "x1xegmmw",
		marginBottom: "x1e56ztr",
		marginInlineStart: "x13fj5qh",
		$$css: !0
	} };
	function c(e) {
		var t = o("react-compiler-runtime").c(11), n = e.children, a = e.notExpanding, i = e.onScrollBottom, l = e.scrollKey, c = e.testid, d = e.upsell, m = a === void 0 ? !1 : a;
		if (n.length == null || n.length === 0) {
			var p;
			return t[0] !== m ? (p = s.jsx(r("CometStickerPickerNullState.react"), { notExpanding: m }), t[0] = m, t[1] = p) : p = t[1], p;
		}
		var _ = !m, f;
		t[2] !== n ? (f = s.jsx(r("BaseFlexibleGrid.react"), {
			columnMaxWidth: "25%",
			columnMinWidth: "25%",
			minItems: n.length,
			xstyle: u.root,
			children: n
		}), t[2] = n, t[3] = f) : f = t[3];
		var g;
		return t[4] !== i || t[5] !== l || t[6] !== _ || t[7] !== f || t[8] !== c || t[9] !== d ? (g = s.jsxs(r("CometPickerScrollableArea.react"), {
			expanding: _,
			horizontal: !1,
			onScrollBottom: i,
			scrollKey: l,
			testid: void 0,
			children: [d, f]
		}), t[4] = i, t[5] = l, t[6] = _, t[7] = f, t[8] = c, t[9] = d, t[10] = g) : g = t[10], g;
	}
	l.default = c;
}), 98);

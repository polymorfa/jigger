__d("WAWebDeveloperToolNub.react", [
	"WAWebUnstyledButton.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		paddingInline5: {
			paddingInlineStart: "xaso8d8",
			paddingInlineEnd: "x1gabggj",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		paddingTop3: {
			paddingTop: "xyqdw3p",
			$$css: !0
		}
	}, c = { button: {
		borderStartStartRadius: "x1c9tyrk",
		borderStartEndRadius: "xeusxvb",
		borderEndEndRadius: "x1pahc9y",
		borderEndStartRadius: "x1ertn4p",
		width: "xq14iec",
		":hover_backgroundColor": "x1ubxc9n",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(7), n = e.icon, a = e.onClick, i = e.ref, l = e.testID, d = e.title, m;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = [
			c.button,
			u.paddingInline5,
			u.paddingTop3,
			o("WDSPaddings.stylex").wdsPaddings.paddingBottom4
		], t[0] = m) : m = t[0];
		var p;
		return t[1] !== n || t[2] !== a || t[3] !== i || t[4] !== l || t[5] !== d ? (p = s.jsx(r("WAWebUnstyledButton.react"), {
			ref: i,
			title: d,
			xstyle: m,
			onClick: a,
			tabIndex: -1,
			testid: l,
			children: n
		}), t[1] = n, t[2] = a, t[3] = i, t[4] = l, t[5] = d, t[6] = p) : p = t[6], p;
	}
	l.default = d;
}), 98);

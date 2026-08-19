__d("FDSDialogSection.react", [
	"BaseHeading.react",
	"FDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		headline: {
			paddingTop: "x889kno",
			paddingBottom: "x1a8lsjc",
			$$css: !0
		},
		headlineWithHorizontalPadding: {
			paddingTop: "x889kno",
			paddingInlineEnd: "x2vl965",
			paddingBottom: "x1a8lsjc",
			paddingInlineStart: "xe2zdcy",
			$$css: !0
		}
	};
	function c(e) {
		var t = o("react-compiler-runtime").c(10), n = e.align, a = e.children, i = e.headline, l = e.headlineWithHorizontalPadding, c = e.withBottomSeparator, d = n === void 0 ? "start" : n, m = l === void 0 ? !0 : l, p = c === void 0 ? !1 : c, _;
		t[0] !== d || t[1] !== i || t[2] !== m ? (_ = i != null && s.jsx(r("BaseHeading.react"), {
			xstyle: [u.headline, m && u.headlineWithHorizontalPadding],
			children: s.jsx(r("FDSText.react"), {
				align: d,
				type: "headlineEmphasized2",
				children: i
			})
		}), t[0] = d, t[1] = i, t[2] = m, t[3] = _) : _ = t[3];
		var f;
		t[4] !== p ? (f = p ? s.jsx("hr", { className: "x1kpc9vs xjm9jq1 x1anpbxc xyorhqc" }) : null, t[4] = p, t[5] = f) : f = t[5];
		var g;
		return t[6] !== a || t[7] !== _ || t[8] !== f ? (g = s.jsxs(s.Fragment, { children: [
			_,
			a,
			f
		] }), t[6] = a, t[7] = _, t[8] = f, t[9] = g) : g = t[9], g;
	}
	l.default = c;
}), 98);

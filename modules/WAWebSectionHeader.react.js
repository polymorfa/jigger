__d("WAWebSectionHeader.react", [
	"WAWebStylesEnv",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = {
		container: {
			boxSizing: "x9f619",
			height: "x1cccnhj",
			paddingTop: "x9orja2",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x1995gp2",
			paddingInlineStart: "xzm8p2n",
			$$css: !0
		},
		uppercase: {
			textTransform: "xtvhhri",
			$$css: !0
		},
		transparent: {
			backgroundColor: "xjbqb8w",
			$$css: !0
		},
		fontAliasing: {
			WebkitFontSmoothing: "xvmahel",
			MozOsxFontSmoothing: "xlh3980",
			$$css: !0
		}
	};
	function d(t) {
		var n = o("react-compiler-runtime").c(10), a = t.header, i = t.isTransparent, l = t.testid, s = t.uppercase, d = t.xstyle, m = i === void 0 ? !1 : i, p = s === void 0 ? !1 : s, _ = l != null ? l : "section-header", f;
		n[0] !== m || n[1] !== p || n[2] !== d ? (f = (e || (e = r("stylex"))).props(c.container, p && c.uppercase, m && c.transparent, o("WAWebStylesEnv").isOSMac && c.fontAliasing, d), n[0] = m, n[1] = p, n[2] = d, n[3] = f) : f = n[3];
		var g;
		n[4] !== a ? (g = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: a
		}), n[4] = a, n[5] = g) : g = n[5];
		var h;
		return n[6] !== _ || n[7] !== f || n[8] !== g ? (h = u.jsx("div", babelHelpers.extends({ "data-testid": _ }, f, { children: g })), n[6] = _, n[7] = f, n[8] = g, n[9] = h) : h = n[9], h;
	}
	l.default = d;
}), 98);

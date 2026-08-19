__d("WAWebSectionHeader.react", [
	"WAWebStylesEnv",
	"WDSText.react",
	"react",
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
		var n = t.header, a = t.isTransparent, i = a === void 0 ? !1 : a, l = t.testid, s = t.uppercase, d = s === void 0 ? !1 : s, m = t.xstyle;
		return u.jsx("div", babelHelpers.extends({ "data-testid": l != null ? l : "section-header" }, (e || (e = r("stylex"))).props(c.container, d && c.uppercase, i && c.transparent, o("WAWebStylesEnv").isOSMac && c.fontAliasing, m), { children: u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: n
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

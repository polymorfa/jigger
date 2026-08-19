__d("WAWebGroupInfoSeparator.react", [
	"WAWebDrawerSectionAnimation.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = { paddingBlock10: {
		paddingTop: "x889kno",
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} }, d = { separator: {
		background: "xsm26vf",
		$$css: !0
	} };
	function m(t) {
		var n = t.animation, a = n === void 0 ? !0 : n, i = t.padding, l = i === void 0 ? !0 : i, s = t.transparentBackground, m = s === void 0 ? !1 : s;
		return u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
			a && o("WAWebDrawerSectionAnimation.stylex").animateStyle.animate,
			!m && d.separator,
			l && o("WDSPaddings.stylex").wdsPaddings.paddingHor20,
			c.paddingBlock10
		]), { children: u.jsx("div", { className: "xh8yej3 xjm9jq1 x2ed6v8" }) }));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);

__d("WAWebGroupInfoSeparator.react", [
	"WAWebDrawerSectionAnimation.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(7), a = t.animation, i = t.padding, l = t.transparentBackground, s = a === void 0 ? !0 : a, m = i === void 0 ? !0 : i, p = l === void 0 ? !1 : l, _;
		n[0] !== s || n[1] !== m || n[2] !== p ? (_ = (e || (e = r("stylex"))).props([
			s && o("WAWebDrawerSectionAnimation.stylex").animateStyle.animate,
			!p && d.separator,
			m && o("WDSPaddings.stylex").wdsPaddings.paddingHor20,
			c.paddingBlock10
		]), n[0] = s, n[1] = m, n[2] = p, n[3] = _) : _ = n[3];
		var f;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (f = u.jsx("div", { className: "xh8yej3 xjm9jq1 x2ed6v8" }), n[4] = f) : f = n[4];
		var g;
		return n[5] !== _ ? (g = u.jsx("div", babelHelpers.extends({}, _, { children: f })), n[5] = _, n[6] = g) : g = n[6], g;
	}
	l.default = m;
}), 98);

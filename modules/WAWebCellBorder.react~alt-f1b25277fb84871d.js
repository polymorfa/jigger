__d("WAWebCellBorder.react", [
	"WDSMargins.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = { border: {
		boxSizing: "x9f619",
		height: "xjm9jq1",
		marginInlineStart: "xdln39a",
		backgroundColor: "x3x0x6p",
		$$css: !0
	} };
	function d(t) {
		var n = t.noMargin, a = n === void 0 ? !1 : n;
		return u.jsx("div", {
			className: "xh8yej3 x1280gxy",
			children: u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.border, a && o("WDSMargins.stylex").wdsMargins.marginStart0)))
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

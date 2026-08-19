__d("WAWebSvgButton.react", [
	"WAWebUnstyledButton.react",
	"WDSFocusStateStyles",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s = [
		"Icon",
		"aria-expanded",
		"aria-haspopup",
		"aria-label",
		"dataTab",
		"disabled",
		"onClick",
		"tabIndex",
		"testid",
		"title",
		"type",
		"xstyle"
	], u, c = u || (u = o("react")), d = { disabled: {
		opacity: "x5dmra7",
		$$css: !0
	} };
	function m(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.Icon, l = a["aria-expanded"], u = a["aria-haspopup"], m = a["aria-label"], p = a.dataTab, _ = a.disabled, f = a.onClick, g = a.tabIndex, h = a.testid, y = a.title, C = a.type, b = a.xstyle, v = babelHelpers.objectWithoutPropertiesLoose(a, s);
		return c.jsx(r("WAWebUnstyledButton.react"), {
			ref: n,
			xstyle: [b, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus],
			disabled: _,
			onClick: f,
			"aria-label": m,
			"aria-haspopup": u,
			"aria-expanded": l,
			title: y,
			dataTab: p,
			type: C,
			testid: h,
			tabIndex: g,
			children: c.jsx(i, babelHelpers.extends({}, v, { xstyle: _ === !0 && d.disabled }))
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);

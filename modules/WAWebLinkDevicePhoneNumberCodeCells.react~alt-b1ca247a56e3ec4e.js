__d("WAWebLinkDevicePhoneNumberCodeCells.react", [
	"WAWebFlex.react",
	"WDSMargins.stylex",
	"WDSThemes",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { paddingBlock13: {
		paddingTop: "x1d0ri9u",
		paddingBottom: "x1ug4tga",
		$$css: !0
	} }, c = { codeCellWrapper: {
		display: "x78zum5",
		width: "x10h3iyq",
		backgroundColor: "x12peec7",
		borderTopWidth: "x178xt8z",
		borderInlineEndWidth: "x1lun4ml",
		borderBottomWidth: "xso031l",
		borderInlineStartWidth: "xpilrb4",
		borderTopStyle: "x13fuv20",
		borderInlineEndStyle: "x18b5jzi",
		borderBottomStyle: "x1q0q8m5",
		borderInlineStartStyle: "x1t7ytsu",
		borderTopColor: "xjy2p9t",
		borderInlineEndColor: "x1fx38ez",
		borderBottomColor: "x1btvpib",
		borderInlineStartColor: "x1mpe3fn",
		borderStartStartRadius: "xyi3aci",
		borderStartEndRadius: "xwf5gio",
		borderEndEndRadius: "x1p453bz",
		borderEndStartRadius: "x1suzm8a",
		$$css: !0
	} };
	function d(e) {
		var t = e["aria-details"], n = e.code, r = String(n).split(""), a = r.slice(0, 4), i = r.slice(4);
		return s.jsx("div", {
			"aria-details": t,
			"data-testid": "link-with-phone-number-code-cells",
			"data-link-code": r,
			children: s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				className: "light",
				xstyle: o("WDSThemes").WDSLightTheme,
				children: [
					a.map(function(e, t) {
						return s.jsx(m, { content: e }, t + ":" + e);
					}),
					s.jsx("span", {
						className: "x2b8uid xk50ysn x579bpy x1pha01r xyqdw3p x1im30kd xg8j3zb x1djpfga",
						"aria-hidden": "true",
						children: "-"
					}),
					i.map(function(e, t) {
						return s.jsx(m, { content: e }, t + 4 + ":" + e);
					})
				]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.content;
		return s.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: [
				c.codeCellWrapper,
				o("WDSMargins.stylex").wdsMargins.marginHor4,
				u.paddingBlock13
			],
			children: s.jsx("span", {
				className: "x2b8uid xk50ysn x1aueamr x1jzgpr8 x1pha01r",
				children: t
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = d;
}), 98);

__d("WAWebLinkDevicePhoneNumberCodeCells.react", [
	"WAWebFlex.react",
	"WDSMargins.stylex",
	"WDSThemes",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(28), n = e["aria-details"], r = e.code, a, i, l, u, c, d, _, f, g, h, y;
		if (t[0] !== n || t[1] !== r) {
			var C = String(r).split(""), b = C.slice(0, 4), v = C.slice(4);
			h = n, y = "link-with-phone-number-code-cells", l = C, a = o("WAWebFlex.react").FlexRow, i = "center", u = "center", c = "light", d = o("WDSThemes").WDSLightTheme, _ = b.map(p), t[13] === Symbol.for("react.memo_cache_sentinel") ? (f = s.jsx("span", {
				className: "x2b8uid xk50ysn x579bpy x1pha01r xyqdw3p x1im30kd xg8j3zb x1djpfga",
				"aria-hidden": "true",
				children: "-"
			}), t[13] = f) : f = t[13], g = v.map(m), t[0] = n, t[1] = r, t[2] = a, t[3] = i, t[4] = l, t[5] = u, t[6] = c, t[7] = d, t[8] = _, t[9] = f, t[10] = g, t[11] = h, t[12] = y;
		} else a = t[2], i = t[3], l = t[4], u = t[5], c = t[6], d = t[7], _ = t[8], f = t[9], g = t[10], h = t[11], y = t[12];
		var S;
		t[14] !== a || t[15] !== i || t[16] !== u || t[17] !== c || t[18] !== d || t[19] !== _ || t[20] !== f || t[21] !== g ? (S = s.jsxs(a, {
			align: i,
			justify: u,
			className: c,
			xstyle: d,
			children: [
				_,
				f,
				g
			]
		}), t[14] = a, t[15] = i, t[16] = u, t[17] = c, t[18] = d, t[19] = _, t[20] = f, t[21] = g, t[22] = S) : S = t[22];
		var R;
		return t[23] !== l || t[24] !== S || t[25] !== h || t[26] !== y ? (R = s.jsx("div", {
			"aria-details": h,
			"data-testid": y,
			"data-link-code": l,
			children: S
		}), t[23] = l, t[24] = S, t[25] = h, t[26] = y, t[27] = R) : R = t[27], R;
	}
	function m(e, t) {
		return s.jsx(_, { content: e }, t + 4 + ":" + e);
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e, t) {
		return s.jsx(_, { content: e }, t + ":" + e);
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = o("react-compiler-runtime").c(4), n = e.content, r, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = [
			c.codeCellWrapper,
			o("WDSMargins.stylex").wdsMargins.marginHor4,
			u.paddingBlock13
		], a = { className: "x2b8uid xk50ysn x1aueamr x1jzgpr8 x1pha01r" }, t[0] = r, t[1] = a) : (r = t[0], a = t[1]);
		var i;
		return t[2] !== n ? (i = s.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: r,
			children: s.jsx("span", babelHelpers.extends({}, a, { children: n }))
		}), t[2] = n, t[3] = i) : i = t[3], i;
	}
	l.default = d;
}), 98);

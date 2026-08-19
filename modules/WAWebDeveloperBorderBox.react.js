__d("WAWebDeveloperBorderBox.react", [
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = {
		borderBox: {
			height: "x5yr21d",
			width: "xh8yej3",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x1ktv7sr",
			borderInlineEndWidth: "x142x0oa",
			borderBottomWidth: "xv7zg05",
			borderInlineStartWidth: "x12dgle5",
			overflowX: "xw2csxc",
			overflowY: "x1odjw0f",
			$$css: !0
		},
		flex: {
			display: "x78zum5",
			$$css: !0
		},
		centerY: {
			alignItems: "x6s0dn4",
			$$css: !0
		},
		centerX: {
			justifyContent: "xl56j7k",
			$$css: !0
		},
		spaceApart: {
			justifyContent: "x1qughib",
			$$css: !0
		}
	};
	function d(t) {
		var n = o("react-compiler-runtime").c(9), a = t.centerX, i = t.centerY, l = t.children, s = t.flex, d = t.spaceApart, m = t.xstyle, p = a === void 0 ? !1 : a, _ = i === void 0 ? !1 : i, f = s === void 0 ? !1 : s, g = d === void 0 ? !1 : d, h = m === void 0 ? null : m, y;
		n[0] !== p || n[1] !== _ || n[2] !== f || n[3] !== g || n[4] !== h ? (y = (e || (e = r("stylex"))).props(c.borderBox, f && c.flex, p && c.centerX, _ && c.centerY, g && c.spaceApart, h != null && h), n[0] = p, n[1] = _, n[2] = f, n[3] = g, n[4] = h, n[5] = y) : y = n[5];
		var C;
		return n[6] !== l || n[7] !== y ? (C = u.jsx("div", babelHelpers.extends({}, y, { children: l })), n[6] = l, n[7] = y, n[8] = C) : C = n[8], C;
	}
	l.default = d;
}), 98);

__d("WAWebDeveloperBorderBox.react", ["react", "stylex"], (function(t, n, r, o, a, i, l) {
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
		var n = t.centerX, o = n === void 0 ? !1 : n, a = t.centerY, i = a === void 0 ? !1 : a, l = t.children, s = t.flex, d = s === void 0 ? !1 : s, m = t.spaceApart, p = m === void 0 ? !1 : m, _ = t.xstyle, f = _ === void 0 ? null : _;
		return u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.borderBox, d && c.flex, o && c.centerX, i && c.centerY, p && c.spaceApart, f != null && f), { children: l }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

__d("WDSBadge.react", [
	"BaseBadge.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = "x1fal1dg-B", c = {
		defaultColor: {
			backgroundColor: "xyp3urf",
			$$css: !0
		},
		destructiveColor: {
			backgroundColor: "xk0ssx3",
			$$css: !0
		},
		dotDefault: {
			height: "x1qx5ct2",
			width: "xw4jnvo",
			$$css: !0
		},
		dotSmall: {
			height: "x1kpxq89",
			width: "xsmyaan",
			$$css: !0
		},
		dotDefaultBorder: {
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "xamhcws",
			borderInlineEndWidth: "x1alpsbp",
			borderBottomWidth: "xlxy82",
			borderInlineStartWidth: "xyumdvf",
			height: "xxk0z11",
			width: "xvy4d1p",
			$$css: !0
		},
		dotSmallBorder: {
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "xamhcws",
			borderInlineEndWidth: "x1alpsbp",
			borderBottomWidth: "xlxy82",
			borderInlineStartWidth: "xyumdvf",
			height: "x1kpxq89",
			width: "xsmyaan",
			$$css: !0
		},
		numbered: {
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			height: "xxk0z11",
			minWidth: "xnei2rj",
			paddingInlineStart: "x181vq82",
			paddingInlineEnd: "x1uc92m",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		numberedSmall: {
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			height: "xlup9mm",
			minWidth: "x15kz4h8",
			paddingInlineStart: "x181vq82",
			paddingInlineEnd: "x1uc92m",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		numberedBorder: {
			height: "x1qx5ct2",
			minWidth: "xt4ypqs",
			boxSizing: "x1afcbsf",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x1ktv7sr",
			borderInlineEndWidth: "x142x0oa",
			borderBottomWidth: "xv7zg05",
			borderInlineStartWidth: "x12dgle5",
			paddingTop: "x1gxa6cn",
			paddingInlineEnd: "x1j8ymqv",
			paddingBottom: "xa0aww2",
			paddingInlineStart: "x4tra6z",
			$$css: !0
		},
		numberedBorderSmall: {
			height: "xlup9mm",
			minWidth: "x15kz4h8",
			boxSizing: "x1afcbsf",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x1ktv7sr",
			borderInlineEndWidth: "x142x0oa",
			borderBottomWidth: "xv7zg05",
			borderInlineStartWidth: "x12dgle5",
			paddingTop: "x1gxa6cn",
			paddingInlineEnd: "x1j8ymqv",
			paddingBottom: "xa0aww2",
			paddingInlineStart: "x4tra6z",
			$$css: !0
		},
		pulsingIndicator: {
			animationName: "xnyknk1",
			animationDuration: "x1c74tu6",
			animationIterationCount: "xa4qsjk",
			"@media (prefers-reduced-motion: reduce)_animationName": "x1aquc0h",
			$$css: !0
		},
		pulsingBorderSmall: {
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			height: "xdk7pt",
			width: "x1xc55vz",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.accessibilityText, n = e.border, o = n === void 0 ? !1 : n, a = e.count, i = e.pulse, l = i === void 0 ? !1 : i, u = e.size, d = u === void 0 ? "default" : u, m = e.testid, p = e.type, _ = p === void 0 ? "default" : p, f = typeof a == "number" ? a : null, g = a != null && (f == null || f > 0), h;
		d === "small" && g ? h = o ? c.numberedBorderSmall : c.numberedSmall : g ? h = o ? c.numberedBorder : c.numbered : d === "small" ? h = o ? c.dotSmallBorder : c.dotSmall : h = o ? c.dotDefaultBorder : c.dotDefault;
		var y = _ === "default" ? c.defaultColor : _ === "destructive" ? c.destructiveColor : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + _);
		})(), C = a;
		return f != null && f <= 0 ? C = null : f != null && f > 999 ? C = "999+" : f != null && (C = String(f)), s.jsx(r("BaseBadge.react"), {
			accessibilityText: t,
			role: "status",
			testid: void 0,
			xstyle: [
				y,
				h,
				l && c.pulsingIndicator,
				l && o && d === "small" && c.pulsingBorderSmall
			],
			children: C != null ? s.jsx(r("WDSText.react"), {
				type: "Body3Emphasized",
				colorName: "contentOnAccent",
				children: C
			}) : null
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

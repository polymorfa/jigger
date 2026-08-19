__d("WDSNativeImagePlaceholder.react", [
	"fbt",
	"WDSNativeFlowsIcon.react",
	"WDSNativeGlimmer.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		iconColour: {
			backgroundColor: "x1518k6t",
			opacity: "x197sbye",
			$$css: !0
		},
		iconRefreshColour: {
			backgroundColor: "x1518k6t",
			opacity: "x197sbye",
			$$css: !0
		},
		placeholderIcon: {
			width: "xxea1mb",
			height: "x1b3re4j",
			$$css: !0
		},
		placeholderIconSmallPreview: {
			width: "xp8d6y2",
			height: "xam5rvr",
			$$css: !0
		},
		errorIcon: {
			width: "x1ogswks",
			height: "x1c7bh76",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.enableImageImprovements, n = t === void 0 ? !1 : t, o = e.isInvalidImage, a = o === void 0 ? !1 : o, i = e.isItemUnavailable, l = i === void 0 ? !1 : i, c = e.isLoading, d = c === void 0 ? !1 : c, p = e.isSmallPreview, _ = p === void 0 ? !1 : p, f = e.platform, g = f === void 0 ? "ios" : f;
		return u.jsx("div", babelHelpers.extends({}, {
			0: { className: "x1gkzix5 x78zum5 x5yr21d xh8yej3 xl56j7k x6s0dn4" },
			1: { className: "x78zum5 x5yr21d xh8yej3 xl56j7k x6s0dn4 x1gkzix5" }
		}[!!n << 0], {
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: n && d && _ ? u.jsx(r("WDSNativeGlimmer.react"), {}) : u.jsx(m, {
				platform: g,
				isInvalidImage: a,
				isItemUnavailable: l,
				isSmallPreview: _,
				enableImageImprovements: n
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.enableImageImprovements, n = t === void 0 ? !1 : t, r = e.isInvalidImage, a = r === void 0 ? !1 : r, i = e.isItemUnavailable, l = i === void 0 ? !1 : i, d = e.isSmallPreview, m = d === void 0 ? !1 : d, p = e.platform, _ = p === void 0 ? "ios" : p, f = n && m ? c.placeholderIconSmallPreview : null;
		return a ? u.jsx(o("WDSNativeFlowsIcon.react").WDSNativeFlowsIcon, {
			platform: _,
			altText: s._(
				/*BTDS*/
				""
			),
			id: n ? "waf_error_refresh" : "waf_error",
			xstyle: [
				c.errorIcon,
				n ? c.iconRefreshColour : c.iconColour,
				f
			]
		}) : l && n ? u.jsx(o("WDSNativeFlowsIcon.react").WDSNativeFlowsIcon, {
			platform: _,
			altText: s._(
				/*BTDS*/
				""
			),
			id: "waf_unavailable",
			xstyle: [
				c.placeholderIcon,
				c.iconRefreshColour,
				f
			]
		}) : u.jsx(o("WDSNativeFlowsIcon.react").WDSNativeFlowsIcon, {
			platform: _,
			altText: s._(
				/*BTDS*/
				""
			),
			id: "waf_img_placeholder",
			xstyle: [
				c.placeholderIcon,
				n ? c.iconRefreshColour : c.iconColour,
				f
			]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = d;
}), 226);

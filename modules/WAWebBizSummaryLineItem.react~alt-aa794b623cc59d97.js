__d("WAWebBizSummaryLineItem.react", [
	"WAWebFlex.react",
	"WDSText.react",
	"react",
	"useWAWebHover"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useRef;
	function c(e) {
		var t = e.colorName, n = t === void 0 ? "contentDefault" : t, a = e.isBolded, i = a === void 0 ? !1 : a, l = e.label, c = e.labelAccessory, d = e.showAccessoryOnHover, m = d === void 0 ? !0 : d, p = e.testid, _ = e.value, f = e.valueAccessory, g = c != null && m, h = u(null), y = o("useWAWebHover").useWAWebHover(h);
		return s.jsx("div", {
			ref: h,
			children: s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "all",
				testid: p,
				children: [s.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					gap: 4,
					children: [s.jsx(r("WDSText.react"), {
						type: i ? "Body2Emphasized" : "Body2",
						colorName: n,
						children: l
					}), c != null && s.jsx("span", babelHelpers.extends({}, {
						0: { className: "x3nfvp2 xx6bhzk x19991ni" },
						1: { className: "x3nfvp2 xx6bhzk x19991ni xg01cxk" }
					}[!!(g && !y) << 0], { children: c }))]
				}), _ != null && s.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					gap: 4,
					children: [s.jsx(r("WDSText.react"), {
						type: i ? "Body2Emphasized" : "Body2",
						colorName: n,
						children: _
					}), f]
				})]
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);

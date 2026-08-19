__d("WAWebBizCard.react", [
	"WAWebBizErrorBoundary.react",
	"WAWebBizGenericErrorCard.react",
	"WAWebBizSectionDivider.react",
	"WAWebBizShimmerRows.react",
	"WAWebFlex.react",
	"WDSText.react",
	"react",
	"useWAWebHover"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.Suspense, d = u.useRef, m = {
		content: {
			rowGap: "x8a3fw1",
			width: "xh8yej3",
			$$css: !0
		},
		header: {
			alignItems: "x6s0dn4",
			columnGap: "x1s70e7g",
			justifyContent: "x1qughib",
			width: "xh8yej3",
			$$css: !0
		},
		headerContent: {
			rowGap: "x1b73lln",
			$$css: !0
		},
		titleRow: {
			columnGap: "x1trrmfo",
			$$css: !0
		}
	};
	function p(e) {
		var t = e.children, n = e.ctaButton, a = e.fallback, i = e.header, l = e.headerTestid, u = e.showAccessoryOnHover, p = u === void 0 ? !0 : u, _ = e.subtitle, f = e.subtitleTestid, g = e.testid, h = e.tip, y = e.titleAccessory, C = y != null && p, b = d(null), v = o("useWAWebHover").useWAWebHover(b);
		return s.jsx("div", {
			ref: b,
			className: "xqjyukv x1280gxy xlr9sxt xvvg52n xwd4zgb xq8v1ta x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
			"data-testid": g != null ? g : void 0,
			children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: m.content,
				align: "stretch",
				children: [s.jsxs(o("WAWebFlex.react").FlexRow, {
					xstyle: m.header,
					children: [s.jsxs(o("WAWebFlex.react").FlexColumn, {
						xstyle: m.headerContent,
						children: [s.jsxs(o("WAWebFlex.react").FlexRow, {
							xstyle: m.titleRow,
							align: "center",
							children: [s.jsx(r("WAWebBizSectionDivider.react"), {
								title: i,
								tip: h,
								testid: l
							}), y != null && s.jsx("span", babelHelpers.extends({}, {
								0: { className: "x3nfvp2 xx6bhzk x19991ni" },
								1: { className: "x3nfvp2 xx6bhzk x19991ni xg01cxk" }
							}[!!(C && !v) << 0], { children: y }))]
						}), _ != null && s.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							testid: f != null ? f : void 0,
							children: _
						})]
					}), n != null && s.jsx("div", {
						className: "x2lah0s",
						children: n
					})]
				}), s.jsx(r("WAWebBizErrorBoundary.react"), {
					name: i.toString(),
					fallback: s.jsx(r("WAWebBizGenericErrorCard.react"), {}),
					children: s.jsx(c, {
						fallback: a != null ? a : s.jsx(r("WAWebBizShimmerRows.react"), {
							count: 3,
							height: 16
						}),
						children: t
					})
				})]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);

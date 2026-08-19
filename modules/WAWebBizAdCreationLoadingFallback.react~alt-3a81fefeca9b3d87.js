__d("WAWebBizAdCreationLoadingFallback.react", [
	"WAWebBaseShimmerComponents.react",
	"WAWebBizTwoColumnLayout.react",
	"WAWebDivider.react",
	"WAWebFlexBox.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		audience: {
			minHeight: "x1q45rg8",
			$$css: !0
		},
		card: {
			alignContent: "xqjyukv",
			backgroundColor: "x1280gxy",
			borderStartStartRadius: "xlr9sxt",
			borderStartEndRadius: "xvvg52n",
			borderEndEndRadius: "xwd4zgb",
			borderEndStartRadius: "xq8v1ta",
			boxSizing: "x9f619",
			paddingTop: "x1p57kb1",
			paddingInlineEnd: "xvtqlqk",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "xdx6fka",
			$$css: !0
		},
		creative: {
			height: "xc3b8f0",
			$$css: !0
		},
		preview: {
			boxSizing: "x9f619",
			minHeight: "x1reb3pv",
			paddingBottom: "x1c76a8b",
			$$css: !0
		},
		primary: {
			paddingBottom: "xvpt6g3",
			$$css: !0
		},
		secondary: {
			rowGap: "xlxy9ep",
			columnGap: "xf91ah9",
			$$css: !0
		},
		shimmers: {
			maxWidth: "x193iq5w",
			$$css: !0
		},
		summary: {
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		summaryRow: {
			width: "xh8yej3",
			$$css: !0
		}
	};
	function c() {
		var e;
		return s.jsx("div", {
			className: "x78zum5 xdt5ytf x1iyjqo2 xl56j7k",
			children: s.jsx(r("WAWebBizTwoColumnLayout.react"), {
				primaryContent: s.jsxs((e = o("WAWebFlexBox.react")).FlexColumn, {
					gap: 16,
					xstyle: u.primary,
					children: [
						s.jsxs(m, {
							gap: 12,
							xstyle: u.creative,
							children: [
								s.jsx(d, { width: 180 }),
								s.jsx(d, {
									height: 80,
									width: "100%"
								}),
								s.jsx(d, {
									height: 40,
									width: 255
								})
							]
						}),
						s.jsx(m, {
							gap: 48,
							xstyle: u.audience,
							children: s.jsxs(e.FlexColumn, {
								gap: 40,
								paddingTop: 8,
								children: [
									s.jsx(d, { width: 232 }),
									s.jsx(d, {
										height: 64,
										width: "100%"
									}),
									s.jsx(d, { width: 532 }),
									s.jsx(d, { width: 314 }),
									s.jsx(d, { width: 490 }),
									s.jsx(d, { width: 285 }),
									s.jsx(d, { width: 460 })
								]
							})
						}),
						s.jsx(m, {
							gap: 32,
							children: s.jsx(d, { width: "100%" })
						}),
						s.jsxs(m, {
							gap: 40,
							children: [s.jsx(d, { width: 180 }), s.jsx(d, { width: 515 })]
						}),
						s.jsx(m, {
							gap: 40,
							children: s.jsxs(e.FlexColumn, {
								align: "center",
								gap: 40,
								children: [s.jsx(d, {
									height: 40,
									width: 40
								}), s.jsx(d, { width: 532 })]
							})
						}),
						s.jsx(m, {
							gap: 40,
							children: s.jsxs(e.FlexColumn, {
								align: "center",
								gap: 40,
								children: [s.jsx(d, {
									height: 40,
									width: 105
								}), s.jsx(d, { width: 532 })]
							})
						}),
						s.jsxs(m, {
							gap: 24,
							children: [
								s.jsx(d, {
									height: 24,
									width: 119
								}),
								s.jsx(d, {
									height: 44,
									width: 260
								}),
								s.jsx(d, {
									height: 24,
									width: 180
								}),
								s.jsx(d, {
									height: 16,
									width: 400
								})
							]
						})
					]
				}),
				secondaryContent: s.jsxs(e.FlexColumn, {
					xstyle: u.secondary,
					children: [s.jsx(m, {
						gap: 40,
						xstyle: u.preview,
						children: s.jsx(e.FlexColumn, {
							align: "center",
							children: s.jsx(d, {
								height: 412,
								width: 300
							})
						})
					}), s.jsx(p, {})]
				})
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.height, n = t === void 0 ? 16 : t, r = e.width;
		return s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
			height: n,
			width: r,
			xstyle: u.shimmers
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.align, n = e.children, r = e.gap, a = e.xstyle;
		return s.jsxs(o("WAWebFlexBox.react").FlexColumn, {
			align: t,
			gap: r,
			xstyle: [u.card, a],
			children: [s.jsx(d, {
				height: 24,
				width: 115
			}), n]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		var e;
		return s.jsxs((e = o("WAWebFlexBox.react")).FlexColumn, {
			gap: 20,
			xstyle: u.summary,
			children: [s.jsx(d, {
				height: 24,
				width: 68
			}), s.jsxs(e.FlexColumn, {
				gap: 12,
				children: [
					s.jsxs(e.FlexRow, {
						justify: "all",
						xstyle: u.summaryRow,
						children: [s.jsx(d, { width: 250 }), s.jsx(d, { width: 70 })]
					}),
					s.jsx(r("WAWebDivider.react"), { direction: "horizontal" }),
					s.jsxs(e.FlexRow, {
						justify: "all",
						xstyle: u.summaryRow,
						children: [s.jsx(d, { width: 210 }), s.jsx(d, { width: 60 })]
					}),
					s.jsx(d, { width: 75 }),
					s.jsx(r("WAWebDivider.react"), { direction: "horizontal" }),
					s.jsxs(e.FlexRow, {
						justify: "all",
						xstyle: u.summaryRow,
						children: [s.jsx(d, { width: 210 }), s.jsx(d, { width: 60 })]
					})
				]
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = c;
}), 98);

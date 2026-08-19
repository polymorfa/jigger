__d("WAWebResponsesListShimmer.react", [
	"CometHeroHoldTrigger.react",
	"WAWebBaseShimmerComponents.react",
	"WAWebFlex.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { paddingInlineEnd10: {
		paddingInlineEnd: "x2vl965",
		$$css: !0
	} }, c = {
		avatarContainer: {
			flexShrink: "x2lah0s",
			width: "x14atkfc",
			$$css: !0
		},
		contentContainer: {
			flex: "x1cqoux5",
			minWidth: "xeuugli",
			width: "xh8yej3",
			$$css: !0
		},
		responseBodyContent: {
			flex: "x12lumcd",
			minWidth: "xeuugli",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.count, n = t === void 0 ? 9 : t, a = e.description, i = a === void 0 ? "WAWebResponsesListShimmer" : a;
		return s.jsxs(s.Fragment, { children: [s.jsx(r("CometHeroHoldTrigger.react"), {
			description: i,
			hold: !0
		}), s.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			children: Array.from({ length: n }, function(e, t) {
				return s.jsx(m, {}, t);
			})
		})] });
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m() {
		var e, t, n;
		return s.jsxs((e = o("WAWebFlex.react")).FlexRow, {
			align: "start",
			xstyle: [(t = o("WDSPaddings.stylex")).wdsPaddings.paddingHor16, t.wdsPaddings.paddingVer12],
			children: [s.jsx(e.FlexItem, {
				xstyle: [
					t.wdsPaddings.paddingEnd16,
					t.wdsPaddings.paddingStart8,
					t.wdsPaddings.paddingTop4,
					c.avatarContainer
				],
				children: s.jsx((n = o("WAWebBaseShimmerComponents.react")).CircleShimmer, { diameter: 40 })
			}), s.jsxs(e.FlexColumn, {
				xstyle: [u.paddingInlineEnd10, c.contentContainer],
				children: [
					s.jsx(e.FlexRow, {
						align: "center",
						xstyle: t.wdsPaddings.paddingBottom4,
						children: s.jsx(n.RectangleShimmer, {
							height: 14,
							width: 120,
							xstyle: o("WDSMargins.stylex").wdsMargins.marginEnd8
						})
					}),
					s.jsx(e.FlexRow, {
						align: "start",
						children: s.jsxs(e.FlexColumn, {
							xstyle: c.responseBodyContent,
							children: [s.jsx(n.RectangleShimmer, {
								height: 12,
								width: "100%",
								xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom4
							}), s.jsx(n.RectangleShimmer, {
								height: 12,
								width: 360
							})]
						})
					}),
					s.jsx(e.FlexItem, {
						xstyle: t.wdsPaddings.paddingTop12,
						children: s.jsx(n.RectangleShimmer, {
							height: 8,
							width: 40,
							xstyle: t.wdsPaddings.paddingTop8
						})
					})
				]
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = d;
}), 98);

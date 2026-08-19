__d("WAWebNewsletterInboxShimmer.react", [
	"CometHeroHoldTrigger.react",
	"WAWebBaseShimmerComponents.react",
	"WAWebFlex.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		marginInline13: {
			marginInlineStart: "x2kejxg",
			marginInlineEnd: "xaw7rza",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		},
		marginBottom5: {
			marginBottom: "xu06os2",
			$$css: !0
		},
		marginTop5: {
			marginTop: "x1ok221b",
			$$css: !0
		},
		marginTop10: {
			marginTop: "x1anpbxc",
			$$css: !0
		}
	}, c = { outerContainer: {
		width: "x1r38tzb",
		boxSizing: "x9f619",
		borderTopWidth: "x178xt8z",
		borderTopStyle: "x13fuv20",
		borderTopColor: "xx42vgk",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(7), n = e.count, a = e.description, i = a === void 0 ? "WAWebNewsletterInboxShimmer" : a, l;
		t[0] !== i ? (l = s.jsx(r("CometHeroHoldTrigger.react"), {
			description: i,
			hold: !0
		}), t[0] = i, t[1] = l) : l = t[1];
		var u;
		t[2] !== n ? (u = s.jsx(o("WAWebFlex.react").FlexColumn, { children: Array.from({ length: n }, m) }), t[2] = n, t[3] = u) : u = t[3];
		var c;
		return t[4] !== l || t[5] !== u ? (c = s.jsxs(s.Fragment, { children: [l, u] }), t[4] = l, t[5] = u, t[6] = c) : c = t[6], c;
	}
	function m(e, t) {
		var n;
		return s.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "start",
			xstyle: [
				u.marginInline13,
				o("WDSPaddings.stylex").wdsPaddings.paddingVer12,
				c.outerContainer
			],
			children: [s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "start",
				xstyle: u.marginBottom5,
				children: [s.jsx((n = o("WAWebBaseShimmerComponents.react")).CircleShimmer, {
					diameter: 36,
					xstyle: o("WDSMargins.stylex").wdsMargins.marginEnd12
				}), s.jsx(n.RectangleShimmer, {
					width: 108,
					height: 12
				})]
			}), s.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "start",
				children: [s.jsx(n.RectangleShimmer, {
					width: 308,
					height: 10,
					xstyle: u.marginTop5
				}), s.jsx(n.RectangleShimmer, {
					width: 238,
					height: 10,
					xstyle: [u.marginTop10, o("WDSMargins.stylex").wdsMargins.marginBottom28]
				})]
			})]
		}, t);
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = d;
}), 98);

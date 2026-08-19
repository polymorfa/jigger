__d("WAWebNewsletterDirectoryShimmer.react", [
	"CometHeroHoldTrigger.react",
	"WAWebBaseShimmerComponents.react",
	"WAWebFlex.react",
	"WDSMargins.stylex",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		marginInlineEnd15: {
			marginInlineEnd: "xjx09e3",
			$$css: !0
		},
		marginInline13: {
			marginInlineStart: "x2kejxg",
			marginInlineEnd: "xaw7rza",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		}
	}, c = {
		cellHeight: {
			minHeight: "xuwdbiy",
			$$css: !0
		},
		container: {
			backgroundColor: "x1280gxy",
			height: "x5yr21d",
			width: "xh8yej3",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.count, n = e.description, a = n === void 0 ? "WAWebNewsletterDirectoryShimmer" : n;
		return s.jsxs(s.Fragment, { children: [s.jsx(r("CometHeroHoldTrigger.react"), {
			description: a,
			hold: !0
		}), s.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: c.container,
			children: Array.from({ length: t }, function(e, t) {
				return s.jsx(o("WAWebFlex.react").FlexColumn, {
					align: "start",
					xstyle: [u.marginInline13, o("WDSMargins.stylex").wdsMargins.marginVer12],
					children: s.jsx(m, {})
				}, t);
			})
		})] });
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m() {
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: c.cellHeight,
			children: [s.jsx(o("WAWebBaseShimmerComponents.react").CircleShimmer, {
				diameter: 49,
				xstyle: u.marginInlineEnd15
			}), s.jsxs(o("WAWebFlex.react").FlexColumn, { children: [s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
				height: 12,
				width: 139,
				xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom12
			}), s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
				height: 10,
				width: 75
			})] })]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = d;
}), 98);

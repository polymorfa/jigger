__d("WAWebNewsletterDirectoryShimmer.react", [
	"CometHeroHoldTrigger.react",
	"WAWebBaseShimmerComponents.react",
	"WAWebFlex.react",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(7), n = e.count, a = e.description, i = a === void 0 ? "WAWebNewsletterDirectoryShimmer" : a, l;
		t[0] !== i ? (l = s.jsx(r("CometHeroHoldTrigger.react"), {
			description: i,
			hold: !0
		}), t[0] = i, t[1] = l) : l = t[1];
		var u;
		t[2] !== n ? (u = s.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: c.container,
			children: Array.from({ length: n }, m)
		}), t[2] = n, t[3] = u) : u = t[3];
		var d;
		return t[4] !== l || t[5] !== u ? (d = s.jsxs(s.Fragment, { children: [l, u] }), t[4] = l, t[5] = u, t[6] = d) : d = t[6], d;
	}
	function m(e, t) {
		return s.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "start",
			xstyle: [u.marginInline13, o("WDSMargins.stylex").wdsMargins.marginVer12],
			children: s.jsx(p, {})
		}, t);
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s.jsx(o("WAWebBaseShimmerComponents.react").CircleShimmer, {
			diameter: 49,
			xstyle: u.marginInlineEnd15
		}), e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: c.cellHeight,
			children: [t, s.jsxs(o("WAWebFlex.react").FlexColumn, { children: [s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
				height: 12,
				width: 139,
				xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom12
			}), s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
				height: 10,
				width: 75
			})] })]
		}), e[1] = n) : n = e[1], n;
	}
	l.default = d;
}), 98);

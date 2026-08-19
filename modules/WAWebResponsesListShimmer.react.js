__d("WAWebResponsesListShimmer.react", [
	"CometHeroHoldTrigger.react",
	"WAWebBaseShimmerComponents.react",
	"WAWebFlex.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(7), n = e.count, a = e.description, i = n === void 0 ? 9 : n, l = a === void 0 ? "WAWebResponsesListShimmer" : a, u;
		t[0] !== l ? (u = s.jsx(r("CometHeroHoldTrigger.react"), {
			description: l,
			hold: !0
		}), t[0] = l, t[1] = u) : u = t[1];
		var c;
		t[2] !== i ? (c = s.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			children: Array.from({ length: i }, m)
		}), t[2] = i, t[3] = c) : c = t[3];
		var d;
		return t[4] !== u || t[5] !== c ? (d = s.jsxs(s.Fragment, { children: [u, c] }), t[4] = u, t[5] = c, t[6] = d) : d = t[6], d;
	}
	function m(e, t) {
		return s.jsx(p, {}, t);
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		var e = o("react-compiler-runtime").c(6), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [o("WDSPaddings.stylex").wdsPaddings.paddingHor16, o("WDSPaddings.stylex").wdsPaddings.paddingVer12], e[0] = t) : t = e[0];
		var n;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = s.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: [
				o("WDSPaddings.stylex").wdsPaddings.paddingEnd16,
				o("WDSPaddings.stylex").wdsPaddings.paddingStart8,
				o("WDSPaddings.stylex").wdsPaddings.paddingTop4,
				c.avatarContainer
			],
			children: s.jsx(o("WAWebBaseShimmerComponents.react").CircleShimmer, { diameter: 40 })
		}), e[1] = n) : n = e[1];
		var r;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (r = [u.paddingInlineEnd10, c.contentContainer], e[2] = r) : r = e[2];
		var a;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (a = s.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingBottom4,
			children: s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
				height: 14,
				width: 120,
				xstyle: o("WDSMargins.stylex").wdsMargins.marginEnd8
			})
		}), e[3] = a) : a = e[3];
		var i;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (i = s.jsx(o("WAWebFlex.react").FlexRow, {
			align: "start",
			children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: c.responseBodyContent,
				children: [s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
					height: 12,
					width: "100%",
					xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom4
				}), s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
					height: 12,
					width: 360
				})]
			})
		}), e[4] = i) : i = e[4];
		var l;
		return e[5] === Symbol.for("react.memo_cache_sentinel") ? (l = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "start",
			xstyle: t,
			children: [n, s.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: r,
				children: [
					a,
					i,
					s.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingTop12,
						children: s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
							height: 8,
							width: 40,
							xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingTop8
						})
					})
				]
			})]
		}), e[5] = l) : l = e[5], l;
	}
	l.default = d;
}), 98);

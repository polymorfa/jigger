__d("WAWebGoogleStarRating.react", [
	"WAWebFlex.react",
	"WDSFlex.stylex",
	"WDSIconIcStarRate.react",
	"WDSIconIcStarRateFilled.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = 5, d = .72, m = .29, p = {
		filledClip: {
			color: "x1f81s73",
			height: "x5yr21d",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			position: "x10l6tqk",
			$$css: !0
		},
		glyph20x24: {
			flexShrink: "x2lah0s",
			height: "x1nqnulx",
			width: "x1mzsije",
			$$css: !0
		},
		star: {
			color: "x18cpw0e",
			lineHeight: "x14ju556",
			position: "x1n2onr6",
			$$css: !0
		}
	}, _ = {
		width: "x5lhr3w",
		$$css: !0
	}, f = { fillWidth: function(t) {
		return [_, { "--x-width": (function(e) {
			return typeof e == "number" ? e + "px" : e != null ? e : void 0;
		})(t + "%") }];
	} };
	function g(t) {
		var n = t.rating, a = t.testid, i = a === void 0 ? "google_reviews_stars" : a, l = Math.max(0, Math.min(Number(n), c));
		return u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: o("WDSFlex.stylex").wdsFlex.columnGapQuarter,
			testid: i,
			children: Array.from({ length: c }, function(t, n) {
				var a = Math.max(0, Math.min(1, l - n)), i = 0;
				return a >= d ? i = 1 : a >= m && (i = .5), u.jsxs(o("WAWebFlex.react").FlexRow, {
					shrink: 0,
					xstyle: p.star,
					children: [u.jsx(r("WDSIconIcStarRate.react"), { iconXstyle: p.glyph20x24 }), u.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.filledClip, f.fillWidth(i * 100)), { children: u.jsx(r("WDSIconIcStarRateFilled.react"), { iconXstyle: p.glyph20x24 }) }))]
				}, n);
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);

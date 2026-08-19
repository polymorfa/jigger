__d("WAWebStatusReactionsCount.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebStatusCounterStyles",
	"WDSIconIcFavoriteFilled.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { container: {
		marginInlineStart: "x150mmf0",
		$$css: !0
	} };
	function d(e) {
		var t = e.likesCount;
		return t <= 0 ? null : u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: [c.container, o("WAWebStatusCounterStyles").statusCounterStyles.counterGap],
			"aria-label": s._(
				/*BTDS*/
				"",
				[s._plural(t, "number")]
			),
			testid: "status_likes_count_container",
			children: [u.jsx(r("WDSIconIcFavoriteFilled.react"), {
				"aria-hidden": !0,
				colorName: "persistentAlwaysBranded",
				xstyle: o("WAWebStatusCounterStyles").statusCounterStyles.counterIcon
			}), u.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "persistentAlwaysWhite",
				testid: "status_likes_counter",
				children: r("WAWebL10N").d(t)
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

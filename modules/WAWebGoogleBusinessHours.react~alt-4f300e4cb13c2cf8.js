__d("WAWebGoogleBusinessHours.react", [
	"WAWebBusinessLogEvents",
	"WAWebDrawerContext",
	"WAWebFlex.react",
	"WAWebGoogleBusinessHoursUtils",
	"WAWebProductCatalogContext",
	"WAWebSmbUtils",
	"WAWebUnstyledButton.react",
	"WDSIconIcExpandMore.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useContext, d = u.useState, m = 40, p = {
		button: {
			alignItems: "x6s0dn4",
			boxSizing: "x9f619",
			display: "x78zum5",
			minHeight: "xvkrg5o",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "x1nzty39",
			paddingInlineStart: "x1phvje8",
			textAlign: "x1yc453h",
			width: "xh8yej3",
			$$css: !0
		},
		row: {
			columnGap: "x1s70e7g",
			width: "xh8yej3",
			$$css: !0
		},
		days: {
			rowGap: "x1qvou4u",
			$$css: !0
		},
		dayRow: {
			columnGap: "x1s70e7g",
			width: "xh8yej3",
			$$css: !0
		},
		iconColumn: {
			color: "xhslqc4",
			width: "x100vrsf",
			$$css: !0
		},
		iconFlipped: {
			transform: "xtjevij",
			$$css: !0
		}
	};
	function _(e) {
		var t = e.hasCoverPhoto, n = e.iconColumnXstyle, a = e.isProfileLinked, i = e.weekdayHours, l = e.xstyle, u = o("WAWebProductCatalogContext").getProductCatalogSessionId(c(o("WAWebDrawerContext").DrawerContext)), m = d(!0), _ = m[0], f = m[1];
		if (i == null || i.length === 0) return null;
		var g = o("WAWebSmbUtils").getBusinessHours(o("WAWebGoogleBusinessHoursUtils").googleWeekdayHoursToBusinessHours(i)), h = _ ? g.filter(function(e) {
			return e.first;
		}) : g;
		return s.jsx(r("WAWebUnstyledButton.react"), {
			"aria-expanded": !_,
			xstyle: [p.button, l],
			onClick: function() {
				o("WAWebBusinessLogEvents").logHoursClick(u, a, !!t), f(!_);
			},
			testid: "biz_google_profile_hours_button",
			children: s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "start",
				xstyle: p.row,
				children: [s.jsx(o("WAWebFlex.react").FlexColumn, {
					grow: 1,
					xstyle: p.days,
					children: h.map(function(e) {
						var t = e.day, n = e.first, a = e.hours, i = n ? "Body1" : "Body2";
						return s.jsxs(o("WAWebFlex.react").FlexRow, {
							align: "center",
							justify: "all",
							xstyle: p.dayRow,
							children: [s.jsx(r("WDSText.react"), {
								type: i,
								colorName: "contentDefault",
								dir: "auto",
								children: t
							}), s.jsx(r("WDSText.react"), {
								type: i,
								colorName: "contentDefault",
								dir: "auto",
								children: a
							})]
						}, t);
					})
				}), s.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					xstyle: [p.iconColumn, n],
					children: s.jsx(r("WDSIconIcExpandMore.react"), { iconXstyle: [!_ && p.iconFlipped] })
				})]
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);

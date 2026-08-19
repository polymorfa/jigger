__d("WAWebGoogleReviewsRow.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebGoogleMapsLogo.react",
	"WAWebGoogleReviewInfoModal.react",
	"WAWebGoogleStarRating.react",
	"WAWebModalManager",
	"WAWebUnstyledButton.react",
	"WDSFlex.stylex",
	"WDSIconIcInfo.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		infoButton: {
			display: "x78zum5",
			lineHeight: "x14ju556",
			$$css: !0
		},
		infoIcon: {
			color: "xhslqc4",
			height: "x1nqnulx",
			width: "x1xvr5cs",
			$$css: !0
		},
		reviewRow: {
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.googlePlace, n = e.xstyle, a = t == null ? void 0 : t.rating;
		if (a == null) return null;
		var i = Number(a), l = Number.isFinite(i) ? i.toLocaleString(void 0, {
			maximumFractionDigits: 1,
			minimumFractionDigits: 1
		}) : null, d = t == null ? void 0 : t.userRatingCount, m = t == null ? void 0 : t.reviewsUri;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: [
				o("WDSFlex.stylex").wdsFlex.columnGapSinglePlus,
				c.reviewRow,
				n
			],
			testid: "google_review_row",
			children: [
				u.jsx(r("WAWebGoogleMapsLogo.react"), {}),
				u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					grow: 1,
					testid: "google_reviews_content",
					children: [
						l != null && u.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDeemphasized",
							testid: "google_review_rating_text",
							children: l
						}),
						u.jsx(r("WAWebGoogleStarRating.react"), { rating: a }),
						d != null && u.jsx(r("WDSTextualLink.react"), {
							"aria-label": s._(
								/*BTDS*/
								"",
								[s._plural(d, "number")]
							),
							href: m,
							textConfig: "Body1",
							testid: "google_review_count",
							children: s._(
								/*BTDS*/
								"",
								[s._param("review count", d, [0])]
							)
						})
					]
				}),
				u.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					testid: "google_review_info",
					children: u.jsx(r("WAWebUnstyledButton.react"), {
						"aria-label": s._(
							/*BTDS*/
							""
						),
						onClick: function() {
							return o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebGoogleReviewInfoModal.react"), {}));
						},
						xstyle: c.infoButton,
						children: u.jsx(r("WDSIconIcInfo.react"), {
							iconXstyle: c.infoIcon,
							testid: "google_review_info_icon"
						})
					})
				})
			]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

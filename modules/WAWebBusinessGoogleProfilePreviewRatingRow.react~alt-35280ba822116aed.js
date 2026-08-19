__d("WAWebBusinessGoogleProfilePreviewRatingRow.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebGoogleReviewInfoModal.react",
	"WAWebGoogleStarRating.react",
	"WAWebModalManager",
	"WAWebUnstyledButton.react",
	"WDSIconIcInfo.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"bx",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = r("bx").getURL(r("bx")("90429")), d = {
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
		ratingInfo: {
			alignItems: "x6s0dn4",
			columnGap: "x1s70e7g",
			flexGrow: "x1iyjqo2",
			justifyContent: "x1qughib",
			minWidth: "xeuugli",
			$$css: !0
		},
		ratingRow: {
			alignItems: "x6s0dn4",
			boxSizing: "x9f619",
			columnGap: "x1s70e7g",
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			width: "xh8yej3",
			$$css: !0
		},
		ratingSummary: {
			alignItems: "x6s0dn4",
			columnGap: "x1trrmfo",
			minWidth: "xeuugli",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.googlePlace, n = t.rating;
		if (n == null) return null;
		var a = Number(n), i = Number.isFinite(a) ? a.toLocaleString(void 0, {
			maximumFractionDigits: 1,
			minimumFractionDigits: 1
		}) : null, l = t.userRatingCount, m = t.reviewsUri;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			testid: "biz-profile-google-rating-row",
			xstyle: d.ratingRow,
			children: [u.jsx("img", {
				className: "x2lah0s x1nqnulx x1xvr5cs",
				alt: "",
				"data-testid": "biz-profile-google-maps-logo",
				src: c
			}), u.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: d.ratingInfo,
				children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
					testid: "biz-profile-google-rating-summary",
					xstyle: d.ratingSummary,
					children: [
						i != null && u.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDeemphasized",
							testid: "biz-profile-google-rating-text",
							children: i
						}),
						u.jsx(r("WAWebGoogleStarRating.react"), { rating: n }),
						l != null && u.jsx(r("WDSTextualLink.react"), {
							"aria-label": s._(
								/*BTDS*/
								"",
								[s._plural(l, "number")]
							),
							href: m,
							textConfig: "Body1",
							testid: "biz-profile-google-review-count",
							children: s._(
								/*BTDS*/
								"",
								[s._param("review count", l, [0])]
							)
						})
					]
				}), u.jsx(r("WAWebUnstyledButton.react"), {
					"aria-label": s._(
						/*BTDS*/
						""
					),
					onClick: function() {
						return o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebGoogleReviewInfoModal.react"), {}));
					},
					testid: "biz-profile-google-review-info",
					xstyle: d.infoButton,
					children: u.jsx(r("WDSIconIcInfo.react"), { iconXstyle: d.infoIcon })
				})]
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);

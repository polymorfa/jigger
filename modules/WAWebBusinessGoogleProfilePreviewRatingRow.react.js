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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(18), n = e.googlePlace, a = n.rating;
		if (a == null) return null;
		var i = Number(a), l;
		t[0] !== i ? (l = Number.isFinite(i) ? i.toLocaleString(void 0, {
			maximumFractionDigits: 1,
			minimumFractionDigits: 1
		}) : null, t[0] = i, t[1] = l) : l = t[1];
		var m = l, _ = n.userRatingCount, f = n.reviewsUri, g;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (g = u.jsx("img", {
			className: "x2lah0s x1nqnulx x1xvr5cs",
			alt: "",
			"data-testid": "biz-profile-google-maps-logo",
			src: c
		}), t[2] = g) : g = t[2];
		var h;
		t[3] !== m ? (h = m != null && u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDeemphasized",
			testid: "biz-profile-google-rating-text",
			children: m
		}), t[3] = m, t[4] = h) : h = t[4];
		var y;
		t[5] !== a ? (y = u.jsx(r("WAWebGoogleStarRating.react"), { rating: a }), t[5] = a, t[6] = y) : y = t[6];
		var C;
		t[7] !== _ || t[8] !== f ? (C = _ != null && u.jsx(r("WDSTextualLink.react"), {
			"aria-label": s._(
				/*BTDS*/
				"",
				[s._plural(_, "number")]
			),
			href: f,
			textConfig: "Body1",
			testid: "biz-profile-google-review-count",
			children: s._(
				/*BTDS*/
				"",
				[s._param("review count", _, [0])]
			)
		}), t[7] = _, t[8] = f, t[9] = C) : C = t[9];
		var b;
		t[10] !== h || t[11] !== y || t[12] !== C ? (b = u.jsxs(o("WAWebFlex.react").FlexRow, {
			testid: "biz-profile-google-rating-summary",
			xstyle: d.ratingSummary,
			children: [
				h,
				y,
				C
			]
		}), t[10] = h, t[11] = y, t[12] = C, t[13] = b) : b = t[13];
		var v;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
			/*BTDS*/
			""
		), t[14] = v) : v = t[14];
		var S;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (S = u.jsx(r("WAWebUnstyledButton.react"), {
			"aria-label": v,
			onClick: p,
			testid: "biz-profile-google-review-info",
			xstyle: d.infoButton,
			children: u.jsx(r("WDSIconIcInfo.react"), { iconXstyle: d.infoIcon })
		}), t[15] = S) : S = t[15];
		var R;
		return t[16] !== b ? (R = u.jsxs(o("WAWebFlex.react").FlexRow, {
			testid: "biz-profile-google-rating-row",
			xstyle: d.ratingRow,
			children: [g, u.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: d.ratingInfo,
				children: [b, S]
			})]
		}), t[16] = b, t[17] = R) : R = t[17], R;
	}
	function p() {
		return o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebGoogleReviewInfoModal.react"), {}));
	}
	l.default = m;
}), 226);

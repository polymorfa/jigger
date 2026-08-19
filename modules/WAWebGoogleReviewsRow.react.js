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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(21), n = e.googlePlace, a = e.xstyle, i = n == null ? void 0 : n.rating;
		if (i == null) return null;
		var l = Number(i), d;
		t[0] !== l ? (d = Number.isFinite(l) ? l.toLocaleString(void 0, {
			maximumFractionDigits: 1,
			minimumFractionDigits: 1
		}) : null, t[0] = l, t[1] = d) : d = t[1];
		var p = d, _ = n == null ? void 0 : n.userRatingCount, f = n == null ? void 0 : n.reviewsUri, g;
		t[2] !== a ? (g = [
			o("WDSFlex.stylex").wdsFlex.columnGapSinglePlus,
			c.reviewRow,
			a
		], t[2] = a, t[3] = g) : g = t[3];
		var h;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx(r("WAWebGoogleMapsLogo.react"), {}), t[4] = h) : h = t[4];
		var y;
		t[5] !== p ? (y = p != null && u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDeemphasized",
			testid: "google_review_rating_text",
			children: p
		}), t[5] = p, t[6] = y) : y = t[6];
		var C;
		t[7] !== i ? (C = u.jsx(r("WAWebGoogleStarRating.react"), { rating: i }), t[7] = i, t[8] = C) : C = t[8];
		var b;
		t[9] !== _ || t[10] !== f ? (b = _ != null && u.jsx(r("WDSTextualLink.react"), {
			"aria-label": s._(
				/*BTDS*/
				"",
				[s._plural(_, "number")]
			),
			href: f,
			textConfig: "Body1",
			testid: "google_review_count",
			children: s._(
				/*BTDS*/
				"",
				[s._param("review count", _, [0])]
			)
		}), t[9] = _, t[10] = f, t[11] = b) : b = t[11];
		var v;
		t[12] !== y || t[13] !== C || t[14] !== b ? (v = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			grow: 1,
			testid: "google_reviews_content",
			children: [
				y,
				C,
				b
			]
		}), t[12] = y, t[13] = C, t[14] = b, t[15] = v) : v = t[15];
		var S;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
			/*BTDS*/
			""
		), t[16] = S) : S = t[16];
		var R;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (R = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			testid: "google_review_info",
			children: u.jsx(r("WAWebUnstyledButton.react"), {
				"aria-label": S,
				onClick: m,
				xstyle: c.infoButton,
				children: u.jsx(r("WDSIconIcInfo.react"), {
					iconXstyle: c.infoIcon,
					testid: "google_review_info_icon"
				})
			})
		}), t[17] = R) : R = t[17];
		var L;
		return t[18] !== g || t[19] !== v ? (L = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: g,
			testid: "google_review_row",
			children: [
				h,
				v,
				R
			]
		}), t[18] = g, t[19] = v, t[20] = L) : L = t[20], L;
	}
	function m() {
		return o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebGoogleReviewInfoModal.react"), {}));
	}
	l.default = d;
}), 226);

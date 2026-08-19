__d("WAWebBBHomeQPSurface.react", [
	"WAWebABProps",
	"WAWebCTWAConstants",
	"WAWebFlex.react",
	"WAWebPrivacyTipBanner.react",
	"react",
	"react-compiler-runtime",
	"useWAWebBestQuickPromotionForSurface"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { bannerWrapper: {
		marginBottom: "xefnzgg",
		marginInlineEnd: "xd6izgl",
		marginInlineStart: "x6pxu1d",
		$$css: !0
	} };
	function c() {
		var e = o("react-compiler-runtime").c(9), t, n;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = { surfaceId: o("WAWebCTWAConstants").QP_SURFACE_ID_BB_HOME }, n = {
			eligibilityCheck: d,
			fireImpression: !0
		}, e[0] = t, e[1] = n) : (t = e[0], n = e[1]);
		var a = o("useWAWebBestQuickPromotionForSurface").useBestQuickPromotionForSurface(t, n);
		if (a != null) {
			var i = a.dismiss, l = a.image, c = a.primaryActionClick, m = a.promotion, p = a.sanitizedText, _ = m.promotion.data.primaryAction, f = m.promotion.data.titleElementValue, g = _ == null ? void 0 : _.text, h;
			return e[2] !== i || e[3] !== l || e[4] !== c || e[5] !== p || e[6] !== g || e[7] !== f ? (h = s.jsx(o("WAWebFlex.react").FlexItem, {
				grow: 0,
				shrink: 0,
				testid: "bb_home_qp_banner_wrapper",
				xstyle: u.bannerWrapper,
				children: s.jsx(r("WAWebPrivacyTipBanner.react"), {
					text: p,
					image: l,
					actionText: g,
					onAction: c,
					onDismiss: i,
					testId: "bb_home_qp_banner",
					title: f
				})
			}), e[2] = i, e[3] = l, e[4] = c, e[5] = p, e[6] = g, e[7] = f, e[8] = h) : h = e[8], h;
		}
	}
	function d() {
		return o("WAWebABProps").getABPropConfigValue("smb_web_bb_home_qp_surface_enabled") === !0;
	}
	l.default = c;
}), 98);

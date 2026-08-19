__d("WAWebBBHomeQPSurface.react", [
	"WAWebABProps",
	"WAWebCTWAConstants",
	"WAWebFlex.react",
	"WAWebPrivacyTipBanner.react",
	"react",
	"useWAWebBestQuickPromotionForSurface"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { bannerWrapper: {
		marginBottom: "xefnzgg",
		marginInlineEnd: "xd6izgl",
		marginInlineStart: "x6pxu1d",
		$$css: !0
	} };
	function c() {
		var e = o("useWAWebBestQuickPromotionForSurface").useBestQuickPromotionForSurface({ surfaceId: o("WAWebCTWAConstants").QP_SURFACE_ID_BB_HOME }, {
			eligibilityCheck: d,
			fireImpression: !0
		});
		if (e != null) {
			var t = e.dismiss, n = e.image, a = e.primaryActionClick, i = e.promotion, l = e.sanitizedText, c = i.promotion.data.primaryAction, m = i.promotion.data.titleElementValue;
			return s.jsx(o("WAWebFlex.react").FlexItem, {
				grow: 0,
				shrink: 0,
				testid: "bb_home_qp_banner_wrapper",
				xstyle: u.bannerWrapper,
				children: s.jsx(r("WAWebPrivacyTipBanner.react"), {
					text: l,
					image: n,
					actionText: c == null ? void 0 : c.text,
					onAction: a,
					onDismiss: t,
					testId: "bb_home_qp_banner",
					title: m
				})
			});
		}
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d() {
		return o("WAWebABProps").getABPropConfigValue("smb_web_bb_home_qp_surface_enabled") === !0;
	}
	l.default = c;
}), 98);

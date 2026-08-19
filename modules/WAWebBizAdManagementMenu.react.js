__d("WAWebBizAdManagementMenu.react", [
	"fbt",
	"WAWebBizNativeAdsWamLogger",
	"WAWebExternalLink.react",
	"WAWebFbtCommon",
	"WAWebWamEnumLwiAdsIdentityType",
	"WAWebWamEnumLwiScreenAction",
	"WAWebWamEnumLwiScreenReference",
	"WDSIconIcCreditCard.react",
	"WDSIconIcHeadphones.react",
	"WDSIconIcHelp.react",
	"WDSIconWdsIcLogoFacebook.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"useWAWebBizContactUs"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useCallback, d = "https://faq.whatsapp.com/512723604104492/";
	function m(e) {
		var t = e.accountType, n = e.loginWithFacebook, a = e.manageAdsFlowID, i = e.openAdPaymentAction, l = e.pageId, m = e.unmountSignal, p = e.wamCtwaAdAccountType, _ = r("useWAWebBizContactUs")(a, l, m), f = _[0], g = _[1], h = c(function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_SWITCH_ACCOUNT_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, a, null, JSON.stringify({ pageId: l }), p), n == null || n();
		}, [
			n,
			a,
			l,
			p
		]), y = c(function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_AD_PAYMENTS_ROW_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, a, null, JSON.stringify({ pageId: l }), p), i();
		}, [
			a,
			i,
			l,
			p
		]), C = c(function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_LEARN_MORE_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, a, null, JSON.stringify({ pageId: l }), p), o("WAWebExternalLink.react").openExternalLink(d);
		}, [
			a,
			l,
			p
		]);
		return u.jsxs(r("WDSMenu.react"), { children: [
			t === "WAA" && n != null ? u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconWdsIcLogoFacebook.react"),
				onPress: h,
				title: s._(
					/*BTDS*/
					""
				)
			}) : null,
			u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcCreditCard.react"),
				onPress: y,
				title: s._(
					/*BTDS*/
					""
				)
			}),
			u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcHelp.react"),
				onPress: C,
				title: r("WAWebFbtCommon")("Learn more")
			}),
			u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcHeadphones.react"),
				disabled: g,
				onPress: f,
				title: s._(
					/*BTDS*/
					""
				)
			})
		] });
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);

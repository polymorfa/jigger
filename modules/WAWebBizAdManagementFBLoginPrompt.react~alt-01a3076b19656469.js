__d("WAWebBizAdManagementFBLoginPrompt.react", [
	"fbt",
	"WAWebBizImpressionLoggingWrapper.react",
	"WAWebBizNativeAdsWamLogger",
	"WAWebFlex.react",
	"WAWebWamEnumLwiAdsIdentityType",
	"WAWebWamEnumLwiScreenAction",
	"WAWebWamEnumLwiScreenReference",
	"WAWebWdsIllAdsWaIcon.react",
	"WDSButton.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = JSON.stringify({
		scenario: "S2",
		web_surface: "fb_login_prompt"
	}), _ = {
		container: {
			alignItems: "x6s0dn4",
			flexGrow: "x1iyjqo2",
			rowGap: "x1j3ira4",
			columnGap: "xrdqr27",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		impressionWrapper: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		textContainer: {
			rowGap: "x1qvou4u",
			columnGap: "x1s70e7g",
			maxWidth: "xyq1l15",
			textAlign: "x2b8uid",
			$$css: !0
		}
	};
	function f(e) {
		var t = e.adCreationFlowID, n = e.isFBLoggedIn, a = e.onConnectFacebook, i = e.onNavigateToCreation;
		m(function() {
			n && i();
		}, [n, i]);
		var l = d(function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_FB_WEB_LOGIN_CONSENT_CONFIRM, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_CONSENT_LOGIN_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, t, null, p), a();
		}, [t, a]);
		return n ? null : u.jsx(r("WAWebBizImpressionLoggingWrapper.react"), {
			onImpression: function() {
				return o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_FB_WEB_LOGIN_CONSENT_CONFIRM, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_VIEW, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, t, null, p);
			},
			xstyle: _.impressionWrapper,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: _.container,
				children: [
					u.jsx(o("WAWebWdsIllAdsWaIcon.react").WdsIllAdsWaIcon, {}),
					u.jsxs(o("WAWebFlex.react").FlexColumn, {
						xstyle: _.textContainer,
						children: [u.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							type: "Headline1",
							children: s._(
								/*BTDS*/
								""
							)
						}), u.jsx(r("WDSText.react"), {
							colorName: "contentDeemphasized",
							type: "Body2",
							children: s._(
								/*BTDS*/
								""
							)
						})]
					}),
					u.jsx(r("WDSButton.react"), {
						label: s._(
							/*BTDS*/
							""
						),
						onPress: l,
						size: "medium",
						testid: "fb-login-prompt-continue-button",
						variant: "filled"
					})
				]
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);

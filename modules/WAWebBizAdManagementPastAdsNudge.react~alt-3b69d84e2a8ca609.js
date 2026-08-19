__d("WAWebBizAdManagementPastAdsNudge.react", [
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
	var e, u = e || (e = o("react")), c = e.useCallback, d = {
		buttonContainer: {
			alignItems: "x6s0dn4",
			columnGap: "x1aj3ljl",
			$$css: !0
		},
		container: {
			alignItems: "x6s0dn4",
			flexGrow: "x1iyjqo2",
			justifyContent: "xl56j7k",
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyo0t3i",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xb0esv5",
			rowGap: "x1j3ira4",
			$$css: !0
		},
		impressionWrapper: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		textContainer: {
			maxWidth: "xyq1l15",
			rowGap: "x1qvou4u",
			textAlign: "x2b8uid",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.manageAdsFlowID, n = e.onConnectFacebook, a = e.onSkipAndCreate, i = a != null, l = JSON.stringify({
			skippable: i,
			web_surface: "past_ads_nudge"
		}), m = c(function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_NATIVE_PAST_ADS_NUDGE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_CONSENT_LOGIN_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, t, null, l), n();
		}, [
			l,
			t,
			n
		]), p = c(function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_NATIVE_PAST_ADS_NUDGE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_CONSENT_SKIP_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, t, null, l), a == null || a();
		}, [
			l,
			t,
			a
		]);
		return u.jsx(r("WAWebBizImpressionLoggingWrapper.react"), {
			onImpression: function() {
				return o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_NATIVE_PAST_ADS_NUDGE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_VIEW, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, t, null, l);
			},
			xstyle: d.impressionWrapper,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: d.container,
				children: [
					u.jsx(o("WAWebWdsIllAdsWaIcon.react").WdsIllAdsWaIcon, {}),
					u.jsxs(o("WAWebFlex.react").FlexColumn, {
						xstyle: d.textContainer,
						children: [u.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							textAlign: "center",
							type: "Headline2",
							children: s._(
								/*BTDS*/
								""
							)
						}), u.jsx(r("WDSText.react"), {
							colorName: "contentDeemphasized",
							textAlign: "center",
							type: "Body2",
							children: s._(
								/*BTDS*/
								""
							)
						})]
					}),
					u.jsxs(o("WAWebFlex.react").FlexRow, {
						xstyle: d.buttonContainer,
						children: [i ? u.jsx(r("WDSButton.react"), {
							label: s._(
								/*BTDS*/
								""
							),
							onPress: p,
							size: "medium",
							testid: "past-ads-nudge-skip-button",
							variant: "borderless"
						}) : null, u.jsx(r("WDSButton.react"), {
							label: s._(
								/*BTDS*/
								""
							),
							onPress: m,
							size: "medium",
							testid: "past-ads-nudge-connect-fb-button",
							variant: "filled"
						})]
					})
				]
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);

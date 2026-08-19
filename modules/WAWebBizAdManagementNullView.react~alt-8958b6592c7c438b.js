__d("WAWebBizAdManagementNullView.react", [
	"fbt",
	"WAWebBizImpressionLoggingWrapper.react",
	"WAWebBizNativeAdsWamLogger",
	"WAWebFlex.react",
	"WAWebWamEnumLwiAdsIdentityType",
	"WAWebWamEnumLwiScreenAction",
	"WAWebWamEnumLwiScreenReference",
	"WAWebWdsIllAdsWaIcon.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		container: {
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		description: {
			paddingTop: "x16ovd2e",
			$$css: !0
		},
		textContainer: {
			maxWidth: "xyq1l15",
			paddingTop: "x1p57kb1",
			textAlign: "x2b8uid",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.manageAdsFlowID, n = e.pageId;
		return u.jsx(r("WAWebBizImpressionLoggingWrapper.react"), {
			onImpression: function() {
				return o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_TOTAL_METRICS_VIEW, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, t, null, JSON.stringify({
					null_state: !0,
					pageId: n
				}));
			},
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: c.container,
				children: [u.jsx(o("WAWebWdsIllAdsWaIcon.react").WdsIllAdsWaIcon, {}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: c.textContainer,
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
						xstyle: c.description,
						children: s._(
							/*BTDS*/
							""
						)
					})]
				})]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

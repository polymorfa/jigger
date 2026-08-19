__d("WAWebBizAdManagementDraftYourAdsCell.react", [
	"fbt",
	"WAWebBaseShimmerComponents.react",
	"WAWebBizAdManagementThumbnail.react",
	"WAWebBizImpressionLoggingWrapper.react",
	"WAWebBizNativeAdsWamLogger",
	"WAWebFlex.react",
	"WAWebWamEnumLwiAdsIdentityType",
	"WAWebWamEnumLwiScreenAction",
	"WAWebWamEnumLwiScreenReference",
	"WDSText.react",
	"react",
	"useWAWebNativeAdsFlowIDContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		rowContainer: {
			width: "xh8yej3",
			$$css: !0
		},
		textContainer: {
			minWidth: "xeuugli",
			$$css: !0
		},
		wrapper: {
			minWidth: "xeuugli",
			width: "xh8yej3",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.description, n = e.isLoadingThumbnail, a = e.thumbnailUrl, i = r("useWAWebNativeAdsFlowIDContext")(), l = t != null ? t : s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WAWebBizImpressionLoggingWrapper.react"), {
			onImpression: function() {
				return o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_MANAGE_AD_DRAFT_AD_IMPRESSION, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, i.manageAdsFlowID);
			},
			xstyle: c.wrapper,
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 12,
				xstyle: c.rowContainer,
				children: [n ? u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
					height: 48,
					width: 48
				}) : u.jsx(r("WAWebBizAdManagementThumbnail.react"), {
					boostingStatus: null,
					thumbnailUrl: a
				}), u.jsx(o("WAWebFlex.react").FlexColumn, {
					xstyle: c.textContainer,
					children: u.jsx("div", {
						className: "x193iq5w",
						children: u.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							maxLines: 1,
							type: "Body1",
							children: l
						})
					})
				})]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

__d("WAWebBizAdManagementYourAdsCell.react", [
	"fbt",
	"WAWebBizAdManagementDateUtils",
	"WAWebBizAdManagementThumbnail.react",
	"WAWebBizImpressionLoggingWrapper.react",
	"WAWebBizNativeAdsWamLogger",
	"WAWebFlex.react",
	"WAWebL10nGetRenderedLocale",
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
		var t = e.boostId, n = e.boostingStatus, a = e.durationInDays, i = e.startTime, l = e.thumbnailUrl, d = r("useWAWebNativeAdsFlowIDContext")(), m = o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale().replace("_", "-"), p = i != null ? new Intl.DateTimeFormat(m, {
			day: "numeric",
			hour: "numeric",
			minute: "2-digit",
			month: "short"
		}).format(i * 1e3) : null, _ = o("WAWebBizAdManagementDateUtils").getAdEndDateText({
			boostingStatus: n,
			durationInDays: a,
			locale: m,
			startTime: i
		});
		return u.jsx(r("WAWebBizImpressionLoggingWrapper.react"), {
			onImpression: function() {
				return o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_ADS_LISTING_VIEW, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, d.manageAdsFlowID, t);
			},
			xstyle: c.wrapper,
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 12,
				xstyle: c.rowContainer,
				children: [u.jsx(r("WAWebBizAdManagementThumbnail.react"), {
					boostingStatus: n,
					thumbnailUrl: l
				}), p != null ? u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: c.textContainer,
					children: [u.jsx("div", {
						className: "x193iq5w",
						children: u.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							maxLines: 1,
							type: "Body1",
							children: s._(
								/*BTDS*/
								"",
								[s._param("date", p)]
							)
						})
					}), _ != null ? u.jsx("div", {
						className: "x193iq5w",
						children: u.jsx(r("WDSText.react"), {
							colorName: "contentDeemphasized",
							maxLines: 1,
							type: "Body2",
							children: _
						})
					}) : null]
				}) : null]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

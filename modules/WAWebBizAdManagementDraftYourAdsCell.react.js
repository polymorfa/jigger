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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(16), n = e.description, a = e.isLoadingThumbnail, i = e.thumbnailUrl, l = r("useWAWebNativeAdsFlowIDContext")(), d;
		t[0] !== n ? (d = n != null ? n : s._(
			/*BTDS*/
			""
		), t[0] = n, t[1] = d) : d = t[1];
		var m = d, p;
		t[2] !== l.manageAdsFlowID ? (p = function() {
			return o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_MANAGE_AD_DRAFT_AD_IMPRESSION, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, l.manageAdsFlowID);
		}, t[2] = l.manageAdsFlowID, t[3] = p) : p = t[3];
		var _;
		t[4] !== a || t[5] !== i ? (_ = a ? u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
			height: 48,
			width: 48
		}) : u.jsx(r("WAWebBizAdManagementThumbnail.react"), {
			boostingStatus: null,
			thumbnailUrl: i
		}), t[4] = a, t[5] = i, t[6] = _) : _ = t[6];
		var f;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (f = { className: "x193iq5w" }, t[7] = f) : f = t[7];
		var g;
		t[8] !== m ? (g = u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: c.textContainer,
			children: u.jsx("div", babelHelpers.extends({}, f, { children: u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				maxLines: 1,
				type: "Body1",
				children: m
			}) }))
		}), t[8] = m, t[9] = g) : g = t[9];
		var h;
		t[10] !== _ || t[11] !== g ? (h = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 12,
			xstyle: c.rowContainer,
			children: [_, g]
		}), t[10] = _, t[11] = g, t[12] = h) : h = t[12];
		var y;
		return t[13] !== p || t[14] !== h ? (y = u.jsx(r("WAWebBizImpressionLoggingWrapper.react"), {
			onImpression: p,
			xstyle: c.wrapper,
			children: h
		}), t[13] = p, t[14] = h, t[15] = y) : y = t[15], y;
	}
	l.default = d;
}), 226);

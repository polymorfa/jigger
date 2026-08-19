__d("WAWebBizAdDetailsActionButtons.react", [
	"fbt",
	"WAWebBizImpressionLoggingWrapper.react",
	"WAWebBizNativeAdsRecreateConstants",
	"WAWebBizNativeAdsWamLogger",
	"WAWebFlex.react",
	"WAWebWamEnumLwiAdsIdentityType",
	"WAWebWamEnumLwiEntryPoint",
	"WAWebWamEnumLwiScreenAction",
	"WAWebWamEnumLwiScreenReference",
	"WDSActionTile.react",
	"WDSActionTileGroup.react",
	"WDSIconIcContentCopy.react",
	"WDSIconIcDelete.react",
	"WDSIconIcPauseCircle.react",
	"WDSIconIcPlayArrow.react",
	"react",
	"useWAWebBizAdDeleteModal",
	"useWAWebBizAdPauseModal",
	"useWAWebBizAdResumeWithToast",
	"useWAWebNativeAdsFlowIDContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useCallback, d = {
		container: {
			paddingTop: "x1tiyuxx",
			paddingBottom: "x1nbhmlj",
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			rowGap: "x1qvou4u",
			$$css: !0
		},
		fillWidth: {
			width: "xh8yej3",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.item, n = e.onDelete, a = r("useWAWebNativeAdsFlowIDContext")(), i = r("useWAWebBizAdPauseModal")(t.boostId), l = r("useWAWebBizAdDeleteModal")(t.boostId, n), m = r("useWAWebBizAdResumeWithToast")(t.boostId), p = m[0], _ = m[1], f = c(function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_AD_DETAILS, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_PAUSE_AD_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, a.manageAdsFlowID, t.boostId), i();
		}, [
			a.manageAdsFlowID,
			t.boostId,
			i
		]), g = c(function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_AD_DETAILS, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_DELETE_AD_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, a.manageAdsFlowID, t.boostId), l();
		}, [
			a.manageAdsFlowID,
			t.boostId,
			l
		]), h = c(function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_AD_DETAILS, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_RESUME_AD_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, a.manageAdsFlowID, t.boostId), p();
		}, [
			a.manageAdsFlowID,
			t.boostId,
			p
		]), y = o("WAWebBizNativeAdsRecreateConstants").getRecreateEligibility(t.boostingStatus, t.regulatedCategories), C = t.boostId, b = t.onRecreateAd, v = c(function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_AD_DETAILS, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_PROMOTE_AGAIN_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, a.manageAdsFlowID, C), b(o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_ADVERTISE_FROM_AD_DETAILS_RECREATE_AD_BUTTON, "whatsapp_smb_ad_details_recreate_ad_button");
		}, [
			a.manageAdsFlowID,
			C,
			b
		]), S = t.boostingStatus === "ACTIVE", R = t.boostingStatus === "PAUSED", L = y === "blocked_by_sac", E = u.jsx(r("WDSActionTile.react"), {
			Icon: r("WDSIconIcContentCopy.react"),
			disabled: L,
			label: s._(
				/*BTDS*/
				""
			),
			onPress: L ? void 0 : v,
			testid: "biz_native_ads_ad_details_recreate_action_tile",
			tooltip: L ? s._(
				/*BTDS*/
				""
			) : null
		}), k = u.jsxs(r("WDSActionTileGroup.react"), { children: [
			y !== "ineligible" ? E : null,
			S ? u.jsx(r("WDSActionTile.react"), {
				Icon: r("WDSIconIcPauseCircle.react"),
				label: s._(
					/*BTDS*/
					""
				),
				onPress: f,
				testid: "biz_native_ads_ad_details_pause_action_tile"
			}) : null,
			R ? u.jsx(r("WDSActionTile.react"), {
				Icon: r("WDSIconIcPlayArrow.react"),
				disabled: _,
				label: _ ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				),
				onPress: h,
				testid: "biz_native_ads_ad_details_resume_action_tile"
			}) : null,
			u.jsx(r("WDSActionTile.react"), {
				Icon: r("WDSIconIcDelete.react"),
				label: s._(
					/*BTDS*/
					""
				),
				onPress: g,
				testid: "biz_native_ads_ad_details_delete_action_tile"
			})
		] });
		return u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: d.container,
			children: y === "blocked_by_sac" ? u.jsx(r("WAWebBizImpressionLoggingWrapper.react"), {
				onImpression: function() {
					return o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_AD_DETAILS, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_MANAGE_AD_INLINE_RECREATE_CTA_IMPRESSION, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, a.manageAdsFlowID, t.boostId, JSON.stringify({ recreate_blocked_reason: "sac" }));
				},
				xstyle: d.fillWidth,
				children: k
			}) : k
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);

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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(46), n = e.item, a = e.onDelete, i = r("useWAWebNativeAdsFlowIDContext")(), l = r("useWAWebBizAdPauseModal")(n.boostId), c = r("useWAWebBizAdDeleteModal")(n.boostId, a), m = r("useWAWebBizAdResumeWithToast")(n.boostId), p = m[0], _ = m[1], f;
		t[0] !== i.manageAdsFlowID || t[1] !== n.boostId || t[2] !== l ? (f = function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_AD_DETAILS, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_PAUSE_AD_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, i.manageAdsFlowID, n.boostId), l();
		}, t[0] = i.manageAdsFlowID, t[1] = n.boostId, t[2] = l, t[3] = f) : f = t[3];
		var g = f, h;
		t[4] !== i.manageAdsFlowID || t[5] !== n.boostId || t[6] !== c ? (h = function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_AD_DETAILS, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_DELETE_AD_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, i.manageAdsFlowID, n.boostId), c();
		}, t[4] = i.manageAdsFlowID, t[5] = n.boostId, t[6] = c, t[7] = h) : h = t[7];
		var y = h, C;
		t[8] !== i.manageAdsFlowID || t[9] !== p || t[10] !== n.boostId ? (C = function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_AD_DETAILS, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_RESUME_AD_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, i.manageAdsFlowID, n.boostId), p();
		}, t[8] = i.manageAdsFlowID, t[9] = p, t[10] = n.boostId, t[11] = C) : C = t[11];
		var b = C, v;
		t[12] !== n.boostingStatus || t[13] !== n.regulatedCategories ? (v = o("WAWebBizNativeAdsRecreateConstants").getRecreateEligibility(n.boostingStatus, n.regulatedCategories), t[12] = n.boostingStatus, t[13] = n.regulatedCategories, t[14] = v) : v = t[14];
		var S = v, R = n.boostId, L = n.onRecreateAd, E;
		t[15] !== R || t[16] !== i.manageAdsFlowID || t[17] !== L ? (E = function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_AD_DETAILS, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_PROMOTE_AGAIN_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, i.manageAdsFlowID, R), L(o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_ADVERTISE_FROM_AD_DETAILS_RECREATE_AD_BUTTON, "whatsapp_smb_ad_details_recreate_ad_button");
		}, t[15] = R, t[16] = i.manageAdsFlowID, t[17] = L, t[18] = E) : E = t[18];
		var k = E, I = n.boostingStatus === "ACTIVE", T = n.boostingStatus === "PAUSED", D = S === "blocked_by_sac", x;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), t[19] = x) : x = t[19];
		var $ = D ? void 0 : k, P;
		t[20] !== D ? (P = D ? s._(
			/*BTDS*/
			""
		) : null, t[20] = D, t[21] = P) : P = t[21];
		var N;
		t[22] !== D || t[23] !== $ || t[24] !== P ? (N = u.jsx(r("WDSActionTile.react"), {
			Icon: r("WDSIconIcContentCopy.react"),
			disabled: D,
			label: x,
			onPress: $,
			testid: "biz_native_ads_ad_details_recreate_action_tile",
			tooltip: P
		}), t[22] = D, t[23] = $, t[24] = P, t[25] = N) : N = t[25];
		var M = N, w = S !== "ineligible" ? M : null, A;
		t[26] !== g || t[27] !== I ? (A = I ? u.jsx(r("WDSActionTile.react"), {
			Icon: r("WDSIconIcPauseCircle.react"),
			label: s._(
				/*BTDS*/
				""
			),
			onPress: g,
			testid: "biz_native_ads_ad_details_pause_action_tile"
		}) : null, t[26] = g, t[27] = I, t[28] = A) : A = t[28];
		var F;
		t[29] !== b || t[30] !== T || t[31] !== _ ? (F = T ? u.jsx(r("WDSActionTile.react"), {
			Icon: r("WDSIconIcPlayArrow.react"),
			disabled: _,
			label: _ ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			onPress: b,
			testid: "biz_native_ads_ad_details_resume_action_tile"
		}) : null, t[29] = b, t[30] = T, t[31] = _, t[32] = F) : F = t[32];
		var O;
		t[33] === Symbol.for("react.memo_cache_sentinel") ? (O = s._(
			/*BTDS*/
			""
		), t[33] = O) : O = t[33];
		var B;
		t[34] !== y ? (B = u.jsx(r("WDSActionTile.react"), {
			Icon: r("WDSIconIcDelete.react"),
			label: O,
			onPress: y,
			testid: "biz_native_ads_ad_details_delete_action_tile"
		}), t[34] = y, t[35] = B) : B = t[35];
		var W;
		t[36] !== w || t[37] !== A || t[38] !== F || t[39] !== B ? (W = u.jsxs(r("WDSActionTileGroup.react"), { children: [
			w,
			A,
			F,
			B
		] }), t[36] = w, t[37] = A, t[38] = F, t[39] = B, t[40] = W) : W = t[40];
		var q = W, U;
		return t[41] !== i.manageAdsFlowID || t[42] !== n.boostId || t[43] !== S || t[44] !== q ? (U = u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: d.container,
			children: S === "blocked_by_sac" ? u.jsx(r("WAWebBizImpressionLoggingWrapper.react"), {
				onImpression: function() {
					return o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_AD_DETAILS, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_MANAGE_AD_INLINE_RECREATE_CTA_IMPRESSION, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, i.manageAdsFlowID, n.boostId, JSON.stringify({ recreate_blocked_reason: "sac" }));
				},
				xstyle: d.fillWidth,
				children: q
			}) : q
		}), t[41] = i.manageAdsFlowID, t[42] = n.boostId, t[43] = S, t[44] = q, t[45] = U) : U = t[45], U;
	}
	l.default = m;
}), 226);

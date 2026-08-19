__d("WAWebBizAdManagementHeaderButtonGroup.react", [
	"fbt",
	"CometPlaceholder.react",
	"CometRelay",
	"ConstUriUtils",
	"WAWebBaseShimmerComponents.react",
	"WAWebBizAdManagementHeaderButtonGroupBillingInfoProfileSectionQuery.graphql",
	"WAWebBizAdManagementIdentityButton.react",
	"WAWebBizAdManagementMenu.react",
	"WAWebBizEnterFlowClickLogger",
	"WAWebBizNativeAdsCtwaAdAccountType",
	"WAWebBizNativeAdsEntryTapLogger",
	"WAWebBizNativeAdsFlowTypes",
	"WAWebBizNativeAdsWamLogger",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebWamEnumLwiAdsIdentityType",
	"WAWebWamEnumLwiScreenAction",
	"WAWebWamEnumLwiScreenReference",
	"WAWebWamEnumWebFlowType",
	"WDSButton.react",
	"WDSIconIcAdd.react",
	"WDSIconIcMoreVert.react",
	"XPaymentsBillingHubPaymentSettingsControllerRouteBuilder",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAdCreationIdentityContext",
	"useWAWebBizAdManagementOpenAdPaymentModal",
	"useWAWebNativeAdsFlowIDContext",
	"useWAWebUnmountSignal",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useRef, _ = e !== void 0 ? e : e = n("WAWebBizAdManagementHeaderButtonGroupBillingInfoProfileSectionQuery.graphql");
	function f() {
		var e = o("react-compiler-runtime").c(2), t = o("CometRelay").useLazyLoadQuery(_, {}), n;
		return e[0] !== t.me ? (n = c.jsx(r("WAWebBizAdManagementIdentityButton.react"), { facebookProfileRef: t.me }), e[0] = t.me, e[1] = n) : n = e[1], n;
	}
	function g() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = c.jsx(o("WAWebBaseShimmerComponents.react").CircleShimmer, { diameter: 40 }), e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = c.jsx(r("CometPlaceholder.react"), {
			fallback: t,
			name: i.id,
			children: c.jsx(f, {})
		}), e[1] = n) : n = e[1], n;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(37), n = e.accountType, a = e.createAdDisabled, i = e.flow, l = e.relayEnvironment, u = p(null), d = r("useWAWebUnmountSignal")(), m = r("useWAWebBizAdCreationIdentityContext")(), _ = r("useWAWebNativeAdsFlowIDContext")(), f = m == null ? void 0 : m.pageType, h;
		t[0] !== n || t[1] !== f ? (h = o("WAWebBizNativeAdsCtwaAdAccountType").getWamCtwaAdAccountType(n, f), t[0] = n, t[1] = f, t[2] = h) : h = t[2];
		var y = h, C = r("useWAWebBizAdManagementOpenAdPaymentModal")(l), b;
		t[3] !== n || t[4] !== C ? (b = function() {
			if (n === "WAA") C();
			else {
				var e, t, a = (e = (t = r("XPaymentsBillingHubPaymentSettingsControllerRouteBuilder").buildUri({ placement: "whatsapp_ads_web" })) == null || (t = t.qualifyDomain(o("ConstUriUtils").getUri("https://www.facebook.com/"))) == null ? void 0 : t.toString()) != null ? e : "";
				o("WAWebExternalLink.react").openExternalLink(a);
			}
		}, t[3] = n, t[4] = C, t[5] = b) : b = t[5];
		var v = b, S = m == null ? void 0 : m.loginWithFacebook, R = m == null ? void 0 : m.pageId, L;
		t[6] !== n || t[7] !== _.manageAdsFlowID || t[8] !== v || t[9] !== S || t[10] !== R || t[11] !== d || t[12] !== y ? (L = {
			dismissable: !0,
			enableUIM: !1,
			menu: c.jsx(r("WAWebBizAdManagementMenu.react"), {
				accountType: n,
				loginWithFacebook: S,
				manageAdsFlowID: _.manageAdsFlowID,
				openAdPaymentAction: v,
				pageId: R,
				unmountSignal: d,
				wamCtwaAdAccountType: y
			}),
			targetRef: u
		}, t[6] = n, t[7] = _.manageAdsFlowID, t[8] = v, t[9] = S, t[10] = R, t[11] = d, t[12] = y, t[13] = L) : L = t[13];
		var E = r("useWDSMenu")(L), k = E.closeMenu, I = E.isMenuOpen, T = E.menuPortal, D = E.openMenu, x;
		t[14] !== k || t[15] !== I || t[16] !== D ? (x = function() {
			I ? k() : D();
		}, t[14] = k, t[15] = I, t[16] = D, t[17] = x) : x = t[17];
		var $ = x, P;
		t[18] !== i || t[19] !== _.adCreationFlowID || t[20] !== _.manageAdsFlowID || t[21] !== m ? (P = function() {
			var e = m == null ? void 0 : m.pageId;
			o("WAWebBizNativeAdsEntryTapLogger").logEntryTap({
				lwiEntryPoint: o("WAWebBizNativeAdsEntryTapLogger").LWI_ENTRY_POINT.SMB_ADVERTISE_FROM_MANAGE_ADS_CREATE_AD_BUTTON,
				lwiFlowId: _.adCreationFlowID,
				previousLwiFlowId: _.manageAdsFlowID,
				webFlowType: o("WAWebWamEnumWebFlowType").WEB_FLOW_TYPE.NATIVE_WEB
			}), o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_CREATE_AD_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, _.manageAdsFlowID, null, JSON.stringify({
				ad_creation_flow_id: _.adCreationFlowID,
				pageId: e
			})), m != null && m.adCreationEntrypointReference == null ? m.prepareAdCreation(_.adCreationFlowID).then(function(e) {
				o("WAWebBizEnterFlowClickLogger").logEnterFlowClick({
					entryPoint: "whatsapp_smb_web_manage_ads_native",
					flowID: _.adCreationFlowID,
					pageID: e
				});
			}) : o("WAWebBizEnterFlowClickLogger").logEnterFlowClick({
				entryPoint: "whatsapp_smb_web_manage_ads_native",
				flowID: _.adCreationFlowID,
				pageID: e
			}), i.push(o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation);
		}, t[18] = i, t[19] = _.adCreationFlowID, t[20] = _.manageAdsFlowID, t[21] = m, t[22] = P) : P = t[22];
		var N = P, M = a === !0 || (m == null ? void 0 : m.isSwitching) === !0, w;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (w = s._(
			/*BTDS*/
			""
		), t[23] = w) : w = t[23];
		var A;
		t[24] !== N || t[25] !== M ? (A = c.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcAdd.react"),
			disabled: M,
			label: w,
			onPress: N,
			size: "medium",
			type: "default",
			variant: "filled"
		}), t[24] = N, t[25] = M, t[26] = A) : A = t[26];
		var F;
		t[27] !== n || t[28] !== l ? (F = l != null && n === "FB" ? c.jsx(g, {}) : null, t[27] = n, t[28] = l, t[29] = F) : F = t[29];
		var O;
		t[30] !== $ ? (O = c.jsx(r("WDSButton.react"), {
			ref: u,
			Icon: r("WDSIconIcMoreVert.react"),
			onPress: $,
			size: "medium",
			type: "default",
			variant: "borderless"
		}), t[30] = $, t[31] = O) : O = t[31];
		var B;
		return t[32] !== T || t[33] !== A || t[34] !== F || t[35] !== O ? (B = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 8,
			children: [
				A,
				F,
				O,
				T
			]
		}), t[32] = T, t[33] = A, t[34] = F, t[35] = O, t[36] = B) : B = t[36], B;
	}
	l.default = h;
}), 226);

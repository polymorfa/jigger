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
	"useWAWebBizAdCreationIdentityContext",
	"useWAWebBizAdManagementOpenAdPaymentModal",
	"useWAWebNativeAdsFlowIDContext",
	"useWAWebUnmountSignal",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useRef, _ = e !== void 0 ? e : e = n("WAWebBizAdManagementHeaderButtonGroupBillingInfoProfileSectionQuery.graphql");
	function f() {
		var e = o("CometRelay").useLazyLoadQuery(_, {});
		return c.jsx(r("WAWebBizAdManagementIdentityButton.react"), { facebookProfileRef: e.me });
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g() {
		return c.jsx(r("CometPlaceholder.react"), {
			fallback: c.jsx(o("WAWebBaseShimmerComponents.react").CircleShimmer, { diameter: 40 }),
			name: i.id,
			children: c.jsx(f, {})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.accountType, n = e.createAdDisabled, a = e.flow, i = e.relayEnvironment, l = p(null), u = r("useWAWebUnmountSignal")(), d = r("useWAWebBizAdCreationIdentityContext")(), _ = r("useWAWebNativeAdsFlowIDContext")(), f = o("WAWebBizNativeAdsCtwaAdAccountType").getWamCtwaAdAccountType(t, d == null ? void 0 : d.pageType), h = r("useWAWebBizAdManagementOpenAdPaymentModal")(i), y = m(function() {
			if (t === "WAA") h();
			else {
				var e, n, a = (e = (n = r("XPaymentsBillingHubPaymentSettingsControllerRouteBuilder").buildUri({ placement: "whatsapp_ads_web" })) == null || (n = n.qualifyDomain(o("ConstUriUtils").getUri("https://www.facebook.com/"))) == null ? void 0 : n.toString()) != null ? e : "";
				o("WAWebExternalLink.react").openExternalLink(a);
			}
		}, [t, h]), C = r("useWDSMenu")({
			dismissable: !0,
			enableUIM: !1,
			menu: c.jsx(r("WAWebBizAdManagementMenu.react"), {
				accountType: t,
				loginWithFacebook: d == null ? void 0 : d.loginWithFacebook,
				manageAdsFlowID: _.manageAdsFlowID,
				openAdPaymentAction: y,
				pageId: d == null ? void 0 : d.pageId,
				unmountSignal: u,
				wamCtwaAdAccountType: f
			}),
			targetRef: l
		}), b = C.closeMenu, v = C.isMenuOpen, S = C.menuPortal, R = C.openMenu, L = m(function() {
			v ? b() : R();
		}, [
			v,
			b,
			R
		]), E = m(function() {
			var e = d == null ? void 0 : d.pageId;
			o("WAWebBizNativeAdsEntryTapLogger").logEntryTap({
				lwiEntryPoint: o("WAWebBizNativeAdsEntryTapLogger").LWI_ENTRY_POINT.SMB_ADVERTISE_FROM_MANAGE_ADS_CREATE_AD_BUTTON,
				lwiFlowId: _.adCreationFlowID,
				previousLwiFlowId: _.manageAdsFlowID,
				webFlowType: o("WAWebWamEnumWebFlowType").WEB_FLOW_TYPE.NATIVE_WEB
			}), o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_CREATE_AD_TAPPED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, _.manageAdsFlowID, null, JSON.stringify({
				ad_creation_flow_id: _.adCreationFlowID,
				pageId: e
			})), d != null && d.adCreationEntrypointReference == null ? d.prepareAdCreation(_.adCreationFlowID).then(function(e) {
				o("WAWebBizEnterFlowClickLogger").logEnterFlowClick({
					entryPoint: "whatsapp_smb_web_manage_ads_native",
					flowID: _.adCreationFlowID,
					pageID: e
				});
			}) : o("WAWebBizEnterFlowClickLogger").logEnterFlowClick({
				entryPoint: "whatsapp_smb_web_manage_ads_native",
				flowID: _.adCreationFlowID,
				pageID: e
			}), a.push(o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation);
		}, [
			a,
			_.adCreationFlowID,
			_.manageAdsFlowID,
			d
		]);
		return c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 8,
			children: [
				c.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcAdd.react"),
					disabled: n === !0 || (d == null ? void 0 : d.isSwitching) === !0,
					label: s._(
						/*BTDS*/
						""
					),
					onPress: E,
					size: "medium",
					type: "default",
					variant: "filled"
				}),
				i != null && t === "FB" ? c.jsx(g, {}) : null,
				c.jsx(r("WDSButton.react"), {
					ref: l,
					Icon: r("WDSIconIcMoreVert.react"),
					onPress: L,
					size: "medium",
					type: "default",
					variant: "borderless"
				}),
				S
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);

__d("WAWebBizAdCreationRoot.react", [
	"fbt",
	"CometPlaceholder.react",
	"CometRelay",
	"FBLogger",
	"WAWebBizAdCreationAudienceSection.react",
	"WAWebBizAdCreationBudgetSection.react",
	"WAWebBizAdCreationConfigContextProvider.react",
	"WAWebBizAdCreationCreativeSection.react",
	"WAWebBizAdCreationDSASection.react",
	"WAWebBizAdCreationDragDropOverlay.react",
	"WAWebBizAdCreationDurationSection.react",
	"WAWebBizAdCreationEnterFlowLogger.react",
	"WAWebBizAdCreationFooterPortalContext.react",
	"WAWebBizAdCreationHawkWidget.react",
	"WAWebBizAdCreationLoadingFallback.react",
	"WAWebBizAdCreationLoggerContextProvider.react",
	"WAWebBizAdCreationPaymentRefetchContext",
	"WAWebBizAdCreationPaymentSection.react",
	"WAWebBizAdCreationPlacementSection.react",
	"WAWebBizAdCreationPreviewSection.react",
	"WAWebBizAdCreationRootQuery.graphql",
	"WAWebBizAdCreationRoot_adAccount.graphql",
	"WAWebBizAdCreationSACSection.react",
	"WAWebBizAdCreationSAFRContextProvider.react",
	"WAWebBizAdCreationSelectedCatalogMediaContextProvider.react",
	"WAWebBizAdCreationSpecContextProvider.react",
	"WAWebBizAdCreationSummarySection.react",
	"WAWebBizAdCreationTopNotices.react",
	"WAWebBizAdCreationValidateSpecContextProvider.react",
	"WAWebBizAdPublishButton.react",
	"WAWebBizAdsErrorPopup.react",
	"WAWebBizNativeAdsGatingUtils",
	"WAWebBizTwoColumnLayout.react",
	"WAWebDrawerSection.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"getWAWebBizAdCreationEntryMode",
	"justknobx",
	"react",
	"useWAWebBizAdCreationInitialAdgroupsWithPrefill",
	"useWAWebBizAdCreationNoticeActionOverrides",
	"useWAWebBizAdCreationNoticeCTAOverrides",
	"useWAWebNativeAdsFlowIDContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react")), m = {
		innerFooter: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			justifyContent: "x1qughib",
			maxWidth: "xkbc59x",
			width: "xh8yej3",
			$$css: !0
		},
		stickyFooter: {
			alignItems: "x6s0dn4",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			boxSizing: "x9f619",
			display: "x78zum5",
			justifyContent: "xl56j7k",
			marginBottom: "xat24cr",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			width: "xh8yej3",
			$$css: !0
		}
	};
	function p(e) {
		var t = e.emailOnboardingDataRef, n = e.flowID, a = e.input, i = e.onboardingDataRef, l = e.onNavigateToManageAds;
		return d.jsx(o("WAWebBizAdCreationFooterPortalContext.react").FooterPortal, { children: d.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			xstyle: m.stickyFooter,
			children: d.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: m.innerFooter,
				children: [d.jsxs(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body3",
					children: [
						s._(
							/*BTDS*/
							"",
							[s._implicitParam("=m2", d.jsx(r("WDSTextualLink.react"), {
								href: "https://www.facebook.com/legal/terms_conditions",
								children: s._(
									/*BTDS*/
									""
								)
							}))]
						),
						" ",
						s._(
							/*BTDS*/
							"",
							[s._param("learn more link", d.jsx(r("WDSTextualLink.react"), {
								href: o("WAWebFaqUrl").getSharingBusinessInfoForAdsFaqUrl(),
								children: r("WAWebFbtCommon")("Learn more")
							}))]
						)
					]
				}), d.jsx(o("WAWebBizAdPublishButton.react").WAWebBizAdPublishButton, {
					emailOnboardingDataRef: t,
					flowID: n,
					onNavigateToManageAds: l,
					onboardingDataRef: i,
					pageID: a.page_id,
					product: a.product
				})]
			})
		}) });
	}
	p.displayName = p.name + " [from " + i.id + "]";
	var _ = e !== void 0 ? e : e = n("WAWebBizAdCreationRootQuery.graphql"), f = u !== void 0 ? u : u = n("WAWebBizAdCreationRoot_adAccount.graphql");
	function g(e) {
		var t, n, a, l = e.boostedComponent, s = e.data, u = e.draftID, c = e.input, m = e.onNavigateToManageAds, _ = r("useWAWebNativeAdsFlowIDContext")(), g = s.me, h = s.page, y = s.waAdAccountOnboardingData, C = s.emailOnboardingData, b = r("useWAWebBizAdCreationNoticeActionOverrides")(C), v = r("useWAWebBizAdCreationNoticeCTAOverrides")(), S = o("CometRelay").useFragment(f, l), R = String((t = S == null || (n = S.spec) == null || (n = n.ad_account) == null ? void 0 : n.id) != null ? t : ""), L = r("useWAWebBizAdCreationInitialAdgroupsWithPrefill")(l), E = L[0], k = L[1], I = L[2], T = r("getWAWebBizAdCreationEntryMode")({
			boostID: c.boost_id,
			draftID: u
		}), D = u != null ? u : r("justknobx")._("3093") ? (a = s.ctwa) == null || (a = a.latest_wa_web_draft) == null ? void 0 : a.id : null;
		return d.jsx(r("CometPlaceholder.react"), {
			fallback: d.jsx(r("WAWebBizAdCreationLoadingFallback.react"), {}),
			name: i.id,
			children: d.jsx("div", {
				className: "x78zum5 xdt5ytf x1iyjqo2 xl56j7k",
				children: d.jsx(r("WAWebBizAdCreationConfigContextProvider.react"), {
					entryMode: T,
					entryPoint: "whatsapp_smb_web_manage_ads_native",
					flow: "create",
					flowID: _.adCreationFlowID,
					pageID: c.page_id,
					product: c.product,
					children: d.jsx(r("WAWebBizAdCreationLoggerContextProvider.react"), {
						codebase: "whatsapp_smb",
						platform: "whatsapp_smb_web",
						product: "boosted_message",
						recreateBoostId: c.boost_id,
						children: d.jsx(r("WAWebBizAdCreationEnterFlowLogger.react"), {
							adAccountID: R,
							children: d.jsx(r("WAWebBizAdCreationSpecContextProvider.react"), {
								boostedComponentWrapperRef: l,
								initialAdgroups: E,
								initialDraftID: D,
								prefillPromise: I,
								selectedAdgroupID: k,
								children: d.jsx(o("WAWebBizAdCreationPaymentRefetchContext").WAWebBizAdCreationPaymentRefetchProvider, { children: d.jsx(r("WAWebBizAdCreationValidateSpecContextProvider.react"), {
									noticeActionOverrides: b,
									noticeCTAOverrides: v,
									children: d.jsx(r("WAWebBizAdCreationDragDropOverlay.react"), { children: d.jsxs(r("WAWebBizAdCreationSelectedCatalogMediaContextProvider.react"), { children: [d.jsx(r("WAWebBizTwoColumnLayout.react"), {
										primaryContent: d.jsxs(d.Fragment, { children: [
											o("WAWebBizNativeAdsGatingUtils").nativeAdsCreationHawkToolEnabled() ? d.jsx(r("WAWebBizAdCreationHawkWidget.react"), {}) : null,
											d.jsx(r("WAWebBizAdCreationTopNotices.react"), {}),
											d.jsx(r("WAWebBizAdCreationCreativeSection.react"), {}),
											d.jsx(r("WAWebBizAdCreationAudienceSection.react"), { boostedComponentInput: c }),
											d.jsx(r("WAWebBizAdCreationDSASection.react"), {}),
											d.jsx(r("WAWebBizAdCreationSACSection.react"), {}),
											d.jsx(r("WAWebBizAdCreationSAFRContextProvider.react"), {
												boostedComponentWrapperRef: l,
												children: d.jsx(r("WAWebBizAdCreationPlacementSection.react"), { fragmentRef: l })
											}),
											d.jsx(r("WAWebBizAdCreationBudgetSection.react"), { fragmentRef: l }),
											d.jsx(r("WAWebBizAdCreationDurationSection.react"), {}),
											d.jsx(r("WAWebBizAdCreationPaymentSection.react"), {
												adAccountsRef: s,
												emailOnboardingDataRef: C,
												facebookProfileRef: g
											})
										] }),
										secondaryContent: d.jsxs(d.Fragment, { children: [d.jsx(r("WAWebBizAdCreationPreviewSection.react"), { pageRef: h }), d.jsx(r("WAWebBizAdCreationSummarySection.react"), {})] })
									}), d.jsx(p, {
										emailOnboardingDataRef: C,
										flowID: _.adCreationFlowID,
										input: c,
										onNavigateToManageAds: m,
										onboardingDataRef: y
									})] }) })
								}) })
							}, R)
						})
					})
				})
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t, n = e.props, a = e.queries, i = o("CometRelay").usePreloadedQuery(_, a.creationRootQueryReference), l = i == null || (t = i.lwi) == null ? void 0 : t.boostedComponent;
		if (l == null) return r("FBLogger")("wa_ctwa_web").mustfix("boostedComponent is null in WAWebBizAdCreationRoot"), d.jsx(r("WAWebBizAdsErrorPopup.react"), { fallback: d.jsx(r("WAWebBizAdCreationLoadingFallback.react"), {}) });
		var s = a.creationRootQueryReference.variables.input, u = a.creationRootQueryReference.variables.draftID;
		return d.jsx(g, {
			boostedComponent: l,
			data: i,
			draftID: u,
			input: s,
			onNavigateToManageAds: n.onNavigateToManageAds
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);

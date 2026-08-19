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
	"react-compiler-runtime",
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
		var t, n, a, l = o("react-compiler-runtime").c(70), s = e.boostedComponent, u = e.data, c = e.draftID, m = e.input, _ = e.onNavigateToManageAds, g = r("useWAWebNativeAdsFlowIDContext")(), h = u.me, y = u.page, C = u.waAdAccountOnboardingData, b = u.emailOnboardingData, v = r("useWAWebBizAdCreationNoticeActionOverrides")(b), S = r("useWAWebBizAdCreationNoticeCTAOverrides")(), R = o("CometRelay").useFragment(f, s), L = String((t = R == null || (n = R.spec) == null || (n = n.ad_account) == null ? void 0 : n.id) != null ? t : ""), E = r("useWAWebBizAdCreationInitialAdgroupsWithPrefill")(s), k = E[0], I = E[1], T = E[2], D;
		l[0] !== c || l[1] !== m.boost_id ? (D = r("getWAWebBizAdCreationEntryMode")({
			boostID: m.boost_id,
			draftID: c
		}), l[0] = c, l[1] = m.boost_id, l[2] = D) : D = l[2];
		var x = D, $ = c != null ? c : r("justknobx")._("3093") ? (a = u.ctwa) == null || (a = a.latest_wa_web_draft) == null ? void 0 : a.id : null, P;
		l[3] === Symbol.for("react.memo_cache_sentinel") ? (P = d.jsx(r("WAWebBizAdCreationLoadingFallback.react"), {}), l[3] = P) : P = l[3];
		var N;
		l[4] === Symbol.for("react.memo_cache_sentinel") ? (N = { className: "x78zum5 xdt5ytf x1iyjqo2 xl56j7k" }, l[4] = N) : N = l[4];
		var M, w, A;
		l[5] === Symbol.for("react.memo_cache_sentinel") ? (M = o("WAWebBizNativeAdsGatingUtils").nativeAdsCreationHawkToolEnabled() ? d.jsx(r("WAWebBizAdCreationHawkWidget.react"), {}) : null, w = d.jsx(r("WAWebBizAdCreationTopNotices.react"), {}), A = d.jsx(r("WAWebBizAdCreationCreativeSection.react"), {}), l[5] = M, l[6] = w, l[7] = A) : (M = l[5], w = l[6], A = l[7]);
		var F;
		l[8] !== m ? (F = d.jsx(r("WAWebBizAdCreationAudienceSection.react"), { boostedComponentInput: m }), l[8] = m, l[9] = F) : F = l[9];
		var O, B;
		l[10] === Symbol.for("react.memo_cache_sentinel") ? (O = d.jsx(r("WAWebBizAdCreationDSASection.react"), {}), B = d.jsx(r("WAWebBizAdCreationSACSection.react"), {}), l[10] = O, l[11] = B) : (O = l[10], B = l[11]);
		var W;
		l[12] !== s ? (W = d.jsx(r("WAWebBizAdCreationPlacementSection.react"), { fragmentRef: s }), l[12] = s, l[13] = W) : W = l[13];
		var q;
		l[14] !== s || l[15] !== W ? (q = d.jsx(r("WAWebBizAdCreationSAFRContextProvider.react"), {
			boostedComponentWrapperRef: s,
			children: W
		}), l[14] = s, l[15] = W, l[16] = q) : q = l[16];
		var U;
		l[17] !== s ? (U = d.jsx(r("WAWebBizAdCreationBudgetSection.react"), { fragmentRef: s }), l[17] = s, l[18] = U) : U = l[18];
		var V;
		l[19] === Symbol.for("react.memo_cache_sentinel") ? (V = d.jsx(r("WAWebBizAdCreationDurationSection.react"), {}), l[19] = V) : V = l[19];
		var H;
		l[20] !== u || l[21] !== b || l[22] !== h ? (H = d.jsx(r("WAWebBizAdCreationPaymentSection.react"), {
			adAccountsRef: u,
			emailOnboardingDataRef: b,
			facebookProfileRef: h
		}), l[20] = u, l[21] = b, l[22] = h, l[23] = H) : H = l[23];
		var G;
		l[24] !== q || l[25] !== U || l[26] !== H || l[27] !== F ? (G = d.jsxs(d.Fragment, { children: [
			M,
			w,
			A,
			F,
			O,
			B,
			q,
			U,
			V,
			H
		] }), l[24] = q, l[25] = U, l[26] = H, l[27] = F, l[28] = G) : G = l[28];
		var z;
		l[29] !== y ? (z = d.jsx(r("WAWebBizAdCreationPreviewSection.react"), { pageRef: y }), l[29] = y, l[30] = z) : z = l[30];
		var j;
		l[31] === Symbol.for("react.memo_cache_sentinel") ? (j = d.jsx(r("WAWebBizAdCreationSummarySection.react"), {}), l[31] = j) : j = l[31];
		var K;
		l[32] !== z ? (K = d.jsxs(d.Fragment, { children: [z, j] }), l[32] = z, l[33] = K) : K = l[33];
		var Q;
		l[34] !== G || l[35] !== K ? (Q = d.jsx(r("WAWebBizTwoColumnLayout.react"), {
			primaryContent: G,
			secondaryContent: K
		}), l[34] = G, l[35] = K, l[36] = Q) : Q = l[36];
		var X;
		l[37] !== b || l[38] !== g.adCreationFlowID || l[39] !== m || l[40] !== _ || l[41] !== C ? (X = d.jsx(p, {
			emailOnboardingDataRef: b,
			flowID: g.adCreationFlowID,
			input: m,
			onNavigateToManageAds: _,
			onboardingDataRef: C
		}), l[37] = b, l[38] = g.adCreationFlowID, l[39] = m, l[40] = _, l[41] = C, l[42] = X) : X = l[42];
		var Y;
		l[43] !== Q || l[44] !== X ? (Y = d.jsx(r("WAWebBizAdCreationDragDropOverlay.react"), { children: d.jsxs(r("WAWebBizAdCreationSelectedCatalogMediaContextProvider.react"), { children: [Q, X] }) }), l[43] = Q, l[44] = X, l[45] = Y) : Y = l[45];
		var J;
		l[46] !== v || l[47] !== S || l[48] !== Y ? (J = d.jsx(o("WAWebBizAdCreationPaymentRefetchContext").WAWebBizAdCreationPaymentRefetchProvider, { children: d.jsx(r("WAWebBizAdCreationValidateSpecContextProvider.react"), {
			noticeActionOverrides: v,
			noticeCTAOverrides: S,
			children: Y
		}) }), l[46] = v, l[47] = S, l[48] = Y, l[49] = J) : J = l[49];
		var Z;
		l[50] !== L || l[51] !== s || l[52] !== k || l[53] !== T || l[54] !== $ || l[55] !== I || l[56] !== J ? (Z = d.jsx(r("WAWebBizAdCreationSpecContextProvider.react"), {
			boostedComponentWrapperRef: s,
			initialAdgroups: k,
			initialDraftID: $,
			prefillPromise: T,
			selectedAdgroupID: I,
			children: J
		}, L), l[50] = L, l[51] = s, l[52] = k, l[53] = T, l[54] = $, l[55] = I, l[56] = J, l[57] = Z) : Z = l[57];
		var ee;
		l[58] !== L || l[59] !== Z ? (ee = d.jsx(r("WAWebBizAdCreationEnterFlowLogger.react"), {
			adAccountID: L,
			children: Z
		}), l[58] = L, l[59] = Z, l[60] = ee) : ee = l[60];
		var te;
		l[61] !== m.boost_id || l[62] !== ee ? (te = d.jsx(r("WAWebBizAdCreationLoggerContextProvider.react"), {
			codebase: "whatsapp_smb",
			platform: "whatsapp_smb_web",
			product: "boosted_message",
			recreateBoostId: m.boost_id,
			children: ee
		}), l[61] = m.boost_id, l[62] = ee, l[63] = te) : te = l[63];
		var ne;
		return l[64] !== x || l[65] !== g.adCreationFlowID || l[66] !== m.page_id || l[67] !== m.product || l[68] !== te ? (ne = d.jsx(r("CometPlaceholder.react"), {
			fallback: P,
			name: i.id,
			children: d.jsx("div", babelHelpers.extends({}, N, { children: d.jsx(r("WAWebBizAdCreationConfigContextProvider.react"), {
				entryMode: x,
				entryPoint: "whatsapp_smb_web_manage_ads_native",
				flow: "create",
				flowID: g.adCreationFlowID,
				pageID: m.page_id,
				product: m.product,
				children: te
			}) }))
		}), l[64] = x, l[65] = g.adCreationFlowID, l[66] = m.page_id, l[67] = m.product, l[68] = te, l[69] = ne) : ne = l[69], ne;
	}
	function h(e) {
		var t, n = o("react-compiler-runtime").c(7), a = e.props, i = e.queries, l = o("CometRelay").usePreloadedQuery(_, i.creationRootQueryReference), s = l == null || (t = l.lwi) == null ? void 0 : t.boostedComponent;
		if (s == null) {
			r("FBLogger")("wa_ctwa_web").mustfix("boostedComponent is null in WAWebBizAdCreationRoot");
			var u;
			return n[0] === Symbol.for("react.memo_cache_sentinel") ? (u = d.jsx(r("WAWebBizAdsErrorPopup.react"), { fallback: d.jsx(r("WAWebBizAdCreationLoadingFallback.react"), {}) }), n[0] = u) : u = n[0], u;
		}
		var c = i.creationRootQueryReference.variables.input, m = i.creationRootQueryReference.variables.draftID, p;
		return n[1] !== s || n[2] !== l || n[3] !== m || n[4] !== c || n[5] !== a.onNavigateToManageAds ? (p = d.jsx(g, {
			boostedComponent: s,
			data: l,
			draftID: m,
			input: c,
			onNavigateToManageAds: a.onNavigateToManageAds
		}), n[1] = s, n[2] = l, n[3] = m, n[4] = c, n[5] = a.onNavigateToManageAds, n[6] = p) : p = n[6], p;
	}
	l.default = h;
}), 226);

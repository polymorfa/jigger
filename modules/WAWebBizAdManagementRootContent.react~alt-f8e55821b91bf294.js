__d("WAWebBizAdManagementRootContent.react", [
	"CometRelay",
	"WAWebBizAdLogger",
	"WAWebBizAdManagementEmptyState.react",
	"WAWebBizAdManagementRootContent_query.graphql",
	"WAWebBizAdManagementRootContent_static.graphql",
	"WAWebBizAdManagementSMBTableColumns",
	"WAWebBizImpressionLoggingWrapper.react",
	"WAWebBizNativeAdsQplHelpers",
	"WAWebBizNativeAdsWamLogger",
	"WAWebInteractionTracePolicy",
	"WAWebSMBTable.react",
	"WAWebWamEnumLwiAdsIdentityType",
	"WAWebWamEnumLwiScreenAction",
	"WAWebWamEnumLwiScreenReference",
	"compactMap",
	"extractWAWebBizBoostedComponentData",
	"react",
	"useWAWebBizAdManagementDraftItem",
	"useWAWebCometInteractionTracing",
	"useWAWebNativeAdsFlowIDContext"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useMemo, f = d.useRef, g = 10, h = e !== void 0 ? e : e = n("WAWebBizAdManagementRootContent_static.graphql"), y = s !== void 0 ? s : s = n("WAWebBizAdManagementRootContent_query.graphql"), C = { root: {
		backgroundColor: "x1c7u0tx",
		display: "x78zum5",
		flexDirection: "xdt5ytf",
		flexGrow: "x1iyjqo2",
		$$css: !0
	} };
	function b(e) {
		var t, n, a = e.hasCreatedAd, i = e.isWAAEligible, l = e.onAdSelect, s = e.onExistingDraftIDChange, u = e.onLoginToFacebook, d = e.onNavigateToCreation, b = e.onRecreateAd, v = e.onResumeDraft, S = e.pageId1, R = e.queryData, L = e.scrollContainerRef, E = e.selectedKey, k = r("useWAWebNativeAdsFlowIDContext")(), I = r("useWAWebCometInteractionTracing")(r("WAWebInteractionTracePolicy").NAVIGATION_NATIVE_ADS_MANAGE, !0, 60), T = I.completeInteraction, D = I.startInteraction, x = f(!1);
		p(function() {
			x.current || (x.current = !0, o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint.GRAPHQL_QUERY_START), D());
		}, [D]);
		var $ = f(!1);
		p(function() {
			!$.current && S != null && ($.current = !0, r("WAWebBizAdLogger").logCritical({
				event: "enter_flow_ad_center",
				loggerContext: {
					codebase: "whatsapp_smb",
					entryPoint: "whatsapp_smb_web_manage_ads_native",
					flow: "view",
					flowID: k.manageAdsFlowID,
					pageID: S,
					platform: "whatsapp_smb_web",
					product: "boosted_message"
				}
			}));
		}, [k.manageAdsFlowID, S]);
		var P = o("CometRelay").useFragment(h, R), N = o("CometRelay").usePaginationFragment(y, R), M = N.data, w = N.hasNext, A = N.isLoadingNext, F = N.loadNext, O = r("useWAWebBizAdManagementDraftItem")(P == null || (t = P.ctwa) == null ? void 0 : t.latest_wa_web_draft, S, k.manageAdsFlowID, s, v), B = O.pinnedItems, W = m(function() {
			w && !A && F(g);
		}, [
			w,
			A,
			F
		]), q = _(function() {
			var e, t, n = (e = M == null || (t = M.ctwa) == null || (t = t.all_user_ads) == null ? void 0 : t.edges) != null ? e : [], o = n.filter(function(e) {
				var t;
				return ((t = e.node) == null ? void 0 : t.id) != null;
			});
			return r("compactMap")(o, function(e) {
				var t = e.node;
				return t == null ? null : r("extractWAWebBizBoostedComponentData")(t, P == null ? void 0 : P.page, S, l, b);
			});
		}, [
			M == null || (n = M.ctwa) == null || (n = n.all_user_ads) == null ? void 0 : n.edges,
			P == null ? void 0 : P.page,
			S,
			l,
			b
		]), U = f(!1);
		p(function() {
			if (!U.current) {
				var e;
				U.current = !0, (e = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(e.AdsManagementQplPoint.GRAPHQL_QUERY_END), e.adsManagementQplAddPoint(e.AdsManagementQplPoint.TABLE_RENDER), e.adsManagementQplAnnotateAdCount(q.length), e.endAdsManagementQplSuccess(), T();
			}
		}, [q, T]);
		var V = f(!1), H = m(function(e) {
			return e.nodeId;
		}, []), G = m(function(e) {
			if (e.isDraft) {
				o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_MANAGE_AD_DRAFT_AD_CLICK, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, k.manageAdsFlowID), e.onResumeDraft();
				return;
			}
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_ADS_LISTING_CLICKED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, k.manageAdsFlowID, e.boostId), l(e);
		}, [k.manageAdsFlowID, l]);
		return q.length === 0 && B.length === 0 ? c.jsx(r("WAWebBizAdManagementEmptyState.react"), {
			hasCreatedAd: a,
			isWAAEligible: i,
			manageAdsFlowID: k.manageAdsFlowID,
			onLoginToFacebook: u,
			onNavigateToCreation: d,
			pageId1: S
		}) : c.jsx(r("WAWebBizImpressionLoggingWrapper.react"), {
			onImpression: function() {
				return o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_VIEW, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, k.manageAdsFlowID);
			},
			xstyle: C.root,
			children: c.jsx(r("WAWebBizImpressionLoggingWrapper.react"), {
				onImpression: function() {
					q.length > 0 && !V.current && (V.current = !0, o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_TOTAL_METRICS_VIEW, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, k.manageAdsFlowID, null, JSON.stringify({
						null_state: !1,
						pageId: S
					})));
				},
				triggerOnce: !1,
				children: c.jsx(r("WAWebSMBTable.react"), {
					columns: o("WAWebBizAdManagementSMBTableColumns").adManagementColumns,
					getItemKey: H,
					hasMore: w,
					isLoadingMore: A,
					items: q,
					onLoadMore: W,
					onRowClick: G,
					pinnedItems: B,
					scrollContainerRef: L,
					selectedKey: E
				})
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 98);

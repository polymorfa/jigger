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
	"react-compiler-runtime",
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
		var t, n, a, i = o("react-compiler-runtime").c(61), l = e.hasCreatedAd, s = e.isWAAEligible, u = e.onAdSelect, d = e.onExistingDraftIDChange, m = e.onLoginToFacebook, _ = e.onNavigateToCreation, b = e.onRecreateAd, R = e.onResumeDraft, L = e.pageId1, E = e.queryData, k = e.scrollContainerRef, I = e.selectedKey, T = r("useWAWebNativeAdsFlowIDContext")(), D = r("useWAWebCometInteractionTracing")(r("WAWebInteractionTracePolicy").NAVIGATION_NATIVE_ADS_MANAGE, !0, 60), x = D.completeInteraction, $ = D.startInteraction, P = f(!1), N, M;
		i[0] !== $ ? (N = function() {
			P.current || (P.current = !0, o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint.GRAPHQL_QUERY_START), $());
		}, M = [$], i[0] = $, i[1] = N, i[2] = M) : (N = i[1], M = i[2]), p(N, M);
		var w = f(!1), A, F;
		i[3] !== T.manageAdsFlowID || i[4] !== L ? (A = function() {
			!w.current && L != null && (w.current = !0, r("WAWebBizAdLogger").logCritical({
				event: "enter_flow_ad_center",
				loggerContext: {
					codebase: "whatsapp_smb",
					entryPoint: "whatsapp_smb_web_manage_ads_native",
					flow: "view",
					flowID: T.manageAdsFlowID,
					pageID: L,
					platform: "whatsapp_smb_web",
					product: "boosted_message"
				}
			}));
		}, F = [T.manageAdsFlowID, L], i[3] = T.manageAdsFlowID, i[4] = L, i[5] = A, i[6] = F) : (A = i[5], F = i[6]), p(A, F);
		var O = o("CometRelay").useFragment(h, E), B = o("CometRelay").usePaginationFragment(y, E), W = B.data, q = B.hasNext, U = B.isLoadingNext, V = B.loadNext, H = r("useWAWebBizAdManagementDraftItem")(O == null || (t = O.ctwa) == null ? void 0 : t.latest_wa_web_draft, L, T.manageAdsFlowID, d, R), G = H.pinnedItems, z;
		i[7] !== q || i[8] !== U || i[9] !== V ? (z = function() {
			q && !U && V(g);
		}, i[7] = q, i[8] = U, i[9] = V, i[10] = z) : z = i[10];
		var j = z;
		W == null || (n = W.ctwa) == null || (n = n.all_user_ads) == null || n.edges, O == null || O.page;
		var K;
		if (i[11] !== (W == null || (a = W.ctwa) == null || (a = a.all_user_ads) == null ? void 0 : a.edges)) {
			var Q, X, Y;
			K = (Q = W == null || (X = W.ctwa) == null || (X = X.all_user_ads) == null ? void 0 : X.edges) != null ? Q : [], i[11] = W == null || (Y = W.ctwa) == null || (Y = Y.all_user_ads) == null ? void 0 : Y.edges, i[12] = K;
		} else K = i[12];
		var J = K, Z;
		if (i[13] !== J || i[14] !== u || i[15] !== b || i[16] !== L || i[17] !== (O == null ? void 0 : O.page)) {
			var ee = J.filter(S), te;
			i[19] !== u || i[20] !== b || i[21] !== L || i[22] !== (O == null ? void 0 : O.page) ? (te = function(t) {
				var e = t.node;
				return e == null ? null : r("extractWAWebBizBoostedComponentData")(e, O == null ? void 0 : O.page, L, u, b);
			}, i[19] = u, i[20] = b, i[21] = L, i[22] = O == null ? void 0 : O.page, i[23] = te) : te = i[23], Z = r("compactMap")(ee, te), i[13] = J, i[14] = u, i[15] = b, i[16] = L, i[17] = O == null ? void 0 : O.page, i[18] = Z;
		} else Z = i[18];
		var ne = Z, re = f(!1), oe;
		i[24] !== x || i[25] !== ne.length ? (oe = function() {
			if (!re.current) {
				var e;
				re.current = !0, (e = o("WAWebBizNativeAdsQplHelpers")).adsManagementQplAddPoint(e.AdsManagementQplPoint.GRAPHQL_QUERY_END), e.adsManagementQplAddPoint(e.AdsManagementQplPoint.TABLE_RENDER), e.adsManagementQplAnnotateAdCount(ne.length), e.endAdsManagementQplSuccess(), x();
			}
		}, i[24] = x, i[25] = ne.length, i[26] = oe) : oe = i[26];
		var ae;
		i[27] !== x || i[28] !== ne ? (ae = [ne, x], i[27] = x, i[28] = ne, i[29] = ae) : ae = i[29], p(oe, ae);
		var ie = f(!1), le = v, se;
		i[30] !== T.manageAdsFlowID || i[31] !== u ? (se = function(t) {
			if (t.isDraft) {
				o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_MANAGE_AD_DRAFT_AD_CLICK, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, T.manageAdsFlowID), t.onResumeDraft();
				return;
			}
			o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_ADS_LISTING_CLICKED, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, T.manageAdsFlowID, t.boostId), u(t);
		}, i[30] = T.manageAdsFlowID, i[31] = u, i[32] = se) : se = i[32];
		var ue = se;
		if (ne.length === 0 && G.length === 0) {
			var ce;
			return i[33] !== T.manageAdsFlowID || i[34] !== l || i[35] !== s || i[36] !== m || i[37] !== _ || i[38] !== L ? (ce = c.jsx(r("WAWebBizAdManagementEmptyState.react"), {
				hasCreatedAd: l,
				isWAAEligible: s,
				manageAdsFlowID: T.manageAdsFlowID,
				onLoginToFacebook: m,
				onNavigateToCreation: _,
				pageId1: L
			}), i[33] = T.manageAdsFlowID, i[34] = l, i[35] = s, i[36] = m, i[37] = _, i[38] = L, i[39] = ce) : ce = i[39], ce;
		}
		var de;
		i[40] !== T.manageAdsFlowID ? (de = function() {
			return o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_VIEW, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, T.manageAdsFlowID);
		}, i[40] = T.manageAdsFlowID, i[41] = de) : de = i[41];
		var me;
		i[42] !== T.manageAdsFlowID || i[43] !== ne.length || i[44] !== L ? (me = function() {
			ne.length > 0 && !ie.current && (ie.current = !0, o("WAWebBizNativeAdsWamLogger").logManageAdsScreenAction(o("WAWebWamEnumLwiScreenReference").LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE, o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_TOTAL_METRICS_VIEW, o("WAWebWamEnumLwiAdsIdentityType").LWI_ADS_IDENTITY_TYPE.PAGE, T.manageAdsFlowID, null, JSON.stringify({
				null_state: !1,
				pageId: L
			})));
		}, i[42] = T.manageAdsFlowID, i[43] = ne.length, i[44] = L, i[45] = me) : me = i[45];
		var pe;
		i[46] !== j || i[47] !== ue || i[48] !== q || i[49] !== U || i[50] !== ne || i[51] !== G || i[52] !== k || i[53] !== I ? (pe = c.jsx(r("WAWebSMBTable.react"), {
			columns: o("WAWebBizAdManagementSMBTableColumns").adManagementColumns,
			getItemKey: le,
			hasMore: q,
			isLoadingMore: U,
			items: ne,
			onLoadMore: j,
			onRowClick: ue,
			pinnedItems: G,
			scrollContainerRef: k,
			selectedKey: I
		}), i[46] = j, i[47] = ue, i[48] = q, i[49] = U, i[50] = ne, i[51] = G, i[52] = k, i[53] = I, i[54] = pe) : pe = i[54];
		var _e;
		i[55] !== me || i[56] !== pe ? (_e = c.jsx(r("WAWebBizImpressionLoggingWrapper.react"), {
			onImpression: me,
			triggerOnce: !1,
			children: pe
		}), i[55] = me, i[56] = pe, i[57] = _e) : _e = i[57];
		var fe;
		return i[58] !== de || i[59] !== _e ? (fe = c.jsx(r("WAWebBizImpressionLoggingWrapper.react"), {
			onImpression: de,
			xstyle: C.root,
			children: _e
		}), i[58] = de, i[59] = _e, i[60] = fe) : fe = i[60], fe;
	}
	function v(e) {
		return e.nodeId;
	}
	function S(e) {
		var t;
		return ((t = e.node) == null ? void 0 : t.id) != null;
	}
	l.default = b;
}), 98);

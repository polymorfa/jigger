__d("useWAWebBizAdCreationFlowActions", [
	"FBLogger",
	"WAWebBizEnterFlowClickLogger",
	"WAWebBizNativeAdsEnterFlowErrorLogger",
	"WAWebBizNativeAdsEntryTapLogger",
	"WAWebBizNativeAdsFlowTypes",
	"WAWebWamEnumLwiEntryPoint",
	"WAWebWamEnumWebFlowType",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAdCreationIdentityContext",
	"useWAWebNativeAdsFlowIDContext"
], (function(t, n, r, o, a, i, l) {
	var e, s = (e || (e = o("react"))).useCallback;
	function u(e, t, n) {
		var a = o("react-compiler-runtime").c(23), i = r("useWAWebBizAdCreationIdentityContext")(), l = r("useWAWebNativeAdsFlowIDContext")(), s = i == null ? void 0 : i.reloadPreloadedQueries, u = l.regenerateAdCreationFlowID, c;
		a[0] !== e || a[1] !== l.manageAdsFlowID || a[2] !== i || a[3] !== n || a[4] !== u || a[5] !== s ? (c = function(r, a, c) {
			if (s != null) {
				n();
				var t = u();
				o("WAWebBizNativeAdsEntryTapLogger").logEntryTap({
					lwiEntryPoint: a,
					lwiFlowId: t,
					previousLwiFlowId: l.manageAdsFlowID,
					webFlowType: o("WAWebWamEnumWebFlowType").WEB_FLOW_TYPE.NATIVE_WEB
				}), i != null && i.adCreationEntrypointReference == null ? i.prepareAdCreation(t, { boostId: r }).then(function(e) {
					o("WAWebBizEnterFlowClickLogger").logEnterFlowClick({
						entryPoint: c,
						flowID: t,
						pageID: e,
						recreateBoostId: r
					});
				}) : (o("WAWebBizEnterFlowClickLogger").logEnterFlowClick({
					entryPoint: c,
					flowID: t,
					pageID: i == null ? void 0 : i.pageId,
					recreateBoostId: r
				}), s(t, { boostId: r })), e.push(o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation);
			}
		}, a[0] = e, a[1] = l.manageAdsFlowID, a[2] = i, a[3] = n, a[4] = u, a[5] = s, a[6] = c) : c = a[6];
		var d = c, m;
		a[7] !== e || a[8] !== l || a[9] !== i || a[10] !== n || a[11] !== u || a[12] !== s ? (m = function(r, a) {
			if (s != null) {
				n();
				var t;
				a != null ? (l.setAdCreationFlowID(a), t = a) : t = u(), o("WAWebBizNativeAdsEntryTapLogger").logEntryTap({
					lwiEntryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_ADVERTISE_FROM_MANAGE_ADS_DRAFT_LIST,
					lwiFlowId: t,
					previousLwiFlowId: l.manageAdsFlowID,
					webFlowType: o("WAWebWamEnumWebFlowType").WEB_FLOW_TYPE.NATIVE_WEB
				}), (i == null ? void 0 : i.adCreationEntrypointReference) == null ? i == null || i.prepareAdCreation(t, { draftId: r }) : s(t, { draftId: r }), e.push(o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation);
			}
		}, a[7] = e, a[8] = l, a[9] = i, a[10] = n, a[11] = u, a[12] = s, a[13] = m) : m = a[13];
		var p = m, _;
		a[14] !== l.adCreationFlowID || a[15] !== l.manageAdsFlowID || a[16] !== (i == null ? void 0 : i.pageId) || a[17] !== t ? (_ = function(n) {
			if (r("FBLogger")("wa_ctwa_web").mustfix("Native ads enter flow error: " + n.message), t === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation) {
				var e = i == null ? void 0 : i.pageId;
				e != null && o("WAWebBizNativeAdsEnterFlowErrorLogger").logAdCreationEnterFlowError(n, e, l.adCreationFlowID);
			} else o("WAWebBizNativeAdsEnterFlowErrorLogger").logManageAdsGenericError(n, l.manageAdsFlowID, i == null ? void 0 : i.pageId);
		}, a[14] = l.adCreationFlowID, a[15] = l.manageAdsFlowID, a[16] = i == null ? void 0 : i.pageId, a[17] = t, a[18] = _) : _ = a[18], i == null || i.pageId;
		var f = _, g;
		return a[19] !== f || a[20] !== d || a[21] !== p ? (g = {
			handleEnterFlowError: f,
			handleRecreateAd: d,
			handleResumeDraft: p
		}, a[19] = f, a[20] = d, a[21] = p, a[22] = g) : g = a[22], g;
	}
	l.default = u;
}), 98);

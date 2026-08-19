__d("WAWebBizNativeAdsTwoPhaseContainer.react", [
	"FBLogger",
	"WAWebBizAdsErrorPopup.react",
	"WAWebBizNativeAdsEntryTapLogger",
	"WAWebBizNativeAdsFlowLoadable",
	"WAWebBizNativeAdsFlowTypes",
	"WAWebBizNativeAdsLoadingDrawer.react",
	"WAWebBizNativeAdsPhaseOneResolver",
	"WAWebBizNativeAdsQplHelpers",
	"getErrorSafe",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState;
	function m(e) {
		var t = e.entryPoint, n = e.flowID, a = e.preselectedProductId, i = d("loading"), l = i[0], u = i[1], m = d(!1), p = m[0], _ = m[1], f = d(null), g = f[0], h = f[1];
		return c(function() {
			var e = !1;
			return o("WAWebBizNativeAdsPhaseOneResolver").resolvePhaseOne(n).then(function(t) {
				if (!e) {
					o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint.PHASE_1_END), o("WAWebBizNativeAdsQplHelpers").adsManagementQplAnnotateScenario(t.scenario), o("WAWebBizNativeAdsEntryTapLogger").logScenarioResolved({
						flowID: n,
						scenario: t.scenario
					}), o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint.PHASE_2_START);
					var r = t.scenario === "FIRST_TIME_WAA_ELIGIBLE" ? o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation : o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement;
					h(function() {
						return o("WAWebBizNativeAdsFlowLoadable").createBizNativeAdsFlowLoadable({
							flowID: n,
							initialLoadingStep: r,
							onLoadComplete: function() {
								return _(!0);
							},
							phase1Result: t
						});
					}), u("resolved");
				}
			}, function(t) {
				e || (r("FBLogger")("wa_ctwa_web").catching(r("getErrorSafe")(t)).warn("TwoPhaseContainer: phase 1 resolution failed"), u("error"));
			}), function() {
				e = !0;
			};
		}, [n]), l === "error" ? s.jsx(r("WAWebBizAdsErrorPopup.react"), { fallback: s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {}) }) : s.jsxs(s.Fragment, { children: [p ? null : s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {}), g != null ? s.jsx(g, {
			entryPoint: t,
			preselectedProductId: a
		}) : null] });
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);

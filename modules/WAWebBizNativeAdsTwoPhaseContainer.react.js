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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState;
	function m(e) {
		var t = o("react-compiler-runtime").c(13), n = e.entryPoint, a = e.flowID, i = e.preselectedProductId, l = d("loading"), u = l[0], m = l[1], p = d(!1), _ = p[0], f = p[1], g = d(null), h = g[0], y = g[1], C, b;
		if (t[0] !== a ? (C = function() {
			var e = !1;
			return o("WAWebBizNativeAdsPhaseOneResolver").resolvePhaseOne(a).then(function(t) {
				if (!e) {
					o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint.PHASE_1_END), o("WAWebBizNativeAdsQplHelpers").adsManagementQplAnnotateScenario(t.scenario), o("WAWebBizNativeAdsEntryTapLogger").logScenarioResolved({
						flowID: a,
						scenario: t.scenario
					}), o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint.PHASE_2_START);
					var n = t.scenario === "FIRST_TIME_WAA_ELIGIBLE" ? o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation : o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement;
					y(function() {
						return o("WAWebBizNativeAdsFlowLoadable").createBizNativeAdsFlowLoadable({
							flowID: a,
							initialLoadingStep: n,
							onLoadComplete: function() {
								return f(!0);
							},
							phase1Result: t
						});
					}), m("resolved");
				}
			}, function(t) {
				e || (r("FBLogger")("wa_ctwa_web").catching(r("getErrorSafe")(t)).warn("TwoPhaseContainer: phase 1 resolution failed"), m("error"));
			}), (function() {
				e = !0;
			});
		}, b = [a], t[0] = a, t[1] = C, t[2] = b) : (C = t[1], b = t[2]), c(C, b), u === "error") {
			var v;
			return t[3] === Symbol.for("react.memo_cache_sentinel") ? (v = s.jsx(r("WAWebBizAdsErrorPopup.react"), { fallback: s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {}) }), t[3] = v) : v = t[3], v;
		}
		var S;
		t[4] !== _ ? (S = _ ? null : s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {}), t[4] = _, t[5] = S) : S = t[5];
		var R;
		t[6] !== h || t[7] !== n || t[8] !== i ? (R = h != null ? s.jsx(h, {
			entryPoint: n,
			preselectedProductId: i
		}) : null, t[6] = h, t[7] = n, t[8] = i, t[9] = R) : R = t[9];
		var L;
		return t[10] !== S || t[11] !== R ? (L = s.jsxs(s.Fragment, { children: [S, R] }), t[10] = S, t[11] = R, t[12] = L) : L = t[12], L;
	}
	l.default = m;
}), 98);

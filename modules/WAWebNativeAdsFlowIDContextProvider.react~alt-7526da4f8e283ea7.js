__d("WAWebNativeAdsFlowIDContextProvider.react", [
	"WAWebBizNativeAdsScenarioRouter",
	"WAWebNativeAdsFlowIDContext",
	"WAWebPonyfillsCryptoRandomUUID",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useMemo, m = u.useState;
	function p(e) {
		var t = e.children, n = e.flowID, a = e.scenario, i = o("WAWebBizNativeAdsScenarioRouter").isFirstTimeScenario(a), l = m(function() {
			return i ? n : r("WAWebPonyfillsCryptoRandomUUID")();
		}), u = l[0], p = l[1], _ = m(function() {
			return i ? r("WAWebPonyfillsCryptoRandomUUID")() : n;
		}), f = _[0], g = c(function() {
			var e = r("WAWebPonyfillsCryptoRandomUUID")();
			return p(e), e;
		}, []), h = d(function() {
			return {
				adCreationFlowID: u,
				manageAdsFlowID: f,
				regenerateAdCreationFlowID: g,
				setAdCreationFlowID: p
			};
		}, [
			f,
			u,
			g
		]);
		return s.jsx(r("WAWebNativeAdsFlowIDContext").Provider, {
			value: h,
			children: t
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);

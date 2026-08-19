__d("WAWebNativeAdsFlowIDContextProvider.react", [
	"WAWebBizNativeAdsScenarioRouter",
	"WAWebNativeAdsFlowIDContext",
	"WAWebPonyfillsCryptoRandomUUID",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useMemo, m = u.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(15), n = e.children, a = e.flowID, i = e.scenario, l;
		t[0] !== i ? (l = o("WAWebBizNativeAdsScenarioRouter").isFirstTimeScenario(i), t[0] = i, t[1] = l) : l = t[1];
		var u = l, c;
		t[2] !== a || t[3] !== u ? (c = function() {
			return u ? a : r("WAWebPonyfillsCryptoRandomUUID")();
		}, t[2] = a, t[3] = u, t[4] = c) : c = t[4];
		var d = m(c), p = d[0], _ = d[1], f;
		t[5] !== a || t[6] !== u ? (f = function() {
			return u ? r("WAWebPonyfillsCryptoRandomUUID")() : a;
		}, t[5] = a, t[6] = u, t[7] = f) : f = t[7];
		var g = m(f), h = g[0], y;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (y = function() {
			var e = r("WAWebPonyfillsCryptoRandomUUID")();
			return _(e), e;
		}, t[8] = y) : y = t[8];
		var C = y, b;
		t[9] !== p || t[10] !== h ? (b = {
			adCreationFlowID: p,
			manageAdsFlowID: h,
			regenerateAdCreationFlowID: C,
			setAdCreationFlowID: _
		}, t[9] = p, t[10] = h, t[11] = b) : b = t[11];
		var v = b, S;
		return t[12] !== n || t[13] !== v ? (S = s.jsx(r("WAWebNativeAdsFlowIDContext").Provider, {
			value: v,
			children: n
		}), t[12] = n, t[13] = v, t[14] = S) : S = t[14], S;
	}
	l.default = p;
}), 98);

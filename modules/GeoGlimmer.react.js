__d("GeoGlimmer.react", [
	"GeoBaseLoadingState.react",
	"GeoGlimmerDelayedRenderContext",
	"GeoGlimmerGroupContext",
	"GeoGlimmerStaggeringContext",
	"GeoPrivateMakeComponent",
	"react",
	"react-compiler-runtime",
	"useCoordinatedAnimationDelay",
	"useDelayedToggleValue",
	"useGeoGlimmerStyle",
	"useMergeRefs"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useContext, c = 100;
	function d(e) {
		var t = o("react-compiler-runtime").c(17), n = e.containerRef, a = e["data-testid"], i = e.height, l = e.index, d = e.loggingName, m = e.shape, p = e.variant, _ = e.width, f = e.xstyle, g = i === void 0 ? "100%" : i, h = l === void 0 ? 0 : l, y = m === void 0 ? "rectangle" : m, C = p === void 0 ? "default" : p, b = _ === void 0 ? "100%" : _, v = u(r("GeoGlimmerDelayedRenderContext")), S = r("useDelayedToggleValue")(!1, v ? c : 0), R;
		t[0] !== S || t[1] !== y || t[2] !== C ? (R = {
			isVisible: S,
			shape: y,
			variant: C
		}, t[0] = S, t[1] = y, t[2] = C, t[3] = R) : R = t[3];
		var L = r("useGeoGlimmerStyle")(R), E = u(r("GeoGlimmerGroupContext")), k = E.isGlimmerGroup, I = u(r("GeoGlimmerStaggeringContext")), T = r("useCoordinatedAnimationDelay")(I, h), D = T.glimmerRef, x = T.style, $ = S || !k ? b : void 0, P = r("useMergeRefs")(n, D), N;
		t[4] !== g || t[5] !== x || t[6] !== $ ? (N = babelHelpers.extends({
			width: $,
			height: g
		}, x), t[4] = g, t[5] = x, t[6] = $, t[7] = N) : N = t[7];
		var M;
		t[8] !== L || t[9] !== f ? (M = [L, f], t[8] = L, t[9] = f, t[10] = M) : M = t[10];
		var w;
		return t[11] !== d || t[12] !== P || t[13] !== N || t[14] !== M || t[15] !== a ? (w = s.jsx(r("GeoBaseLoadingState.react"), {
			containerRef: P,
			"data-testid": void 0,
			loggingName: d,
			style: N,
			xstyle: M
		}), t[11] = d, t[12] = P, t[13] = N, t[14] = M, t[15] = a, t[16] = w) : w = t[16], w;
	}
	var m = o("GeoPrivateMakeComponent").makeGeoComponent("GeoGlimmer", d);
	l.default = m;
}), 98);

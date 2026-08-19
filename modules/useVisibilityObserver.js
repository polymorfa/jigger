__d("useVisibilityObserver", ["react-compiler-runtime", "useViewportDuration"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = 0, s = [
		0,
		.25,
		.5,
		.75,
		1
	], u = [
		0,
		.05,
		.1,
		.15,
		.2,
		.25,
		.3,
		.35,
		.4,
		.45,
		.5,
		.55,
		.6,
		.65,
		.7,
		.75,
		.8,
		.85,
		.9,
		.95,
		1
	], c = {
		EXPENSIVE: u,
		LITE: e,
		MODERATE: s
	};
	function d(e) {
		var t, n = o("react-compiler-runtime").c(7), a = e.onHidden, i = e.onIntersection, l = e.onVisibilityDurationUpdated, s = e.onVisible, u = e.options, d = c[(t = u == null ? void 0 : u.thresholdOverride) != null ? t : "LITE"], m;
		return n[0] !== a || n[1] !== i || n[2] !== l || n[3] !== s || n[4] !== u || n[5] !== d ? (m = {
			onHidden: a,
			onIntersection: i,
			onVisibilityDurationUpdated: l,
			onVisible: s,
			options: u,
			threshold: d
		}, n[0] = a, n[1] = i, n[2] = l, n[3] = s, n[4] = u, n[5] = d, n[6] = m) : m = n[6], r("useViewportDuration")(m);
	}
	l.default = d;
}), 98);

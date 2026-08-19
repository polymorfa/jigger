__d("WAWebCometMain.react", [
	"WAWebAppWrapper.react",
	"WAWebContentEntryPointContext",
	"WAWebFullScreenEntryPointContext",
	"WAWebRouteHeaderPlugin",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(6), n = e.entryPoints, a = n.contentEntryPoint, i = n.fullScreenEntryPoint, l = i != null ? i : null, u = a != null ? a : null, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = s.jsx(o("WAWebRouteHeaderPlugin").WAWebRouteHeaderPluginProvider, { children: s.jsx(r("WAWebAppWrapper.react"), {}) }), t[0] = c) : c = t[0];
		var d;
		t[1] !== u ? (d = s.jsx(o("WAWebContentEntryPointContext").WAWebContentEntryPointProvider, {
			value: u,
			children: c
		}), t[1] = u, t[2] = d) : d = t[2];
		var m;
		return t[3] !== l || t[4] !== d ? (m = s.jsx(o("WAWebFullScreenEntryPointContext").WAWebFullScreenEntryPointProvider, {
			value: l,
			children: d
		}), t[3] = l, t[4] = d, t[5] = m) : m = t[5], m;
	}
	l.default = u;
}), 98);

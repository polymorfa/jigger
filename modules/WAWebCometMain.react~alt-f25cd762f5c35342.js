__d("WAWebCometMain.react", [
	"WAWebAppWrapper.react",
	"WAWebContentEntryPointContext",
	"WAWebFullScreenEntryPointContext",
	"WAWebRouteHeaderPlugin",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.entryPoints, n = t.contentEntryPoint, a = t.fullScreenEntryPoint;
		return s.jsx(o("WAWebFullScreenEntryPointContext").WAWebFullScreenEntryPointProvider, {
			value: a != null ? a : null,
			children: s.jsx(o("WAWebContentEntryPointContext").WAWebContentEntryPointProvider, {
				value: n != null ? n : null,
				children: s.jsx(o("WAWebRouteHeaderPlugin").WAWebRouteHeaderPluginProvider, { children: s.jsx(r("WAWebAppWrapper.react"), {}) })
			})
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);

__d("WAFlowsButtonAllModules.react", [
	"WAFlowsEnvContext.react",
	"WAFlowsOldButton.react",
	"WDSNativeButtonWeb.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("WAFlowsEnvContext.react").useWAFlowsEnv(), n = t.env;
		return {
			android: s.jsx(r("WAFlowsOldButton.react"), babelHelpers.extends({}, e)),
			ios: s.jsx(r("WAFlowsOldButton.react"), babelHelpers.extends({}, e)),
			wa_web: s.jsx(o("WDSNativeButtonWeb.react").WDSNativeButtonWeb, babelHelpers.extends({}, e))
		}[n.platform];
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);

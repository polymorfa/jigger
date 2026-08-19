__d("WAFlowsImagePlaceholder.react", [
	"WAFlowsEnvContext.react",
	"WDSNativeImagePlaceholder.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("WAFlowsEnvContext.react").useWAFlowsEnv(), n = t.env;
		return s.jsx(r("WDSNativeImagePlaceholder.react"), babelHelpers.extends({}, e, { platform: n.platform }));
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);

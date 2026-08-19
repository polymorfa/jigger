__d("WAFlowsTextAreaAllModules.react", [
	"WAFlowsEnvContext.react",
	"WAFlowsTextAreaAndroid.react",
	"WAFlowsTextAreaIOS.react",
	"WAFlowsTextAreaWAWeb.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("WAFlowsEnvContext.react").useWAFlowsEnv(), n = t.env;
		return {
			android: s.jsx(r("WAFlowsTextAreaAndroid.react"), babelHelpers.extends({}, e)),
			ios: s.jsx(r("WAFlowsTextAreaIOS.react"), babelHelpers.extends({}, e)),
			wa_web: s.jsx(r("WAFlowsTextAreaWAWeb.react"), babelHelpers.extends({}, e))
		}[n.platform];
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);

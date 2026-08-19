__d("WAFlowsTextInputAllModules.react", [
	"WAFlowsEnvContext.react",
	"WAFlowsTextInputAndroid.react",
	"WAFlowsTextInputIOS.react",
	"WAFlowsTextInputWAWeb.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("WAFlowsEnvContext.react").useWAFlowsEnv(), n = t.env;
		return {
			android: s.jsx(r("WAFlowsTextInputAndroid.react"), babelHelpers.extends({}, e)),
			ios: s.jsx(r("WAFlowsTextInputIOS.react"), babelHelpers.extends({}, e)),
			wa_web: s.jsx(r("WAFlowsTextInputWAWeb.react"), babelHelpers.extends({}, e))
		}[n.platform];
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);

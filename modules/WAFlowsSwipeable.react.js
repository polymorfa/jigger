__d("WAFlowsSwipeable.react", [
	"WAFlowsEnvContext.react",
	"WDSNativeSwipeable.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("WAFlowsEnvContext.react").useWAFlowsEnv(), n = t.env.isRTL;
		return s.jsx(r("WDSNativeSwipeable.react"), babelHelpers.extends({}, e, { isRTL: n }));
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);

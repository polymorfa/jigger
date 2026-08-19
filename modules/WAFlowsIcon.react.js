__d("WAFlowsIcon.react", [
	"WAFlowsEnvContext.react",
	"WDSNativeFlowsIcon.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react"));
	function c(t) {
		var n = t.ref, r = babelHelpers.objectWithoutPropertiesLoose(t, e), a = o("WAFlowsEnvContext.react").useWAFlowsEnv(), i = a.env;
		return u.jsx(o("WDSNativeFlowsIcon.react").WDSNativeFlowsIcon, babelHelpers.extends({}, r, {
			ref: n,
			platform: i.platform
		}));
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);

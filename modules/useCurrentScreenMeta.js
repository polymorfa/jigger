__d("useCurrentScreenMeta", ["WAFlowsStateProvider.react", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useContext, c = s.useMemo;
	function d() {
		var e = o("WAFlowsStateProvider.react").useWAFlowsState(), t = e.internal.screenHistory, n = u(o("WAFlowsStateProvider.react").FlowMetaContext);
		return c(function() {
			return !n || t.length === 0 ? null : n.getScreenMeta(t[t.length - 1]);
		}, [t, n]);
	}
	l.default = d;
}), 98);

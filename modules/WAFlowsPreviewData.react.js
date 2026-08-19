__d("WAFlowsPreviewData.react", ["FBLogger", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.createContext, d = u.useContext, m = u.useMemo, p = u.useState, _ = c(null);
	function f(e) {
		var t = e.children, n = e.initialData, r = p(n), o = r[0], a = r[1], i = m(function() {
			return {
				initData: o,
				setInitData: a
			};
		}, [o]);
		return s.jsx(_.Provider, {
			value: i,
			children: t
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g() {
		var e = d(_);
		if (e == null) throw r("FBLogger")("wa_flows").mustfixThrow("useWAFlowsWebPreviewInitData must be used in a component wrapped in WAFlowsWebPreviewInitDataContextProvider");
		return e;
	}
	l.WAFlowsWebPreviewInitDataContextProvider = f, l.useWAFlowsWebPreviewInitData = g;
}), 98);

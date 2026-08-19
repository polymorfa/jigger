__d("usePopPage", [
	"BaseMultiPageViewContext",
	"FBLogger",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useContext;
	function d() {
		var e, t = c(r("BaseMultiPageViewContext")), n = u(function() {
			r("FBLogger")("BaseMultiPageView").mustfix("usePopPage can only be used inside BaseMultiPageView.");
		}, []);
		return t == null ? n : (e = t.popPage) != null ? e : null;
	}
	l.default = d;
}), 98);

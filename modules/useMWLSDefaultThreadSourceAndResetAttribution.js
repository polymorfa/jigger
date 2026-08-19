__d("useMWLSDefaultThreadSourceAndResetAttribution", [
	"LSThreadAttributionTypeUtil",
	"react",
	"react-compiler-runtime",
	"useLSMessagingSource"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useCallback;
	function u() {
		var e = o("react-compiler-runtime").c(2), t = r("useLSMessagingSource")(), n;
		return e[0] !== t ? (n = function(n) {
			return o("LSThreadAttributionTypeUtil").getSourceAndResetAttribution(n, t);
		}, e[0] = t, e[1] = n) : n = e[1], n;
	}
	l.default = u;
}), 98);

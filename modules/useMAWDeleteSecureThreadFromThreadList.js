__d("useMAWDeleteSecureThreadFromThreadList", [
	"react-compiler-runtime",
	"useMAWDeleteSecureThread",
	"useMWNavigateAfterLeavingGroup"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		var n = o("react-compiler-runtime").c(3), a = r("useMWNavigateAfterLeavingGroup")(e, 1), i;
		return n[0] !== a || n[1] !== t ? (i = function() {
			t && a();
		}, n[0] = a, n[1] = t, n[2] = i) : i = n[2], r("useMAWDeleteSecureThread")(e, i);
	}
	l.default = e;
}), 98);

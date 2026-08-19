__d("MAWUnrecoverableErrorBoundary.react", [
	"react",
	"react-compiler-runtime",
	"useMAWUnrecoverableDbError",
	"useWAExceededStorageQuota"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(3), n = e.children, a = e.fallback, i = r("useMAWUnrecoverableDbError")(), l = r("useWAExceededStorageQuota")(), s = i != null ? i : l;
		if (s != null && a != null) {
			var u;
			return t[0] !== s || t[1] !== a ? (u = a(s), t[0] = s, t[1] = a, t[2] = u) : u = t[2], u;
		} else return n;
	}
	l.default = u;
}), 98);

__d("MAWUnrecoverableErrorBoundary.react", [
	"react",
	"useMAWUnrecoverableDbError",
	"useWAExceededStorageQuota"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.children, n = e.fallback, o = r("useMAWUnrecoverableDbError")(), a = r("useWAExceededStorageQuota")(), i = o != null ? o : a;
		return i != null && n != null ? n(i) : t;
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);

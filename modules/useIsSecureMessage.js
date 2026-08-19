__d("useIsSecureMessage", [
	"LSMessagingThreadTypeUtil",
	"ReQL",
	"ReQLSuspense",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		var r, a = o("react-compiler-runtime").c(2), l = (r = o("ReQLSuspense").useFirst(function() {
			return t == null ? o("ReQL").empty() : o("ReQL").fromTableAscending(e.tables.threads, ["threadType"]).getKeyRange(t.threadKey).map(s);
		}, [e, t], i.id + ":37")) != null ? r : n.fallbackThreadType;
		if (l == null) {
			var u;
			return (u = n.fallbackIsSecure) != null ? u : !1;
		}
		var c;
		return a[0] !== l ? (c = o("LSMessagingThreadTypeUtil").isArmadilloSecure(l), a[0] = l, a[1] = c) : c = a[1], c;
	}
	function s(e) {
		var t = e.threadType;
		return t;
	}
	l.default = e;
}), 98);

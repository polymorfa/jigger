__d("useStorageUsageMetricsLogger", [
	"cr:20551",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useEffect;
	function u() {
		var e = o("react-compiler-runtime").c(1), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [], e[0] = t) : t = e[0], s(c, t);
	}
	function c() {
		n("cr:20551") == null || n("cr:20551").logMAWDBUsageMetrics();
	}
	l.default = u;
}), 98);

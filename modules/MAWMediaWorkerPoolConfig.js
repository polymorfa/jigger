__d("MAWMediaWorkerPoolConfig", ["$InternalEnum", "qex"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t, n, o = (t = e === "silent" ? r("qex")._("5604") : r("qex")._("530")) != null ? t : 1, a = (n = globalThis.navigator) == null ? void 0 : n.hardwareConcurrency;
		return a == null || a <= 2 ? 1 : Math.max(1, o);
	}
	var s = n("$InternalEnum")({
		EAGER: "eager",
		DEFERRED: "deferred",
		DEFERRED_SMART: "deferred_smart"
	});
	function u(e) {
		var t, n = e === "silent" ? r("qex")._("5605") : r("qex")._("637");
		return (t = s.cast(n)) != null ? t : s.EAGER;
	}
	function c(e) {
		var t;
		return (t = e === "silent" ? r("qex")._("5606") : r("qex")._("5358")) != null ? t : !1;
	}
	var d = 300;
	function m(e) {
		var t;
		return (t = e === "silent" ? r("qex")._("5607") : r("qex")._("5359")) != null ? t : d;
	}
	l.getMaxPoolSize = e, l.WorkerInitPolicy = s, l.getWorkerInitPolicy = u, l.getIdleCleanupEnabled = c, l.getIdleCleanupTtlSeconds = m;
}), 98);

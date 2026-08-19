__d("MAWComputeCachePayloadFromScratch", [
	"MpsWorkerCacheServices",
	"WAWaitForUserUnblocked",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = e.instanceKey, n = e.isLowPriority, r = e.keys, o = e.namespace;
		return s({
			instanceKey: t,
			isLowPriority: n,
			keys: r,
			namespace: o
		});
	}
	function s(e) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.instanceKey, n = e.isLowPriority, r = e.keys, a = e.namespace;
			return yield o("WAWaitForUserUnblocked").waitForUserUnblocked(), o("MpsWorkerCacheServices").getMpsWorkerCacheServices().computeCachePayloadFromScratch(r, n ? "cache-invalidation" : "from-scratch", t, n);
		}), u.apply(this, arguments);
	}
	l.computeCachePayloadFromScratch = e;
}), 98);

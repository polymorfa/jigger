__d("MAWComputeCachePayloadFromScratch", ["MpsWorkerCacheServices", "WAWaitForUserUnblocked"], (function(t, n, r, o, a, i, l) {
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
	async function s(e) {
		var t = e.instanceKey, n = e.isLowPriority, r = e.keys, a = e.namespace;
		return await o("WAWaitForUserUnblocked").waitForUserUnblocked(), o("MpsWorkerCacheServices").getMpsWorkerCacheServices().computeCachePayloadFromScratch(r, n ? "cache-invalidation" : "from-scratch", t, n);
	}
	l.computeCachePayloadFromScratch = e;
}), 98);

__d("MAWDBUsageMetrics", [
	"FBLogger",
	"WebStorageEstimator",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("requireDeferred")("WebStorageManagerEstimatesFalcoEvent").__setRef("MAWDBUsageMetrics");
	function s() {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			try {
				var t = yield o("WebStorageEstimator").estimateStorage();
				e.onReady(function(e) {
					r("FBLogger")("messenger_web").debug("Sending storage manager estimates falco event, quota: %s, usage: %s, usage_details: %s", t == null ? void 0 : t.quota, t == null ? void 0 : t.usage, JSON.stringify(t == null ? void 0 : t.usageDetails)), e.log(function() {
						var e, n, r, o, a, i, l, s;
						return {
							quota: String((e = t == null ? void 0 : t.quota) != null ? e : 0),
							usage: String((n = t == null ? void 0 : t.usage) != null ? n : 0),
							usage_details: {
								caches: String((r = t == null || (o = t.usageDetails) == null ? void 0 : o.caches) != null ? r : 0),
								indexedDB: String((a = t == null || (i = t.usageDetails) == null ? void 0 : i.indexedDB) != null ? a : 0),
								serviceWorkerRegistrations: String((l = t == null || (s = t.usageDetails) == null ? void 0 : s.serviceWorkerRegistrations) != null ? l : 0)
							}
						};
					});
				});
			} catch (e) {
				var n = r("getErrorSafe")(e);
				r("FBLogger")("messenger_web").catching(n).warn("Error while getting the storage manager estimate");
				return;
			}
		}), u.apply(this, arguments);
	}
	l.logMAWDBUsageMetrics = s;
}), 98);

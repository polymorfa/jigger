__d("MpsWorkerCacheServices", [
	"FBLogger",
	"MAWBridge",
	"MAWCacheServiceDB",
	"MAWCacheServiceQPL",
	"MAWCacheServiceUtils",
	"MAWLoggerUtils",
	"MpsSnippetsCacheService",
	"MsgrSchedulerQPL",
	"NativeSchedulerTickStrategy",
	"TaskScheduler",
	"TaskSchedulerPriority",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		var e = o("TaskScheduler").taskScheduler("maw-cache-service-snippets", {
			concurrency: 1,
			failOnTimeout: !0,
			promotionTimeoutMs: 6e4,
			timeoutMs: 3e4
		}, o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy());
		return e.setLifecycleListener(o("MsgrSchedulerQPL").makeMsgrSchedulerQPLListener()), e;
	}
	var s = (function() {
		function t() {
			this.$1 = o("MAWCacheServiceUtils").getMAWCacheServiceBroadcastChannel(), this.$2 = o("MpsSnippetsCacheService").getMpsSnippetsCacheService(), this.$3 = e();
		}
		var a = t.prototype;
		return a.$4 = function(t, n, r, a) {
			var e = {
				cache: n,
				instanceKey: a,
				namespace: t,
				source: r
			};
			this.$1 == null ? o("MAWBridge").getBridge().fireAndForget("event", "broadcastChannelFallback", {
				event: { data: e },
				namespace: o("MAWCacheServiceUtils").MAW_CACHE_SERVICE_BROADCAST_CHANNEL
			}) : this.$1.postMessage(e);
		}, a.$5 = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, a) {
				var i = e.namespace, l = o("MAWCacheServiceUtils").findDuplicates(t, function(e) {
					var t = e[0], n = e[1];
					return t;
				});
				if (l.length > 0 && (r("FBLogger")("MAWCacheService").mustfix("Found duplicate keys in cache: %s. Original keys: %s, Namespace: %s, Source: %s", l.map(function(e) {
					var t = e[0], n = e[1];
					return t;
				}).join(", "), t.map(function(e) {
					var t = e[0], n = e[1];
					return t;
				}).join(", "), i, n), a != null && r("MAWCacheServiceQPL").addAnnotationsQPL(a, {
					bool: { hasDuplicateKeys: !0 },
					string_array: { duplicateKeys: r("MAWCacheServiceQPL").redactKeysForNonEmployee(l.map(function(e) {
						var t = e[0], n = e[1];
						return t;
					})) }
				})), t.length === 0) {
					a != null && (r("MAWCacheServiceQPL").addPointQPL(a, "nothing_to_update_in_cache", n), r("MAWCacheServiceQPL").endSuccessQPL(a));
					return;
				}
				a != null && r("MAWCacheServiceQPL").addPointQPL(a, "updating_cache_in_persisted_start", n), e.updateInMemoryCacheBulk(t);
				try {
					var s = o("MAWCacheServiceDB").convertCacheValueToDBRawValue(t).map(function(e) {
						return babelHelpers.extends({}, e, { key: e.key + "_mps_reactive" });
					}), u = yield o("MAWCacheServiceDB").getOrSetupMAWCacheDB();
					yield u.runInTransaction([i], "readwrite", function(e) {
						var t = s.map(function(e) {
							return {
								item: e,
								selector: [e.key]
							};
						});
						return e.stores[i].bulkUpsert("key", t);
					}, "update_cache_" + i), a != null && r("MAWCacheServiceQPL").addPointQPL(a, "updating_cache_in_persisted_end", n);
				} catch (e) {
					var c = r("getErrorSafe")(e);
					a != null && (r("MAWCacheServiceQPL").addAnnotationsQPL(a, { string: { error: c.message } }), r("MAWCacheServiceQPL").addPointQPL(a, "updating_cache_in_persisted_failed", n)), r("FBLogger")("MAWCacheService").catching(c).mustfix("Failed to update persisted cache");
				}
				a != null && r("MAWCacheServiceQPL").addPointQPL(a, "broadcasting_to_ui_start", n), this.$4(i, t, n, a);
			});
			function t(t, n, r, o) {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.calculateDelta = function(t) {
			var e = this, n = this.$2, a = n.shouldDropDelta(t);
			a.then(function(a) {
				if (!a) return e.$3.run(function() {
					return n.calculateDelta(t).then(function(t) {
						var a = t.map(function(e) {
							var t = e[0], n = e[1];
							return t;
						}), i = o("MAWLoggerUtils").createInstanceKey();
						return t.length !== 0 && (r("MAWCacheServiceQPL").startQPL(i, n.namespace), r("MAWCacheServiceQPL").addAnnotationsQPL(i, {
							bool: { isRealtimeUpdate: !0 },
							int: { instanceKey: i },
							string_array: { realtimeUpdatedKeys: a }
						})), e.$5(n, t, "realtime-update", i);
					});
				}, {
					name: "maw_calculate_delta",
					priority: o("TaskSchedulerPriority").NORMAL_PRIORITY
				}).promise;
			}).catch(function(e) {
				r("FBLogger")("MAWCacheService").catching(r("getErrorSafe")(e)).warn("Failed to calculate delta");
			});
		}, a.computeCachePayloadFromScratch = function(t, n, a, i) {
			var e = this;
			a != null && r("MAWCacheServiceQPL").registerInstanceKeyInWorker(a), r("MAWCacheServiceQPL").addPointQPL(a, "compute_from_scratch_start", n), r("MAWCacheServiceQPL").addAnnotationsQPL(a, { string_array: { keysReceivedInWorker: r("MAWCacheServiceQPL").redactKeysForNonEmployee(t) } });
			var l = this.$2;
			return this.$3.run(function() {
				return l.computeCachePayloadFromScratch(t, null, i).then(function(t) {
					return r("MAWCacheServiceQPL").addPointQPL(a, "compute_from_scratch_end", n), e.$5(l, t, n, a);
				}).catch(function(e) {
					r("MAWCacheServiceQPL").endFailureQPL(a, "compute_from_scratch_failed", n), r("FBLogger")("MAWCacheService").catching(e).warn("Failed to compute cache payload from scratch");
				});
			}, {
				name: "maw_compute_cache_payload_" + n + "_" + (i ? "low-pri" : "regular"),
				priority: i ? o("TaskSchedulerPriority").BACKGROUND_PRIORITY : o("TaskSchedulerPriority").NORMAL_PRIORITY
			}).promise;
		}, a.computeVisibilitySnippets = function(t) {
			var e = this, n = this.$2;
			return this.$3.run(function() {
				return n.computeVisibilitySnippetPayload(t).then(function(t) {
					if (t.length !== 0) return e.$5(n, t, "cache-invalidation", o("MAWLoggerUtils").createInstanceKey());
				});
			}, {
				name: "maw_compute_visibility_snippets",
				priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY
			}).promise;
		}, t;
	})(), u = null, c = function() {
		return u == null && (u = new s()), u;
	};
	l.getMpsWorkerCacheServices = c;
}), 98);

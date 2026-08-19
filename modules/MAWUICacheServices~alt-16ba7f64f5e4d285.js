__d("MAWUICacheServices", [
	"BroadcastChannelFallback",
	"FBLogger",
	"MAWBridgeSendAndReceive",
	"MAWCacheServiceQPL",
	"MAWCacheServiceUtils",
	"MAWLoggerUtils",
	"MAWUICacheServiceRegistry",
	"MAWUICacheServicesBase",
	"promiseDone",
	"shallowArrayEqual"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = (function() {
		function e() {
			this.$1 = new (o("MAWUICacheServicesBase")).MAWUICacheServicesBase(o("MAWUICacheServiceRegistry").getUICacheServiceRegistry()), this.$2 = o("MAWCacheServiceUtils").getMAWCacheServiceBroadcastChannel(), this.$3();
		}
		var t = e.prototype;
		return t.$3 = function() {
			var e = this, t = function(n) {
				var t, o, a, i;
				if (typeof n == "object" && n != null && typeof n.data == "object" && n.data !== null && typeof ((t = n.data) == null ? void 0 : t.namespace) == "string" && typeof ((o = n.data) == null ? void 0 : o.source) == "string" && typeof ((a = n.data) == null ? void 0 : a.cache) == "object" && ((i = n.data) == null ? void 0 : i.cache) !== null && Array.isArray(n.data.cache)) {
					var l, s = n.data.namespace, u = n.data.cache, c = n.data.source, d;
					typeof ((l = n.data) == null ? void 0 : l.instanceKey) == "number" ? (d = n.data.instanceKey, c === "realtime-update" && r("MAWCacheServiceQPL").registerInstanceKeyInUI(d), r("MAWCacheServiceQPL").addPointQPL(d, "broadcasting_to_ui_end", c)) : r("FBLogger")("MAWCacheService").info("Invalid instance key received via broadcast channel."), e.$1.updateInMemoryCacheAndTriggerCallback(s, u, c, d);
				} else throw r("FBLogger")("messenger_web").mustfixThrow("Invalid payload received via broadcast channel.");
			};
			this.$2 == null ? o("BroadcastChannelFallback").registerBroadcastChannelFallbackListener(o("MAWCacheServiceUtils").MAW_CACHE_SERVICE_BROADCAST_CHANNEL, t) : this.$2.onmessage = t;
		}, t.resetInMemoryCache = function(t, n) {
			this.$1.resetInMemoryCache(t, n);
		}, t.checkExistingCacheOrGetFromScratchAndNotifyListenersFor = async function(t, n) {
			var e = this, a = Array.from(new Set(n)), i = o("MAWLoggerUtils").createInstanceKey();
			r("MAWCacheServiceQPL").startQPL(i, t), r("MAWCacheServiceQPL").addAnnotationsQPL(i, {
				string: { instanceKey: i.toString() },
				string_array: { allKeys: r("MAWCacheServiceQPL").redactKeysForNonEmployee(a) }
			});
			var l = this.$1.checkInMemoryCacheAndTriggerCallback(t, a, i);
			if (l.length === 0) {
				r("FBLogger")("MAWUICacheServices").info("All keys are in memory cache. Namespace: %s", t);
				return;
			}
			var s = await this.$1.checkPersistedCacheAndTriggerCallback(t, l, i).catch(function(e) {
				return r("FBLogger")("MAWCacheService").catching(e).mustfix("Failed to read from persisted cache in UI.", t), r("MAWCacheServiceQPL").addPointQPL(i, "read_from_persisted_cache_failed"), l;
			});
			if (r("shallowArrayEqual")(l, s) ? this.$1.QPLMetadata.set(i, "all-from-scratch") : (r("FBLogger")("MAWUICacheServices").info("Sending low priority bridge call to invalidate cache for keys: %s", l.join(", ")), r("MAWCacheServiceQPL").addPointQPL(i, "invalidating_cache"), r("MAWCacheServiceQPL").addAnnotationsQPL(i, { string_array: { keysToInvalidateCacheFor: r("MAWCacheServiceQPL").redactKeysForNonEmployee(l) } }), r("promiseDone")(o("MAWBridgeSendAndReceive").sendAndReceive("backend", "computeCachePayloadFromScratch", {
				instanceKey: i,
				isLowPriority: !0,
				keys: l,
				namespace: t
			}).catch(function(e) {
				r("MAWCacheServiceQPL").addPointQPL(i, "invalidating_cache_failed"), r("FBLogger")("MAWCacheService").catching(e).mustfix("Failed to invalidate potential outdated persisted cache.", t);
			}))), r("MAWCacheServiceQPL").addAnnotationsQPL(i, { int: {
				memoryHitRate: Math.floor((a.length - l.length) / a.length * 100),
				persistedHitRate: Math.floor((l.length - s.length) / l.length * 100)
			} }), s.length === 0) {
				r("FBLogger")("MAWUICacheServices").info("All keys are in persisted cache. Namespace: %s", t);
				return;
			}
			r("FBLogger")("MAWUICacheServices").info("Sending bridge call to calculate cache from scratch for keys: %s", s.join(", ")), r("MAWCacheServiceQPL").addPointQPL(i, "sending_bridge_call_to_compute_from_scratch"), r("MAWCacheServiceQPL").addAnnotationsQPL(i, { string_array: { keysToBeCalculatedFromScratch: r("MAWCacheServiceQPL").redactKeysForNonEmployee(s) } }), await o("MAWBridgeSendAndReceive").sendAndReceive("backend", "computeCachePayloadFromScratch", {
				instanceKey: i,
				isLowPriority: !1,
				keys: s,
				namespace: t
			}).catch(function(n) {
				r("MAWCacheServiceQPL").endFailureQPL(i, "sending_bridge_call_to_compute_from_scratch_failed"), r("MAWCacheServiceQPL").addAnnotationsQPL(i, { string: { error: n.message } }), e.$1.QPLMetadata.delete(i), r("FBLogger")("MAWCacheService").catching(n).mustfix("Failed to compute cache from scratch for", t);
			});
		}, t.getFromScratchSkippingCacheAndNotifyListenersFor = async function(t, n) {
			var e = this, a, i = Array.from(new Set(n)), l = o("MAWLoggerUtils").createInstanceKey();
			(a = r("MAWCacheServiceQPL")).startQPL(l, t), a.addAnnotationsQPL(l, {
				string: { instanceKey: l.toString() },
				string_array: { allKeys: a.redactKeysForNonEmployee(i) }
			}), this.$1.QPLMetadata.set(l, "all-from-scratch"), a.addPointQPL(l, "sending_bridge_call_to_compute_from_scratch_skipping_cache"), await o("MAWBridgeSendAndReceive").sendAndReceive("backend", "computeCachePayloadFromScratch", {
				instanceKey: l,
				isLowPriority: !1,
				keys: i,
				namespace: t
			}).catch(function(n) {
				r("MAWCacheServiceQPL").endFailureQPL(l, "sending_bridge_call_to_compute_from_scratch_failed"), r("MAWCacheServiceQPL").addAnnotationsQPL(l, { string: { error: n.message } }), e.$1.QPLMetadata.delete(l), r("FBLogger")("MAWCacheService").catching(n).mustfix("Failed to compute cache from scratch for", t);
			});
		}, e;
	})(), s = null, u = function() {
		return s == null && (s = new e()), s;
	};
	l.getMAWUICacheServices = u;
}), 98);

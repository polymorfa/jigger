__d("MAWUICacheServicesBase", [
	"FBLogger",
	"MAWCacheServiceDB",
	"MAWCacheServiceQPL"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["id"];
	function s(e) {
		return e + "_mps_reactive";
	}
	var u = (function() {
		function t(e) {
			this.$1 = new Map(), this.QPLMetadata = new Map(), this.$2 = e;
		}
		var n = t.prototype;
		return n.resetInMemoryCache = function(t, n) {
			var e = this.$1.get(t);
			e != null && (n == null || n.length === 0 || (r("FBLogger")("MAWUICacheServices").info("Reset in memory cache. Namespace: %s", t), n.forEach(function(t) {
				e.delete(t);
			})));
		}, n.updateInMemoryCacheAndTriggerCallback = function(t, n, o, a, i) {
			this.$3(t, n);
			var e = this.$2[t];
			e != null && (a != null && (r("MAWCacheServiceQPL").addPointQPL(a, "triggering_callback", o), (o === "cache-invalidation" || o === "realtime-update" || o === "from-scratch" && this.QPLMetadata.get(a) === "all-from-scratch" || o === "in-memory" && i === !0) && (r("MAWCacheServiceQPL").endSuccessQPL(a), this.QPLMetadata.delete(a))), e.onCacheChange(n, o));
		}, n.checkInMemoryCacheAndTriggerCallback = function(t, n, o) {
			var e = this, a = [], i = [];
			n.forEach(function(n) {
				var r = e.$4(t, n);
				r == null ? a.push(n) : i.push([n, r]);
			});
			var l = a.length === 0;
			return l && o != null && r("MAWCacheServiceQPL").addPointQPL(o, "all_in_memory"), i.length > 0 && this.updateInMemoryCacheAndTriggerCallback(t, i, "in-memory", o, l), a;
		}, n.checkPersistedCacheAndTriggerCallback = async function(n, a, i) {
			var t = await o("MAWCacheServiceDB").getOrSetupMAWCacheDB(), l = await t.runInTransaction([n], "readonly", function(e) {
				return Promise.all(a.map(function(t) {
					return e.stores[n].getByIndex("key", [s(t)]);
				}));
			}, "read_from_persisted_" + n), u = [], c = [];
			return l.forEach(function(t, n) {
				if (t == null) u.push(a[n]);
				else {
					var r = t.id, o = babelHelpers.objectWithoutPropertiesLoose(t, e);
					c.push([a[n], o]);
				}
			}), i != null && r("MAWCacheServiceQPL").addAnnotationsQPL(i, { int: {
				numPersistedHit: c.length,
				numPersistedMiss: u.length
			} }), u.length === 0 && i != null && r("MAWCacheServiceQPL").addPointQPL(i, "all_in_persisted"), c.length > 0 && this.updateInMemoryCacheAndTriggerCallback(n, c, "persisted", i), u;
		}, n.$3 = function(t, n) {
			var e, r = (e = this.$1.get(t)) != null ? e : new Map();
			n.forEach(function(e) {
				var t = e[0], n = e[1];
				r.set(t, n);
			}), this.$1.set(t, r);
		}, n.$4 = function(t, n) {
			var e = this.$1.get(t);
			if (e == null) return null;
			var r;
			return (r = e.get(n)) != null ? r : null;
		}, t;
	})();
	l.adjustCacheKey = s, l.MAWUICacheServicesBase = u;
}), 98);

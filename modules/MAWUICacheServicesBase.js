__d("MAWUICacheServicesBase", [
	"FBLogger",
	"MAWCacheServiceDB",
	"MAWCacheServiceQPL",
	"Promise",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["id"], s;
	function u(e) {
		return e + "_mps_reactive";
	}
	var c = (function() {
		function t(e) {
			this.$1 = new Map(), this.QPLMetadata = new Map(), this.$2 = e;
		}
		var a = t.prototype;
		return a.resetInMemoryCache = function(t, n) {
			var e = this.$1.get(t);
			e != null && (n == null || n.length === 0 || (r("FBLogger")("MAWUICacheServices").info("Reset in memory cache. Namespace: %s", t), n.forEach(function(t) {
				e.delete(t);
			})));
		}, a.updateInMemoryCacheAndTriggerCallback = function(t, n, o, a, i) {
			this.$3(t, n);
			var e = this.$2[t];
			e != null && (a != null && (r("MAWCacheServiceQPL").addPointQPL(a, "triggering_callback", o), (o === "cache-invalidation" || o === "realtime-update" || o === "from-scratch" && this.QPLMetadata.get(a) === "all-from-scratch" || o === "in-memory" && i === !0) && (r("MAWCacheServiceQPL").endSuccessQPL(a), this.QPLMetadata.delete(a))), e.onCacheChange(n, o));
		}, a.checkInMemoryCacheAndTriggerCallback = function(t, n, o) {
			var e = this, a = [], i = [];
			n.forEach(function(n) {
				var r = e.$4(t, n);
				r == null ? a.push(n) : i.push([n, r]);
			});
			var l = a.length === 0;
			return l && o != null && r("MAWCacheServiceQPL").addPointQPL(o, "all_in_memory"), i.length > 0 && this.updateInMemoryCacheAndTriggerCallback(t, i, "in-memory", o, l), a;
		}, a.checkPersistedCacheAndTriggerCallback = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
				var l = yield o("MAWCacheServiceDB").getOrSetupMAWCacheDB(), c = yield l.runInTransaction([t], "readonly", function(e) {
					return (s || (s = n("Promise"))).all(a.map(function(n) {
						return e.stores[t].getByIndex("key", [u(n)]);
					}));
				}, "read_from_persisted_" + t), d = [], m = [];
				return c.forEach(function(t, n) {
					if (t == null) d.push(a[n]);
					else {
						var r = t.id, o = babelHelpers.objectWithoutPropertiesLoose(t, e);
						m.push([a[n], o]);
					}
				}), i != null && r("MAWCacheServiceQPL").addAnnotationsQPL(i, { int: {
					numPersistedHit: m.length,
					numPersistedMiss: d.length
				} }), d.length === 0 && i != null && r("MAWCacheServiceQPL").addPointQPL(i, "all_in_persisted"), m.length > 0 && this.updateInMemoryCacheAndTriggerCallback(t, m, "persisted", i), d;
			});
			function a(e, n, r) {
				return t.apply(this, arguments);
			}
			return a;
		})(), a.$3 = function(t, n) {
			var e, r = (e = this.$1.get(t)) != null ? e : new Map();
			n.forEach(function(e) {
				var t = e[0], n = e[1];
				r.set(t, n);
			}), this.$1.set(t, r);
		}, a.$4 = function(t, n) {
			var e = this.$1.get(t);
			if (e == null) return null;
			var r;
			return (r = e.get(n)) != null ? r : null;
		}, t;
	})();
	l.adjustCacheKey = u, l.MAWUICacheServicesBase = c;
}), 98);

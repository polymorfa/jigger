__d("MAWCacheServiceBase", [
	"MAWCacheServiceDB",
	"MAWUICacheServicesBase",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["id"], s = (function() {
		function t(e) {
			this.$1 = new Map(), this.namespace = e;
		}
		var r = t.prototype;
		return r.$2 = function(t) {
			var e;
			return (e = this.$1.get(t)) != null ? e : null;
		}, r.updateInMemoryCache = function(t, n) {
			this.$1.set(t, n);
		}, r.updateInMemoryCacheBulk = function(t) {
			var e = this;
			t.forEach(function(t) {
				var n = t[0], r = t[1];
				e.updateInMemoryCache(n, r);
			});
		}, r.getValueFromCache = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var n = this, r = this.$2(t);
				if (r != null) return r;
				var a = yield o("MAWCacheServiceDB").getOrSetupMAWCacheDB(), i = yield a.runInTransaction([this.namespace], "readonly", function(e) {
					return e.stores[n.namespace].getByIndex("key", [o("MAWUICacheServicesBase").adjustCacheKey(t)]);
				}, "read_from_persisted_" + this.namespace);
				if (i == null) return null;
				var l = i.id, s = babelHelpers.objectWithoutPropertiesLoose(i, e);
				return this.updateInMemoryCache(t, s), s;
			});
			function r(e) {
				return t.apply(this, arguments);
			}
			return r;
		})(), t;
	})();
	l.default = s;
}), 98);

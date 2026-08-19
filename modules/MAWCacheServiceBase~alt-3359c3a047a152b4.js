__d("MAWCacheServiceBase", ["MAWCacheServiceDB", "MAWUICacheServicesBase"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["id"], s = (function() {
		function t(e) {
			this.$1 = new Map(), this.namespace = e;
		}
		var n = t.prototype;
		return n.$2 = function(t) {
			var e;
			return (e = this.$1.get(t)) != null ? e : null;
		}, n.updateInMemoryCache = function(t, n) {
			this.$1.set(t, n);
		}, n.updateInMemoryCacheBulk = function(t) {
			var e = this;
			t.forEach(function(t) {
				var n = t[0], r = t[1];
				e.updateInMemoryCache(n, r);
			});
		}, n.getValueFromCache = async function(n) {
			var t = this, r = this.$2(n);
			if (r != null) return r;
			var a = await o("MAWCacheServiceDB").getOrSetupMAWCacheDB(), i = await a.runInTransaction([this.namespace], "readonly", function(e) {
				return e.stores[t.namespace].getByIndex("key", [o("MAWUICacheServicesBase").adjustCacheKey(n)]);
			}, "read_from_persisted_" + this.namespace);
			if (i == null) return null;
			var l = i.id, s = babelHelpers.objectWithoutPropertiesLoose(i, e);
			return this.updateInMemoryCache(n, s), s;
		}, t;
	})();
	l.default = s;
}), 98);

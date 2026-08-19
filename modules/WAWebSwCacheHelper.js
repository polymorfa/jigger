__d("WAWebSwCacheHelper", [
	"Promise",
	"WALogger",
	"WAWebSwUtils",
	"asyncToGeneratorRuntime",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g = self.caches.keys(), h = /wa\d+\.\d+\.\d+(\.[id])?(\.canary)?$/, y = [
		"wa-pp",
		"wa-assets",
		"wa-stickers",
		"wa_web_user_prefs_cache_store"
	], C = (function() {
		function t(e) {
			this.cacheName = e, this.openCachePromise = self.caches.open(this.cacheName);
		}
		var r = t.prototype;
		return r.cleanup = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var t = this, r = yield g;
				return (f || (f = n("Promise"))).all(r.map(function(n) {
					if (n !== t.cacheName && !y.includes(n)) return self.caches.delete(n).catch(function(r) {
						o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
							"Unable to delete cache: ",
							", current cache: ",
							", error: ",
							""
						])), n, t.cacheName, r);
					});
				}));
			});
			function r() {
				return t.apply(this, arguments);
			}
			return r;
		})(), r.matchOrFetch = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
				var r = t != null ? t : b(e), o = yield this.match(r);
				return o || this.fetchAndPut(e, r, n);
			});
			function t(t, n, r) {
				return e.apply(this, arguments);
			}
			return t;
		})(), r.fetchAndPut = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
				var r = o("WAWebSwUtils").manuallyCloneRequest(e, void 0, {
					redirect: "manual",
					mode: "cors"
				});
				try {
					var a = yield self.fetch(r, n);
					if (a.ok) {
						var i = t || b(e);
						this.put(i, a.clone());
					} else a.type !== "opaqueredirect" && o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
						"Received invalid response, url: ",
						", status: ",
						", type: ",
						""
					])), a.url, a.status, a.type);
					return a;
				} catch (t) {
					throw o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
						"Unable to fetch request: ",
						", error: ",
						""
					])), b(e), t), t;
				}
			});
			function t(t, n, r) {
				return e.apply(this, arguments);
			}
			return t;
		})(), r.reset = function() {
			var e = this;
			return this.openCachePromise = self.caches.delete(this.cacheName).then(function() {
				return self.caches.open(e.cacheName);
			});
		}, r.match = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				try {
					var n = yield this.openCachePromise;
					return yield n.match(e, t);
				} catch (t) {
					o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
						"Unable to match request: ",
						", in cache: ",
						", error: ",
						""
					])), b(e), this.cacheName, t);
				}
			});
			function t(t, n) {
				return e.apply(this, arguments);
			}
			return t;
		})(), r.put = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				try {
					var n = yield this.openCachePromise;
					return yield n.put(e, t);
				} catch (n) {
					o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
						"cache put failed: ",
						", req: ",
						", status: ",
						", err: ",
						""
					])), this.cacheName, b(e), t.status, n);
				}
			});
			function t(t, n) {
				return e.apply(this, arguments);
			}
			return t;
		})(), r.delete = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				try {
					var n = yield this.openCachePromise;
					return yield n.delete(e, t);
				} catch (t) {
					o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
						"Unable to delete request: ",
						", in cache: ",
						", error: ",
						""
					])), b(e), this.cacheName, t);
				}
			});
			function t(t, n) {
				return e.apply(this, arguments);
			}
			return t;
		})(), r.keys = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				try {
					var n = yield this.openCachePromise;
					return yield n.keys(e, t);
				} catch (t) {
					o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
						"Unable to match request: ",
						", in cache: ",
						", error: ",
						""
					])), b(e), this.cacheName, t);
				}
			});
			function t(t, n) {
				return e.apply(this, arguments);
			}
			return t;
		})(), r.getPrevCache = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				try {
					var n = yield g, r = n.find(function(t) {
						return t !== e && h.test(t);
					});
					if (r != null) return new t(r);
				} catch (e) {
					o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
						"Could not find previous cache, current cache:",
						", error: ",
						""
					])), this.cacheName, e);
				}
			});
			function r(t) {
				return e.apply(this, arguments);
			}
			return r;
		})(), t;
	})();
	function b(e) {
		return e instanceof Request ? e.url : e;
	}
	r("gkx")("26258") || (self.CacheHelper = C), l.CacheHelper = C;
}), 98);

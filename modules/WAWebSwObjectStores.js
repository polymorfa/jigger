__d("WAWebSwObjectStores", [
	"Promise",
	"WALogger",
	"WAWebIndexedDB",
	"asyncToGeneratorRuntime",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _ = "sw", f = 2, g = {
		prefs: {},
		pp: {},
		stickers: {}
	}, h;
	function y() {
		return h || (h = new (p || (p = (n("Promise"))))(function(t, n) {
			var a = r("nullthrows")(r("WAWebIndexedDB")).open(_, f);
			a.onupgradeneeded = function(t) {
				var n = t.target.result;
				t.target.transaction.onerror = function(t) {
					o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Unable to upgrade database, error: ", ""])), t.target.error);
				};
				for (var r in g) n.objectStoreNames.contains(r) && n.deleteObjectStore(r), n.createObjectStore(r, g[r]);
			}, a.onsuccess = function(e) {
				t(e.target.result);
			}, a.onerror = function(e) {
				n(e.target.error);
			};
		}).catch(function(e) {
			throw o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Unable to open sw database, error: ", ""])), e), h = void 0, e;
		}));
	}
	var C = (function() {
		function e(e) {
			this.storeName = e, this.storeCache = {};
		}
		var t = e.prototype;
		return t.$1 = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				var r = yield y(), o = r.transaction([this.storeName], "readwrite").objectStore(this.storeName), a = o[e].apply(o, t);
				return new (p || (p = (n("Promise"))))(function(e, t) {
					a.onsuccess = function(t) {
						e(t.target.result);
					}, a.onerror = function(e) {
						t(e.target.error);
					};
				});
			});
			function t(t, n) {
				return e.apply(this, arguments);
			}
			return t;
		})(), t.get = function(t) {
			var e = this;
			return this.storeCache[t] !== void 0 ? this.storeCache[t] : this.storeCache[t] = this.$1("get", [t]).catch(function(n) {
				o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
					"Unable to fetch from db, object store: ",
					", key: ",
					", error: ",
					""
				])), e.storeName, t, n), e.storeCache[t] = void 0;
			});
		}, t.put = function(t, r) {
			var e = this;
			return this.storeCache[t] = (p || (p = n("Promise"))).resolve(r), this.$1("put", [r, t]).catch(function(n) {
				o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
					"Unable to put to db, object store: ",
					", key: ",
					", value: ",
					", error: ",
					""
				])), e.storeName, t, r, n);
			});
		}, t.delete = function(t) {
			var e = this;
			return this.storeCache[t] = (p || (p = n("Promise"))).resolve(void 0), this.$1("delete", [t]).catch(function(n) {
				o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
					"Unable to delete in db, object store: ",
					", key: ",
					", error: ",
					""
				])), e.storeName, t, n);
			});
		}, t.clear = function() {
			var e = this;
			return this.storeCache = {}, this.$1("clear").catch(function(t) {
				o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
					"Unable to clear object store: ",
					", error: ",
					""
				])), e.storeName, t);
			});
		}, e;
	})(), b = { ObjectStore: C };
	for (var v in g) b[v] = new C(v);
	var S = b;
	l.default = S;
}), 98);

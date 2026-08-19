__d("MAWDexieTable", [
	"MAWDexie",
	"Promise",
	"asyncToGeneratorRuntime",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		return (e || (e = n("Promise"))).resolve(t);
	}
	function u(e) {
		return e.reduce(function(e, t, n) {
			return e.then(function(e) {
				return t(n).then(function(t) {
					return e.push(t), e;
				});
			});
		}, g([]));
	}
	function c(e) {
		return r("MAWDexie").Promise.all(e);
	}
	function d(e) {
		return r("MAWDexie").Promise.allSettled(e);
	}
	function m(e) {
		return r("MAWDexie").Promise.PSD[e];
	}
	function p(e, t) {
		r("MAWDexie").Promise.PSD[e] = t;
	}
	function _(e) {
		r("MAWDexie").Promise.PSD[e] = void 0;
	}
	var f = (function() {
		function e(e, t, n, o) {
			n === void 0 && (n = !0);
			var a = new (r("MAWDexie"))(e, babelHelpers.extends({}, o, {
				chromeTransactionDurability: "relaxed",
				modifyChunkSize: r("justknobx")._("3166")
			}));
			t(a), this.name = e, this.stores = a, n && this.open();
		}
		var t = e.prototype;
		return t.open = function() {
			this.stores.open();
		}, t.close = function() {
			this.stores.close();
		}, t.transact = function(t, r, o) {
			var e = this;
			return s(this.stores.transaction(t, r.map(function(t) {
				return e.stores[t];
			}), n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield o();
				return e;
			})));
		}, babelHelpers.createClass(e, [{
			key: "tables",
			get: function() {
				return this.stores.tables;
			}
		}]);
	})();
	function g(e) {
		return r("MAWDexie").Promise.resolve(e);
	}
	l.DEXIE_MIN_KEY = o("MAWDexie").Dexie.minKey, l.DEXIE_MAX_KEY = o("MAWDexie").Dexie.maxKey, l.undexify = s, l.dexieSequentialAll = u, l.dexieAll = c, l.dexieAllSettled = d, l.getDexiePSDItem = m, l.setDexiePSDItem = p, l.clearDexiePSDItem = _, l.DexieTable = f, l.dexieResolve = g;
}), 98);

__d("MAWDexieTable", ["MAWDexie", "justknobx"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return Promise.resolve(e);
	}
	function s(e) {
		return e.reduce(function(e, t, n) {
			return e.then(function(e) {
				return t(n).then(function(t) {
					return e.push(t), e;
				});
			});
		}, f([]));
	}
	function u(e) {
		return r("MAWDexie").Promise.all(e);
	}
	function c(e) {
		return r("MAWDexie").Promise.allSettled(e);
	}
	function d(e) {
		return r("MAWDexie").Promise.PSD[e];
	}
	function m(e, t) {
		r("MAWDexie").Promise.PSD[e] = t;
	}
	function p(e) {
		r("MAWDexie").Promise.PSD[e] = void 0;
	}
	var _ = (function() {
		function t(e, t, n, o) {
			n === void 0 && (n = !0);
			var a = new (r("MAWDexie"))(e, babelHelpers.extends({}, o, {
				chromeTransactionDurability: "relaxed",
				modifyChunkSize: r("justknobx")._("3166")
			}));
			t(a), this.name = e, this.stores = a, n && this.open();
		}
		var n = t.prototype;
		return n.open = function() {
			this.stores.open();
		}, n.close = function() {
			this.stores.close();
		}, n.transact = function(n, r, o) {
			var t = this;
			return e(this.stores.transaction(n, r.map(function(e) {
				return t.stores[e];
			}), async function() {
				var e = await o();
				return e;
			}));
		}, babelHelpers.createClass(t, [{
			key: "tables",
			get: function() {
				return this.stores.tables;
			}
		}]);
	})();
	function f(e) {
		return r("MAWDexie").Promise.resolve(e);
	}
	l.DEXIE_MIN_KEY = o("MAWDexie").Dexie.minKey, l.DEXIE_MAX_KEY = o("MAWDexie").Dexie.maxKey, l.undexify = e, l.dexieSequentialAll = s, l.dexieAll = u, l.dexieAllSettled = c, l.getDexiePSDItem = d, l.setDexiePSDItem = m, l.clearDexiePSDItem = p, l.DexieTable = _, l.dexieResolve = f;
}), 98);

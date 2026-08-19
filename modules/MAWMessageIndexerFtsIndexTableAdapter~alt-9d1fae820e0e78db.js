__d("MAWMessageIndexerFtsIndexTableAdapter", [
	"FBLogger",
	"MAWDexieTable",
	"MAWFTSIndexedDb",
	"MAWTransactionMode",
	"emptyFunction",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function(t) {
		var e = new Map();
		for (var n of t) {
			var r = n.ftsRowId;
			typeof r == "number" && (e.has(r) || e.set(r, n));
		}
		return Array.from(e.values());
	}, s = function(t, n) {
		return t.ftsIndexV3.where("id").anyOf(n.map(function(e) {
			return e.id;
		})).toArray().then(function(e) {
			var o = new Set(e.map(function(e) {
				return e.id;
			})), a = new Map();
			for (var i of n) {
				var l = i.id;
				a.set(l, i);
			}
			var s = Array.from(a.values()).filter(function(e) {
				return !o.has(e.id);
			}), u = e.map(function(e) {
				return {
					changes: a.get(e.id),
					key: e.ftsRowId
				};
			}).filter(function(e) {
				var t = e.changes, n = e.key;
				return t != null && n != null;
			});
			return t.ftsIndexV3.bulkUpdate(u.map(function(e) {
				var t = e.changes, n = e.key;
				return {
					changes: r("nullthrows")(t),
					key: r("nullthrows")(n)
				};
			})).then(function() {
				return t.ftsIndexV3.bulkPut(s);
			});
		}).then(r("emptyFunction"));
	}, u = function(n, a, i) {
		if (a.length !== 1) return r("FBLogger")("maw_fts").mustfix("indexNames should have exactly one element"), o("MAWDexieTable").dexieResolve([]);
		if (i.length === 0) return r("FBLogger")("maw_fts").mustfix("indexValues should have at least one element"), o("MAWDexieTable").dexieResolve([]);
		for (var t = a[0], l = n.ftsIndexV3.where(t).equals(i[0]), s = 1; s < i.length; ++s) l = l.or(t).equals(i[s]);
		return l.toArray().then(e);
	}, c = function(n, r, o, a, i) {
		var t, l;
		return n.ftsIndexV3.where(r[0]).between(o, a, (t = i == null ? void 0 : i.lowerInclusive) != null ? t : !0, (l = i == null ? void 0 : i.upperInclusive) != null ? l : !1).toArray().then(e);
	}, d = function(t, n, r) {
		return t.ftsIndexV3.where(n[0]).equals(r[0]).primaryKeys().then(function(e) {
			return t.ftsIndexV3.bulkDelete(e);
		});
	}, m = function(t) {
		return t.ftsIndexV3.clear();
	}, p = (function() {
		function e(e) {
			this.$1 = null, this.$2 = e;
		}
		var t = e.prototype;
		return t.$3 = function() {
			return r("nullthrows")(this.$1);
		}, t.bulkPut = async function(t) {
			if (this.$1 != null) {
				await s(this.$3(), t);
				return;
			}
			return o("MAWFTSIndexedDb").makeMsgrFTSTransactor({ ftsIndexV3: o("MAWTransactionMode").READWRITE }, function(e) {
				return function() {
					return s(e, t);
				};
			})();
		}, t.bulkGetAnyOf = function(t, n) {
			return this.$1 != null ? o("MAWDexieTable").undexify(u(this.$3(), t, n)) : o("MAWFTSIndexedDb").makeMsgrFTSTransactor({ ftsIndexV3: o("MAWTransactionMode").READWRITE }, function(e) {
				return function() {
					return u(e, t, n);
				};
			})();
		}, t.between = function(t, n, r, a) {
			return this.$1 != null ? o("MAWDexieTable").undexify(c(this.$3(), t, n, r, a)) : o("MAWFTSIndexedDb").makeMsgrFTSTransactor({ ftsIndexV3: o("MAWTransactionMode").READWRITE }, function(e) {
				return function() {
					return c(e, t, n, r, a);
				};
			})();
		}, t.bulkRemoveByIndex = async function(t, n) {
			if (this.$1 != null) {
				await d(this.$3(), t, n);
				return;
			}
			return o("MAWFTSIndexedDb").makeMsgrFTSTransactor({ ftsIndexV3: o("MAWTransactionMode").READWRITE }, function(e) {
				return function() {
					return d(e, t, n);
				};
			})();
		}, t.erase = function() {
			return this.$1 != null ? o("MAWDexieTable").undexify(m(this.$3())) : o("MAWFTSIndexedDb").makeMsgrFTSTransactor({ ftsIndexV3: o("MAWTransactionMode").READWRITE }, function(e) {
				return function() {
					return m(e);
				};
			})();
		}, t.getKey = function() {
			return this.$2;
		}, e;
	})();
	l.default = p;
}), 98);

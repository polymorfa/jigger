__d("MAWInMemoryStore", [
	"FBLogger",
	"MAWDexie",
	"MAWTransactionMode"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = (function() {
		function e(e, t, n) {
			this.$1 = new Map(), this.$2 = new Map(), this.$5 = new WeakSet(), this.name = e, this.$3 = t, this.$4 = n;
		}
		var t = e.prototype;
		return t.tryHookTransaction = function(t) {
			return this.$5.has(t) ? !1 : (this.$5.add(t), !0);
		}, t.get = function(t) {
			var e, n;
			return this.$2.get(t) === null ? null : (e = (n = this.$2.get(t)) != null ? n : this.$1.get(t)) != null ? e : null;
		}, t.getAll = function(t) {
			var e = this;
			if (t != null) return s(t, function(t) {
				return e.get(t);
			});
			var n = new Map(this.$1);
			for (var r of this.$2) {
				var o = r[0], a = r[1];
				a == null ? n.delete(o) : n.set(o, a);
			}
			return Array.from(n.values());
		}, t.count = function() {
			return this.getAll().length;
		}, t.store = function(t) {
			var e = Object.freeze(babelHelpers.extends({}, t));
			this.$2.set(this.$3(e), e);
		}, t.updateWhere = function(t, n) {
			var e = this.get(t);
			e != null && this.store(babelHelpers.extends({}, e, n));
		}, t.delete = function(t) {
			this.$2.set(t, null);
		}, t.bulkPut = function(t) {
			for (var e of t) this.store(e);
		}, t.compareAndStore = function(t, n, o) {
			var e = this.$4;
			if (e == null) throw r("FBLogger")("maw_db").mustfixThrow("MAWInMemoryStore[%s]: compareAndStore called without a configured compare hook", this.name);
			var a = this.get(this.$3(t));
			if (a == null) e(null, t, o);
			else {
				var i = babelHelpers.extends({}, a, n);
				e(i, t, o), this.store(i);
			}
		}, t.compareAndBulkPut = function(t, n, r) {
			for (var e of t) this.compareAndStore(e, n(e), r);
		}, t.beginTransaction = function() {
			this.$2.size > 0 && r("FBLogger")("maw_db").warn("MAWInMemoryStore[%s]: beginTransaction called while a transaction is already active", this.name), this.$2 = new Map();
		}, t.commit = function() {
			for (var e of this.$2) {
				var t = e[0], n = e[1];
				n == null ? this.$1.delete(t) : this.$1.set(t, n);
			}
			this.$2 = new Map();
		}, t.rollback = function() {
			this.$2 = new Map();
		}, t.view = function() {
			var e = this;
			return {
				count: function() {
					return e.count();
				},
				get: function(n) {
					return e.get(n);
				},
				getAll: function(n) {
					return e.getAll(n);
				},
				some: function(n) {
					return e.getAll().some(n);
				}
			};
		}, t.committedView = function() {
			var e = this.$1;
			return {
				count: function() {
					return e.size;
				},
				get: function(n) {
					var t;
					return (t = e.get(n)) != null ? t : null;
				},
				getAll: function(n) {
					return n == null ? Array.from(e.values()) : s(n, function(t) {
						return e.get(t);
					});
				},
				some: function(n) {
					for (var t of e.values()) if (n(t)) return !0;
					return !1;
				}
			};
		}, t.nonTransactionReadView = function() {
			return this.committedView();
		}, t.getCommitted = function(t) {
			var e;
			return (e = this.$1.get(t)) != null ? e : null;
		}, t.hydrate = function(t) {
			var e = Object.freeze(babelHelpers.extends({}, t));
			this.$1.set(this.$3(e), e);
		}, t.deleteCommitted = function(t) {
			this.$1.delete(t);
		}, t.nonTransactionView = function() {
			var e = this, t = e.nonTransactionReadView();
			return babelHelpers.extends({
				bulkPut: function(n) {
					for (var t of n) {
						var r = Object.freeze(babelHelpers.extends({}, t));
						e.$1.set(e.$3(r), r);
					}
				},
				clear: function() {
					e.$1.clear();
				},
				delete: function(n) {
					e.$1.delete(n);
				},
				store: function(n) {
					var t = Object.freeze(babelHelpers.extends({}, n));
					e.$1.set(e.$3(t), t);
				}
			}, t);
		}, t.clear = function() {
			this.$1.clear(), this.$2.clear();
		}, e;
	})();
	function s(e, t) {
		var n = [], r = new Set();
		for (var o of e) if (!r.has(o)) {
			var a = t(o);
			a != null && n.push(a), r.add(o);
		}
		return n;
	}
	function u(e) {
		return e.nonTransactionView();
	}
	function c(e) {
		return e.nonTransactionReadView();
	}
	function d(e, t) {
		var n = r("MAWDexie").currentTransaction;
		if (n == null) throw r("FBLogger")("maw_db").mustfixThrow("getReadwriteInMemoryStore[%s] called outside of dexie transaction", e.name);
		var a = t();
		if (a !== o("MAWTransactionMode").READWRITE) throw r("FBLogger")("maw_db").mustfixThrow("getReadwriteInMemoryStore[%s] called outside of READWRITE transaction", e.name);
		return e.tryHookTransaction(n) && (e.beginTransaction(), n.on("complete", function() {
			e.commit();
		}), n.on("abort", function() {
			e.rollback();
		})), e;
	}
	function m(e, t) {
		var n = r("MAWDexie").currentTransaction;
		if (n == null) throw r("FBLogger")("maw_db").mustfixThrow("getReadonlyInMemoryStore[%s] called outside of dexie transaction", e.name);
		var a = t();
		return a === o("MAWTransactionMode").READWRITE ? e.view() : e.committedView();
	}
	function p(e) {
		var t = r("MAWDexie").currentTransaction;
		if (t == null) throw r("FBLogger")("maw_db").mustfixThrow("getReadonlyCommittedViewOfInMemoryStore[%s] called outside of dexie transaction", e.name);
		return e.committedView();
	}
	l.MAWInMemoryStore = e, l.getNonTxReadwriteInMemoryStore = u, l.getNonTxReadonlyInMemoryStore = c, l.getReadwriteInMemoryStore = d, l.getReadonlyInMemoryStore = m, l.getReadonlyCommittedViewOfInMemoryStore = p;
}), 98);

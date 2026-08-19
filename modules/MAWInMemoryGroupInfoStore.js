__d("MAWInMemoryGroupInfoStore", [
	"MAWDexie",
	"MAWDexieTable",
	"MAWInMemoryStore",
	"MAWTransactionMode"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = new (o("MAWInMemoryStore")).MAWInMemoryStore("groupInfo", function(e) {
		return e.groupJid;
	}, null), s = function() {
		return o("MAWDexieTable").getDexiePSDItem("groupInfoAccessMode");
	};
	function u() {
		e.clear();
	}
	function c() {
		return o("MAWInMemoryStore").getReadwriteInMemoryStore(e, s);
	}
	function d() {
		if (s() === o("MAWTransactionMode").READWRITE) {
			var t = c();
			return {
				count: function() {
					return t.count();
				},
				get: function(n) {
					return t.get(n);
				},
				getAll: function() {
					return t.getAll();
				},
				some: function(n) {
					return t.getAll().some(n);
				}
			};
		}
		return o("MAWInMemoryStore").getReadonlyCommittedViewOfInMemoryStore(e);
	}
	function m() {
		return e.committedView();
	}
	function p() {
		return r("MAWDexie").currentTransaction != null ? d() : m();
	}
	function _(t) {
		return r("MAWDexie").currentTransaction != null && s() === o("MAWTransactionMode").READWRITE ? c().get(t) : e.getCommitted(t);
	}
	function f(t) {
		return e.getCommitted(t);
	}
	function g(t) {
		e.hydrate(t);
	}
	function h(t) {
		e.deleteCommitted(t);
	}
	function y(t, n) {
		e.hydrate(babelHelpers.extends({}, n, { groupJid: t }));
	}
	l.clearInMemoryGroupInfoStore = u, l.getReadwriteInMemoryGroupInfoStore = c, l.getReadonlyInMemoryGroupInfoStore = d, l.getCommittedInMemoryGroupInfoStore = m, l.getInMemoryGroupInfoReadView = p, l.getInMemoryGroupInfo = _, l.getCommittedInMemoryGroupInfo = f, l.storeInMemoryGroupInfo = g, l.deleteInMemoryGroupInfo = h, l.hydrateGroupInfoStore = y;
}), 98);

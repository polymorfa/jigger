__d("WADbTransactor", [
	"MAWDexie",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"WAExceededStorageQuota",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		var r = Object.keys(e), a = r.some(function(t) {
			return e[t] === o("MAWTransactionMode").READWRITE;
		}) ? o("MAWTransactionMode").READWRITE : o("MAWTransactionMode").READONLY;
		return function() {
			for (var e = arguments.length, i = new Array(e), l = 0; l < e; l++) i[l] = arguments[l];
			return o("MAWIndexedDb").getSignalDB(t).then(function(e) {
				return s(a, r, function() {
					return n(e.stores).apply(void 0, i);
				});
			}).then(function(e) {
				return e;
			}).catch(function(e) {
				throw d(e, t);
			});
		};
	}
	function s(e, t, n) {
		if (r("MAWDexie").currentTransaction != null) throw r("err")("protocolDB transactor %s cannot be called within another transaction");
		return o("MAWIndexedDb").getSignalDB().then(function(r) {
			return r.transact(e, t, n);
		});
	}
	function u(e) {
		return e instanceof Error ? e : typeof e == "string" ? r("err")(e) : null;
	}
	async function c(e, t, n, r) {
		var a = e + "_" + r, i = await o("MAWIndexedDb").getDB(a);
		return i.transact(t, [e], function() {
			return n(i.stores[e]);
		}).then(function(e) {
			return e;
		}).catch(function(e) {
			throw d(e, a);
		});
	}
	function d(e, t) {
		var n;
		o("WAExceededStorageQuota").checkQuotaExceededError(e);
		var a = u(e);
		return a ? (a.message = "[" + ((n = a == null ? void 0 : a.toString()) != null ? n : "unknown error") + "] Error performing %s transaction " + t, a) : r("err")("[unknown error] Error performing %s transaction " + t);
	}
	l.makeSignalTransactor = e, l.persistedQueueTransactor = c;
}), 98);

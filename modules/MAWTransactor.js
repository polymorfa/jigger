__d("MAWTransactor", [
	"MAWDexie",
	"MAWDexieTable",
	"MAWErrorObject",
	"MAWIndexedDb",
	"MAWIndexedDbUI",
	"MAWLLAMigrationUtils",
	"MAWQplProxy",
	"MAWTransactionMode",
	"MWFBLogger",
	"WAExceededStorageQuota",
	"WALogger",
	"gkx",
	"performance"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = ["MWPTransactor"], d = o("MWFBLogger").MWLogger();
	function m(t, n, a, i, l, s) {
		return i != null && r("MAWDexie").currentTransaction != null && i.endFail("invoked_in_nested_transaction", {
			string: { current_transaction_mode: r("MAWDexie").currentTransaction.mode },
			string_array: { current_transaction_store_names: r("MAWDexie").currentTransaction.storeNames }
		}), r("MAWDexie").currentTransaction != null && o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["makeMsgrTransactor ", " should not be called inside another transaction. The transaction will be forced to execute on top-level"])), l), t.transact(n, a, s);
	}
	function p(e) {
		var t = o("MAWLLAMigrationUtils").getTransactorQPLParam(e), n = t.length === 2 ? t : [null, void 0], r = n[0], a = n[1];
		return r != null ? o("MAWQplProxy").startQplUserFlow(r, a, { sendThroughBridge: !1 }) : null;
	}
	function _(e, t, n, r) {
		return y(e, t, function(e) {
			return o("MAWIndexedDb").getDB(e);
		}, n, r);
	}
	function f(e, t, n) {
		return y(e, t, o("MAWIndexedDbUI").getDB, n);
	}
	var g = 0, h = new Map();
	function y(e, t, n, a, i) {
		var l = Object.keys(e), _ = l.some(function(t) {
			return e[t] === o("MAWTransactionMode").READWRITE;
		}) ? o("MAWTransactionMode").READWRITE : o("MAWTransactionMode").READONLY;
		return function() {
			for (var f = arguments.length, y = new Array(f), v = 0; v < f; v++) y[v] = arguments[v];
			var S = p(t), R = null, L = function() {
				return self.clearInterval(R);
			};
			if (S != null && (S.addAnnotations({
				string: { mode: _ === o("MAWTransactionMode").READWRITE ? "readwrite" : "readonly" },
				string_array: { stores: l }
			}), r("gkx")("1006") && t === "bulkCreateThreadByJid")) {
				var E = 1e3, k = Date.now();
				R = self.setInterval(function() {
					S.addAnnotations({ int: { heartbeatLatestAliveSinceStartMs: Date.now() - k } });
				}, E), self.setTimeout(L, o("MAWQplProxy").DEFAULT_WORKER_QPL_TIMEOUT_MS);
			}
			var I = (u || (u = r("performance"))).now() + u.timeOrigin;
			return n(t).then(function(n) {
				var p = Array.from(h.values());
				S == null || S.addPoint("lock_wait_start", { string_array: { maybeLockedOn: p } });
				var f = (u || (u = r("performance"))).now();
				return i == null || i.onTxnRequestedCb == null || i.onTxnRequestedCb.apply(i, y), m(n, _, l, S, t, function() {
					var m, _, v, R;
					o("MAWDexieTable").setDexiePSDItem("transactionRequested", I), o("MAWDexieTable").setDexiePSDItem("transactorName", t), o("MAWDexieTable").setDexiePSDItem("threadsAccessMode", (m = e.threads) != null ? m : null), o("MAWDexieTable").setDexiePSDItem("ephemeralSettingsAccessMode", (_ = e.ephemeralSettings) != null ? _ : null), o("MAWDexieTable").setDexiePSDItem("groupInfoAccessMode", (v = e.groupInfo) != null ? v : null), o("MAWDexieTable").setDexiePSDItem("participantsAccessMode", (R = e.participants) != null ? R : null), S == null || S.addPoint("dexie_transaction_start"), g += 1;
					var E = g;
					h.set(E, t);
					var k = S != null ? n.stores[l[0]].get("").then(function() {
						S == null || S.addPoint("lock_wait_end"), S == null || S.addPoint("transaction_opened"), S == null || S.addPoint("transactor_execution_start");
					}) : o("MAWDexieTable").dexieResolve();
					return k.then(function() {
						return a(n.stores).apply(void 0, y);
					}).then(function(e) {
						if (r("gkx")("6795") && (i == null ? void 0 : i.explicitlyCloseTxn) === !0) {
							var n;
							(n = r("MAWDexie").currentTransaction) == null || (n = n.idbtrans) == null || n.commit == null || n.commit();
						}
						h.delete(E), S == null || S.addPoint("transactor_execution_end"), S == null || S.endSuccess(), L();
						var a = (u || (u = r("performance"))).now() - f;
						return a > 5e3 && (o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
							"[Slow maw transaction] ",
							" took ",
							"ms to complete. Potentially waiting for locks on ",
							""
						])), t, a, p.join(", ")), d.mustfix("[Slow maw transaction] %s took long to complete. Potentially waiting for locks on $s", t, p.join(", "))), e;
					}).catch(function(e) {
						h.delete(E), o("WAExceededStorageQuota").checkQuotaExceededError(e);
						var n = e.name === "AbortError" ? e == null ? void 0 : e.inner : null, r = C(n);
						if (S == null || S.markError("transaction_error", null, e), e instanceof Error) {
							var a = e, i = typeof (a == null ? void 0 : a.stack) == "string" ? a.stack : typeof (a == null ? void 0 : a.stack), l = typeof (a == null ? void 0 : a.message) == "string" ? a.message : typeof (a == null ? void 0 : a.message);
							S == null || S.addAnnotations({ string: {
								errMessage: l,
								errStack: i,
								innerError: r
							} });
						}
						S == null || S.endFail("transaction_fail"), L();
						var s = o("MAWErrorObject").getErrorObject(e);
						throw b(s).mustfixThrow("[%s] Error performing %s transaction. Inner error: %s", c.join("|"), t != null ? t : "", r != null ? r : "unknown");
					});
				});
			}).catch(function(e) {
				o("WAExceededStorageQuota").checkQuotaExceededError(e), S == null || S.endFail("transaction_fail"), L();
				var n = o("MAWErrorObject").getErrorObject(e);
				throw b(n).mustfixThrow("[%s] Error performing %s transaction", c.join("|"), t != null ? t : "");
			});
		};
	}
	function C(e) {
		if (typeof e == "string") return e;
		if (e instanceof Error) return e.name + ": " + e.message;
		if (typeof e == "object") try {
			return JSON.stringify(e);
		} catch (e) {}
		return null;
	}
	function b(e) {
		return e ? d.catching(e) : d;
	}
	l.makeMsgrTransactor = _, l.makeMsgrUITransactor_IMPORT_FROM_MAWIndexedDbUI_INSTEAD = f;
}), 98);

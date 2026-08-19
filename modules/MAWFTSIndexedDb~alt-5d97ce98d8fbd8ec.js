__d("MAWFTSIndexedDb", [
	"Deferred",
	"MAWCurrentUser",
	"MAWDexieTable",
	"MAWErrorObject",
	"MAWIDbSetupQplEventListener",
	"MAWIndexedDbMetadata",
	"MAWQplProxy",
	"MAWTransactionMode",
	"MWFBLogger",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = null, d = null, m = new (r("Deferred"))(), p = !1, _ = o("MWFBLogger").MWLogger().tags(["DBInit", "FTS"]);
	function f() {
		m = null, p = !1;
	}
	function g() {
		var t, n = o("MAWCurrentUser").getID();
		if (c != null) return Promise.resolve();
		if (p) {
			var a;
			return ((a = m) == null ? void 0 : a.getPromise()) || Promise.reject("error-setting-up-fts");
		}
		d = o("MAWIndexedDbMetadata").ftsDbName(n);
		var i = r("qpl")._(25310776, "6155"), l = o("MAWQplProxy").startQplUserFlow(r("qpl")._(1056836116, "905"), { string: {
			db: "fts_idb",
			name: d
		} });
		return _.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Starting DB Setup"]))), p = !0, m = m != null ? m : new (r("Deferred"))(), o("MAWIDbSetupQplEventListener").trackDbSetupFailure(l, function() {
			var e;
			(e = m) == null || e.reject("FTS DB setup failed"), o("MAWQplProxy").sendQplPointThroughBridge(i, "database_fts_setup_failed"), f();
		}), c = new (o("MAWDexieTable")).DexieTable(d, function(e) {
			e.version(1).stores({
				ftsBackloggedMessages: "rowId",
				ftsEncryptionMeta: "key",
				ftsIndexV3: "++ftsRowId,id,chatId,*prefixes"
			}), e.version(2).stores({ ftsManifest: "key" }), e.version(3).stores({ ftsBackloggedMessages: "rowId,externalId" }), e.version(4).stores({ ftsRestoreStatus: "threadId" }), e.version(5).stores({ mediaRestoreStatus: "threadId" }), e.on("blocked", function() {
				_.MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose(["FTS DB Open blocked"]))), l.endFail("blocked"), o("MAWQplProxy").sendQplPointThroughBridge(i, "database_fts_blocked");
			}), e.on("ready", async function(e) {
				var t;
				if (_.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["FTS DB setup complete"]))), e == null) {
					var n;
					_.MUSTFIX(["DB is null"]), (n = m) == null || n.reject("FTS DB is null"), l.endFail("db_null"), o("MAWQplProxy").sendQplPointThroughBridge(i, "database_fts_null"), f();
					return;
				}
				l.endSuccess(), o("MAWQplProxy").sendQplPointThroughBridge(i, "database_fts_ready"), (t = m) == null || t.resolve(), f();
			});
		}, !0, { autoOpen: !0 }), o("MAWQplProxy").sendQplPointThroughBridge(i, "database_make_fts_requested"), ((t = m) == null ? void 0 : t.getPromise()) || Promise.reject("error-setting-up-fts");
	}
	function h() {
		if (c == null) throw _.mustfixThrow("IndexDB has not been initialized before executing transactor");
		return c;
	}
	function y() {
		return c != null && !p ? Promise.resolve(c) : (m = m || new (r("Deferred"))(), m.getPromise().then(function() {
			return h();
		}));
	}
	function C(e) {
		return e ? _.catching(e) : _;
	}
	function b(e, t) {
		var n = Object.keys(e), r = n.some(function(t) {
			return e[t] === o("MAWTransactionMode").READWRITE;
		}) ? o("MAWTransactionMode").READWRITE : o("MAWTransactionMode").READONLY;
		return function() {
			for (var e = arguments.length, a = new Array(e), i = 0; i < e; i++) a[i] = arguments[i];
			return y().then(function(e) {
				return e.transact(r, n, function() {
					return t(e.stores).apply(void 0, a).catch(function(e) {
						var t = o("MAWErrorObject").getErrorObject(e);
						throw C(t).mustfixThrow("Error performing FTS transaction");
					});
				});
			}).catch(function(e) {
				var t = o("MAWErrorObject").getErrorObject(e);
				throw C(t).mustfixThrow("Error performing FTS transaction");
			});
		};
	}
	l.makeFTSDB = g, l.getDB = y, l.makeMsgrFTSTransactor = b;
}), 98);

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
	"Promise",
	"asyncToGeneratorRuntime",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = null, m = null, p = new (r("Deferred"))(), _ = !1, f = o("MWFBLogger").MWLogger().tags(["DBInit", "FTS"]);
	function g() {
		p = null, _ = !1;
	}
	function h() {
		var t, a = o("MAWCurrentUser").getID();
		if (d != null) return (c || (c = n("Promise"))).resolve();
		if (_) {
			var i;
			return ((i = p) == null ? void 0 : i.getPromise()) || (c || (c = n("Promise"))).reject("error-setting-up-fts");
		}
		m = o("MAWIndexedDbMetadata").ftsDbName(a);
		var l = r("qpl")._(25310776, "6155"), h = o("MAWQplProxy").startQplUserFlow(r("qpl")._(1056836116, "905"), { string: {
			db: "fts_idb",
			name: m
		} });
		return f.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Starting DB Setup"]))), _ = !0, p = p != null ? p : new (r("Deferred"))(), o("MAWIDbSetupQplEventListener").trackDbSetupFailure(h, function() {
			var e;
			(e = p) == null || e.reject("FTS DB setup failed"), o("MAWQplProxy").sendQplPointThroughBridge(l, "database_fts_setup_failed"), g();
		}), d = new (o("MAWDexieTable")).DexieTable(m, function(e) {
			e.version(1).stores({
				ftsBackloggedMessages: "rowId",
				ftsEncryptionMeta: "key",
				ftsIndexV3: "++ftsRowId,id,chatId,*prefixes"
			}), e.version(2).stores({ ftsManifest: "key" }), e.version(3).stores({ ftsBackloggedMessages: "rowId,externalId" }), e.version(4).stores({ ftsRestoreStatus: "threadId" }), e.version(5).stores({ mediaRestoreStatus: "threadId" }), e.on("blocked", function() {
				f.MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose(["FTS DB Open blocked"]))), h.endFail("blocked"), o("MAWQplProxy").sendQplPointThroughBridge(l, "database_fts_blocked");
			}), e.on("ready", (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var t;
					if (f.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["FTS DB setup complete"]))), e == null) {
						var n;
						f.MUSTFIX(["DB is null"]), (n = p) == null || n.reject("FTS DB is null"), h.endFail("db_null"), o("MAWQplProxy").sendQplPointThroughBridge(l, "database_fts_null"), g();
						return;
					}
					h.endSuccess(), o("MAWQplProxy").sendQplPointThroughBridge(l, "database_fts_ready"), (t = p) == null || t.resolve(), g();
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})());
		}, !0, { autoOpen: !0 }), o("MAWQplProxy").sendQplPointThroughBridge(l, "database_make_fts_requested"), ((t = p) == null ? void 0 : t.getPromise()) || (c || (c = n("Promise"))).reject("error-setting-up-fts");
	}
	function y() {
		if (d == null) throw f.mustfixThrow("IndexDB has not been initialized before executing transactor");
		return d;
	}
	function C() {
		return d != null && !_ ? (c || (c = n("Promise"))).resolve(d) : (p = p || new (r("Deferred"))(), p.getPromise().then(function() {
			return y();
		}));
	}
	function b(e) {
		return e ? f.catching(e) : f;
	}
	function v(e, t) {
		var n = Object.keys(e), r = n.some(function(t) {
			return e[t] === o("MAWTransactionMode").READWRITE;
		}) ? o("MAWTransactionMode").READWRITE : o("MAWTransactionMode").READONLY;
		return function() {
			for (var e = arguments.length, a = new Array(e), i = 0; i < e; i++) a[i] = arguments[i];
			return C().then(function(e) {
				return e.transact(r, n, function() {
					return t(e.stores).apply(void 0, a).catch(function(e) {
						var t = o("MAWErrorObject").getErrorObject(e);
						throw b(t).mustfixThrow("Error performing FTS transaction");
					});
				});
			}).catch(function(e) {
				var t = o("MAWErrorObject").getErrorObject(e);
				throw b(t).mustfixThrow("Error performing FTS transaction");
			});
		};
	}
	l.makeFTSDB = h, l.getDB = C, l.makeMsgrFTSTransactor = v;
}), 98);

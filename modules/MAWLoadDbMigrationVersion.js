__d("MAWLoadDbMigrationVersion", [
	"ExecutionEnvironment",
	"MAWBridge",
	"MAWCurrentUser",
	"MAWDBMigrationUtils",
	"MAWDbAppMeta",
	"MAWDbObjEncryption",
	"MAWIndexedDbMetadata",
	"MAWUnrecoverableDbErrors",
	"MWFBLogger",
	"Promise",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g = o("MWFBLogger").MWLogger().tags(["db", "MAWLoadDbMigrationVersion"]);
	function h(t) {
		var a = o("MAWCurrentUser").getID(), i = o("MAWIndexedDbMetadata").dbName(a);
		return new (f || (f = (n("Promise"))))(function(n) {
			if (!indexedDB) {
				n();
				return;
			}
			var a = indexedDB.open(i);
			a.onupgradeneeded = function(t) {
				t.target.transaction.abort();
				var r = t.target.result;
				g.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[MAWLoadDbMigrationVersion] ", " onupgradeneeded - closing db"])), i), r == null || r.close(), n();
			}, a.onsuccess = function(e) {
				var a = e.target.result;
				if (a == null) {
					n();
					return;
				}
				try {
					var i = a.transaction("appMeta", "readonly");
					i.onerror = function(e) {
						var t;
						g.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[MAWLoadDbMigrationVersion] Transaction error: ", ""])), (t = e.target.error) == null ? void 0 : t.message), a.close(), n();
					};
					var l = i.objectStore("appMeta"), m = l.get(o("MAWDbAppMeta").AppMetaKeysEnum.dbMigrationVersion);
					m.onerror = function(e) {
						var t;
						g.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[MAWLoadDbMigrationVersion] Request error: ", ""])), (t = e.target.error) == null ? void 0 : t.message), a.close(), n();
					}, m.onsuccess = function(e) {
						a.close();
						var i = e.target.result;
						if (i != null) try {
							var l = o("MAWDbObjEncryption").decryptDbObj(babelHelpers.extends({}, i), "appMeta", t), s = l.value.dbMigrationVersion;
							s != null && (o("MAWDBMigrationUtils").mawDbMigrationVersion.version = s);
						} catch (e) {
							var u = r("getErrorSafe")(e);
							g.catching(u).MUSTFIX(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[MAWLoadDbMigrationVersion] Failed to decrypt appMeta row"]))), (_ || (_ = r("ExecutionEnvironment"))).isInWorker && o("MAWBridge").getBridge().fireAndForget("event", "unrecoverableDbError", { error: new (o("MAWUnrecoverableDbErrors")).EarRuntimeError() });
						}
						n();
					};
				} catch (e) {
					var p = r("getErrorSafe")(e);
					g.DEBUG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[MAWLoadDbMigrationVersion] Error accessing appMeta: ", ""])), p.message), a.close(), n();
				}
			}, a.onerror = function(e) {
				var t;
				g.DEBUG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
					"[MAWLoadDbMigrationVersion] ",
					" error ",
					""
				])), i, e == null || (t = e.target) == null || (t = t.error) == null ? void 0 : t.message), n();
			}, a.onblocked = function(e) {
				var t = e.target.result;
				g.DEBUG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[MAWLoadDbMigrationVersion] ", " blocked"])), i), t == null || t.close();
			};
		});
	}
	l.default = h;
}), 98);

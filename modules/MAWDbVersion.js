__d("MAWDbVersion", [
	"MAWCurrentUser",
	"MAWDbSchemaReStoreDexieUtils",
	"MAWDbVersionList",
	"MAWGetDbVersion",
	"MAWIndexedDbMetadata",
	"MAWODSProxy",
	"MWFBLogger",
	"Promise",
	"WAOdsEnums"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h = o("MWFBLogger").MWLogger().tags(["db", "getDexieDbVersion"]), y = o("MAWGetDbVersion").getArmadilloDbVersion(), C = o("MAWDbSchemaReStoreDexieUtils").getCompleteDexieSchemaForVersion(Math.min(o("MAWDbSchemaReStoreDexieUtils").MAW_DB_VERSION_CHANGES[o("MAWDbSchemaReStoreDexieUtils").MAW_DB_VERSION_CHANGES.length - 1].version, y > 0 ? y : 1 / 0));
	function b(e, t) {
		var n = t.schema, r = t.upgrade, o = t.version;
		return n != null && r != null ? e.version(o).stores(n).upgrade(r) : n != null ? e.version(o).stores(n) : r != null ? e.version(o).upgrade(r) : e.version(o), o;
	}
	function v(t) {
		return new (g || (g = (n("Promise"))))(function(n) {
			if (!indexedDB) {
				n();
				return;
			}
			var r = indexedDB.open(t);
			r.onupgradeneeded = function(r) {
				r.target.transaction.abort();
				var o = r.target.result;
				h.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["", " onupgradeneeded - closing db"])), t), o == null || o.close(), n();
			}, r.onsuccess = function(e) {
				var r = e.target.result, a = r == null ? void 0 : r.version;
				h.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
					"",
					" version: ",
					""
				])), t, a != null ? a : "null"), r == null || r.close(), a != null ? (a % 10 >= 1 && o("MAWODSProxy").odsBumpEntityKey({
					amount: 1,
					entity: o("WAOdsEnums").Entity.MAW_DB_UNEXPECTED_VERSION,
					key: "fail_" + a % 10
				}), n(o("MAWDbVersionList").toVersion(a / 10))) : n();
			}, r.onerror = function(e) {
				var r;
				h.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
					"",
					" error ",
					""
				])), t, e == null || (r = e.target) == null || (r = r.error) == null ? void 0 : r.message), n();
			}, r.onblocked = function(e) {
				var n = e.target.result, r = n == null ? void 0 : n.version;
				h.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
					"",
					" blocked, version: ",
					""
				])), t, r != null ? r : "null"), n == null || n.close();
			};
		});
	}
	function S() {
		var e = o("MAWCurrentUser").getID();
		return v(o("MAWIndexedDbMetadata").dbName(e));
	}
	function R(e, t) {
		if (e.upgrade != null || t.upgrade != null) return !0;
		var n = Object.keys((e == null ? void 0 : e.schema) || {}), r = Object.keys((t == null ? void 0 : t.schema) || {}), o = [].concat(n, r), a = new Set(o);
		return a.size !== o.length;
	}
	function L(e) {
		return e.reduce(function(e, t, n) {
			if (n === 0) return [babelHelpers.extends({}, t, { schema: o("MAWDbSchemaReStoreDexieUtils").getCompleteDexieSchemaForVersion(t.version) })];
			var r = e[e.length - 1], a = babelHelpers.extends({}, t, { schema: t.schema != null ? o("MAWDbSchemaReStoreDexieUtils").getDexieSchemaForVersion([t], t.version) : null });
			return R(r, a) ? (e.push(a), e) : (e.splice(e.length - 1, 1, babelHelpers.extends({}, r, a, { schema: babelHelpers.extends({}, r == null ? void 0 : r.schema, a == null ? void 0 : a.schema) })), e);
		}, []);
	}
	function E(e, t, n, r) {
		var a = r != null ? r : o("MAWGetDbVersion").getArmadilloDbVersion == null ? void 0 : o("MAWGetDbVersion").getArmadilloDbVersion();
		h.DEBUG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
			"current db version: ",
			", target db version: ",
			""
		])), n, a), a == null && h.WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["version is not set in QE"]))), n != null && n > a && (h.WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose(["current db version is greater than target db version"]))), a = n);
		var i = o("MAWDbSchemaReStoreDexieUtils").MAW_DB_VERSION_CHANGES.filter(function(e) {
			var t = e.version;
			return n == null || t > n;
		}).filter(function(e) {
			var t = e.version;
			return a == null || a >= t;
		}), l = o("MAWDbSchemaReStoreDexieUtils").MAW_DB_VERSION_CHANGES.filter(function(e) {
			var t = e.version;
			return a == null || a >= t;
		});
		if (i.length === 0 || i.length === l.length) {
			h.DEBUG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Skipping db upgrade and just applying latest schema"]))), t.addAnnotations({ bool: { isUpgradeNeeded: !1 } });
			var s = o("MAWDbSchemaReStoreDexieUtils").MAW_DB_VERSION_CHANGES[o("MAWDbSchemaReStoreDexieUtils").MAW_DB_VERSION_CHANGES.length - 1].version, u = Math.min(a != null && a > 0 ? a : s, s);
			return e.version(u).stores(o("MAWDbSchemaReStoreDexieUtils").getCompleteDexieSchemaForVersion(u)), u;
		}
		var c = L(i);
		h.DEBUG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
			"Applying ",
			" updates between ",
			" and ",
			""
		])), c.length, i[0].version, i[i.length - 1].version);
		var g = c.filter(function(e) {
			return !!e.upgrade;
		}).map(function(e) {
			return e.version.toString();
		}), y = c.filter(function(e) {
			return !!e.schema;
		}).map(function(e) {
			return e.version.toString();
		});
		g.length && t.addAnnotations({ string_array: { dataMigrationVersions: g } }), y.length && t.addAnnotations({ string_array: { schemaUpgradeVersions: y } }), t.addAnnotations({ bool: { isUpgradeNeeded: !0 } });
		var C = 0;
		return c.forEach(function(t) {
			var n;
			C = Math.max((n = b(e, t)) != null ? n : 0, C != null ? C : 0);
		}), C;
	}
	l.CURRENT_MAW_STORES = C, l.getDexieDbVersion = v, l.getDBVersion = S, l.updateDB = E;
}), 98);

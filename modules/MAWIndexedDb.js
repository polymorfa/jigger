__d("MAWIndexedDb", [
	"ExecutionEnvironment",
	"FBLogger",
	"MAWBridge",
	"MAWCacheServiceMiddleware",
	"MAWDataSyncMiddleware",
	"MAWDbFactory",
	"MAWDbMutationMiddleware",
	"MAWDbProtocolMsgIdMiddleware",
	"MAWDbSchema",
	"MAWDexie",
	"MAWLoadDbMigrationVersion",
	"MAWTransactor",
	"MWFBLogger",
	"asyncToGeneratorRuntime",
	"cr:10181",
	"cr:10182",
	"cr:3527",
	"gkx",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(e) {
		e === void 0 && (e = "idb");
		var t = o("MAWDbFactory").makeIDBFactory(e, "worker");
		function a(e) {
			return t.setupPromise().then(function() {
				return t.getDBExn(e);
			});
		}
		return babelHelpers.extends({}, t, {
			getSignalDB: a,
			makeDB: (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, a, i) {
					var l = [o("MAWDbMutationMiddleware").getMAWDbMutationMiddleware];
					return l.push(o("MAWDbProtocolMsgIdMiddleware").MAWDbProtocolMsgIdMiddleware), l.push(r("MAWCacheServiceMiddleware")), a.enableDataSyncMiddleware && l.push(o("MAWDataSyncMiddleware").getDataSyncMiddleware), n("cr:3527") != null && l.push(n("cr:3527")), r("justknobx")._("4087") && (yield r("MAWLoadDbMigrationVersion")(e)), t.makeDB(e, {
						autoOpen: !0,
						middleware: l,
						onDbPopulate: a.onDbPopulate
					}, i);
				});
				function a(t, n, r) {
					return e.apply(this, arguments);
				}
				return a;
			})()
		});
	}
	var d = c(), m = "idle", p = d.isNewDb, _ = d.willSetupDB, f = function(t, n, r) {
		return d.makeDB(t, n, r).then(function() {
			m = "ready";
		});
	}, g = d.closeDB, h = d.getDBExn, y = d.getSignalDB, C = d.getDB, b = function(t) {
		return d.reset_singleton_INTERNAL_ONLY();
	}, v = d.deleteDb;
	function S() {
		return m;
	}
	function R(e) {
		var t = m;
		return m = "migrating", e.finally(function() {
			m = t;
		});
	}
	var L = new WeakMap(), E = new WeakMap(), k = o("MWFBLogger").MWLogger().tags(["db", "afterTransaction"]);
	function I(e) {
		var t = r("MAWDexie").currentTransaction;
		if (t == null) throw k.mustfixThrow("afterTransactionEffect called outside of dexie transaction");
		if (typeof e == "function") {
			var n = L.get(t) || [];
			n.push(e), L.set(t, n), n.length === 1 && t.on("complete", function() {
				var e = L.get(t) || [];
				e.forEach(function(e) {
					e();
				}), L.delete(t);
			});
		}
	}
	function T(e) {
		var t = r("MAWDexie").currentTransaction;
		if (t == null) throw k.mustfixThrow("afterTransaction called outside of dexie transaction", "maw_db");
		var a = E.get(t);
		if (a != null) a.push(e);
		else {
			var i = [e];
			E.set(t, i), t.on("complete", function() {
				E.delete(t), r("gkx")("5675") && (u || (u = r("ExecutionEnvironment"))).isInMainThread && n("cr:10182") !== null && n("cr:10181") !== null ? n("cr:10182").handleEvents(n("cr:10181").LSDatabaseSingleton, i) : o("MAWBridge").getBridge().fireAndForget("event", "uiUpdate", { events: i });
			});
		}
	}
	var D = new Set([
		"NewMsg",
		"NewMsgs",
		"MsgUpdated",
		"NewMedia",
		"NewMediaRange",
		"MediaExpired",
		"XMAShareExpired",
		"DeleteMessagesOfThread",
		"UpsertReaction",
		"DeleteReaction",
		"DeleteMessages",
		"NewXMA",
		"EditMsgHistoryAdded",
		"OneToOneMessageRequestLoaded",
		"MsgsStartCountdown",
		"MsgClearCountdown",
		"XMAShareTombstoned",
		"NewReceiverFetchInfo",
		"NewXMAs",
		"NewPoll",
		"RavenActionUpdate",
		"ParticipantsUpdated",
		"EphemeralSettingsUpdatedForUI",
		"ReceivedReceipt"
	]);
	function x(t, n) {
		if (n !== !0 && D.has(t.tag)) {
			r("FBLogger")("wmi").INFO(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[MpsMessageRendering] Ignoring afterTxn event: ", ""])), t.tag);
			return;
		}
		var o = [
			"UpdateThreadActivity",
			"VerifyThreadExists",
			"ThreadUpdated"
		];
		if (o.includes(t.tag) || r("FBLogger")("wmi").MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[MpsMessageRendering] ", " should NOT be emitted in MAW: afterTransaction"])), t.tag), t.tag === "ThreadUpdated") try {
			var a = t.value.snippetContactIDs;
			a != null && a.some(function(e) {
				return e === "Facebook User";
			}) && (k.mustfix("Something is still setting a contact id as \"Facebook User\""), t.value = babelHelpers.extends({}, t.value, { snippetContactIDs: a.map(function(e) {
				return e === "Facebook User" ? "0" : e;
			}) }));
		} catch (e) {}
		T(t);
	}
	function $(e, t) {
		var n = r("MAWDexie").currentTransaction;
		if (n == null) throw k.mustfixThrow("afterTransactionForThreadEvent called outside of dexie transaction", "maw_db");
		n.on("complete", function() {
			o("MAWBridge").getBridge().fireAndForget("threadEvent", t, e);
		});
	}
	l.TABLES_TO_ENCRYPT = o("MAWDbSchema").TABLES_TO_ENCRYPT, l.makeMsgrTransactor = o("MAWTransactor").makeMsgrTransactor, l.makeMAWIndexedDBFactory = c, l.isNewDb = p, l.willSetupDB = _, l.makeDB = f, l.closeDB = g, l.getDBExn = h, l.getSignalDB = y, l.getDB = C, l.setDB_INTERNAL_USE_ONLY = b, l.deleteDb = v, l.getDbStatus = S, l.updateStatusDuringMigration = R, l.afterTransactionEffect = I, l.afterTransaction = x, l.afterTransactionThreadEvent = $;
}), 98);

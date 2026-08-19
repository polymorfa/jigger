__d("MAWEncryptionIndexedDbV2", [
	"BrowserLockManager",
	"EARInitType",
	"ExecutionEnvironment",
	"FBLogger",
	"IndexedDbPolyfills",
	"MAWCurrentUser",
	"MAWIndexedDBDeletion",
	"MAWIndexedDbMetadata",
	"MAWQplProxy",
	"MWEARKeychainV3",
	"Promise",
	"QPLUserFlow",
	"WALogger",
	"WAWorkerGlobalScope",
	"err",
	"qpl",
	"vulture"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	n("IndexedDbPolyfills");
	var c = "browserEncryptionMetaV2", d = "version", m = 1, p = 6e4, _ = null, f = null, g = null;
	function h() {
		return _;
	}
	var y = (function(e) {
		function t() {
			return e.apply(this, arguments) || this;
		}
		return babelHelpers.inheritsLoose(t, e), t;
	})(babelHelpers.wrapNativeSuper(Error));
	function C(e, t) {
		t === void 0 && (t = 0);
		var a = o("MAWCurrentUser").getID();
		return t > m ? (S(e, "ear_idb_retry_failed_max_reached"), (u || (u = n("Promise"))).reject(new y())) : _ != null ? (S(e, "ear_db_exists"), (u || (u = n("Promise"))).resolve()) : indexedDB == null ? (S(e, "ear_idb_unavailable"), (u || (u = n("Promise"))).reject(r("err")("IndexedDB API not available"))) : (S(e, "ear_db_open_start", { bool: { browserLockEnabled: r("BrowserLockManager") != null } }), new (u || (u = (n("Promise"))))(function(n, i) {
			var l = function(o) {
				C(e, t + 1).then(n).catch(function(e) {
					if (e instanceof y) return i(o);
					i(e);
				});
			};
			try {
				g = o("MAWIndexedDbMetadata").encryptionDbName(a);
				var u = indexedDB.open(g), m = o("WAWorkerGlobalScope").workerGlobalScope.setTimeout(function() {
					i(r("err")("IndexedDB initialisation timeout in %s flow, isInWorker: %s, openRequest: %s", String(e), (s || (s = r("ExecutionEnvironment"))).isInWorker ? "true" : "false", u.readyState));
				}, p);
				u.onupgradeneeded = function(t) {
					o("WAWorkerGlobalScope").workerGlobalScope.clearTimeout(m), S(e, "ear_db_upgrade_start");
					var n = t.target.result;
					if (!n.objectStoreNames.contains(c)) {
						var r = n.createObjectStore(c, {
							autoIncrement: !0,
							keyPath: "id"
						});
						r.createIndex(d, d, { unique: !0 });
					}
					S(e, "ear_db_upgrade_end");
				}, u.onblocked = function() {
					S(e, "ear_db_open_blocked"), o("WAWorkerGlobalScope").workerGlobalScope.setTimeout(function() {
						r("vulture")("WCibuEf5QzvI68rXICGc7hMIzqw="), i(r("err")("EAR Open timed out while blocked"));
					}, 2e3);
				}, u.onsuccess = function(t) {
					o("WAWorkerGlobalScope").workerGlobalScope.clearTimeout(m);
					var a = t.target.result;
					if (!a.objectStoreNames.contains(c)) {
						var s = u.result.objectStoreNames.contains(c);
						return r("FBLogger")("messenger_web").warn("Missing encryption meta table. Is store present: %s", s), o("WAWorkerGlobalScope").workerGlobalScope.clearTimeout(m), b(a, "missing_encryption_meta_table").then(function() {
							l(r("err")("Malformed encryption DB"));
						}).catch(function(t) {
							return S(e, "ear_idb_retry_failed_delete_failed"), i(r("err")("Failed to delete malformed encryption DB: " + t.message));
						});
					}
					a.onversionchange = function() {
						a.close(), r("FBLogger")("messenger_web").info("EAR onversionchange triggered"), o("WAWorkerGlobalScope").workerGlobalScope.clearTimeout(m), f == null || f();
					}, S(e, "ear_db_open_end"), _ = a, o("MWEARKeychainV3").setNamespaceSourceDbAndMarkAsReady("global_ear", _), n();
				}, u.onerror = function() {
					if (o("WAWorkerGlobalScope").workerGlobalScope.clearTimeout(m), u.error.name === "UnknownError") return S(e, "ear_db_open_error_unknown_error"), l(u.error);
					S(e, "ear_db_open_error"), i(u.error);
				};
			} catch (t) {
				S(e, "ear_db_error"), i(t);
			}
		}));
	}
	function b(e, t) {
		return e === void 0 && (e = _), r("FBLogger")("messenger_web").warn("EAR DB deletion triggered: %s", t), e != null && e.close(), o("MAWIndexedDBDeletion").deleteDB(g, "ear");
	}
	function v(t) {
		switch (t) {
			case r("EARInitType").EB_INIT: return r("qpl")._(521477507, "1406");
			case r("EARInitType").MAW_INIT: return r("qpl")._(25310776, "6155");
			case r("EARInitType").MAW_RP_INIT: return o("WALogger").DEV(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[Armadillo Web Remote Presence] MAW RP Initialising EAR"]))), r("qpl")._(25310776, "6155");
			case r("EARInitType").LS_INIT: return r("qpl")._(25305590, "1127");
			case r("EARInitType").MAW_IN_UI_INIT: return null;
		}
	}
	function S(e, t, n) {
		var a = v(e);
		a != null && ((s || (s = r("ExecutionEnvironment"))).isInWorker ? o("MAWQplProxy").sendQplPointThroughBridge(a, "worker_" + t, { annotations: n }) : (r("QPLUserFlow").addPoint(a, t), n != null && r("QPLUserFlow").addAnnotations(a, n)));
	}
	l.storeName = c, l.getEncryptionDB = h, l.makeEncryptionDB = C, l.deleteEncryptionDB_UNSAFE = b;
}), 98);

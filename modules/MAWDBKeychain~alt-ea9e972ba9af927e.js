__d("MAWDBKeychain", [
	"BrowserLockManager",
	"EARInitType",
	"ExecutionEnvironment",
	"FBLogger",
	"MAWCurrentUser",
	"MAWDexie",
	"MAWIndexedDbMetadata",
	"MWEARKeychainV3",
	"MWSetupDBEncryption"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["id"], s, u = "encryptionMetaV3", c = function(t) {
		t === void 0 && (t = o("MWEARKeychainV3").logMawInitPoint), t("maw_ear_check_mawdb_start");
		var e = o("MAWCurrentUser").getID(), n = o("MAWIndexedDbMetadata").dbName(e), a = new (r("MAWDexie"))(n, { addons: [] });
		return a.open().then(function(e) {
			return t("maw_ear_check_mawdb_end"), e;
		}).catch("NoSuchDatabaseError", function() {
			return t("maw_ear_check_mawdb_no_db"), null;
		}).catch(function(e) {
			throw t("maw_ear_check_mawdb_error"), e;
		});
	}, d = async function(t) {
		t === void 0 && (t = o("MWEARKeychainV3").logMawInitPoint);
		var e = async function() {
			var e;
			try {
				if (e = await c(t), !e) return r("FBLogger")("messenger_web").info("MAWDB is missing for MAW EAR worker init."), t("maw_ear_new_user"), {
					isNewUser: !0,
					reinitEAR: !0,
					useMawEAR: !0
				};
				if (!e.backendDB().objectStoreNames.contains(u)) return e.close(), r("FBLogger")("messenger_web").info("MAW EAR is missing for MAW EAR worker init."), t("maw_ear_missing_ear_table"), {
					reinitEAR: !0,
					useMawEAR: !0
				};
				var n = await p(e.backendDB());
				n.length === 0 && (r("FBLogger")("messenger_web").info("Migrating global EAR to MAW EAR"), t("maw_ear_migrating"), await m(e.backendDB())), o("MWEARKeychainV3").setNamespaceSourceDbWithoutMarkingDbReady("maw_ear", e.backendDB()), t("maw_ear_init_keychain");
				var a = await o("MWEARKeychainV3").init("maw_ear", r("EARInitType").MAW_INIT, t);
				if (a.success === !1) throw a.payload != null ? a.payload : r("FBLogger")("messenger_web").mustfixThrow("Failed to init MAW EAR Keychain.");
				return t("maw_ear_success"), r("FBLogger")("messenger_web").info("MAW EAR worker successfully initialised."), { useMawEAR: !0 };
			} finally {
				var i;
				o("MWEARKeychainV3").setNamespaceSourceDbWithoutMarkingDbReady("maw_ear", null), (i = e) == null || i.close();
			}
		};
		return new Promise(function(t, n) {
			return r("BrowserLockManager") != null ? r("BrowserLockManager").request("mawdb_keychain_init_ear", function() {
				return e().then(t).catch(n);
			}) : e().then(t).catch(n);
		}).catch(function(e) {
			throw t("maw_ear_failure"), r("FBLogger")("messenger_web").catching(e).mustfixThrow("Failed to init MAW EAR Worker.");
		});
	}, m = async function(n) {
		var t = await o("MWSetupDBEncryption").init(r("EARInitType").MAW_INIT);
		if (!t.success) throw t.payload != null ? t.payload : r("FBLogger")("messenger_web").mustfixThrow("Failed to init global EAR.");
		var a = o("MWEARKeychainV3").getKeychain("global_ear");
		if (a.databaseEncryptionKeys.size === 0) throw r("FBLogger")("messenger_web").mustfixThrow("Global EAR data is missing.");
		var i = Array.from(a.databaseEncryptionKeys.entries()).map(function(t) {
			var n = t[0], r = t[1].dbEntry, o = r.id, a = babelHelpers.objectWithoutPropertiesLoose(r, e);
			return a;
		});
		return new Promise(function(e, t) {
			var r = n.transaction(u, "readwrite");
			i.forEach(function(e) {
				r.objectStore(u).add(e);
			}), r.onerror = function() {
				return t(r.error);
			}, r.oncomplete = function() {
				return e();
			};
		});
	};
	function p(e) {
		return new Promise(function(t, n) {
			var r = e.transaction(u, "readonly"), o = r.objectStore(u).getAll();
			o.onsuccess = function() {
				return t(o.result);
			}, o.onerror = function() {
				return n(o.error);
			};
		});
	}
	function _(e, t) {
		if (e.encryptionMetaV3 != null) {
			var n = o("MWEARKeychainV3").getKeychainInitStatus("maw_ear");
			if (n === "none" && t != null) {
				o("MWEARKeychainV3").logMawInitPoint("maw_ear_populate_unstored_key"), e.encryptionMetaV3.add(t);
				return;
			}
			var a = o("MWEARKeychainV3").isKeychainSettled("maw_ear") ? "maw_ear" : "global_ear", i = Array.from(o("MWEARKeychainV3").getKeychain(a).databaseEncryptionKeys).map(function(e) {
				var t = e[0], n = e[1].dbEntry;
				return n;
			});
			if (i.length > 0) r("FBLogger")("messenger_web").info("DB re-populated after external DB deletion. Namespace: %s. isWorker: %s", a, (s || (s = r("ExecutionEnvironment"))).isInWorker), e.encryptionMetaV3.bulkPut(i), o("MWEARKeychainV3").setNamespaceSourceDbAndMarkAsReady("maw_ear", e.db.backendDB());
			else throw r("FBLogger")("messenger_web").mustfixThrow("No encryption keys to populate MAWDB. Namespace: %s. HasUnstoredKey: %s. isWorker: %s", a, !!t, (s || (s = r("ExecutionEnvironment"))).isInWorker);
		}
	}
	l.STORENAME = u, l.checkMawDbExists = c, l.initEAR = d, l.getEncryptionKeys = p, l.onDbPopulateMAWKeychain = _;
}), 98);

__d("MAWDBKeychain", [
	"BrowserLockManager",
	"EARInitType",
	"ExecutionEnvironment",
	"FBLogger",
	"MAWCurrentUser",
	"MAWDexie",
	"MAWIndexedDbMetadata",
	"MWEARKeychainV3",
	"MWSetupDBEncryption",
	"Promise",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["id"], s, u, c = "encryptionMetaV3", d = function(t) {
		t === void 0 && (t = o("MWEARKeychainV3").logMawInitPoint), t("maw_ear_check_mawdb_start");
		var e = o("MAWCurrentUser").getID(), n = o("MAWIndexedDbMetadata").dbName(e), a = new (r("MAWDexie"))(n, { addons: [] });
		return a.open().then(function(e) {
			return t("maw_ear_check_mawdb_end"), e;
		}).catch("NoSuchDatabaseError", function() {
			return t("maw_ear_check_mawdb_no_db"), null;
		}).catch(function(e) {
			throw t("maw_ear_check_mawdb_error"), e;
		});
	}, m = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			e === void 0 && (e = o("MWEARKeychainV3").logMawInitPoint);
			var t = (function() {
				var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var t;
					try {
						if (t = yield d(e), !t) return r("FBLogger")("messenger_web").info("MAWDB is missing for MAW EAR worker init."), e("maw_ear_new_user"), {
							isNewUser: !0,
							reinitEAR: !0,
							useMawEAR: !0
						};
						if (!t.backendDB().objectStoreNames.contains(c)) return t.close(), r("FBLogger")("messenger_web").info("MAW EAR is missing for MAW EAR worker init."), e("maw_ear_missing_ear_table"), {
							reinitEAR: !0,
							useMawEAR: !0
						};
						var n = yield _(t.backendDB());
						n.length === 0 && (r("FBLogger")("messenger_web").info("Migrating global EAR to MAW EAR"), e("maw_ear_migrating"), yield p(t.backendDB())), o("MWEARKeychainV3").setNamespaceSourceDbWithoutMarkingDbReady("maw_ear", t.backendDB()), e("maw_ear_init_keychain");
						var a = yield o("MWEARKeychainV3").init("maw_ear", r("EARInitType").MAW_INIT, e);
						if (a.success === !1) throw a.payload != null ? a.payload : r("FBLogger")("messenger_web").mustfixThrow("Failed to init MAW EAR Keychain.");
						return e("maw_ear_success"), r("FBLogger")("messenger_web").info("MAW EAR worker successfully initialised."), { useMawEAR: !0 };
					} finally {
						var i;
						o("MWEARKeychainV3").setNamespaceSourceDbWithoutMarkingDbReady("maw_ear", null), (i = t) == null || i.close();
					}
				});
				return function() {
					return t.apply(this, arguments);
				};
			})();
			return new (u || (u = (n("Promise"))))(function(e, n) {
				return r("BrowserLockManager") != null ? r("BrowserLockManager").request("mawdb_keychain_init_ear", function() {
					return t().then(e).catch(n);
				}) : t().then(e).catch(n);
			}).catch(function(t) {
				throw e("maw_ear_failure"), r("FBLogger")("messenger_web").catching(t).mustfixThrow("Failed to init MAW EAR Worker.");
			});
		});
		return function(n) {
			return e.apply(this, arguments);
		};
	})(), p = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var a = yield o("MWSetupDBEncryption").init(r("EARInitType").MAW_INIT);
			if (!a.success) throw a.payload != null ? a.payload : r("FBLogger")("messenger_web").mustfixThrow("Failed to init global EAR.");
			var i = o("MWEARKeychainV3").getKeychain("global_ear");
			if (i.databaseEncryptionKeys.size === 0) throw r("FBLogger")("messenger_web").mustfixThrow("Global EAR data is missing.");
			var l = Array.from(i.databaseEncryptionKeys.entries()).map(function(t) {
				var n = t[0], r = t[1].dbEntry, o = r.id, a = babelHelpers.objectWithoutPropertiesLoose(r, e);
				return a;
			});
			return new (u || (u = (n("Promise"))))(function(e, n) {
				var r = t.transaction(c, "readwrite");
				l.forEach(function(e) {
					r.objectStore(c).add(e);
				}), r.onerror = function() {
					return n(r.error);
				}, r.oncomplete = function() {
					return e();
				};
			});
		});
		return function(n) {
			return t.apply(this, arguments);
		};
	})();
	function _(e) {
		return new (u || (u = (n("Promise"))))(function(t, n) {
			var r = e.transaction(c, "readonly"), o = r.objectStore(c).getAll();
			o.onsuccess = function() {
				return t(o.result);
			}, o.onerror = function() {
				return n(o.error);
			};
		});
	}
	function f(e, t) {
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
	l.STORENAME = c, l.checkMawDbExists = d, l.initEAR = m, l.getEncryptionKeys = _, l.onDbPopulateMAWKeychain = f;
}), 98);

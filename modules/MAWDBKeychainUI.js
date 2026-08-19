__d("MAWDBKeychainUI", [
	"EARInitType",
	"FBLogger",
	"MAWDBKeychain",
	"MAWWaitForBackendSetup",
	"MWEARKeychainV3",
	"asyncToGeneratorRuntime",
	"err",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e;
			try {
				var t, n;
				if (e = yield o("MAWDBKeychain").checkMawDbExists(), !e || !e.backendDB().objectStoreNames.contains(o("MAWDBKeychain").STORENAME)) {
					var a;
					(a = e) == null || a.close(), o("MWEARKeychainV3").logMawInitPoint("maw_ear_waiting_missing_ear_table"), yield o("MAWWaitForBackendSetup").waitForBackendSetup("maw-ear-ui-missing-ear-table");
				} else if (((t = e) == null ? void 0 : t.backendDB().objectStoreNames.contains(o("MAWDBKeychain").STORENAME)) === !0) {
					var i = yield o("MAWDBKeychain").getEncryptionKeys(e.backendDB());
					e.close(), i.length === 0 && (o("MWEARKeychainV3").logMawInitPoint("maw_ear_waiting_missing_ear_data"), yield o("MAWWaitForBackendSetup").waitForBackendSetup("maw-ear-ui-missing-ear-data"));
				}
				if ((n = e) == null || n.close(), e = yield o("MAWDBKeychain").checkMawDbExists(), !e) throw r("FBLogger")("messenger_web").mustfixThrow("MAWDB is missing after worker setup.");
				var l = yield o("MAWDBKeychain").getEncryptionKeys(e.backendDB());
				if (l.length === 0) return r("FBLogger")("messenger_web").mustfix("MAW EAR data is missing after worker setup."), o("MWEARKeychainV3").logMawInitPoint("maw_ear_not_migrated"), { useMawEAR: !1 };
				var s = e.backendDB();
				s == null && r("FBLogger")("messenger_web").mustfix("MAW EAR IndexedDB is missing after the transaction to get encryption keys"), o("MWEARKeychainV3").setNamespaceSourceDbWithoutMarkingDbReady("maw_ear", s);
				var u = yield o("MWEARKeychainV3").init("maw_ear", r("EARInitType").MAW_IN_UI_INIT);
				if (u.success === !1) {
					var c;
					throw (c = u.payload) != null ? c : r("err")("Failed to init MAW EAR UI Keychain.");
				}
				return o("MWEARKeychainV3").logMawInitPoint("maw_ear_success"), r("FBLogger")("messenger_web").info("MAW EAR UI successfully initialised."), { useMawEAR: !0 };
			} catch (e) {
				throw o("MWEARKeychainV3").logMawInitPoint("maw_ear_failure"), r("FBLogger")("messenger_web").catching(r("getErrorSafe")(e)).mustfixThrow("Failed to init MAW EAR UI.");
			} finally {
				var d;
				o("MWEARKeychainV3").setNamespaceSourceDbWithoutMarkingDbReady("maw_ear", null), (d = e) == null || d.close();
			}
		});
		return function() {
			return e.apply(this, arguments);
		};
	})();
	l.initEARUI = e;
}), 98);

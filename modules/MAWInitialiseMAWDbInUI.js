__d("MAWInitialiseMAWDbInUI", [
	"MAWDBKeychain",
	"MAWDBKeychainUI",
	"MAWIndexedDbUI",
	"MAWWaitForBackendSetup",
	"MWEARKeychainV3",
	"asyncToGeneratorRuntime",
	"maybeSetupMAWMainThreadLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			o("maybeSetupMAWMainThreadLogger").maybeSetupMAWMainThreadLogger();
			var e = yield o("MAWDBKeychainUI").initEARUI(), t = e.useMawEAR;
			yield o("MAWIndexedDbUI").makeDB(o("MWEARKeychainV3").getDbEncryptionKey, {
				backendInitPromise: o("MAWWaitForBackendSetup").waitForBackendSetup("ui_dexie").then(function() {}),
				onDbPopulate: o("MAWDBKeychain").onDbPopulateMAWKeychain
			}), t && o("MWEARKeychainV3").setNamespaceSourceDbAndMarkAsReady("maw_ear", (yield o("MAWIndexedDbUI").getDB()).stores.backendDB());
		}), s.apply(this, arguments);
	}
	l.MAWInitialiseMAWDbInUI = e;
}), 98);

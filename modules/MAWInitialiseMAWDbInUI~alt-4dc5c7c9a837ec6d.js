__d("MAWInitialiseMAWDbInUI", [
	"MAWDBKeychain",
	"MAWDBKeychainUI",
	"MAWIndexedDbUI",
	"MAWWaitForBackendSetup",
	"MWEARKeychainV3",
	"maybeSetupMAWMainThreadLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e() {
		o("maybeSetupMAWMainThreadLogger").maybeSetupMAWMainThreadLogger();
		var e = await o("MAWDBKeychainUI").initEARUI(), t = e.useMawEAR;
		await o("MAWIndexedDbUI").makeDB(o("MWEARKeychainV3").getDbEncryptionKey, {
			backendInitPromise: o("MAWWaitForBackendSetup").waitForBackendSetup("ui_dexie").then(function() {}),
			onDbPopulate: o("MAWDBKeychain").onDbPopulateMAWKeychain
		}), t && o("MWEARKeychainV3").setNamespaceSourceDbAndMarkAsReady("maw_ear", (await o("MAWIndexedDbUI").getDB()).stores.backendDB());
	}
	l.MAWInitialiseMAWDbInUI = e;
}), 98);

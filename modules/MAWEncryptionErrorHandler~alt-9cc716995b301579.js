__d("MAWEncryptionErrorHandler", [
	"CurrentMessengerUser",
	"FBLogger",
	"MAWIndexedDBDeletion",
	"MAWIndexedDbMetadata",
	"MAWSetupWorker",
	"MWDeleteAllDBs",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e() {
		var e, t, n = o("CurrentMessengerUser").getID();
		await Promise.all([
			(e = o("MAWIndexedDBDeletion")).deleteDB((t = o("MAWIndexedDbMetadata")).signalWorm(n), "worm"),
			e.deleteDB(t.webReverDbbName(n), "worm"),
			e.deleteDB(t.wmiMediaServiceName(n), "worm"),
			e.deleteDB(t.wmiMetadataDbName(n), "worm"),
			e.deleteDB(t.persistedQueueDbName(n), "worm"),
			e.deleteDB(t.wormPersistedQueueDbName(n), "worm"),
			e.deleteDB(t.wormMaintenanceDbName(n), "worm"),
			e.deleteDB(t.ebdbName(n), "worm"),
			e.deleteDB(t.ebMinosDbName(n), "worm"),
			e.deleteDB(t.MAWcacheServiceDbName(n), "worm"),
			e.deleteDB(t.wmiRateLimitDbName(n), "worm"),
			e.deleteDB(t.ebRecoveryCodeDBName(n), "worm"),
			e.deleteDB(t.MAWDebugInfoDBName(n), "worm")
		]);
	}
	async function s() {
		var t = "MAWEARKeychainDecryptionError", n = "error";
		try {
			await o("MAWSetupWorker").terminateWorker(t), await o("MWDeleteAllDBs").deleteAllDBs_DO_NOT_USE_UNLESS_YOU_KNOW_WHAT_YOU_ARE_DOING(n, { deleteEncryptionDB: !0 }), await e();
		} catch (e) {
			var a = r("getErrorSafe")(e);
			r("FBLogger")("messenger_web").catching(a).mustfixThrow("Fail to delete dbs from: %s terminateWorkerReason: %s", n, t);
		}
	}
	l.handleEARKeychainError = s;
}), 98);

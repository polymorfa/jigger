__d("MAWEncryptionErrorHandler", [
	"CurrentMessengerUser",
	"FBLogger",
	"MAWIndexedDBDeletion",
	"MAWIndexedDbMetadata",
	"MAWSetupWorker",
	"MWDeleteAllDBs",
	"Promise",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s() {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var t = o("CurrentMessengerUser").getID();
			yield (e || (e = n("Promise"))).all([
				o("MAWIndexedDBDeletion").deleteDB(o("MAWIndexedDbMetadata").signalWorm(t), "worm"),
				o("MAWIndexedDBDeletion").deleteDB(o("MAWIndexedDbMetadata").webReverDbbName(t), "worm"),
				o("MAWIndexedDBDeletion").deleteDB(o("MAWIndexedDbMetadata").wmiMediaServiceName(t), "worm"),
				o("MAWIndexedDBDeletion").deleteDB(o("MAWIndexedDbMetadata").wmiMetadataDbName(t), "worm"),
				o("MAWIndexedDBDeletion").deleteDB(o("MAWIndexedDbMetadata").persistedQueueDbName(t), "worm"),
				o("MAWIndexedDBDeletion").deleteDB(o("MAWIndexedDbMetadata").wormPersistedQueueDbName(t), "worm"),
				o("MAWIndexedDBDeletion").deleteDB(o("MAWIndexedDbMetadata").wormMaintenanceDbName(t), "worm"),
				o("MAWIndexedDBDeletion").deleteDB(o("MAWIndexedDbMetadata").ebdbName(t), "worm"),
				o("MAWIndexedDBDeletion").deleteDB(o("MAWIndexedDbMetadata").ebMinosDbName(t), "worm"),
				o("MAWIndexedDBDeletion").deleteDB(o("MAWIndexedDbMetadata").MAWcacheServiceDbName(t), "worm"),
				o("MAWIndexedDBDeletion").deleteDB(o("MAWIndexedDbMetadata").wmiRateLimitDbName(t), "worm"),
				o("MAWIndexedDBDeletion").deleteDB(o("MAWIndexedDbMetadata").ebRecoveryCodeDBName(t), "worm"),
				o("MAWIndexedDBDeletion").deleteDB(o("MAWIndexedDbMetadata").MAWDebugInfoDBName(t), "worm")
			]);
		}), u.apply(this, arguments);
	}
	function c() {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = "MAWEARKeychainDecryptionError", t = "error";
			try {
				yield o("MAWSetupWorker").terminateWorker(e), yield o("MWDeleteAllDBs").deleteAllDBs_DO_NOT_USE_UNLESS_YOU_KNOW_WHAT_YOU_ARE_DOING(t, { deleteEncryptionDB: !0 }), yield s();
			} catch (o) {
				var n = r("getErrorSafe")(o);
				r("FBLogger")("messenger_web").catching(n).mustfixThrow("Fail to delete dbs from: %s terminateWorkerReason: %s", t, e);
			}
		}), d.apply(this, arguments);
	}
	l.handleEARKeychainError = c;
}), 98);

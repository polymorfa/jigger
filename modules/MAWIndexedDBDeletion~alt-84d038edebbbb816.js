__d("MAWIndexedDBDeletion", [
	"CurrentMessengerUser",
	"FBLogger",
	"MAWIndexedDbMetadata"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return indexedDB == null || e == null ? Promise.resolve() : new Promise(function(n, o) {
			var a = indexedDB.deleteDatabase(e);
			a.onsuccess = function() {
				r("FBLogger")("maw_db").warn("%s db was deleted", t), n();
			}, a.onblocked = function() {
				r("FBLogger")("maw_db").mustfix("Cannot delete %s db: blocked. Make sure DB is closed.", t);
			}, a.onerror = function() {
				r("FBLogger")("maw_db").mustfix("Cannot delete %s db", t), o(a.error);
			};
		});
	}
	async function s() {
		var t, n = o("CurrentMessengerUser").getID();
		await Promise.all([
			e((t = o("MAWIndexedDbMetadata")).dbName(n), "maw_v1"),
			e(t.restoreDbName2(n), "maw_v3"),
			e(t.jobsDbName(n), "signal"),
			e(t.logDbName(n), "logDb")
		]);
	}
	l.deleteDB = e, l.deleteMAWPersistence = s;
}), 98);

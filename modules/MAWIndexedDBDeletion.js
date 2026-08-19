__d("MAWIndexedDBDeletion", [
	"CurrentMessengerUser",
	"FBLogger",
	"MAWIndexedDbMetadata",
	"Promise",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, o) {
		return indexedDB == null || t == null ? (e || (e = n("Promise"))).resolve() : new (e || (e = (n("Promise"))))(function(e, n) {
			var a = indexedDB.deleteDatabase(t);
			a.onsuccess = function() {
				r("FBLogger")("maw_db").warn("%s db was deleted", o), e();
			}, a.onblocked = function() {
				r("FBLogger")("maw_db").mustfix("Cannot delete %s db: blocked. Make sure DB is closed.", o);
			}, a.onerror = function() {
				r("FBLogger")("maw_db").mustfix("Cannot delete %s db", o), n(a.error);
			};
		});
	}
	function u() {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var t = o("CurrentMessengerUser").getID();
			yield (e || (e = n("Promise"))).all([
				s(o("MAWIndexedDbMetadata").dbName(t), "maw_v1"),
				s(o("MAWIndexedDbMetadata").restoreDbName2(t), "maw_v3"),
				s(o("MAWIndexedDbMetadata").jobsDbName(t), "signal"),
				s(o("MAWIndexedDbMetadata").logDbName(t), "logDb")
			]);
		}), c.apply(this, arguments);
	}
	l.deleteDB = s, l.deleteMAWPersistence = u;
}), 98);

__d("MAWReStoreDb", [
	"FBLogger",
	"MAWIndexedDb",
	"MAWReStoreDbSetup",
	"getErrorSafe",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	async function s() {
		if (r("gkx")("3577")) try {
			var t = await o("MAWReStoreDbSetup").getDB();
			return t;
		} catch (e) {
			var n = r("getErrorSafe")(e);
			throw r("FBLogger")("igd_web").blameToPreviousFrame().catching(n).mustfixThrow("Failed to get ReStore DB: %s", arguments[0]);
		}
		return e == null && (o("MAWIndexedDb").willSetupDB() ? e = o("MAWIndexedDb").getDB().then(function() {
			return o("MAWReStoreDbSetup").getDB();
		}) : e = o("MAWReStoreDbSetup").getDB()), e;
	}
	function u() {
		return o("MAWReStoreDbSetup").shouldUseReStoreDb();
	}
	l.getDB = s, l.shouldUseReStoreDb = u;
}), 98);

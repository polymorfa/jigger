__d("MAWReStoreDb", [
	"FBLogger",
	"MAWIndexedDb",
	"MAWReStoreDbSetup",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s() {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (r("gkx")("3577")) try {
				var t = yield o("MAWReStoreDbSetup").getDB();
				return t;
			} catch (e) {
				var n = r("getErrorSafe")(e);
				throw r("FBLogger")("igd_web").blameToPreviousFrame().catching(n).mustfixThrow("Failed to get ReStore DB: %s", arguments[0]);
			}
			return e == null && (o("MAWIndexedDb").willSetupDB() ? e = o("MAWIndexedDb").getDB().then(function() {
				return o("MAWReStoreDbSetup").getDB();
			}) : e = o("MAWReStoreDbSetup").getDB()), e;
		}), u.apply(this, arguments);
	}
	function c() {
		return o("MAWReStoreDbSetup").shouldUseReStoreDb();
	}
	l.getDB = s, l.shouldUseReStoreDb = c;
}), 98);

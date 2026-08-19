__d("MAWDbInitIndexedDb", ["MAWIndexedDb", "MWEARKeychainV3"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = e.onDbPopulate;
		return o("MAWIndexedDb").makeDB(o("MWEARKeychainV3").getDbEncryptionKey, {
			enableDataSyncMiddleware: !0,
			onDbPopulate: t
		});
	}
	l.dbInit = e;
}), 98);

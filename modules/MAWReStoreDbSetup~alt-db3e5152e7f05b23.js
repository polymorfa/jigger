__d("MAWReStoreDbSetup", [
	"FBLogger",
	"MAWGetReStoreDBError",
	"cr:2924",
	"cr:39969"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e = n("cr:39969")) != null ? e : n("cr:2924"), u = s == null ? void 0 : s.createDB, c;
	function d() {
		if (u == null) throw r("FBLogger")("messenger_web").mustfixThrow("Unexpected invocation of OneDB");
		return c == null && (c = (async function() {
			try {
				var e = await u();
				return await e.runInTransaction(async function() {}, "readwrite", void 0, void 0, i.id + ":37"), e;
			} catch (e) {
				throw new (r("MAWGetReStoreDBError"))("Failed to get ReStore DB: " + e);
			}
		})()), c;
	}
	function m() {
		return u != null;
	}
	l.getDB = d, l.shouldUseReStoreDb = m;
}), 98);

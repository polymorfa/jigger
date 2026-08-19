__d("MAWIndexedDbUI", [
	"MAWDbFactory",
	"MAWDbMutationMiddleware",
	"MAWDbProtocolMsgIdMiddleware",
	"MAWIndexedDb",
	"MAWTransactor",
	"cr:3527",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		var e = o("MAWDbFactory").makeIDBFactory("ui_idb", "main");
		return {
			closeDB: e.closeDB,
			deleteDb: e.deleteDb,
			getDB: e.getDB,
			makeDB: function(a, i, l) {
				var t = [o("MAWDbMutationMiddleware").getMAWDbMutationMiddleware];
				t.push(o("MAWDbProtocolMsgIdMiddleware").MAWDbProtocolMsgIdMiddleware), n("cr:3527") != null && t.push(n("cr:3527"));
				var s = e.makeDB(a, {
					autoOpen: r("gkx")("6817"),
					backendInitPromise: i.backendInitPromise,
					cache: "disabled",
					middleware: t,
					onDbPopulate: i.onDbPopulate
				}, l);
				return s;
			},
			reset_singleton_INTERNAL_ONLY: e.reset_singleton_INTERNAL_ONLY
		};
	}
	var s = e(), u = s.makeDB, c = s.closeDB, d = s.getDB, m = s.deleteDb, p = s.reset_singleton_INTERNAL_ONLY;
	l.makeMsgrTransactor = o("MAWTransactor").makeMsgrUITransactor_IMPORT_FROM_MAWIndexedDbUI_INSTEAD, l.afterTransaction = o("MAWIndexedDb").afterTransaction, l.makeMAWIndexedDBFactory = e, l.makeDB = u, l.closeDB = c, l.getDB = d, l.deleteDb = m, l.reset_singleton_INTERNAL_ONLY = p;
}), 98);

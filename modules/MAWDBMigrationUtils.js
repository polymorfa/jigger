__d("MAWDBMigrationUtils", [
	"MAWDbAppMeta",
	"MAWIndexedDb",
	"MAWTransactionMode"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = {
		batchSize: 0,
		cursorValue: 0,
		isRunning: !1
	}, s = { version: 0 }, u = o("MAWIndexedDb").makeMsgrTransactor({ appMeta: o("MAWTransactionMode").READONLY }, "getMigrationVersion", function(e) {
		return function() {
			return e.appMeta.get(o("MAWDbAppMeta").AppMetaKeysEnum.dbMigrationVersion).then(function(e) {
				var t, n = (t = e == null ? void 0 : e.value.dbMigrationVersion) != null ? t : 0;
				return s.version = n, n;
			});
		};
	}), c = 6;
	l.mawDbDedupeMsgsMigrationStatus = e, l.mawDbMigrationVersion = s, l.getMigrationVersion = u, l.MAWDB_DEDUPE_MSGS_MIGRATION_VERSION = c;
}), 98);

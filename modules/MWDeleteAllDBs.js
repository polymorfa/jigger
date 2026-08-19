__d("MWDeleteAllDBs", [
	"MAWEncryptionIndexedDbV2",
	"MAWIndexedDBDeletion",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			yield o("MAWIndexedDBDeletion").deleteMAWPersistence(), (t == null ? void 0 : t.deleteEncryptionDB) === !0 && (yield o("MAWEncryptionIndexedDbV2").deleteEncryptionDB_UNSAFE(void 0, "delete_all_dbs"));
		}), s.apply(this, arguments);
	}
	l.deleteAllDBs_DO_NOT_USE_UNLESS_YOU_KNOW_WHAT_YOU_ARE_DOING = e;
}), 98);

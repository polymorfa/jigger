__d("EBSMDBAPI", [
	"EBDB",
	"EBSMProperties",
	"FBLogger",
	"Promise",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var a = t.hasUserGivenAutoRestoreConsent, i = a ? ["secure_encrypted_backups_epochs", "secure_encrypted_backups_client_state"] : [];
			i.push("auto_restore_opt_out");
			var l = Array.from(r("EBSMProperties").persistedTables).filter(function(e) {
				return !i.includes(e);
			});
			try {
				var s = a ? [] : ["device_state"];
				if (s = s.concat(l), s.length > 0) {
					var u = yield o("EBDB").getEBDB();
					yield u.runInTransaction(s, "readwrite", function(t) {
						return (e || (e = n("Promise"))).all(s.map(function(e) {
							return t.stores[e].clear();
						}));
					}, "EBDB - clear on logout");
				}
			} catch (e) {
				var c = r("getErrorSafe")(e);
				r("FBLogger")("wmi_eb").catching(c).mustfix("Error clearing EBIDB non-persisted rows");
			}
		}), u.apply(this, arguments);
	}
	l.clearEBIDBNonPersistedRows = s;
}), 98);

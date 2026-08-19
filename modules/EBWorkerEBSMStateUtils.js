__d("EBWorkerEBSMStateUtils", [
	"EBLS",
	"I64",
	"ReQL",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		return o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.tables.secure_encrypted_backups_client_state));
	}
	function u(e) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = t != null ? t : yield o("EBLS").getLSStorage(), r = yield s(n);
			return r == null ? "clientStateRow is null" : "clientStateRow:\n        backupId: " + (e || (e = o("I64"))).to_string(r.backupId) + ",\n        backupTenancy: " + (r.backupTenancy == null ? "null" : (e || (e = o("I64"))).to_string(r.backupTenancy)) + ",\n        authLevel: " + (e || (e = o("I64"))).to_string(r.authorityLevel) + "\n        deviceId: " + (r.deviceId == null ? "null" : (e || (e = o("I64"))).to_string(r.deviceId));
		}), c.apply(this, arguments);
	}
	l.getEBSMWorkerState = u;
}), 98);

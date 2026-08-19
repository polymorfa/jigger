__d("EBWorkerGetEBState", [
	"EBLS",
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum",
	"ReQL",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u() {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var t;
			yield o("EBLS").init();
			var n = yield o("EBLS").getLSStorage(), a = yield (t = o("ReQL")).firstAsync(t.fromTableAscending(n.tables.encrypted_backups)), i = yield t.firstAsync(t.fromTableAscending(n.tables.secure_encrypted_backups_client_state));
			return a == null ? 2 : (e || (e = o("I64"))).equal(a.authorityLevel, (s || (s = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").OPTIMISTIC)) ? 1 : (e || (e = o("I64"))).equal(a.authorityLevel, (s || (s = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE)) ? m(i, a) : -1;
		}), c.apply(this, arguments);
	}
	var d = "-1";
	function m(t, n) {
		var a = n.backupId;
		return a == null ? 2 : (e || (e = o("I64"))).to_string(a) === d ? -1 : t == null || !(e || (e = o("I64"))).equal(t.authorityLevel, (s || (s = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE)) || !(e || (e = o("I64"))).equal(t.backupId, a) ? 4 : 3;
	}
	l.getEBWorkerState = u;
}), 98);

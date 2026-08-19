__d("MAWEBClientStateLogging", [
	"EBGetClientState",
	"EBLS",
	"MAWODSProxy",
	"WAOdsEnums",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = (yield o("EBLS").init()).db, t = yield o("EBGetClientState").getClientState(e);
			o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.EB_CLIENT_STATE_CHECK,
				key: t == null ? "null" : "present"
			});
		}), s.apply(this, arguments);
	}
	l.logEBClientStateForDebugging = e;
}), 98);

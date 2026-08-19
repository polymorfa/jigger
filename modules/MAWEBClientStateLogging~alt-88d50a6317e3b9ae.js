__d("MAWEBClientStateLogging", [
	"EBGetClientState",
	"EBLS",
	"MAWODSProxy",
	"WAOdsEnums"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e() {
		var e = (await o("EBLS").init()).db, t = await o("EBGetClientState").getClientState(e);
		o("MAWODSProxy").odsBumpEntityKey({
			entity: o("WAOdsEnums").Entity.EB_CLIENT_STATE_CHECK,
			key: t == null ? "null" : "present"
		});
	}
	l.logEBClientStateForDebugging = e;
}), 98);

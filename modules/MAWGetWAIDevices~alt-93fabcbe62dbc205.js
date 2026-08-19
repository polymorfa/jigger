__d("MAWGetWAIDevices", ["WADevicesState", "WAGlobals"], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e) {
		var t = e.users;
		await o("WAGlobals").getWaOneQueue().waitForWAInfraOfflineSyncEnd(), await o("WADevicesState").getDevicesState().waitForUserDevices(t, "getWAIDevices");
		var n = await o("WAGlobals").getWaOneQueue().enqueue(function(e) {
			var n = e.cryptoManager;
			return n.storage.bulkLoadIdentities(t);
		}, {
			afterInit: !0,
			flush: !1,
			operationType: "maw_load_identities"
		}), r = [];
		if (n.size === 0) r = [].concat(t);
		else for (var a of n) {
			var i = a[0], l = a[1];
			l.size === 0 && r.push(i);
		}
		r.length > 0 && (await o("WADevicesState").getDevicesState().waitForUserDevices(r, "getWAIDevices", !0), n = await o("WAGlobals").getWaOneQueue().enqueue(function(e) {
			var n = e.cryptoManager;
			return n.storage.bulkLoadIdentities(t);
		}, {
			afterInit: !0,
			flush: !1,
			operationType: "maw_load_identities"
		}));
		var s = new Map();
		for (var u of n) {
			var c = u[0], d = u[1];
			s.set(c, Array.from(d.keys()));
		}
		return s;
	}
	l.getWAIDevices = e;
}), 98);

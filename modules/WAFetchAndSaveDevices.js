__d("WAFetchAndSaveDevices", [
	"Promise",
	"WAGlobals",
	"WALogger",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			if (t.length !== 0) {
				var r = [];
				yield o("WAGlobals").getWaOneQueue().enqueue(function(a) {
					var i = a.cryptoManager;
					return o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Update user devices signal and DB"]))), (s || (s = n("Promise"))).all(t.map(function(e) {
						return r.push({
							contactJid: e.jid,
							dhash: e.dhash,
							lastSyncTs: e.lastSyncTs
						}), i.storage.updateUserDevicesInfo([e]);
					}));
				}, {
					operationType: "get_devices",
					flush: !0,
					afterInit: !0
				});
			}
		}), c.apply(this, arguments);
	}
	l.updateUsersDevicesSignalAndDB = u;
}), 98);

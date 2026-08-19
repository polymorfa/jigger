__d("MAWAppDataPermittedIdentities", ["WAGlobals"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = e.recipients;
		return o("WAGlobals").getWaOneQueue().enqueue(function(e) {
			var n = e.cryptoManager;
			return n.storage.loadIdentities(o("WAGlobals").getMyUserJid()).then(function(e) {
				var n = new Map(), r = t === "all" ? new Set(e.keys()) : new Set(t);
				for (var a of e) {
					var i = a[0], l = a[1];
					i !== o("WAGlobals").getMyDeviceJid() && r.has(i) && n.set(i, { pubKey: l });
				}
				return n;
			});
		}, {
			flush: !1,
			operationType: "maw_load_identities"
		});
	}
	l.calculateAppDataPermittedIdentities = e;
}), 98);

__d("WAGetRemotePublicIdentity", [
	"WAJids",
	"WASignalDB",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function(t, r) {
		return o("WASignalDB").getDb().runInTransaction(["identity"], "readonly", (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var n = o("WAJids").toMsgrUserJid(r), a = o("WAJids").toDeviceJid(n, t), i = yield e.stores.identity.get(a);
				return i == null ? void 0 : i.identity;
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), o("WASignalDB").signalOp("getRemotePublicIdentityKey"));
	};
	l.getRemotePublicIdentity = e;
}), 98);

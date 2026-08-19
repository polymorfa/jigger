__d("WAGetThreadDevicesInfoApi", [
	"WAHex",
	"WAJids",
	"WASignalDB",
	"WATimeUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function(t) {
		var e = t.fbid;
		return o("WASignalDB").getDb().runInTransaction(["identity"], "readonly", (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var n = o("WAJids").toMsgrUserJid(e), r = yield t.stores.identity.readIndex("userJid", [n]);
				return r.map(function(e) {
					return {
						deviceId: o("WAJids").extractDeviceId(e.deviceJid),
						firstSeenTs: e.firstSeenTs != null ? o("WATimeUtils").toDate(e.firstSeenTs) : null,
						identityKey: o("WAHex").toHex(e.identity).replace(/(.{2})/g, "$1 ").trim()
					};
				});
			});
			return function(e) {
				return t.apply(this, arguments);
			};
		})(), o("WASignalDB").signalOp("getThreadDevicesInfo"));
	};
	l.getThreadDevicesInfo = e;
}), 98);

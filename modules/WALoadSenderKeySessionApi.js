__d("WALoadSenderKeySessionApi", [
	"WACryptoManager",
	"WADbSignal",
	"WAJids",
	"WAResultOrError",
	"WASignalDB",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function(t, r) {
		var e = o("WAJids").extractUserJid(r), a = o("WAJids").extractDeviceId(r), i = o("WADbSignal").buildSenderKeySessionId(t, e, a);
		return o("WASignalDB").getDb().runInTransaction(["senderKeySessions"], "readonly", (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = yield e.stores.senderKeySessions.get(i);
				if (t == null) return o("WAResultOrError").makeError("errLoadSenderKeySession");
				var n = o("WACryptoManager").decodeSenderKeySession(t.record);
				return o("WAResultOrError").makeResult(n);
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), o("WASignalDB").signalOp("loadSenderKeySession"));
	};
	l.loadSenderKeySession = e;
}), 98);

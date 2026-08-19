__d("WASmaxDevicesNotifyRPC", [
	"WAComms",
	"WASmaxInDevicesNotifyResponseError",
	"WASmaxInDevicesNotifyResponseSuccess",
	"WASmaxOutDevicesNotifyRequest",
	"WASmaxParsingFailure",
	"WASmaxRpcUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = o("WASmaxOutDevicesNotifyRequest").makeNotifyRequest(e), r = yield o("WAComms").sendSmaxStanza(n, t), a = o("WASmaxInDevicesNotifyResponseSuccess").parseNotifyResponseSuccess(r, n);
			if (a.success) return {
				name: "NotifyResponseSuccess",
				value: a.value
			};
			var i = o("WASmaxInDevicesNotifyResponseError").parseNotifyResponseError(r, n);
			if (i.success) return {
				name: "NotifyResponseError",
				value: i.value
			};
			throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("Notify", {
				Success: a,
				Error: i
			}));
		}), s.apply(this, arguments);
	}
	l.sendNotifyRPC = e;
}), 98);

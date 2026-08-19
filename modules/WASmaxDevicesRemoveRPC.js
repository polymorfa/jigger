__d("WASmaxDevicesRemoveRPC", [
	"WAComms",
	"WASmaxInDevicesRemoveResponseError",
	"WASmaxInDevicesRemoveResponseSuccess",
	"WASmaxOutDevicesRemoveRequest",
	"WASmaxParsingFailure",
	"WASmaxRpcUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = o("WASmaxOutDevicesRemoveRequest").makeRemoveRequest(e), r = yield o("WAComms").sendSmaxStanza(n, t), a = o("WASmaxInDevicesRemoveResponseSuccess").parseRemoveResponseSuccess(r, n);
			if (a.success) return {
				name: "RemoveResponseSuccess",
				value: a.value
			};
			var i = o("WASmaxInDevicesRemoveResponseError").parseRemoveResponseError(r, n);
			if (i.success) return {
				name: "RemoveResponseError",
				value: i.value
			};
			throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("Remove", {
				Success: a,
				Error: i
			}));
		}), s.apply(this, arguments);
	}
	l.sendRemoveRPC = e;
}), 98);

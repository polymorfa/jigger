__d("WASmaxDevicesFetchRPC", [
	"WAComms",
	"WASmaxInDevicesFetchResponseError",
	"WASmaxInDevicesFetchResponseSuccess",
	"WASmaxOutDevicesFetchRequest",
	"WASmaxParsingFailure",
	"WASmaxRpcUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = o("WASmaxOutDevicesFetchRequest").makeFetchRequest(e), r = yield o("WAComms").sendSmaxStanza(n, t), a = o("WASmaxInDevicesFetchResponseSuccess").parseFetchResponseSuccess(r, n);
			if (a.success) return {
				name: "FetchResponseSuccess",
				value: a.value
			};
			var i = o("WASmaxInDevicesFetchResponseError").parseFetchResponseError(r, n);
			if (i.success) return {
				name: "FetchResponseError",
				value: i.value
			};
			throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("Fetch", {
				Success: a,
				Error: i
			}));
		}), s.apply(this, arguments);
	}
	l.sendFetchRPC = e;
}), 98);

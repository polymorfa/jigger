__d("WASmaxDevicesFetchSelfRPC", [
	"WAComms",
	"WASmaxInDevicesFetchSelfResponseError",
	"WASmaxInDevicesFetchSelfResponseSuccess",
	"WASmaxOutDevicesFetchSelfRequest",
	"WASmaxParsingFailure",
	"WASmaxRpcUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = o("WASmaxOutDevicesFetchSelfRequest").makeFetchSelfRequest(), n = yield o("WAComms").sendSmaxStanza(t, e), r = o("WASmaxInDevicesFetchSelfResponseSuccess").parseFetchSelfResponseSuccess(n, t);
			if (r.success) return {
				name: "FetchSelfResponseSuccess",
				value: r.value
			};
			var a = o("WASmaxInDevicesFetchSelfResponseError").parseFetchSelfResponseError(n, t);
			if (a.success) return {
				name: "FetchSelfResponseError",
				value: a.value
			};
			throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("FetchSelf", {
				Success: r,
				Error: a
			}));
		}), s.apply(this, arguments);
	}
	l.sendFetchSelfRPC = e;
}), 98);

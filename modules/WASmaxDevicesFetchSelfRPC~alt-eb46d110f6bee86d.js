__d("WASmaxDevicesFetchSelfRPC", [
	"WAComms",
	"WASmaxInDevicesFetchSelfResponseError",
	"WASmaxInDevicesFetchSelfResponseSuccess",
	"WASmaxOutDevicesFetchSelfRequest",
	"WASmaxParsingFailure",
	"WASmaxRpcUtils"
], (function(t, n, r, o, a, i, l) {
	async function e(e) {
		var t = o("WASmaxOutDevicesFetchSelfRequest").makeFetchSelfRequest(), n = await o("WAComms").sendSmaxStanza(t, e), r = o("WASmaxInDevicesFetchSelfResponseSuccess").parseFetchSelfResponseSuccess(n, t);
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
	}
	l.sendFetchSelfRPC = e;
}), 98);

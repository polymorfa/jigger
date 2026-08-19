__d("WASmaxDevicesFetchRPC", [
	"WAComms",
	"WASmaxInDevicesFetchResponseError",
	"WASmaxInDevicesFetchResponseSuccess",
	"WASmaxOutDevicesFetchRequest",
	"WASmaxParsingFailure",
	"WASmaxRpcUtils"
], (function(t, n, r, o, a, i, l) {
	async function e(e, t) {
		var n = o("WASmaxOutDevicesFetchRequest").makeFetchRequest(e), r = await o("WAComms").sendSmaxStanza(n, t), a = o("WASmaxInDevicesFetchResponseSuccess").parseFetchResponseSuccess(r, n);
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
	}
	l.sendFetchRPC = e;
}), 98);

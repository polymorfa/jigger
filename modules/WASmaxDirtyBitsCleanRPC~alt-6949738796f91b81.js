__d("WASmaxDirtyBitsCleanRPC", [
	"WAComms",
	"WASmaxInDirtyBitsCleanResponseError",
	"WASmaxInDirtyBitsCleanResponseSuccess",
	"WASmaxOutDirtyBitsCleanRequest",
	"WASmaxParsingFailure",
	"WASmaxRpcUtils"
], (function(t, n, r, o, a, i, l) {
	async function e(e, t) {
		var n = o("WASmaxOutDirtyBitsCleanRequest").makeCleanRequest(e), r = await o("WAComms").sendSmaxStanza(n, t), a = o("WASmaxInDirtyBitsCleanResponseSuccess").parseCleanResponseSuccess(r, n);
		if (a.success) return {
			name: "CleanResponseSuccess",
			value: a.value
		};
		var i = o("WASmaxInDirtyBitsCleanResponseError").parseCleanResponseError(r, n);
		if (i.success) return {
			name: "CleanResponseError",
			value: i.value
		};
		throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("Clean", {
			Success: a,
			Error: i
		}));
	}
	l.sendCleanRPC = e;
}), 98);

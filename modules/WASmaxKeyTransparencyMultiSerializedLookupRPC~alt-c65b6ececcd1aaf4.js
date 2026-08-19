__d("WASmaxKeyTransparencyMultiSerializedLookupRPC", [
	"WAComms",
	"WASmaxInKeyTransparencyMultiSerializedLookupResponseError",
	"WASmaxInKeyTransparencyMultiSerializedLookupResponseSuccess",
	"WASmaxOutKeyTransparencyMultiSerializedLookupRequest",
	"WASmaxParsingFailure",
	"WASmaxRpcUtils"
], (function(t, n, r, o, a, i, l) {
	async function e(e, t) {
		var n = o("WASmaxOutKeyTransparencyMultiSerializedLookupRequest").makeMultiSerializedLookupRequest(e), r = await o("WAComms").sendSmaxStanza(n, t), a = o("WASmaxInKeyTransparencyMultiSerializedLookupResponseSuccess").parseMultiSerializedLookupResponseSuccess(r, n);
		if (a.success) return {
			name: "MultiSerializedLookupResponseSuccess",
			value: a.value
		};
		var i = o("WASmaxInKeyTransparencyMultiSerializedLookupResponseError").parseMultiSerializedLookupResponseError(r, n);
		if (i.success) return {
			name: "MultiSerializedLookupResponseError",
			value: i.value
		};
		throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("MultiSerializedLookup", {
			Success: a,
			Error: i
		}));
	}
	l.sendMultiSerializedLookupRPC = e;
}), 98);

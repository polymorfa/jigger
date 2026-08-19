__d("WASmaxMultiwaydMultiwayRPC", [
	"WAComms",
	"WASmaxInMultiwaydMultiwayResponseError",
	"WASmaxInMultiwaydMultiwayResponseSuccess",
	"WASmaxOutMultiwaydMultiwayRequest",
	"WASmaxParsingFailure",
	"WASmaxRpcUtils"
], (function(t, n, r, o, a, i, l) {
	async function e(e, t) {
		var n = o("WASmaxOutMultiwaydMultiwayRequest").makeMultiwayRequest(e), r = await o("WAComms").sendSmaxStanza(n, t), a = o("WASmaxInMultiwaydMultiwayResponseSuccess").parseMultiwayResponseSuccess(r, n);
		if (a.success) return {
			name: "MultiwayResponseSuccess",
			value: a.value
		};
		var i = o("WASmaxInMultiwaydMultiwayResponseError").parseMultiwayResponseError(r, n);
		if (i.success) return {
			name: "MultiwayResponseError",
			value: i.value
		};
		throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("Multiway", {
			Success: a,
			Error: i
		}));
	}
	l.sendMultiwayRPC = e;
}), 98);

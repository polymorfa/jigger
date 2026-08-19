__d("WASmaxDevicesRemoveRPC", [
	"WAComms",
	"WASmaxInDevicesRemoveResponseError",
	"WASmaxInDevicesRemoveResponseSuccess",
	"WASmaxOutDevicesRemoveRequest",
	"WASmaxParsingFailure",
	"WASmaxRpcUtils"
], (function(t, n, r, o, a, i, l) {
	async function e(e, t) {
		var n = o("WASmaxOutDevicesRemoveRequest").makeRemoveRequest(e), r = await o("WAComms").sendSmaxStanza(n, t), a = o("WASmaxInDevicesRemoveResponseSuccess").parseRemoveResponseSuccess(r, n);
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
	}
	l.sendRemoveRPC = e;
}), 98);

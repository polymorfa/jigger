__d("WASmaxNewslettersStatusMyAddOnsRPC", [
	"WAComms",
	"WASmaxInNewslettersStatusMyAddOnsResponseClientError",
	"WASmaxInNewslettersStatusMyAddOnsResponseServerError",
	"WASmaxInNewslettersStatusMyAddOnsResponseSuccess",
	"WASmaxOutNewslettersStatusMyAddOnsRequest",
	"WASmaxParsingFailure",
	"WASmaxRpcUtils"
], (function(t, n, r, o, a, i, l) {
	async function e(e, t) {
		var n = o("WASmaxOutNewslettersStatusMyAddOnsRequest").makeStatusMyAddOnsRequest(e), r = await o("WAComms").sendSmaxStanza(n, t), a = o("WASmaxInNewslettersStatusMyAddOnsResponseSuccess").parseStatusMyAddOnsResponseSuccess(r, n);
		if (a.success) return {
			name: "StatusMyAddOnsResponseSuccess",
			value: a.value
		};
		var i = o("WASmaxInNewslettersStatusMyAddOnsResponseClientError").parseStatusMyAddOnsResponseClientError(r, n);
		if (i.success) return {
			name: "StatusMyAddOnsResponseClientError",
			value: i.value
		};
		var l = o("WASmaxInNewslettersStatusMyAddOnsResponseServerError").parseStatusMyAddOnsResponseServerError(r, n);
		if (l.success) return {
			name: "StatusMyAddOnsResponseServerError",
			value: l.value
		};
		throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("StatusMyAddOns", {
			Success: a,
			ClientError: i,
			ServerError: l
		}));
	}
	l.sendStatusMyAddOnsRPC = e;
}), 98);

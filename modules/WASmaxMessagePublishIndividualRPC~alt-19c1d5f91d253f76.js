__d("WASmaxMessagePublishIndividualRPC", [
	"WAComms",
	"WASmaxInMessagePublishIndividualResponseNegative",
	"WASmaxInMessagePublishIndividualResponseSuccess",
	"WASmaxOutMessagePublishIndividualRequest",
	"WASmaxParsingFailure",
	"WASmaxRpcUtils"
], (function(t, n, r, o, a, i, l) {
	async function e(e, t) {
		var n = o("WASmaxOutMessagePublishIndividualRequest").makeIndividualRequest(e), r = await o("WAComms").sendSmaxStanza(n, t), a = o("WASmaxInMessagePublishIndividualResponseNegative").parseIndividualResponseNegative(r, n);
		if (a.success) return {
			name: "IndividualResponseNegative",
			value: a.value
		};
		var i = o("WASmaxInMessagePublishIndividualResponseSuccess").parseIndividualResponseSuccess(r, n);
		if (i.success) return {
			name: "IndividualResponseSuccess",
			value: i.value
		};
		throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("Individual", {
			Negative: a,
			Success: i
		}));
	}
	l.sendIndividualRPC = e;
}), 98);

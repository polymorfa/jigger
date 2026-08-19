__d("WASmaxMessagePublishIndividualRPC", [
	"WAComms",
	"WASmaxInMessagePublishIndividualResponseNegative",
	"WASmaxInMessagePublishIndividualResponseSuccess",
	"WASmaxOutMessagePublishIndividualRequest",
	"WASmaxParsingFailure",
	"WASmaxRpcUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = o("WASmaxOutMessagePublishIndividualRequest").makeIndividualRequest(e), r = yield o("WAComms").sendSmaxStanza(n, t), a = o("WASmaxInMessagePublishIndividualResponseNegative").parseIndividualResponseNegative(r, n);
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
		}), s.apply(this, arguments);
	}
	l.sendIndividualRPC = e;
}), 98);

__d("WASmaxInMessagePublishIndividualResponseNegative", [
	"WAResultOrError",
	"WASmaxInMessagePublishNegativeAckMixin",
	"WASmaxParseJid",
	"WASmaxParseUtils"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		var n = o("WASmaxParseUtils").assertTag(e, "ack");
		if (!n.success) return n;
		var r = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrUserJid, e, "recipient");
		if (!r.success) return r;
		var a = o("WASmaxInMessagePublishNegativeAckMixin").parseNegativeAckMixin(e, t);
		return a.success ? o("WAResultOrError").makeResult(babelHelpers.extends({ recipient: r.value }, a.value)) : a;
	}
	l.parseIndividualResponseNegative = e;
}), 98);

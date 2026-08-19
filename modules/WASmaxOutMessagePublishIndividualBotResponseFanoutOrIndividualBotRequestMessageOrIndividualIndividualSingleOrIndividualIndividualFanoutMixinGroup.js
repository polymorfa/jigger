__d("WASmaxOutMessagePublishIndividualBotResponseFanoutOrIndividualBotRequestMessageOrIndividualIndividualSingleOrIndividualIndividualFanoutMixinGroup", [
	"WASmaxMixinGroupExhaustiveError",
	"WASmaxOutMessagePublishIndividualBotRequestMessageMixin",
	"WASmaxOutMessagePublishIndividualBotResponseFanoutMixin",
	"WASmaxOutMessagePublishIndividualIndividualFanoutMixin",
	"WASmaxOutMessagePublishIndividualIndividualSingleMixin"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		if (t.individualBotResponseFanout) return o("WASmaxOutMessagePublishIndividualBotResponseFanoutMixin").mergeIndividualBotResponseFanoutMixin(e, t.individualBotResponseFanout);
		if (t.individualBotRequestMessage) return o("WASmaxOutMessagePublishIndividualBotRequestMessageMixin").mergeIndividualBotRequestMessageMixin(e, t.individualBotRequestMessage);
		if (t.individualIndividualSingle) return o("WASmaxOutMessagePublishIndividualIndividualSingleMixin").mergeIndividualIndividualSingleMixin(e, t.individualIndividualSingle);
		if (t.individualIndividualFanout) return o("WASmaxOutMessagePublishIndividualIndividualFanoutMixin").mergeIndividualIndividualFanoutMixin(e, t.individualIndividualFanout);
		throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError();
	}
	l.mergeIndividualBotResponseFanoutOrIndividualBotRequestMessageOrIndividualIndividualSingleOrIndividualIndividualFanoutMixinGroup = e;
}), 98);

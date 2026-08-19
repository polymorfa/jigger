__d("WASmaxOutMessagePublishIndividualIndividualSingleOrIndividualIndividualFanoutOrBotMetricsEntryPointMixinGroup", [
	"WASmaxMixinGroupExhaustiveError",
	"WASmaxOutMessagePublishBotMetricsEntryPointMixin",
	"WASmaxOutMessagePublishIndividualIndividualFanoutMixin",
	"WASmaxOutMessagePublishIndividualIndividualSingleMixin"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		if (t.individualIndividualSingle) return o("WASmaxOutMessagePublishIndividualIndividualSingleMixin").mergeIndividualIndividualSingleMixin(e, t.individualIndividualSingle);
		if (t.individualIndividualFanout) return o("WASmaxOutMessagePublishIndividualIndividualFanoutMixin").mergeIndividualIndividualFanoutMixin(e, t.individualIndividualFanout);
		if (t.botMetricsEntryPoint) return o("WASmaxOutMessagePublishBotMetricsEntryPointMixin").mergeBotMetricsEntryPointMixin(e, t.botMetricsEntryPoint);
		throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError();
	}
	l.mergeIndividualIndividualSingleOrIndividualIndividualFanoutOrBotMetricsEntryPointMixinGroup = e;
}), 98);

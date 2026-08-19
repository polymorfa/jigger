__d("WASmaxOutMessagePublishIndividualBotRequestMessageMixin", [
	"WASmaxJsx",
	"WASmaxMixins",
	"WASmaxOutMessagePublishBotFeedbackMessageTypeMixin",
	"WASmaxOutMessagePublishBotRequestMixin",
	"WASmaxOutMessagePublishContentTypeTextOrMediaMixinGroup",
	"WASmaxOutMessagePublishIndividualIndividualSingleOrIndividualIndividualFanoutOrBotMetricsEntryPointMixinGroup",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.messageTo, n = e.contentTypeTextOrMediaMixinGroupArgs, r = e.individualIndividualSingleOrIndividualIndividualFanoutOrBotMetricsEntryPointMixinGroupArgs, a = e.hasBotFeedbackMessageType, i = e.botRequestMixinArgs, l = o("WASmaxMixins").optionalMerge(o("WASmaxOutMessagePublishIndividualIndividualSingleOrIndividualIndividualFanoutOrBotMetricsEntryPointMixinGroup").mergeIndividualIndividualSingleOrIndividualIndividualFanoutOrBotMetricsEntryPointMixinGroup, o("WASmaxOutMessagePublishContentTypeTextOrMediaMixinGroup").mergeContentTypeTextOrMediaMixinGroup(o("WASmaxJsx").smax("message", { to: o("WAWap").USER_JID(t) }, o("WASmaxMixins").optionalMerge(o("WASmaxOutMessagePublishBotFeedbackMessageTypeMixin").mergeBotFeedbackMessageTypeMixin, o("WASmaxJsx").smax("bot", null, o("WASmaxOutMessagePublishBotRequestMixin").mergeBotRequestMixin(o("WASmaxJsx").smax("to", null), i)), a)), n), r);
		return l;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergeIndividualBotRequestMessageMixin = s;
}), 98);

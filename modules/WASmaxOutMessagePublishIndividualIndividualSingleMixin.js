__d("WASmaxOutMessagePublishIndividualIndividualSingleMixin", [
	"WASmaxJsx",
	"WASmaxMixins",
	"WASmaxOutMessagePublishBotClientMultiThreadIDMessageMixin",
	"WASmaxOutMessagePublishBotLocalAutomatedTypeMixin",
	"WASmaxOutMessagePublishBotMessageTypeMixin",
	"WASmaxOutMessagePublishBotMetricsEntryPointMixin",
	"WASmaxOutMessagePublishBotMetricsThreadEntryPointMixin",
	"WASmaxOutMessagePublishBotModeSelectionMixin",
	"WASmaxOutMessagePublishBotPersonaTypeMixin",
	"WASmaxOutMessagePublishBusinessBotMessageFeedbackRequestedMixin",
	"WASmaxOutMessagePublishBusinessBotMessageMixin",
	"WASmaxOutMessagePublishContentMixins",
	"WASmaxOutMessagePublishEncMediaTypeDeprecatedMixin",
	"WASmaxOutMessagePublishEncTypeIndividualMixin",
	"WASmaxOutMessagePublishEncVersion",
	"WASmaxOutMessagePublishIndividualIndividualRetryMixin",
	"WASmaxOutMessagePublishIndividualSingleContentBindingMixin",
	"WASmaxOutMessagePublishLidChatOriginMixin",
	"WASmaxOutMessagePublishMsgMetaOriginMixin",
	"WASmaxOutMessagePublishPeripheralOriginMixin",
	"WASmaxOutMessagePublishReceiverAccountKindMixin",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t, n = e.messageTo, r = e.individualIndividualRetryMixinArgs, a = e.individualSingleContentBindingMixinArgs, i = e.botMessageTypeMixinArgs, l = e.businessBotMessageMixinArgs, s = e.botMetricsEntryPointMixinArgs, u = e.botMetricsThreadEntryPointMixinArgs, c = e.msgMetaOriginMixinArgs, d = e.hasLidChatOrigin, m = e.botLocalAutomatedTypeMixinArgs, p = e.businessBotMessageFeedbackRequestedMixinArgs, _ = e.botPersonaTypeMixinArgs, f = e.botClientMultiThreadIDMessageMixinArgs, g = e.botModeSelectionMixinArgs, h = e.peripheralOriginMixinArgs, y = e.receiverAccountKindMixinArgs, C = e.contentMixinsArgs, b = e.encTypeIndividualMixinArgs, v = e.encMediaTypeDeprecatedMixinArgs, S = e.encVersionArgs, R = o("WASmaxOutMessagePublishContentMixins").mergeContentMixins((t = o("WASmaxMixins")).optionalMerge(o("WASmaxOutMessagePublishReceiverAccountKindMixin").mergeReceiverAccountKindMixin, t.optionalMerge(o("WASmaxOutMessagePublishPeripheralOriginMixin").mergePeripheralOriginMixin, t.optionalMerge(o("WASmaxOutMessagePublishBotModeSelectionMixin").mergeBotModeSelectionMixin, t.optionalMerge(o("WASmaxOutMessagePublishBotClientMultiThreadIDMessageMixin").mergeBotClientMultiThreadIDMessageMixin, t.optionalMerge(o("WASmaxOutMessagePublishBotPersonaTypeMixin").mergeBotPersonaTypeMixin, t.optionalMerge(o("WASmaxOutMessagePublishBusinessBotMessageFeedbackRequestedMixin").mergeBusinessBotMessageFeedbackRequestedMixin, t.optionalMerge(o("WASmaxOutMessagePublishBotLocalAutomatedTypeMixin").mergeBotLocalAutomatedTypeMixin, t.optionalMerge(o("WASmaxOutMessagePublishLidChatOriginMixin").mergeLidChatOriginMixin, t.optionalMerge(o("WASmaxOutMessagePublishMsgMetaOriginMixin").mergeMsgMetaOriginMixin, t.optionalMerge(o("WASmaxOutMessagePublishBotMetricsThreadEntryPointMixin").mergeBotMetricsThreadEntryPointMixin, t.optionalMerge(o("WASmaxOutMessagePublishBotMetricsEntryPointMixin").mergeBotMetricsEntryPointMixin, t.optionalMerge(o("WASmaxOutMessagePublishBusinessBotMessageMixin").mergeBusinessBotMessageMixin, t.optionalMerge(o("WASmaxOutMessagePublishBotMessageTypeMixin").mergeBotMessageTypeMixin, t.optionalMerge(o("WASmaxOutMessagePublishIndividualSingleContentBindingMixin").mergeIndividualSingleContentBindingMixin, t.optionalMerge(o("WASmaxOutMessagePublishIndividualIndividualRetryMixin").mergeIndividualIndividualRetryMixin, o("WASmaxJsx").smax("message", { to: o("WAWap").JID(n) }, o("WASmaxOutMessagePublishEncVersion").mergeEncVersion(t.optionalMerge(o("WASmaxOutMessagePublishEncMediaTypeDeprecatedMixin").mergeEncMediaTypeDeprecatedMixin, o("WASmaxOutMessagePublishEncTypeIndividualMixin").mergeEncTypeIndividualMixin(o("WASmaxJsx").smax("enc", null), b), v), S)), r), a), i), l), s), u), c), d), m), p), _), f), g), h), y), C);
		return R;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergeIndividualIndividualSingleMixin = s;
}), 98);

__d("WASmaxOutMessagePublishIndividualIndividualFanoutMixin", [
	"WASmaxChildren",
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
	"WASmaxOutMessagePublishContentFanoutMixins",
	"WASmaxOutMessagePublishLidChatOriginMixin",
	"WASmaxOutMessagePublishMsgMetaOriginMixin",
	"WASmaxOutMessagePublishPeripheralOriginMixin",
	"WASmaxOutMessagePublishTDeprecatedMixin",
	"WASmaxOutMessagePublishToContentBindingMixin",
	"WASmaxOutMessagePublishToDeviceMixin",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.toContentBindingMixinArgs, n = o("WASmaxMixins").optionalMerge(o("WASmaxOutMessagePublishToContentBindingMixin").mergeToContentBindingMixin, o("WASmaxOutMessagePublishToDeviceMixin").mergeToDeviceMixin(o("WASmaxJsx").smax("to", null), e), t);
		return n;
	}
	function s() {
		var e = o("WASmaxJsx").smax("enc", null);
		return e;
	}
	function u(t) {
		var n, r = t.toArgs, a = t.messageTo, i = t.tDeprecatedMixinArgs, l = t.botMessageTypeMixinArgs, s = t.businessBotMessageMixinArgs, u = t.botMetricsEntryPointMixinArgs, c = t.botMetricsThreadEntryPointMixinArgs, d = t.msgMetaOriginMixinArgs, m = t.hasLidChatOrigin, p = t.botLocalAutomatedTypeMixinArgs, _ = t.businessBotMessageFeedbackRequestedMixinArgs, f = t.botPersonaTypeMixinArgs, g = t.botClientMultiThreadIDMessageMixinArgs, h = t.botModeSelectionMixinArgs, y = t.peripheralOriginMixinArgs, C = t.contentFanoutMixinsArgs, b = o("WASmaxOutMessagePublishContentFanoutMixins").mergeContentFanoutMixins((n = o("WASmaxMixins")).optionalMerge(o("WASmaxOutMessagePublishPeripheralOriginMixin").mergePeripheralOriginMixin, n.optionalMerge(o("WASmaxOutMessagePublishBotModeSelectionMixin").mergeBotModeSelectionMixin, n.optionalMerge(o("WASmaxOutMessagePublishBotClientMultiThreadIDMessageMixin").mergeBotClientMultiThreadIDMessageMixin, n.optionalMerge(o("WASmaxOutMessagePublishBotPersonaTypeMixin").mergeBotPersonaTypeMixin, n.optionalMerge(o("WASmaxOutMessagePublishBusinessBotMessageFeedbackRequestedMixin").mergeBusinessBotMessageFeedbackRequestedMixin, n.optionalMerge(o("WASmaxOutMessagePublishBotLocalAutomatedTypeMixin").mergeBotLocalAutomatedTypeMixin, n.optionalMerge(o("WASmaxOutMessagePublishLidChatOriginMixin").mergeLidChatOriginMixin, n.optionalMerge(o("WASmaxOutMessagePublishMsgMetaOriginMixin").mergeMsgMetaOriginMixin, n.optionalMerge(o("WASmaxOutMessagePublishBotMetricsThreadEntryPointMixin").mergeBotMetricsThreadEntryPointMixin, n.optionalMerge(o("WASmaxOutMessagePublishBotMetricsEntryPointMixin").mergeBotMetricsEntryPointMixin, n.optionalMerge(o("WASmaxOutMessagePublishBusinessBotMessageMixin").mergeBusinessBotMessageMixin, n.optionalMerge(o("WASmaxOutMessagePublishBotMessageTypeMixin").mergeBotMessageTypeMixin, n.optionalMerge(o("WASmaxOutMessagePublishTDeprecatedMixin").mergeTDeprecatedMixin, o("WASmaxJsx").smax("message", { to: o("WAWap").JID(a) }, o("WASmaxJsx").smax("participants", null, o("WASmaxChildren").REPEATED_CHILD(e, r, 1, 1997))), i), l), s), u), c), d), m), p), _), f), g), h), y), C);
		return b;
	}
	function c(e, t) {
		var n = u(t);
		return o("WASmaxMixins").mergeStanzas(e, n);
	}
	l.makeIndividualIndividualFanoutParticipantsTo = e, l.makeIndividualIndividualFanoutEnc = s, l.mergeIndividualIndividualFanoutMixin = c;
}), 98);

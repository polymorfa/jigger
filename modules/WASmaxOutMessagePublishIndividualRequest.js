__d("WASmaxOutMessagePublishIndividualRequest", [
	"WASmaxJsx",
	"WASmaxMixins",
	"WASmaxOutMessagePublishAppdataMetaAttributeMixin",
	"WASmaxOutMessagePublishArmadilloOriginalMessageTimestampMixin",
	"WASmaxOutMessagePublishBaseMixin",
	"WASmaxOutMessagePublishGroupInviteTargetMixin",
	"WASmaxOutMessagePublishIndividualBotResponseFanoutOrIndividualBotRequestMessageOrIndividualIndividualSingleOrIndividualIndividualFanoutMixinGroup",
	"WASmaxOutMessagePublishIndividualRecipientDeprecaredMixin",
	"WASmaxOutMessagePublishMessageEditOrMessagePinOrRevokeMixinGroup",
	"WASmaxOutMessagePublishMetaConverstationThreadIdMixin",
	"WASmaxOutMessagePublishMetaDestinationIdMixin",
	"WASmaxOutMessagePublishMetaScheduledMessageMixin",
	"WASmaxOutMessagePublishPeerRecipientUsernameMixin",
	"WASmaxOutMessagePublishPeripheralOriginMixin",
	"WASmaxOutMessagePublishRecipientPNOrPeerRecipientPNOrPeerRecipientLIDMixinGroup",
	"WASmaxOutMessagePublishStatusMentionMessageMixin",
	"WASmaxOutMessagePublishTCTokenMixin",
	"WASmaxOutMessagePublishThreadTypeTagMixin",
	"WASmaxOutMessagePublishViewOnceMetaAttributeMixin",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t, n = e.messageId, r = e.groupInviteTargetMixinArgs, a = e.threadTypeTagMixinArgs, i = e.peerRecipientUsernameMixinArgs, l = e.individualRecipientDeprecaredMixinArgs, s = e.appdataMetaAttributeMixinArgs, u = e.hasStatusMentionMessage, c = e.tCTokenMixinArgs, d = e.hasViewOnceMetaAttribute, m = e.metaDestinationIdMixinArgs, p = e.metaConverstationThreadIdMixinArgs, _ = e.metaScheduledMessageMixinArgs, f = e.peripheralOriginMixinArgs, g = e.armadilloOriginalMessageTimestampMixinArgs, h = e.individualBotResponseFanoutOrIndividualBotRequestMessageOrIndividualIndividualSingleOrIndividualIndividualFanoutMixinGroupArgs, y = e.messageEditOrMessagePinOrRevokeMixinGroupArgs, C = e.recipientPNOrPeerRecipientPNOrPeerRecipientLIDMixinGroupArgs, b = (t = o("WASmaxMixins")).optionalMerge(o("WASmaxOutMessagePublishRecipientPNOrPeerRecipientPNOrPeerRecipientLIDMixinGroup").mergeRecipientPNOrPeerRecipientPNOrPeerRecipientLIDMixinGroup, t.optionalMerge(o("WASmaxOutMessagePublishMessageEditOrMessagePinOrRevokeMixinGroup").mergeMessageEditOrMessagePinOrRevokeMixinGroup, o("WASmaxOutMessagePublishIndividualBotResponseFanoutOrIndividualBotRequestMessageOrIndividualIndividualSingleOrIndividualIndividualFanoutMixinGroup").mergeIndividualBotResponseFanoutOrIndividualBotRequestMessageOrIndividualIndividualSingleOrIndividualIndividualFanoutMixinGroup(t.optionalMerge(o("WASmaxOutMessagePublishArmadilloOriginalMessageTimestampMixin").mergeArmadilloOriginalMessageTimestampMixin, t.optionalMerge(o("WASmaxOutMessagePublishPeripheralOriginMixin").mergePeripheralOriginMixin, t.optionalMerge(o("WASmaxOutMessagePublishMetaScheduledMessageMixin").mergeMetaScheduledMessageMixin, t.optionalMerge(o("WASmaxOutMessagePublishMetaConverstationThreadIdMixin").mergeMetaConverstationThreadIdMixin, t.optionalMerge(o("WASmaxOutMessagePublishMetaDestinationIdMixin").mergeMetaDestinationIdMixin, t.optionalMerge(o("WASmaxOutMessagePublishViewOnceMetaAttributeMixin").mergeViewOnceMetaAttributeMixin, t.optionalMerge(o("WASmaxOutMessagePublishTCTokenMixin").mergeTCTokenMixin, t.optionalMerge(o("WASmaxOutMessagePublishStatusMentionMessageMixin").mergeStatusMentionMessageMixin, t.optionalMerge(o("WASmaxOutMessagePublishAppdataMetaAttributeMixin").mergeAppdataMetaAttributeMixin, t.optionalMerge(o("WASmaxOutMessagePublishIndividualRecipientDeprecaredMixin").mergeIndividualRecipientDeprecaredMixin, t.optionalMerge(o("WASmaxOutMessagePublishPeerRecipientUsernameMixin").mergePeerRecipientUsernameMixin, t.optionalMerge(o("WASmaxOutMessagePublishThreadTypeTagMixin").mergeThreadTypeTagMixin, t.optionalMerge(o("WASmaxOutMessagePublishGroupInviteTargetMixin").mergeGroupInviteTargetMixin, o("WASmaxOutMessagePublishBaseMixin").mergeBaseMixin(o("WASmaxJsx").smax("message", { id: o("WAWap").STANZA_ID(n) }), e), r), a), i), l), s), u), c), d), m), p), _), f), g), h), y), C);
		return b;
	}
	l.makeIndividualRequest = e;
}), 98);

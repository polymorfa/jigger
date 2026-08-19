__d("WASmaxOutMessagePublishContentTypeTextOrIndividualBotResponseMediaFanoutMixinGroup", [
	"WASmaxMixinGroupExhaustiveError",
	"WASmaxOutMessagePublishContentTypeTextMixin",
	"WASmaxOutMessagePublishIndividualContentTypeBotResponseMediaFanoutMixin"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		if (t.isContentTypeText) return o("WASmaxOutMessagePublishContentTypeTextMixin").mergeContentTypeTextMixin(e);
		if (t.individualContentTypeBotResponseMediaFanout) return o("WASmaxOutMessagePublishIndividualContentTypeBotResponseMediaFanoutMixin").mergeIndividualContentTypeBotResponseMediaFanoutMixin(e, t.individualContentTypeBotResponseMediaFanout);
		throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError();
	}
	l.mergeContentTypeTextOrIndividualBotResponseMediaFanoutMixinGroup = e;
}), 98);

__d("WASmaxOutStatusPublishStatusNewsletterReactionOrReactionRevokeOrQuestionResponseMixinGroup", [
	"WASmaxMixinGroupExhaustiveError",
	"WASmaxOutStatusPublishStatusNewsletterQuestionResponseMixin",
	"WASmaxOutStatusPublishStatusNewsletterReactionMixin",
	"WASmaxOutStatusPublishStatusNewsletterReactionRevokeMixin"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		if (t.statusNewsletterReaction) return o("WASmaxOutStatusPublishStatusNewsletterReactionMixin").mergeStatusNewsletterReactionMixin(e, t.statusNewsletterReaction);
		if (t.isStatusNewsletterReactionRevoke) return o("WASmaxOutStatusPublishStatusNewsletterReactionRevokeMixin").mergeStatusNewsletterReactionRevokeMixin(e);
		if (t.statusNewsletterQuestionResponse) return o("WASmaxOutStatusPublishStatusNewsletterQuestionResponseMixin").mergeStatusNewsletterQuestionResponseMixin(e, t.statusNewsletterQuestionResponse);
		throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError();
	}
	l.mergeStatusNewsletterReactionOrReactionRevokeOrQuestionResponseMixinGroup = e;
}), 98);

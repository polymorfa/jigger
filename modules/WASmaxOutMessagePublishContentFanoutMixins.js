__d("WASmaxOutMessagePublishContentFanoutMixins", [
	"WASmaxMixinGroupExhaustiveError",
	"WASmaxOutMessagePublishContentTypeEventMixin",
	"WASmaxOutMessagePublishContentTypeListFanoutMixin",
	"WASmaxOutMessagePublishContentTypeLiveLocationFanoutMixin",
	"WASmaxOutMessagePublishContentTypeMediaFanoutDeprecatedMixin",
	"WASmaxOutMessagePublishContentTypeMediaFanoutMixin",
	"WASmaxOutMessagePublishContentTypeMedianotifyMixin",
	"WASmaxOutMessagePublishContentTypePollCreationMixin",
	"WASmaxOutMessagePublishContentTypePollResultSnapshotMixin",
	"WASmaxOutMessagePublishContentTypePollVoteMixin",
	"WASmaxOutMessagePublishContentTypeReactionMixin",
	"WASmaxOutMessagePublishContentTypeTextMixin",
	"WASmaxOutMessagePublishIndividualContentTypePayIndividualMixin"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		if (t.isContentTypeText) return o("WASmaxOutMessagePublishContentTypeTextMixin").mergeContentTypeTextMixin(e);
		if (t.contentTypeMediaFanout) return o("WASmaxOutMessagePublishContentTypeMediaFanoutMixin").mergeContentTypeMediaFanoutMixin(e, t.contentTypeMediaFanout);
		if (t.contentTypeMediaFanoutDeprecated) return o("WASmaxOutMessagePublishContentTypeMediaFanoutDeprecatedMixin").mergeContentTypeMediaFanoutDeprecatedMixin(e, t.contentTypeMediaFanoutDeprecated);
		if (t.contentTypeLiveLocationFanout) return o("WASmaxOutMessagePublishContentTypeLiveLocationFanoutMixin").mergeContentTypeLiveLocationFanoutMixin(e, t.contentTypeLiveLocationFanout);
		if (t.individualContentTypePayIndividual) return o("WASmaxOutMessagePublishIndividualContentTypePayIndividualMixin").mergeIndividualContentTypePayIndividualMixin(e, t.individualContentTypePayIndividual);
		if (t.contentTypeListFanout) return o("WASmaxOutMessagePublishContentTypeListFanoutMixin").mergeContentTypeListFanoutMixin(e, t.contentTypeListFanout);
		if (t.isContentTypeReaction) return o("WASmaxOutMessagePublishContentTypeReactionMixin").mergeContentTypeReactionMixin(e);
		if (t.contentTypePollCreation) return o("WASmaxOutMessagePublishContentTypePollCreationMixin").mergeContentTypePollCreationMixin(e, t.contentTypePollCreation);
		if (t.contentTypePollVote) return o("WASmaxOutMessagePublishContentTypePollVoteMixin").mergeContentTypePollVoteMixin(e, t.contentTypePollVote);
		if (t.isContentTypePollResultSnapshot) return o("WASmaxOutMessagePublishContentTypePollResultSnapshotMixin").mergeContentTypePollResultSnapshotMixin(e);
		if (t.isContentTypeMedianotify) return o("WASmaxOutMessagePublishContentTypeMedianotifyMixin").mergeContentTypeMedianotifyMixin(e);
		if (t.contentTypeEvent) return o("WASmaxOutMessagePublishContentTypeEventMixin").mergeContentTypeEventMixin(e, t.contentTypeEvent);
		throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError();
	}
	l.mergeContentFanoutMixins = e;
}), 98);

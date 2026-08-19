__d("WASmaxOutMessagePublishContentTypeTextOrMediaMixinGroup", [
	"WASmaxMixinGroupExhaustiveError",
	"WASmaxOutMessagePublishContentTypeMediaMixin",
	"WASmaxOutMessagePublishContentTypeTextMixin"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		if (t.isContentTypeText) return o("WASmaxOutMessagePublishContentTypeTextMixin").mergeContentTypeTextMixin(e);
		if (t.isContentTypeMedia) return o("WASmaxOutMessagePublishContentTypeMediaMixin").mergeContentTypeMediaMixin(e);
		throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError();
	}
	l.mergeContentTypeTextOrMediaMixinGroup = e;
}), 98);

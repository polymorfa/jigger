__d("WASmaxOutMessagePublishContentTypeListFanoutMixin", [
	"WASmaxChildren",
	"WASmaxJsx",
	"WASmaxMixins",
	"WASmaxOutMessagePublishContentTypeMediaMixin",
	"WASmaxOutMessagePublishSingleSelectOrProductListMixinGroup"
], (function(t, n, r, o, a, i, l) {
	function e() {
		var e = o("WASmaxJsx").smax("to", null, o("WASmaxJsx").smax("enc", { mediatype: "list" }));
		return e;
	}
	function s(t) {
		var n = t.toCount, r = t.singleSelectOrProductListMixinGroupArgs, a = o("WASmaxMixins").optionalMerge(o("WASmaxOutMessagePublishSingleSelectOrProductListMixinGroup").mergeSingleSelectOrProductListMixinGroup, o("WASmaxOutMessagePublishContentTypeMediaMixin").mergeContentTypeMediaMixin(o("WASmaxJsx").smax("message", null, o("WASmaxJsx").smax("participants", null, o("WASmaxChildren").HOMOGENEOUS_CHILD_COUNT(e, n)))), r);
		return a;
	}
	function u(e, t) {
		var n = s(t);
		return o("WASmaxMixins").mergeStanzas(e, n);
	}
	l.makeContentTypeListFanoutParticipantsTo = e, l.mergeContentTypeListFanoutMixin = u;
}), 98);

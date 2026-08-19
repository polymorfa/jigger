__d("WASmaxOutMessagePublishIndividualIndividualRetryMixin", [
	"WASmaxJsx",
	"WASmaxMixins",
	"WASmaxOutMessagePublishIndividualIndividualRetryToPeerMixin",
	"WASmaxOutMessagePublishRetryMixin"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.individualIndividualRetryToPeerMixinArgs, n = o("WASmaxMixins").optionalMerge(o("WASmaxOutMessagePublishIndividualIndividualRetryToPeerMixin").mergeIndividualIndividualRetryToPeerMixin, o("WASmaxOutMessagePublishRetryMixin").mergeRetryMixin(o("WASmaxJsx").smax("message", null), e), t);
		return n;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergeIndividualIndividualRetryMixin = s;
}), 98);

__d("WASmaxOutMessagePublishIndividualIndividualRetryToPeerMixin", [
	"WASmaxJsx",
	"WASmaxMixins",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.messageRecipient, n = o("WASmaxJsx").smax("message", { recipient: o("WAWap").JID(t) });
		return n;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergeIndividualIndividualRetryToPeerMixin = s;
}), 98);

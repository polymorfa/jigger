__d("WASmaxOutMessagePublishReceiverAccountKindMixin", [
	"WASmaxJsx",
	"WASmaxMixins",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.metaReceiverAccountKind, n = o("WASmaxJsx").smax("message", null, o("WASmaxJsx").smax("meta", { receiver_account_kind: o("WAWap").CUSTOM_STRING(t) }));
		return n;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergeReceiverAccountKindMixin = s;
}), 98);

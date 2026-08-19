__d("WASmaxOutMessagePublishRecipientPNMixin", [
	"WASmaxJsx",
	"WASmaxMixins",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.messageRecipientPn, n = o("WASmaxJsx").smax("message", { recipient_pn: o("WAWap").JID(t) });
		return n;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergeRecipientPNMixin = s;
}), 98);

__d("WASmaxOutMessagePublishPeerRecipientPNMixin", [
	"WASmaxJsx",
	"WASmaxMixins",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.anyPeerRecipientPn, n = o("WASmaxJsx").smax("smax$any", { peer_recipient_pn: o("WAWap").JID(t) });
		return n;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergePeerRecipientPNMixin = s;
}), 98);

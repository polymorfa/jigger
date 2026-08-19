__d("WASmaxOutMessagePublishPeerRecipientLIDMixin", [
	"WASmaxJsx",
	"WASmaxMixins",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.anyPeerRecipientLid, n = o("WASmaxJsx").smax("smax$any", { peer_recipient_lid: o("WAWap").JID(t) });
		return n;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergePeerRecipientLIDMixin = s;
}), 98);

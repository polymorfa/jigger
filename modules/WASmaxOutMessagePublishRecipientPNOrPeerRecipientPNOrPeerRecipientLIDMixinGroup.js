__d("WASmaxOutMessagePublishRecipientPNOrPeerRecipientPNOrPeerRecipientLIDMixinGroup", [
	"WASmaxMixinGroupExhaustiveError",
	"WASmaxOutMessagePublishPeerRecipientLIDMixin",
	"WASmaxOutMessagePublishPeerRecipientPNMixin",
	"WASmaxOutMessagePublishRecipientPNMixin"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		if (t.recipientPN) return o("WASmaxOutMessagePublishRecipientPNMixin").mergeRecipientPNMixin(e, t.recipientPN);
		if (t.peerRecipientPN) return o("WASmaxOutMessagePublishPeerRecipientPNMixin").mergePeerRecipientPNMixin(e, t.peerRecipientPN);
		if (t.peerRecipientLID) return o("WASmaxOutMessagePublishPeerRecipientLIDMixin").mergePeerRecipientLIDMixin(e, t.peerRecipientLID);
		throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError();
	}
	l.mergeRecipientPNOrPeerRecipientPNOrPeerRecipientLIDMixinGroup = e;
}), 98);

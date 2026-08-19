__d("WASmaxOutAppdataPublishPeerMsgTypes", [
	"WASmaxMixinGroupExhaustiveError",
	"WASmaxOutAppdataPublishPeerPeerFanoutMixin",
	"WASmaxOutAppdataPublishPeerPeerSingleMixin"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		if (t.peerPeerFanout) return o("WASmaxOutAppdataPublishPeerPeerFanoutMixin").mergePeerPeerFanoutMixin(e, t.peerPeerFanout);
		if (t.peerPeerSingle) return o("WASmaxOutAppdataPublishPeerPeerSingleMixin").mergePeerPeerSingleMixin(e, t.peerPeerSingle);
		throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError();
	}
	l.mergePeerMsgTypes = e;
}), 98);

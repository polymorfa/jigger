__d("WASmaxAppdataPublishPeerRPC", [
	"WAComms",
	"WASmaxInAppdataPublishPeerResponseNegative",
	"WASmaxInAppdataPublishPeerResponseSuccess",
	"WASmaxOutAppdataPublishPeerRequest",
	"WASmaxParsingFailure",
	"WASmaxRpcUtils"
], (function(t, n, r, o, a, i, l) {
	async function e(e, t) {
		var n = o("WASmaxOutAppdataPublishPeerRequest").makePeerRequest(e), r = await o("WAComms").sendSmaxStanza(n, t), a = o("WASmaxInAppdataPublishPeerResponseNegative").parsePeerResponseNegative(r, n);
		if (a.success) return {
			name: "PeerResponseNegative",
			value: a.value
		};
		var i = o("WASmaxInAppdataPublishPeerResponseSuccess").parsePeerResponseSuccess(r, n);
		if (i.success) return {
			name: "PeerResponseSuccess",
			value: i.value
		};
		throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("Peer", {
			Negative: a,
			Success: i
		}));
	}
	l.sendPeerRPC = e;
}), 98);

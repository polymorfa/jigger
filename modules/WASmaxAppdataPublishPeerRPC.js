__d("WASmaxAppdataPublishPeerRPC", [
	"WAComms",
	"WASmaxInAppdataPublishPeerResponseNegative",
	"WASmaxInAppdataPublishPeerResponseSuccess",
	"WASmaxOutAppdataPublishPeerRequest",
	"WASmaxParsingFailure",
	"WASmaxRpcUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = o("WASmaxOutAppdataPublishPeerRequest").makePeerRequest(e), r = yield o("WAComms").sendSmaxStanza(n, t), a = o("WASmaxInAppdataPublishPeerResponseNegative").parsePeerResponseNegative(r, n);
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
		}), s.apply(this, arguments);
	}
	l.sendPeerRPC = e;
}), 98);

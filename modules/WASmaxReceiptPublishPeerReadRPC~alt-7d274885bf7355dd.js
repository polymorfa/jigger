__d("WASmaxReceiptPublishPeerReadRPC", [
	"WAComms",
	"WASmaxInReceiptPublishPeerReadResponseSuccess",
	"WASmaxOutReceiptPublishPeerReadRequest",
	"WASmaxParsingFailure",
	"WASmaxRpcUtils"
], (function(t, n, r, o, a, i, l) {
	async function e(e, t) {
		var n = o("WASmaxOutReceiptPublishPeerReadRequest").makePublishPeerReadRequest(e), r = await o("WAComms").sendSmaxStanza(n, t), a = o("WASmaxInReceiptPublishPeerReadResponseSuccess").parsePublishPeerReadResponseSuccess(r, n);
		if (a.success) return {
			name: "PublishPeerReadResponseSuccess",
			value: a.value
		};
		throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("PublishPeerRead", { Success: a }));
	}
	l.sendPublishPeerReadRPC = e;
}), 98);

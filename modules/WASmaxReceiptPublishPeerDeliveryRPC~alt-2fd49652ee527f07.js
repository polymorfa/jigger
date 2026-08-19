__d("WASmaxReceiptPublishPeerDeliveryRPC", [
	"WAComms",
	"WASmaxInReceiptPublishPeerDeliveryResponseSuccess",
	"WASmaxOutReceiptPublishPeerDeliveryRequest",
	"WASmaxParsingFailure",
	"WASmaxRpcUtils"
], (function(t, n, r, o, a, i, l) {
	async function e(e, t) {
		var n = o("WASmaxOutReceiptPublishPeerDeliveryRequest").makePublishPeerDeliveryRequest(e), r = await o("WAComms").sendSmaxStanza(n, t), a = o("WASmaxInReceiptPublishPeerDeliveryResponseSuccess").parsePublishPeerDeliveryResponseSuccess(r, n);
		if (a.success) return {
			name: "PublishPeerDeliveryResponseSuccess",
			value: a.value
		};
		throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("PublishPeerDelivery", { Success: a }));
	}
	l.sendPublishPeerDeliveryRPC = e;
}), 98);

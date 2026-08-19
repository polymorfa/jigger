__d("WASmaxReceiptPublishAppDataPeerDeliveryRPC", ["WAComms", "WASmaxOutReceiptPublishAppDataPeerDeliveryRequest"], (function(t, n, r, o, a, i, l) {
	async function e(e) {
		var t = o("WASmaxOutReceiptPublishAppDataPeerDeliveryRequest").makePublishAppDataPeerDeliveryRequest(e);
		await o("WAComms").castSmaxStanza(t);
	}
	l.sendPublishAppDataPeerDeliveryRPC = e;
}), 98);

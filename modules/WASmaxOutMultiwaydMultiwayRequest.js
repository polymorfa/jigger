__d("WASmaxOutMultiwaydMultiwayRequest", [
	"WASmaxAttrs",
	"WASmaxJsx",
	"WASmaxOutMultiwaydBaseIQGetRequestMixin",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t, n, r = e.multiwayFlowId, a = e.multiwayBinaryVersion, i = e.multiwayConferenceName, l = e.multiwayServerInfoData, s = e.multiwayTransactionId, u = e.multiwayMessageType, c = e.multiwayElementValue, d = o("WASmaxOutMultiwaydBaseIQGetRequestMixin").mergeBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq", {
			to: (t = o("WAWap")).S_WHATSAPP_NET,
			xmlns: "fb:multiway"
		}, o("WASmaxJsx").smax("multiway", {
			flow_id: (n = o("WASmaxAttrs")).OPTIONAL(t.CUSTOM_STRING, r),
			binary_version: t.INT(a),
			conference_name: n.OPTIONAL(t.CUSTOM_STRING, i),
			server_info_data: n.OPTIONAL(t.CUSTOM_STRING, l),
			transaction_id: n.OPTIONAL(t.INT, s),
			message_type: n.OPTIONAL(t.CUSTOM_STRING, u)
		}, c)));
		return d;
	}
	l.makeMultiwayRequest = e;
}), 98);

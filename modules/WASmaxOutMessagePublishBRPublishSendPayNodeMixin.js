__d("WASmaxOutMessagePublishBRPublishSendPayNodeMixin", [
	"WASmaxJsx",
	"WASmaxMixins",
	"WASmaxOutMessagePublishBRPublishSendPayNodeP2POrMMixinGroup",
	"WASmaxOutMessagePublishBRSendPayEloNodeMixin",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t, n = e.payId, r = e.payPaymentRails, a = e.payTrustedDeviceInfo, i = e.payNonce, l = e.bRSendPayEloNodeMixinArgs, s = e.bRPublishSendPayNodeP2POrMMixinGroupArgs, u = o("WASmaxOutMessagePublishBRPublishSendPayNodeP2POrMMixinGroup").mergeBRPublishSendPayNodeP2POrMMixinGroup(o("WASmaxMixins").optionalMerge(o("WASmaxOutMessagePublishBRSendPayEloNodeMixin").mergeBRSendPayEloNodeMixin, o("WASmaxJsx").smax("pay", {
			id: (t = o("WAWap")).CUSTOM_STRING(n),
			"payment-rails": t.CUSTOM_STRING(r),
			"trusted-device-info": t.CUSTOM_STRING(a),
			nonce: t.CUSTOM_STRING(i)
		}), l), s);
		return u;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergeBRPublishSendPayNodeMixin = s;
}), 98);

__d("WASmaxOutMessagePublishUPIPublishSendPayNodeP2MMixin", [
	"WASmaxChildren",
	"WASmaxJsx",
	"WASmaxMixins",
	"WASmaxOutMessagePublishOrderMessageMixin",
	"WASmaxOutMessagePublishPaymentInitiatorMixin",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.orderArgs, n = e.paymentLinkArgs, r = o("WASmaxJsx").smax("upi", null, o("WASmaxChildren").OPTIONAL_CHILD(s, t), o("WASmaxChildren").OPTIONAL_CHILD(u, n));
		return r;
	}
	function s(e) {
		var t = o("WASmaxOutMessagePublishOrderMessageMixin").mergeOrderMessageMixin(o("WASmaxJsx").smax("order", null), e);
		return t;
	}
	function u(e) {
		var t = e.paymentLinkOrderId, n = e.paymentLinkMessageId, r = o("WASmaxJsx").smax("payment_link", {
			order_id: o("WAWap").CUSTOM_STRING(t),
			message_id: o("WAWap").CUSTOM_STRING(n)
		});
		return r;
	}
	function c(t) {
		var n = t.upiArgs, r = t.paymentInitiatorMixinArgs, a = o("WASmaxMixins").optionalMerge(o("WASmaxOutMessagePublishPaymentInitiatorMixin").mergePaymentInitiatorMixin, o("WASmaxJsx").smax("pay", { "transaction-type": "p2m" }, o("WASmaxChildren").OPTIONAL_CHILD(e, n)), r);
		return a;
	}
	function d(e, t) {
		var n = c(t);
		return o("WASmaxMixins").mergeStanzas(e, n);
	}
	l.makeUPIPublishSendPayNodeP2MUpi = e, l.makeUPIPublishSendPayNodeP2MUpiOrder = s, l.makeUPIPublishSendPayNodeP2MUpiPaymentLink = u, l.mergeUPIPublishSendPayNodeP2MMixin = d;
}), 98);

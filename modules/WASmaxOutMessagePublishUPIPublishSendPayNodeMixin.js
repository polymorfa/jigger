__d("WASmaxOutMessagePublishUPIPublishSendPayNodeMixin", [
	"WASmaxAttrs",
	"WASmaxChildren",
	"WASmaxJsx",
	"WASmaxMixins",
	"WASmaxOutMessagePublishUPILiteDetailsMixin",
	"WASmaxOutMessagePublishUPIPublishSendPayNodeP2POrMMixinGroup",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.upiLiteDetailsArgs, n = e.upiToken, r = o("WASmaxJsx").smax("upi", { token: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n) }, o("WASmaxChildren").OPTIONAL_CHILD(s, t));
		return r;
	}
	function s(e) {
		var t = o("WASmaxOutMessagePublishUPILiteDetailsMixin").mergeUPILiteDetailsMixin(o("WASmaxJsx").smax("upi_lite_details", null), e);
		return t;
	}
	function u(t) {
		var n, r, a = t.upiArgs, i = t.payId, l = t.payMpin, s = t.payReceiverVpa, u = t.payReceiverVpaId, c = t.payReceiverName, d = t.paySenderVpa, m = t.paySenderVpaId, p = t.paySenderName, _ = t.paySeqNo, f = t.payUpiBankInfo, g = t.payMode, h = t.payPurposeCode, y = t.payMcc, C = t.payRefId, b = t.payDeviceSsid, v = t.payNote, S = t.uPIPublishSendPayNodeP2POrMMixinGroupArgs, R = o("WASmaxOutMessagePublishUPIPublishSendPayNodeP2POrMMixinGroup").mergeUPIPublishSendPayNodeP2POrMMixinGroup(o("WASmaxJsx").smax("pay", {
			id: (n = o("WASmaxAttrs")).OPTIONAL((r = o("WAWap")).CUSTOM_STRING, i),
			mpin: n.OPTIONAL(r.CUSTOM_STRING, l),
			"receiver-vpa": r.CUSTOM_STRING(s),
			"receiver-vpa-id": n.OPTIONAL(r.CUSTOM_STRING, u),
			"receiver-name": n.OPTIONAL(r.CUSTOM_STRING, c),
			"sender-vpa": r.CUSTOM_STRING(d),
			"sender-vpa-id": n.OPTIONAL(r.CUSTOM_STRING, m),
			"sender-name": n.OPTIONAL(r.CUSTOM_STRING, p),
			"seq-no": r.CUSTOM_STRING(_),
			"upi-bank-info": r.CUSTOM_STRING(f),
			mode: n.OPTIONAL(r.CUSTOM_STRING, g),
			"purpose-code": n.OPTIONAL(r.CUSTOM_STRING, h),
			mcc: n.OPTIONAL(r.CUSTOM_STRING, y),
			"ref-id": n.OPTIONAL(r.CUSTOM_STRING, C),
			device_ssid: n.OPTIONAL(r.CUSTOM_STRING, b),
			note: n.OPTIONAL(r.CUSTOM_STRING, v)
		}, o("WASmaxChildren").OPTIONAL_CHILD(e, a)), S);
		return R;
	}
	function c(e, t) {
		var n = u(t);
		return o("WASmaxMixins").mergeStanzas(e, n);
	}
	l.makeUPIPublishSendPayNodeUpi = e, l.makeUPIPublishSendPayNodeUpiUpiLiteDetails = s, l.mergeUPIPublishSendPayNodeMixin = c;
}), 98);

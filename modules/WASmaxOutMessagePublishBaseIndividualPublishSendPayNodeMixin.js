__d("WASmaxOutMessagePublishBaseIndividualPublishSendPayNodeMixin", [
	"WASmaxAttrs",
	"WASmaxChildren",
	"WASmaxJsx",
	"WASmaxMixins",
	"WASmaxOutMessagePublishBasePayNodeMixin",
	"WASmaxOutMessagePublishLegacyAmountMixin",
	"WASmaxOutMessagePublishMoneyMixin",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = o("WASmaxOutMessagePublishMoneyMixin").mergeMoneyMixin(o("WASmaxJsx").smax("amount", null), e);
		return t;
	}
	function s(t) {
		var n = t.amountArgs, r = t.payCredentialId, a = t.payDeviceId, i = t.payRequestId, l = t.legacyAmountMixinArgs, s = o("WASmaxMixins").optionalMerge(o("WASmaxOutMessagePublishLegacyAmountMixin").mergeLegacyAmountMixin, o("WASmaxOutMessagePublishBasePayNodeMixin").mergeBasePayNodeMixin(o("WASmaxJsx").smax("pay", {
			"credential-id": o("WAWap").CUSTOM_STRING(r),
			"device-id": o("WAWap").CUSTOM_STRING(a),
			"request-id": o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, i)
		}, o("WASmaxChildren").OPTIONAL_CHILD(e, n)), t), l);
		return s;
	}
	function u(e, t) {
		var n = s(t);
		return o("WASmaxMixins").mergeStanzas(e, n);
	}
	l.makeBaseIndividualPublishSendPayNodeAmount = e, l.mergeBaseIndividualPublishSendPayNodeMixin = u;
}), 98);

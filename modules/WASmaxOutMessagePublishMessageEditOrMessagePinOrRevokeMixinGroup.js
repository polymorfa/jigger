__d("WASmaxOutMessagePublishMessageEditOrMessagePinOrRevokeMixinGroup", [
	"WASmaxMixinGroupExhaustiveError",
	"WASmaxOutMessagePublishMessageEditMixin",
	"WASmaxOutMessagePublishMessagePinMixin",
	"WASmaxOutMessagePublishRevokeMixin"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		if (t.isMessageEdit) return o("WASmaxOutMessagePublishMessageEditMixin").mergeMessageEditMixin(e);
		if (t.isMessagePin) return o("WASmaxOutMessagePublishMessagePinMixin").mergeMessagePinMixin(e);
		if (t.isRevoke) return o("WASmaxOutMessagePublishRevokeMixin").mergeRevokeMixin(e);
		throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError();
	}
	l.mergeMessageEditOrMessagePinOrRevokeMixinGroup = e;
}), 98);

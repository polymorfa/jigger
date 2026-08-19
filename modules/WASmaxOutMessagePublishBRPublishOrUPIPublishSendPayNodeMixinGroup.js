__d("WASmaxOutMessagePublishBRPublishOrUPIPublishSendPayNodeMixinGroup", [
	"WASmaxMixinGroupExhaustiveError",
	"WASmaxOutMessagePublishBRPublishSendPayNodeMixin",
	"WASmaxOutMessagePublishUPIPublishSendPayNodeMixin"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		if (t.bRPublishSendPayNode) return o("WASmaxOutMessagePublishBRPublishSendPayNodeMixin").mergeBRPublishSendPayNodeMixin(e, t.bRPublishSendPayNode);
		if (t.uPIPublishSendPayNode) return o("WASmaxOutMessagePublishUPIPublishSendPayNodeMixin").mergeUPIPublishSendPayNodeMixin(e, t.uPIPublishSendPayNode);
		throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError();
	}
	l.mergeBRPublishOrUPIPublishSendPayNodeMixinGroup = e;
}), 98);

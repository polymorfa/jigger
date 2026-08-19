__d("WASmaxOutMessagePublishIntegrationPublishPayNodeMixin", [
	"WASmaxJsx",
	"WASmaxMixins",
	"WASmaxOutMessagePublishBRPublishOrUPIPublishSendPayNodeMixinGroup"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.bRPublishOrUPIPublishSendPayNodeMixinGroupArgs, n = o("WASmaxOutMessagePublishBRPublishOrUPIPublishSendPayNodeMixinGroup").mergeBRPublishOrUPIPublishSendPayNodeMixinGroup(o("WASmaxJsx").smax("pay", null), t);
		return n;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergeIntegrationPublishPayNodeMixin = s;
}), 98);

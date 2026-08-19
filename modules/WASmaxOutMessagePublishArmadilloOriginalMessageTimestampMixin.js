__d("WASmaxOutMessagePublishArmadilloOriginalMessageTimestampMixin", [
	"WASmaxJsx",
	"WASmaxMixins",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.metaOriginalMsgT, n = o("WASmaxJsx").smax("message", null, o("WASmaxJsx").smax("meta", { original_msg_t: o("WAWap").INT(t) }));
		return n;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergeArmadilloOriginalMessageTimestampMixin = s;
}), 98);

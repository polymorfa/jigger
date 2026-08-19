__d("WASmaxOutMessagePublishThreadTypeTagMixin", [
	"WASmaxJsx",
	"WASmaxMixins",
	"WASmaxOutMessagePublishThreadTypeTagEnumOrLegacyMixinGroup"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.threadTypeTagEnumOrLegacyMixinGroupArgs, n = o("WASmaxJsx").smax("message", null, o("WASmaxOutMessagePublishThreadTypeTagEnumOrLegacyMixinGroup").mergeThreadTypeTagEnumOrLegacyMixinGroup(o("WASmaxJsx").smax("meta", null), t));
		return n;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergeThreadTypeTagMixin = s;
}), 98);

__d("WASmaxOutMessagePublishThreadTypeTagLegacyMixin", [
	"WASmaxJsx",
	"WASmaxMixins",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.metaThreadType, n = o("WASmaxJsx").smax("meta", { thread_type: o("WAWap").CUSTOM_STRING(t) });
		return n;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergeThreadTypeTagLegacyMixin = s;
}), 98);

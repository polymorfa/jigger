__d("WASmaxOutAppdataPublishEncTypeIndividualMixin", [
	"WASmaxJsx",
	"WASmaxMixins",
	"WASmaxOutAppdataPublishEncPayloadMixin",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.encType, n = o("WASmaxOutAppdataPublishEncPayloadMixin").mergeEncPayloadMixin(o("WASmaxJsx").smax("enc", { type: o("WAWap").CUSTOM_STRING(t) }), e);
		return n;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergeEncTypeIndividualMixin = s;
}), 98);

__d("WASmaxOutMessagePublishIndividualSingleContentBindingMixin", ["WASmaxJsx", "WASmaxMixins"], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.contentBindingElementValue, n = o("WASmaxJsx").smax("message", null, o("WASmaxJsx").smax("content_binding", null, t));
		return n;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergeIndividualSingleContentBindingMixin = s;
}), 98);

__d("WASmaxInMultiwaydMultiwayResponseSuccess", [
	"WAResultOrError",
	"WASmaxInMultiwaydIQResultResponseMixin",
	"WASmaxParseUtils"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		var n = o("WASmaxParseUtils").assertTag(e, "iq");
		if (!n.success) return n;
		var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "multiway");
		if (!r.success) return r;
		var a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrInt, r.value, "binary_version");
		if (!a.success) return a;
		var i = o("WASmaxParseUtils").contentBytesRange(r.value, 0, void 0);
		if (!i.success) return i;
		var l = o("WASmaxInMultiwaydIQResultResponseMixin").parseIQResultResponseMixin(e, t);
		return l.success ? o("WAResultOrError").makeResult(babelHelpers.extends({
			multiwayBinaryVersion: a.value,
			multiwayElementValue: i.value
		}, l.value)) : l;
	}
	l.parseMultiwayResponseSuccess = e;
}), 98);

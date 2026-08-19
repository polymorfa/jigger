__d("WASmaxInMultiwaydMultiwayResponseError", [
	"WAResultOrError",
	"WASmaxInMultiwaydIQErrorResponseMixin",
	"WASmaxParseUtils"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		var n = o("WASmaxParseUtils").assertTag(e, "iq");
		if (!n.success) return n;
		var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
		if (!r.success) return r;
		var a = o("WASmaxParseUtils").attrString(r.value, "text");
		if (!a.success) return a;
		var i = o("WASmaxParseUtils").attrIntRange(r.value, "code", 400, 599);
		if (!i.success) return i;
		var l = o("WASmaxInMultiwaydIQErrorResponseMixin").parseIQErrorResponseMixin(e, t);
		return l.success ? o("WAResultOrError").makeResult(babelHelpers.extends({
			errorText: a.value,
			errorCode: i.value
		}, l.value)) : l;
	}
	l.parseMultiwayResponseError = e;
}), 98);

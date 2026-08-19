__d("WASmaxInAppdataPublishPeerResponseNegative", [
	"WAResultOrError",
	"WASmaxInAppdataPublishAckMixin",
	"WASmaxParseUtils"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		var n = o("WASmaxParseUtils").assertTag(e, "ack");
		if (!n.success) return n;
		var r = o("WASmaxParseUtils").attrString(e, "error");
		if (!r.success) return r;
		var a = o("WASmaxInAppdataPublishAckMixin").parseAckMixin(e, t);
		return a.success ? o("WAResultOrError").makeResult(babelHelpers.extends({ error: r.value }, a.value)) : a;
	}
	l.parsePeerResponseNegative = e;
}), 98);

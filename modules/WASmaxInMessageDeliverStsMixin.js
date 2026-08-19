__d("WASmaxInMessageDeliverStsMixin", ["WAResultOrError", "WASmaxParseUtils"], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = o("WASmaxParseUtils").assertTag(e, "message");
		if (!t.success) return t;
		var n = o("WASmaxParseUtils").attrIntRange(e, "sts", 0x59b0f76976000, 0xe932d91a0e000);
		return n.success ? o("WAResultOrError").makeResult({ sts: n.value }) : n;
	}
	l.parseStsMixin = e;
}), 98);

__d("WASmaxInMessagePublishRefreshLIDMixin", [
	"WAResultOrError",
	"WASmaxInMessagePublishEnums",
	"WASmaxParseUtils"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = o("WASmaxParseUtils").assertTag(e, "ack");
		if (!t.success) return t;
		var n = o("WASmaxParseUtils").attrStringEnum(e, "refresh_lid", o("WASmaxInMessagePublishEnums").ENUM_FALSE_TRUE);
		return n.success ? o("WAResultOrError").makeResult({ refreshLid: n.value }) : n;
	}
	l.parseRefreshLIDMixin = e;
}), 98);

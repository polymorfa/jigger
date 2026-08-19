__d("WASmaxInDevicesRetryableIQErrorMixin", [
	"WAResultOrError",
	"WASmaxInDevicesIQErrorInternalServerErrorOrServiceUnavailableMixinGroup",
	"WASmaxParseUtils"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = o("WASmaxParseUtils").assertTag(e, "error");
		if (!t.success) return t;
		var n = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, e, "backoff", 0, 86400);
		if (!n.success) return n;
		var r = o("WASmaxInDevicesIQErrorInternalServerErrorOrServiceUnavailableMixinGroup").parseIQErrorInternalServerErrorOrServiceUnavailableMixinGroup(e);
		return r.success ? o("WAResultOrError").makeResult({
			backoff: n.value,
			iQErrorInternalServerErrorOrServiceUnavailableMixinGroup: r.value
		}) : r;
	}
	l.parseRetryableIQErrorMixin = e;
}), 98);

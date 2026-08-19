__d("WASmaxInDevicesNonRetryableRemoveDeviceIQErrorMixin", [
	"WAResultOrError",
	"WASmaxInDevicesIQErrorBadRequestOrItemNotFoundMixinGroup",
	"WASmaxParseUtils"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = o("WASmaxParseUtils").assertTag(e, "error");
		if (!t.success) return t;
		var n = o("WASmaxInDevicesIQErrorBadRequestOrItemNotFoundMixinGroup").parseIQErrorBadRequestOrItemNotFoundMixinGroup(e);
		return n.success ? o("WAResultOrError").makeResult({ iQErrorBadRequestOrItemNotFoundMixinGroup: n.value }) : n;
	}
	l.parseNonRetryableRemoveDeviceIQErrorMixin = e;
}), 98);

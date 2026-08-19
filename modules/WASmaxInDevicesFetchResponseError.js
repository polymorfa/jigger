__d("WASmaxInDevicesFetchResponseError", [
	"WAResultOrError",
	"WASmaxInDevicesIQErrorResponseMixin",
	"WASmaxInDevicesRetryableIQErrorOrNonRetryableIQErrorRetryableIQErrorMixinGroup",
	"WASmaxParseUtils"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		var n = o("WASmaxParseUtils").assertTag(e, "iq");
		if (!n.success) return n;
		var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
		if (!r.success) return r;
		var a = o("WASmaxInDevicesIQErrorResponseMixin").parseIQErrorResponseMixin(e, t);
		if (!a.success) return a;
		var i = o("WASmaxInDevicesRetryableIQErrorOrNonRetryableIQErrorRetryableIQErrorMixinGroup").parseRetryableIQErrorOrNonRetryableIQErrorRetryableIQErrorMixinGroup(r.value);
		return i.success ? o("WAResultOrError").makeResult(babelHelpers.extends({}, a.value, { errorRetryableIQErrorOrNonRetryableIQErrorRetryableIQErrorMixinGroup: i.value })) : i;
	}
	l.parseFetchResponseError = e;
}), 98);

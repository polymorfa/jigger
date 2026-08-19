__d("WASmaxInDevicesFetchOrFetchNonRetryableUserErrorMixinGroup", [
	"WAResultOrError",
	"WASmaxInDevicesFetchNonRetryableUserErrorMixin",
	"WASmaxInDevicesFetchRetryableUserErrorMixin",
	"WASmaxParseUtils"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = o("WASmaxInDevicesFetchRetryableUserErrorMixin").parseFetchRetryableUserErrorMixin(e);
		if (t.success) return o("WAResultOrError").makeResult({
			name: "FetchRetryableUserError",
			value: t.value
		});
		var n = o("WASmaxInDevicesFetchNonRetryableUserErrorMixin").parseFetchNonRetryableUserErrorMixin(e);
		return n.success ? o("WAResultOrError").makeResult({
			name: "FetchNonRetryableUserError",
			value: n.value
		}) : o("WASmaxParseUtils").errorMixinDisjunction(e, ["RetryableUserError", "NonRetryableUserError"], [t, n]);
	}
	l.parseFetchOrFetchNonRetryableUserErrorMixinGroup = e;
}), 98);

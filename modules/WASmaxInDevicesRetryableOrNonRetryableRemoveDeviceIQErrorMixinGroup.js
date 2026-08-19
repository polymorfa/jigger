__d("WASmaxInDevicesRetryableOrNonRetryableRemoveDeviceIQErrorMixinGroup", [
	"WAResultOrError",
	"WASmaxInDevicesNonRetryableRemoveDeviceIQErrorMixin",
	"WASmaxInDevicesRetryableIQErrorMixin",
	"WASmaxParseUtils"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = o("WASmaxInDevicesRetryableIQErrorMixin").parseRetryableIQErrorMixin(e);
		if (t.success) return o("WAResultOrError").makeResult({
			name: "RetryableIQError",
			value: t.value
		});
		var n = o("WASmaxInDevicesNonRetryableRemoveDeviceIQErrorMixin").parseNonRetryableRemoveDeviceIQErrorMixin(e);
		return n.success ? o("WAResultOrError").makeResult({
			name: "NonRetryableRemoveDeviceIQError",
			value: n.value
		}) : o("WASmaxParseUtils").errorMixinDisjunction(e, ["RetryableIQError", "NonRetryableRemoveDeviceIQError"], [t, n]);
	}
	l.parseRetryableOrNonRetryableRemoveDeviceIQErrorMixinGroup = e;
}), 98);

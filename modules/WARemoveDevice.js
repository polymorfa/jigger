__d("WARemoveDevice", [
	"WALogger",
	"WAPersistedJobManager",
	"WAPushSafeTypes",
	"WAResultOrError",
	"WASignalOther",
	"WASmaxDevicesRemoveRPC",
	"WATimeUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = o("WAPushSafeTypes").unsafeNotNullable(t), r = n.deviceId, a = n.identity, i = o("WASignalOther").sliceBytes(a, 1, 32), l = yield o("WASmaxDevicesRemoveRPC").sendRemoveRPC({
				removeId: r,
				identityKeyMixinArgs: { anyElementValue: i }
			});
			if (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"removeDevice result for ",
				": ",
				" "
			])), r, l), l.name === "RemoveResponseSuccess") return o("WAResultOrError").makeResult();
			l.name;
			var s = l.value.errorRetryableOrNonRetryableRemoveDeviceIQErrorMixinGroup;
			if (s.name !== "RetryableIQError") return o("WAResultOrError").makeError();
			s.name;
			var u = s.value.backoff;
			throw u != null ? new (o("WAPersistedJobManager")).RetryOnBackoff({
				algo: {
					type: "constant",
					delay: u
				},
				jitter: 0
			}) : new (o("WAPersistedJobManager")).RetryOnBackoff({
				algo: {
					type: "exponential",
					first: o("WATimeUtils").HOUR_MILLISECONDS / 60
				},
				jitter: .1
			});
		}), u.apply(this, arguments);
	}
	l.removeDevice = s;
}), 98);

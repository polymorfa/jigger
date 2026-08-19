__d("WANotifyDeviceChange", [
	"Promise",
	"WAGlobals",
	"WALogger",
	"WAPersistedJobManager",
	"WASmaxDevicesNotifyRPC",
	"WATimeUtils",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t) {
		var r = t.users;
		if (r.size === 0) return (s || (s = n("Promise"))).resolve();
		var a = o("WAGlobals").getConfig().maxUsersForNotifyDeviceChange(), i = Array.from(r);
		return r.size > a && (o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["The maximum number of users that can be notified is ", ""])), a), i = i.slice(0, a)), c(i);
	}
	function c(e) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = yield o("WASmaxDevicesNotifyRPC").sendNotifyRPC({ userArgs: e.map(function(e) {
				return { userJid: e };
			}) });
			if (t.name !== "NotifyResponseSuccess") {
				t.name;
				var n = t.value.errorRetryableIQErrorOrNonRetryableIQErrorRetryableIQErrorMixinGroup;
				if (n.name === "RetryableIQError") {
					var a = n.value.backoff;
					throw a != null ? new (o("WAPersistedJobManager")).RetryOnBackoff({
						algo: {
							type: "constant",
							delay: a
						},
						jitter: 0
					}) : new (o("WAPersistedJobManager")).RetryOnBackoff({
						algo: {
							type: "exponential",
							first: o("WATimeUtils").HOUR_MILLISECONDS / 60
						},
						jitter: .1
					});
				}
				throw r("err")("Failed with an unexpected error code " + n.value.code);
			}
		}), d.apply(this, arguments);
	}
	l.notifyDeviceChange = u;
}), 98);

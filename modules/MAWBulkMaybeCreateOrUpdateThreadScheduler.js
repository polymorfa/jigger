__d("MAWBulkMaybeCreateOrUpdateThreadScheduler", [
	"MsgrSchedulerQPL",
	"NativeSchedulerTickStrategy",
	"TaskScheduler"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s() {
		if (e == null) {
			var t = o("TaskScheduler").taskScheduler("bulk-maybe-create-or-update-thread", {
				concurrency: 1,
				failOnTimeout: !0,
				promotionTimeoutMs: 500,
				timeoutMs: 6e4
			}, o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy());
			t.setLifecycleListener(o("MsgrSchedulerQPL").makeMsgrSchedulerQPLListener()), e = t;
		}
		return e;
	}
	l.bulkMaybeCreateOrUpdateThreadScheduler = s;
}), 98);

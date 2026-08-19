__d("MAWMarkThreadAsReadScheduler", [
	"MAWMarkThreadAsRead",
	"MsgrSchedulerQPL",
	"NativeSchedulerTickStrategy",
	"TaskScheduler",
	"TaskSchedulerPriority"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s() {
		if (e == null) {
			var t = o("TaskScheduler").taskScheduler("MarkThreadAsRead", {
				concurrency: 1,
				failOnTimeout: !1,
				promotionTimeoutMs: 3e4,
				timeoutMs: 6e4
			}, o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy());
			t.setLifecycleListener(o("MsgrSchedulerQPL").makeMsgrSchedulerQPLListener()), e = t;
		}
		return e;
	}
	function u(e) {
		return s().run(function() {
			return o("MAWMarkThreadAsRead").markThreadAsReadImpl(e);
		}, {
			name: "markThreadAsRead",
			priority: o("TaskSchedulerPriority").NORMAL_PRIORITY
		}).promise;
	}
	l.scheduleMarkThreadAsRead = u;
}), 98);

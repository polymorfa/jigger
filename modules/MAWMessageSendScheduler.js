__d("MAWMessageSendScheduler", [
	"MsgrSchedulerQPL",
	"NativeSchedulerTickStrategy",
	"TaskScheduler"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = 24e4, s;
	function u() {
		if (s == null) {
			var t = o("TaskScheduler").taskScheduler("message-send", {
				concurrency: 5,
				failOnTimeout: !0,
				promotionTimeoutMs: 500,
				timeoutMs: e
			}, o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy());
			t.setLifecycleListener(o("MsgrSchedulerQPL").makeMsgrSchedulerQPLListener({ defaultSamplingRate: 500 })), s = t;
		}
		return s;
	}
	l.messageSendScheduler = u;
}), 98);

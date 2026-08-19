__d("MAWStartupScheduler", [
	"MWFBLogger",
	"MsgrSchedulerQPL",
	"NativeSchedulerTickStrategy",
	"Promise",
	"QPLFlow",
	"QuickPerformanceLogger",
	"TaskScheduler",
	"getErrorSafe",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = o("MWFBLogger").MWLogger().tags(["backend"]);
	function c() {
		o("MsgrSchedulerQPL").configMsgrScheduler({ qpl: {
			eventType: r("qpl")._(1056838280, "1566"),
			qplFlowStarter: o("QPLFlow").startQplFlowWithCoinflip
		} }), (s || (s = r("QuickPerformanceLogger"))).setAlwaysOnSampleRate(r("qpl")._(1056838280, "1566"), 1);
	}
	var d = null;
	function m() {
		if (d == null) {
			var e = o("TaskScheduler").taskScheduler("maw_startup", {
				concurrency: 64,
				failOnTimeout: !0,
				timeoutMs: 3e4
			}, o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy());
			e.setLifecycleListener(o("MsgrSchedulerQPL").makeMsgrSchedulerQPLListener()), d = e;
		}
		return d;
	}
	function p(t, o, a) {
		m().run(function() {
			return (e || (e = n("Promise"))).resolve(a());
		}, {
			name: t,
			priority: o
		}).promise.catch(function(e) {
			u.catching(r("getErrorSafe")(e)).warn("Startup task \"" + t + "\" failed");
		});
	}
	l.configureScheduler = c, l.scheduleTask = p;
}), 98);

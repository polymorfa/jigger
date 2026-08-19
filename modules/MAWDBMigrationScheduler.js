__d("MAWDBMigrationScheduler", [
	"MsgrSchedulerQPL",
	"NativeSchedulerTickStrategy",
	"TaskScheduler"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s() {
		if (e == null) {
			var t = o("TaskScheduler").taskScheduler("maw_db_migration", {
				concurrency: 1,
				failOnTimeout: !0,
				promotionTimeoutMs: 2e3,
				timeoutMs: 3e5
			}, o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy());
			t.setLifecycleListener(o("MsgrSchedulerQPL").makeMsgrSchedulerQPLListener()), e = t;
		}
		return e;
	}
	l.mawDbMigrationScheduler = s;
}), 98);

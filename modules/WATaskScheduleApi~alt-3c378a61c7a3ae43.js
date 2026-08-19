__d("WATaskScheduleApi", ["MAWTransactionMode", "WADbTransactor"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = new Map(), s = o("WADbTransactor").makeSignalTransactor({ tasks: o("MAWTransactionMode").READONLY }, "getTasksScheduledTime", function(e) {
		return (function(t) {
			return e.tasks.get(t).then(function(e) {
				return e == null ? null : e.scheduledTime;
			});
		});
	}), u = async function(n) {
		if (e.has(n)) return Promise.resolve(e.get(n));
		var t = await s(n);
		return t != null && e.set(n, t), t;
	}, c = o("WADbTransactor").makeSignalTransactor({ tasks: o("MAWTransactionMode").READWRITE }, "setTaskScheduledTime", function(t) {
		return (function(n, r) {
			return e.set(n, r), t.tasks.put({
				scheduledTime: r,
				taskName: n
			}).then(function() {});
		});
	});
	function d() {
		return e;
	}
	function m(t, n) {
		e.set(t, n);
	}
	function p() {
		e.clear();
	}
	l.getTaskScheduledTime = u, l.setTaskScheduledTime = c, l.getTaskScheduleCache = d, l.setTaskScheduleCache = m, l.clearTaskScheduleCache = p;
}), 98);

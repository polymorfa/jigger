__d("MAWStartupState", ["MAWReliabilityMonitor", "qex"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWReliabilityMonitor").HealthReportState.UNKNOWN;
	function s() {
		return e;
	}
	var u = r("qex")._("2164") ? null : o("MAWReliabilityMonitor").MAWReliabilityMonitorSingleton.startMonitoring("worker_startup_config", function() {
		return {
			reason: String(e),
			state: e
		};
	});
	function c(t) {
		e = t, u == null || u.updateState();
	}
	var d = null;
	function m(e) {
		d = e;
	}
	function p() {
		return d;
	}
	l.getWorkerHealthState = s, l.setWorkerHealthState = c, l.setStartupComms = m, l.getStartupComms = p;
}), 98);

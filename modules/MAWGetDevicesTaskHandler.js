__d("MAWGetDevicesTaskHandler", ["CometTaskFrameworkTypes", "WAAPI"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return r("WAAPI").getDevices(e);
	}
	l.executionContext = o("CometTaskFrameworkTypes").ExecutionContext.MAW_WORKER, l.handleTask = e;
}), 98);

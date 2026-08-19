__d("MAWMessageIntegrityLoggingSampleRate", ["QuickPerformanceLogger", "qpl"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = new Set([r("qpl")._(25303796, "1974")]);
	function u() {
		for (var t of s) (e || (e = r("QuickPerformanceLogger"))).setAlwaysOnSampleRate(t, 1);
	}
	function c() {
		return 1;
	}
	l.overwriteSamplingRate = u, l.getIntegrityCheckSampleRate = c;
}), 98);

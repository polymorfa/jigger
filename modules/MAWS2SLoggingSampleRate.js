__d("MAWS2SLoggingSampleRate", ["QuickPerformanceLogger", "qpl"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s() {
		(e || (e = r("QuickPerformanceLogger"))).setAlwaysOnSampleRate(r("qpl")._(25313175, "1551"), 1);
	}
	l.overwriteSamplingRate = s;
}), 98);

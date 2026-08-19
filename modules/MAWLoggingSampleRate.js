__d("MAWLoggingSampleRate", ["QuickPerformanceLogger", "qpl"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = new Set([
		(s = r("qpl"))._(30605380, "18"),
		s._(30605384, "573"),
		s._(30605361, "6204"),
		s._(1056847375, "584"),
		s._(1056845300, "1338"),
		s._(1056839232, "112"),
		s._(1056843664, "1465"),
		s._(1056838280, "1566"),
		s._(1056843758, "1768"),
		s._(25302457, "311"),
		s._(25310776, "6155"),
		s._(25310984, "169"),
		s._(25307483, "127"),
		s._(25305590, "1127"),
		s._(25303796, "1974"),
		s._(25313004, "118"),
		s._(521476165, "2432")
	]);
	function c() {
		for (var t of u) (e || (e = r("QuickPerformanceLogger"))).setAlwaysOnSampleRate(t, 1);
		(e || (e = r("QuickPerformanceLogger"))).setAlwaysOnSampleRate(r("qpl")._(25313004, "118"), 1e3);
	}
	l.overwriteSamplingRate = c;
}), 98);

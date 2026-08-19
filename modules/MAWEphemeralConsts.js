__d("MAWEphemeralConsts", ["WATimeUtils"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = Math.imul((e = o("WATimeUtils")).HOUR_SECONDS, 6), u = Math.imul(e.DAY_SECONDS, 14), c = 1e3, d = 60, m = s;
	l.oneHourInSeconds = e.HOUR_SECONDS, l.oneDayInSeconds = e.DAY_SECONDS, l.ephemeralMaxDelectionWindowForUnseenMessage = u, l.msPerSec = c, l.oneMinuteInSeconds = d, l.ephemeralReportingWindowInSeconds = m;
}), 98);

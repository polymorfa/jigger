__d("MAWGetWATimeApi", ["Promise", "WATimeUtils"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = function() {
		return (e || (e = n("Promise"))).resolve({
			clockSkew: o("WATimeUtils").getClockSkew(),
			millisTime: o("WATimeUtils").millisTime(),
			unixTime: o("WATimeUtils").unixTime()
		});
	};
	l.getWATime = s;
}), 98);

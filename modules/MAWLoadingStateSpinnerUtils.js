__d("MAWLoadingStateSpinnerUtils", ["fbt"], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = function(t) {
		return s._(
			/*BTDS*/
			"",
			[s._param("restoredPercentage", t.toFixed(0).toString())]
		);
	}, u = s._(
		/*BTDS*/
		""
	);
	function c(e, t, n) {
		if (n === 0) return 100;
		var r = 50 * (e / n), o = 50 * (t / n);
		return Math.min(100, o + r);
	}
	l.getProgressMessage = e, l.completedMessage = u, l.getPercentage = c;
}), 226);

__d("MAWFTSRestoreCap", ["WATimeUtils", "justknobx"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("justknobx")._("1658"), s = o("WATimeUtils").DAY_MILLISECONDS * e, u = Date.now() - s;
	function c(e) {
		return e > u;
	}
	l.RESTORE_CAP_DATE_MS = u, l.isRestoreTimeWithinCap = c;
}), 98);

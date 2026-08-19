__d("WAWebBizBroadcastProCurrencyUtils", ["Currency"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return o("Currency").getSymbol(e) || e;
	}
	function s(e) {
		return o("Currency").getISO(e);
	}
	function u(e, t) {
		var n = o("Currency").getOffset(t) || 100;
		return Math.round(e * n);
	}
	var c = 1e3;
	function d(e, t) {
		return u(e, t) * c;
	}
	l.getCurrencySymbol = e, l.getCurrencyISO = s, l.displayAmountToSmallestUnit = u, l.displayAmountToCpmSmallestUnit = d;
}), 98);

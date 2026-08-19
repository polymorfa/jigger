__d("MAWThreadKeyUtils", ["I64"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		return (e || (e = o("I64"))).to_string(t);
	}
	function u(e) {
		return e;
	}
	function c(t) {
		return (e || (e = o("I64"))).of_string(t);
	}
	function d(e) {
		return e;
	}
	l.stringThreadKeyFromThreadKey = s, l.stringThreadKeyFromString = u, l.stringThreadKeyToI64 = c, l.stringThreadKeyToString = d;
}), 98);

__d("MAWMediaRetryInfo", [], (function(t, n, r, o, a, i) {
	"use strict";
	var e = new Map();
	function l(t, n) {
		e.set(t, n);
	}
	function s(t) {
		return e.get(t);
	}
	function u(t) {
		e.has(t) && e.delete(t);
	}
	i.setRetriedMediaInfo = l, i.getRetriedMediaInfo = s, i.clearRetriedMediaInfo = u;
}), 66);

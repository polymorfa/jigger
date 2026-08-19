__d("WAResultOrErrorUtils", [], (function(t, n, r, o, a, i) {
	"use strict";
	function e(e) {
		var t = [];
		return e.forEach(function(e) {
			e.success && t.push(e.value);
		}), t;
	}
	function l(e) {
		var t = [];
		return e.forEach(function(e) {
			e.success || t.push(e.error);
		}), t;
	}
	i.unpackValues = e, i.unpackErrors = l;
}), 66);

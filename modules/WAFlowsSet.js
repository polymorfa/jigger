__d("WAFlowsSet", [], (function(t, n, r, o, a, i) {
	"use strict";
	function e(e, t, n) {
		for (var r = Array.isArray(t) ? t : t.replaceAll("[", ".").replaceAll("]", "").split("."), o = e; r.length > 0;) {
			var a, i = r.shift(), l = "" + +r[0] === r[0], s = l ? [] : {};
			o[i] = r.length > 0 ? (a = o[i]) != null ? a : s : n, o = o[i];
		}
	}
	i.default = e;
}), 66);

__d("WAFlowsGet", [], (function(t, n, r, o, a, i) {
	"use strict";
	function e(e, t, n) {
		if (!(t.length === 0 || e == null)) {
			var r = Array.isArray(t) ? t : t.replaceAll("[", ".").replaceAll("]", "").split("."), o = e;
			for (var a of r) if (o = o[a], o == null) return n;
			return o;
		}
	}
	i.default = e;
}), 66);

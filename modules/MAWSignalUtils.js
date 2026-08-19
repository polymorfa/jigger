__d("MAWSignalUtils", [], (function(t, n, r, o, a, i) {
	"use strict";
	var e = null;
	function l() {
		if (e == null) {
			e = [];
			for (var t = 0; t <= 255; t++) {
				var n = t.toString(16).padStart(2, "0").toUpperCase();
				e.push(n);
			}
		}
		return e;
	}
	function s(e) {
		var t = l(), n = [];
		return e.forEach(function(e) {
			n.push(t[e]);
		}), n.join(" ");
	}
	i.getHexRepresentation = s;
}), 66);

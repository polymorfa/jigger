__d("LSRequestId", ["uuidv4"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = "0123456789abcdef", s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	function u() {
		for (var t = r("uuidv4")().replace(/[^0-9a-f]/gi, ""), n = 0, o = ["#"]; n < 33;) {
			var a = e.indexOf(t.charAt(n)) << 8, i = e.indexOf(t.charAt(n + 1)) << 4, l = e.indexOf(t.charAt(n + 2)), u = l | (i | a), c = u >> 6;
			o.push(s.charAt(c)), o.push(s.charAt(u & 63)), n += 3;
		}
		return o.join("");
	}
	var c = { generate: u };
	l.default = c;
}), 98);

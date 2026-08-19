__d("useButtonFocusOnFocusOut.react", ["react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useState;
	function d(e, t, n, r, o) {
		var a = c(!1), i = a[0], l = a[1];
		return u(function() {
			var n;
			if (o) {
				var r = e.current, a = t.current;
				a == null && l(!1), (n = t.current) == null || n.addEventListener("focusout", function(e) {
					e.relatedTarget !== r ? l(!1) : l(!0);
				});
			}
		}, [
			i,
			n,
			r,
			l,
			e,
			t,
			o
		]), i;
	}
	l.default = d;
}), 98);

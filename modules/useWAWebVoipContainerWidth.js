__d("useWAWebVoipContainerWidth", ["react", "react-compiler-runtime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useState;
	function d(e) {
		var t = o("react-compiler-runtime").c(3), n = c(null), r = n[0], a = n[1], i, l;
		return t[0] !== e ? (i = function() {
			var t, n = e.current;
			if (n != null) {
				var r = (t = n.ownerDocument.defaultView) != null ? t : window, o = function() {
					a(n.clientWidth);
				}, i = r.requestAnimationFrame(o), l = new r.ResizeObserver(o);
				return l.observe(n), (function() {
					l.disconnect(), r.cancelAnimationFrame(i);
				});
			}
		}, l = [e], t[0] = e, t[1] = i, t[2] = l) : (i = t[1], l = t[2]), u(i, l), r;
	}
	l.default = d;
}), 98);

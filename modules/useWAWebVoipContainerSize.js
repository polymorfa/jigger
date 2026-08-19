__d("useWAWebVoipContainerSize", ["react", "react-compiler-runtime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useState, d = 265;
	function m(e, t) {
		var n = o("react-compiler-runtime").c(6), r = t === void 0 ? d : t, a = c(null), i = a[0], l = a[1], s, m;
		n[0] !== e ? (s = function() {
			var t, n = function() {
				var n = e.current;
				n && (t != null && (window.cancelAnimationFrame(t), t = null), t = window.requestAnimationFrame(function() {
					var e = n.clientHeight;
					l(e), t = null;
				}));
			};
			n();
			var r = new ResizeObserver(n);
			return e.current && r.observe(e.current), (function() {
				r.disconnect(), t != null && window.cancelAnimationFrame(t);
			});
		}, m = [e], n[0] = e, n[1] = s, n[2] = m) : (s = n[1], m = n[2]), u(s, m);
		var p = i == null ? !1 : i < r, _;
		return n[3] !== p || n[4] !== i ? (_ = {
			isCompactLayout: p,
			uiHeight: i
		}, n[3] = p, n[4] = i, n[5] = _) : _ = n[5], _;
	}
	l.default = m;
}), 98);

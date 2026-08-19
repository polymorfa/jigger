__d("useWAWebVoipVideoCallCanvasPolling", [
	"WAWebVoipCanvasUtils",
	"react",
	"react-compiler-runtime",
	"useWAWebVisibilityAwarePolling"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useState;
	function u(e, t, n) {
		var a = o("react-compiler-runtime").c(8), i = s(!1), l = i[0], u = i[1], c;
		a[0] !== t || a[1] !== e || a[2] !== l ? (c = function() {
			var n = e.current, r = t.current;
			if (!n || !r) return l && u(!1), !0;
			var a = r.clientWidth, i = r.clientHeight;
			if (a > 0 && i > 0) {
				var s = Math.floor(a), c = Math.floor(i);
				(n.style.width !== s + "px" || n.style.height !== c + "px") && (n.style.width = s + "px", n.style.height = c + "px", o("WAWebVoipCanvasUtils").resizeCanvasBuffer(n, a, i)), l || u(!0);
			}
			return !0;
		}, a[0] = t, a[1] = e, a[2] = l, a[3] = c) : c = a[3];
		var d = l ? 2e3 : 200, m;
		a[4] !== n || a[5] !== c || a[6] !== d ? (m = {
			callback: c,
			interval: d,
			enabled: n
		}, a[4] = n, a[5] = c, a[6] = d, a[7] = m) : m = a[7], r("useWAWebVisibilityAwarePolling")(m);
	}
	l.default = u;
}), 98);

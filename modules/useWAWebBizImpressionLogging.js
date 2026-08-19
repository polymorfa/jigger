__d("useWAWebBizImpressionLogging", [
	"WAWebNoop",
	"react",
	"react-compiler-runtime",
	"useWAWebOnScreen",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useRef;
	function d(e, t, n) {
		var a = o("react-compiler-runtime").c(5), i = r("useWAWebStableCallback")(t), l = c(!1), s = r("useWAWebOnScreen")(e, r("WAWebNoop")), d, m;
		a[0] !== s || a[1] !== i || a[2] !== n ? (d = function() {
			s && (l.current && n || (l.current = !0, i()));
		}, m = [
			s,
			n,
			i
		], a[0] = s, a[1] = i, a[2] = n, a[3] = d, a[4] = m) : (d = a[3], m = a[4]), u(d, m);
	}
	l.default = d;
}), 98);

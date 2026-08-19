__d("useWAWebLogCardViewOnIntersection", [
	"WAWebBizHomeCardCarouselLogger",
	"WAWebNoop",
	"react",
	"react-compiler-runtime",
	"useWAWebOnScreen"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useRef;
	function d(e, t, n, a, i) {
		var l = o("react-compiler-runtime").c(7), s = c(!1), d = r("useWAWebOnScreen")(e, r("WAWebNoop")), m, p;
		l[0] !== n || l[1] !== i || l[2] !== t || l[3] !== a || l[4] !== d ? (m = function() {
			if (!(!d || s.current)) {
				s.current = !0;
				var e = a.current, r;
				e === -1 ? r = o("WAWebBizHomeCardCarouselLogger").ViewSource.MOUNT : n > e ? r = o("WAWebBizHomeCardCarouselLogger").ViewSource.FORWARD : r = o("WAWebBizHomeCardCarouselLogger").ViewSource.BACKWARD, a.current = n, o("WAWebBizHomeCardCarouselLogger").BizHomeCardCarouselLogger.logViewCard(t, n, r), i();
			}
		}, p = [
			d,
			t,
			n,
			a,
			i
		], l[0] = n, l[1] = i, l[2] = t, l[3] = a, l[4] = d, l[5] = m, l[6] = p) : (m = l[5], p = l[6]), u(m, p);
	}
	l.default = d;
}), 98);

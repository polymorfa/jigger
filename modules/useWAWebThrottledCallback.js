__d("useWAWebThrottledCallback", [
	"WAThrottle",
	"react",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useMemo;
	function d(e, t, n) {
		t === void 0 && (t = 0);
		var a = r("useWAWebStableCallback")(e), i = n != null ? n : {}, l = i.leading, s = i.trailing, d = c(function() {
			return o("WAThrottle").throttle(a, t, n);
		}, [
			t,
			l,
			s,
			a
		]);
		return u(function() {
			return d.cancel;
		}, [d]), d;
	}
	l.default = d;
}), 98);

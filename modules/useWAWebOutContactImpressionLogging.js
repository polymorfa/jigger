__d("useWAWebOutContactImpressionLogging", [
	"WAWebNoop",
	"WAWebOutContactLoggingUtils",
	"react",
	"react-compiler-runtime",
	"useWAWebCallbackOnce",
	"useWAWebOnScreen"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useEffect, d = s.useRef;
	function m(e) {
		var t = o("react-compiler-runtime").c(8), n = d(null), a = r("useWAWebOnScreen")(n, r("WAWebNoop")), i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = function(t) {
			n.current = t;
		}, t[0] = i) : i = t[0];
		var l = i, s, u;
		t[1] !== e ? (s = function() {
			o("WAWebOutContactLoggingUtils").logOutContactImpression({ entryPoint: e });
		}, u = [e], t[1] = e, t[2] = s, t[3] = u) : (s = t[2], u = t[3]);
		var m = r("useWAWebCallbackOnce")(s, u), p, _;
		return t[4] !== a || t[5] !== m ? (p = function() {
			a && m();
		}, _ = [a, m], t[4] = a, t[5] = m, t[6] = p, t[7] = _) : (p = t[6], _ = t[7]), c(p, _), l;
	}
	l.default = m;
}), 98);

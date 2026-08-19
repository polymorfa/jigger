__d("useWAWebChartHooks", [
	"WAWebChartUtils",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useMemo;
	function d(e, t) {
		return Math.max.apply(Math, e.map(function(e) {
			return Math.max.apply(Math, e.map(t));
		}));
	}
	function m(e, t) {
		return Math.min.apply(Math, e.map(function(e) {
			return Math.min.apply(Math, e.map(t));
		}));
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(7), n;
		t[0] !== e ? (n = d(e, f), t[0] = e, t[1] = n) : n = t[1];
		var r = n, a;
		t[2] !== e ? (a = m(e, _), t[2] = e, t[3] = a) : a = t[3];
		var i = a, l = Math.floor(i), s = Math.ceil(r), u;
		return t[4] !== l || t[5] !== s ? (u = [l, s], t[4] = l, t[5] = s, t[6] = u) : u = t[6], u;
	}
	function _(e) {
		var t = e[0];
		return t;
	}
	function f(e) {
		var t = e[0];
		return t;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(7), n;
		t[0] !== e ? (n = d(e, y), t[0] = e, t[1] = n) : n = t[1];
		var r = n, a;
		t[2] !== e ? (a = m(e, h), t[2] = e, t[3] = a) : a = t[3];
		var i = a, l = Math.floor(i), s = Math.ceil(r), u;
		return t[4] !== l || t[5] !== s ? (u = [l, s], t[4] = l, t[5] = s, t[6] = u) : u = t[6], u;
	}
	function h(e) {
		var t = e[1];
		return t;
	}
	function y(e) {
		var t = e[1];
		return t;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(3), n = p(e), r = g(e), a;
		return t[0] !== n || t[1] !== r ? (a = [n, r], t[0] = n, t[1] = r, t[2] = a) : a = t[2], a;
	}
	function b(e, t) {
		var n = o("react-compiler-runtime").c(3), r;
		return n[0] !== e || n[1] !== t ? (r = function(r) {
			return o("WAWebChartUtils").scale(r, e, t);
		}, n[0] = e, n[1] = t, n[2] = r) : r = n[2], r;
	}
	l.useDomain = C, l.useTranslate = b;
}), 98);

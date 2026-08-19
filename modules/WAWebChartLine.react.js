__d("WAWebChartLine.react", [
	"ReactKonva",
	"WAWebChartUtils",
	"react",
	"react-compiler-runtime",
	"useWAWebInterval"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["animate"], s, u = s || (s = o("react")), c = s.useState;
	function d(t) {
		var n = o("react-compiler-runtime").c(6), r, a;
		n[0] !== t ? (a = t.animate, r = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = r, n[2] = a) : (r = n[1], a = n[2]);
		var i = a === void 0 ? !1 : a, l = i ? m : p, s;
		return n[3] !== l || n[4] !== r ? (s = u.jsx(l, babelHelpers.extends({}, r)), n[3] = l, n[4] = r, n[5] = s) : s = n[5], s;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(8), n = e.color, a = e.series, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [], t[0] = i) : i = t[0];
		var l = c(i), s = l[0], d = l[1], m = c(0), _ = m[0], f = m[1], g = o("WAWebChartUtils").ANIMATION_DURATION_MS / a.length, h;
		t[1] !== _ || t[2] !== s || t[3] !== a ? (h = function() {
			_ !== a.length && (d([].concat(s, [a[_]])), f(_ + 1));
		}, t[1] = _, t[2] = s, t[3] = a, t[4] = h) : h = t[4];
		var y = r("useWAWebInterval")(h, g), C = y[0], b = y[1];
		_ === a.length ? b() : C();
		var v;
		return t[5] !== n || t[6] !== s ? (v = u.jsx(p, {
			color: n,
			series: s
		}), t[5] = n, t[6] = s, t[7] = v) : v = t[7], v;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(5), n = e.color, r = e.series, a;
		t[0] !== r ? (a = o("WAWebChartUtils").flatten(r), t[0] = r, t[1] = a) : a = t[1];
		var i;
		return t[2] !== n || t[3] !== a ? (i = u.jsx(o("ReactKonva").Line, {
			points: a,
			stroke: n,
			strokeWidth: 2,
			lineJoin: "round",
			lineCap: "round"
		}), t[2] = n, t[3] = a, t[4] = i) : i = t[4], i;
	}
	l.default = d;
}), 98);

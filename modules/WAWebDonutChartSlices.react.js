__d("WAWebDonutChartSlices.react", [
	"ReactKonva",
	"WAWebChartUtils",
	"countWhere",
	"react",
	"react-compiler-runtime",
	"useWAWebInterval"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["animate"], s, u = s || (s = o("react")), c = s, d = c.useMemo, m = c.useState;
	function p(t) {
		var n = o("react-compiler-runtime").c(6), r, a;
		n[0] !== t ? (a = t.animate, r = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = r, n[2] = a) : (r = n[1], a = n[2]);
		var i = a === void 0 ? !1 : a, l = i ? _ : y, s;
		return n[3] !== l || n[4] !== r ? (s = u.jsx(l, babelHelpers.extends({}, r)), n[3] = l, n[4] = r, n[5] = s) : s = n[5], s;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(17), n = e.sliceData, a;
		t[0] !== n.length ? (a = new Array(n.length).fill(0), t[0] = n.length, t[1] = a) : a = t[1];
		var i = m(a), l = i[0], s = i[1], c;
		t[2] !== n ? (c = n.map(h), t[2] = n, t[3] = c) : c = t[3];
		var d = c, p;
		t[4] !== n ? (p = n.reduce(g), t[4] = n, t[5] = p) : p = t[5];
		var _ = p, C;
		t[6] !== l ? (C = l.reduce(f), t[6] = l, t[7] = C) : C = t[7];
		var b = C, v;
		t[8] !== l || t[9] !== b || t[10] !== n || t[11] !== d || t[12] !== _ ? (v = function() {
			b !== _ && s(l.map(function(e, t) {
				return Math.min(e + d[t] * o("WAWebChartUtils").ANIMATION_REFRESH_INTERVAL_MS, n[t]);
			}));
		}, t[8] = l, t[9] = b, t[10] = n, t[11] = d, t[12] = _, t[13] = v) : v = t[13];
		var S = r("useWAWebInterval")(v, o("WAWebChartUtils").ANIMATION_REFRESH_INTERVAL_MS), R = S[0], L = S[1];
		b === _ ? L() : R();
		var E;
		return t[14] !== l || t[15] !== e ? (E = u.jsx(y, babelHelpers.extends({}, e, { sliceData: l })), t[14] = l, t[15] = e, t[16] = E) : E = t[16], E;
	}
	function f(e, t) {
		return e + t;
	}
	function g(e, t) {
		return e + t;
	}
	function h(e) {
		return e / o("WAWebChartUtils").ANIMATION_DURATION_MS;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(15), n = e.gap, a = e.getChartColor, i = e.size, l = e.sliceData, s = e.strokeColor, c = e.thickness, d = n === void 0 ? 4 : n, m = r("countWhere")(l, C) > 1, p;
		if (t[0] !== d || t[1] !== a || t[2] !== m || t[3] !== i || t[4] !== l || t[5] !== s || t[6] !== c) {
			var _;
			t[8] !== d || t[9] !== a || t[10] !== m || t[11] !== i || t[12] !== s || t[13] !== c ? (_ = function(t, n, r) {
				return t.slices.push(u.jsx(o("ReactKonva").Arc, {
					rotation: t.rotation,
					angle: n,
					innerRadius: i / 2 - (c + (m ? d : 0)),
					outerRadius: i / 2,
					fill: a(r),
					stroke: s,
					strokeWidth: m ? d : 0
				}, r)), t.rotation = t.rotation + n, t;
			}, t[8] = d, t[9] = a, t[10] = m, t[11] = i, t[12] = s, t[13] = c, t[14] = _) : _ = t[14], p = l.reduce(_, {
				slices: [],
				rotation: 0
			}), t[0] = d, t[1] = a, t[2] = m, t[3] = i, t[4] = l, t[5] = s, t[6] = c, t[7] = p;
		} else p = t[7];
		var f = p, g = f.slices;
		return g;
	}
	function C(e) {
		return e > 0;
	}
	l.default = p;
}), 98);

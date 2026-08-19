__d("WAWebChartKonvaHarness.react", [
	"ReactKonva",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = 100;
	function c(e) {
		var t = o("react-compiler-runtime").c(27), n = e.children, r = e.side, a = r === void 0 ? u : r, i;
		t[0] !== a ? (i = s.jsx(o("ReactKonva").Line, {
			points: [
				0,
				0,
				0,
				a
			],
			stroke: "steelblue",
			strokeWidth: 2
		}), t[0] = a, t[1] = i) : i = t[1];
		var l;
		t[2] !== a ? (l = s.jsx(o("ReactKonva").Line, {
			points: [
				0,
				0,
				a,
				0
			],
			stroke: "steelblue",
			strokeWidth: 2
		}), t[2] = a, t[3] = l) : l = t[3];
		var c;
		t[4] !== a ? (c = s.jsx(o("ReactKonva").Line, {
			points: [
				a,
				0,
				a,
				a
			],
			stroke: "steelblue",
			strokeWidth: 2
		}), t[4] = a, t[5] = c) : c = t[5];
		var d;
		t[6] !== a ? (d = s.jsx(o("ReactKonva").Line, {
			points: [
				0,
				a,
				a,
				a
			],
			stroke: "steelblue",
			strokeWidth: 2
		}), t[6] = a, t[7] = d) : d = t[7];
		var m = a / 2, p = a / 2, _;
		t[8] !== a || t[9] !== m || t[10] !== p ? (_ = s.jsx(o("ReactKonva").Line, {
			points: [
				0,
				m,
				a,
				p
			],
			stroke: "steelblue",
			strokeWidth: 1,
			opacity: .25
		}), t[8] = a, t[9] = m, t[10] = p, t[11] = _) : _ = t[11];
		var f = a / 2, g = a / 2, h;
		t[12] !== a || t[13] !== g || t[14] !== f ? (h = s.jsx(o("ReactKonva").Line, {
			points: [
				f,
				0,
				g,
				a
			],
			stroke: "steelblue",
			strokeWidth: 1,
			opacity: .5
		}), t[12] = a, t[13] = g, t[14] = f, t[15] = h) : h = t[15];
		var y;
		t[16] !== n || t[17] !== h || t[18] !== i || t[19] !== l || t[20] !== c || t[21] !== d || t[22] !== _ ? (y = s.jsxs(o("ReactKonva").Layer, { children: [
			i,
			l,
			c,
			d,
			_,
			h,
			n
		] }), t[16] = n, t[17] = h, t[18] = i, t[19] = l, t[20] = c, t[21] = d, t[22] = _, t[23] = y) : y = t[23];
		var C;
		return t[24] !== a || t[25] !== y ? (C = s.jsx(o("ReactKonva").Stage, {
			height: a,
			width: a,
			children: y
		}), t[24] = a, t[25] = y, t[26] = C) : C = t[26], C;
	}
	l.default = c;
}), 98);

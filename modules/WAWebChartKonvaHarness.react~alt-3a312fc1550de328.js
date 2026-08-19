__d("WAWebChartKonvaHarness.react", ["ReactKonva", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = 100;
	function c(e) {
		var t = e.children, n = e.side, r = n === void 0 ? u : n;
		return s.jsx(o("ReactKonva").Stage, {
			height: r,
			width: r,
			children: s.jsxs(o("ReactKonva").Layer, { children: [
				s.jsx(o("ReactKonva").Line, {
					points: [
						0,
						0,
						0,
						r
					],
					stroke: "steelblue",
					strokeWidth: 2
				}),
				s.jsx(o("ReactKonva").Line, {
					points: [
						0,
						0,
						r,
						0
					],
					stroke: "steelblue",
					strokeWidth: 2
				}),
				s.jsx(o("ReactKonva").Line, {
					points: [
						r,
						0,
						r,
						r
					],
					stroke: "steelblue",
					strokeWidth: 2
				}),
				s.jsx(o("ReactKonva").Line, {
					points: [
						0,
						r,
						r,
						r
					],
					stroke: "steelblue",
					strokeWidth: 2
				}),
				s.jsx(o("ReactKonva").Line, {
					points: [
						0,
						r / 2,
						r,
						r / 2
					],
					stroke: "steelblue",
					strokeWidth: 1,
					opacity: .25
				}),
				s.jsx(o("ReactKonva").Line, {
					points: [
						r / 2,
						0,
						r / 2,
						r
					],
					stroke: "steelblue",
					strokeWidth: 1,
					opacity: .5
				}),
				t
			] })
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);

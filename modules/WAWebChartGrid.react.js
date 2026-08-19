__d("WAWebChartGrid.react", [
	"ReactKonva",
	"WAWebChartThemeContext",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useContext;
	function c(e) {
		var t = o("react-compiler-runtime").c(7), n = e.chartWidth, r = e.horizontal, a = u(o("WAWebChartThemeContext").ChartThemeContext), i;
		if (t[0] !== n || t[1] !== r || t[2] !== a) {
			var l;
			t[4] !== n || t[5] !== a ? (l = function(t) {
				return s.jsx(o("ReactKonva").Line, {
					stroke: a.chartStroke,
					strokeWidth: a.gridStrokeWidth,
					points: [
						0,
						t,
						n,
						t
					]
				}, t);
			}, t[4] = n, t[5] = a, t[6] = l) : l = t[6], i = r.map(l), t[0] = n, t[1] = r, t[2] = a, t[3] = i;
		} else i = t[3];
		return i;
	}
	l.default = c;
}), 98);

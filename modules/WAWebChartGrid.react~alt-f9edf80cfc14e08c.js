__d("WAWebChartGrid.react", [
	"ReactKonva",
	"WAWebChartThemeContext",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useContext;
	function c(e) {
		var t = e.chartWidth, n = e.horizontal, r = u(o("WAWebChartThemeContext").ChartThemeContext);
		return n.map(function(e) {
			return s.jsx(o("ReactKonva").Line, {
				stroke: r.chartStroke,
				strokeWidth: r.gridStrokeWidth,
				points: [
					0,
					e,
					t,
					e
				]
			}, e);
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);

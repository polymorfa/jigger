__d("WAWebChartAxis.react", [
	"ReactKonva",
	"WAWebChartThemeContext",
	"WAWebChartTicks.react",
	"WAWebL10N",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useContext;
	function c(e) {
		var t = e.chartHeight, n = e.chartWidth, a = e.formatXLabel, i = e.formatYLabel, l = e.generatedYTicks, c = e.onYTicksRendered, d = e.tickLength, m = d === void 0 ? 6 : d, p = e.tX, _ = e.tY, f = e.xDomain, g = e.xTickGenerator, h = e.xTicksCount, y = e.yDomain, C = e.yTickGenerator, b = u(o("WAWebChartThemeContext").ChartThemeContext), v = r("WAWebL10N").isRTL() ? n : 0;
		return s.jsxs(o("ReactKonva").Group, { children: [s.jsxs(o("ReactKonva").Group, { children: [s.jsx(o("WAWebChartTicks.react").ChartXTicks, {
			count: h,
			chartHeight: t,
			domain: f,
			translate: p,
			tickLength: m,
			formatLabel: a,
			tickGenerator: g
		}), s.jsx(o("ReactKonva").Line, {
			points: [
				0,
				t,
				n,
				t
			],
			stroke: b.chartStroke,
			strokeWidth: b.axisStrokeWidth
		}, "xaxis")] }), s.jsxs(o("ReactKonva").Group, { children: [s.jsx(o("WAWebChartTicks.react").ChartYTicks, {
			domain: y,
			translate: _,
			formatLabel: i,
			tickGenerator: C,
			generatedTicks: l,
			tickLength: m,
			onTicksRendered: c,
			chartWidth: n
		}), b.showYAxis && s.jsx(o("ReactKonva").Line, {
			points: [
				v,
				t,
				v,
				0
			],
			stroke: b.chartStroke,
			strokeWidth: b.axisStrokeWidth
		}, "yaxis")] })] });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);

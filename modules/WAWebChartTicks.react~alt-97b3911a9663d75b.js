__d("WAWebChartTicks.react", [
	"ReactKonva",
	"WAWebChartThemeContext",
	"WAWebChartTickLabels",
	"WAWebL10N",
	"d3-array-2.6.0",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useContext, d = u.useEffect, m = u.useRef;
	function p(e) {
		var t = e.chartHeight, n = e.count, a = e.domain, i = e.formatLabel, l = e.tickGenerator, u = l === void 0 ? f : l, d = e.tickLength, m = e.translate, p = c(o("WAWebChartThemeContext").ChartThemeContext), _ = a[0], g = a[1], h = u(_, g, n).map(function(e, n, a) {
			var l = m(e), u = "middle";
			return n === 0 ? u = r("WAWebL10N").isRTL() ? "end" : "start" : n === a.length - 1 && (u = r("WAWebL10N").isRTL() ? "start" : "end"), [s.jsx(o("ReactKonva").Line, {
				points: [
					l,
					t,
					l,
					t + d
				],
				stroke: p.chartStroke,
				strokeWidth: p.xTickStrokeWidth
			}, e), s.jsx(o("WAWebChartTickLabels").XTickLabel, {
				position: u,
				text: i(e),
				x: l,
				y: t + d
			}, l)];
		});
		return s.jsx(o("ReactKonva").Group, { children: h });
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.chartWidth, n = e.count, a = n === void 0 ? 4 : n, i = e.domain, l = e.formatLabel, u = e.generatedTicks, p = e.margin, _ = p === void 0 ? 10 : p, f = e.onTicksRendered, g = e.tickGenerator, h = g === void 0 ? o("d3-array-2.6.0").ticks : g, y = e.tickLength, C = e.translate, b = c(o("WAWebChartThemeContext").ChartThemeContext), v = m(null), S = i[0], R = i[1], L = r("WAWebL10N").isRTL(), E = (u != null ? u : h(S, R, a)).map(function(e, n) {
			var r = C(e), a = n === 0 ? b.axisStrokeWidth : b.yTickStrokeWidth, i = L ? t + y : 0, u = L ? t : -y, c = L ? t : 0;
			return s.jsxs(o("ReactKonva").Group, { children: [s.jsx(o("ReactKonva").Line, {
				points: [
					i,
					r,
					u,
					r
				],
				stroke: b.chartStroke,
				strokeWidth: a
			}), s.jsx(o("WAWebChartTickLabels").YTickLabel, {
				x: c,
				y: r,
				text: l(e),
				margin: _
			})] }, e);
		});
		return d(function() {
			var e = v.current;
			if (e != null) {
				var t = e.getClientRect();
				f({ width: t.width - (L ? _ : 0) });
			}
		}, void 0), s.jsx(o("ReactKonva").Group, {
			ref: v,
			children: E
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e, t, n) {
		return [e, t];
	}
	l.ChartXTicks = p, l.ChartYTicks = _;
}), 98);

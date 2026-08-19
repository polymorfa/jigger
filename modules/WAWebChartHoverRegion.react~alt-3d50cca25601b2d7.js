__d("WAWebChartHoverRegion.react", [
	"ReactKonva",
	"WAWebChartThemeContext",
	"WAWebChartTooltip.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useContext, m = u.useState;
	function p(e) {
		var t = e.boundaries, n = e.chartHeight, a = e.chartWidth, i = e.getChartColor, l = e.label, u = e.onMouseOver, p = e.points, _ = e.x, f = d(o("WAWebChartThemeContext").ChartThemeContext), g = m(!1), h = g[0], y = g[1], C = s.jsx(o("ReactKonva").Line, {
			dash: f.verticalMarkerDash,
			points: [
				_,
				n,
				_,
				-f.tooltipBottomMargin
			],
			stroke: f.chartStroke,
			lineCap: "round",
			strokeWidth: f.verticalMarkerStrokeWidth
		}), b = p.map(function(e, t) {
			var n = e[0], r = e[1];
			return s.jsxs(o("ReactKonva").Group, { children: [s.jsx(o("ReactKonva").Circle, {
				x: n,
				y: r,
				radius: f.markerHaloRadius,
				opacity: f.markerHaloOpacity,
				fill: i(t)
			}), s.jsx(o("ReactKonva").Circle, {
				x: n,
				y: r,
				stroke: i(t),
				strokeWidth: f.markerStrokeWidth,
				radius: f.markerRadius,
				fill: f.backgroundColor
			})] }, t);
		}), v = t[1] - t[0], S = s.jsx(o("ReactKonva").Rect, {
			x: t[0],
			y: 0,
			width: v,
			height: n
		}), R = c(function() {
			y(!0);
		}, []), L = c(function() {
			y(!1);
		}, []), E = c(function() {
			u();
		}, [u]);
		return s.jsxs(o("ReactKonva").Group, {
			onMouseEnter: R,
			onMouseLeave: L,
			onMouseOver: E,
			opacity: h ? 1 : 0,
			children: [
				S,
				C,
				b,
				s.jsx(r("WAWebChartTooltip.react"), {
					text: l,
					x: p[0][0],
					chartWidth: a
				})
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);

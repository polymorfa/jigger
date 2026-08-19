__d("WAWebChartHoverRegions.react", [
	"ReactKonva",
	"WAWebChartHoverRegion.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		for (var t = e.chartHeight, n = e.chartWidth, a = e.data, i = e.formatLabel, l = e.getChartColor, u = e.onHover, c = e.translateX, d = e.translateY, m = [], p = function(o) {
			var e = [];
			for (var p of a) e.push(p[o]);
			var _ = e[0], f = _[0], g = c(f), h = c(o === 0 ? a[0][o + 1][0] : a[0][o - 1][0]), y = (g - h) / 2;
			m.push(s.jsx(r("WAWebChartHoverRegion.react"), {
				getChartColor: l,
				chartHeight: t,
				chartWidth: n,
				x: g,
				label: i(f),
				onMouseOver: function() {
					return u(e, o);
				},
				points: e.map(function(e) {
					var t = e[0], n = e[1];
					return [c(t), d(n)];
				}),
				boundaries: [g - y, g + y]
			}, f));
		}, _ = 0; _ < a[0].length; _++) p(_);
		return s.jsx(o("ReactKonva").Group, { children: m });
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);

__d("WAWebDonutChart.react", [
	"ReactKonva",
	"WAWebChartThemeContext",
	"WAWebDonutChartSlices.react",
	"WAWebL10N",
	"WAWebThemeContext",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.animate, n = t === void 0 ? !1 : t, a = e.data, i = e.gap, l = i === void 0 ? 4 : i, u = e.getChartColor, c = e.size, d = e.thickness, m = o("WAWebThemeContext").useIsDarkTheme(), p = m ? o("WAWebChartThemeContext").DarkTheme : o("WAWebChartThemeContext").LightTheme, _ = a.map(function(e) {
			return e * 360;
		});
		return s.jsx(o("ReactKonva").Stage, {
			width: c,
			height: c,
			children: s.jsxs(o("ReactKonva").Layer, { children: [s.jsx(o("ReactKonva").Rect, {
				width: c,
				height: c,
				fill: p.backgroundColor
			}), s.jsx(o("ReactKonva").Group, {
				x: c / 2,
				y: c / 2,
				rotation: -90,
				scaleY: r("WAWebL10N").isRTL() ? -1 : 1,
				children: s.jsx(r("WAWebDonutChartSlices.react"), {
					animate: n,
					gap: l,
					getChartColor: u,
					size: c,
					sliceData: _,
					strokeColor: p.backgroundColor,
					thickness: d
				})
			})] })
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);

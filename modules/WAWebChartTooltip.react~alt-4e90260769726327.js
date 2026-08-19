__d("WAWebChartTooltip.react", [
	"ReactKonva",
	"WAWebChartThemeContext",
	"WAWebL10N",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useContext, d = u.useEffect, m = u.useRef, p = u.useState, _ = {
		horizontal: 16,
		vertical: 6
	}, f = 1.54, g = 5;
	function h(e) {
		var t, n = e.chartWidth, a = e.text, i = e.x, l = c(o("WAWebChartThemeContext").ChartThemeContext), u = m(null), h = m(null), y = p(0), C = y[0], b = y[1], v = p(0), S = v[0], R = v[1], L = p(i), E = L[0], k = L[1];
		return d(function() {
			var e = u.current;
			e != null && (b(e.height() + 2 * _.vertical), R(e.width() + 2 * _.horizontal));
		}, []), d(function() {
			var e = h.current;
			if (e != null) {
				var t = i - e.width() / 2, o = r("WAWebL10N").isRTL() ? Math.max(t, -l.margin.right + g) : Math.min(t, n - (e.width() + g) + l.margin.right);
				k(o);
			}
		}, [
			C,
			S,
			i,
			n,
			l.margin.right
		]), s.jsxs((t = o("ReactKonva")).Group, {
			x: E,
			y: -(C + l.tooltipBottomMargin),
			ref: h,
			width: S,
			height: C,
			children: [
				s.jsx(t.Rect, {
					cornerRadius: 4,
					fill: l.tooltipBackgroundColor,
					width: S,
					height: C,
					shadowBlur: 1.75,
					shadowOffsetX: 0,
					shadowOffsetY: .5,
					shadowColor: "black",
					shadowOpacity: .04
				}),
				s.jsx(t.Rect, {
					cornerRadius: 4,
					fill: l.tooltipBackgroundColor,
					width: S,
					height: C,
					shadowBlur: 6.25,
					shadowOffsetX: 0,
					shadowOffsetY: 1.85,
					shadowColor: "black",
					shadowOpacity: .19
				}),
				s.jsx(t.Text, {
					align: "center",
					verticalAlign: "middle",
					x: _.horizontal,
					y: _.vertical,
					ref: u,
					text: a,
					lineHeight: f,
					height: l.fontSize * f,
					fontSize: l.fontSize,
					fontStyle: l.fontWeight,
					fill: l.tooltipTextColor
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 98);

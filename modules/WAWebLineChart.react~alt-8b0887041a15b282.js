__d("WAWebLineChart.react", [
	"ReactKonva",
	"WAWebChartAxis.react",
	"WAWebChartGrid.react",
	"WAWebChartHoverRegions.react",
	"WAWebChartLine.react",
	"WAWebChartThemeContext",
	"WAWebL10N",
	"WAWebThemeContext",
	"react",
	"useWAWebChartHooks"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useMemo, m = u.useState;
	function p(e) {
		var t = e.animate, n = t === void 0 ? !1 : t, a = e.data, i = e.formatXLabel, l = e.formatYLabel, u = e.getChartColor, p = e.gridHorizontalCount, _ = p === void 0 ? 4 : p, f = e.height, g = e.onHover, h = e.width, y = e.xTickGenerator, C = e.yTickGenerator, b = o("WAWebThemeContext").useIsDarkTheme(), v = b ? o("WAWebChartThemeContext").DarkTheme : o("WAWebChartThemeContext").LightTheme, S = v.margin, R = m(S.left), L = R[0], E = R[1], k = m(0), I = k[0], T = k[1], D = h - L - S.right, x = f - S.top - S.bottom, $ = o("useWAWebChartHooks").useDomain(a), P = $[0], N = $[1], M = N[0], w = N[1], A = o("useWAWebChartHooks").useTranslate(P, r("WAWebL10N").isRTL() ? [D, 0] : [0, D]), F = c(function(e) {
			var t = e.width;
			return r("WAWebL10N").isRTL() ? T(t) : E(t);
		}, []), O = C(M, w, _), B = [O[0], O[O.length - 1]], W = o("useWAWebChartHooks").useTranslate(B, [x, 0]), q = d(function() {
			return a.map(function(e) {
				return e.map(function(e) {
					var t = e[0], n = e[1];
					return [A(t), W(n)];
				});
			});
		}, [
			a,
			A,
			W
		]);
		return s.jsx(o("ReactKonva").Stage, {
			width: h,
			height: f,
			children: s.jsx(o("WAWebChartThemeContext").ChartThemeContext.Provider, {
				value: v,
				children: s.jsxs(o("ReactKonva").Layer, { children: [s.jsx(o("ReactKonva").Rect, {
					width: h,
					height: f,
					fill: v.backgroundColor
				}), s.jsxs(o("ReactKonva").Group, {
					x: L,
					y: S.top,
					offsetX: I,
					children: [
						s.jsx(r("WAWebChartAxis.react"), {
							xTicksCount: Math.min(v.xTicksCount, a[0].length),
							formatXLabel: i,
							formatYLabel: l,
							chartHeight: x,
							chartWidth: D,
							tX: A,
							tY: W,
							xDomain: P,
							yDomain: B,
							xTickGenerator: y,
							yTickGenerator: C,
							generatedYTicks: O,
							onYTicksRendered: F
						}),
						s.jsx(r("WAWebChartGrid.react"), {
							horizontal: O.map(W),
							chartWidth: D
						}),
						q.map(function(e, t) {
							return s.jsx(r("WAWebChartLine.react"), {
								animate: n,
								color: u(t),
								series: e
							}, t);
						}),
						s.jsx(r("WAWebChartHoverRegions.react"), {
							getChartColor: u,
							onHover: g,
							chartHeight: x,
							chartWidth: D,
							formatLabel: i,
							data: a,
							translateX: A,
							translateY: W
						})
					]
				})] })
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);

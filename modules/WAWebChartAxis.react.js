__d("WAWebChartAxis.react", [
	"ReactKonva",
	"WAWebChartThemeContext",
	"WAWebChartTicks.react",
	"WAWebL10N",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useContext;
	function c(e) {
		var t = o("react-compiler-runtime").c(39), n = e.chartHeight, a = e.chartWidth, i = e.formatXLabel, l = e.formatYLabel, c = e.generatedYTicks, d = e.onYTicksRendered, m = e.tickLength, p = e.tX, _ = e.tY, f = e.xDomain, g = e.xTickGenerator, h = e.xTicksCount, y = e.yDomain, C = e.yTickGenerator, b = m === void 0 ? 6 : m, v = u(o("WAWebChartThemeContext").ChartThemeContext), S = r("WAWebL10N").isRTL() ? a : 0, R;
		t[0] !== n || t[1] !== i || t[2] !== p || t[3] !== b || t[4] !== f || t[5] !== g || t[6] !== h ? (R = s.jsx(o("WAWebChartTicks.react").ChartXTicks, {
			count: h,
			chartHeight: n,
			domain: f,
			translate: p,
			tickLength: b,
			formatLabel: i,
			tickGenerator: g
		}), t[0] = n, t[1] = i, t[2] = p, t[3] = b, t[4] = f, t[5] = g, t[6] = h, t[7] = R) : R = t[7];
		var L;
		t[8] !== n || t[9] !== a ? (L = [
			0,
			n,
			a,
			n
		], t[8] = n, t[9] = a, t[10] = L) : L = t[10];
		var E;
		t[11] !== L || t[12] !== v.axisStrokeWidth || t[13] !== v.chartStroke ? (E = s.jsx(o("ReactKonva").Line, {
			points: L,
			stroke: v.chartStroke,
			strokeWidth: v.axisStrokeWidth
		}, "xaxis"), t[11] = L, t[12] = v.axisStrokeWidth, t[13] = v.chartStroke, t[14] = E) : E = t[14];
		var k;
		t[15] !== R || t[16] !== E ? (k = s.jsxs(o("ReactKonva").Group, { children: [R, E] }), t[15] = R, t[16] = E, t[17] = k) : k = t[17];
		var I;
		t[18] !== a || t[19] !== l || t[20] !== c || t[21] !== d || t[22] !== _ || t[23] !== b || t[24] !== y || t[25] !== C ? (I = s.jsx(o("WAWebChartTicks.react").ChartYTicks, {
			domain: y,
			translate: _,
			formatLabel: l,
			tickGenerator: C,
			generatedTicks: c,
			tickLength: b,
			onTicksRendered: d,
			chartWidth: a
		}), t[18] = a, t[19] = l, t[20] = c, t[21] = d, t[22] = _, t[23] = b, t[24] = y, t[25] = C, t[26] = I) : I = t[26];
		var T;
		t[27] !== n || t[28] !== v.axisStrokeWidth || t[29] !== v.chartStroke || t[30] !== v.showYAxis || t[31] !== S ? (T = v.showYAxis && s.jsx(o("ReactKonva").Line, {
			points: [
				S,
				n,
				S,
				0
			],
			stroke: v.chartStroke,
			strokeWidth: v.axisStrokeWidth
		}, "yaxis"), t[27] = n, t[28] = v.axisStrokeWidth, t[29] = v.chartStroke, t[30] = v.showYAxis, t[31] = S, t[32] = T) : T = t[32];
		var D;
		t[33] !== I || t[34] !== T ? (D = s.jsxs(o("ReactKonva").Group, { children: [I, T] }), t[33] = I, t[34] = T, t[35] = D) : D = t[35];
		var x;
		return t[36] !== k || t[37] !== D ? (x = s.jsxs(o("ReactKonva").Group, { children: [k, D] }), t[36] = k, t[37] = D, t[38] = x) : x = t[38], x;
	}
	l.default = c;
}), 98);

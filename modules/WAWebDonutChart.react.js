__d("WAWebDonutChart.react", [
	"ReactKonva",
	"WAWebChartThemeContext",
	"WAWebDonutChartSlices.react",
	"WAWebL10N",
	"WAWebThemeContext",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(23), n = e.animate, a = e.data, i = e.gap, l = e.getChartColor, u = e.size, d = e.thickness, m = n === void 0 ? !1 : n, p = i === void 0 ? 4 : i, _ = o("WAWebThemeContext").useIsDarkTheme(), f = _ ? o("WAWebChartThemeContext").DarkTheme : o("WAWebChartThemeContext").LightTheme, g;
		t[0] !== a ? (g = a.map(c), t[0] = a, t[1] = g) : g = t[1];
		var h = g, y;
		t[2] !== u || t[3] !== f.backgroundColor ? (y = s.jsx(o("ReactKonva").Rect, {
			width: u,
			height: u,
			fill: f.backgroundColor
		}), t[2] = u, t[3] = f.backgroundColor, t[4] = y) : y = t[4];
		var C = u / 2, b = u / 2, v;
		t[5] !== m || t[6] !== p || t[7] !== l || t[8] !== u || t[9] !== h || t[10] !== f.backgroundColor || t[11] !== d ? (v = s.jsx(r("WAWebDonutChartSlices.react"), {
			animate: m,
			gap: p,
			getChartColor: l,
			size: u,
			sliceData: h,
			strokeColor: f.backgroundColor,
			thickness: d
		}), t[5] = m, t[6] = p, t[7] = l, t[8] = u, t[9] = h, t[10] = f.backgroundColor, t[11] = d, t[12] = v) : v = t[12];
		var S;
		t[13] !== C || t[14] !== b || t[15] !== v ? (S = s.jsx(o("ReactKonva").Group, {
			x: C,
			y: b,
			rotation: -90,
			scaleY: r("WAWebL10N").isRTL() ? -1 : 1,
			children: v
		}), t[13] = C, t[14] = b, t[15] = v, t[16] = S) : S = t[16];
		var R;
		t[17] !== y || t[18] !== S ? (R = s.jsxs(o("ReactKonva").Layer, { children: [y, S] }), t[17] = y, t[18] = S, t[19] = R) : R = t[19];
		var L;
		return t[20] !== u || t[21] !== R ? (L = s.jsx(o("ReactKonva").Stage, {
			width: u,
			height: u,
			children: R
		}), t[20] = u, t[21] = R, t[22] = L) : L = t[22], L;
	}
	function c(e) {
		return e * 360;
	}
	l.default = u;
}), 98);

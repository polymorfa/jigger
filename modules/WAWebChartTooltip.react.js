__d("WAWebChartTooltip.react", [
	"ReactKonva",
	"WAWebChartThemeContext",
	"WAWebL10N",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useContext, d = u.useEffect, m = u.useRef, p = u.useState, _ = {
		horizontal: 16,
		vertical: 6
	}, f = 1.54, g = 5;
	function h(e) {
		var t = o("react-compiler-runtime").c(31), n = e.chartWidth, a = e.text, i = e.x, l = c(o("WAWebChartThemeContext").ChartThemeContext), u = m(null), h = m(null), y = p(0), C = y[0], b = y[1], v = p(0), S = v[0], R = v[1], L = p(i), E = L[0], k = L[1], I, T;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (I = function() {
			var e = u.current;
			e != null && (b(e.height() + 2 * _.vertical), R(e.width() + 2 * _.horizontal));
		}, T = [], t[0] = I, t[1] = T) : (I = t[0], T = t[1]), d(I, T);
		var D;
		t[2] !== n || t[3] !== l.margin.right || t[4] !== i ? (D = function() {
			var e = h.current;
			if (e != null) {
				var t = i - e.width() / 2, o = r("WAWebL10N").isRTL() ? Math.max(t, -l.margin.right + g) : Math.min(t, n - (e.width() + g) + l.margin.right);
				k(o);
			}
		}, t[2] = n, t[3] = l.margin.right, t[4] = i, t[5] = D) : D = t[5];
		var x;
		t[6] !== n || t[7] !== C || t[8] !== l.margin.right || t[9] !== S || t[10] !== i ? (x = [
			C,
			S,
			i,
			n,
			l.margin.right
		], t[6] = n, t[7] = C, t[8] = l.margin.right, t[9] = S, t[10] = i, t[11] = x) : x = t[11], d(D, x);
		var $ = -(C + l.tooltipBottomMargin), P, N;
		t[12] !== C || t[13] !== l.tooltipBackgroundColor || t[14] !== S ? (P = s.jsx(o("ReactKonva").Rect, {
			cornerRadius: 4,
			fill: l.tooltipBackgroundColor,
			width: S,
			height: C,
			shadowBlur: 1.75,
			shadowOffsetX: 0,
			shadowOffsetY: .5,
			shadowColor: "black",
			shadowOpacity: .04
		}), N = s.jsx(o("ReactKonva").Rect, {
			cornerRadius: 4,
			fill: l.tooltipBackgroundColor,
			width: S,
			height: C,
			shadowBlur: 6.25,
			shadowOffsetX: 0,
			shadowOffsetY: 1.85,
			shadowColor: "black",
			shadowOpacity: .19
		}), t[12] = C, t[13] = l.tooltipBackgroundColor, t[14] = S, t[15] = P, t[16] = N) : (P = t[15], N = t[16]);
		var M = l.fontSize * f, w;
		t[17] !== M || t[18] !== a || t[19] !== l.fontSize || t[20] !== l.fontWeight || t[21] !== l.tooltipTextColor ? (w = s.jsx(o("ReactKonva").Text, {
			align: "center",
			verticalAlign: "middle",
			x: _.horizontal,
			y: _.vertical,
			ref: u,
			text: a,
			lineHeight: f,
			height: M,
			fontSize: l.fontSize,
			fontStyle: l.fontWeight,
			fill: l.tooltipTextColor
		}), t[17] = M, t[18] = a, t[19] = l.fontSize, t[20] = l.fontWeight, t[21] = l.tooltipTextColor, t[22] = w) : w = t[22];
		var A;
		return t[23] !== C || t[24] !== E || t[25] !== $ || t[26] !== P || t[27] !== N || t[28] !== w || t[29] !== S ? (A = s.jsxs(o("ReactKonva").Group, {
			x: E,
			y: $,
			ref: h,
			width: S,
			height: C,
			children: [
				P,
				N,
				w
			]
		}), t[23] = C, t[24] = E, t[25] = $, t[26] = P, t[27] = N, t[28] = w, t[29] = S, t[30] = A) : A = t[30], A;
	}
	l.default = h;
}), 98);

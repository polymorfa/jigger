__d("WAWebChartTicks.react", [
	"ReactKonva",
	"WAWebChartThemeContext",
	"WAWebChartTickLabels",
	"WAWebL10N",
	"d3-array-2.6.0",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useContext, d = u.useEffect, m = u.useRef;
	function p(e) {
		var t = o("react-compiler-runtime").c(18), n = e.chartHeight, a = e.count, i = e.domain, l = e.formatLabel, u = e.tickGenerator, d = e.tickLength, m = e.translate, p = u === void 0 ? f : u, _ = c(o("WAWebChartThemeContext").ChartThemeContext), g = i[0], h = i[1], y;
		if (t[0] !== n || t[1] !== a || t[2] !== l || t[3] !== h || t[4] !== g || t[5] !== _ || t[6] !== p || t[7] !== d || t[8] !== m) {
			var C;
			t[10] !== n || t[11] !== l || t[12] !== _ || t[13] !== d || t[14] !== m ? (C = function(t, a, i) {
				var e = m(t), u = "middle";
				return a === 0 ? u = r("WAWebL10N").isRTL() ? "end" : "start" : a === i.length - 1 && (u = r("WAWebL10N").isRTL() ? "start" : "end"), [s.jsx(o("ReactKonva").Line, {
					points: [
						e,
						n,
						e,
						n + d
					],
					stroke: _.chartStroke,
					strokeWidth: _.xTickStrokeWidth
				}, t), s.jsx(o("WAWebChartTickLabels").XTickLabel, {
					position: u,
					text: l(t),
					x: e,
					y: n + d
				}, e)];
			}, t[10] = n, t[11] = l, t[12] = _, t[13] = d, t[14] = m, t[15] = C) : C = t[15], y = p(g, h, a).map(C), t[0] = n, t[1] = a, t[2] = l, t[3] = h, t[4] = g, t[5] = _, t[6] = p, t[7] = d, t[8] = m, t[9] = y;
		} else y = t[9];
		var b = y, v;
		return t[16] !== b ? (v = s.jsx(o("ReactKonva").Group, { children: b }), t[16] = b, t[17] = v) : v = t[17], v;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(27), n = e.chartWidth, a = e.count, i = e.domain, l = e.formatLabel, u = e.generatedTicks, p = e.margin, _ = e.onTicksRendered, f = e.tickGenerator, g = e.tickLength, h = e.translate, y = a === void 0 ? 4 : a, C = p === void 0 ? 10 : p, b = f === void 0 ? o("d3-array-2.6.0").ticks : f, v = c(o("WAWebChartThemeContext").ChartThemeContext), S = m(null), R = i[0], L = i[1], E;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (E = r("WAWebL10N").isRTL(), t[0] = E) : E = t[0];
		var k = E, I;
		t[1] !== y || t[2] !== u || t[3] !== L || t[4] !== R || t[5] !== b ? (I = u != null ? u : b(R, L, y), t[1] = y, t[2] = u, t[3] = L, t[4] = R, t[5] = b, t[6] = I) : I = t[6];
		var T;
		if (t[7] !== n || t[8] !== l || t[9] !== C || t[10] !== I || t[11] !== v || t[12] !== g || t[13] !== h) {
			var D;
			t[15] !== n || t[16] !== l || t[17] !== C || t[18] !== v || t[19] !== g || t[20] !== h ? (D = function(t, r) {
				var e = h(t), a = r === 0 ? v.axisStrokeWidth : v.yTickStrokeWidth, i = k ? n + g : 0, u = k ? n : -g, c = k ? n : 0;
				return s.jsxs(o("ReactKonva").Group, { children: [s.jsx(o("ReactKonva").Line, {
					points: [
						i,
						e,
						u,
						e
					],
					stroke: v.chartStroke,
					strokeWidth: a
				}), s.jsx(o("WAWebChartTickLabels").YTickLabel, {
					x: c,
					y: e,
					text: l(t),
					margin: C
				})] }, t);
			}, t[15] = n, t[16] = l, t[17] = C, t[18] = v, t[19] = g, t[20] = h, t[21] = D) : D = t[21], T = I.map(D), t[7] = n, t[8] = l, t[9] = C, t[10] = I, t[11] = v, t[12] = g, t[13] = h, t[14] = T;
		} else T = t[14];
		var x = T, $;
		t[22] !== C || t[23] !== _ ? ($ = function() {
			var e = S.current;
			if (e != null) {
				var t = e.getClientRect();
				_({ width: t.width - (k ? C : 0) });
			}
		}, t[22] = C, t[23] = _, t[24] = $) : $ = t[24], d($, void 0);
		var P;
		return t[25] !== x ? (P = s.jsx(o("ReactKonva").Group, {
			ref: S,
			children: x
		}), t[25] = x, t[26] = P) : P = t[26], P;
	}
	function f(e, t, n) {
		return [e, t];
	}
	l.ChartXTicks = p, l.ChartYTicks = _;
}), 98);

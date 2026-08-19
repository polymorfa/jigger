__d("WAWebChartHoverRegion.react", [
	"ReactKonva",
	"WAWebChartThemeContext",
	"WAWebChartTooltip.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useContext, m = u.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(43), n = e.boundaries, a = e.chartHeight, i = e.chartWidth, l = e.getChartColor, u = e.label, c = e.onMouseOver, p = e.points, _ = e.x, f = d(o("WAWebChartThemeContext").ChartThemeContext), g = m(!1), h = g[0], y = g[1], C = -f.tooltipBottomMargin, b;
		t[0] !== a || t[1] !== C || t[2] !== _ ? (b = [
			_,
			a,
			_,
			C
		], t[0] = a, t[1] = C, t[2] = _, t[3] = b) : b = t[3];
		var v;
		t[4] !== b || t[5] !== f.chartStroke || t[6] !== f.verticalMarkerDash || t[7] !== f.verticalMarkerStrokeWidth ? (v = s.jsx(o("ReactKonva").Line, {
			dash: f.verticalMarkerDash,
			points: b,
			stroke: f.chartStroke,
			lineCap: "round",
			strokeWidth: f.verticalMarkerStrokeWidth
		}), t[4] = b, t[5] = f.chartStroke, t[6] = f.verticalMarkerDash, t[7] = f.verticalMarkerStrokeWidth, t[8] = v) : v = t[8];
		var S = v, R;
		if (t[9] !== l || t[10] !== p || t[11] !== f.backgroundColor || t[12] !== f.markerHaloOpacity || t[13] !== f.markerHaloRadius || t[14] !== f.markerRadius || t[15] !== f.markerStrokeWidth) {
			var L;
			t[17] !== l || t[18] !== f.backgroundColor || t[19] !== f.markerHaloOpacity || t[20] !== f.markerHaloRadius || t[21] !== f.markerRadius || t[22] !== f.markerStrokeWidth ? (L = function(t, n) {
				var e = t[0], r = t[1];
				return s.jsxs(o("ReactKonva").Group, { children: [s.jsx(o("ReactKonva").Circle, {
					x: e,
					y: r,
					radius: f.markerHaloRadius,
					opacity: f.markerHaloOpacity,
					fill: l(n)
				}), s.jsx(o("ReactKonva").Circle, {
					x: e,
					y: r,
					stroke: l(n),
					strokeWidth: f.markerStrokeWidth,
					radius: f.markerRadius,
					fill: f.backgroundColor
				})] }, n);
			}, t[17] = l, t[18] = f.backgroundColor, t[19] = f.markerHaloOpacity, t[20] = f.markerHaloRadius, t[21] = f.markerRadius, t[22] = f.markerStrokeWidth, t[23] = L) : L = t[23], R = p.map(L), t[9] = l, t[10] = p, t[11] = f.backgroundColor, t[12] = f.markerHaloOpacity, t[13] = f.markerHaloRadius, t[14] = f.markerRadius, t[15] = f.markerStrokeWidth, t[16] = R;
		} else R = t[16];
		var E = R, k = n[1] - n[0], I;
		t[24] !== n[0] || t[25] !== a || t[26] !== k ? (I = s.jsx(o("ReactKonva").Rect, {
			x: n[0],
			y: 0,
			width: k,
			height: a
		}), t[24] = n[0], t[25] = a, t[26] = k, t[27] = I) : I = t[27];
		var T = I, D;
		t[28] === Symbol.for("react.memo_cache_sentinel") ? (D = function() {
			y(!0);
		}, t[28] = D) : D = t[28];
		var x = D, $;
		t[29] === Symbol.for("react.memo_cache_sentinel") ? ($ = function() {
			y(!1);
		}, t[29] = $) : $ = t[29];
		var P = $, N;
		t[30] !== c ? (N = function() {
			c();
		}, t[30] = c, t[31] = N) : N = t[31];
		var M = N, w = h ? 1 : 0, A;
		t[32] !== i || t[33] !== u || t[34] !== p[0][0] ? (A = s.jsx(r("WAWebChartTooltip.react"), {
			text: u,
			x: p[0][0],
			chartWidth: i
		}), t[32] = i, t[33] = u, t[34] = p[0][0], t[35] = A) : A = t[35];
		var F;
		return t[36] !== E || t[37] !== M || t[38] !== T || t[39] !== A || t[40] !== w || t[41] !== S ? (F = s.jsxs(o("ReactKonva").Group, {
			onMouseEnter: x,
			onMouseLeave: P,
			onMouseOver: M,
			opacity: w,
			children: [
				T,
				S,
				E,
				A
			]
		}), t[36] = E, t[37] = M, t[38] = T, t[39] = A, t[40] = w, t[41] = S, t[42] = F) : F = t[42], F;
	}
	l.default = p;
}), 98);

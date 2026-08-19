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
	"react-compiler-runtime",
	"useWAWebChartHooks"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useMemo, m = u.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(77), n = e.animate, a = e.data, i = e.formatXLabel, l = e.formatYLabel, u = e.getChartColor, c = e.gridHorizontalCount, d = e.height, p = e.onHover, _ = e.width, f = e.xTickGenerator, g = e.yTickGenerator, h = n === void 0 ? !1 : n, y = c === void 0 ? 4 : c, C = o("WAWebThemeContext").useIsDarkTheme(), b = C ? o("WAWebChartThemeContext").DarkTheme : o("WAWebChartThemeContext").LightTheme, v = b.margin, S = m(v.left), R = S[0], L = S[1], E = m(0), k = E[0], I = E[1], T = _ - R - v.right, D = d - v.top - v.bottom, x = o("useWAWebChartHooks").useDomain(a), $ = x[0], P = x[1], N = P[0], M = P[1], w;
		t[0] !== T ? (w = r("WAWebL10N").isRTL() ? [T, 0] : [0, T], t[0] = T, t[1] = w) : w = t[1];
		var A = o("useWAWebChartHooks").useTranslate($, w), F;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (F = function(t) {
			var e = t.width;
			return r("WAWebL10N").isRTL() ? I(e) : L(e);
		}, t[2] = F) : F = t[2];
		var O = F, B;
		t[3] !== y || t[4] !== M || t[5] !== N || t[6] !== g ? (B = g(N, M, y), t[3] = y, t[4] = M, t[5] = N, t[6] = g, t[7] = B) : B = t[7];
		var W = B, q = W[W.length - 1], U;
		t[8] !== W[0] || t[9] !== q ? (U = [W[0], q], t[8] = W[0], t[9] = q, t[10] = U) : U = t[10];
		var V = U, H;
		t[11] !== D ? (H = [D, 0], t[11] = D, t[12] = H) : H = t[12];
		var G = o("useWAWebChartHooks").useTranslate(V, H), z;
		if (t[13] !== a || t[14] !== A || t[15] !== G) {
			var j;
			t[17] !== A || t[18] !== G ? (j = function(t) {
				return t.map(function(e) {
					var t = e[0], n = e[1];
					return [A(t), G(n)];
				});
			}, t[17] = A, t[18] = G, t[19] = j) : j = t[19], z = a.map(j), t[13] = a, t[14] = A, t[15] = G, t[16] = z;
		} else z = t[16];
		var K = z, Q;
		t[20] !== d || t[21] !== b.backgroundColor || t[22] !== _ ? (Q = s.jsx(o("ReactKonva").Rect, {
			width: _,
			height: d,
			fill: b.backgroundColor
		}), t[20] = d, t[21] = b.backgroundColor, t[22] = _, t[23] = Q) : Q = t[23];
		var X = v.top, Y = Math.min(b.xTicksCount, a[0].length), J;
		t[24] !== D || t[25] !== T || t[26] !== V || t[27] !== i || t[28] !== l || t[29] !== W || t[30] !== Y || t[31] !== A || t[32] !== G || t[33] !== $ || t[34] !== f || t[35] !== g ? (J = s.jsx(r("WAWebChartAxis.react"), {
			xTicksCount: Y,
			formatXLabel: i,
			formatYLabel: l,
			chartHeight: D,
			chartWidth: T,
			tX: A,
			tY: G,
			xDomain: $,
			yDomain: V,
			xTickGenerator: f,
			yTickGenerator: g,
			generatedYTicks: W,
			onYTicksRendered: O
		}), t[24] = D, t[25] = T, t[26] = V, t[27] = i, t[28] = l, t[29] = W, t[30] = Y, t[31] = A, t[32] = G, t[33] = $, t[34] = f, t[35] = g, t[36] = J) : J = t[36];
		var Z;
		t[37] !== W || t[38] !== G ? (Z = W.map(G), t[37] = W, t[38] = G, t[39] = Z) : Z = t[39];
		var ee;
		t[40] !== T || t[41] !== Z ? (ee = s.jsx(r("WAWebChartGrid.react"), {
			horizontal: Z,
			chartWidth: T
		}), t[40] = T, t[41] = Z, t[42] = ee) : ee = t[42];
		var te;
		if (t[43] !== h || t[44] !== K || t[45] !== u) {
			var ne;
			t[47] !== h || t[48] !== u ? (ne = function(t, n) {
				return s.jsx(r("WAWebChartLine.react"), {
					animate: h,
					color: u(n),
					series: t
				}, n);
			}, t[47] = h, t[48] = u, t[49] = ne) : ne = t[49], te = K.map(ne), t[43] = h, t[44] = K, t[45] = u, t[46] = te;
		} else te = t[46];
		var re;
		t[50] !== D || t[51] !== T || t[52] !== a || t[53] !== i || t[54] !== u || t[55] !== p || t[56] !== A || t[57] !== G ? (re = s.jsx(r("WAWebChartHoverRegions.react"), {
			getChartColor: u,
			onHover: p,
			chartHeight: D,
			chartWidth: T,
			formatLabel: i,
			data: a,
			translateX: A,
			translateY: G
		}), t[50] = D, t[51] = T, t[52] = a, t[53] = i, t[54] = u, t[55] = p, t[56] = A, t[57] = G, t[58] = re) : re = t[58];
		var oe;
		t[59] !== R || t[60] !== v.top || t[61] !== k || t[62] !== J || t[63] !== ee || t[64] !== te || t[65] !== re ? (oe = s.jsxs(o("ReactKonva").Group, {
			x: R,
			y: X,
			offsetX: k,
			children: [
				J,
				ee,
				te,
				re
			]
		}), t[59] = R, t[60] = v.top, t[61] = k, t[62] = J, t[63] = ee, t[64] = te, t[65] = re, t[66] = oe) : oe = t[66];
		var ae;
		t[67] !== Q || t[68] !== oe ? (ae = s.jsxs(o("ReactKonva").Layer, { children: [Q, oe] }), t[67] = Q, t[68] = oe, t[69] = ae) : ae = t[69];
		var ie;
		t[70] !== ae || t[71] !== b ? (ie = s.jsx(o("WAWebChartThemeContext").ChartThemeContext.Provider, {
			value: b,
			children: ae
		}), t[70] = ae, t[71] = b, t[72] = ie) : ie = t[72];
		var le;
		return t[73] !== d || t[74] !== ie || t[75] !== _ ? (le = s.jsx(o("ReactKonva").Stage, {
			width: _,
			height: d,
			children: ie
		}), t[73] = d, t[74] = ie, t[75] = _, t[76] = le) : le = t[76], le;
	}
	l.default = p;
}), 98);

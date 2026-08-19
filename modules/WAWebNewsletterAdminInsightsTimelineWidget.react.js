__d("WAWebNewsletterAdminInsightsTimelineWidget.react", [
	"WAWebFlex.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebL10N",
	"WAWebListFilterButton.react",
	"WAWebNewsletterAdminInsightsTimelineWidgetUtils",
	"WAWebPaymentSendIcon.react",
	"WAWebText.react",
	"WAWebTimeSeries.react",
	"react",
	"react-compiler-runtime",
	"useWAWebMeasure"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useMemo, d = u.useState, m = {
		root: {
			backgroundColor: "x1280gxy",
			width: "xh8yej3",
			$$css: !0
		},
		legend: {
			width: "xh8yej3",
			$$css: !0
		},
		legendItem: {
			width: "xh8yej3",
			$$css: !0
		}
	};
	function p(e) {
		var t = o("react-compiler-runtime").c(34), n = e.animate, a = e.dataSets, i = e.getChartColor, l;
		t[0] !== a ? (l = a.map(f), t[0] = a, t[1] = l) : l = t[1];
		var u = l, c;
		t[2] !== a ? (c = a.flatMap(_), t[2] = a, t[3] = c) : c = t[3];
		var p = c, y = d(0), b = y[0], S = y[1], R = d(null), L = R[0], E = R[1], k = a[b].data, I = C(a, L), T;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (T = function(t, n) {
			E(n);
		}, t[4] = T) : T = t[4];
		var D = T, x;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (x = function() {
			E(null);
		}, t[5] = x) : x = t[5];
		var $ = x, P = r("useWAWebMeasure")(), N = P[0], M = P[1], w;
		t[6] !== M ? (w = v(M), t[6] = M, t[7] = w) : w = t[7];
		var A = w, F = A[0], O = A[1], B = a.length > 1, W;
		t[8] !== k ? (W = k.toReversed(), t[8] = k, t[9] = W) : W = t[9];
		var q = W, U = k.length - 1, V;
		t[10] !== u || t[11] !== b || t[12] !== B ? (V = B && s.jsx(g, {
			dataSetLabels: u,
			onSelect: S,
			selectedIndex: b
		}), t[10] = u, t[11] = b, t[12] = B, t[13] = V) : V = t[13];
		var H;
		t[14] !== i || t[15] !== p || t[16] !== I ? (H = s.jsx(h, {
			getChartColor: i,
			seriesLabels: p,
			seriesValues: I
		}), t[14] = i, t[15] = p, t[16] = I, t[17] = H) : H = t[17];
		var G;
		t[18] !== n || t[19] !== O || t[20] !== F || t[21] !== a || t[22] !== i || t[23] !== U || t[24] !== q || t[25] !== b ? (G = F != null && O != null && s.jsx(r("WAWebTimeSeries.react"), {
			animate: n,
			data: q,
			getChartColor: function(t) {
				return i(U - t + o("WAWebNewsletterAdminInsightsTimelineWidgetUtils").getChartColorOffset(a, b));
			},
			width: F,
			height: O,
			onHover: D
		}), t[18] = n, t[19] = O, t[20] = F, t[21] = a, t[22] = i, t[23] = U, t[24] = q, t[25] = b, t[26] = G) : G = t[26];
		var z;
		t[27] !== G ? (z = s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			onMouseLeave: $,
			children: G
		}), t[27] = G, t[28] = z) : z = t[28];
		var j;
		return t[29] !== N || t[30] !== z || t[31] !== V || t[32] !== H ? (j = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: m.root,
			ref: N,
			marginTop: 8,
			children: [
				V,
				H,
				z
			]
		}), t[29] = N, t[30] = z, t[31] = V, t[32] = H, t[33] = j) : j = t[33], j;
	}
	function _(e) {
		var t = e.dataLabels;
		return t;
	}
	function f(e) {
		var t = e.dataSetLabel;
		return t;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(9), n = e.dataSetLabels, a = e.onSelect, i = e.selectedIndex, l;
		if (t[0] !== n || t[1] !== a || t[2] !== i) {
			var u;
			t[4] !== a || t[5] !== i ? (u = function(t, n) {
				return s.jsx(r("WAWebListFilterButton.react"), {
					label: t.label,
					onClick: function() {
						return a(n);
					},
					selected: i === n
				}, t.key);
			}, t[4] = a, t[5] = i, t[6] = u) : u = t[6], l = n.map(u), t[0] = n, t[1] = a, t[2] = i, t[3] = l;
		} else l = t[3];
		var c;
		return t[7] !== l ? (c = s.jsx(o("WAWebFlex.react").FlexRow, {
			gap: 8,
			children: l
		}), t[7] = l, t[8] = c) : c = t[8], c;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(9), n = e.getChartColor, r = e.seriesLabels, a = e.seriesValues, i;
		if (t[0] !== n || t[1] !== r || t[2] !== a) {
			var l;
			t[4] !== n || t[5] !== a ? (l = function(t, r) {
				return s.jsx(y, {
					label: t.label,
					value: a[r],
					color: n(r),
					testid: "newsletter-admin-insights-timeline-widget-legend-item-" + r
				}, t.key);
			}, t[4] = n, t[5] = a, t[6] = l) : l = t[6], i = r.map(l), t[0] = n, t[1] = r, t[2] = a, t[3] = i;
		} else i = t[3];
		var u;
		return t[7] !== i ? (u = s.jsx(o("WAWebFlex.react").FlexColumn, {
			gap: 16,
			xstyle: m.legend,
			children: i
		}), t[7] = i, t[8] = u) : u = t[8], u;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(15), n = e.color, a = e.label, i = e.testid, l = e.value, u;
		t[0] !== n ? (u = s.jsx(o("WAWebPaymentSendIcon.react").PaymentSendIcon, {
			displayInline: !0,
			height: 6,
			width: 6,
			style: { color: n }
		}), t[0] = n, t[1] = u) : u = t[1];
		var c = u, d;
		t[2] !== a ? (d = s.jsx(o("WAWebText.react").WAWebTextMuted, {
			as: "span",
			color: "secondary",
			children: a
		}), t[2] = a, t[3] = d) : d = t[3];
		var p;
		t[4] !== c || t[5] !== d ? (p = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			columnGap: 8,
			children: [c, d]
		}), t[4] = c, t[5] = d, t[6] = p) : p = t[6];
		var _;
		t[7] !== l ? (_ = r("WAWebL10N").n(l), t[7] = l, t[8] = _) : _ = t[8];
		var f;
		t[9] !== _ ? (f = s.jsx(o("WAWebText.react").WAWebTextMuted, { children: _ }), t[9] = _, t[10] = f) : f = t[10];
		var g;
		return t[11] !== p || t[12] !== f || t[13] !== i ? (g = s.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			xstyle: m.legendItem,
			testid: i,
			children: [p, f]
		}), t[11] = p, t[12] = f, t[13] = i, t[14] = g) : g = t[14], g;
	}
	function C(e, t) {
		var n = o("react-compiler-runtime").c(6), r;
		n[0] !== e ? (r = o("WAWebNewsletterAdminInsightsTimelineWidgetUtils").getDataSetsCumulativeSums(e), n[0] = e, n[1] = r) : r = n[1];
		var a = r, i;
		return n[2] !== a || n[3] !== e || n[4] !== t ? (i = t != null ? e.flatMap(function(e) {
			return e.data.flatMap(function(e) {
				return e[t][1];
			});
		}) : a, n[2] = a, n[3] = e, n[4] = t, n[5] = i) : i = n[5], i;
	}
	var b = 1.4754098361;
	function v(e) {
		var t = e.width;
		if (t === 0) return [null, null];
		var n = t / b;
		return [t, n];
	}
	l.default = p;
}), 98);

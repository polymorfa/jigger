__d("WAWebNewsletterAdminInsightsReachWidget.react", [
	"fbt",
	"WAWebChartUtils",
	"WAWebDeltaText.react",
	"WAWebDonutChart.react",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebNewsletterMetricUtils",
	"WAWebPaymentSendIcon.react",
	"WAWebText.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = {
		root: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		content: {
			width: "xh8yej3",
			$$css: !0
		},
		paddingTop20: {
			paddingTop: "x1h678fw",
			$$css: !0
		}
	}, m = ["#FFB938", "#00A884"], p = o("WAWebChartUtils").makeGetChartColor(m);
	function _(e) {
		var t = o("react-compiler-runtime").c(43), n = e.animate, r = e.delta, a = e.followers, i = e.others, l = e.reach, u = e.showDelta, p = u === void 0 ? !0 : u, _, y, b, v, S, R, L, E, k, I, T, D, x;
		t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i || t[4] !== l || t[5] !== p ? (v = [{
			count: a,
			label: s._(
				/*BTDS*/
				""
			),
			percentage: a / l,
			color: m[1]
		}, {
			count: i,
			label: s._(
				/*BTDS*/
				""
			),
			percentage: i / l,
			color: m[0]
		}], b = o("WAWebFlex.react").FlexColumn, T = "center", D = "center", x = d.root, t[19] !== r || t[20] !== l || t[21] !== p ? (S = c.jsx(g, {
			count: l,
			delta: r,
			showDelta: p
		}), t[19] = r, t[20] = l, t[21] = p, t[22] = S) : S = t[22], y = o("WAWebFlex.react").FlexColumn, E = "center", k = "center", I = d.content, _ = C, R = n, L = v.toReversed().map(f), t[0] = n, t[1] = r, t[2] = a, t[3] = i, t[4] = l, t[5] = p, t[6] = _, t[7] = y, t[8] = b, t[9] = v, t[10] = S, t[11] = R, t[12] = L, t[13] = E, t[14] = k, t[15] = I, t[16] = T, t[17] = D, t[18] = x) : (_ = t[6], y = t[7], b = t[8], v = t[9], S = t[10], R = t[11], L = t[12], E = t[13], k = t[14], I = t[15], T = t[16], D = t[17], x = t[18]);
		var $;
		t[23] !== _ || t[24] !== R || t[25] !== L ? ($ = c.jsx(_, {
			animate: R,
			data: L
		}), t[23] = _, t[24] = R, t[25] = L, t[26] = $) : $ = t[26];
		var P;
		t[27] !== v ? (P = c.jsx(h, {
			items: v,
			xstyle: d.paddingTop20
		}), t[27] = v, t[28] = P) : P = t[28];
		var N;
		t[29] !== y || t[30] !== $ || t[31] !== P || t[32] !== E || t[33] !== k || t[34] !== I ? (N = c.jsxs(y, {
			align: E,
			justify: k,
			xstyle: I,
			children: [$, P]
		}), t[29] = y, t[30] = $, t[31] = P, t[32] = E, t[33] = k, t[34] = I, t[35] = N) : N = t[35];
		var M;
		return t[36] !== b || t[37] !== S || t[38] !== N || t[39] !== T || t[40] !== D || t[41] !== x ? (M = c.jsxs(b, {
			align: T,
			justify: D,
			xstyle: x,
			children: [S, N]
		}), t[36] = b, t[37] = S, t[38] = N, t[39] = T, t[40] = D, t[41] = x, t[42] = M) : M = t[42], M;
	}
	function f(e) {
		return e.percentage;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(10), n = e.count, a = e.delta, i = e.showDelta, l;
		t[0] !== n ? (l = r("WAWebL10N").n(n), t[0] = n, t[1] = l) : l = t[1];
		var u;
		t[2] !== l ? (u = c.jsx(o("WAWebText.react").WAWebTextLarge, {
			testid: "newsletter-admin-insights-reach-widget-count",
			marginBottom: 4,
			children: l
		}), t[2] = l, t[3] = u) : u = t[3];
		var d;
		t[4] !== a || t[5] !== i ? (d = i && a != null && a !== o("WAWebNewsletterMetricUtils").DELTA_INFINITE && c.jsxs(o("WAWebFlex.react").FlexRow, { children: [c.jsx(r("WAWebDeltaText.react"), {
			testid: "newsletter-admin-insights-reach-widget-delta",
			delta: a,
			size: "small"
		}), c.jsx(o("WAWebText.react").WAWebTextMuted, {
			marginStart: 4,
			children: s._(
				/*BTDS*/
				""
			)
		})] }), t[4] = a, t[5] = i, t[6] = d) : d = t[6];
		var m;
		return t[7] !== u || t[8] !== d ? (m = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			marginBottom: 20,
			paddingTop: 8,
			children: [u, d]
		}), t[7] = u, t[8] = d, t[9] = m) : m = t[9], m;
	}
	function h(t) {
		var n = o("react-compiler-runtime").c(7), a = t.items, i = t.xstyle, l;
		n[0] !== i ? (l = (e || (e = r("stylex")))(i, d.content), n[0] = i, n[1] = l) : l = n[1];
		var s;
		n[2] !== a ? (s = a.map(y), n[2] = a, n[3] = s) : s = n[3];
		var u;
		return n[4] !== l || n[5] !== s ? (u = c.jsx(o("WAWebFlex.react").FlexColumn, {
			rowGap: 16,
			className: l,
			children: s
		}), n[4] = l, n[5] = s, n[6] = u) : u = n[6], u;
	}
	function y(e, t) {
		return c.createElement(b, babelHelpers.extends({}, e, {
			key: t,
			testid: "newsletter-reach-widget-legend-item-" + t
		}));
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = o("react-compiler-runtime").c(3), n = e.animate, a = e.data, i;
		return t[0] !== n || t[1] !== a ? (i = c.jsx(r("WAWebDonutChart.react"), {
			animate: n,
			size: 72,
			data: a,
			getChartColor: p,
			thickness: 8,
			gap: 2
		}), t[0] = n, t[1] = a, t[2] = i) : i = t[2], i;
	}
	function b(e) {
		var t = o("react-compiler-runtime").c(23), n = e.color, a = e.count, i = e.label, l = e.percentage, s = e.testid, u;
		t[0] !== n ? (u = c.jsx(o("WAWebPaymentSendIcon.react").PaymentSendIcon, {
			displayInline: !0,
			height: 6,
			width: 6,
			style: { color: n }
		}), t[0] = n, t[1] = u) : u = t[1];
		var d = u, m;
		t[2] !== i ? (m = c.jsx(o("WAWebText.react").WAWebTextMuted, {
			as: "span",
			color: "secondary",
			children: i
		}), t[2] = i, t[3] = m) : m = t[3];
		var p = m, _;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = "xh8yej3", t[4] = _) : _ = t[4];
		var f;
		t[5] !== d || t[6] !== p ? (f = c.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 8,
			align: "center",
			children: [
				d,
				" ",
				p
			]
		}), t[5] = d, t[6] = p, t[7] = f) : f = t[7];
		var g;
		t[8] !== a ? (g = r("WAWebL10N").d(a), t[8] = a, t[9] = g) : g = t[9];
		var h;
		t[10] !== g ? (h = c.jsx(o("WAWebText.react").WAWebTextMuted, {
			testid: "reach-widget-count",
			color: "secondary",
			children: g
		}), t[10] = g, t[11] = h) : h = t[11];
		var y;
		t[12] !== l ? (y = r("WAWebL10N").n(l, void 0, {
			style: "percent",
			maximumSignificantDigits: 3,
			trailingZeroDisplay: "stripIfInteger"
		}), t[12] = l, t[13] = y) : y = t[13];
		var C;
		t[14] !== y ? (C = c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
			testid: "reach-widget-delta",
			color: "primary",
			children: y
		}), t[14] = y, t[15] = C) : C = t[15];
		var b;
		t[16] !== h || t[17] !== C ? (b = c.jsxs(o("WAWebFlex.react").FlexRow, {
			shrink: 0,
			align: "center",
			gap: 12,
			children: [h, C]
		}), t[16] = h, t[17] = C, t[18] = b) : b = t[18];
		var v;
		return t[19] !== f || t[20] !== b || t[21] !== s ? (v = c.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			className: _,
			testid: s,
			children: [f, b]
		}), t[19] = f, t[20] = b, t[21] = s, t[22] = v) : v = t[22], v;
	}
	l.default = _;
}), 226);

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
		var t = e.animate, n = e.dataSets, a = e.getChartColor, i = n.map(function(e) {
			var t = e.dataSetLabel;
			return t;
		}), l = n.flatMap(function(e) {
			var t = e.dataLabels;
			return t;
		}), u = d(0), p = u[0], g = u[1], y = d(null), b = y[0], v = y[1], S = n[p].data, R = h(n, b), L = function(t, n) {
			v(n);
		}, E = function() {
			v(null);
		}, k = r("useWAWebMeasure")(), I = k[0], T = k[1], D = C(T), x = D[0], $ = D[1], P = n.length > 1, N = c(function() {
			return S.toReversed();
		}, [S]), M = S.length - 1;
		return s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: m.root,
			ref: I,
			marginTop: 8,
			children: [
				P && s.jsx(_, {
					dataSetLabels: i,
					onSelect: g,
					selectedIndex: p
				}),
				s.jsx(f, {
					getChartColor: a,
					seriesLabels: l,
					seriesValues: R
				}),
				s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
					onMouseLeave: E,
					children: x != null && $ != null && s.jsx(r("WAWebTimeSeries.react"), {
						animate: t,
						data: N,
						getChartColor: function(t) {
							return a(M - t + o("WAWebNewsletterAdminInsightsTimelineWidgetUtils").getChartColorOffset(n, p));
						},
						width: x,
						height: $,
						onHover: L
					})
				})
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.dataSetLabels, n = e.onSelect, a = e.selectedIndex;
		return s.jsx(o("WAWebFlex.react").FlexRow, {
			gap: 8,
			children: t.map(function(e, t) {
				return s.jsx(r("WAWebListFilterButton.react"), {
					label: e.label,
					onClick: function() {
						return n(t);
					},
					selected: a === t
				}, e.key);
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.getChartColor, n = e.seriesLabels, r = e.seriesValues;
		return s.jsx(o("WAWebFlex.react").FlexColumn, {
			gap: 16,
			xstyle: m.legend,
			children: n.map(function(e, n) {
				return s.jsx(g, {
					label: e.label,
					value: r[n],
					color: t(n),
					testid: "newsletter-admin-insights-timeline-widget-legend-item-" + n
				}, e.key);
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.color, n = e.label, a = e.testid, i = e.value, l = s.jsx(o("WAWebPaymentSendIcon.react").PaymentSendIcon, {
			displayInline: !0,
			height: 6,
			width: 6,
			style: { color: t }
		});
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			xstyle: m.legendItem,
			testid: a,
			children: [s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				columnGap: 8,
				children: [l, s.jsx(o("WAWebText.react").WAWebTextMuted, {
					as: "span",
					color: "secondary",
					children: n
				})]
			}), s.jsx(o("WAWebText.react").WAWebTextMuted, { children: r("WAWebL10N").n(i) })]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e, t) {
		var n = c(function() {
			return o("WAWebNewsletterAdminInsightsTimelineWidgetUtils").getDataSetsCumulativeSums(e);
		}, [e]);
		return t != null ? e.flatMap(function(e) {
			return e.data.flatMap(function(e) {
				return e[t][1];
			});
		}) : n;
	}
	var y = 1.4754098361;
	function C(e) {
		var t = e.width;
		if (t === 0) return [null, null];
		var n = t / y;
		return [t, n];
	}
	l.default = p;
}), 98);

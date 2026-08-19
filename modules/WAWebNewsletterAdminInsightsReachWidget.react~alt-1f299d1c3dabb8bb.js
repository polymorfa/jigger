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
		var t = e.animate, n = e.delta, r = e.followers, a = e.others, i = e.reach, l = e.showDelta, u = l === void 0 ? !0 : l, p = [{
			count: r,
			label: s._(
				/*BTDS*/
				""
			),
			percentage: r / i,
			color: m[1]
		}, {
			count: a,
			label: s._(
				/*BTDS*/
				""
			),
			percentage: a / i,
			color: m[0]
		}];
		return c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: d.root,
			children: [c.jsx(f, {
				count: i,
				delta: n,
				showDelta: u
			}), c.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				justify: "center",
				xstyle: d.content,
				children: [c.jsx(h, {
					animate: t,
					data: p.toReversed().map(function(e) {
						return e.percentage;
					})
				}), c.jsx(g, {
					items: p,
					xstyle: d.paddingTop20
				})]
			})]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.count, n = e.delta, a = e.showDelta;
		return c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			marginBottom: 20,
			paddingTop: 8,
			children: [c.jsx(o("WAWebText.react").WAWebTextLarge, {
				testid: "newsletter-admin-insights-reach-widget-count",
				marginBottom: 4,
				children: r("WAWebL10N").n(t)
			}), a && n != null && n !== o("WAWebNewsletterMetricUtils").DELTA_INFINITE && c.jsxs(o("WAWebFlex.react").FlexRow, { children: [c.jsx(r("WAWebDeltaText.react"), {
				testid: "newsletter-admin-insights-reach-widget-delta",
				delta: n,
				size: "small"
			}), c.jsx(o("WAWebText.react").WAWebTextMuted, {
				marginStart: 4,
				children: s._(
					/*BTDS*/
					""
				)
			})] })]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(t) {
		var n = t.items, a = t.xstyle;
		return c.jsx(o("WAWebFlex.react").FlexColumn, {
			rowGap: 16,
			className: (e || (e = r("stylex")))(a, d.content),
			children: n.map(function(e, t) {
				return c.createElement(y, babelHelpers.extends({}, e, {
					key: t,
					testid: "newsletter-reach-widget-legend-item-" + t
				}));
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.animate, n = e.data;
		return c.jsx(r("WAWebDonutChart.react"), {
			animate: t,
			size: 72,
			data: n,
			getChartColor: p,
			thickness: 8,
			gap: 2
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.color, n = e.count, a = e.label, i = e.percentage, l = e.testid, s = c.jsx(o("WAWebPaymentSendIcon.react").PaymentSendIcon, {
			displayInline: !0,
			height: 6,
			width: 6,
			style: { color: t }
		}), u = c.jsx(o("WAWebText.react").WAWebTextMuted, {
			as: "span",
			color: "secondary",
			children: a
		});
		return c.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			className: "xh8yej3",
			testid: l,
			children: [c.jsxs(o("WAWebFlex.react").FlexRow, {
				columnGap: 8,
				align: "center",
				children: [
					s,
					" ",
					u
				]
			}), c.jsxs(o("WAWebFlex.react").FlexRow, {
				shrink: 0,
				align: "center",
				gap: 12,
				children: [c.jsx(o("WAWebText.react").WAWebTextMuted, {
					testid: "reach-widget-count",
					color: "secondary",
					children: r("WAWebL10N").d(n)
				}), c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
					testid: "reach-widget-delta",
					color: "primary",
					children: r("WAWebL10N").n(i, void 0, {
						style: "percent",
						maximumSignificantDigits: 3,
						trailingZeroDisplay: "stripIfInteger"
					})
				})]
			})]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = _;
}), 226);

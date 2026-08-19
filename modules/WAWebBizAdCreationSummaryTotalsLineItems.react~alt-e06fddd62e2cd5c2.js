__d("WAWebBizAdCreationSummaryTotalsLineItems.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAdCreationContinuousDurationUtils",
	"WAWebBizAdCreationCurrencyUtils",
	"WAWebBizAdCreationSummaryTotalsLineItems_estimatedTax.graphql",
	"WAWebBizSummaryLineItem.react",
	"WAWebFlex.react",
	"react",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react"));
	function d(t) {
		var a, i, l = t.currency, s = t.estimatedTaxRef, u = t.rowGap, d = u === void 0 ? 8 : u, m = t.selectedBudget, f = t.selectedDurationInDays, g = o("CometRelay").useFragment(e !== void 0 ? e : e = n("WAWebBizAdCreationSummaryTotalsLineItems_estimatedTax.graphql"), s), h = o("WAWebBizAdCreationContinuousDurationUtils").isContinuousDurationActive(f), y = (a = g == null || (i = g.taxes) == null ? void 0 : i.filter(function(e) {
			return e.taxName != null && e.taxAmount != null;
		}).map(function(e) {
			var t, n, r;
			return {
				formattedAmount: (t = (n = e.taxAmount) == null ? void 0 : n.formattedAmount) != null ? t : "",
				taxName: (r = e.taxName) != null ? r : ""
			};
		})) != null ? a : [];
		return c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			rowGap: d,
			children: [h ? c.jsx(p, {
				currency: l,
				selectedBudget: m
			}) : c.jsx(_, {
				currency: l,
				selectedBudget: m,
				selectedDurationInDays: f
			}), y.map(function(e, t) {
				return c.jsx(r("WAWebBizSummaryLineItem.react"), {
					colorName: "contentDeemphasized",
					label: e.taxName,
					value: e.formattedAmount
				}, t);
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	var m = r("withWAWebBizAdCreationSpecContext")(d, function(e) {
		return {
			currency: e.adAccountData.currency,
			selectedBudget: e.budgetData.budget,
			selectedDurationInDays: e.durationData.durationInDays
		};
	});
	function p(e) {
		var t = e.currency, n = e.selectedBudget, o = r("WAWebBizAdCreationCurrencyUtils").formatCurrency(n, t);
		return c.jsx(r("WAWebBizSummaryLineItem.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			value: s._(
				/*BTDS*/
				"",
				[s._param("Pre-formatted daily budget", o)]
			)
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.currency, n = e.selectedBudget, o = e.selectedDurationInDays, a = r("WAWebBizAdCreationCurrencyUtils").formatCurrency(n, t), i = r("WAWebBizAdCreationCurrencyUtils").formatCurrency(n * o, t, { withDecimals: !0 });
		return c.jsxs(c.Fragment, { children: [c.jsx(r("WAWebBizSummaryLineItem.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			value: i
		}), c.jsx(r("WAWebBizSummaryLineItem.react"), {
			colorName: "contentDeemphasized",
			label: s._(
				/*BTDS*/
				"",
				[s._plural(o, "number"), s._param("Pre-formatted daily budget", a)]
			)
		})] });
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = m;
}), 226);

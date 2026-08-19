__d("WAWebBizAdCreationSummaryContent.react", [
	"CometPlaceholder.react",
	"CometRelay",
	"WAWebBizAdCreationBudgetUtils",
	"WAWebBizAdCreationContinuousDurationUtils",
	"WAWebBizAdCreationSummaryContentQuery.graphql",
	"WAWebBizAdCreationSummaryTotalAmountRow.react",
	"WAWebBizAdCreationSummaryTotalsLineItems.react",
	"WAWebBizShimmerRows.react",
	"WAWebDivider.react",
	"WAWebFlex.react",
	"react",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = e !== void 0 ? e : e = n("WAWebBizAdCreationSummaryContentQuery.graphql");
	function d(e) {
		var t = e.withDivider, n = t === void 0 ? !0 : t;
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			gap: 12,
			children: [
				u.jsx(r("WAWebBizShimmerRows.react"), {
					count: 3,
					height: 20
				}),
				n ? u.jsx(r("WAWebDivider.react"), { direction: "horizontal" }) : null,
				u.jsx(r("WAWebBizShimmerRows.react"), {
					count: 1,
					height: 20
				})
			]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t, n, a, l = e.rowGap, s = e.withDivider, m = s === void 0 ? !0 : s, p = e.currency, _ = e.paymentAccountId, f = e.selectedBudget, g = e.selectedDurationInDays, h = babelHelpers.extends({ asset_id: _ }, o("WAWebBizAdCreationBudgetUtils").getBillingInfoQueryArgs(f, g, p)), y = o("CometRelay").useLazyLoadQuery(c, h, { fetchPolicy: "store-and-network" }), C = (t = y.billable_account_by_asset_id) == null || (t = t.billing_info) == null ? void 0 : t.estimated_tax, b = o("WAWebBizAdCreationContinuousDurationUtils").isContinuousDurationActive(g), v = ((n = C == null || (a = C.taxes) == null ? void 0 : a.length) != null ? n : 0) > 0, S = !b || v;
		return u.jsxs(r("CometPlaceholder.react"), {
			fallback: u.jsx(d, { withDivider: m }),
			name: i.id,
			children: [u.jsx(r("WAWebBizAdCreationSummaryTotalsLineItems.react"), {
				estimatedTaxRef: C,
				rowGap: l
			}), S && u.jsxs(u.Fragment, { children: [m ? u.jsx(r("WAWebDivider.react"), { direction: "horizontal" }) : null, u.jsx(r("WAWebBizAdCreationSummaryTotalAmountRow.react"), {
				estimatedTaxRef: C,
				isContinuousDuration: b
			})] })]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	var p = r("withWAWebBizAdCreationSpecContext")(m, function(e) {
		return {
			currency: e.adAccountData.currency,
			paymentAccountId: e.adAccountData.paymentAccountID,
			selectedBudget: e.budgetData.budget,
			selectedDurationInDays: e.durationData.durationInDays
		};
	});
	l.default = p;
}), 98);

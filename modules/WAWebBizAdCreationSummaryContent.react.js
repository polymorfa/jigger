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
	"react-compiler-runtime",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = e !== void 0 ? e : e = n("WAWebBizAdCreationSummaryContentQuery.graphql");
	function d(e) {
		var t = o("react-compiler-runtime").c(6), n = e.withDivider, a = n === void 0 ? !0 : n, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(r("WAWebBizShimmerRows.react"), {
			count: 3,
			height: 20
		}), t[0] = i) : i = t[0];
		var l;
		t[1] !== a ? (l = a ? u.jsx(r("WAWebDivider.react"), { direction: "horizontal" }) : null, t[1] = a, t[2] = l) : l = t[2];
		var s;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (s = u.jsx(r("WAWebBizShimmerRows.react"), {
			count: 1,
			height: 20
		}), t[3] = s) : s = t[3];
		var c;
		return t[4] !== l ? (c = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			gap: 12,
			children: [
				i,
				l,
				s
			]
		}), t[4] = l, t[5] = c) : c = t[5], c;
	}
	function m(e) {
		var t, n, a, l = o("react-compiler-runtime").c(16), s = e.rowGap, m = e.withDivider, p = e.currency, _ = e.paymentAccountId, f = e.selectedBudget, g = e.selectedDurationInDays, h = m === void 0 ? !0 : m, y = babelHelpers.extends({ asset_id: _ }, o("WAWebBizAdCreationBudgetUtils").getBillingInfoQueryArgs(f, g, p)), C = o("CometRelay").useLazyLoadQuery(c, y, { fetchPolicy: "store-and-network" }), b = (t = C.billable_account_by_asset_id) == null || (t = t.billing_info) == null ? void 0 : t.estimated_tax, v;
		l[0] !== g ? (v = o("WAWebBizAdCreationContinuousDurationUtils").isContinuousDurationActive(g), l[0] = g, l[1] = v) : v = l[1];
		var S = v, R = ((n = b == null || (a = b.taxes) == null ? void 0 : a.length) != null ? n : 0) > 0, L = !S || R, E;
		l[2] !== h ? (E = u.jsx(d, { withDivider: h }), l[2] = h, l[3] = E) : E = l[3];
		var k;
		l[4] !== b || l[5] !== s ? (k = u.jsx(r("WAWebBizAdCreationSummaryTotalsLineItems.react"), {
			estimatedTaxRef: b,
			rowGap: s
		}), l[4] = b, l[5] = s, l[6] = k) : k = l[6];
		var I;
		l[7] !== b || l[8] !== S || l[9] !== L || l[10] !== h ? (I = L && u.jsxs(u.Fragment, { children: [h ? u.jsx(r("WAWebDivider.react"), { direction: "horizontal" }) : null, u.jsx(r("WAWebBizAdCreationSummaryTotalAmountRow.react"), {
			estimatedTaxRef: b,
			isContinuousDuration: S
		})] }), l[7] = b, l[8] = S, l[9] = L, l[10] = h, l[11] = I) : I = l[11];
		var T;
		return l[12] !== E || l[13] !== k || l[14] !== I ? (T = u.jsxs(r("CometPlaceholder.react"), {
			fallback: E,
			name: i.id,
			children: [k, I]
		}), l[12] = E, l[13] = k, l[14] = I, l[15] = T) : T = l[15], T;
	}
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

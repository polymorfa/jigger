__d("useWAWebBizAdCreationMaybeOpenBillingWizard", [
	"CometRelay",
	"WAWebBizAdCreationBudgetUtils",
	"WAWebBizAdCreationPaymentRefetchContext",
	"WAWebBizAdCreationSpecContext",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAdCreationMaybeOpenBillingWizardQuery.graphql",
	"useWAWebBizAdCreationOpenBillingWizard"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = u.useCallback, d = u.useContext, m = u.useMemo, p = u.useState, _ = e !== void 0 ? e : e = n("useWAWebBizAdCreationMaybeOpenBillingWizardQuery.graphql");
	function f(e, t) {
		var n, a, i, l, s, u, c, m, f, g, h, y, C = o("react-compiler-runtime").c(8), b = p(!1), v = b[0], S = b[1], R = d(r("WAWebBizAdCreationSpecContext")), L = (n = (a = R.currentValue.adAccountData) == null ? void 0 : a.paymentAccountID) != null ? n : "", E = (i = (l = R.currentValue.budgetData) == null ? void 0 : l.budget) != null ? i : 0, k = (s = (u = R.currentValue.adAccountData) == null ? void 0 : u.currency) != null ? s : "USD", I = (c = (m = R.currentValue.durationData) == null ? void 0 : m.durationInDays) != null ? c : 1, T = babelHelpers.extends({ asset_id: L }, o("WAWebBizAdCreationBudgetUtils").getBillingInfoQueryArgs(E, I, k)), D = o("WAWebBizAdCreationPaymentRefetchContext").useWAWebBizAdCreationPaymentRefetch(), x = D.billingFetchKey, $ = o("CometRelay").useLazyLoadQuery(_, T, {
			fetchKey: x,
			fetchPolicy: "store-and-network"
		}), P = $ == null || (f = $.billable_account_by_asset_id) == null || (f = f.billing_info) == null ? void 0 : f.required_action, N = P == null || (g = P.action) == null ? void 0 : g.wizard_name, M = (h = P == null || (y = P.action) == null ? void 0 : y.wizard_props_json) != null ? h : null, w = r("useWAWebBizAdCreationOpenBillingWizard")(t), A;
		C[0] !== w || C[1] !== e || C[2] !== N || C[3] !== M ? (A = function() {
			if (N == null) {
				e.onComplete();
				return;
			}
			S(!0), e.onWizardOpen == null || e.onWizardOpen(), w({
				label: null,
				wizardName: N,
				wizardPropsJSON: M
			}, function(t) {
				S(!1), t === "complete" ? e.onComplete() : e.onWizardClose == null || e.onWizardClose();
			}, function() {
				S(!1);
			});
		}, C[0] = w, C[1] = e, C[2] = N, C[3] = M, C[4] = A) : A = C[4];
		var F = A, O;
		return C[5] !== v || C[6] !== F ? (O = {
			isLoading: v,
			maybeLaunchBillingWizard: F
		}, C[5] = v, C[6] = F, C[7] = O) : O = C[7], O;
	}
	l.default = f;
}), 98);

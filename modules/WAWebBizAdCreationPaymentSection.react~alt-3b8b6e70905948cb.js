__d("WAWebBizAdCreationPaymentSection.react", [
	"fbt",
	"CometPlaceholder.react",
	"CometRelay",
	"WAWebBaseShimmerComponents.react",
	"WAWebBizAdCreationBudgetUtils",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationPaymentAdAccountRow.react",
	"WAWebBizAdCreationPaymentDescription.react",
	"WAWebBizAdCreationPaymentInfoModal.react",
	"WAWebBizAdCreationPaymentMethodRow.react",
	"WAWebBizAdCreationPaymentProfile.react",
	"WAWebBizAdCreationPaymentRefetchContext",
	"WAWebBizAdCreationPaymentSectionQuery.graphql",
	"WAWebBizAdCreationPaymentSection_adAccounts.graphql",
	"WAWebBizAdCreationPaymentSection_facebookProfile.graphql",
	"WAWebBizAdCreationSpecContext",
	"WAWebBizAdLogger",
	"WAWebBizCard.react",
	"WAWebFlex.react",
	"WAWebFlexBox.react",
	"WAWebNoop",
	"WDSBanner.react",
	"react",
	"useWAWebBizAdCreationOpenBillingWizard",
	"useWAWebInfoButtonUtil",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useContext, g = p.useEffect, h = p.useRef, y = e !== void 0 ? e : e = n("WAWebBizAdCreationPaymentSection_facebookProfile.graphql"), C = u !== void 0 ? u : u = n("WAWebBizAdCreationPaymentSection_adAccounts.graphql"), b = c !== void 0 ? c : c = n("WAWebBizAdCreationPaymentSectionQuery.graphql"), v = { fallback: {
		alignItems: "x6s0dn4",
		display: "x78zum5",
		justifyContent: "x1qughib",
		minHeight: "xbktkl8",
		$$css: !0
	} };
	function S(e) {
		var t, n, a, i, l, s, u, c, d, p, y, C = e.emailOnboardingDataRef, v = e.currency, S = e.paymentAccountID, R = e.selectedBudget, L = e.selectedDurationInDays, E = o("WAWebBizAdCreationPaymentRefetchContext").useWAWebBizAdCreationPaymentRefetch(), k = E.billingFetchKey, I = babelHelpers.extends({ asset_id: S }, o("WAWebBizAdCreationBudgetUtils").getBillingInfoQueryArgs(R, L, v)), T = o("CometRelay").useLazyLoadQuery(b, I, {
			fetchKey: k,
			fetchPolicy: "network-only"
		}), D = r("useWAWebBizAdCreationOpenBillingWizard")(C), x = _(async function(e) {
			await D(e, r("WAWebNoop"));
		}, [D]), $ = (t = T.billable_account_by_asset_id) == null || (t = t.billing_info) == null ? void 0 : t.payment_section_details, P = (n = T.billable_account_by_asset_id) == null || (n = n.billing_info) == null ? void 0 : n.required_action, N = P == null || (a = P.action) == null ? void 0 : a.wizard_name, M = N != null, w = P == null || (i = P.action) == null ? void 0 : i.wizard_props_json, A = (l = P == null || (s = P.message) == null ? void 0 : s.headline) != null ? l : null, F = (u = P == null || (c = P.message) == null ? void 0 : c.body) != null ? u : null, O = (d = P == null || (p = P.action) == null ? void 0 : p.label) != null ? d : null, B = f(r("WAWebBizAdCreationLoggerContext")), W = f(r("WAWebBizAdCreationSpecContext")), q = W == null || (y = W.currentValue) == null || (y = y.adAccountData) == null ? void 0 : y.id, U = h(!1), V = M && F != null;
		g(function() {
			V && B != null && !U.current && (U.current = !0, r("WAWebBizAdLogger").log({
				adAccountID: q,
				event: "payment_required_action_banner_impression",
				loggerContext: B
			}));
		}, [
			q,
			B,
			V
		]);
		var H = _(function() {
			B != null && r("WAWebBizAdLogger").log({
				adAccountID: q,
				event: "payment_required_action_banner_cta_click",
				loggerContext: B
			}), N != null && x({
				label: O,
				wizardName: N,
				wizardPropsJSON: w
			});
		}, [
			q,
			B,
			N,
			O,
			w,
			x
		]);
		return $ == null ? null : m.jsxs(m.Fragment, { children: [
			m.jsx(r("WAWebBizAdCreationPaymentMethodRow.react"), {
				openBillingWizard: x,
				paymentSectionRef: $
			}),
			m.jsx(r("WAWebBizAdCreationPaymentDescription.react"), {
				openBillingWizard: x,
				paymentSectionRef: $
			}),
			V && F != null ? m.jsx("div", {
				className: "x1380le5 x14mko6t xefnzgg x1uvdrpn",
				children: m.jsx(r("WDSBanner.react"), {
					actionText: O != null ? O : void 0,
					body: F,
					onAction: O != null ? H : void 0,
					title: A,
					type: "error"
				})
			}) : null
		] });
	}
	S.displayName = S.name + " [from " + i.id + "]";
	var R = r("withWAWebBizAdCreationSpecContext")(S, function(e) {
		return {
			currency: e.adAccountData.currency,
			paymentAccountID: e.adAccountData.paymentAccountID,
			selectedBudget: e.budgetData.budget,
			selectedDurationInDays: e.durationData.durationInDays
		};
	});
	function L() {
		return m.jsxs(o("WAWebFlexBox.react").FlexRow, {
			xstyle: v.fallback,
			children: [m.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
				height: 20,
				width: 210
			}), m.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
				height: 40,
				width: 80
			})]
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t, n, a, l = e.adAccountsRef, u = e.emailOnboardingDataRef, c = e.facebookProfileRef, d = o("CometRelay").useFragment(y, c), p = o("CometRelay").useFragment(C, l), _ = ((t = p == null || (n = p.wa_ctwa_ad_accounts) == null ? void 0 : n.count) != null ? t : 0) > 1, b = r("useWAWebInfoButtonUtil")(r("WAWebBizAdCreationPaymentInfoModal.react")), v = f(r("WAWebBizAdCreationLoggerContext")), S = f(r("WAWebBizAdCreationSpecContext")), E = S == null || (a = S.currentValue) == null || (a = a.adAccountData) == null ? void 0 : a.id, k = h(!1);
		return g(function() {
			v != null && !k.current && (k.current = !0, r("WAWebBizAdLogger").log({
				adAccountID: E,
				event: "payment_section_impression",
				loggerContext: v
			}));
		}, [E, v]), m.jsx(r("WAWebBizCard.react"), {
			header: s._(
				/*BTDS*/
				""
			),
			titleAccessory: b,
			children: m.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				children: [
					m.jsx(r("WAWebBizAdCreationPaymentProfile.react"), { facebookProfileRef: d }),
					_ ? m.jsx(r("WAWebBizAdCreationPaymentAdAccountRow.react"), { adAccountsRef: p }) : null,
					m.jsx(r("CometPlaceholder.react"), {
						fallback: m.jsx(L, {}),
						name: i.id,
						children: m.jsx(R, { emailOnboardingDataRef: u })
					})
				]
			})
		});
	}
	E.displayName = E.name + " [from " + i.id + "]", l.default = E;
}), 226);

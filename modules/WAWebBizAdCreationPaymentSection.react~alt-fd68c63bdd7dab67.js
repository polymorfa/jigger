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
	"asyncToGeneratorRuntime",
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
		var t, a, i, l, s, u, c, d, p, y, C, v = e.emailOnboardingDataRef, S = e.currency, R = e.paymentAccountID, L = e.selectedBudget, E = e.selectedDurationInDays, k = o("WAWebBizAdCreationPaymentRefetchContext").useWAWebBizAdCreationPaymentRefetch(), I = k.billingFetchKey, T = babelHelpers.extends({ asset_id: R }, o("WAWebBizAdCreationBudgetUtils").getBillingInfoQueryArgs(L, E, S)), D = o("CometRelay").useLazyLoadQuery(b, T, {
			fetchKey: I,
			fetchPolicy: "network-only"
		}), x = r("useWAWebBizAdCreationOpenBillingWizard")(v), $ = _((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				yield x(e, r("WAWebNoop"));
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), [x]), P = (t = D.billable_account_by_asset_id) == null || (t = t.billing_info) == null ? void 0 : t.payment_section_details, N = (a = D.billable_account_by_asset_id) == null || (a = a.billing_info) == null ? void 0 : a.required_action, M = N == null || (i = N.action) == null ? void 0 : i.wizard_name, w = M != null, A = N == null || (l = N.action) == null ? void 0 : l.wizard_props_json, F = (s = N == null || (u = N.message) == null ? void 0 : u.headline) != null ? s : null, O = (c = N == null || (d = N.message) == null ? void 0 : d.body) != null ? c : null, B = (p = N == null || (y = N.action) == null ? void 0 : y.label) != null ? p : null, W = f(r("WAWebBizAdCreationLoggerContext")), q = f(r("WAWebBizAdCreationSpecContext")), U = q == null || (C = q.currentValue) == null || (C = C.adAccountData) == null ? void 0 : C.id, V = h(!1), H = w && O != null;
		g(function() {
			H && W != null && !V.current && (V.current = !0, r("WAWebBizAdLogger").log({
				adAccountID: U,
				event: "payment_required_action_banner_impression",
				loggerContext: W
			}));
		}, [
			U,
			W,
			H
		]);
		var G = _(function() {
			W != null && r("WAWebBizAdLogger").log({
				adAccountID: U,
				event: "payment_required_action_banner_cta_click",
				loggerContext: W
			}), M != null && $({
				label: B,
				wizardName: M,
				wizardPropsJSON: A
			});
		}, [
			U,
			W,
			M,
			B,
			A,
			$
		]);
		return P == null ? null : m.jsxs(m.Fragment, { children: [
			m.jsx(r("WAWebBizAdCreationPaymentMethodRow.react"), {
				openBillingWizard: $,
				paymentSectionRef: P
			}),
			m.jsx(r("WAWebBizAdCreationPaymentDescription.react"), {
				openBillingWizard: $,
				paymentSectionRef: P
			}),
			H && O != null ? m.jsx("div", {
				className: "x1380le5 x14mko6t xefnzgg x1uvdrpn",
				children: m.jsx(r("WDSBanner.react"), {
					actionText: B != null ? B : void 0,
					body: O,
					onAction: B != null ? G : void 0,
					title: F,
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

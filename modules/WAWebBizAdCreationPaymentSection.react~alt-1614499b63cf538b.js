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
	"react-compiler-runtime",
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
		var t, n, a, i, l, s, u, c, d, p, _, y = o("react-compiler-runtime").c(28), C = e.emailOnboardingDataRef, v = e.currency, S = e.paymentAccountID, R = e.selectedBudget, L = e.selectedDurationInDays, E = o("WAWebBizAdCreationPaymentRefetchContext").useWAWebBizAdCreationPaymentRefetch(), k = E.billingFetchKey, I = babelHelpers.extends({ asset_id: S }, o("WAWebBizAdCreationBudgetUtils").getBillingInfoQueryArgs(R, L, v)), T = o("CometRelay").useLazyLoadQuery(b, I, {
			fetchKey: k,
			fetchPolicy: "network-only"
		}), D = r("useWAWebBizAdCreationOpenBillingWizard")(C), x;
		y[0] !== D ? (x = async function(t) {
			await D(t, r("WAWebNoop"));
		}, y[0] = D, y[1] = x) : x = y[1];
		var $ = x, P = (t = T.billable_account_by_asset_id) == null || (t = t.billing_info) == null ? void 0 : t.payment_section_details, N = (n = T.billable_account_by_asset_id) == null || (n = n.billing_info) == null ? void 0 : n.required_action, M = N == null || (a = N.action) == null ? void 0 : a.wizard_name, w = M != null, A = N == null || (i = N.action) == null ? void 0 : i.wizard_props_json, F = (l = N == null || (s = N.message) == null ? void 0 : s.headline) != null ? l : null, O = (u = N == null || (c = N.message) == null ? void 0 : c.body) != null ? u : null, B = (d = N == null || (p = N.action) == null ? void 0 : p.label) != null ? d : null, W = f(r("WAWebBizAdCreationLoggerContext")), q = f(r("WAWebBizAdCreationSpecContext")), U = q == null || (_ = q.currentValue) == null || (_ = _.adAccountData) == null ? void 0 : _.id, V = h(!1), H = w && O != null, G, z;
		y[2] !== U || y[3] !== W || y[4] !== H ? (G = function() {
			H && W != null && !V.current && (V.current = !0, r("WAWebBizAdLogger").log({
				adAccountID: U,
				event: "payment_required_action_banner_impression",
				loggerContext: W
			}));
		}, z = [
			U,
			W,
			H
		], y[2] = U, y[3] = W, y[4] = H, y[5] = G, y[6] = z) : (G = y[5], z = y[6]), g(G, z);
		var j;
		y[7] !== U || y[8] !== B || y[9] !== W || y[10] !== $ || y[11] !== M || y[12] !== A ? (j = function() {
			W != null && r("WAWebBizAdLogger").log({
				adAccountID: U,
				event: "payment_required_action_banner_cta_click",
				loggerContext: W
			}), M != null && $({
				label: B,
				wizardName: M,
				wizardPropsJSON: A
			});
		}, y[7] = U, y[8] = B, y[9] = W, y[10] = $, y[11] = M, y[12] = A, y[13] = j) : j = y[13];
		var K = j;
		if (P == null) return null;
		var Q, X;
		y[14] !== $ || y[15] !== P ? (Q = m.jsx(r("WAWebBizAdCreationPaymentMethodRow.react"), {
			openBillingWizard: $,
			paymentSectionRef: P
		}), X = m.jsx(r("WAWebBizAdCreationPaymentDescription.react"), {
			openBillingWizard: $,
			paymentSectionRef: P
		}), y[14] = $, y[15] = P, y[16] = Q, y[17] = X) : (Q = y[16], X = y[17]);
		var Y;
		y[18] !== B || y[19] !== O || y[20] !== F || y[21] !== K || y[22] !== H ? (Y = H && O != null ? m.jsx("div", {
			className: "x1380le5 x14mko6t xefnzgg x1uvdrpn",
			children: m.jsx(r("WDSBanner.react"), {
				actionText: B != null ? B : void 0,
				body: O,
				onAction: B != null ? K : void 0,
				title: F,
				type: "error"
			})
		}) : null, y[18] = B, y[19] = O, y[20] = F, y[21] = K, y[22] = H, y[23] = Y) : Y = y[23];
		var J;
		return y[24] !== Q || y[25] !== X || y[26] !== Y ? (J = m.jsxs(m.Fragment, { children: [
			Q,
			X,
			Y
		] }), y[24] = Q, y[25] = X, y[26] = Y, y[27] = J) : J = y[27], J;
	}
	var R = r("withWAWebBizAdCreationSpecContext")(S, function(e) {
		return {
			currency: e.adAccountData.currency,
			paymentAccountID: e.adAccountData.paymentAccountID,
			selectedBudget: e.budgetData.budget,
			selectedDurationInDays: e.durationData.durationInDays
		};
	});
	function L() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = m.jsxs(o("WAWebFlexBox.react").FlexRow, {
			xstyle: v.fallback,
			children: [m.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
				height: 20,
				width: 210
			}), m.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
				height: 40,
				width: 80
			})]
		}), e[0] = t) : t = e[0], t;
	}
	function E(e) {
		var t, n, a, l = o("react-compiler-runtime").c(20), u = e.adAccountsRef, c = e.emailOnboardingDataRef, d = e.facebookProfileRef, p = o("CometRelay").useFragment(y, d), _ = o("CometRelay").useFragment(C, u), b = ((t = _ == null || (n = _.wa_ctwa_ad_accounts) == null ? void 0 : n.count) != null ? t : 0) > 1, v = r("useWAWebInfoButtonUtil")(r("WAWebBizAdCreationPaymentInfoModal.react")), S = f(r("WAWebBizAdCreationLoggerContext")), E = f(r("WAWebBizAdCreationSpecContext")), k = E == null || (a = E.currentValue) == null || (a = a.adAccountData) == null ? void 0 : a.id, I = h(!1), T, D;
		l[0] !== k || l[1] !== S ? (T = function() {
			S != null && !I.current && (I.current = !0, r("WAWebBizAdLogger").log({
				adAccountID: k,
				event: "payment_section_impression",
				loggerContext: S
			}));
		}, D = [k, S], l[0] = k, l[1] = S, l[2] = T, l[3] = D) : (T = l[2], D = l[3]), g(T, D);
		var x;
		l[4] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), l[4] = x) : x = l[4];
		var $;
		l[5] !== p ? ($ = m.jsx(r("WAWebBizAdCreationPaymentProfile.react"), { facebookProfileRef: p }), l[5] = p, l[6] = $) : $ = l[6];
		var P;
		l[7] !== _ || l[8] !== b ? (P = b ? m.jsx(r("WAWebBizAdCreationPaymentAdAccountRow.react"), { adAccountsRef: _ }) : null, l[7] = _, l[8] = b, l[9] = P) : P = l[9];
		var N;
		l[10] === Symbol.for("react.memo_cache_sentinel") ? (N = m.jsx(L, {}), l[10] = N) : N = l[10];
		var M;
		l[11] !== c ? (M = m.jsx(r("CometPlaceholder.react"), {
			fallback: N,
			name: i.id,
			children: m.jsx(R, { emailOnboardingDataRef: c })
		}), l[11] = c, l[12] = M) : M = l[12];
		var w;
		l[13] !== $ || l[14] !== P || l[15] !== M ? (w = m.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			children: [
				$,
				P,
				M
			]
		}), l[13] = $, l[14] = P, l[15] = M, l[16] = w) : w = l[16];
		var A;
		return l[17] !== v || l[18] !== w ? (A = m.jsx(r("WAWebBizCard.react"), {
			header: x,
			titleAccessory: v,
			children: w
		}), l[17] = v, l[18] = w, l[19] = A) : A = l[19], A;
	}
	l.default = E;
}), 226);

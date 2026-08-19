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
		var t, a, i, l, s, u, c, d, p, _, y, C = o("react-compiler-runtime").c(28), v = e.emailOnboardingDataRef, S = e.currency, R = e.paymentAccountID, L = e.selectedBudget, E = e.selectedDurationInDays, k = o("WAWebBizAdCreationPaymentRefetchContext").useWAWebBizAdCreationPaymentRefetch(), I = k.billingFetchKey, T = babelHelpers.extends({ asset_id: R }, o("WAWebBizAdCreationBudgetUtils").getBillingInfoQueryArgs(L, E, S)), D = o("CometRelay").useLazyLoadQuery(b, T, {
			fetchKey: I,
			fetchPolicy: "network-only"
		}), x = r("useWAWebBizAdCreationOpenBillingWizard")(v), $;
		C[0] !== x ? ($ = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				yield x(e, r("WAWebNoop"));
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), C[0] = x, C[1] = $) : $ = C[1];
		var P = $, N = (t = D.billable_account_by_asset_id) == null || (t = t.billing_info) == null ? void 0 : t.payment_section_details, M = (a = D.billable_account_by_asset_id) == null || (a = a.billing_info) == null ? void 0 : a.required_action, w = M == null || (i = M.action) == null ? void 0 : i.wizard_name, A = w != null, F = M == null || (l = M.action) == null ? void 0 : l.wizard_props_json, O = (s = M == null || (u = M.message) == null ? void 0 : u.headline) != null ? s : null, B = (c = M == null || (d = M.message) == null ? void 0 : d.body) != null ? c : null, W = (p = M == null || (_ = M.action) == null ? void 0 : _.label) != null ? p : null, q = f(r("WAWebBizAdCreationLoggerContext")), U = f(r("WAWebBizAdCreationSpecContext")), V = U == null || (y = U.currentValue) == null || (y = y.adAccountData) == null ? void 0 : y.id, H = h(!1), G = A && B != null, z, j;
		C[2] !== V || C[3] !== q || C[4] !== G ? (z = function() {
			G && q != null && !H.current && (H.current = !0, r("WAWebBizAdLogger").log({
				adAccountID: V,
				event: "payment_required_action_banner_impression",
				loggerContext: q
			}));
		}, j = [
			V,
			q,
			G
		], C[2] = V, C[3] = q, C[4] = G, C[5] = z, C[6] = j) : (z = C[5], j = C[6]), g(z, j);
		var K;
		C[7] !== V || C[8] !== W || C[9] !== q || C[10] !== P || C[11] !== w || C[12] !== F ? (K = function() {
			q != null && r("WAWebBizAdLogger").log({
				adAccountID: V,
				event: "payment_required_action_banner_cta_click",
				loggerContext: q
			}), w != null && P({
				label: W,
				wizardName: w,
				wizardPropsJSON: F
			});
		}, C[7] = V, C[8] = W, C[9] = q, C[10] = P, C[11] = w, C[12] = F, C[13] = K) : K = C[13];
		var Q = K;
		if (N == null) return null;
		var X, Y;
		C[14] !== P || C[15] !== N ? (X = m.jsx(r("WAWebBizAdCreationPaymentMethodRow.react"), {
			openBillingWizard: P,
			paymentSectionRef: N
		}), Y = m.jsx(r("WAWebBizAdCreationPaymentDescription.react"), {
			openBillingWizard: P,
			paymentSectionRef: N
		}), C[14] = P, C[15] = N, C[16] = X, C[17] = Y) : (X = C[16], Y = C[17]);
		var J;
		C[18] !== W || C[19] !== B || C[20] !== O || C[21] !== Q || C[22] !== G ? (J = G && B != null ? m.jsx("div", {
			className: "x1380le5 x14mko6t xefnzgg x1uvdrpn",
			children: m.jsx(r("WDSBanner.react"), {
				actionText: W != null ? W : void 0,
				body: B,
				onAction: W != null ? Q : void 0,
				title: O,
				type: "error"
			})
		}) : null, C[18] = W, C[19] = B, C[20] = O, C[21] = Q, C[22] = G, C[23] = J) : J = C[23];
		var Z;
		return C[24] !== X || C[25] !== Y || C[26] !== J ? (Z = m.jsxs(m.Fragment, { children: [
			X,
			Y,
			J
		] }), C[24] = X, C[25] = Y, C[26] = J, C[27] = Z) : Z = C[27], Z;
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

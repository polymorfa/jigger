__d("WAWebBizBroadcastPaymentMethodSection.react", [
	"WAWebBizBroadcastBusinessInfoContext.react",
	"WAWebBizPaymentMethodLabelContent.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebFlex.react",
	"WDSBanner.react",
	"WDSButton.react",
	"WDSSpinner.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebBizBroadcastBillingInfo",
	"useWAWebBizBroadcastBillingWizard"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useRef, p = {
		container: {
			justifyContent: "x1qughib",
			width: "xh8yej3",
			$$css: !0
		},
		disclaimerRow: {
			paddingTop: "x16ovd2e",
			$$css: !0
		}
	};
	function _(e) {
		var t, n, a, i = o("react-compiler-runtime").c(57), l = e.budget, u = e.entryPoint, c = e.onBillingInfoChanged, _ = o("WAWebBizBroadcastBusinessInfoContext.react").useWAWebBizBroadcastBusinessInfoContext(), f = _.adAccountId, g = _.isLoading, h = f != null ? f : "", y;
		i[0] !== l || i[1] !== h ? (y = {
			assetId: h,
			budget: l
		}, i[0] = l, i[1] = h, i[2] = y) : y = i[2];
		var C = o("useWAWebBizBroadcastBillingInfo").useWAWebBizBroadcastBillingInfo(y), b = C.billingInfo, v = C.isLoading, S = C.primaryAction, R = C.refetch, L = C.requiredAction, E = r("useWAWebBizBroadcastBillingWizard")(f, u, l), k = E.openBillingWizard, I = b == null || (t = b.required_action) == null ? void 0 : t.message, T = (n = I == null ? void 0 : I.body) != null ? n : null, D = (a = L == null ? void 0 : L.label) != null ? a : null, x = (L == null ? void 0 : L.wizardName) != null, $ = x && T != null, P;
		i[3] !== u || i[4] !== c || i[5] !== R ? (P = function(t) {
			if (u != null) {
				var e;
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.billingWizardCompleted(u, {
					phase: t.phase,
					result: t.success ? "success" : "failure",
					return_code: (e = t.returnCode) != null ? e : void 0
				});
			}
			t.success && (R(), c == null || c());
		}, i[3] = u, i[4] = c, i[5] = R, i[6] = P) : P = i[6];
		var N = P, M;
		i[7] !== u || i[8] !== N || i[9] !== k || i[10] !== S ? (M = function() {
			S != null && (u != null && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.paymentMethodChangeClicked(u), k(S, N));
		}, i[7] = u, i[8] = N, i[9] = k, i[10] = S, i[11] = M) : M = i[11];
		var w = M, A;
		i[12] !== u || i[13] !== N || i[14] !== k || i[15] !== L ? (A = function() {
			L != null && (u != null && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.paymentRequiredActionClicked(u), k(L, N));
		}, i[12] = u, i[13] = N, i[14] = k, i[15] = L, i[16] = A) : A = i[16];
		var F = A, O = b == null ? void 0 : b.payment_section_details, B = m(!1), W;
		i[17] !== u || i[18] !== x || i[19] !== v || i[20] !== g || i[21] !== (O == null ? void 0 : O.type) || i[22] !== (S == null ? void 0 : S.label) || i[23] !== (S == null ? void 0 : S.wizardName) || i[24] !== (L == null ? void 0 : L.wizardName) ? (W = function() {
			if (!g && !v && !B.current && u != null) {
				var e, t, n;
				B.current = !0, o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.paymentMethodSectionViewed(u, {
					has_primary_action: (S == null ? void 0 : S.label) != null,
					has_required_action: x,
					payment_section_type: (e = O == null ? void 0 : O.type) != null ? e : void 0,
					primary_action_wizard_name: (t = S == null ? void 0 : S.wizardName) != null ? t : void 0,
					required_action_wizard_name: (n = L == null ? void 0 : L.wizardName) != null ? n : void 0
				});
			}
		}, i[17] = u, i[18] = x, i[19] = v, i[20] = g, i[21] = O == null ? void 0 : O.type, i[22] = S == null ? void 0 : S.label, i[23] = S == null ? void 0 : S.wizardName, i[24] = L == null ? void 0 : L.wizardName, i[25] = W) : W = i[25];
		var q = L == null ? void 0 : L.wizardName, U;
		if (i[26] !== u || i[27] !== x || i[28] !== v || i[29] !== g || i[30] !== O || i[31] !== S || i[32] !== q ? (U = [
			g,
			v,
			u,
			S,
			x,
			O,
			q
		], i[26] = u, i[27] = x, i[28] = v, i[29] = g, i[30] = O, i[31] = S, i[32] = q, i[33] = U) : U = i[33], d(W, U), g || v) {
			var V;
			return i[34] === Symbol.for("react.memo_cache_sentinel") ? (V = s.jsx("div", {
				className: "x6s0dn4 x78zum5 xl56j7k xbktkl8",
				children: s.jsx(r("WDSSpinner.react"), { size: 32 })
			}), i[34] = V) : V = i[34], V;
		}
		var H;
		i[35] !== O ? (H = O != null ? {
			label: O.label,
			labelAx: O.label_ax,
			logos: O.logos
		} : null, i[35] = O, i[36] = H) : H = i[36];
		var G = H, z = O == null ? void 0 : O.description, j;
		i[37] !== G ? (j = s.jsx(r("WAWebBizPaymentMethodLabelContent.react"), { data: G }), i[37] = G, i[38] = j) : j = i[38];
		var K;
		i[39] !== w || i[40] !== S ? (K = (S == null ? void 0 : S.label) != null && s.jsx(r("WDSButton.react"), {
			variant: "borderless",
			size: "medium",
			testid: "biz-broadcasts-payment-add-method-button",
			label: S.label,
			onPress: w
		}), i[39] = w, i[40] = S, i[41] = K) : K = i[41];
		var Q;
		i[42] !== j || i[43] !== K ? (Q = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: p.container,
			children: [j, K]
		}), i[42] = j, i[43] = K, i[44] = Q) : Q = i[44];
		var X;
		i[45] !== z ? (X = z != null && s.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: p.disclaimerRow,
			children: s.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: z
			})
		}), i[45] = z, i[46] = X) : X = i[46];
		var Y;
		i[47] !== D || i[48] !== T || i[49] !== F || i[50] !== (I == null ? void 0 : I.headline) || i[51] !== $ ? (Y = $ && T != null && s.jsx("div", {
			className: "xkh2ocl x1380le5",
			children: s.jsx(r("WDSBanner.react"), {
				type: "error",
				testid: "biz-broadcasts-payment-required-action-banner",
				title: I == null ? void 0 : I.headline,
				body: T,
				actionText: D != null ? D : void 0,
				onAction: D != null ? F : void 0
			})
		}), i[47] = D, i[48] = T, i[49] = F, i[50] = I == null ? void 0 : I.headline, i[51] = $, i[52] = Y) : Y = i[52];
		var J;
		return i[53] !== Q || i[54] !== X || i[55] !== Y ? (J = s.jsxs(s.Fragment, { children: [
			Q,
			X,
			Y
		] }), i[53] = Q, i[54] = X, i[55] = Y, i[56] = J) : J = i[56], J;
	}
	l.default = _;
}), 98);

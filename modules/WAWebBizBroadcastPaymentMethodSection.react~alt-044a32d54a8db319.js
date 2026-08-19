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
		var t, n, a, i = e.budget, l = e.entryPoint, u = e.onBillingInfoChanged, _ = o("WAWebBizBroadcastBusinessInfoContext.react").useWAWebBizBroadcastBusinessInfoContext(), f = _.adAccountId, g = _.isLoading, h = o("useWAWebBizBroadcastBillingInfo").useWAWebBizBroadcastBillingInfo({
			assetId: f != null ? f : "",
			budget: i
		}), y = h.billingInfo, C = h.isLoading, b = h.primaryAction, v = h.refetch, S = h.requiredAction, R = r("useWAWebBizBroadcastBillingWizard")(f, l, i), L = R.openBillingWizard, E = y == null || (t = y.required_action) == null ? void 0 : t.message, k = (n = E == null ? void 0 : E.body) != null ? n : null, I = (a = S == null ? void 0 : S.label) != null ? a : null, T = (S == null ? void 0 : S.wizardName) != null, D = T && k != null, x = c(function(e) {
			if (l != null) {
				var t;
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.billingWizardCompleted(l, {
					phase: e.phase,
					result: e.success ? "success" : "failure",
					return_code: (t = e.returnCode) != null ? t : void 0
				});
			}
			e.success && (v(), u == null || u());
		}, [
			v,
			u,
			l
		]), $ = c(function() {
			b != null && (l != null && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.paymentMethodChangeClicked(l), L(b, x));
		}, [
			L,
			b,
			x,
			l
		]), P = c(function() {
			S != null && (l != null && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.paymentRequiredActionClicked(l), L(S, x));
		}, [
			L,
			S,
			x,
			l
		]), N = y == null ? void 0 : y.payment_section_details, M = m(!1);
		if (d(function() {
			if (!g && !C && !M.current && l != null) {
				var e, t, n;
				M.current = !0, o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.paymentMethodSectionViewed(l, {
					has_primary_action: (b == null ? void 0 : b.label) != null,
					has_required_action: T,
					payment_section_type: (e = N == null ? void 0 : N.type) != null ? e : void 0,
					primary_action_wizard_name: (t = b == null ? void 0 : b.wizardName) != null ? t : void 0,
					required_action_wizard_name: (n = S == null ? void 0 : S.wizardName) != null ? n : void 0
				});
			}
		}, [
			g,
			C,
			l,
			b,
			T,
			N,
			S == null ? void 0 : S.wizardName
		]), g || C) return s.jsx("div", {
			className: "x6s0dn4 x78zum5 xl56j7k xbktkl8",
			children: s.jsx(r("WDSSpinner.react"), { size: 32 })
		});
		var w = N != null ? {
			label: N.label,
			labelAx: N.label_ax,
			logos: N.logos
		} : null, A = N == null ? void 0 : N.description;
		return s.jsxs(s.Fragment, { children: [
			s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: p.container,
				children: [s.jsx(r("WAWebBizPaymentMethodLabelContent.react"), { data: w }), (b == null ? void 0 : b.label) != null && s.jsx(r("WDSButton.react"), {
					variant: "borderless",
					size: "medium",
					testid: "biz-broadcasts-payment-add-method-button",
					label: b.label,
					onPress: $
				})]
			}),
			A != null && s.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: p.disclaimerRow,
				children: s.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDeemphasized",
					children: A
				})
			}),
			D && k != null && s.jsx("div", {
				className: "xkh2ocl x1380le5",
				children: s.jsx(r("WDSBanner.react"), {
					type: "error",
					testid: "biz-broadcasts-payment-required-action-banner",
					title: E == null ? void 0 : E.headline,
					body: k,
					actionText: I != null ? I : void 0,
					onAction: I != null ? P : void 0
				})
			})
		] });
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);

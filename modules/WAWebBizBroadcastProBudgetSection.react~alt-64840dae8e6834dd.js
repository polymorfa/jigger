__d("WAWebBizBroadcastProBudgetSection.react", [
	"CometRelay",
	"WAWebBizBroadcastProBudgetSection_adAccount.graphql",
	"WAWebBizBroadcastProBudgetStrings",
	"WAWebBizBroadcastProCurrencyUtils",
	"WAWebBizBroadcastProDefaultCostModal.react",
	"WAWebBizBroadcastProDefaultCostQuery",
	"WAWebBizBroadcastProSuggestedBudgetModal.react",
	"WAWebBizBroadcastProValidationUtils",
	"WAWebBizCard.react",
	"WAWebBizPaymentMethodLabelContent.react",
	"WAWebFlex.react",
	"WDSBanner.react",
	"WDSButton.react",
	"WDSIconIcInfo.react",
	"WDSSpinner.react",
	"WDSText.react",
	"WDSTextField.react",
	"react",
	"useWAWebBizBroadcastBillingWizard"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useMemo, p = c.useState, _ = c.useTransition, f = {
		lineItemsContainer: {
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			rowGap: "x1qvou4u",
			$$css: !0
		},
		paymentRow: {
			justifyContent: "x1qughib",
			width: "xh8yej3",
			$$css: !0
		},
		spinnerContainer: {
			minHeight: "xseoqlg",
			$$css: !0
		},
		subsectionContainer: {
			paddingTop: "x1p57kb1",
			$$css: !0
		},
		subsectionContent: {
			marginTop: "x1380le5",
			$$css: !0
		},
		infoLinkButton: {
			columnGap: "x1aj3ljl",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			marginTop: "x1380le5",
			$$css: !0
		}
	}, g = e !== void 0 ? e : e = n("WAWebBizBroadcastProBudgetSection_adAccount.graphql");
	function h(e) {
		var t, n, a, i, l, s, c = e.adAccountRef, h = e.onBillingInfoChanged, y = e.onCampaignBudgetChange, C = e.onMaxBidChange, b = e.wabaId, v = o("CometRelay").useRefetchableFragment(g, c), S = v[0], R = v[1], L = _(), E = L[0], k = L[1], I = (t = S == null ? void 0 : S.currency_code_enum) != null ? t : "USD", T = m(function() {
			return o("WAWebBizBroadcastProCurrencyUtils").getCurrencySymbol(I);
		}, [I]), D = m(function() {
			var e;
			return (e = o("WAWebBizBroadcastProCurrencyUtils").getCurrencyISO(I)) != null ? e : I;
		}, [I]), x = S == null || (n = S.payment_account) == null ? void 0 : n.id, $ = S == null ? void 0 : S.billing_info, P = $ == null ? void 0 : $.payment_section_details, N = m(function() {
			return (P == null ? void 0 : P.primary_action) != null ? {
				label: P.primary_action.label,
				wizardName: P.primary_action.wizard_name,
				wizardPropsJSON: P.primary_action.wizard_props_json
			} : null;
		}, [P]), M = m(function() {
			var e;
			return ($ == null || (e = $.required_action) == null ? void 0 : e.action) != null ? {
				label: $.required_action.action.label,
				wizardName: $.required_action.action.wizard_name,
				wizardPropsJSON: $.required_action.action.wizard_props_json
			} : null;
		}, [$]), w = p(""), A = w[0], F = w[1], O = p(null), B = O[0], W = O[1], q = p(""), U = q[0], V = q[1], H = p(!1), G = H[0], z = H[1], j = o("CometRelay").useQueryLoader(r("WAWebBizBroadcastProDefaultCostQuery")), K = j[0], Q = j[1], X = j[2], Y = r("useWAWebBizBroadcastBillingWizard")(x, void 0, void 0, !0), J = Y.openBillingWizard, Z = d(function(e) {
			if (e.success) {
				var t = S == null ? void 0 : S.id;
				t != null && (k(function() {
					R({ id: t }, { fetchPolicy: "network-only" });
				}), h == null || h());
			}
		}, [
			h,
			R,
			S == null ? void 0 : S.id
		]), ee = d(function() {
			N != null && J(N, Z);
		}, [
			N,
			J,
			Z
		]), te = d(function() {
			M != null && J(M, Z);
		}, [
			M,
			J,
			Z
		]), ne = d(function(e) {
			var t = o("WAWebBizBroadcastProValidationUtils").validateNumericInput(e);
			t.status === o("WAWebBizBroadcastProValidationUtils").ValidationStatus.VALID ? (F(e), W(null), C == null || C(e)) : W(t.errorMessage);
		}, [C]), re = d(function() {
			var e = parseFloat(A);
			if (Number.isFinite(e)) {
				var t = e.toFixed(4);
				F(t), W(null), C == null || C(t);
			}
		}, [A, C]), oe = d(function(e) {
			var t = o("WAWebBizBroadcastProValidationUtils").validateNumericInput(e);
			t.status === o("WAWebBizBroadcastProValidationUtils").ValidationStatus.VALID && (V(e), y == null || y(e));
		}, [y]), ae = d(function() {
			var e = parseFloat(U);
			if (Number.isFinite(e)) {
				var t = e.toFixed(2);
				V(t), y == null || y(t);
			}
		}, [U, y]), ie = d(function() {
			z(!0);
		}, []), le = d(function() {
			z(!1);
		}, []), se = d(function(e) {
			V(e), y == null || y(e);
		}, [y]), ue = d(function() {
			b != null && K == null && Q({ wabaID: b });
		}, [
			b,
			Q,
			K
		]), ce = d(function() {
			X();
		}, [X]), de = d(function(e) {
			F(e), W(null), C == null || C(e);
		}, [C]);
		if (E || S == null) return u.jsx("div", {
			className: "x19aeb6u xvpt6g3 xh8yej3",
			children: u.jsx(r("WAWebBizCard.react"), {
				header: o("WAWebBizBroadcastProBudgetStrings").getBudgetSectionTitle(),
				children: u.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					xstyle: f.spinnerContainer,
					children: u.jsx(r("WDSSpinner.react"), { size: 32 })
				})
			})
		});
		var me = P != null ? {
			label: P.label,
			labelAx: P.label_ax,
			logos: P.logos
		} : null, pe = $ == null || (a = $.required_action) == null ? void 0 : a.message, _e = (M == null ? void 0 : M.wizardName) != null, fe = (i = pe == null ? void 0 : pe.headline) != null ? i : o("WAWebBizBroadcastProBudgetStrings").getPaymentMethodRequiredTitle(), ge = (l = pe == null ? void 0 : pe.body) != null ? l : o("WAWebBizBroadcastProBudgetStrings").getPaymentMethodRequiredBody(), he = (s = M == null ? void 0 : M.label) != null ? s : o("WAWebBizBroadcastProBudgetStrings").getAddPaymentMethodLabel();
		return u.jsxs(u.Fragment, { children: [u.jsx("div", {
			className: "x19aeb6u xvpt6g3 xh8yej3",
			children: u.jsxs(r("WAWebBizCard.react"), {
				header: o("WAWebBizBroadcastProBudgetStrings").getBudgetSectionTitle(),
				children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: f.subsectionContainer,
					children: [
						u.jsx(r("WDSText.react"), {
							type: "Body1Emphasized",
							colorName: "contentDefault",
							children: o("WAWebBizBroadcastProBudgetStrings").getMaximumBidTitle()
						}),
						u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: o("WAWebBizBroadcastProBudgetStrings").getMaximumBidDescription()
						}),
						u.jsxs(o("WAWebFlex.react").FlexColumn, {
							align: "stretch",
							xstyle: f.subsectionContent,
							children: [
								u.jsx(r("WDSTextField.react"), {
									testid: "bb_pro_budget_max_bid_input",
									label: o("WAWebBizBroadcastProBudgetStrings").getMaximumBidInputLabel(),
									floatingLabel: !1,
									prefix: T,
									suffix: D,
									value: A,
									onValueChange: ne,
									onBlur: re,
									error: B != null,
									errorText: B
								}),
								b != null && u.jsx(r("WDSButton.react"), {
									testid: "bb_pro_see_default_cost_button",
									variant: "borderless",
									size: "medium",
									Icon: r("WDSIconIcInfo.react"),
									label: o("WAWebBizBroadcastProBudgetStrings").getSeeDefaultCostLabel(),
									onPress: ue,
									disabled: K != null,
									xstyle: f.infoLinkButton
								}),
								K != null && u.jsx(r("WAWebBizBroadcastProDefaultCostModal.react"), {
									onClose: ce,
									onSetMaxBid: de,
									queryRef: K
								})
							]
						})
					]
				}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: f.subsectionContainer,
					children: [
						u.jsx(r("WDSText.react"), {
							type: "Body1Emphasized",
							colorName: "contentDefault",
							children: o("WAWebBizBroadcastProBudgetStrings").getCampaignBudgetTitle()
						}),
						u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: o("WAWebBizBroadcastProBudgetStrings").getCampaignBudgetDescription()
						}),
						u.jsxs(o("WAWebFlex.react").FlexColumn, {
							align: "stretch",
							xstyle: f.subsectionContent,
							children: [
								u.jsx(r("WDSTextField.react"), {
									testid: "bb_pro_budget_campaign_budget_input",
									label: o("WAWebBizBroadcastProBudgetStrings").getCampaignBudgetInputLabel(),
									floatingLabel: !1,
									prefix: T,
									suffix: D,
									value: U,
									onValueChange: oe,
									onBlur: ae
								}),
								A !== "" && Number(A) > 0 && u.jsx(r("WDSButton.react"), {
									testid: "bb_pro_suggested_budget_toggle",
									variant: "borderless",
									size: "medium",
									Icon: r("WDSIconIcInfo.react"),
									label: o("WAWebBizBroadcastProBudgetStrings").getSuggestedBudgetLabel(),
									onPress: ie,
									xstyle: f.infoLinkButton
								}),
								G && u.jsx(r("WAWebBizBroadcastProSuggestedBudgetModal.react"), {
									currencySymbol: T,
									maxBid: A,
									onApply: se,
									onClose: le
								})
							]
						})
					]
				})]
			})
		}), u.jsx("div", {
			className: "x19aeb6u xvpt6g3 xh8yej3",
			"data-testid": "bb_pro_budget_payment_details_card",
			children: u.jsx(r("WAWebBizCard.react"), {
				header: o("WAWebBizBroadcastProBudgetStrings").getPaymentDetailsTitle(),
				children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: f.lineItemsContainer,
					children: [_e && u.jsx("div", {
						className: "xkh2ocl xefnzgg",
						children: u.jsx(r("WDSBanner.react"), {
							type: "error",
							testid: "bb_pro_budget_required_action_banner",
							title: fe,
							body: ge,
							actionText: he,
							onAction: te
						})
					}), u.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						xstyle: f.paymentRow,
						children: [u.jsx(r("WAWebBizPaymentMethodLabelContent.react"), { data: me }), (N == null ? void 0 : N.label) != null && u.jsx(r("WDSButton.react"), {
							variant: "borderless",
							size: "medium",
							testid: "bb_pro_budget_payment_method_button",
							label: N.label,
							onPress: ee
						})]
					})]
				})
			})
		})] });
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 98);

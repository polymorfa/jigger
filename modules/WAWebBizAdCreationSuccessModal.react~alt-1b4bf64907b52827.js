__d("WAWebBizAdCreationSuccessModal.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAdCreationBudgetUtils",
	"WAWebBizAdCreationPaymentMethodLabel.react",
	"WAWebBizAdCreationSubmitFlowSummaryLogger.react",
	"WAWebBizAdCreationSuccessModalQuery.graphql",
	"WAWebBizAdCreationSummaryContent.react",
	"WAWebBizBoostingStatusUtils",
	"WAWebBizNativeAdsEntryTapLogger",
	"WAWebDivider.react",
	"WAWebFlex.react",
	"WAWebFlexBox.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebWamEnumLwiEntryPoint",
	"WAWebWamEnumWebFlowType",
	"WAWebWdsIllAdsWaIcon.react",
	"WDSButton.react",
	"WDSText.react",
	"react",
	"useWAWebNativeAdsFlowIDContext",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = e !== void 0 ? e : e = n("WAWebBizAdCreationSuccessModalQuery.graphql"), m = {
		container: {
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			rowGap: "x1j3ira4",
			$$css: !0
		},
		details: {
			boxSizing: "x9f619",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x1p57kb1",
			rowGap: "x1f0uite",
			width: "xh8yej3",
			$$css: !0
		},
		headerText: {
			alignSelf: "xkh2ocl",
			textAlign: "x2b8uid",
			$$css: !0
		},
		illustrationContainer: {
			alignItems: "x6s0dn4",
			alignSelf: "xkh2ocl",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			$$css: !0
		},
		paymentMethodLabel: {
			rowGap: "x8a3fw1",
			columnGap: "x1aj3ljl",
			$$css: !0
		}
	};
	function p() {
		var e = r("useWAWebNativeAdsFlowIDContext")(), t = function() {
			o("WAWebBizNativeAdsEntryTapLogger").logEntryTap({
				lwiEntryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_CREATED_AD,
				lwiFlowId: e.manageAdsFlowID,
				previousLwiFlowId: e.adCreationFlowID,
				webFlowType: o("WAWebWamEnumWebFlowType").WEB_FLOW_TYPE.NATIVE_WEB
			}), o("WAWebModalManager").closeModalManager();
		};
		return c.jsx(r("WDSButton.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			onPress: t,
			size: "medium",
			testid: "success-modal-close-button",
			variant: "filled"
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t, n = e.boostingStatus, a = e.currency, i = e.paymentAccountID, l = e.selectedBudget, u = e.selectedDurationInDays, _ = o("WAWebBizBoostingStatusUtils").getBoostingStatusDisplayText(n), f = babelHelpers.extends({ asset_id: i }, o("WAWebBizAdCreationBudgetUtils").getBillingInfoQueryArgs(l, u, a)), g = o("CometRelay").useLazyLoadQuery(d, f);
		return c.jsx(o("WAWebModal.react").Modal, {
			actions: c.jsx(p, {}),
			onOverlayClick: r("WAWebNoop"),
			type: o("WAWebModal.react").ModalTheme.BizToolsAdCreationSuccess,
			children: c.jsx(r("WAWebBizAdCreationSubmitFlowSummaryLogger.react"), {
				boostingStatus: n,
				children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: m.container,
					children: [
						c.jsx(o("WAWebFlex.react").FlexColumn, {
							xstyle: m.illustrationContainer,
							children: c.jsx(o("WAWebWdsIllAdsWaIcon.react").WdsIllAdsWaIcon, {
								height: 120,
								width: 180
							})
						}),
						c.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							type: "Headline1",
							xstyle: m.headerText,
							children: s._(
								/*BTDS*/
								""
							)
						}),
						c.jsx(r("WDSText.react"), {
							colorName: "contentDeemphasized",
							textAlign: "center",
							type: "Body2",
							children: s._(
								/*BTDS*/
								""
							)
						}),
						c.jsxs(o("WAWebFlex.react").FlexColumn, {
							align: "stretch",
							xstyle: m.details,
							children: [
								_ != null && c.jsxs(c.Fragment, { children: [c.jsxs(o("WAWebFlexBox.react").FlexRow, {
									align: "center",
									justify: "all",
									children: [c.jsx(r("WDSText.react"), {
										colorName: "contentDeemphasized",
										type: "Body2",
										children: s._(
											/*BTDS*/
											""
										)
									}), c.jsx(r("WDSText.react"), {
										colorName: "persistentAlwaysBranded",
										type: "Body2",
										children: _
									})]
								}), c.jsx(r("WAWebDivider.react"), { direction: "horizontal" })] }),
								c.jsx(r("WAWebBizAdCreationSummaryContent.react"), {
									rowGap: 12,
									withDivider: !0
								}),
								c.jsx(r("WAWebDivider.react"), { direction: "horizontal" }),
								c.jsxs(o("WAWebFlexBox.react").FlexRow, {
									align: "center",
									justify: "all",
									children: [c.jsx(r("WDSText.react"), {
										colorName: "contentDeemphasized",
										type: "Body2",
										children: s._(
											/*BTDS*/
											""
										)
									}), c.jsx(r("WAWebBizAdCreationPaymentMethodLabel.react"), {
										containerXstyle: m.paymentMethodLabel,
										paymentSectionRef: (t = g.billable_account_by_asset_id) == null || (t = t.billing_info) == null ? void 0 : t.payment_section_details,
										titleColor: "contentDeemphasized",
										titleType: "Body2"
									})]
								})
							]
						})
					]
				})
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	var f = r("withWAWebBizAdCreationSpecContext")(_, function(e) {
		return {
			currency: e.adAccountData.currency,
			paymentAccountID: e.adAccountData.paymentAccountID,
			selectedBudget: e.budgetData.budget,
			selectedDurationInDays: e.durationData.durationInDays
		};
	});
	l.default = f;
}), 226);

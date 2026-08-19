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
	"react-compiler-runtime",
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
		var e = o("react-compiler-runtime").c(6), t = r("useWAWebNativeAdsFlowIDContext")(), n;
		e[0] !== t.adCreationFlowID || e[1] !== t.manageAdsFlowID ? (n = function() {
			o("WAWebBizNativeAdsEntryTapLogger").logEntryTap({
				lwiEntryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_CREATED_AD,
				lwiFlowId: t.manageAdsFlowID,
				previousLwiFlowId: t.adCreationFlowID,
				webFlowType: o("WAWebWamEnumWebFlowType").WEB_FLOW_TYPE.NATIVE_WEB
			}), o("WAWebModalManager").closeModalManager();
		}, e[0] = t.adCreationFlowID, e[1] = t.manageAdsFlowID, e[2] = n) : n = e[2];
		var a = n, i;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), e[3] = i) : i = e[3];
		var l;
		return e[4] !== a ? (l = c.jsx(r("WDSButton.react"), {
			label: i,
			onPress: a,
			size: "medium",
			testid: "success-modal-close-button",
			variant: "filled"
		}), e[4] = a, e[5] = l) : l = e[5], l;
	}
	function _(e) {
		var t, n = o("react-compiler-runtime").c(19), a = e.boostingStatus, i = e.currency, l = e.paymentAccountID, u = e.selectedBudget, _ = e.selectedDurationInDays, f;
		n[0] !== a ? (f = o("WAWebBizBoostingStatusUtils").getBoostingStatusDisplayText(a), n[0] = a, n[1] = f) : f = n[1];
		var g = f, h = babelHelpers.extends({ asset_id: l }, o("WAWebBizAdCreationBudgetUtils").getBillingInfoQueryArgs(u, _, i)), y = o("CometRelay").useLazyLoadQuery(d, h), C;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (C = c.jsx(p, {}), n[2] = C) : C = n[2];
		var b;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (b = c.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: m.illustrationContainer,
			children: c.jsx(o("WAWebWdsIllAdsWaIcon.react").WdsIllAdsWaIcon, {
				height: 120,
				width: 180
			})
		}), n[3] = b) : b = n[3];
		var v;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (v = c.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Headline1",
			xstyle: m.headerText,
			children: s._(
				/*BTDS*/
				""
			)
		}), n[4] = v) : v = n[4];
		var S;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (S = c.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			textAlign: "center",
			type: "Body2",
			children: s._(
				/*BTDS*/
				""
			)
		}), n[5] = S) : S = n[5];
		var R;
		n[6] !== g ? (R = g != null && c.jsxs(c.Fragment, { children: [c.jsxs(o("WAWebFlexBox.react").FlexRow, {
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
				children: g
			})]
		}), c.jsx(r("WAWebDivider.react"), { direction: "horizontal" })] }), n[6] = g, n[7] = R) : R = n[7];
		var L, E;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (L = c.jsx(r("WAWebBizAdCreationSummaryContent.react"), {
			rowGap: 12,
			withDivider: !0
		}), E = c.jsx(r("WAWebDivider.react"), { direction: "horizontal" }), n[8] = L, n[9] = E) : (L = n[8], E = n[9]);
		var k;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (k = c.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: s._(
				/*BTDS*/
				""
			)
		}), n[10] = k) : k = n[10];
		var I = (t = y.billable_account_by_asset_id) == null || (t = t.billing_info) == null ? void 0 : t.payment_section_details, T;
		n[11] !== I ? (T = c.jsxs(o("WAWebFlexBox.react").FlexRow, {
			align: "center",
			justify: "all",
			children: [k, c.jsx(r("WAWebBizAdCreationPaymentMethodLabel.react"), {
				containerXstyle: m.paymentMethodLabel,
				paymentSectionRef: I,
				titleColor: "contentDeemphasized",
				titleType: "Body2"
			})]
		}), n[11] = I, n[12] = T) : T = n[12];
		var D;
		n[13] !== T || n[14] !== R ? (D = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: m.container,
			children: [
				b,
				v,
				S,
				c.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: m.details,
					children: [
						R,
						L,
						E,
						T
					]
				})
			]
		}), n[13] = T, n[14] = R, n[15] = D) : D = n[15];
		var x;
		return n[16] !== a || n[17] !== D ? (x = c.jsx(o("WAWebModal.react").Modal, {
			actions: C,
			onOverlayClick: r("WAWebNoop"),
			type: o("WAWebModal.react").ModalTheme.BizToolsAdCreationSuccess,
			children: c.jsx(r("WAWebBizAdCreationSubmitFlowSummaryLogger.react"), {
				boostingStatus: a,
				children: D
			})
		}), n[16] = a, n[17] = D, n[18] = x) : x = n[18], x;
	}
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

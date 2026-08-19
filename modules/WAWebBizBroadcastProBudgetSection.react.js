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
	"react-compiler-runtime",
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
		var t, n, a, i = o("react-compiler-runtime").c(123), l = e.adAccountRef, s = e.onBillingInfoChanged, c = e.onCampaignBudgetChange, d = e.onMaxBidChange, m = e.wabaId, h = o("CometRelay").useRefetchableFragment(g, l), y = h[0], C = h[1], b = _(), v = b[0], S = b[1], R = (t = y == null ? void 0 : y.currency_code_enum) != null ? t : "USD", L;
		i[0] !== R ? (L = o("WAWebBizBroadcastProCurrencyUtils").getCurrencySymbol(R), i[0] = R, i[1] = L) : L = i[1];
		var E = L, k;
		if (i[2] !== R) {
			var I;
			k = (I = o("WAWebBizBroadcastProCurrencyUtils").getCurrencyISO(R)) != null ? I : R, i[2] = R, i[3] = k;
		} else k = i[3];
		var T = k, D = y == null || (n = y.payment_account) == null ? void 0 : n.id, x = y == null ? void 0 : y.billing_info, $ = x == null ? void 0 : x.payment_section_details, P;
		i[4] !== $ ? (P = ($ == null ? void 0 : $.primary_action) != null ? {
			label: $.primary_action.label,
			wizardName: $.primary_action.wizard_name,
			wizardPropsJSON: $.primary_action.wizard_props_json
		} : null, i[4] = $, i[5] = P) : P = i[5];
		var N = P, M;
		if (i[6] !== x) {
			var w;
			M = (x == null || (w = x.required_action) == null ? void 0 : w.action) != null ? {
				label: x.required_action.action.label,
				wizardName: x.required_action.action.wizard_name,
				wizardPropsJSON: x.required_action.action.wizard_props_json
			} : null, i[6] = x, i[7] = M;
		} else M = i[7];
		var A = M, F = p(""), O = F[0], B = F[1], W = p(null), q = W[0], U = W[1], V = p(""), H = V[0], G = V[1], z = p(!1), j = z[0], K = z[1], Q = o("CometRelay").useQueryLoader(r("WAWebBizBroadcastProDefaultCostQuery")), X = Q[0], Y = Q[1], J = Q[2], Z = r("useWAWebBizBroadcastBillingWizard")(D, void 0, void 0, !0), ee = Z.openBillingWizard, te;
		i[8] !== (y == null ? void 0 : y.id) || i[9] !== s || i[10] !== C ? (te = function(t) {
			if (t.success) {
				var e = y == null ? void 0 : y.id;
				e != null && (S(function() {
					C({ id: e }, { fetchPolicy: "network-only" });
				}), s == null || s());
			}
		}, i[8] = y == null ? void 0 : y.id, i[9] = s, i[10] = C, i[11] = te) : te = i[11], y == null || y.id;
		var ne = te, re;
		i[12] !== ne || i[13] !== ee || i[14] !== N ? (re = function() {
			N != null && ee(N, ne);
		}, i[12] = ne, i[13] = ee, i[14] = N, i[15] = re) : re = i[15];
		var oe = re, ae;
		i[16] !== ne || i[17] !== ee || i[18] !== A ? (ae = function() {
			A != null && ee(A, ne);
		}, i[16] = ne, i[17] = ee, i[18] = A, i[19] = ae) : ae = i[19];
		var ie = ae, le;
		i[20] !== d ? (le = function(t) {
			var e = o("WAWebBizBroadcastProValidationUtils").validateNumericInput(t);
			e.status === o("WAWebBizBroadcastProValidationUtils").ValidationStatus.VALID ? (B(t), U(null), d == null || d(t)) : U(e.errorMessage);
		}, i[20] = d, i[21] = le) : le = i[21];
		var se = le, ue;
		i[22] !== O || i[23] !== d ? (ue = function() {
			var e = parseFloat(O);
			if (Number.isFinite(e)) {
				var t = e.toFixed(4);
				B(t), U(null), d == null || d(t);
			}
		}, i[22] = O, i[23] = d, i[24] = ue) : ue = i[24];
		var ce = ue, de;
		i[25] !== c ? (de = function(t) {
			var e = o("WAWebBizBroadcastProValidationUtils").validateNumericInput(t);
			e.status === o("WAWebBizBroadcastProValidationUtils").ValidationStatus.VALID && (G(t), c == null || c(t));
		}, i[25] = c, i[26] = de) : de = i[26];
		var me = de, pe;
		i[27] !== H || i[28] !== c ? (pe = function() {
			var e = parseFloat(H);
			if (Number.isFinite(e)) {
				var t = e.toFixed(2);
				G(t), c == null || c(t);
			}
		}, i[27] = H, i[28] = c, i[29] = pe) : pe = i[29];
		var _e = pe, fe;
		i[30] === Symbol.for("react.memo_cache_sentinel") ? (fe = function() {
			K(!0);
		}, i[30] = fe) : fe = i[30];
		var ge = fe, he;
		i[31] === Symbol.for("react.memo_cache_sentinel") ? (he = function() {
			K(!1);
		}, i[31] = he) : he = i[31];
		var ye = he, Ce;
		i[32] !== c ? (Ce = function(t) {
			G(t), c == null || c(t);
		}, i[32] = c, i[33] = Ce) : Ce = i[33];
		var be = Ce, ve;
		i[34] !== X || i[35] !== Y || i[36] !== m ? (ve = function() {
			m != null && X == null && Y({ wabaID: m });
		}, i[34] = X, i[35] = Y, i[36] = m, i[37] = ve) : ve = i[37];
		var Se = ve, Re;
		i[38] !== J ? (Re = function() {
			J();
		}, i[38] = J, i[39] = Re) : Re = i[39];
		var Le = Re, Ee;
		i[40] !== d ? (Ee = function(t) {
			B(t), U(null), d == null || d(t);
		}, i[40] = d, i[41] = Ee) : Ee = i[41];
		var ke = Ee;
		if (v || y == null) {
			var Ie;
			i[42] === Symbol.for("react.memo_cache_sentinel") ? (Ie = { className: "x19aeb6u xvpt6g3 xh8yej3" }, i[42] = Ie) : Ie = i[42];
			var Te;
			i[43] === Symbol.for("react.memo_cache_sentinel") ? (Te = o("WAWebBizBroadcastProBudgetStrings").getBudgetSectionTitle(), i[43] = Te) : Te = i[43];
			var De;
			return i[44] === Symbol.for("react.memo_cache_sentinel") ? (De = u.jsx("div", babelHelpers.extends({}, Ie, { children: u.jsx(r("WAWebBizCard.react"), {
				header: Te,
				children: u.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					xstyle: f.spinnerContainer,
					children: u.jsx(r("WDSSpinner.react"), { size: 32 })
				})
			}) })), i[44] = De) : De = i[44], De;
		}
		var xe;
		i[45] !== $ ? (xe = $ != null ? {
			label: $.label,
			labelAx: $.label_ax,
			logos: $.logos
		} : null, i[45] = $, i[46] = xe) : xe = i[46];
		var $e = xe, Pe = x == null || (a = x.required_action) == null ? void 0 : a.message, Ne = (A == null ? void 0 : A.wizardName) != null, Me;
		if (i[47] !== (Pe == null ? void 0 : Pe.headline)) {
			var we;
			Me = (we = Pe == null ? void 0 : Pe.headline) != null ? we : o("WAWebBizBroadcastProBudgetStrings").getPaymentMethodRequiredTitle(), i[47] = Pe == null ? void 0 : Pe.headline, i[48] = Me;
		} else Me = i[48];
		var Ae = Me, Fe;
		if (i[49] !== (Pe == null ? void 0 : Pe.body)) {
			var Oe;
			Fe = (Oe = Pe == null ? void 0 : Pe.body) != null ? Oe : o("WAWebBizBroadcastProBudgetStrings").getPaymentMethodRequiredBody(), i[49] = Pe == null ? void 0 : Pe.body, i[50] = Fe;
		} else Fe = i[50];
		var Be = Fe, We;
		if (i[51] !== (A == null ? void 0 : A.label)) {
			var qe;
			We = (qe = A == null ? void 0 : A.label) != null ? qe : o("WAWebBizBroadcastProBudgetStrings").getAddPaymentMethodLabel(), i[51] = A == null ? void 0 : A.label, i[52] = We;
		} else We = i[52];
		var Ue = We, Ve;
		i[53] === Symbol.for("react.memo_cache_sentinel") ? (Ve = { className: "x19aeb6u xvpt6g3 xh8yej3" }, i[53] = Ve) : Ve = i[53];
		var He;
		i[54] === Symbol.for("react.memo_cache_sentinel") ? (He = o("WAWebBizBroadcastProBudgetStrings").getBudgetSectionTitle(), i[54] = He) : He = i[54];
		var Ge;
		i[55] === Symbol.for("react.memo_cache_sentinel") ? (Ge = u.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentDefault",
			children: o("WAWebBizBroadcastProBudgetStrings").getMaximumBidTitle()
		}), i[55] = Ge) : Ge = i[55];
		var ze;
		i[56] === Symbol.for("react.memo_cache_sentinel") ? (ze = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: o("WAWebBizBroadcastProBudgetStrings").getMaximumBidDescription()
		}), i[56] = ze) : ze = i[56];
		var je;
		i[57] === Symbol.for("react.memo_cache_sentinel") ? (je = o("WAWebBizBroadcastProBudgetStrings").getMaximumBidInputLabel(), i[57] = je) : je = i[57];
		var Ke = q != null, Qe;
		i[58] !== T || i[59] !== E || i[60] !== ce || i[61] !== se || i[62] !== O || i[63] !== q || i[64] !== Ke ? (Qe = u.jsx(r("WDSTextField.react"), {
			testid: "bb_pro_budget_max_bid_input",
			label: je,
			floatingLabel: !1,
			prefix: E,
			suffix: T,
			value: O,
			onValueChange: se,
			onBlur: ce,
			error: Ke,
			errorText: q
		}), i[58] = T, i[59] = E, i[60] = ce, i[61] = se, i[62] = O, i[63] = q, i[64] = Ke, i[65] = Qe) : Qe = i[65];
		var Xe;
		i[66] !== X || i[67] !== Se || i[68] !== m ? (Xe = m != null && u.jsx(r("WDSButton.react"), {
			testid: "bb_pro_see_default_cost_button",
			variant: "borderless",
			size: "medium",
			Icon: r("WDSIconIcInfo.react"),
			label: o("WAWebBizBroadcastProBudgetStrings").getSeeDefaultCostLabel(),
			onPress: Se,
			disabled: X != null,
			xstyle: f.infoLinkButton
		}), i[66] = X, i[67] = Se, i[68] = m, i[69] = Xe) : Xe = i[69];
		var Ye;
		i[70] !== X || i[71] !== Le || i[72] !== ke ? (Ye = X != null && u.jsx(r("WAWebBizBroadcastProDefaultCostModal.react"), {
			onClose: Le,
			onSetMaxBid: ke,
			queryRef: X
		}), i[70] = X, i[71] = Le, i[72] = ke, i[73] = Ye) : Ye = i[73];
		var Je;
		i[74] !== Qe || i[75] !== Xe || i[76] !== Ye ? (Je = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: f.subsectionContainer,
			children: [
				Ge,
				ze,
				u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: f.subsectionContent,
					children: [
						Qe,
						Xe,
						Ye
					]
				})
			]
		}), i[74] = Qe, i[75] = Xe, i[76] = Ye, i[77] = Je) : Je = i[77];
		var Ze;
		i[78] === Symbol.for("react.memo_cache_sentinel") ? (Ze = u.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentDefault",
			children: o("WAWebBizBroadcastProBudgetStrings").getCampaignBudgetTitle()
		}), i[78] = Ze) : Ze = i[78];
		var et;
		i[79] === Symbol.for("react.memo_cache_sentinel") ? (et = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: o("WAWebBizBroadcastProBudgetStrings").getCampaignBudgetDescription()
		}), i[79] = et) : et = i[79];
		var tt;
		i[80] === Symbol.for("react.memo_cache_sentinel") ? (tt = o("WAWebBizBroadcastProBudgetStrings").getCampaignBudgetInputLabel(), i[80] = tt) : tt = i[80];
		var nt;
		i[81] !== H || i[82] !== T || i[83] !== E || i[84] !== _e || i[85] !== me ? (nt = u.jsx(r("WDSTextField.react"), {
			testid: "bb_pro_budget_campaign_budget_input",
			label: tt,
			floatingLabel: !1,
			prefix: E,
			suffix: T,
			value: H,
			onValueChange: me,
			onBlur: _e
		}), i[81] = H, i[82] = T, i[83] = E, i[84] = _e, i[85] = me, i[86] = nt) : nt = i[86];
		var rt;
		i[87] !== O ? (rt = O !== "" && Number(O) > 0 && u.jsx(r("WDSButton.react"), {
			testid: "bb_pro_suggested_budget_toggle",
			variant: "borderless",
			size: "medium",
			Icon: r("WDSIconIcInfo.react"),
			label: o("WAWebBizBroadcastProBudgetStrings").getSuggestedBudgetLabel(),
			onPress: ge,
			xstyle: f.infoLinkButton
		}), i[87] = O, i[88] = rt) : rt = i[88];
		var ot;
		i[89] !== E || i[90] !== be || i[91] !== O || i[92] !== j ? (ot = j && u.jsx(r("WAWebBizBroadcastProSuggestedBudgetModal.react"), {
			currencySymbol: E,
			maxBid: O,
			onApply: be,
			onClose: ye
		}), i[89] = E, i[90] = be, i[91] = O, i[92] = j, i[93] = ot) : ot = i[93];
		var at;
		i[94] !== nt || i[95] !== rt || i[96] !== ot ? (at = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: f.subsectionContainer,
			children: [
				Ze,
				et,
				u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: f.subsectionContent,
					children: [
						nt,
						rt,
						ot
					]
				})
			]
		}), i[94] = nt, i[95] = rt, i[96] = ot, i[97] = at) : at = i[97];
		var it;
		i[98] !== Je || i[99] !== at ? (it = u.jsx("div", babelHelpers.extends({}, Ve, { children: u.jsxs(r("WAWebBizCard.react"), {
			header: He,
			children: [Je, at]
		}) })), i[98] = Je, i[99] = at, i[100] = it) : it = i[100];
		var lt;
		i[101] === Symbol.for("react.memo_cache_sentinel") ? (lt = { className: "x19aeb6u xvpt6g3 xh8yej3" }, i[101] = lt) : lt = i[101];
		var st;
		i[102] === Symbol.for("react.memo_cache_sentinel") ? (st = o("WAWebBizBroadcastProBudgetStrings").getPaymentDetailsTitle(), i[102] = st) : st = i[102];
		var ut;
		i[103] !== Ue || i[104] !== Be || i[105] !== Ae || i[106] !== ie || i[107] !== Ne ? (ut = Ne && u.jsx("div", {
			className: "xkh2ocl xefnzgg",
			children: u.jsx(r("WDSBanner.react"), {
				type: "error",
				testid: "bb_pro_budget_required_action_banner",
				title: Ae,
				body: Be,
				actionText: Ue,
				onAction: ie
			})
		}), i[103] = Ue, i[104] = Be, i[105] = Ae, i[106] = ie, i[107] = Ne, i[108] = ut) : ut = i[108];
		var ct;
		i[109] !== $e ? (ct = u.jsx(r("WAWebBizPaymentMethodLabelContent.react"), { data: $e }), i[109] = $e, i[110] = ct) : ct = i[110];
		var dt;
		i[111] !== oe || i[112] !== N ? (dt = (N == null ? void 0 : N.label) != null && u.jsx(r("WDSButton.react"), {
			variant: "borderless",
			size: "medium",
			testid: "bb_pro_budget_payment_method_button",
			label: N.label,
			onPress: oe
		}), i[111] = oe, i[112] = N, i[113] = dt) : dt = i[113];
		var mt;
		i[114] !== ct || i[115] !== dt ? (mt = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: f.paymentRow,
			children: [ct, dt]
		}), i[114] = ct, i[115] = dt, i[116] = mt) : mt = i[116];
		var pt;
		i[117] !== ut || i[118] !== mt ? (pt = u.jsx("div", babelHelpers.extends({}, lt, {
			"data-testid": "bb_pro_budget_payment_details_card",
			children: u.jsx(r("WAWebBizCard.react"), {
				header: st,
				children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: f.lineItemsContainer,
					children: [ut, mt]
				})
			})
		})), i[117] = ut, i[118] = mt, i[119] = pt) : pt = i[119];
		var _t;
		return i[120] !== it || i[121] !== pt ? (_t = u.jsxs(u.Fragment, { children: [it, pt] }), i[120] = it, i[121] = pt, i[122] = _t) : _t = i[122], _t;
	}
	l.default = h;
}), 98);

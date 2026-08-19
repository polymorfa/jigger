__d("WAWebBizAdCreationTargetingModalMainPage.react", [
	"fbt",
	"CometRelay",
	"WAWebBaseShimmerComponents.react",
	"WAWebBizAdCreationConfigContext",
	"WAWebBizAdCreationConsts",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationTargetingModalAdvantagePlusToggle.react",
	"WAWebBizAdCreationTargetingModalAgeComponent.react",
	"WAWebBizAdCreationTargetingModalAudienceNameComponent.react",
	"WAWebBizAdCreationTargetingModalContext",
	"WAWebBizAdCreationTargetingModalDeleteAudienceButton.react",
	"WAWebBizAdCreationTargetingModalGenderComponent.react",
	"WAWebBizAdCreationTargetingModalInterestsUtils",
	"WAWebBizAdCreationTargetingModalLocationDisplayUtils",
	"WAWebBizAdCreationTargetingModalPage.react",
	"WAWebBizAdCreationTargetingModalSelectableRow.react",
	"WAWebBizAdCreationTargetingSpecContext",
	"WAWebBizAdCreationTargetingSpecHawkWidget.react",
	"WAWebBizAdLogger",
	"WAWebBizAdTargetingSpecLogData",
	"WAWebBizNativeAdsGatingUtils",
	"WAWebDivider.react",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebXIcon.react",
	"WDSButton.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebEstimatedDailyReach"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.Suspense, m = c.useContext, p = c.useEffect, _ = c.useRef, f = c.useState, g = {
		actionButtons: {
			columnGap: "x1amjocr",
			$$css: !0
		},
		content: {
			rowGap: "x1j3ira4",
			$$css: !0
		},
		contentContainer: {
			height: "x5yr21d",
			justifyContent: "x1qughib",
			$$css: !0
		},
		name: {
			marginBottom: "xefnzgg",
			$$css: !0
		},
		root: {
			rowGap: "x121sasi",
			$$css: !0
		}
	};
	function h(e) {
		var t, n = o("react-compiler-runtime").c(14), a = e.audienceOption, i = e.optimizationGoalInput, l = m(r("WAWebBizAdCreationTargetingModalContext")), s = l.currency, c = l.dailyBudget, d = l.legacyAdAccountID, p = l.selectedPublisherPlatforms, _ = m(r("WAWebBizAdCreationTargetingSpecContext")), f = (t = m(r("WAWebBizAdCreationConfigContext"))) != null ? t : {}, g = f.flow, h = f.flowID, y;
		n[0] !== _ ? (y = JSON.stringify(_), n[0] = _, n[1] = y) : y = n[1];
		var C;
		n[2] !== a || n[3] !== s || n[4] !== c || n[5] !== g || n[6] !== h || n[7] !== d || n[8] !== i || n[9] !== p || n[10] !== y ? (C = {
			audienceOptionAudience: a,
			currency: s,
			dailyBudget: c,
			flow: g,
			flowID: h,
			legacyAdAccountID: d,
			optimizationGoalInput: i,
			postID: null,
			selectedPublisherPlatforms: p,
			targetingSpecAudience: y
		}, n[2] = a, n[3] = s, n[4] = c, n[5] = g, n[6] = h, n[7] = d, n[8] = i, n[9] = p, n[10] = y, n[11] = C) : C = n[11];
		var b = r("useWAWebEstimatedDailyReach")(C), v;
		return n[12] !== b ? (v = u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: b
		}), n[12] = b, n[13] = v) : v = n[13], v;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(93), n = e.adAccountID, a = e.audienceID, i = e.audienceOption, l = e.mode, c = e.onCancel, y = e.onNavigateToDeleteConfirmation, C = e.onNavigateToInterests, b = e.onNavigateToLocation, v = e.onSaveAudience, S = m(r("WAWebBizAdCreationTargetingSpecContext")), R = m(r("WAWebBizAdCreationConfigContext")), L = m(r("WAWebBizAdCreationTargetingModalContext")), E = L.audienceName, k = L.environment, I = L.setAudienceName, T = m(r("WAWebBizAdCreationLoggerContext")), D = _(!1), x, $;
		t[0] !== n || t[1] !== a || t[2] !== E || t[3] !== i || t[4] !== T || t[5] !== l || t[6] !== S ? (x = function() {
			if (T != null && !D.current) {
				D.current = !0;
				var e = r("WAWebBizAdTargetingSpecLogData")(S);
				r("WAWebBizAdLogger").log({
					adAccountID: n,
					event: "create_audience_impression",
					extra: babelHelpers.extends({
						audience_id: a,
						audience_name: E,
						audience_option: i,
						mode: l
					}, e),
					loggerContext: T
				});
			}
		}, $ = [
			n,
			a,
			E,
			i,
			T,
			l,
			S
		], t[0] = n, t[1] = a, t[2] = E, t[3] = i, t[4] = T, t[5] = l, t[6] = S, t[7] = x, t[8] = $) : (x = t[7], $ = t[8]), p(x, $);
		var P = f(!1), N = P[0], M = P[1], w = i === "SAVED_AUDIENCE", A;
		t[9] !== E ? (A = E.trim(), t[9] = E, t[10] = A) : A = t[10];
		var F = A, O = w && F.length === 0, B;
		t[11] !== c ? (B = function() {
			o("WAWebModalManager").ModalManager.close(), c == null || c();
		}, t[11] = c, t[12] = B) : B = t[12];
		var W = B, q;
		t[13] !== n || t[14] !== a || t[15] !== E || t[16] !== T || t[17] !== v || t[18] !== S ? (q = function() {
			T != null && r("WAWebBizAdLogger").log({
				adAccountID: n,
				event: "save_audience_click",
				extra: { audience_id: a },
				loggerContext: T
			}), M(!0), v({
				audienceName: E,
				callback: function() {
					M(!1), o("WAWebModalManager").ModalManager.close();
				},
				onError: function() {
					M(!1);
				},
				targetingSpec: S
			});
		}, t[13] = n, t[14] = a, t[15] = E, t[16] = T, t[17] = v, t[18] = S, t[19] = q) : q = t[19];
		var U = q, V;
		t[20] !== R ? (V = R != null ? R : {}, t[20] = R, t[21] = V) : V = t[21];
		var H = V, G = H.pageID, z = H.product, j = z != null ? z : "BOOSTED_MESSAGE", K;
		t[22] !== G || t[23] !== j ? (K = {
			objective: o("WAWebBizAdCreationConsts").WA_WEB_AD_OBJECTIVE,
			page_id: G,
			product: j
		}, t[22] = G, t[23] = j, t[24] = K) : K = t[24];
		var Q = K, X;
		t[25] === Symbol.for("react.memo_cache_sentinel") ? (X = o("WAWebBizNativeAdsGatingUtils").nativeAdsDetailedTargetingEnabled(), t[25] = X) : X = t[25];
		var Y = X, J;
		t[26] === Symbol.for("react.memo_cache_sentinel") ? (J = Y ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[26] = J) : J = t[26];
		var Z = J, ee;
		t[27] === Symbol.for("react.memo_cache_sentinel") ? (ee = Y ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[27] = ee) : ee = t[27];
		var te = ee, ne;
		t[28] !== W ? (ne = u.jsx(r("WDSButton.react"), {
			Icon: o("WAWebXIcon.react").XIcon,
			onPress: W,
			size: "medium",
			variant: "borderless"
		}), t[28] = W, t[29] = ne) : ne = t[29];
		var re;
		t[30] !== l ? (re = l === "create" ? s._(
			/*BTDS*/
			""
		) : l === "edit" ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + l);
		})(), t[30] = l, t[31] = re) : re = t[31];
		var oe;
		t[32] !== re ? (oe = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: re
		}), t[32] = re, t[33] = oe) : oe = t[33];
		var ae;
		t[34] !== ne || t[35] !== oe ? (ae = u.jsxs(u.Fragment, { children: [ne, oe] }), t[34] = ne, t[35] = oe, t[36] = ae) : ae = t[36];
		var ie;
		t[37] === Symbol.for("react.memo_cache_sentinel") ? (ie = o("WAWebBizNativeAdsGatingUtils").nativeAdsCreationTargetingModalHawkToolEnabled() ? u.jsx(r("WAWebBizAdCreationTargetingSpecHawkWidget.react"), {}) : null, t[37] = ie) : ie = t[37];
		var le;
		t[38] === Symbol.for("react.memo_cache_sentinel") ? (le = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1Emphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[38] = le) : le = t[38];
		var se;
		t[39] === Symbol.for("react.memo_cache_sentinel") ? (se = u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
			height: 20,
			width: 100
		}), t[39] = se) : se = t[39];
		var ue;
		t[40] !== i || t[41] !== Q ? (ue = u.jsx(h, {
			audienceOption: i,
			optimizationGoalInput: Q
		}), t[40] = i, t[41] = Q, t[42] = ue) : ue = t[42];
		var ce;
		t[43] !== k || t[44] !== ue ? (ce = u.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			children: [le, u.jsx(d, {
				fallback: se,
				children: u.jsx(o("CometRelay").RelayEnvironmentProvider, {
					environment: k,
					children: ue
				})
			})]
		}), t[43] = k, t[44] = ue, t[45] = ce) : ce = t[45];
		var de;
		t[46] !== E || t[47] !== w || t[48] !== I ? (de = w ? u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: g.name,
			children: u.jsx(r("WAWebBizAdCreationTargetingModalAudienceNameComponent.react"), {
				audienceName: E,
				onAudienceNameChange: I
			})
		}) : null, t[46] = E, t[47] = w, t[48] = I, t[49] = de) : de = t[49];
		var me;
		t[50] === Symbol.for("react.memo_cache_sentinel") ? (me = { className: "x1iyjqo2 x2lwn1j x6ikm8r x1odjw0f xvpt6g3 x16ovd2e" }, t[50] = me) : me = t[50];
		var pe;
		t[51] !== i ? (pe = u.jsx(r("WAWebBizAdCreationTargetingModalAdvantagePlusToggle.react"), { audienceOption: i }), t[51] = i, t[52] = pe) : pe = t[52];
		var _e;
		t[53] === Symbol.for("react.memo_cache_sentinel") ? (_e = s._(
			/*BTDS*/
			""
		), t[53] = _e) : _e = t[53];
		var fe;
		t[54] !== S.geo_locations ? (fe = o("WAWebBizAdCreationTargetingModalLocationDisplayUtils").formatLocationDisplay(S.geo_locations), t[54] = S.geo_locations, t[55] = fe) : fe = t[55];
		var ge;
		t[56] === Symbol.for("react.memo_cache_sentinel") ? (ge = s._(
			/*BTDS*/
			""
		), t[56] = ge) : ge = t[56];
		var he;
		t[57] !== b || t[58] !== fe ? (he = u.jsx(r("WAWebBizAdCreationTargetingModalSelectableRow.react"), {
			ariaLabel: _e,
			onEditClick: b,
			subtitle: fe,
			testid: "biz_native_ads_location_row",
			title: ge
		}), t[57] = b, t[58] = fe, t[59] = he) : he = t[59];
		var ye;
		t[60] !== S.flexible_spec ? (ye = o("WAWebBizAdCreationTargetingModalInterestsUtils").formatInterestsDisplayWithPlaceholder(S.flexible_spec), t[60] = S.flexible_spec, t[61] = ye) : ye = t[61];
		var Ce;
		t[62] !== C || t[63] !== ye ? (Ce = u.jsx(r("WAWebBizAdCreationTargetingModalSelectableRow.react"), {
			ariaLabel: te,
			onEditClick: C,
			subtitle: ye,
			testid: "biz_native_ads_interest_row",
			title: Z
		}), t[62] = C, t[63] = ye, t[64] = Ce) : Ce = t[64];
		var be, ve;
		t[65] === Symbol.for("react.memo_cache_sentinel") ? (be = u.jsx(r("WAWebBizAdCreationTargetingModalAgeComponent.react"), {}), ve = u.jsx(r("WAWebBizAdCreationTargetingModalGenderComponent.react"), {}), t[65] = be, t[66] = ve) : (be = t[65], ve = t[66]);
		var Se;
		t[67] !== pe || t[68] !== he || t[69] !== Ce ? (Se = u.jsx("div", babelHelpers.extends({ "data-testid": "biz_native_ads_targeting_modal_scroll_area" }, me, { children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: g.content,
			children: [
				pe,
				he,
				Ce,
				be,
				ve
			]
		}) })), t[67] = pe, t[68] = he, t[69] = Ce, t[70] = Se) : Se = t[70];
		var Re;
		t[71] === Symbol.for("react.memo_cache_sentinel") ? (Re = u.jsx("div", {
			className: "xoyeui7 x1iolzdw x1mii8t8",
			children: u.jsx(r("WAWebDivider.react"), { direction: "horizontal" })
		}), t[71] = Re) : Re = t[71];
		var Le;
		t[72] !== n || t[73] !== a || t[74] !== i || t[75] !== y ? (Le = a != null && i === "SAVED_AUDIENCE" ? u.jsx(r("WAWebBizAdCreationTargetingModalDeleteAudienceButton.react"), {
			adAccountID: n,
			audienceID: a,
			onNavigateToDeleteConfirmation: y != null ? y : r("WAWebNoop")
		}) : null, t[72] = n, t[73] = a, t[74] = i, t[75] = y, t[76] = Le) : Le = t[76];
		var Ee;
		t[77] === Symbol.for("react.memo_cache_sentinel") ? (Ee = s._(
			/*BTDS*/
			""
		), t[77] = Ee) : Ee = t[77];
		var ke;
		t[78] !== U || t[79] !== O || t[80] !== N ? (ke = u.jsx(r("WDSButton.react"), {
			disabled: O,
			label: Ee,
			loading: N,
			onPress: U,
			size: "medium",
			testid: "biz_native_ads_save_audience_button",
			variant: "filled"
		}), t[78] = U, t[79] = O, t[80] = N, t[81] = ke) : ke = t[81];
		var Ie;
		t[82] !== Le || t[83] !== ke ? (Ie = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			gap: 16,
			children: [Re, u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "end",
				xstyle: g.actionButtons,
				children: [Le, ke]
			})]
		}), t[82] = Le, t[83] = ke, t[84] = Ie) : Ie = t[84];
		var Te;
		t[85] !== Se || t[86] !== Ie ? (Te = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: g.contentContainer,
			children: [Se, Ie]
		}), t[85] = Se, t[86] = Ie, t[87] = Te) : Te = t[87];
		var De;
		return t[88] !== ae || t[89] !== ce || t[90] !== de || t[91] !== Te ? (De = u.jsxs(r("WAWebBizAdCreationTargetingModalPage.react"), {
			headerContent: ae,
			xstyle: g.root,
			children: [
				ie,
				ce,
				de,
				Te
			]
		}), t[88] = ae, t[89] = ce, t[90] = de, t[91] = Te, t[92] = De) : De = t[92], De;
	}
	l.default = y;
}), 226);

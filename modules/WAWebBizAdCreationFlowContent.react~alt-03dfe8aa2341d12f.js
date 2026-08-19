__d("WAWebBizAdCreationFlowContent.react", [
	"CometPlaceholder.react",
	"CometRelay",
	"FBLogger",
	"WAWebBizAdCreationFooterPortalContext.react",
	"WAWebBizAdDetailsDrawer.react",
	"WAWebBizAdDraftSaveCallbackContext",
	"WAWebBizAdManagementFBLoginPrompt.react",
	"WAWebBizAdManagementHeaderButtonGroup.react",
	"WAWebBizAdManagementPastAdsNudge.react",
	"WAWebBizAdManagementRoot.react",
	"WAWebBizAdsErrorPopup.react",
	"WAWebBizErrorBoundary.react",
	"WAWebBizNativeAdsDrawerConfig",
	"WAWebBizNativeAdsFBAuthError",
	"WAWebBizNativeAdsFlowTypes",
	"WAWebBizNativeAdsLoadingDrawer.react",
	"WAWebBizNativeAdsNavigateToAdCreation",
	"WAWebBizNativeAdsScenarioRouter",
	"WAWebBizNativeAdsStoredFBIdentityStore",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFlex.react",
	"WAWebFlexBox.react",
	"WAWebNoop",
	"WAWebVelocityTransitionGroup",
	"justknobx",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAdCreationFlowActions",
	"useWAWebBizAdCreationIdentityContext",
	"useWAWebNativeAdsFlowIDContext"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useContext, m = u.useEffect, p = u.useRef, _ = u.useState, f = {
		fullscreenRoot: {
			height: "x5yr21d",
			$$css: !0
		},
		mainContentWithHeader: {
			flexGrow: "xlxc79v",
			height: "x5yr21d",
			minWidth: "xeuugli",
			$$css: !0
		},
		rightDrawerClosed: {
			width: "xnalus7",
			$$css: !0
		},
		rightDrawerOpen: {
			borderInlineStartColor: "x1vb5itz",
			borderInlineStartStyle: "x1t7ytsu",
			borderInlineStartWidth: "xpilrb4",
			flexGrow: "x1ikap7u",
			maxWidth: "xfp77mx",
			minWidth: "xjqbwj4",
			$$css: !0
		},
		rightDrawerWrapper: {
			backgroundColor: "x1280gxy",
			height: "x5yr21d",
			width: "xh8yej3",
			$$css: !0
		}
	};
	function g(e) {
		var t, n, a = o("react-compiler-runtime").c(184), l = e.flow, u = e.navigateToManageAdsForFirstTimeRef, c = e.scenario, g = e.showExitConfirmation, y = e.step, C = r("useWAWebBizAdCreationIdentityContext")(), b = o("WAWebBizNativeAdsStoredFBIdentityStore").useStoredFBIdentity(), v = r("useWAWebNativeAdsFlowIDContext")(), S = C == null ? void 0 : C.relayEnvironment, R = C == null ? void 0 : C.adCreationEntrypointReference, L = C == null ? void 0 : C.adManagementQueryVariables, E = C == null ? void 0 : C.resetForReAuth, k;
		a[0] !== l || a[1] !== v || a[2] !== C ? (k = function() {
			var e = v.regenerateAdCreationFlowID();
			C == null || C.reloadPreloadedQueries(e), l.pop();
		}, a[0] = l, a[1] = v, a[2] = C, a[3] = k) : k = a[3];
		var I = k, T;
		a[4] !== l || a[5] !== v || a[6] !== C ? (T = function() {
			var e = v.regenerateAdCreationFlowID();
			C == null || C.reloadPreloadedQueries(e), l.push(o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement);
		}, a[4] = l, a[5] = v, a[6] = C, a[7] = T) : T = a[7];
		var D = T, x, $;
		a[8] !== D || a[9] !== u ? (x = function() {
			return u != null && (u.current = D), (function() {
				u != null && (u.current = null);
			});
		}, $ = [D, u], a[8] = D, a[9] = u, a[10] = x, a[11] = $) : (x = a[10], $ = a[11]), m(x, $);
		var P;
		a[12] !== l || a[13] !== v.adCreationFlowID || a[14] !== C ? (P = function() {
			r("WAWebBizNativeAdsNavigateToAdCreation")(C, l, v.adCreationFlowID);
		}, a[12] = l, a[13] = v.adCreationFlowID, a[14] = C, a[15] = P) : P = a[15];
		var N = P, M, w;
		a[16] !== l || a[17] !== C || a[18] !== S || a[19] !== y ? (M = function() {
			y === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation && C != null && S == null && !C.isSwitching && l.pop();
		}, w = [
			y,
			C,
			S,
			l
		], a[16] = l, a[17] = C, a[18] = S, a[19] = y, a[20] = M, a[21] = w) : (M = a[20], w = a[21]), m(M, w);
		var A = d(r("WAWebBizAdDraftSaveCallbackContext")), F = A.existingDraftIDRef, O;
		a[22] !== F ? (O = function(t) {
			F.current = t;
		}, a[22] = F, a[23] = O) : O = a[23];
		var B = O, W;
		a[24] === Symbol.for("react.memo_cache_sentinel") ? (W = r("justknobx")._("1659"), a[24] = W) : W = a[24];
		var q = W, U, V;
		if (a[25] !== C || a[26] !== S || a[27] !== c || a[28] !== b) {
			V = !1;
			var H = C == null ? void 0 : C.linkedPagesInfo;
			if (C != null && H != null) {
				var G, z = (G = C.accountType) != null ? G : "FB", j = b != null || C.accountType === "FB", K;
				a[31] !== C.isWAAEligible || a[32] !== H.fbPageHasCreatedAd || a[33] !== H.waAdsIdentityPageHasCreatedAd || a[34] !== z || a[35] !== j ? (K = o("WAWebBizNativeAdsScenarioRouter").resolveNativeAdsScenario({
					activeIdentityType: z,
					fbPageHasCreatedAd: H.fbPageHasCreatedAd,
					hasValidFBAccessToken: j,
					isWAAEligible: C.isWAAEligible,
					waAdsIdentityPageHasCreatedAd: H.waAdsIdentityPageHasCreatedAd
				}), a[31] = C.isWAAEligible, a[32] = H.fbPageHasCreatedAd, a[33] = H.waAdsIdentityPageHasCreatedAd, a[34] = z, a[35] = j, a[36] = K) : K = a[36], U = K;
			} else C != null && !C.isWAAEligible ? U = "FIRST_TIME_NOT_WAA_ELIGIBLE" : q && C != null && S == null && C.accountType !== "WAA" && !C.isSwitching ? (V = !0, U = "HAS_FB_ADS_NO_FB_ACCESS_TOKEN") : U = c != null ? c : "RETURNING_WITH_ADS";
			a[25] = C, a[26] = S, a[27] = c, a[28] = b, a[29] = V, a[30] = U;
		} else V = a[29], U = a[30];
		var Q;
		a[37] !== U ? (Q = o("WAWebBizNativeAdsScenarioRouter").isFirstTimeScenario(U), a[37] = U, a[38] = Q) : Q = a[38];
		var X = Q, Y = _(null), J = Y[0], Z = Y[1], ee;
		a[39] === Symbol.for("react.memo_cache_sentinel") ? (ee = function(t) {
			Z(t);
		}, a[39] = ee) : ee = a[39];
		var te = ee, ne;
		a[40] === Symbol.for("react.memo_cache_sentinel") ? (ne = function() {
			Z(null);
		}, a[40] = ne) : ne = a[40];
		var re = ne, oe = r("useWAWebBizAdCreationFlowActions")(l, y, re), ae = oe.handleEnterFlowError, ie = oe.handleRecreateAd, le = oe.handleResumeDraft, se = p(null), ue = p(null), ce = _(0), de = ce[0], me = ce[1], pe;
		a[41] !== ae || a[42] !== E ? (pe = function(t) {
			if (o("WAWebBizNativeAdsFBAuthError").isFBAuthError(t) && q) {
				r("FBLogger")("wa_ctwa_web").warn("Recovering from FB auth error in native ads flow: " + t.name), o("WAWebBizNativeAdsStoredFBIdentityStore").clearStoredFBIdentity(), E == null || E(), me(h);
				return;
			}
			ae(t);
		}, a[41] = ae, a[42] = E, a[43] = pe) : pe = a[43];
		var _e = pe, fe = p(!1), ge;
		a[44] !== V ? (ge = function() {
			V && !fe.current ? (fe.current = !0, r("FBLogger")("wa_ctwa_web").warn("Native ads: recovering Manage Ads from null FB identity bundle via past-ads nudge")) : V || (fe.current = !1);
		}, a[44] = V, a[45] = ge) : ge = a[45];
		var he;
		if (a[46] !== V ? (he = [V], a[46] = V, a[47] = he) : he = a[47], m(ge, he), y == null) {
			r("FBLogger")("wa_ctwa_web").mustfix("AdCreationFlowContent rendered with null step");
			var ye;
			return a[48] === Symbol.for("react.memo_cache_sentinel") ? (ye = s.jsx(r("WAWebBizAdsErrorPopup.react"), { fallback: s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), { step: o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement }) }), a[48] = ye) : ye = a[48], ye;
		}
		if ((C == null ? void 0 : C.identityError) != null) {
			var Ce;
			return a[49] !== y ? (Ce = s.jsx(r("WAWebBizAdsErrorPopup.react"), { fallback: s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), { step: y }) }), a[49] = y, a[50] = Ce) : Ce = a[50], Ce;
		}
		var be, ve, Se, Re, Le, Ee, ke, Ie, Te, De, xe, $e, Pe, Ne, Me, we, Ae, Fe, Oe, Be;
		if (a[51] !== R || a[52] !== L || a[53] !== U || a[54] !== de || a[55] !== l || a[56] !== v.adCreationFlowID || a[57] !== v.manageAdsFlowID || a[58] !== _e || a[59] !== N || a[60] !== ie || a[61] !== le || a[62] !== (C == null ? void 0 : C.accountType) || a[63] !== (C == null ? void 0 : C.adManagementQueryRef) || a[64] !== (C == null ? void 0 : C.isSwitching) || a[65] !== (C == null ? void 0 : C.isWAAEligible) || a[66] !== (C == null || (t = C.linkedPagesInfo) == null ? void 0 : t.fbPageHasCreatedAd) || a[67] !== (C == null || (n = C.linkedPagesInfo) == null ? void 0 : n.waAdsIdentityPageHasCreatedAd) || a[68] !== (C == null ? void 0 : C.loginWithFacebook) || a[69] !== V || a[70] !== X || a[71] !== I || a[72] !== D || a[73] !== S || a[74] !== (J == null ? void 0 : J.nodeId) || a[75] !== g || a[76] !== y || a[77] !== B) {
			var We, qe;
			ke = o("WAWebBizNativeAdsDrawerConfig").getDrawerConfig(y);
			var Ue, Ve;
			e: {
				if (y === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation) {
					var He;
					a[98] !== l || a[99] !== X || a[100] !== I || a[101] !== D || a[102] !== g ? (He = function() {
						(async function() {
							var e = await g();
							e !== "cancelled" && (X ? e === "saved" ? D() : l.end() : I());
						})();
					}, a[98] = l, a[99] = X, a[100] = I, a[101] = D, a[102] = g, a[103] = He) : He = a[103], Ue = He;
					var Ge;
					a[104] !== R || a[105] !== I || a[106] !== S ? (Ge = S != null && R != null ? s.jsx(o("CometRelay").RelayEnvironmentProvider, {
						environment: S,
						children: s.jsx(o("CometRelay").EntryPointContainer, {
							entryPointReference: R,
							props: { onNavigateToManageAds: I }
						})
					}) : null, a[104] = R, a[105] = I, a[106] = S, a[107] = Ge) : Ge = a[107], Ee = Ge;
					break e;
				}
				if (y === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement) {
					if (U === "FIRST_TIME_NOT_WAA_ELIGIBLE") {
						var ze, je = (C == null ? void 0 : C.accountType) === "FB" && S != null, Ke = (ze = C == null ? void 0 : C.loginWithFacebook) != null ? ze : r("WAWebNoop"), Qe;
						a[108] !== v.adCreationFlowID || a[109] !== N || a[110] !== je || a[111] !== Ke ? (Qe = s.jsx(r("WAWebBizAdManagementFBLoginPrompt.react"), {
							adCreationFlowID: v.adCreationFlowID,
							isFBLoggedIn: je,
							onConnectFacebook: Ke,
							onNavigateToCreation: N
						}), a[108] = v.adCreationFlowID, a[109] = N, a[110] = je, a[111] = Ke, a[112] = Qe) : Qe = a[112], Ee = Qe;
					} else if (U === "HAS_FB_ADS_NO_FB_ACCESS_TOKEN" || U === "HAS_FB_ADS_NOT_WAA_ELIGIBLE" || U === "HAS_FB_ADS_WAA_ACTIVE") {
						var Xe, Ye = (Xe = C == null ? void 0 : C.loginWithFacebook) != null ? Xe : r("WAWebNoop"), Je = !V && (U === "HAS_FB_ADS_NO_FB_ACCESS_TOKEN" || U === "HAS_FB_ADS_WAA_ACTIVE") ? N : null, Ze;
						a[113] !== v.manageAdsFlowID || a[114] !== Ye || a[115] !== Je ? (Ze = s.jsx(r("WAWebBizAdManagementPastAdsNudge.react"), {
							manageAdsFlowID: v.manageAdsFlowID,
							onConnectFacebook: Ye,
							onSkipAndCreate: Je
						}), a[113] = v.manageAdsFlowID, a[114] = Ye, a[115] = Je, a[116] = Ze) : Ze = a[116], Ee = Ze;
					} else {
						var et, tt, nt;
						a[117] !== l || a[118] !== (C == null ? void 0 : C.accountType) || a[119] !== S ? (nt = S != null ? s.jsx(o("CometRelay").RelayEnvironmentProvider, {
							environment: S,
							children: s.jsx(r("WAWebBizAdManagementHeaderButtonGroup.react"), {
								accountType: C == null ? void 0 : C.accountType,
								flow: l,
								relayEnvironment: S
							})
						}) : s.jsx(r("WAWebBizAdManagementHeaderButtonGroup.react"), {
							accountType: C == null ? void 0 : C.accountType,
							createAdDisabled: !0,
							flow: l,
							relayEnvironment: S
						}), a[117] = l, a[118] = C == null ? void 0 : C.accountType, a[119] = S, a[120] = nt) : nt = a[120], Ve = nt;
						var rt;
						if (a[121] !== L || a[122] !== N || a[123] !== ie || a[124] !== le || a[125] !== (C == null ? void 0 : C.accountType) || a[126] !== (C == null ? void 0 : C.adManagementQueryRef) || a[127] !== (C == null ? void 0 : C.isWAAEligible) || a[128] !== (C == null || (et = C.linkedPagesInfo) == null ? void 0 : et.fbPageHasCreatedAd) || a[129] !== (C == null || (tt = C.linkedPagesInfo) == null ? void 0 : tt.waAdsIdentityPageHasCreatedAd) || a[130] !== (C == null ? void 0 : C.loginWithFacebook) || a[131] !== S || a[132] !== (J == null ? void 0 : J.nodeId) || a[133] !== B) {
							var ot, at, it, lt, st;
							rt = S != null && L != null ? s.jsx(o("CometRelay").RelayEnvironmentProvider, {
								environment: S,
								children: s.jsx(r("WAWebBizAdManagementRoot.react"), {
									draftPageId: L.draftPageId,
									hasCreatedAd: (C == null || (ot = C.linkedPagesInfo) == null ? void 0 : ot.fbPageHasCreatedAd) === !0 || (C == null || (at = C.linkedPagesInfo) == null ? void 0 : at.waAdsIdentityPageHasCreatedAd) === !0,
									isWAAEligible: (it = C == null ? void 0 : C.isWAAEligible) != null ? it : !1,
									onAdSelect: te,
									onExistingDraftIDChange: B,
									onLoginToFacebook: (C == null ? void 0 : C.accountType) !== "FB" ? C == null ? void 0 : C.loginWithFacebook : void 0,
									onNavigateToCreation: N,
									onRecreateAd: ie,
									onResumeDraft: le,
									pageId1: L.pageId1,
									pageId2: L.pageId2,
									queryRef: C == null ? void 0 : C.adManagementQueryRef,
									scrollContainerRef: ue,
									selectedKey: J == null ? void 0 : J.nodeId
								})
							}) : null, a[121] = L, a[122] = N, a[123] = ie, a[124] = le, a[125] = C == null ? void 0 : C.accountType, a[126] = C == null ? void 0 : C.adManagementQueryRef, a[127] = C == null ? void 0 : C.isWAAEligible, a[128] = C == null || (lt = C.linkedPagesInfo) == null ? void 0 : lt.fbPageHasCreatedAd, a[129] = C == null || (st = C.linkedPagesInfo) == null ? void 0 : st.waAdsIdentityPageHasCreatedAd, a[130] = C == null ? void 0 : C.loginWithFacebook, a[131] = S, a[132] = J == null ? void 0 : J.nodeId, a[133] = B, a[134] = rt;
						} else rt = a[134];
						Ee = rt;
					}
					break e;
				}
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + y);
			}
			if (Ee == null && !(C != null && C.isSwitching)) {
				var ut = y === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation && R == null && S != null;
				ut || r("FBLogger")("wa_ctwa_web").warn("bodyContent is null in AdCreationFlowContent for step " + String(y) + ": relayEnvironment=" + String(S != null) + " adCreationEntrypointRef=" + String(R != null) + " adManagementQueryVars=" + String(L != null) + " isWAAEligible=" + String(C == null ? void 0 : C.isWAAEligible)), Ee = ke.loadingFallback;
			}
			Le = r("WAWebBizErrorBoundary.react"), Ae = de, a[135] !== y ? (Fe = s.jsx(r("WAWebBizAdsErrorPopup.react"), { fallback: s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), { step: y }) }), a[135] = y, a[136] = Fe) : Fe = a[136], Oe = "WAWebNativeAdsFlow", Be = _e, Re = r("WAWebDrawer.react"), Me = ke.drawerTheme, a[137] === Symbol.for("react.memo_cache_sentinel") ? (we = {
				surface: "unknown",
				viewName: "biz-native-ads"
			}, a[137] = we) : we = a[137], Se = o("WAWebFlex.react").FlexRow, Ne = f.fullscreenRoot, ve = o("WAWebFlexBox.react").FlexColumn, Pe = f.mainContentWithHeader, be = o("WAWebDrawerHeader.react").DrawerHeader, Ie = y === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation, Te = y === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement, De = Ue, xe = Ve, $e = ke.title(), a[51] = R, a[52] = L, a[53] = U, a[54] = de, a[55] = l, a[56] = v.adCreationFlowID, a[57] = v.manageAdsFlowID, a[58] = _e, a[59] = N, a[60] = ie, a[61] = le, a[62] = C == null ? void 0 : C.accountType, a[63] = C == null ? void 0 : C.adManagementQueryRef, a[64] = C == null ? void 0 : C.isSwitching, a[65] = C == null ? void 0 : C.isWAAEligible, a[66] = C == null || (We = C.linkedPagesInfo) == null ? void 0 : We.fbPageHasCreatedAd, a[67] = C == null || (qe = C.linkedPagesInfo) == null ? void 0 : qe.waAdsIdentityPageHasCreatedAd, a[68] = C == null ? void 0 : C.loginWithFacebook, a[69] = V, a[70] = X, a[71] = I, a[72] = D, a[73] = S, a[74] = J == null ? void 0 : J.nodeId, a[75] = g, a[76] = y, a[77] = B, a[78] = be, a[79] = ve, a[80] = Se, a[81] = Re, a[82] = Le, a[83] = Ee, a[84] = ke, a[85] = Ie, a[86] = Te, a[87] = De, a[88] = xe, a[89] = $e, a[90] = Pe, a[91] = Ne, a[92] = Me, a[93] = we, a[94] = Ae, a[95] = Fe, a[96] = Oe, a[97] = Be;
		} else be = a[78], ve = a[79], Se = a[80], Re = a[81], Le = a[82], Ee = a[83], ke = a[84], Ie = a[85], Te = a[86], De = a[87], xe = a[88], $e = a[89], Pe = a[90], Ne = a[91], Me = a[92], we = a[93], Ae = a[94], Fe = a[95], Oe = a[96], Be = a[97];
		var ct;
		a[138] !== be || a[139] !== ke.headerType || a[140] !== Ie || a[141] !== Te || a[142] !== De || a[143] !== xe || a[144] !== $e ? (ct = s.jsx(be, {
			focusBackOrCancel: Ie,
			focusTitle: Te,
			onBack: De,
			rightActionElement: xe,
			title: $e,
			type: ke.headerType
		}), a[138] = be, a[139] = ke.headerType, a[140] = Ie, a[141] = Te, a[142] = De, a[143] = xe, a[144] = $e, a[145] = ct) : ct = a[145];
		var dt = C != null && C.isSwitching ? ke.loadingFallback : Ee, mt;
		a[146] !== dt ? (mt = s.jsx(r("WAWebDrawerBody.react"), {
			ref: ue,
			children: s.jsx(o("WAWebBizAdCreationFooterPortalContext.react").FooterPortalProvider, {
				containerRef: se,
				children: dt
			})
		}), a[146] = dt, a[147] = mt) : mt = a[147];
		var pt;
		a[148] !== y ? (pt = y === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation ? s.jsx("div", {
			ref: se,
			className: "x2lah0s xh8yej3"
		}) : null, a[148] = y, a[149] = pt) : pt = a[149];
		var _t;
		a[150] !== ke.loadingFallback || a[151] !== mt || a[152] !== pt ? (_t = s.jsxs(r("CometPlaceholder.react"), {
			fallback: ke.loadingFallback,
			name: i.id,
			children: [mt, pt]
		}), a[150] = ke.loadingFallback, a[151] = mt, a[152] = pt, a[153] = _t) : _t = a[153];
		var ft;
		a[154] !== ve || a[155] !== Pe || a[156] !== ct || a[157] !== _t ? (ft = s.jsxs(ve, {
			xstyle: Pe,
			children: [ct, _t]
		}), a[154] = ve, a[155] = Pe, a[156] = ct, a[157] = _t, a[158] = ft) : ft = a[158];
		var gt = J != null ? f.rightDrawerOpen : f.rightDrawerClosed, ht;
		a[159] !== gt ? (ht = [f.rightDrawerWrapper, gt], a[159] = gt, a[160] = ht) : ht = a[160];
		var yt;
		a[161] !== S || a[162] !== J ? (yt = J != null && S != null ? s.jsx(o("CometRelay").RelayEnvironmentProvider, {
			environment: S,
			children: s.jsx(r("WAWebBizAdDetailsDrawer.react"), {
				item: J,
				onClose: re
			})
		}) : null, a[161] = S, a[162] = J, a[163] = yt) : yt = a[163];
		var Ct;
		a[164] !== ht || a[165] !== yt ? (Ct = s.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "slide-left",
			xstyle: ht,
			children: yt
		}), a[164] = ht, a[165] = yt, a[166] = Ct) : Ct = a[166];
		var bt;
		a[167] !== Se || a[168] !== Ne || a[169] !== ft || a[170] !== Ct ? (bt = s.jsxs(Se, {
			xstyle: Ne,
			children: [ft, Ct]
		}), a[167] = Se, a[168] = Ne, a[169] = ft, a[170] = Ct, a[171] = bt) : bt = a[171];
		var vt;
		a[172] !== Re || a[173] !== Me || a[174] !== we || a[175] !== bt ? (vt = s.jsx(Re, {
			theme: Me,
			tsNavigationData: we,
			children: bt
		}), a[172] = Re, a[173] = Me, a[174] = we, a[175] = bt, a[176] = vt) : vt = a[176];
		var St;
		return a[177] !== Le || a[178] !== Ae || a[179] !== Fe || a[180] !== Oe || a[181] !== Be || a[182] !== vt ? (St = s.jsx(Le, {
			fallback: Fe,
			name: Oe,
			onError: Be,
			children: vt
		}, Ae), a[177] = Le, a[178] = Ae, a[179] = Fe, a[180] = Oe, a[181] = Be, a[182] = vt, a[183] = St) : St = a[183], St;
	}
	function h(e) {
		return e + 1;
	}
	l.default = g;
}), 98);

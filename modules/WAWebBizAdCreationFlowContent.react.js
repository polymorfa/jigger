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
	"asyncToGeneratorRuntime",
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
		var t, a, l = o("react-compiler-runtime").c(184), u = e.flow, c = e.navigateToManageAdsForFirstTimeRef, g = e.scenario, y = e.showExitConfirmation, C = e.step, b = r("useWAWebBizAdCreationIdentityContext")(), v = o("WAWebBizNativeAdsStoredFBIdentityStore").useStoredFBIdentity(), S = r("useWAWebNativeAdsFlowIDContext")(), R = b == null ? void 0 : b.relayEnvironment, L = b == null ? void 0 : b.adCreationEntrypointReference, E = b == null ? void 0 : b.adManagementQueryVariables, k = b == null ? void 0 : b.resetForReAuth, I;
		l[0] !== u || l[1] !== S || l[2] !== b ? (I = function() {
			var e = S.regenerateAdCreationFlowID();
			b == null || b.reloadPreloadedQueries(e), u.pop();
		}, l[0] = u, l[1] = S, l[2] = b, l[3] = I) : I = l[3];
		var T = I, D;
		l[4] !== u || l[5] !== S || l[6] !== b ? (D = function() {
			var e = S.regenerateAdCreationFlowID();
			b == null || b.reloadPreloadedQueries(e), u.push(o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement);
		}, l[4] = u, l[5] = S, l[6] = b, l[7] = D) : D = l[7];
		var x = D, $, P;
		l[8] !== x || l[9] !== c ? ($ = function() {
			return c != null && (c.current = x), (function() {
				c != null && (c.current = null);
			});
		}, P = [x, c], l[8] = x, l[9] = c, l[10] = $, l[11] = P) : ($ = l[10], P = l[11]), m($, P);
		var N;
		l[12] !== u || l[13] !== S.adCreationFlowID || l[14] !== b ? (N = function() {
			r("WAWebBizNativeAdsNavigateToAdCreation")(b, u, S.adCreationFlowID);
		}, l[12] = u, l[13] = S.adCreationFlowID, l[14] = b, l[15] = N) : N = l[15];
		var M = N, w, A;
		l[16] !== u || l[17] !== b || l[18] !== R || l[19] !== C ? (w = function() {
			C === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation && b != null && R == null && !b.isSwitching && u.pop();
		}, A = [
			C,
			b,
			R,
			u
		], l[16] = u, l[17] = b, l[18] = R, l[19] = C, l[20] = w, l[21] = A) : (w = l[20], A = l[21]), m(w, A);
		var F = d(r("WAWebBizAdDraftSaveCallbackContext")), O = F.existingDraftIDRef, B;
		l[22] !== O ? (B = function(t) {
			O.current = t;
		}, l[22] = O, l[23] = B) : B = l[23];
		var W = B, q;
		l[24] === Symbol.for("react.memo_cache_sentinel") ? (q = r("justknobx")._("1659"), l[24] = q) : q = l[24];
		var U = q, V, H;
		if (l[25] !== b || l[26] !== R || l[27] !== g || l[28] !== v) {
			H = !1;
			var G = b == null ? void 0 : b.linkedPagesInfo;
			if (b != null && G != null) {
				var z, j = (z = b.accountType) != null ? z : "FB", K = v != null || b.accountType === "FB", Q;
				l[31] !== b.isWAAEligible || l[32] !== G.fbPageHasCreatedAd || l[33] !== G.waAdsIdentityPageHasCreatedAd || l[34] !== j || l[35] !== K ? (Q = o("WAWebBizNativeAdsScenarioRouter").resolveNativeAdsScenario({
					activeIdentityType: j,
					fbPageHasCreatedAd: G.fbPageHasCreatedAd,
					hasValidFBAccessToken: K,
					isWAAEligible: b.isWAAEligible,
					waAdsIdentityPageHasCreatedAd: G.waAdsIdentityPageHasCreatedAd
				}), l[31] = b.isWAAEligible, l[32] = G.fbPageHasCreatedAd, l[33] = G.waAdsIdentityPageHasCreatedAd, l[34] = j, l[35] = K, l[36] = Q) : Q = l[36], V = Q;
			} else b != null && !b.isWAAEligible ? V = "FIRST_TIME_NOT_WAA_ELIGIBLE" : U && b != null && R == null && b.accountType !== "WAA" && !b.isSwitching ? (H = !0, V = "HAS_FB_ADS_NO_FB_ACCESS_TOKEN") : V = g != null ? g : "RETURNING_WITH_ADS";
			l[25] = b, l[26] = R, l[27] = g, l[28] = v, l[29] = H, l[30] = V;
		} else H = l[29], V = l[30];
		var X;
		l[37] !== V ? (X = o("WAWebBizNativeAdsScenarioRouter").isFirstTimeScenario(V), l[37] = V, l[38] = X) : X = l[38];
		var Y = X, J = _(null), Z = J[0], ee = J[1], te;
		l[39] === Symbol.for("react.memo_cache_sentinel") ? (te = function(t) {
			ee(t);
		}, l[39] = te) : te = l[39];
		var ne = te, re;
		l[40] === Symbol.for("react.memo_cache_sentinel") ? (re = function() {
			ee(null);
		}, l[40] = re) : re = l[40];
		var oe = re, ae = r("useWAWebBizAdCreationFlowActions")(u, C, oe), ie = ae.handleEnterFlowError, le = ae.handleRecreateAd, se = ae.handleResumeDraft, ue = p(null), ce = p(null), de = _(0), me = de[0], pe = de[1], _e;
		l[41] !== ie || l[42] !== k ? (_e = function(t) {
			if (o("WAWebBizNativeAdsFBAuthError").isFBAuthError(t) && U) {
				r("FBLogger")("wa_ctwa_web").warn("Recovering from FB auth error in native ads flow: " + t.name), o("WAWebBizNativeAdsStoredFBIdentityStore").clearStoredFBIdentity(), k == null || k(), pe(h);
				return;
			}
			ie(t);
		}, l[41] = ie, l[42] = k, l[43] = _e) : _e = l[43];
		var fe = _e, ge = p(!1), he;
		l[44] !== H ? (he = function() {
			H && !ge.current ? (ge.current = !0, r("FBLogger")("wa_ctwa_web").warn("Native ads: recovering Manage Ads from null FB identity bundle via past-ads nudge")) : H || (ge.current = !1);
		}, l[44] = H, l[45] = he) : he = l[45];
		var ye;
		if (l[46] !== H ? (ye = [H], l[46] = H, l[47] = ye) : ye = l[47], m(he, ye), C == null) {
			r("FBLogger")("wa_ctwa_web").mustfix("AdCreationFlowContent rendered with null step");
			var Ce;
			return l[48] === Symbol.for("react.memo_cache_sentinel") ? (Ce = s.jsx(r("WAWebBizAdsErrorPopup.react"), { fallback: s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), { step: o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement }) }), l[48] = Ce) : Ce = l[48], Ce;
		}
		if ((b == null ? void 0 : b.identityError) != null) {
			var be;
			return l[49] !== C ? (be = s.jsx(r("WAWebBizAdsErrorPopup.react"), { fallback: s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), { step: C }) }), l[49] = C, l[50] = be) : be = l[50], be;
		}
		var ve, Se, Re, Le, Ee, ke, Ie, Te, De, xe, $e, Pe, Ne, Me, we, Ae, Fe, Oe, Be, We;
		if (l[51] !== L || l[52] !== E || l[53] !== V || l[54] !== me || l[55] !== u || l[56] !== S.adCreationFlowID || l[57] !== S.manageAdsFlowID || l[58] !== fe || l[59] !== M || l[60] !== le || l[61] !== se || l[62] !== (b == null ? void 0 : b.accountType) || l[63] !== (b == null ? void 0 : b.adManagementQueryRef) || l[64] !== (b == null ? void 0 : b.isSwitching) || l[65] !== (b == null ? void 0 : b.isWAAEligible) || l[66] !== (b == null || (t = b.linkedPagesInfo) == null ? void 0 : t.fbPageHasCreatedAd) || l[67] !== (b == null || (a = b.linkedPagesInfo) == null ? void 0 : a.waAdsIdentityPageHasCreatedAd) || l[68] !== (b == null ? void 0 : b.loginWithFacebook) || l[69] !== H || l[70] !== Y || l[71] !== T || l[72] !== x || l[73] !== R || l[74] !== (Z == null ? void 0 : Z.nodeId) || l[75] !== y || l[76] !== C || l[77] !== W) {
			var qe, Ue;
			Ie = o("WAWebBizNativeAdsDrawerConfig").getDrawerConfig(C);
			var Ve, He;
			e: {
				if (C === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation) {
					var Ge;
					l[98] !== u || l[99] !== Y || l[100] !== T || l[101] !== x || l[102] !== y ? (Ge = function() {
						n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
							var e = yield y();
							e !== "cancelled" && (Y ? e === "saved" ? x() : u.end() : T());
						})();
					}, l[98] = u, l[99] = Y, l[100] = T, l[101] = x, l[102] = y, l[103] = Ge) : Ge = l[103], Ve = Ge;
					var ze;
					l[104] !== L || l[105] !== T || l[106] !== R ? (ze = R != null && L != null ? s.jsx(o("CometRelay").RelayEnvironmentProvider, {
						environment: R,
						children: s.jsx(o("CometRelay").EntryPointContainer, {
							entryPointReference: L,
							props: { onNavigateToManageAds: T }
						})
					}) : null, l[104] = L, l[105] = T, l[106] = R, l[107] = ze) : ze = l[107], ke = ze;
					break e;
				}
				if (C === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement) {
					if (V === "FIRST_TIME_NOT_WAA_ELIGIBLE") {
						var je, Ke = (b == null ? void 0 : b.accountType) === "FB" && R != null, Qe = (je = b == null ? void 0 : b.loginWithFacebook) != null ? je : r("WAWebNoop"), Xe;
						l[108] !== S.adCreationFlowID || l[109] !== M || l[110] !== Ke || l[111] !== Qe ? (Xe = s.jsx(r("WAWebBizAdManagementFBLoginPrompt.react"), {
							adCreationFlowID: S.adCreationFlowID,
							isFBLoggedIn: Ke,
							onConnectFacebook: Qe,
							onNavigateToCreation: M
						}), l[108] = S.adCreationFlowID, l[109] = M, l[110] = Ke, l[111] = Qe, l[112] = Xe) : Xe = l[112], ke = Xe;
					} else if (V === "HAS_FB_ADS_NO_FB_ACCESS_TOKEN" || V === "HAS_FB_ADS_NOT_WAA_ELIGIBLE" || V === "HAS_FB_ADS_WAA_ACTIVE") {
						var Ye, Je = (Ye = b == null ? void 0 : b.loginWithFacebook) != null ? Ye : r("WAWebNoop"), Ze = !H && (V === "HAS_FB_ADS_NO_FB_ACCESS_TOKEN" || V === "HAS_FB_ADS_WAA_ACTIVE") ? M : null, et;
						l[113] !== S.manageAdsFlowID || l[114] !== Je || l[115] !== Ze ? (et = s.jsx(r("WAWebBizAdManagementPastAdsNudge.react"), {
							manageAdsFlowID: S.manageAdsFlowID,
							onConnectFacebook: Je,
							onSkipAndCreate: Ze
						}), l[113] = S.manageAdsFlowID, l[114] = Je, l[115] = Ze, l[116] = et) : et = l[116], ke = et;
					} else {
						var tt, nt, rt;
						l[117] !== u || l[118] !== (b == null ? void 0 : b.accountType) || l[119] !== R ? (rt = R != null ? s.jsx(o("CometRelay").RelayEnvironmentProvider, {
							environment: R,
							children: s.jsx(r("WAWebBizAdManagementHeaderButtonGroup.react"), {
								accountType: b == null ? void 0 : b.accountType,
								flow: u,
								relayEnvironment: R
							})
						}) : s.jsx(r("WAWebBizAdManagementHeaderButtonGroup.react"), {
							accountType: b == null ? void 0 : b.accountType,
							createAdDisabled: !0,
							flow: u,
							relayEnvironment: R
						}), l[117] = u, l[118] = b == null ? void 0 : b.accountType, l[119] = R, l[120] = rt) : rt = l[120], He = rt;
						var ot;
						if (l[121] !== E || l[122] !== M || l[123] !== le || l[124] !== se || l[125] !== (b == null ? void 0 : b.accountType) || l[126] !== (b == null ? void 0 : b.adManagementQueryRef) || l[127] !== (b == null ? void 0 : b.isWAAEligible) || l[128] !== (b == null || (tt = b.linkedPagesInfo) == null ? void 0 : tt.fbPageHasCreatedAd) || l[129] !== (b == null || (nt = b.linkedPagesInfo) == null ? void 0 : nt.waAdsIdentityPageHasCreatedAd) || l[130] !== (b == null ? void 0 : b.loginWithFacebook) || l[131] !== R || l[132] !== (Z == null ? void 0 : Z.nodeId) || l[133] !== W) {
							var at, it, lt, st, ut;
							ot = R != null && E != null ? s.jsx(o("CometRelay").RelayEnvironmentProvider, {
								environment: R,
								children: s.jsx(r("WAWebBizAdManagementRoot.react"), {
									draftPageId: E.draftPageId,
									hasCreatedAd: (b == null || (at = b.linkedPagesInfo) == null ? void 0 : at.fbPageHasCreatedAd) === !0 || (b == null || (it = b.linkedPagesInfo) == null ? void 0 : it.waAdsIdentityPageHasCreatedAd) === !0,
									isWAAEligible: (lt = b == null ? void 0 : b.isWAAEligible) != null ? lt : !1,
									onAdSelect: ne,
									onExistingDraftIDChange: W,
									onLoginToFacebook: (b == null ? void 0 : b.accountType) !== "FB" ? b == null ? void 0 : b.loginWithFacebook : void 0,
									onNavigateToCreation: M,
									onRecreateAd: le,
									onResumeDraft: se,
									pageId1: E.pageId1,
									pageId2: E.pageId2,
									queryRef: b == null ? void 0 : b.adManagementQueryRef,
									scrollContainerRef: ce,
									selectedKey: Z == null ? void 0 : Z.nodeId
								})
							}) : null, l[121] = E, l[122] = M, l[123] = le, l[124] = se, l[125] = b == null ? void 0 : b.accountType, l[126] = b == null ? void 0 : b.adManagementQueryRef, l[127] = b == null ? void 0 : b.isWAAEligible, l[128] = b == null || (st = b.linkedPagesInfo) == null ? void 0 : st.fbPageHasCreatedAd, l[129] = b == null || (ut = b.linkedPagesInfo) == null ? void 0 : ut.waAdsIdentityPageHasCreatedAd, l[130] = b == null ? void 0 : b.loginWithFacebook, l[131] = R, l[132] = Z == null ? void 0 : Z.nodeId, l[133] = W, l[134] = ot;
						} else ot = l[134];
						ke = ot;
					}
					break e;
				}
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + C);
			}
			if (ke == null && !(b != null && b.isSwitching)) {
				var ct = C === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation && L == null && R != null;
				ct || r("FBLogger")("wa_ctwa_web").warn("bodyContent is null in AdCreationFlowContent for step " + String(C) + ": relayEnvironment=" + String(R != null) + " adCreationEntrypointRef=" + String(L != null) + " adManagementQueryVars=" + String(E != null) + " isWAAEligible=" + String(b == null ? void 0 : b.isWAAEligible)), ke = Ie.loadingFallback;
			}
			Ee = r("WAWebBizErrorBoundary.react"), Fe = me, l[135] !== C ? (Oe = s.jsx(r("WAWebBizAdsErrorPopup.react"), { fallback: s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), { step: C }) }), l[135] = C, l[136] = Oe) : Oe = l[136], Be = "WAWebNativeAdsFlow", We = fe, Le = r("WAWebDrawer.react"), we = Ie.drawerTheme, l[137] === Symbol.for("react.memo_cache_sentinel") ? (Ae = {
				surface: "unknown",
				viewName: "biz-native-ads"
			}, l[137] = Ae) : Ae = l[137], Re = o("WAWebFlex.react").FlexRow, Me = f.fullscreenRoot, Se = o("WAWebFlexBox.react").FlexColumn, Ne = f.mainContentWithHeader, ve = o("WAWebDrawerHeader.react").DrawerHeader, Te = C === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation, De = C === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement, xe = Ve, $e = He, Pe = Ie.title(), l[51] = L, l[52] = E, l[53] = V, l[54] = me, l[55] = u, l[56] = S.adCreationFlowID, l[57] = S.manageAdsFlowID, l[58] = fe, l[59] = M, l[60] = le, l[61] = se, l[62] = b == null ? void 0 : b.accountType, l[63] = b == null ? void 0 : b.adManagementQueryRef, l[64] = b == null ? void 0 : b.isSwitching, l[65] = b == null ? void 0 : b.isWAAEligible, l[66] = b == null || (qe = b.linkedPagesInfo) == null ? void 0 : qe.fbPageHasCreatedAd, l[67] = b == null || (Ue = b.linkedPagesInfo) == null ? void 0 : Ue.waAdsIdentityPageHasCreatedAd, l[68] = b == null ? void 0 : b.loginWithFacebook, l[69] = H, l[70] = Y, l[71] = T, l[72] = x, l[73] = R, l[74] = Z == null ? void 0 : Z.nodeId, l[75] = y, l[76] = C, l[77] = W, l[78] = ve, l[79] = Se, l[80] = Re, l[81] = Le, l[82] = Ee, l[83] = ke, l[84] = Ie, l[85] = Te, l[86] = De, l[87] = xe, l[88] = $e, l[89] = Pe, l[90] = Ne, l[91] = Me, l[92] = we, l[93] = Ae, l[94] = Fe, l[95] = Oe, l[96] = Be, l[97] = We;
		} else ve = l[78], Se = l[79], Re = l[80], Le = l[81], Ee = l[82], ke = l[83], Ie = l[84], Te = l[85], De = l[86], xe = l[87], $e = l[88], Pe = l[89], Ne = l[90], Me = l[91], we = l[92], Ae = l[93], Fe = l[94], Oe = l[95], Be = l[96], We = l[97];
		var dt;
		l[138] !== ve || l[139] !== Ie.headerType || l[140] !== Te || l[141] !== De || l[142] !== xe || l[143] !== $e || l[144] !== Pe ? (dt = s.jsx(ve, {
			focusBackOrCancel: Te,
			focusTitle: De,
			onBack: xe,
			rightActionElement: $e,
			title: Pe,
			type: Ie.headerType
		}), l[138] = ve, l[139] = Ie.headerType, l[140] = Te, l[141] = De, l[142] = xe, l[143] = $e, l[144] = Pe, l[145] = dt) : dt = l[145];
		var mt = b != null && b.isSwitching ? Ie.loadingFallback : ke, pt;
		l[146] !== mt ? (pt = s.jsx(r("WAWebDrawerBody.react"), {
			ref: ce,
			children: s.jsx(o("WAWebBizAdCreationFooterPortalContext.react").FooterPortalProvider, {
				containerRef: ue,
				children: mt
			})
		}), l[146] = mt, l[147] = pt) : pt = l[147];
		var _t;
		l[148] !== C ? (_t = C === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation ? s.jsx("div", {
			ref: ue,
			className: "x2lah0s xh8yej3"
		}) : null, l[148] = C, l[149] = _t) : _t = l[149];
		var ft;
		l[150] !== Ie.loadingFallback || l[151] !== pt || l[152] !== _t ? (ft = s.jsxs(r("CometPlaceholder.react"), {
			fallback: Ie.loadingFallback,
			name: i.id,
			children: [pt, _t]
		}), l[150] = Ie.loadingFallback, l[151] = pt, l[152] = _t, l[153] = ft) : ft = l[153];
		var gt;
		l[154] !== Se || l[155] !== Ne || l[156] !== dt || l[157] !== ft ? (gt = s.jsxs(Se, {
			xstyle: Ne,
			children: [dt, ft]
		}), l[154] = Se, l[155] = Ne, l[156] = dt, l[157] = ft, l[158] = gt) : gt = l[158];
		var ht = Z != null ? f.rightDrawerOpen : f.rightDrawerClosed, yt;
		l[159] !== ht ? (yt = [f.rightDrawerWrapper, ht], l[159] = ht, l[160] = yt) : yt = l[160];
		var Ct;
		l[161] !== R || l[162] !== Z ? (Ct = Z != null && R != null ? s.jsx(o("CometRelay").RelayEnvironmentProvider, {
			environment: R,
			children: s.jsx(r("WAWebBizAdDetailsDrawer.react"), {
				item: Z,
				onClose: oe
			})
		}) : null, l[161] = R, l[162] = Z, l[163] = Ct) : Ct = l[163];
		var bt;
		l[164] !== yt || l[165] !== Ct ? (bt = s.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "slide-left",
			xstyle: yt,
			children: Ct
		}), l[164] = yt, l[165] = Ct, l[166] = bt) : bt = l[166];
		var vt;
		l[167] !== Re || l[168] !== Me || l[169] !== gt || l[170] !== bt ? (vt = s.jsxs(Re, {
			xstyle: Me,
			children: [gt, bt]
		}), l[167] = Re, l[168] = Me, l[169] = gt, l[170] = bt, l[171] = vt) : vt = l[171];
		var St;
		l[172] !== Le || l[173] !== we || l[174] !== Ae || l[175] !== vt ? (St = s.jsx(Le, {
			theme: we,
			tsNavigationData: Ae,
			children: vt
		}), l[172] = Le, l[173] = we, l[174] = Ae, l[175] = vt, l[176] = St) : St = l[176];
		var Rt;
		return l[177] !== Ee || l[178] !== Fe || l[179] !== Oe || l[180] !== Be || l[181] !== We || l[182] !== St ? (Rt = s.jsx(Ee, {
			fallback: Oe,
			name: Be,
			onError: We,
			children: St
		}, Fe), l[177] = Ee, l[178] = Fe, l[179] = Oe, l[180] = Be, l[181] = We, l[182] = St, l[183] = Rt) : Rt = l[183], Rt;
	}
	function h(e) {
		return e + 1;
	}
	l.default = g;
}), 98);

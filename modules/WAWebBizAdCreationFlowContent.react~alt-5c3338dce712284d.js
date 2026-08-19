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
		var t = e.flow, n = e.navigateToManageAdsForFirstTimeRef, a = e.scenario, l = e.showExitConfirmation, u = e.step, g = r("useWAWebBizAdCreationIdentityContext")(), h = o("WAWebBizNativeAdsStoredFBIdentityStore").useStoredFBIdentity(), y = r("useWAWebNativeAdsFlowIDContext")(), C = g == null ? void 0 : g.relayEnvironment, b = g == null ? void 0 : g.adCreationEntrypointReference, v = g == null ? void 0 : g.adManagementQueryVariables, S = g == null ? void 0 : g.resetForReAuth, R = c(function() {
			var e = y.regenerateAdCreationFlowID();
			g == null || g.reloadPreloadedQueries(e), t.pop();
		}, [
			t,
			y,
			g
		]), L = c(function() {
			var e = y.regenerateAdCreationFlowID();
			g == null || g.reloadPreloadedQueries(e), t.push(o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement);
		}, [
			t,
			y,
			g
		]);
		m(function() {
			return n != null && (n.current = L), function() {
				n != null && (n.current = null);
			};
		}, [L, n]);
		var E = c(function() {
			r("WAWebBizNativeAdsNavigateToAdCreation")(g, t, y.adCreationFlowID);
		}, [
			t,
			y.adCreationFlowID,
			g
		]);
		m(function() {
			u === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation && g != null && C == null && !g.isSwitching && t.pop();
		}, [
			u,
			g,
			C,
			t
		]);
		var k = d(r("WAWebBizAdDraftSaveCallbackContext")), I = k.existingDraftIDRef, T = c(function(e) {
			I.current = e;
		}, [I]), D = r("justknobx")._("1659"), x, $ = !1, P = g == null ? void 0 : g.linkedPagesInfo;
		if (g != null && P != null) {
			var N;
			x = o("WAWebBizNativeAdsScenarioRouter").resolveNativeAdsScenario({
				activeIdentityType: (N = g.accountType) != null ? N : "FB",
				fbPageHasCreatedAd: P.fbPageHasCreatedAd,
				hasValidFBAccessToken: h != null || g.accountType === "FB",
				isWAAEligible: g.isWAAEligible,
				waAdsIdentityPageHasCreatedAd: P.waAdsIdentityPageHasCreatedAd
			});
		} else g != null && !g.isWAAEligible ? x = "FIRST_TIME_NOT_WAA_ELIGIBLE" : D && g != null && C == null && g.accountType !== "WAA" && !g.isSwitching ? ($ = !0, x = "HAS_FB_ADS_NO_FB_ACCESS_TOKEN") : x = a != null ? a : "RETURNING_WITH_ADS";
		var M = o("WAWebBizNativeAdsScenarioRouter").isFirstTimeScenario(x), w = _(null), A = w[0], F = w[1], O = c(function(e) {
			F(e);
		}, []), B = c(function() {
			F(null);
		}, []), W = r("useWAWebBizAdCreationFlowActions")(t, u, B), q = W.handleEnterFlowError, U = W.handleRecreateAd, V = W.handleResumeDraft, H = p(null), G = p(null), z = _(0), j = z[0], K = z[1], Q = c(function(e) {
			if (o("WAWebBizNativeAdsFBAuthError").isFBAuthError(e) && D) {
				r("FBLogger")("wa_ctwa_web").warn("Recovering from FB auth error in native ads flow: " + e.name), o("WAWebBizNativeAdsStoredFBIdentityStore").clearStoredFBIdentity(), S == null || S(), K(function(e) {
					return e + 1;
				});
				return;
			}
			q(e);
		}, [
			q,
			D,
			S
		]), X = p(!1);
		if (m(function() {
			$ && !X.current ? (X.current = !0, r("FBLogger")("wa_ctwa_web").warn("Native ads: recovering Manage Ads from null FB identity bundle via past-ads nudge")) : $ || (X.current = !1);
		}, [$]), u == null) return r("FBLogger")("wa_ctwa_web").mustfix("AdCreationFlowContent rendered with null step"), s.jsx(r("WAWebBizAdsErrorPopup.react"), { fallback: s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), { step: o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement }) });
		if ((g == null ? void 0 : g.identityError) != null) return s.jsx(r("WAWebBizAdsErrorPopup.react"), { fallback: s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), { step: u }) });
		var Y = o("WAWebBizNativeAdsDrawerConfig").getDrawerConfig(u), J, Z, ee;
		e: {
			if (u === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation) {
				Z = function() {
					(async function() {
						var e = await l();
						e !== "cancelled" && (M ? e === "saved" ? L() : t.end() : R());
					})();
				}, J = C != null && b != null ? s.jsx(o("CometRelay").RelayEnvironmentProvider, {
					environment: C,
					children: s.jsx(o("CometRelay").EntryPointContainer, {
						entryPointReference: b,
						props: { onNavigateToManageAds: R }
					})
				}) : null;
				break e;
			}
			if (u === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement) {
				if (x === "FIRST_TIME_NOT_WAA_ELIGIBLE") {
					var te;
					J = s.jsx(r("WAWebBizAdManagementFBLoginPrompt.react"), {
						adCreationFlowID: y.adCreationFlowID,
						isFBLoggedIn: (g == null ? void 0 : g.accountType) === "FB" && C != null,
						onConnectFacebook: (te = g == null ? void 0 : g.loginWithFacebook) != null ? te : r("WAWebNoop"),
						onNavigateToCreation: E
					});
				} else if (x === "HAS_FB_ADS_NO_FB_ACCESS_TOKEN" || x === "HAS_FB_ADS_NOT_WAA_ELIGIBLE" || x === "HAS_FB_ADS_WAA_ACTIVE") {
					var ne;
					J = s.jsx(r("WAWebBizAdManagementPastAdsNudge.react"), {
						manageAdsFlowID: y.manageAdsFlowID,
						onConnectFacebook: (ne = g == null ? void 0 : g.loginWithFacebook) != null ? ne : r("WAWebNoop"),
						onSkipAndCreate: !$ && (x === "HAS_FB_ADS_NO_FB_ACCESS_TOKEN" || x === "HAS_FB_ADS_WAA_ACTIVE") ? E : null
					});
				} else {
					var re, oe, ae;
					ee = C != null ? s.jsx(o("CometRelay").RelayEnvironmentProvider, {
						environment: C,
						children: s.jsx(r("WAWebBizAdManagementHeaderButtonGroup.react"), {
							accountType: g == null ? void 0 : g.accountType,
							flow: t,
							relayEnvironment: C
						})
					}) : s.jsx(r("WAWebBizAdManagementHeaderButtonGroup.react"), {
						accountType: g == null ? void 0 : g.accountType,
						createAdDisabled: !0,
						flow: t,
						relayEnvironment: C
					}), J = C != null && v != null ? s.jsx(o("CometRelay").RelayEnvironmentProvider, {
						environment: C,
						children: s.jsx(r("WAWebBizAdManagementRoot.react"), {
							draftPageId: v.draftPageId,
							hasCreatedAd: (g == null || (re = g.linkedPagesInfo) == null ? void 0 : re.fbPageHasCreatedAd) === !0 || (g == null || (oe = g.linkedPagesInfo) == null ? void 0 : oe.waAdsIdentityPageHasCreatedAd) === !0,
							isWAAEligible: (ae = g == null ? void 0 : g.isWAAEligible) != null ? ae : !1,
							onAdSelect: O,
							onExistingDraftIDChange: T,
							onLoginToFacebook: (g == null ? void 0 : g.accountType) !== "FB" ? g == null ? void 0 : g.loginWithFacebook : void 0,
							onNavigateToCreation: E,
							onRecreateAd: U,
							onResumeDraft: V,
							pageId1: v.pageId1,
							pageId2: v.pageId2,
							queryRef: g == null ? void 0 : g.adManagementQueryRef,
							scrollContainerRef: G,
							selectedKey: A == null ? void 0 : A.nodeId
						})
					}) : null;
				}
				break e;
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + u);
		}
		if (J == null && !(g != null && g.isSwitching)) {
			var ie = u === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation && b == null && C != null;
			ie || r("FBLogger")("wa_ctwa_web").warn("bodyContent is null in AdCreationFlowContent for step " + String(u) + ": relayEnvironment=" + String(C != null) + " adCreationEntrypointRef=" + String(b != null) + " adManagementQueryVars=" + String(v != null) + " isWAAEligible=" + String(g == null ? void 0 : g.isWAAEligible)), J = Y.loadingFallback;
		}
		return s.jsx(r("WAWebBizErrorBoundary.react"), {
			fallback: s.jsx(r("WAWebBizAdsErrorPopup.react"), { fallback: s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), { step: u }) }),
			name: "WAWebNativeAdsFlow",
			onError: Q,
			children: s.jsx(r("WAWebDrawer.react"), {
				theme: Y.drawerTheme,
				tsNavigationData: {
					surface: "unknown",
					viewName: "biz-native-ads"
				},
				children: s.jsxs(o("WAWebFlex.react").FlexRow, {
					xstyle: f.fullscreenRoot,
					children: [s.jsxs(o("WAWebFlexBox.react").FlexColumn, {
						xstyle: f.mainContentWithHeader,
						children: [s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
							focusBackOrCancel: u === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation,
							focusTitle: u === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement,
							onBack: Z,
							rightActionElement: ee,
							title: Y.title(),
							type: Y.headerType
						}), s.jsxs(r("CometPlaceholder.react"), {
							fallback: Y.loadingFallback,
							name: i.id,
							children: [s.jsx(r("WAWebDrawerBody.react"), {
								ref: G,
								children: s.jsx(o("WAWebBizAdCreationFooterPortalContext.react").FooterPortalProvider, {
									containerRef: H,
									children: g != null && g.isSwitching ? Y.loadingFallback : J
								})
							}), u === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation ? s.jsx("div", {
								ref: H,
								className: "x2lah0s xh8yej3"
							}) : null]
						})]
					}), s.jsx(r("WAWebVelocityTransitionGroup"), {
						transitionName: "slide-left",
						xstyle: [f.rightDrawerWrapper, A != null ? f.rightDrawerOpen : f.rightDrawerClosed],
						children: A != null && C != null ? s.jsx(o("CometRelay").RelayEnvironmentProvider, {
							environment: C,
							children: s.jsx(r("WAWebBizAdDetailsDrawer.react"), {
								item: A,
								onClose: B
							})
						}) : null
					})]
				})
			})
		}, j);
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);

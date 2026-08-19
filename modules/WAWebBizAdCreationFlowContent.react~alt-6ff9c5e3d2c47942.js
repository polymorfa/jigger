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
		var t = e.flow, a = e.navigateToManageAdsForFirstTimeRef, l = e.scenario, u = e.showExitConfirmation, g = e.step, h = r("useWAWebBizAdCreationIdentityContext")(), y = o("WAWebBizNativeAdsStoredFBIdentityStore").useStoredFBIdentity(), C = r("useWAWebNativeAdsFlowIDContext")(), b = h == null ? void 0 : h.relayEnvironment, v = h == null ? void 0 : h.adCreationEntrypointReference, S = h == null ? void 0 : h.adManagementQueryVariables, R = h == null ? void 0 : h.resetForReAuth, L = c(function() {
			var e = C.regenerateAdCreationFlowID();
			h == null || h.reloadPreloadedQueries(e), t.pop();
		}, [
			t,
			C,
			h
		]), E = c(function() {
			var e = C.regenerateAdCreationFlowID();
			h == null || h.reloadPreloadedQueries(e), t.push(o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement);
		}, [
			t,
			C,
			h
		]);
		m(function() {
			return a != null && (a.current = E), function() {
				a != null && (a.current = null);
			};
		}, [E, a]);
		var k = c(function() {
			r("WAWebBizNativeAdsNavigateToAdCreation")(h, t, C.adCreationFlowID);
		}, [
			t,
			C.adCreationFlowID,
			h
		]);
		m(function() {
			g === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation && h != null && b == null && !h.isSwitching && t.pop();
		}, [
			g,
			h,
			b,
			t
		]);
		var I = d(r("WAWebBizAdDraftSaveCallbackContext")), T = I.existingDraftIDRef, D = c(function(e) {
			T.current = e;
		}, [T]), x = r("justknobx")._("1659"), $, P = !1, N = h == null ? void 0 : h.linkedPagesInfo;
		if (h != null && N != null) {
			var M;
			$ = o("WAWebBizNativeAdsScenarioRouter").resolveNativeAdsScenario({
				activeIdentityType: (M = h.accountType) != null ? M : "FB",
				fbPageHasCreatedAd: N.fbPageHasCreatedAd,
				hasValidFBAccessToken: y != null || h.accountType === "FB",
				isWAAEligible: h.isWAAEligible,
				waAdsIdentityPageHasCreatedAd: N.waAdsIdentityPageHasCreatedAd
			});
		} else h != null && !h.isWAAEligible ? $ = "FIRST_TIME_NOT_WAA_ELIGIBLE" : x && h != null && b == null && h.accountType !== "WAA" && !h.isSwitching ? (P = !0, $ = "HAS_FB_ADS_NO_FB_ACCESS_TOKEN") : $ = l != null ? l : "RETURNING_WITH_ADS";
		var w = o("WAWebBizNativeAdsScenarioRouter").isFirstTimeScenario($), A = _(null), F = A[0], O = A[1], B = c(function(e) {
			O(e);
		}, []), W = c(function() {
			O(null);
		}, []), q = r("useWAWebBizAdCreationFlowActions")(t, g, W), U = q.handleEnterFlowError, V = q.handleRecreateAd, H = q.handleResumeDraft, G = p(null), z = p(null), j = _(0), K = j[0], Q = j[1], X = c(function(e) {
			if (o("WAWebBizNativeAdsFBAuthError").isFBAuthError(e) && x) {
				r("FBLogger")("wa_ctwa_web").warn("Recovering from FB auth error in native ads flow: " + e.name), o("WAWebBizNativeAdsStoredFBIdentityStore").clearStoredFBIdentity(), R == null || R(), Q(function(e) {
					return e + 1;
				});
				return;
			}
			U(e);
		}, [
			U,
			x,
			R
		]), Y = p(!1);
		if (m(function() {
			P && !Y.current ? (Y.current = !0, r("FBLogger")("wa_ctwa_web").warn("Native ads: recovering Manage Ads from null FB identity bundle via past-ads nudge")) : P || (Y.current = !1);
		}, [P]), g == null) return r("FBLogger")("wa_ctwa_web").mustfix("AdCreationFlowContent rendered with null step"), s.jsx(r("WAWebBizAdsErrorPopup.react"), { fallback: s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), { step: o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement }) });
		if ((h == null ? void 0 : h.identityError) != null) return s.jsx(r("WAWebBizAdsErrorPopup.react"), { fallback: s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), { step: g }) });
		var J = o("WAWebBizNativeAdsDrawerConfig").getDrawerConfig(g), Z, ee, te;
		e: {
			if (g === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation) {
				ee = function() {
					n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
						var e = yield u();
						e !== "cancelled" && (w ? e === "saved" ? E() : t.end() : L());
					})();
				}, Z = b != null && v != null ? s.jsx(o("CometRelay").RelayEnvironmentProvider, {
					environment: b,
					children: s.jsx(o("CometRelay").EntryPointContainer, {
						entryPointReference: v,
						props: { onNavigateToManageAds: L }
					})
				}) : null;
				break e;
			}
			if (g === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement) {
				if ($ === "FIRST_TIME_NOT_WAA_ELIGIBLE") {
					var ne;
					Z = s.jsx(r("WAWebBizAdManagementFBLoginPrompt.react"), {
						adCreationFlowID: C.adCreationFlowID,
						isFBLoggedIn: (h == null ? void 0 : h.accountType) === "FB" && b != null,
						onConnectFacebook: (ne = h == null ? void 0 : h.loginWithFacebook) != null ? ne : r("WAWebNoop"),
						onNavigateToCreation: k
					});
				} else if ($ === "HAS_FB_ADS_NO_FB_ACCESS_TOKEN" || $ === "HAS_FB_ADS_NOT_WAA_ELIGIBLE" || $ === "HAS_FB_ADS_WAA_ACTIVE") {
					var re;
					Z = s.jsx(r("WAWebBizAdManagementPastAdsNudge.react"), {
						manageAdsFlowID: C.manageAdsFlowID,
						onConnectFacebook: (re = h == null ? void 0 : h.loginWithFacebook) != null ? re : r("WAWebNoop"),
						onSkipAndCreate: !P && ($ === "HAS_FB_ADS_NO_FB_ACCESS_TOKEN" || $ === "HAS_FB_ADS_WAA_ACTIVE") ? k : null
					});
				} else {
					var oe, ae, ie;
					te = b != null ? s.jsx(o("CometRelay").RelayEnvironmentProvider, {
						environment: b,
						children: s.jsx(r("WAWebBizAdManagementHeaderButtonGroup.react"), {
							accountType: h == null ? void 0 : h.accountType,
							flow: t,
							relayEnvironment: b
						})
					}) : s.jsx(r("WAWebBizAdManagementHeaderButtonGroup.react"), {
						accountType: h == null ? void 0 : h.accountType,
						createAdDisabled: !0,
						flow: t,
						relayEnvironment: b
					}), Z = b != null && S != null ? s.jsx(o("CometRelay").RelayEnvironmentProvider, {
						environment: b,
						children: s.jsx(r("WAWebBizAdManagementRoot.react"), {
							draftPageId: S.draftPageId,
							hasCreatedAd: (h == null || (oe = h.linkedPagesInfo) == null ? void 0 : oe.fbPageHasCreatedAd) === !0 || (h == null || (ae = h.linkedPagesInfo) == null ? void 0 : ae.waAdsIdentityPageHasCreatedAd) === !0,
							isWAAEligible: (ie = h == null ? void 0 : h.isWAAEligible) != null ? ie : !1,
							onAdSelect: B,
							onExistingDraftIDChange: D,
							onLoginToFacebook: (h == null ? void 0 : h.accountType) !== "FB" ? h == null ? void 0 : h.loginWithFacebook : void 0,
							onNavigateToCreation: k,
							onRecreateAd: V,
							onResumeDraft: H,
							pageId1: S.pageId1,
							pageId2: S.pageId2,
							queryRef: h == null ? void 0 : h.adManagementQueryRef,
							scrollContainerRef: z,
							selectedKey: F == null ? void 0 : F.nodeId
						})
					}) : null;
				}
				break e;
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + g);
		}
		if (Z == null && !(h != null && h.isSwitching)) {
			var le = g === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation && v == null && b != null;
			le || r("FBLogger")("wa_ctwa_web").warn("bodyContent is null in AdCreationFlowContent for step " + String(g) + ": relayEnvironment=" + String(b != null) + " adCreationEntrypointRef=" + String(v != null) + " adManagementQueryVars=" + String(S != null) + " isWAAEligible=" + String(h == null ? void 0 : h.isWAAEligible)), Z = J.loadingFallback;
		}
		return s.jsx(r("WAWebBizErrorBoundary.react"), {
			fallback: s.jsx(r("WAWebBizAdsErrorPopup.react"), { fallback: s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), { step: g }) }),
			name: "WAWebNativeAdsFlow",
			onError: X,
			children: s.jsx(r("WAWebDrawer.react"), {
				theme: J.drawerTheme,
				tsNavigationData: {
					surface: "unknown",
					viewName: "biz-native-ads"
				},
				children: s.jsxs(o("WAWebFlex.react").FlexRow, {
					xstyle: f.fullscreenRoot,
					children: [s.jsxs(o("WAWebFlexBox.react").FlexColumn, {
						xstyle: f.mainContentWithHeader,
						children: [s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
							focusBackOrCancel: g === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation,
							focusTitle: g === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdManagement,
							onBack: ee,
							rightActionElement: te,
							title: J.title(),
							type: J.headerType
						}), s.jsxs(r("CometPlaceholder.react"), {
							fallback: J.loadingFallback,
							name: i.id,
							children: [s.jsx(r("WAWebDrawerBody.react"), {
								ref: z,
								children: s.jsx(o("WAWebBizAdCreationFooterPortalContext.react").FooterPortalProvider, {
									containerRef: G,
									children: h != null && h.isSwitching ? J.loadingFallback : Z
								})
							}), g === o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation ? s.jsx("div", {
								ref: G,
								className: "x2lah0s xh8yej3"
							}) : null]
						})]
					}), s.jsx(r("WAWebVelocityTransitionGroup"), {
						transitionName: "slide-left",
						xstyle: [f.rightDrawerWrapper, F != null ? f.rightDrawerOpen : f.rightDrawerClosed],
						children: F != null && b != null ? s.jsx(o("CometRelay").RelayEnvironmentProvider, {
							environment: b,
							children: s.jsx(r("WAWebBizAdDetailsDrawer.react"), {
								item: F,
								onClose: W
							})
						}) : null
					})]
				})
			})
		}, K);
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);

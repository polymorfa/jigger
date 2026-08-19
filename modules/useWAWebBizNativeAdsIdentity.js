__d("useWAWebBizNativeAdsIdentity", [
	"FBLogger",
	"WAWebBizAdCreationResolveStoredIdentity",
	"WAWebBizNativeAdsIdentityLogger",
	"WAWebBizNativeAdsPreparePreloads",
	"WAWebBizNativeAdsResolveRelayIdentityBundle",
	"WAWebBizNativeAdsStoredFBIdentityStore",
	"WAWebCommonAdsTypes",
	"WAWebFetchAdAccountToken",
	"WAWebGetAdsRelayEnvironment",
	"WAWebOIDCFlow.react",
	"WAWebResolveAccountTypeAndAdPage",
	"WAWebUserPrefsGeneral",
	"WAWebWamEnumLwiScreenAction",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"justknobx",
	"react",
	"useWAWebNativeAdsFlowIDContext"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useMemo, d = s.useState;
	function m(e, t, n, r) {
		var a = n ? p(e) : e.adManagementQueryVariables;
		return babelHelpers.extends({}, e, {
			adCreationEntrypointReference: o("WAWebBizNativeAdsPreparePreloads").prepareAdCreationEntrypoint(e, t, {
				boostId: r == null ? void 0 : r.boostId,
				draftId: r == null ? void 0 : r.draftId
			}),
			adManagementQueryRef: o("WAWebBizNativeAdsPreparePreloads").prepareAdManagementQuery(babelHelpers.extends({}, e, { adManagementQueryVariables: a })),
			adManagementQueryVariables: a
		});
	}
	function p(e) {
		var t = e.adManagementQueryVariables;
		if (t.pageId1 !== "" || e.pageId == null) return t;
		var n = String(e.pageId);
		return {
			draftPageId: n,
			pageId1: n,
			pageId2: null
		};
	}
	function _(e, t, n) {
		return babelHelpers.extends({}, e, {
			adAccountId: n,
			adCreationEntrypointReference: o("WAWebBizNativeAdsPreparePreloads").prepareAdCreationEntrypoint(e, t, { adAccountId: n })
		});
	}
	function f(e, t) {
		var a, i = r("useWAWebNativeAdsFlowIDContext")(), l = i.adCreationFlowID, s = i.manageAdsFlowID, p = d(e), f = p[0], g = p[1], h = d(null), y = h[0], C = h[1], b = u(function(e) {
			g(e), C(null);
		}, []), v = u(function(e, t) {
			if (f != null && e !== "") {
				var n = r("justknobx")._("897");
				if (f.pageId == null) {
					var a = n && f.adManagementQueryVariables.pageId1 === "";
					g(babelHelpers.extends({}, f, { adManagementQueryRef: a ? null : o("WAWebBizNativeAdsPreparePreloads").prepareAdManagementQuery(f) }));
					return;
				}
				g(m(f, e, n, t));
			}
		}, [f]), S = c(function() {
			return f == null ? null : f.hasWeakToken ? y : f.relayEnvironment;
		}, [f, y]), R = d(!1), L = R[0], E = R[1], k = d(null), I = k[0], T = k[1], D = u(function() {
			g(null), T(null), C(null);
		}, []), x = f == null ? void 0 : f.accountType, $ = (a = f == null ? void 0 : f.hasLinkedFbPage) != null ? a : !1, P = (f == null ? void 0 : f.adCreationEntrypointReference) != null, N = u((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				if (f == null) return null;
				try {
					var n = yield o("WAWebBizNativeAdsResolveRelayIdentityBundle").prepareDeferredAdCreationEntrypoint({
						existingBundle: f,
						flowID: e,
						options: t
					});
					return g(n), n.pageId;
				} catch (e) {
					return r("FBLogger")("wa_ctwa_web").catching(r("getErrorSafe")(e)).mustfix("prepareDeferredAdCreationEntrypoint failed"), T(r("getErrorSafe")(e)), null;
				}
			});
			return function(t, n) {
				return e.apply(this, arguments);
			};
		})(), [f]), M = u(function(e, a) {
			E(!0), n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var n = yield o("WAWebBizNativeAdsResolveRelayIdentityBundle").resolveBizNativeAdsRelayIdentityBundle(e, l, null, P, a);
					if (n == null && e === "FB") {
						o("WAWebOIDCFlow.react").launchOIDCFlow();
						return;
					}
					b(n), n != null && o("WAWebUserPrefsGeneral").setLastUsedAdAccountType(e);
				} catch (n) {
					var i = r("getErrorSafe")(n);
					T(i), o("WAWebBizNativeAdsIdentityLogger").logIdentityErrorEvent({
						accountType: x,
						error: i,
						hasLinkedFbPage: $,
						isWAAEligible: t,
						lwiFlowId: l,
						targetAccountType: e
					});
				} finally {
					E(!1);
				}
			})();
		}, [
			l,
			x,
			P,
			$,
			t,
			b
		]), w = u(function() {
			x !== "WAA" && (o("WAWebBizNativeAdsIdentityLogger").logManageAdsIdentityEvent({
				_accountType: x,
				hasLinkedFbPage: $,
				isWAAEligible: t,
				lwiFlowId: s,
				lwiScreenAction: o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_WA_PAGELESS_BUTTON_TAPPED
			}), M("WAA"));
		}, [
			x,
			t,
			$,
			s,
			M
		]), A = u(function() {
			if (x !== "FB") {
				o("WAWebBizNativeAdsIdentityLogger").logManageAdsIdentityEvent({
					_accountType: x,
					hasLinkedFbPage: $,
					isWAAEligible: t,
					lwiFlowId: s,
					lwiScreenAction: o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_LOGIN_WITH_FB_TAPPED
				});
				var e = o("WAWebBizAdCreationResolveStoredIdentity").resolveStoredIdentityForAccountType("FB");
				e != null ? M("FB") : o("WAWebOIDCFlow.react").launchOIDCFlow();
			}
		}, [
			x,
			t,
			$,
			s,
			M
		]), F = u(function() {
			var e = o("WAWebBizAdCreationResolveStoredIdentity").resolveStoredIdentityForAccountType("FB");
			e != null && (o("WAWebBizNativeAdsIdentityLogger").logManageAdsIdentityEvent({
				_accountType: x,
				hasLinkedFbPage: $,
				isWAAEligible: t,
				lwiFlowId: s,
				lwiScreenAction: o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_REMOVE_ACCOUNT_TAPPED
			}), E(!0), o("WAWebResolveAccountTypeAndAdPage").clearSavedOIDCLoginPreference(e).catch(function(e) {
				var t = r("getErrorSafe")(e);
				o("WAWebFetchAdAccountToken").hasGraphQLAuthError(t) ? r("FBLogger")("wa_ctwa_web").warn("Failed to clear OIDC login preference (auth error)") : r("FBLogger")("wa_ctwa_web").catching(t).warn("Failed to clear OIDC login preference");
			}).finally(function() {
				o("WAWebBizNativeAdsStoredFBIdentityStore").clearStoredFBIdentity(), t ? M("WAA") : (b(null), E(!1));
			}));
		}, [
			x,
			t,
			$,
			s,
			M,
			b
		]), O = u(function(e) {
			f != null && b(_(f, l, e));
		}, [
			l,
			f,
			b
		]), B = u((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				if (e.type === "WAA" && e.tokenStrength === o("WAWebCommonAdsTypes").WAAIdentityTokenStrengthEnum.WEAK) return r("FBLogger")("wa_ctwa_web").mustfix("setVerifiedEmailRelayEnvironment called with unverified token"), C(null), null;
				var t = yield r("WAWebGetAdsRelayEnvironment")(e);
				return C(t), t;
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), [C]), W = u(function(e) {
			M("FB", e);
		}, [M]), q = c(function() {
			var e;
			return {
				accountType: f == null ? void 0 : f.accountType,
				adCreationEntrypointReference: f == null ? void 0 : f.adCreationEntrypointReference,
				adManagementQueryRef: f == null ? void 0 : f.adManagementQueryRef,
				adManagementQueryVariables: f == null ? void 0 : f.adManagementQueryVariables,
				hasLinkedFbPage: (e = f == null ? void 0 : f.hasLinkedFbPage) != null ? e : !1,
				identityError: I,
				isSwitching: L,
				isWAAEligible: t,
				linkedPagesInfo: f == null ? void 0 : f.linkedPagesInfo,
				loginWithFacebook: A,
				loginWithWhatsApp: w,
				logoutOfFacebook: F,
				pageId: f == null ? void 0 : f.pageId,
				pageType: f == null ? void 0 : f.pageType,
				prepareAdCreation: N,
				relayEnvironment: f == null ? void 0 : f.relayEnvironment,
				reloadPreloadedQueries: v,
				resetForReAuth: D,
				setAdAccountId: O,
				setVerifiedEmailRelayEnvironment: B,
				strongRelayEnvironment: S
			};
		}, [
			f,
			S,
			L,
			I,
			w,
			A,
			F,
			O,
			B,
			t,
			v,
			N,
			D
		]);
		return {
			contextValue: q,
			onOIDCSuccess: W
		};
	}
	l.default = f;
}), 98);

__d("WAWebBizAdCreationValidateSpecContextProvider.react", [
	"FBImmer",
	"FBLogger",
	"RelayHooks",
	"WAWebBizAdCreationNoticesUtils",
	"WAWebBizAdCreationSpecContext",
	"WAWebBizAdCreationValidateSpecContext",
	"WAWebBizAdCreationValidateSpecContextProviderQuery.graphql",
	"WAWebBizAdCreationValidationStateEnum",
	"WAWebBizNativeAdsGatingUtils",
	"getWAWebBizAdCreationCombinedInlineValidationNotices",
	"getWAWebBizAdCreationCombinedValidationNotices",
	"getWAWebBizAdCreationValidationNeedCompareFields",
	"react",
	"toWAWebBizAdCreationServerSideNotices",
	"useDebouncedComet",
	"useWAWebBizAdCreationBoostedComponentCreationSpec"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useContext, p = c.useEffect, _ = c.useMemo, f = c.useRef, g = c.useState, h = e !== void 0 ? e : e = n("WAWebBizAdCreationValidateSpecContextProviderQuery.graphql"), y = 500, C = {}, b = {};
	function v(e, t, n) {
		var a, i = r("toWAWebBizAdCreationServerSideNotices")((a = e.lwi) == null ? void 0 : a.validateSpec);
		if (!o("WAWebBizNativeAdsGatingUtils").inlineNoticePartitionEnabled()) {
			t(i), n({});
			return;
		}
		var l = new Set(o("WAWebBizNativeAdsGatingUtils").ctwaInlineNoticeModules()), s = o("WAWebBizAdCreationNoticesUtils").partitionNoticesByInlineSet(i, l), u = s.forBanner, c = s.forInline;
		t(u), n(c);
	}
	function S(e) {
		var t = e.children, n = e.noticeActionOverrides, a = n === void 0 ? C : n, i = e.noticeCTAOverrides, l = i === void 0 ? b : i, s = o("RelayHooks").useRelayEnvironment(), c = m(r("WAWebBizAdCreationSpecContext")), S = c.currentValue, R = r("useWAWebBizAdCreationBoostedComponentCreationSpec")(), L = g(r("WAWebBizAdCreationValidationStateEnum").STALE), E = L[0], k = L[1], I = g({}), T = I[0], D = I[1], x = g({}), $ = x[0], P = x[1], N = g({}), M = N[0], w = N[1], A = g({}), F = A[0], O = A[1], B = g({}), W = B[0], q = B[1], U = g({}), V = U[0], H = U[1], G = f(S), z = r("useDebouncedComet")(function() {
			o("RelayHooks").fetchQuery(s, h, {
				input: R,
				validate_options: { is_blocking_ads_creation: !0 }
			}).subscribe({
				error: function() {
					r("FBLogger")("wa_ctwa_web").mustfix("blocking validation query failed"), k(r("WAWebBizAdCreationValidationStateEnum").COMPLETED);
				},
				next: function(t) {
					v(t, P, q), k(r("WAWebBizAdCreationValidationStateEnum").COMPLETED);
				},
				start: function() {
					var e = r("getWAWebBizAdCreationValidationNeedCompareFields")(G.current), t = r("getWAWebBizAdCreationValidationNeedCompareFields")(S), n = e.budgetAmount !== t.budgetAmount;
					n && k(r("WAWebBizAdCreationValidationStateEnum").IN_FLIGHT), G.current = S;
				}
			}), o("RelayHooks").fetchQuery(s, h, {
				input: R,
				validate_options: { is_blocking_ads_creation: !1 }
			}).subscribe({ next: function(t) {
				v(t, w, H);
			} });
		}, { wait: y });
		p(function() {
			z();
		}, [z, S]);
		var j = _(function() {
			return r("getWAWebBizAdCreationCombinedValidationNotices")([
				T,
				$,
				M
			]);
		}, [
			T,
			$,
			M
		]), K = _(function() {
			return r("getWAWebBizAdCreationCombinedInlineValidationNotices")([
				F,
				W,
				V
			]);
		}, [
			F,
			W,
			V
		]), Q = d(function(e, t) {
			D(function(n) {
				return o("FBImmer").produce(n, function(n) {
					n[e] = t;
				});
			});
		}, []), X = d(function(e, t) {
			O(function(n) {
				return o("FBImmer").produce(n, function(n) {
					n[e] = t;
				});
			});
		}, []), Y = _(function() {
			return {
				inlineNotices: K,
				isValidating: r("WAWebBizAdCreationValidationStateEnum").IN_FLIGHT === E,
				noticeActionOverrides: a,
				noticeCTAOverrides: l,
				notices: j,
				revalidate: z,
				setSpecElementClientSideNotices: Q,
				setSpecElementInlineValidationNotices: X
			};
		}, [
			K,
			j,
			z,
			a,
			l,
			Q,
			X,
			E
		]);
		return u.jsx(r("WAWebBizAdCreationValidateSpecContext").Provider, {
			value: Y,
			children: t
		});
	}
	S.displayName = S.name + " [from " + i.id + "]", l.default = S;
}), 98);

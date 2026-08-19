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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(36), n = e.children, a = e.noticeActionOverrides, i = e.noticeCTAOverrides, l = a === void 0 ? C : a, s = i === void 0 ? b : i, c = o("RelayHooks").useRelayEnvironment(), d = m(r("WAWebBizAdCreationSpecContext")), _ = d.currentValue, S = r("useWAWebBizAdCreationBoostedComponentCreationSpec")(), R = g(r("WAWebBizAdCreationValidationStateEnum").STALE), L = R[0], E = R[1], k;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (k = {}, t[0] = k) : k = t[0];
		var I = g(k), T = I[0], D = I[1], x;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (x = {}, t[1] = x) : x = t[1];
		var $ = g(x), P = $[0], N = $[1], M;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (M = {}, t[2] = M) : M = t[2];
		var w = g(M), A = w[0], F = w[1], O;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (O = {}, t[3] = O) : O = t[3];
		var B = g(O), W = B[0], q = B[1], U;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (U = {}, t[4] = U) : U = t[4];
		var V = g(U), H = V[0], G = V[1], z;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (z = {}, t[5] = z) : z = t[5];
		var j = g(z), K = j[0], Q = j[1], X = f(_), Y;
		t[6] !== S || t[7] !== c || t[8] !== _ ? (Y = function() {
			o("RelayHooks").fetchQuery(c, h, {
				input: S,
				validate_options: { is_blocking_ads_creation: !0 }
			}).subscribe({
				error: function() {
					r("FBLogger")("wa_ctwa_web").mustfix("blocking validation query failed"), E(r("WAWebBizAdCreationValidationStateEnum").COMPLETED);
				},
				next: function(t) {
					v(t, N, G), E(r("WAWebBizAdCreationValidationStateEnum").COMPLETED);
				},
				start: function() {
					var e = r("getWAWebBizAdCreationValidationNeedCompareFields")(X.current), t = r("getWAWebBizAdCreationValidationNeedCompareFields")(_), n = e.budgetAmount !== t.budgetAmount;
					n && E(r("WAWebBizAdCreationValidationStateEnum").IN_FLIGHT), X.current = _;
				}
			}), o("RelayHooks").fetchQuery(c, h, {
				input: S,
				validate_options: { is_blocking_ads_creation: !1 }
			}).subscribe({ next: function(t) {
				v(t, F, Q);
			} });
		}, t[6] = S, t[7] = c, t[8] = _, t[9] = Y) : Y = t[9];
		var J;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (J = { wait: y }, t[10] = J) : J = t[10];
		var Z = r("useDebouncedComet")(Y, J), ee;
		t[11] !== Z ? (ee = function() {
			Z();
		}, t[11] = Z, t[12] = ee) : ee = t[12];
		var te;
		t[13] !== Z || t[14] !== _ ? (te = [Z, _], t[13] = Z, t[14] = _, t[15] = te) : te = t[15], p(ee, te);
		var ne;
		t[16] !== T || t[17] !== P || t[18] !== A ? (ne = r("getWAWebBizAdCreationCombinedValidationNotices")([
			T,
			P,
			A
		]), t[16] = T, t[17] = P, t[18] = A, t[19] = ne) : ne = t[19];
		var re = ne, oe;
		t[20] !== W || t[21] !== H || t[22] !== K ? (oe = r("getWAWebBizAdCreationCombinedInlineValidationNotices")([
			W,
			H,
			K
		]), t[20] = W, t[21] = H, t[22] = K, t[23] = oe) : oe = t[23];
		var ae = oe, ie;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? (ie = function(t, n) {
			D(function(e) {
				return o("FBImmer").produce(e, function(e) {
					e[t] = n;
				});
			});
		}, t[24] = ie) : ie = t[24];
		var le = ie, se;
		t[25] === Symbol.for("react.memo_cache_sentinel") ? (se = function(t, n) {
			q(function(e) {
				return o("FBImmer").produce(e, function(e) {
					e[t] = n;
				});
			});
		}, t[25] = se) : se = t[25];
		var ue = se, ce = r("WAWebBizAdCreationValidationStateEnum").IN_FLIGHT === L, de;
		t[26] !== ae || t[27] !== re || t[28] !== Z || t[29] !== l || t[30] !== s || t[31] !== ce ? (de = {
			inlineNotices: ae,
			isValidating: ce,
			noticeActionOverrides: l,
			noticeCTAOverrides: s,
			notices: re,
			revalidate: Z,
			setSpecElementClientSideNotices: le,
			setSpecElementInlineValidationNotices: ue
		}, t[26] = ae, t[27] = re, t[28] = Z, t[29] = l, t[30] = s, t[31] = ce, t[32] = de) : de = t[32];
		var me = de, pe;
		return t[33] !== n || t[34] !== me ? (pe = u.jsx(r("WAWebBizAdCreationValidateSpecContext").Provider, {
			value: me,
			children: n
		}), t[33] = n, t[34] = me, t[35] = pe) : pe = t[35], pe;
	}
	l.default = S;
}), 98);

__d("WAWebBizAdCreationTargetingModalContextProvider.react", [
	"LWICometDefaultTargetingSpec",
	"LWICometTargetingModalConstraints",
	"LWICometTargetingModalStateContext",
	"WAWebBizAdCreationTargetingModalApplyTargetingAutomation",
	"WAWebBizAdCreationTargetingModalContext",
	"WAWebBizAdCreationTargetingModalReducer",
	"WAWebBizAdCreationTargetingSpecContext",
	"WAWebBizAdCreationTargetingSpecDispatcherContext",
	"WAWebNoop",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"audienceOption",
		"children",
		"initialAudienceName",
		"initialTargetingSpec",
		"mode"
	], s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useMemo, p = c.useReducer, _ = c.useState, f = 18;
	function g(t) {
		var n = o("react-compiler-runtime").c(34), a, i, l, s, c, d;
		n[0] !== t ? (a = t.audienceOption, i = t.children, s = t.initialAudienceName, d = t.initialTargetingSpec, c = t.mode, l = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = c, n[6] = d) : (a = n[1], i = n[2], l = n[3], s = n[4], c = n[5], d = n[6]);
		var m = d === void 0 ? o("LWICometDefaultTargetingSpec").DEFAULT_TARGETING_SPEC : d, g = l, h = g.currency, y = g.dailyBudget, C = g.environment, b = g.legacyAdAccountID, v = g.selectedPublisherPlatforms, S = _(s), R = S[0], L = S[1], E;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (E = function(t) {
			L(t);
		}, n[7] = E) : E = n[7];
		var k = E, I = a === "NCPP", T;
		n[8] !== I || n[9] !== c ? (T = function(t) {
			var e, n = t, o = I && ((e = t.targeting_automation) == null ? void 0 : e.advantage_audience) !== 1, a = c === "create" && t.targeting_automation == null;
			(o || a) && (n = babelHelpers.extends({}, n), r("WAWebBizAdCreationTargetingModalApplyTargetingAutomation")(n, !0));
			var i = n.age_min != null && n.age_min < f, l = n.age_max != null && n.age_max < f, s = n.age_range != null && (n.age_range[0] < f || n.age_range[1] < f);
			if ((i || l || s) && (n = babelHelpers.extends({}, n), i && (n.age_min = f), l && (n.age_max = f), s)) {
				var u, d, m, p;
				n.age_range = [Math.max(f, (u = (d = n.age_range) == null ? void 0 : d[0]) != null ? u : f), Math.max(f, (m = (p = n.age_range) == null ? void 0 : p[1]) != null ? m : f)];
			}
			return n;
		}, n[8] = I, n[9] = c, n[10] = T) : T = n[10];
		var D = p(r("WAWebBizAdCreationTargetingModalReducer"), m, T), x = D[0], $ = D[1], P;
		n[11] !== R || n[12] !== h || n[13] !== y || n[14] !== C || n[15] !== b || n[16] !== v ? (P = {
			audienceName: R,
			currency: h,
			dailyBudget: y,
			environment: C,
			legacyAdAccountID: b,
			selectedPublisherPlatforms: v,
			setAudienceName: k
		}, n[11] = R, n[12] = h, n[13] = y, n[14] = C, n[15] = b, n[16] = v, n[17] = P) : P = n[17];
		var N = P, M;
		n[18] === Symbol.for("react.memo_cache_sentinel") ? (M = {}, n[18] = M) : M = n[18];
		var w = c != null ? c : "create", A;
		n[19] === Symbol.for("react.memo_cache_sentinel") ? (A = [], n[19] = A) : A = n[19];
		var F;
		n[20] === Symbol.for("react.memo_cache_sentinel") ? (F = babelHelpers.extends({}, o("LWICometTargetingModalConstraints").DEFAULT_TARGETING_CONSTRAINT, { ageConfig: babelHelpers.extends({}, o("LWICometTargetingModalConstraints").DEFAULT_TARGETING_CONSTRAINT.ageConfig, { minTargetingAge: f }) }), n[20] = F) : F = n[20];
		var O;
		n[21] !== w ? (O = {
			closeDialog: r("WAWebNoop"),
			fetchedTargetingEntries: M,
			hasValidAIGeneratedAudience: !1,
			isGeneratingAI: !1,
			isPAOBasicAdvertiser: !1,
			isSubmitting: !1,
			mode: w,
			regulatedCategories: A,
			showEditIsNotRecommendedNotice: !1,
			targetingConstraints: F
		}, n[21] = w, n[22] = O) : O = n[22];
		var B = O, W;
		n[23] !== i ? (W = u.jsx(r("WAWebBizAdCreationTargetingSpecDispatcherContext").Provider, {
			value: $,
			children: i
		}), n[23] = i, n[24] = W) : W = n[24];
		var q;
		n[25] !== W || n[26] !== x ? (q = u.jsx(r("WAWebBizAdCreationTargetingSpecContext").Provider, {
			value: x,
			children: W
		}), n[25] = W, n[26] = x, n[27] = q) : q = n[27];
		var U;
		n[28] !== q || n[29] !== B ? (U = u.jsx(r("LWICometTargetingModalStateContext").Provider, {
			value: B,
			children: q
		}), n[28] = q, n[29] = B, n[30] = U) : U = n[30];
		var V;
		return n[31] !== N || n[32] !== U ? (V = u.jsx(r("WAWebBizAdCreationTargetingModalContext").Provider, {
			value: N,
			children: U
		}), n[31] = N, n[32] = U, n[33] = V) : V = n[33], V;
	}
	l.default = g;
}), 98);

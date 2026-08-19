__d("useWAWebBizAdCreationBudgetSpec", [
	"CometRelay",
	"WAWebBizAdCreationBudgetUtils",
	"WAWebBizNativeAdsGatingUtils",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAdCreationBudgetSpec_boostedComponentWrapper.graphql"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = (s || (s = o("react"))).useMemo, c = e !== void 0 ? e : e = n("useWAWebBizAdCreationBudgetSpec_boostedComponentWrapper.graphql");
	function d(e) {
		var t, n, r, a, i = o("react-compiler-runtime").c(8), l = o("CometRelay").useFragment(c, e), s;
		if (i[0] !== l.boostedComponentOptions.budgetOptions || i[1] !== ((t = l.boostedComponentOptions.budgetRecommendation) == null || (t = t.budgetMessageThreshold) == null ? void 0 : t.offsetAmount) || i[2] !== ((n = l.constraints) == null || (n = n.maxDailyBudget) == null ? void 0 : n.offsetAmount) || i[3] !== ((r = l.constraints) == null || (r = r.minDailyBudget) == null ? void 0 : r.offsetAmount) || i[4] !== ((a = l.spec) == null || (a = a.budget) == null ? void 0 : a.offsetAmount)) {
			var u, d, m, p, _, f, g, h, y;
			if (i[6] !== ((u = l.constraints) == null || (u = u.maxDailyBudget) == null ? void 0 : u.offsetAmount)) {
				var C, b;
				y = o("WAWebBizNativeAdsGatingUtils").minMaxBudgetFixesEnabled() ? (C = l.constraints) == null || (C = C.maxDailyBudget) == null ? void 0 : C.offsetAmount : null, i[6] = (b = l.constraints) == null || (b = b.maxDailyBudget) == null ? void 0 : b.offsetAmount, i[7] = y;
			} else y = i[7];
			s = o("WAWebBizAdCreationBudgetUtils").createBudgetSpec({
				budgetOptions: l.boostedComponentOptions.budgetOptions,
				maxBudget: y,
				minBudget: (d = l.constraints) == null || (d = d.minDailyBudget) == null ? void 0 : d.offsetAmount,
				offsetAmount: (m = l.spec) == null || (m = m.budget) == null ? void 0 : m.offsetAmount,
				recommendation: o("WAWebBizNativeAdsGatingUtils").ctwaBudgetRecommendationEnabled() ? o("WAWebBizAdCreationBudgetUtils").parseValidRecommendation((p = l.boostedComponentOptions.budgetRecommendation) == null || (p = p.budgetMessageThreshold) == null ? void 0 : p.offsetAmount) : null
			}, { setInitialDefault: !0 }), i[0] = l.boostedComponentOptions.budgetOptions, i[1] = (_ = l.boostedComponentOptions.budgetRecommendation) == null || (_ = _.budgetMessageThreshold) == null ? void 0 : _.offsetAmount, i[2] = (f = l.constraints) == null || (f = f.maxDailyBudget) == null ? void 0 : f.offsetAmount, i[3] = (g = l.constraints) == null || (g = g.minDailyBudget) == null ? void 0 : g.offsetAmount, i[4] = (h = l.spec) == null || (h = h.budget) == null ? void 0 : h.offsetAmount, i[5] = s;
		} else s = i[5];
		return s;
	}
	l.default = d;
}), 98);

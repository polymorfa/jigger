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
	"react"
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
		var n = t.audienceOption, a = t.children, i = t.initialAudienceName, l = t.initialTargetingSpec, s = l === void 0 ? o("LWICometDefaultTargetingSpec").DEFAULT_TARGETING_SPEC : l, c = t.mode, g = babelHelpers.objectWithoutPropertiesLoose(t, e), h = g.currency, y = g.dailyBudget, C = g.environment, b = g.legacyAdAccountID, v = g.selectedPublisherPlatforms, S = _(i), R = S[0], L = S[1], E = d(function(e) {
			L(e);
		}, []), k = n === "NCPP", I = p(r("WAWebBizAdCreationTargetingModalReducer"), s, function(e) {
			var t, n = e, o = k && ((t = e.targeting_automation) == null ? void 0 : t.advantage_audience) !== 1, a = c === "create" && e.targeting_automation == null;
			(o || a) && (n = babelHelpers.extends({}, n), r("WAWebBizAdCreationTargetingModalApplyTargetingAutomation")(n, !0));
			var i = f, l = n.age_min != null && n.age_min < i, s = n.age_max != null && n.age_max < i, u = n.age_range != null && (n.age_range[0] < i || n.age_range[1] < i);
			if ((l || s || u) && (n = babelHelpers.extends({}, n), l && (n.age_min = i), s && (n.age_max = i), u)) {
				var d, m, p, _;
				n.age_range = [Math.max(i, (d = (m = n.age_range) == null ? void 0 : m[0]) != null ? d : i), Math.max(i, (p = (_ = n.age_range) == null ? void 0 : _[1]) != null ? p : i)];
			}
			return n;
		}), T = I[0], D = I[1], x = m(function() {
			return {
				audienceName: R,
				currency: h,
				dailyBudget: y,
				environment: C,
				legacyAdAccountID: b,
				selectedPublisherPlatforms: v,
				setAudienceName: E
			};
		}, [
			R,
			E,
			C,
			y,
			h,
			b,
			v
		]), $ = m(function() {
			return {
				closeDialog: r("WAWebNoop"),
				fetchedTargetingEntries: {},
				hasValidAIGeneratedAudience: !1,
				isGeneratingAI: !1,
				isPAOBasicAdvertiser: !1,
				isSubmitting: !1,
				mode: c != null ? c : "create",
				regulatedCategories: [],
				showEditIsNotRecommendedNotice: !1,
				targetingConstraints: babelHelpers.extends({}, o("LWICometTargetingModalConstraints").DEFAULT_TARGETING_CONSTRAINT, { ageConfig: babelHelpers.extends({}, o("LWICometTargetingModalConstraints").DEFAULT_TARGETING_CONSTRAINT.ageConfig, { minTargetingAge: f }) })
			};
		}, [c]);
		return u.jsx(r("WAWebBizAdCreationTargetingModalContext").Provider, {
			value: x,
			children: u.jsx(r("LWICometTargetingModalStateContext").Provider, {
				value: $,
				children: u.jsx(r("WAWebBizAdCreationTargetingSpecContext").Provider, {
					value: T,
					children: u.jsx(r("WAWebBizAdCreationTargetingSpecDispatcherContext").Provider, {
						value: D,
						children: a
					})
				})
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);

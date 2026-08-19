__d("WAWebBizAdCreationBudgetSection.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAdCreationBudgetInfoModal.react",
	"WAWebBizAdCreationBudgetInput.react",
	"WAWebBizAdCreationBudgetSectionData.graphql",
	"WAWebBizAdCreationBudgetSlider.react",
	"WAWebBizAdCreationInlineValidationNotices.react",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationNoticesUtils",
	"WAWebBizAdCreationSectionNotices.react",
	"WAWebBizAdLogger",
	"WAWebBizCard.react",
	"WAWebBizNativeAdsGatingUtils",
	"WAWebFlex.react",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAdCreationInlineValidationNotices",
	"useWAWebBizBudgetValidation",
	"useWAWebInfoButtonUtil",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useContext, p = d.useEffect, _ = d.useRef, f = d.useState, g = { valueContainer: {
		height: "xnnlda6",
		$$css: !0
	} }, h = e !== void 0 ? e : e = n("WAWebBizAdCreationBudgetSectionData.graphql");
	function y(e) {
		var t, n, a, i, l = o("react-compiler-runtime").c(25), u = e.fragmentRef, d = e.adAccountID, y = e.currency, b = e.defaultBudget, v = e.selectedBudget, S = o("CometRelay").useFragment(h, u), R = m(r("WAWebBizAdCreationLoggerContext")), L = _(!1), E, k;
		l[0] !== d || l[1] !== y || l[2] !== b || l[3] !== R || l[4] !== v ? (E = function() {
			R != null && !L.current && (L.current = !0, r("WAWebBizAdLogger").log({
				adAccountID: d,
				budget: v,
				budgetType: "DAILY_BUDGET",
				currency: y,
				defaultBudget: b,
				event: "budget_card_impression",
				extra: { recommended_value: v },
				loggerContext: R
			}));
		}, k = [
			d,
			y,
			b,
			R,
			v
		], l[0] = d, l[1] = y, l[2] = b, l[3] = R, l[4] = v, l[5] = E, l[6] = k) : (E = l[5], k = l[6]), p(E, k);
		var I = f(v), T = I[0], D = I[1], x = f(v), $ = x[0], P = x[1], N = Number((t = S == null || (n = S.constraints) == null || (n = n.minDailyBudget) == null ? void 0 : n.offsetAmount) != null ? t : 0), M = Number((a = S == null || (i = S.constraints) == null || (i = i.maxDailyBudget) == null ? void 0 : i.offsetAmount) != null ? a : 0), w;
		l[7] !== M || l[8] !== N ? (w = {
			maxDailyBudget: M,
			minDailyBudget: N
		}, l[7] = M, l[8] = N, l[9] = w) : w = l[9], r("useWAWebBizBudgetValidation")(w);
		var A = r("useWAWebBizAdCreationInlineValidationNotices")("BUDGET"), F;
		l[10] !== A ? (F = A.some(C), l[10] = A, l[11] = F) : F = l[11];
		var O = F;
		v !== $ && (P(v), D(v));
		var B = r("useWAWebInfoButtonUtil")(r("WAWebBizAdCreationBudgetInfoModal.react")), W;
		l[12] === Symbol.for("react.memo_cache_sentinel") ? (W = s._(
			/*BTDS*/
			""
		), l[12] = W) : W = l[12];
		var q;
		l[13] === Symbol.for("react.memo_cache_sentinel") ? (q = c.jsx(r("WAWebBizAdCreationSectionNotices.react"), { specElement: "BUDGET" }), l[13] = q) : q = l[13];
		var U;
		l[14] !== O || l[15] !== T ? (U = c.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: g.valueContainer,
			children: c.jsx(r("WAWebBizAdCreationBudgetInput.react"), {
				displayBudget: T,
				hasError: O,
				setLocalBudget: D
			})
		}), l[14] = O, l[15] = T, l[16] = U) : U = l[16];
		var V;
		l[17] === Symbol.for("react.memo_cache_sentinel") ? (V = c.jsx(o("WAWebFlex.react").FlexItem, {
			align: "stretch",
			children: c.jsx(r("WAWebBizAdCreationBudgetSlider.react"), { setLocalBudget: D })
		}), l[17] = V) : V = l[17];
		var H;
		l[18] === Symbol.for("react.memo_cache_sentinel") ? (H = o("WAWebBizNativeAdsGatingUtils").ctwaSabrEnabled(), l[18] = H) : H = l[18];
		var G;
		l[19] === Symbol.for("react.memo_cache_sentinel") ? (G = c.jsx(r("WAWebBizAdCreationInlineValidationNotices.react"), {
			showHighestPriorityOnly: H,
			specElement: "BUDGET"
		}), l[19] = G) : G = l[19];
		var z;
		l[20] !== U ? (z = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			gap: 16,
			children: [
				q,
				U,
				V,
				G
			]
		}), l[20] = U, l[21] = z) : z = l[21];
		var j;
		return l[22] !== B || l[23] !== z ? (j = c.jsx(r("WAWebBizCard.react"), {
			header: W,
			titleAccessory: B,
			children: z
		}), l[22] = B, l[23] = z, l[24] = j) : j = l[24], j;
	}
	function C(e) {
		return o("WAWebBizAdCreationNoticesUtils").ERROR_SEVERITIES.includes(e.severity);
	}
	var b = r("withWAWebBizAdCreationSpecContext")(y, function(e) {
		return {
			adAccountID: e.adAccountData.id,
			currency: e.adAccountData.currency,
			defaultBudget: e.budgetData.defaultBudget,
			selectedBudget: e.budgetData.budget
		};
	});
	l.default = b;
}), 226);

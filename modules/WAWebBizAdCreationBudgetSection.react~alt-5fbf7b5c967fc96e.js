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
		var t, n, a, i, l = e.fragmentRef, u = e.adAccountID, d = e.currency, y = e.defaultBudget, C = e.selectedBudget, b = o("CometRelay").useFragment(h, l), v = m(r("WAWebBizAdCreationLoggerContext")), S = _(!1);
		p(function() {
			v != null && !S.current && (S.current = !0, r("WAWebBizAdLogger").log({
				adAccountID: u,
				budget: C,
				budgetType: "DAILY_BUDGET",
				currency: d,
				defaultBudget: y,
				event: "budget_card_impression",
				extra: { recommended_value: C },
				loggerContext: v
			}));
		}, [
			u,
			d,
			y,
			v,
			C
		]);
		var R = f(C), L = R[0], E = R[1], k = f(C), I = k[0], T = k[1], D = Number((t = b == null || (n = b.constraints) == null || (n = n.minDailyBudget) == null ? void 0 : n.offsetAmount) != null ? t : 0), x = Number((a = b == null || (i = b.constraints) == null || (i = i.maxDailyBudget) == null ? void 0 : i.offsetAmount) != null ? a : 0);
		r("useWAWebBizBudgetValidation")({
			maxDailyBudget: x,
			minDailyBudget: D
		});
		var $ = r("useWAWebBizAdCreationInlineValidationNotices")("BUDGET"), P = $.some(function(e) {
			return o("WAWebBizAdCreationNoticesUtils").ERROR_SEVERITIES.includes(e.severity);
		});
		C !== I && (T(C), E(C));
		var N = r("useWAWebInfoButtonUtil")(r("WAWebBizAdCreationBudgetInfoModal.react"));
		return c.jsx(r("WAWebBizCard.react"), {
			header: s._(
				/*BTDS*/
				""
			),
			titleAccessory: N,
			children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				gap: 16,
				children: [
					c.jsx(r("WAWebBizAdCreationSectionNotices.react"), { specElement: "BUDGET" }),
					c.jsx(o("WAWebFlex.react").FlexRow, {
						align: "center",
						justify: "center",
						xstyle: g.valueContainer,
						children: c.jsx(r("WAWebBizAdCreationBudgetInput.react"), {
							displayBudget: L,
							hasError: P,
							setLocalBudget: E
						})
					}),
					c.jsx(o("WAWebFlex.react").FlexItem, {
						align: "stretch",
						children: c.jsx(r("WAWebBizAdCreationBudgetSlider.react"), { setLocalBudget: E })
					}),
					c.jsx(r("WAWebBizAdCreationInlineValidationNotices.react"), {
						showHighestPriorityOnly: o("WAWebBizNativeAdsGatingUtils").ctwaSabrEnabled(),
						specElement: "BUDGET"
					})
				]
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	var C = r("withWAWebBizAdCreationSpecContext")(y, function(e) {
		return {
			adAccountID: e.adAccountData.id,
			currency: e.adAccountData.currency,
			defaultBudget: e.budgetData.defaultBudget,
			selectedBudget: e.budgetData.budget
		};
	});
	l.default = C;
}), 226);

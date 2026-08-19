__d("WAWebBizAdCreationBudgetSlider.react", [
	"FBLogger",
	"WAWebBizAdCreationBudgetReducer",
	"WAWebBizAdCreationCurrencyUtils",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdLogger",
	"WDSSlider.react",
	"react",
	"useWAWebBizAdCreationBudgetOptions",
	"useWAWebBizAdCreationSpecDispatcherContext",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useContext, m = u.useEffect, p = u.useMemo, _ = u.useRef, f = u.useState;
	function g(e) {
		var t = e.setLocalBudget, n = e.adAccountID, o = e.currency, a = e.defaultBudget, i = e.recommendedBudget, l = e.selectedBudget, u = r("useWAWebBizAdCreationSpecDispatcherContext")([r("WAWebBizAdCreationBudgetReducer")]), g = d(r("WAWebBizAdCreationLoggerContext")), h = _(null), y = r("useWAWebBizAdCreationBudgetOptions")(), C = p(function() {
			var e = y.findIndex(function(e) {
				return e === l;
			});
			return e === -1 ? 0 : e;
		}, [y, l]), b = f(C), v = b[0], S = b[1], R = p(function() {
			var e = i != null ? y.indexOf(i) : -1;
			return e !== -1 ? [e] : void 0;
		}, [y, i]), L = f(C), E = L[0], k = L[1];
		C !== E && (k(C), S(C));
		var I = c(function(e) {
			u({
				budgetData: { budget: e },
				type: "budget_reducer.update_budget"
			});
		}, [u]), T = c(function(e) {
			var t, i = y[e], l = (t = h.current) != null ? t : a;
			I(i), g != null && r("WAWebBizAdLogger").log({
				adAccountID: n,
				budget: i,
				budgetType: "DAILY_BUDGET",
				currency: o,
				defaultBudget: a,
				event: "change_budget",
				extra: {
					input_type: "slider",
					old_budget: l
				},
				loggerContext: g
			}), h.current = i;
		}, [
			y,
			a,
			I,
			g,
			n,
			o
		]), D = function(n) {
			S(n), t(y[n]);
		};
		return m(function() {
			y.length === 0 && r("FBLogger")("wa_ctwa_web").mustfix("WAWebBizAdCreationBudgetSlider: budgetOptions is empty — all presets are below the minimum daily budget");
		}, [y]), y.length === 0 ? null : s.jsx(r("WDSSlider.react"), {
			ariaValueText: function(t) {
				return r("WAWebBizAdCreationCurrencyUtils").formatCurrency(y[t], o);
			},
			displayValueText: function(t) {
				return r("WAWebBizAdCreationCurrencyUtils").formatCurrency(y[t], o);
			},
			markers: R,
			max: y.length - 1,
			min: 0,
			onChange: function(t) {
				return D(t[0]);
			},
			onChangeSettled: function(t) {
				return T(t[0]);
			},
			startEndLabels: "minMax",
			step: 1,
			values: [v]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	var h = r("withWAWebBizAdCreationSpecContext")(g, function(e) {
		var t;
		return {
			adAccountID: (t = e.adAccountData) == null ? void 0 : t.legacyAccountID,
			currency: e.adAccountData.currency,
			defaultBudget: e.budgetData.defaultBudget,
			recommendedBudget: e.budgetData.recommendedBudget,
			selectedBudget: e.budgetData.budget
		};
	});
	l.default = h;
}), 98);

__d("WAWebBizAdCreationBudgetSlider.react", [
	"FBLogger",
	"WAWebBizAdCreationBudgetReducer",
	"WAWebBizAdCreationCurrencyUtils",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdLogger",
	"WDSSlider.react",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAdCreationBudgetOptions",
	"useWAWebBizAdCreationSpecDispatcherContext",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useContext, m = u.useEffect, p = u.useMemo, _ = u.useRef, f = u.useState;
	function g(e) {
		var t = o("react-compiler-runtime").c(45), n = e.setLocalBudget, a = e.adAccountID, i = e.currency, l = e.defaultBudget, u = e.recommendedBudget, c = e.selectedBudget, p;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (p = [r("WAWebBizAdCreationBudgetReducer")], t[0] = p) : p = t[0];
		var g = r("useWAWebBizAdCreationSpecDispatcherContext")(p), h = d(r("WAWebBizAdCreationLoggerContext")), y = _(null), C = r("useWAWebBizAdCreationBudgetOptions")(), b;
		if (t[1] !== C || t[2] !== c) {
			var v;
			t[4] !== c ? (v = function(t) {
				return t === c;
			}, t[4] = c, t[5] = v) : v = t[5], b = C.findIndex(v), t[1] = C, t[2] = c, t[3] = b;
		} else b = t[3];
		var S = b, R = S === -1 ? 0 : S, L = f(R), E = L[0], k = L[1], I;
		t[6] !== C || t[7] !== u ? (I = u != null ? C.indexOf(u) : -1, t[6] = C, t[7] = u, t[8] = I) : I = t[8];
		var T = I, D;
		t[9] !== T ? (D = T !== -1 ? [T] : void 0, t[9] = T, t[10] = D) : D = t[10];
		var x = D, $ = f(R), P = $[0], N = $[1];
		R !== P && (N(R), k(R));
		var M;
		t[11] !== g ? (M = function(t) {
			g({
				budgetData: { budget: t },
				type: "budget_reducer.update_budget"
			});
		}, t[11] = g, t[12] = M) : M = t[12];
		var w = M, A;
		t[13] !== a || t[14] !== C || t[15] !== i || t[16] !== l || t[17] !== h || t[18] !== w ? (A = function(t) {
			var e, n = C[t], o = (e = y.current) != null ? e : l;
			w(n), h != null && r("WAWebBizAdLogger").log({
				adAccountID: a,
				budget: n,
				budgetType: "DAILY_BUDGET",
				currency: i,
				defaultBudget: l,
				event: "change_budget",
				extra: {
					input_type: "slider",
					old_budget: o
				},
				loggerContext: h
			}), y.current = n;
		}, t[13] = a, t[14] = C, t[15] = i, t[16] = l, t[17] = h, t[18] = w, t[19] = A) : A = t[19];
		var F = A, O;
		t[20] !== C || t[21] !== n ? (O = function(t) {
			k(t), n(C[t]);
		}, t[20] = C, t[21] = n, t[22] = O) : O = t[22];
		var B = O, W;
		t[23] !== C.length ? (W = function() {
			C.length === 0 && r("FBLogger")("wa_ctwa_web").mustfix("WAWebBizAdCreationBudgetSlider: budgetOptions is empty — all presets are below the minimum daily budget");
		}, t[23] = C.length, t[24] = W) : W = t[24];
		var q;
		if (t[25] !== C ? (q = [C], t[25] = C, t[26] = q) : q = t[26], m(W, q), C.length === 0) return null;
		var U, V;
		t[27] !== C || t[28] !== i ? (U = function(t) {
			return r("WAWebBizAdCreationCurrencyUtils").formatCurrency(C[t], i);
		}, V = function(t) {
			return r("WAWebBizAdCreationCurrencyUtils").formatCurrency(C[t], i);
		}, t[27] = C, t[28] = i, t[29] = U, t[30] = V) : (U = t[29], V = t[30]);
		var H = C.length - 1, G;
		t[31] !== B ? (G = function(t) {
			return B(t[0]);
		}, t[31] = B, t[32] = G) : G = t[32];
		var z;
		t[33] !== F ? (z = function(t) {
			return F(t[0]);
		}, t[33] = F, t[34] = z) : z = t[34];
		var j;
		t[35] !== E ? (j = [E], t[35] = E, t[36] = j) : j = t[36];
		var K;
		return t[37] !== x || t[38] !== U || t[39] !== V || t[40] !== H || t[41] !== G || t[42] !== z || t[43] !== j ? (K = s.jsx(r("WDSSlider.react"), {
			ariaValueText: U,
			displayValueText: V,
			markers: x,
			max: H,
			min: 0,
			onChange: G,
			onChangeSettled: z,
			startEndLabels: "minMax",
			step: 1,
			values: j
		}), t[37] = x, t[38] = U, t[39] = V, t[40] = H, t[41] = G, t[42] = z, t[43] = j, t[44] = K) : K = t[44], K;
	}
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

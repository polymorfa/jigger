__d("useWAWebBizBudgetValidation", [
	"TWAWebBizAdCreationSpec",
	"WAWebBizAdCreationContinuousDurationUtils",
	"WAWebBizAdCreationSpecContext",
	"WAWebBizAdCreationValidateSpecContext",
	"react",
	"react-compiler-runtime",
	"validateWAWebBizBudget"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useContext, c = s.useEffect, d = s.useMemo, m = s.useRef;
	function p(e) {
		var t, n, a, i, l, s, d = o("react-compiler-runtime").c(15), p = u(r("WAWebBizAdCreationSpecContext")), _ = p.currentValue, f = u(r("WAWebBizAdCreationValidateSpecContext")), g = (t = (n = _.budgetData) == null ? void 0 : n.budget) != null ? t : 0, h = (a = _.adAccountData) == null ? void 0 : a.currency, y = (i = _.budgetData) == null ? void 0 : i.recommendedBudget, C = (l = (s = _.durationData) == null ? void 0 : s.durationInDays) != null ? l : o("TWAWebBizAdCreationSpec").CONTINUOUS_DURATION, b;
		d[0] !== C ? (b = o("WAWebBizAdCreationContinuousDurationUtils").isContinuousDurationActive(C), d[0] = C, d[1] = b) : b = d[1];
		var v = b, S = e.maxDailyBudget, R = e.minDailyBudget, L;
		d[2] === Symbol.for("react.memo_cache_sentinel") ? (L = [], d[2] = L) : L = d[2];
		var E = m(L), k;
		e: {
			if (R == null || R === 0 || S == null || S === 0 || h == null) {
				var I;
				d[3] === Symbol.for("react.memo_cache_sentinel") ? (I = [], d[3] = I) : I = d[3], k = I;
				break e;
			}
			var T;
			d[4] !== g || d[5] !== h || d[6] !== S || d[7] !== R || d[8] !== y || d[9] !== v ? (T = r("validateWAWebBizBudget")({
				budgetValue: g,
				currency: h,
				maxDailyBudget: S,
				minDailyBudget: R,
				recommendedBudget: y,
				runContinuously: v
			}), d[4] = g, d[5] = h, d[6] = S, d[7] = R, d[8] = y, d[9] = v, d[10] = T) : T = d[10], k = T;
		}
		var D = k, x, $;
		d[11] !== f || d[12] !== D ? (x = function() {
			if (f != null) {
				var e = E.current, t = D.length !== e.length || D.some(function(t, n) {
					var r, o;
					return t.description !== ((r = e[n]) == null ? void 0 : r.description) || t.severity !== ((o = e[n]) == null ? void 0 : o.severity);
				});
				t && (E.current = D, f.setSpecElementInlineValidationNotices("BUDGET", D));
			}
		}, $ = [f, D], d[11] = f, d[12] = D, d[13] = x, d[14] = $) : (x = d[13], $ = d[14]), c(x, $);
	}
	l.default = p;
}), 98);

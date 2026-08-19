__d("WAWebBizAdCreationSummaryTotalsLineItems.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAdCreationContinuousDurationUtils",
	"WAWebBizAdCreationCurrencyUtils",
	"WAWebBizAdCreationSummaryTotalsLineItems_estimatedTax.graphql",
	"WAWebBizSummaryLineItem.react",
	"WAWebFlex.react",
	"react",
	"react-compiler-runtime",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react"));
	function d(t) {
		var r = o("react-compiler-runtime").c(14), a = t.currency, i = t.estimatedTaxRef, l = t.rowGap, s = t.selectedBudget, u = t.selectedDurationInDays, d = l === void 0 ? 8 : l, f = o("CometRelay").useFragment(e !== void 0 ? e : e = n("WAWebBizAdCreationSummaryTotalsLineItems_estimatedTax.graphql"), i), y;
		r[0] !== u ? (y = o("WAWebBizAdCreationContinuousDurationUtils").isContinuousDurationActive(u), r[0] = u, r[1] = y) : y = r[1];
		var C = y, b;
		if (r[2] !== a || r[3] !== (f == null ? void 0 : f.taxes) || r[4] !== C || r[5] !== d || r[6] !== s || r[7] !== u) {
			var v, S, R = (v = f == null || (S = f.taxes) == null ? void 0 : S.filter(_).map(p)) != null ? v : [], L;
			r[9] !== a || r[10] !== C || r[11] !== s || r[12] !== u ? (L = C ? c.jsx(g, {
				currency: a,
				selectedBudget: s
			}) : c.jsx(h, {
				currency: a,
				selectedBudget: s,
				selectedDurationInDays: u
			}), r[9] = a, r[10] = C, r[11] = s, r[12] = u, r[13] = L) : L = r[13], b = c.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				rowGap: d,
				children: [L, R.map(m)]
			}), r[2] = a, r[3] = f == null ? void 0 : f.taxes, r[4] = C, r[5] = d, r[6] = s, r[7] = u, r[8] = b;
		} else b = r[8];
		return b;
	}
	function m(e, t) {
		return c.jsx(r("WAWebBizSummaryLineItem.react"), {
			colorName: "contentDeemphasized",
			label: e.taxName,
			value: e.formattedAmount
		}, t);
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t, n, r;
		return {
			formattedAmount: (t = (n = e.taxAmount) == null ? void 0 : n.formattedAmount) != null ? t : "",
			taxName: (r = e.taxName) != null ? r : ""
		};
	}
	function _(e) {
		return e.taxName != null && e.taxAmount != null;
	}
	var f = r("withWAWebBizAdCreationSpecContext")(d, function(e) {
		return {
			currency: e.adAccountData.currency,
			selectedBudget: e.budgetData.budget,
			selectedDurationInDays: e.durationData.durationInDays
		};
	});
	function g(e) {
		var t = o("react-compiler-runtime").c(10), n = e.currency, a = e.selectedBudget, i, l, u;
		if (t[0] !== n || t[1] !== a) {
			var d = r("WAWebBizAdCreationCurrencyUtils").formatCurrency(a, n);
			i = r("WAWebBizSummaryLineItem.react"), t[5] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
				/*BTDS*/
				""
			), t[5] = l) : l = t[5], u = s._(
				/*BTDS*/
				"",
				[s._param("Pre-formatted daily budget", d)]
			), t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = u;
		} else i = t[2], l = t[3], u = t[4];
		var m;
		return t[6] !== i || t[7] !== l || t[8] !== u ? (m = c.jsx(i, {
			label: l,
			value: u
		}), t[6] = i, t[7] = l, t[8] = u, t[9] = m) : m = t[9], m;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(17), n = e.currency, a = e.selectedBudget, i = e.selectedDurationInDays, l, u, d, m;
		if (t[0] !== n || t[1] !== a || t[2] !== i) {
			var p = r("WAWebBizAdCreationCurrencyUtils").formatCurrency(a, n), _ = r("WAWebBizAdCreationCurrencyUtils").formatCurrency(a * i, n, { withDecimals: !0 }), f;
			t[7] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
				/*BTDS*/
				""
			), t[7] = f) : f = t[7], t[8] !== _ ? (m = c.jsx(r("WAWebBizSummaryLineItem.react"), {
				label: f,
				value: _
			}), t[8] = _, t[9] = m) : m = t[9], l = r("WAWebBizSummaryLineItem.react"), u = "contentDeemphasized", d = s._(
				/*BTDS*/
				"",
				[s._plural(i, "number"), s._param("Pre-formatted daily budget", p)]
			), t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = u, t[5] = d, t[6] = m;
		} else l = t[3], u = t[4], d = t[5], m = t[6];
		var g;
		t[10] !== l || t[11] !== u || t[12] !== d ? (g = c.jsx(l, {
			colorName: u,
			label: d
		}), t[10] = l, t[11] = u, t[12] = d, t[13] = g) : g = t[13];
		var h;
		return t[14] !== m || t[15] !== g ? (h = c.jsxs(c.Fragment, { children: [m, g] }), t[14] = m, t[15] = g, t[16] = h) : h = t[16], h;
	}
	l.default = f;
}), 226);

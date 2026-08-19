__d("WAWebBizAdManagementAmountSpentCell.react", [
	"fbt",
	"WAWebFlex.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e, t) {
		return t == null ? null : e === "DAILY_BUDGET" ? s._(
			/*BTDS*/
			"",
			[s._param("Daily Budget", t)]
		) : e === "LIFETIME_BUDGET" ? s._(
			/*BTDS*/
			"",
			[s._param("Total Budget", t)]
		) : e === "MONTHLY_BUDGET" ? s._(
			/*BTDS*/
			"",
			[s._param("Monthly Budget", t)]
		) : e === "MIXED_BUDGET" ? s._(
			/*BTDS*/
			""
		) : null;
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(10), n = e.budgetType, a = e.formattedBudget, i = e.formattedSpent, l = i !== "" ? i : "—", s;
		t[0] !== n || t[1] !== a ? (s = c(n, a), t[0] = n, t[1] = a, t[2] = s) : s = t[2];
		var d = s, m;
		t[3] !== l ? (m = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			maxLines: 1,
			type: "Body1",
			children: l
		}), t[3] = l, t[4] = m) : m = t[4];
		var p;
		t[5] !== d ? (p = d != null ? u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			maxLines: 1,
			type: "Body2",
			children: d
		}) : null, t[5] = d, t[6] = p) : p = t[6];
		var _;
		return t[7] !== m || t[8] !== p ? (_ = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "start",
			children: [m, p]
		}), t[7] = m, t[8] = p, t[9] = _) : _ = t[9], _;
	}
	l.default = d;
}), 226);

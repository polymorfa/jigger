__d("WAWebBizAdManagementAmountSpentCell.react", [
	"fbt",
	"WAWebFlex.react",
	"WDSText.react",
	"react"
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
		var t = e.budgetType, n = e.formattedBudget, a = e.formattedSpent, i = a !== "" ? a : "—", l = c(t, n);
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "start",
			children: [u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				maxLines: 1,
				type: "Body1",
				children: i
			}), l != null ? u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				maxLines: 1,
				type: "Body2",
				children: l
			}) : null]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

__d("WAWebBizBroadcastProSuggestedBudgetModal.react", [
	"WAWebBizBroadcastProBudgetStrings",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WDSButton.react",
	"WDSText.react",
	"WDSTextField.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useState, m = {
		body: {
			rowGap: "x1f0uite",
			$$css: !0
		},
		footer: {
			justifyContent: "x13a6bvl",
			$$css: !0
		}
	};
	function p(e) {
		var t = e.currencySymbol, n = e.maxBid, a = e.onApply, i = e.onClose, l = d(""), u = l[0], p = l[1], _ = c(function(e) {
			(e === "" || /^\d+$/.test(e)) && p(e);
		}, []), f = (function() {
			if (u === "" || n === "") return "";
			var e = Number(u), t = Number(n);
			return !Number.isFinite(e) || !Number.isFinite(t) || e <= 0 ? "" : (Math.round(e * t * 100) / 100).toFixed(2);
		})(), g = f !== "" ? "" + Number(f).toLocaleString(void 0, {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		}) : "", h = c(function() {
			f !== "" && (a(f), i());
		}, [
			f,
			a,
			i
		]);
		return s.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Small,
			title: o("WAWebBizBroadcastProBudgetStrings").getSuggestedBudgetLabel(),
			onOverlayClick: i,
			testid: "bb_pro_suggested_budget_modal",
			actions: s.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: m.footer,
				children: s.jsx(r("WDSButton.react"), {
					label: o("WAWebBizBroadcastProBudgetStrings").getApplySuggestedBudgetLabel(),
					onPress: h,
					testid: "bb_pro_apply_suggested_budget_button",
					variant: "filled",
					disabled: f === "" || Number(f) === 0
				})
			}),
			children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: m.body,
				children: [
					s.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: o("WAWebBizBroadcastProBudgetStrings").getSuggestedBudgetDescription()
					}),
					s.jsx(r("WDSText.react"), {
						type: "Body1Emphasized",
						colorName: "contentDefault",
						children: o("WAWebBizBroadcastProBudgetStrings").getEstimatedPeopleLabel()
					}),
					s.jsx(r("WDSTextField.react"), {
						testid: "bb_pro_estimated_people_input",
						label: o("WAWebBizBroadcastProBudgetStrings").getEstimatedPeopleLabel(),
						floatingLabel: !1,
						value: u,
						onValueChange: _
					}),
					s.jsx(r("WDSText.react"), {
						type: "Body1Emphasized",
						colorName: "contentDefault",
						children: o("WAWebBizBroadcastProBudgetStrings").getSuggestedBudgetResultLabel()
					}),
					s.jsx(r("WDSTextField.react"), {
						testid: "bb_pro_suggested_budget_display",
						label: o("WAWebBizBroadcastProBudgetStrings").getSuggestedBudgetResultLabel(),
						floatingLabel: !1,
						value: g,
						prefix: t,
						readOnly: !0
					})
				]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);

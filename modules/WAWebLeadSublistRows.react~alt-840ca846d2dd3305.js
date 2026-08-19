__d("WAWebLeadSublistRows.react", [
	"WAWebDropdownItem.react",
	"WAWebLeadStage",
	"WAWebLeadStageColors",
	"WAWebLeadStageNames",
	"WAWebListIcon.react",
	"WAWebNoop",
	"WDSBaseRadio.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.currentStage, n = e.groupName, a = e.leadListName, i = e.onSelectStage;
		return s.jsx(s.Fragment, { children: o("WAWebLeadStage").LEAD_STAGE_ORDER.map(function(e) {
			var l = o("WAWebLeadStageNames").getLeadSublistRowLabel(a, e);
			return s.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				action: function() {
					return i(e), !1;
				},
				ariaLabel: l,
				testid: "lead_sublist_row_" + String(e),
				children: s.jsxs("div", {
					"data-testid": "lead_sublist_row_content_" + String(e),
					className: "x6s0dn4 x9f619 x1aj3ljl x78zum5 x193iq5w x6ikm8r x10wlt62 x16ovd2e x12xbjc7 xde1mab xu7uy1i",
					children: [
						s.jsx(r("WAWebListIcon.react"), { color: o("WAWebLeadStageColors").getLeadStageDotColor(e) }),
						s.jsx("div", {
							className: "x98rzlu x6ikm8r x10wlt62",
							children: s.jsx(r("WDSText.react"), {
								type: "Body2",
								colorName: "contentDefault",
								children: l
							})
						}),
						s.jsx(r("WDSBaseRadio.react"), {
							checked: t === e,
							name: n,
							onChange: r("WAWebNoop"),
							testid: "lead_sublist_radio_" + String(e),
							value: e
						})
					]
				})
			}, "lead_sublist_" + String(e));
		}) });
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);

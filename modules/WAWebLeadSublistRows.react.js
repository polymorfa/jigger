__d("WAWebLeadSublistRows.react", [
	"WAWebDropdownItem.react",
	"WAWebLeadStage",
	"WAWebLeadStageColors",
	"WAWebLeadStageNames",
	"WAWebListIcon.react",
	"WAWebNoop",
	"WDSBaseRadio.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(7), n = e.currentStage, a = e.groupName, i = e.leadListName, l = e.onSelectStage, u;
		t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l ? (u = o("WAWebLeadStage").LEAD_STAGE_ORDER.map(function(e) {
			var t = o("WAWebLeadStageNames").getLeadSublistRowLabel(i, e);
			return s.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				action: function() {
					return l(e), !1;
				},
				ariaLabel: t,
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
								children: t
							})
						}),
						s.jsx(r("WDSBaseRadio.react"), {
							checked: n === e,
							name: a,
							onChange: r("WAWebNoop"),
							testid: "lead_sublist_radio_" + String(e),
							value: e
						})
					]
				})
			}, "lead_sublist_" + String(e));
		}), t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = u) : u = t[4];
		var c;
		return t[5] !== u ? (c = s.jsx(s.Fragment, { children: u }), t[5] = u, t[6] = c) : c = t[6], c;
	}
	l.default = u;
}), 98);

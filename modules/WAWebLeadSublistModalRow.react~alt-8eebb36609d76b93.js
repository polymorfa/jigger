__d("WAWebLeadSublistModalRow.react", [
	"WAWebLeadStageColors",
	"WAWebLeadStageNames",
	"WAWebListIcon.react",
	"WAWebNoop",
	"WDSBaseRadio.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = 56, c = 56;
	function d(e) {
		var t = e.checked, n = e.groupName, a = e.leadListName, i = e.onSelectStage, l = e.stage, u = o("WAWebLeadStageNames").getLeadSublistRowLabel(a, l), c = function(t) {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), i(l));
		};
		return s.jsxs("div", {
			"aria-checked": t,
			"data-testid": "lead_sublist_modal_row_" + String(l),
			onClick: function() {
				return i(l);
			},
			onKeyDown: c,
			role: "radio",
			tabIndex: t ? 0 : -1,
			className: "x6s0dn4 x9f619 x1ypdohk x78zum5 xnnlda6 xh8yej3 xvtqlqk x1onydzz",
			children: [
				s.jsx("div", {
					className: "x6s0dn4 x78zum5 xdl72j9 x1c4vz4f x2lah0s x1evaxtz",
					children: s.jsx(r("WAWebListIcon.react"), { color: o("WAWebLeadStageColors").getLeadStageDotColor(l) })
				}),
				s.jsx("div", {
					className: "x1t1x2f9 x1iyjqo2 xs83m0k x6ikm8r x10wlt62",
					children: s.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDefault",
						children: u
					})
				}),
				s.jsx("span", {
					"aria-hidden": !0,
					children: s.jsx(r("WDSBaseRadio.react"), {
						checked: t,
						name: n,
						onChange: r("WAWebNoop"),
						tabIndex: -1,
						testid: "lead_sublist_modal_radio_" + String(l),
						value: l
					})
				})
			]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

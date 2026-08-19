__d("WAWebBizAILeadGenAddFieldView.react", [
	"fbt",
	"WDSButton.react",
	"WDSIconIcArrowBack.react",
	"WDSText.react",
	"WDSTextField.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState, p = 100;
	function _(e) {
		var t = e.onBack, n = e.onSave, o = e.testid, a = o === void 0 ? "lead-gen-add-field" : o, i = m(""), l = i[0], c = i[1], _ = l.trim(), f = _.length > 0 && _.length <= p, g = d(function() {
			f && n(_);
		}, [
			f,
			n,
			_
		]);
		return u.jsxs("div", {
			className: "x1h678fw xcldk2z xv6tirj x1phvje8 x1czfd9k",
			"data-testid": a,
			children: [
				u.jsxs("div", {
					className: "x6s0dn4 x1s70e7g x78zum5 x1nhvcw1 x12xbjc7",
					children: [u.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcArrowBack.react"),
						onPress: t,
						variant: "borderless",
						size: "small",
						"aria-label": s._(
							/*BTDS*/
							""
						).toString(),
						testid: a + "-back-btn"
					}), u.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				}),
				u.jsx("div", {
					className: "x12xbjc7 x1phvje8 xcldk2z",
					children: u.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				u.jsx("div", {
					className: "x16ovd2e",
					children: u.jsx(r("WDSTextField.react"), {
						bottomText: s._(
							/*BTDS*/
							""
						),
						label: s._(
							/*BTDS*/
							""
						),
						maxCharacterCount: p,
						value: l,
						onValueChange: function(t) {
							return c(t.length > p ? t.slice(0, p) : t);
						},
						testid: a + "-input"
					})
				}),
				u.jsxs("div", {
					className: "x1amjocr x78zum5 x13a6bvl x1h678fw",
					children: [u.jsx(r("WDSButton.react"), {
						variant: "tonal",
						size: "small",
						label: s._(
							/*BTDS*/
							""
						),
						onPress: t,
						testid: a + "-cancel-btn"
					}), u.jsx(r("WDSButton.react"), {
						variant: "filled",
						size: "small",
						label: s._(
							/*BTDS*/
							""
						),
						onPress: g,
						disabled: !f,
						testid: a + "-save-btn"
					})]
				})
			]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);

__d("WAWebBizAICustomRuleModal.react", [
	"fbt",
	"WAWebBizAiRuleCreateMutation",
	"WAWebBizAiRuleUpdateMutation",
	"WAWebBizAiSaveUtils",
	"WAWebWDSRichTextField.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef, p = c.useState, _ = 1e4, f = { suggestionsHeader: {
		paddingBottom: "x12xbjc7",
		paddingTop: "x1h678fw",
		paddingInlineStart: "x12w63v0",
		$$css: !0
	} }, g = [
		s._(
			/*BTDS*/
			""
		),
		s._(
			/*BTDS*/
			""
		),
		s._(
			/*BTDS*/
			""
		)
	];
	function h(e) {
		var t, n, a, i = e.onClose, l = e.onSaved, c = e.rule, h = c != null && c.id != null, y = p((t = c == null ? void 0 : c.customRule) != null ? t : ""), C = y[0], b = y[1], v = p(!1), S = v[0], R = v[1], L = m(null), E = d(function(e) {
			var t;
			b(e), (t = L.current) == null || t.setTextContent(e);
		}, []), k = C.trim().length > 0 && C.length <= _ && !S && (!h || C !== ((n = c == null ? void 0 : c.customRule) != null ? n : "")), I = d(function() {
			if (k) {
				R(!0);
				var e = c == null ? void 0 : c.id;
				o("WAWebBizAiSaveUtils").saveBizAISetting(function() {
					return e != null ? o("WAWebBizAiRuleUpdateMutation").updateRule({
						custom_rule: C.trim(),
						rule_id: e
					}) : o("WAWebBizAiRuleCreateMutation").createRule({
						custom_rule: C.trim(),
						rule_type: "CUSTOM_RULE"
					});
				}, {
					onError: i,
					onSuccess: l
				});
			}
		}, [
			k,
			i,
			l,
			c == null ? void 0 : c.id,
			C
		]);
		return u.jsxs("div", {
			className: "x1h678fw xcldk2z xv6tirj x1phvje8 x1czfd9k",
			"data-testid": "custom-rule-modal",
			children: [
				u.jsxs("div", {
					className: "x6s0dn4 x78zum5 x1qvou4u x1s70e7g x1nhvcw1 x12xbjc7",
					children: [u.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcClose.react"),
						onPress: i,
						variant: "borderless",
						size: "small",
						"aria-label": s._(
							/*BTDS*/
							""
						).toString(),
						testid: "custom-rule-close-btn"
					}), u.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						children: h ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							""
						)
					})]
				}),
				u.jsx(r("WAWebWDSRichTextField.react"), {
					ref: L,
					bottomText: s._(
						/*BTDS*/
						""
					),
					label: s._(
						/*BTDS*/
						""
					),
					placeholder: s._(
						/*BTDS*/
						""
					),
					rows: 4,
					initialText: (a = c == null ? void 0 : c.customRule) != null ? a : "",
					onValueChange: b,
					maxLength: _,
					maxCharacterCount: _,
					testid: "biz_custom_rule_textfield"
				}),
				u.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body2",
					xstyle: f.suggestionsHeader,
					children: s._(
						/*BTDS*/
						""
					)
				}),
				g.map(function(e, t) {
					return u.jsx("div", {
						className: "xefnzgg",
						children: u.jsx(r("WDSButton.react"), {
							variant: "tonal",
							size: "small",
							label: e,
							onPress: function() {
								return E(String(e));
							},
							testid: "suggestion-" + t
						})
					}, t);
				}),
				u.jsxs("div", {
					className: "x78zum5 x1qvou4u x1s70e7g x13a6bvl x1h678fw",
					children: [u.jsx(r("WDSButton.react"), {
						variant: "tonal",
						size: "small",
						label: s._(
							/*BTDS*/
							""
						),
						onPress: i,
						disabled: S,
						testid: "custom-rule-cancel-btn"
					}), u.jsx(r("WDSButton.react"), {
						variant: "filled",
						size: "small",
						label: s._(
							/*BTDS*/
							""
						),
						onPress: I,
						disabled: !k,
						loading: S,
						testid: "custom-rule-save-btn"
					})]
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);

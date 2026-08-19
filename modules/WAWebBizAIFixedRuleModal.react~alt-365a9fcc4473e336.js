__d("WAWebBizAIFixedRuleModal.react", [
	"fbt",
	"WAWebBizAiRuleCreateMutation",
	"WAWebBizAiRuleUpdateMutation",
	"WAWebBizAiSaveUtils",
	"WAWebFlex.react",
	"WDSBaseRadio.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useMemo, m = c.useState, p = "EMOJIS", _ = {
		NEVER: "NEVER",
		OFTEN: "OFTEN"
	}, f = {
		HANDOFF_AND_NOT_SHARE_PRICE: "HANDOFF_AND_NOT_SHARE_PRICE",
		SHARE_PRICE: "SHARE_PRICE"
	}, g = {
		description: {
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			$$css: !0
		},
		radioLabel: {
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		}
	};
	function h(e) {
		var t, n, a = e.onClose, i = e.onSaved, l = e.rule, c = e.ruleType, h = c === p, y = h ? (t = l == null ? void 0 : l.emojisFreq) != null ? t : _.OFTEN : (n = l == null ? void 0 : l.priceSharing) != null ? n : f.SHARE_PRICE, C = h ? _.OFTEN : f.SHARE_PRICE, b = h ? _.NEVER : f.HANDOFF_AND_NOT_SHARE_PRICE, v = m(y), S = v[0], R = v[1], L = m(!1), E = L[0], k = L[1], I = S !== y && !E, T = d(function() {
			return [{
				label: s._(
					/*BTDS*/
					""
				),
				testid: "fixed-rule-yes",
				value: C
			}, {
				label: s._(
					/*BTDS*/
					""
				),
				testid: "fixed-rule-no",
				value: b
			}];
		}, [b, C]), D = function() {
			if (I) {
				k(!0);
				var e = h ? { emojis_freq: S } : void 0, t = h ? void 0 : { price_sharing: S };
				o("WAWebBizAiSaveUtils").saveBizAISetting(function() {
					return (l == null ? void 0 : l.id) != null ? o("WAWebBizAiRuleUpdateMutation").updateRule({
						emojis_config: e,
						price_config: t,
						rule_id: l.id
					}) : o("WAWebBizAiRuleCreateMutation").createRule({
						emojis_config: e,
						price_config: t,
						rule_type: c
					});
				}, {
					onError: a,
					onSuccess: i
				});
			}
		}, x = h ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), $ = h ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return u.jsxs("div", {
			className: "x1h678fw xcldk2z xv6tirj x1phvje8 x1czfd9k",
			"data-testid": "fixed-rule-modal",
			children: [
				u.jsxs("div", {
					className: "x6s0dn4 x78zum5 x1qvou4u x1s70e7g x1nhvcw1 x12xbjc7",
					children: [u.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcClose.react"),
						onPress: a,
						variant: "borderless",
						size: "small",
						"aria-label": s._(
							/*BTDS*/
							""
						).toString(),
						testid: "fixed-rule-close-btn"
					}), u.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						children: x
					})]
				}),
				u.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body2",
					xstyle: g.description,
					children: $
				}),
				u.jsx(o("WAWebFlex.react").FlexColumn, {
					role: "radiogroup",
					"aria-label": "Rule options",
					children: T.map(function(e) {
						return u.jsxs("label", {
							htmlFor: "rule-" + e.value,
							className: "x6s0dn4 x1ubxc9n xyi3aci xwf5gio x1p453bz x1suzm8a x9f619 x1ypdohk x78zum5 xbktkl8 x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xh8yej3",
							"data-testid": e.testid,
							children: [u.jsx("div", {
								className: "x16ovd2e x1nzty39 x12xbjc7 x12w63v0",
								children: u.jsx(r("WDSBaseRadio.react"), {
									checked: S === e.value,
									id: "rule-" + e.value,
									name: "fixed-rule-option",
									onChange: R,
									value: e.value
								})
							}), u.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Body1",
								xstyle: g.radioLabel,
								children: e.label
							})]
						}, e.value);
					})
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
						onPress: a,
						disabled: E,
						testid: "fixed-rule-cancel-btn"
					}), u.jsx(r("WDSButton.react"), {
						variant: "filled",
						size: "small",
						label: s._(
							/*BTDS*/
							""
						),
						onPress: D,
						disabled: !I,
						loading: E,
						testid: "fixed-rule-save-btn"
					})]
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);

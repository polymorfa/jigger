__d("WAWebBizAIFollowUpModal.react", [
	"fbt",
	"WAWebBizAiReengagementUpdateMutation",
	"WAWebBizAiSaveUtils",
	"WAWebFlex.react",
	"WDSBaseRadio.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"WDSTextField.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useMemo, p = c.useState, _ = 15, f = 1, g = 23, h = {
		description: {
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			$$css: !0
		},
		radioLabel: {
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		},
		sectionLabel: {
			paddingBottom: "x1nbhmlj",
			paddingTop: "x1h678fw",
			$$css: !0
		}
	};
	function y(e) {
		var t, n = e.onClose, a = e.onSaved, i = e.rule, l = (i == null ? void 0 : i.followUpEnabled) === !0, c = (t = i == null ? void 0 : i.followUpAmount) != null ? t : _, y = p(l), C = y[0], b = y[1], v = p(String(c)), S = v[0], R = v[1], L = p(!1), E = L[0], k = L[1], I = parseInt(S, 10), T = /^\d+$/.test(S) && I >= f && I <= g, D = C !== l || C && I !== c, x = D && !E && (!C || T), $ = m(function() {
			return [{
				label: s._(
					/*BTDS*/
					""
				),
				testid: "followup-yes",
				value: "yes"
			}, {
				label: s._(
					/*BTDS*/
					""
				),
				testid: "followup-no",
				value: "no"
			}];
		}, []), P = d(function(e) {
			b(e === "yes");
		}, []), N = d(function() {
			x && (k(!0), o("WAWebBizAiSaveUtils").saveBizAISetting(function() {
				return o("WAWebBizAiReengagementUpdateMutation").updateReengagement({
					amount: C ? I : void 0,
					enabled: C
				});
			}, {
				onError: n,
				onSuccess: a
			}));
		}, [
			I,
			x,
			C,
			n,
			a
		]);
		return u.jsxs("div", {
			className: "x1h678fw xcldk2z xv6tirj x1phvje8 x1czfd9k",
			"data-testid": "followup-modal",
			children: [
				u.jsxs("div", {
					className: "x6s0dn4 x78zum5 x1qvou4u x1s70e7g x1nhvcw1 x12xbjc7",
					children: [u.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcClose.react"),
						onPress: n,
						variant: "borderless",
						size: "small",
						"aria-label": s._(
							/*BTDS*/
							""
						).toString(),
						testid: "followup-close-btn"
					}), u.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						children: s._(
							/*BTDS*/
							""
						)
					})]
				}),
				u.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body2",
					xstyle: h.description,
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsx(o("WAWebFlex.react").FlexColumn, {
					role: "radiogroup",
					"aria-label": "Follow-up options",
					children: $.map(function(e) {
						return u.jsxs("label", {
							htmlFor: "followup-" + e.value,
							className: "x6s0dn4 x1ubxc9n xyi3aci xwf5gio x1p453bz x1suzm8a x9f619 x1ypdohk x78zum5 xbktkl8 x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xh8yej3",
							"data-testid": e.testid,
							children: [u.jsx("div", {
								className: "x16ovd2e x1nzty39 x12xbjc7 x12w63v0",
								children: u.jsx(r("WDSBaseRadio.react"), {
									checked: C && e.value === "yes" || !C && e.value === "no",
									id: "followup-" + e.value,
									name: "followup-option",
									onChange: P,
									value: e.value
								})
							}), u.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Body1",
								xstyle: h.radioLabel,
								children: e.label
							})]
						}, e.value);
					})
				}),
				C && u.jsxs(u.Fragment, { children: [u.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body2",
					xstyle: h.sectionLabel,
					children: s._(
						/*BTDS*/
						""
					)
				}), u.jsx(r("WDSTextField.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					bottomText: s._(
						/*BTDS*/
						""
					),
					value: S,
					onValueChange: R,
					error: !T,
					errorText: s._(
						/*BTDS*/
						""
					),
					testid: "biz_profile_ai_followup_hours_textfield"
				})] }),
				u.jsxs("div", {
					className: "x78zum5 x1qvou4u x1s70e7g x13a6bvl x1h678fw",
					children: [u.jsx(r("WDSButton.react"), {
						variant: "tonal",
						size: "small",
						label: s._(
							/*BTDS*/
							""
						),
						onPress: n,
						disabled: E,
						testid: "followup-cancel-btn"
					}), u.jsx(r("WDSButton.react"), {
						variant: "filled",
						size: "small",
						label: s._(
							/*BTDS*/
							""
						),
						onPress: N,
						disabled: !x,
						loading: E,
						testid: "followup-save-btn"
					})]
				})
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);

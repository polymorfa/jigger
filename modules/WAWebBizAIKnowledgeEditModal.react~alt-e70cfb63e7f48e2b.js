__d("WAWebBizAIKnowledgeEditModal.react", [
	"fbt",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAiExampleResponseUpdateMutation",
	"WAWebBizAiKnowledgeUtils",
	"WAWebBizAiSaveUtils",
	"WAWebValidationUtils",
	"WAWebWDSRichTextField.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"WDSTextField.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useState, _ = 5e3, f = new Set(["email"]);
	function g(e) {
		var t = e.currentValue, n = e.exampleQuestion, a = e.fieldKey, i = e.fieldLabel, l = e.onClose, c = e.onSaved, g = e.rows, y = e.title, C = p({
			currentValue: t,
			fieldKey: a,
			text: t
		}), b = C[0], v = C[1], S = p(!1), R = S[0], L = S[1], E = f.has(a), k = b.fieldKey === a && b.currentValue === t ? b.text : t;
		m(function() {
			o("WAWebBizAILargeScreensLogEvents").logViewKnowledgeEdit();
		}, []);
		var I = h(a, k), T = k.trim().length > 0 && !R && k.trim() !== t.trim() && I == null, D = d(function(e) {
			v({
				currentValue: t,
				fieldKey: a,
				text: e
			});
		}, [t, a]), x = d(function() {
			T && (o("WAWebBizAILargeScreensLogEvents").logClickSaveKnowledge(), L(!0), o("WAWebBizAiExampleResponseUpdateMutation").updateKnowledge(o("WAWebBizAiKnowledgeUtils").buildKnowledgeInput(a, k.trim())).then(function(e) {
				if (o("WAWebBizAILargeScreensLogEvents").logApiSaveKnowledgeResult(e.isSuccess), e.isSuccess) {
					o("WAWebBizAiSaveUtils").showUpdatedToast(), c();
					return;
				}
				o("WAWebBizAiSaveUtils").showErrorToast(), L(!1);
			}).catch(function() {
				o("WAWebBizAILargeScreensLogEvents").logApiSaveKnowledgeResult(!1), o("WAWebBizAiSaveUtils").showErrorToast(), L(!1);
			}));
		}, [
			T,
			a,
			c,
			k
		]);
		return u.jsxs("div", {
			className: "x1h678fw xcldk2z xv6tirj x1phvje8 x1czfd9k",
			"data-testid": "knowledge-edit-modal",
			children: [
				u.jsxs("div", {
					className: "x6s0dn4 x78zum5 x1qvou4u x1s70e7g x1nhvcw1 x12xbjc7",
					children: [u.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcClose.react"),
						onPress: l,
						variant: "borderless",
						size: "small",
						"aria-label": s._(
							/*BTDS*/
							""
						).toString(),
						testid: "knowledge-edit-close-btn"
					}), u.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						children: y
					})]
				}),
				u.jsx("div", {
					className: "x12xbjc7 x1yc453h",
					children: u.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: n
					})
				}),
				E ? u.jsx(r("WDSTextField.react"), {
					bottomText: s._(
						/*BTDS*/
						""
					),
					label: i,
					value: k,
					onValueChange: D,
					error: I != null,
					errorText: I,
					testid: "knowledge-edit-text-input"
				}) : u.jsx(r("WAWebWDSRichTextField.react"), {
					bottomText: s._(
						/*BTDS*/
						""
					),
					label: i,
					placeholder: i,
					rows: g != null ? g : 4,
					initialText: t,
					onValueChange: D,
					maxCharacterCount: _,
					error: I != null,
					errorText: I,
					testid: "knowledge-edit-text-input"
				}, a),
				u.jsxs("div", {
					className: "x78zum5 x1qvou4u x1s70e7g x13a6bvl x1h678fw",
					children: [u.jsx(r("WDSButton.react"), {
						variant: "tonal",
						size: "small",
						label: s._(
							/*BTDS*/
							""
						),
						disabled: R,
						onPress: l,
						testid: "knowledge-edit-cancel-btn"
					}), u.jsx(r("WDSButton.react"), {
						variant: "filled",
						size: "small",
						label: s._(
							/*BTDS*/
							""
						),
						onPress: x,
						disabled: !T,
						loading: R,
						testid: "knowledge-edit-save-btn"
					})]
				})
			]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e, t) {
		var n = t.trim();
		return n === "" ? null : e === "email" && !o("WAWebValidationUtils").validateEmail(n) ? s._(
			/*BTDS*/
			""
		) : null;
	}
	l.default = g;
}), 226);

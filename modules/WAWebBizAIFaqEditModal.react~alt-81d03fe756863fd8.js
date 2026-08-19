__d("WAWebBizAIFaqEditModal.react", [
	"fbt",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAiExampleResponseUpdateMutation",
	"WAWebBizAiSaveUtils",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWDSRichTextField.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"WDSTextField.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useState, _ = 2e3, f = 5e3, g = { headerTitle: {
		flexGrow: "x1iyjqo2",
		$$css: !0
	} };
	function h(e) {
		var t, n, a, i, l, c, h = e.allFaqs, y = e.faq, C = e.onClose, b = e.onSaved, v = e.onViewKnowledge, S = y != null, R = p((t = y == null ? void 0 : y.question) != null ? t : ""), L = R[0], E = R[1], k = p((n = y == null ? void 0 : y.answer) != null ? n : ""), I = k[0], T = k[1], D = p(!1), x = D[0], $ = D[1], P = x;
		m(function() {
			o("WAWebBizAILargeScreensLogEvents").logViewFAQEdit();
		}, []);
		var N = d(function() {
			var e = s._(
				/*BTDS*/
				""
			);
			if (v == null) {
				o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: e }));
				return;
			}
			var t = v;
			o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
				msg: e,
				action: {
					actionText: s._(
						/*BTDS*/
						""
					),
					onAction: t
				}
			}));
		}, [v]), M = L.trim().length > 0 && I.trim().length > 0 && !P && (L.trim() !== ((a = y == null ? void 0 : y.question) != null ? a : "") || I.trim() !== ((i = y == null ? void 0 : y.answer) != null ? i : "")), w = d(function() {
			if (M) {
				o("WAWebBizAILargeScreensLogEvents").logClickSaveFAQ(), $(!0);
				var e = {
					answer: I.trim(),
					id: y == null ? void 0 : y.id,
					question: L.trim()
				}, t;
				if (S && y != null) {
					var n = !1;
					t = h.map(function(t) {
						if (!n) {
							var r = y.id != null ? t.id === y.id : t.question === y.question && t.answer === y.answer;
							if (r) return n = !0, e;
						}
						return {
							answer: t.answer,
							id: t.id,
							question: t.question
						};
					}), n || t.push(e);
				} else t = [].concat(h.map(function(e) {
					return {
						answer: e.answer,
						id: e.id,
						question: e.question
					};
				}), [e]);
				o("WAWebBizAiExampleResponseUpdateMutation").updateExampleResponses(t).then(function(e) {
					o("WAWebBizAILargeScreensLogEvents").logApiSaveFAQResult(e.isSuccess), e.isSuccess ? (S ? o("WAWebBizAiSaveUtils").showUpdatedToast() : N(), b()) : (o("WAWebBizAiSaveUtils").showErrorToast(), $(!1));
				}).catch(function() {
					o("WAWebBizAILargeScreensLogEvents").logApiSaveFAQResult(!1), o("WAWebBizAiSaveUtils").showErrorToast(), $(!1);
				});
			}
		}, [
			h,
			I,
			M,
			y,
			S,
			b,
			L,
			N
		]);
		return u.jsxs("div", {
			className: "x1h678fw xcldk2z xv6tirj x1phvje8 x1czfd9k",
			"data-testid": "faq-edit-modal",
			children: [
				u.jsxs("div", {
					className: "x6s0dn4 x1s70e7g x78zum5 x1nhvcw1 x1nbhmlj",
					children: [u.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcClose.react"),
						onPress: C,
						variant: "borderless",
						size: "small",
						"aria-label": s._(
							/*BTDS*/
							""
						).toString(),
						testid: "faq-edit-close-btn"
					}), u.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						xstyle: g.headerTitle,
						children: S ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							""
						)
					})]
				}),
				S ? null : u.jsx("div", {
					className: "xscbp6u x1yc453h",
					children: u.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				u.jsx(r("WDSTextField.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					value: L,
					onValueChange: E,
					maxCharacterCount: _,
					disabled: S,
					testid: "faq-edit-question-input"
				}),
				u.jsx("div", {
					className: "x1xrf6ya",
					children: u.jsx(r("WAWebWDSRichTextField.react"), {
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
						initialText: (c = y == null ? void 0 : y.answer) != null ? c : "",
						onValueChange: T,
						maxCharacterCount: f,
						testid: "faq-edit-answer-input"
					}, (l = y == null ? void 0 : y.id) != null ? l : "new")
				}),
				u.jsxs("div", {
					className: "x1s70e7g x78zum5 x13a6bvl x1h678fw",
					children: [u.jsx(r("WDSButton.react"), {
						variant: "tonal",
						size: "small",
						label: s._(
							/*BTDS*/
							""
						),
						disabled: P,
						onPress: C,
						testid: "faq-edit-cancel-btn"
					}), u.jsx(r("WDSButton.react"), {
						variant: "filled",
						size: "small",
						label: s._(
							/*BTDS*/
							""
						),
						onPress: w,
						disabled: !M,
						loading: x,
						testid: "faq-edit-save-btn"
					})]
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);

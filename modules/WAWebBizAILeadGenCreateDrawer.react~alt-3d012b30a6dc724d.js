__d("WAWebBizAILeadGenCreateDrawer.react", [
	"fbt",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAILeadGenAddFieldView.react",
	"WAWebBizAILeadGenAddMoreInfoButton.react",
	"WAWebBizAiLeadGenCreateMutation",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSBaseCheckbox.react",
	"WDSBaseRadio.react",
	"WDSButton.react",
	"WDSIconIcArrowBack.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"WDSTextField.react",
	"countWhere",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = c.useState, f = 100;
	function g() {
		return [
			{
				label: s._(
					/*BTDS*/
					""
				),
				singleUse: !0,
				value: "READY_TO_BUY"
			},
			{
				label: s._(
					/*BTDS*/
					""
				),
				singleUse: !0,
				value: "NEW_CHAT_BEGINS"
			},
			{
				label: s._(
					/*BTDS*/
					""
				),
				singleUse: !1,
				value: "CUSTOM_MOMENT"
			}
		];
	}
	function h() {
		return {
			CUSTOM_MOMENT: ["Name", "Product or Service"],
			NEW_CHAT_BEGINS: [
				"Name",
				"Address",
				"Product or Service"
			],
			READY_TO_BUY: [
				"Name",
				"Delivery Address",
				"Product or Service"
			]
		};
	}
	function y() {
		return {
			CUSTOM_MOMENT: s._(
				/*BTDS*/
				""
			),
			NEW_CHAT_BEGINS: s._(
				/*BTDS*/
				""
			),
			READY_TO_BUY: s._(
				/*BTDS*/
				""
			)
		};
	}
	function C(e) {
		var t, n = e.existingFlows, a = e.onBack, i = e.onSaved, l = p(function() {
			return g();
		}, []), c = p(function() {
			return y();
		}, []), C = _(""), b = C[0], v = C[1], S = _(""), R = S[0], L = S[1], E = _({}), k = E[0], I = E[1], T = _(!1), D = T[0], x = T[1], $ = _("moment"), P = $[0], N = $[1];
		m(function() {
			o("WAWebBizAILargeScreensLogEvents").logViewLeadGenTypeSelection();
		}, []);
		var M = p(function() {
			return new Set(n.flatMap(function(e) {
				return e.moment_type === "NEW_CHAT_BEGINS" ? ["NEW_CHAT_BEGINS"] : e.moment_type === "READY_TO_BUY" ? ["READY_TO_BUY"] : [];
			}));
		}, [n]), w = d(function(e) {
			var t;
			v(e);
			var n = h(), r = (t = n[e]) != null ? t : [], o = {};
			for (var a of r) o[a] = !0;
			I(o);
		}, []), A = b === "CUSTOM_MOMENT" && (R.trim() === "" || R.trim().length > f), F = d(function() {
			b === "" || A || (o("WAWebBizAILargeScreensLogEvents").logViewLeadGenFieldSelection(), N("fields"));
		}, [A, b]), O = d(function(e) {
			I(function(t) {
				var n;
				return babelHelpers.extends({}, t, (n = {}, n[e] = !t[e], n));
			});
		}, []), B = d(function() {
			N("addField");
		}, []), W = d(function(e) {
			var t = e.toLowerCase();
			if (Object.keys(k).some(function(e) {
				return e.toLowerCase() === t;
			})) {
				o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
				return;
			}
			I(function(t) {
				var n;
				return babelHelpers.extends({}, t, (n = {}, n[e] = !0, n));
			}), N("fields");
		}, [k]), q = d(function() {
			N("fields");
		}, []), U = r("countWhere")(Object.values(k), Boolean), V = U > 0, H = d(function() {
			if (!(D || !V)) {
				o("WAWebBizAILargeScreensLogEvents").logClickSaveLeadGenForm(), x(!0);
				var e = Object.keys(k).map(function(e) {
					return {
						is_enabled: k[e] === !0,
						label: e
					};
				});
				o("WAWebBizAiLeadGenCreateMutation").createLeadGenFlow({
					custom_moment: b === "CUSTOM_MOMENT" ? R.trim() : null,
					fields: e,
					moment_type: b
				}).then(function(e) {
					o("WAWebBizAILargeScreensLogEvents").logApiSaveLeadGenFormResult(e.isSuccess), e.isSuccess ? i() : (o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) })), x(!1));
				}).catch(function() {
					o("WAWebBizAILargeScreensLogEvents").logApiSaveLeadGenFormResult(!1), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) })), x(!1);
				});
			}
		}, [
			R,
			k,
			V,
			D,
			b,
			i
		]);
		if (P === "addField") return u.jsx(r("WAWebBizAILeadGenAddFieldView.react"), {
			onBack: q,
			onSave: W,
			testid: "biz-ai-lead-gen-create-add-field"
		});
		var G = P === "moment" ? s._(
			/*BTDS*/
			""
		) : (t = c[b]) != null ? t : s._(
			/*BTDS*/
			""
		), z = P === "fields" ? function() {
			return N("moment");
		} : a, j = u.jsx(u.Fragment, { children: P === "moment" ? u.jsxs(u.Fragment, { children: [
			u.jsx("div", {
				className: "x1xrf6ya xscbp6u x1iw51ew xde1mab",
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
				"aria-label": s._(
					/*BTDS*/
					""
				),
				role: "radiogroup",
				children: l.filter(function(e) {
					return !e.singleUse || !M.has(e.value);
				}).map(function(e) {
					return u.jsxs("label", {
						"data-testid": "moment-type-" + e.value,
						className: "x6s0dn4 xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 x8a3fw1 x1aj3ljl x889kno x1a8lsjc x1iw51ew xde1mab",
						children: [u.jsx(r("WDSBaseRadio.react"), {
							checked: b === e.value,
							name: "moment-type",
							onChange: function() {
								return w(e.value);
							},
							value: e.value
						}), u.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							type: "Body1",
							children: e.label
						})]
					}, e.value);
				})
			}),
			b === "CUSTOM_MOMENT" ? u.jsx("div", {
				className: "x1xrf6ya",
				children: u.jsx(r("WDSTextField.react"), {
					value: R,
					label: s._(
						/*BTDS*/
						""
					),
					maxCharacterCount: f,
					onValueChange: function(t) {
						return L(t.slice(0, f));
					},
					testid: "custom-moment-input"
				})
			}) : null,
			u.jsxs("div", {
				className: "x78zum5 x1qvou4u x1s70e7g x13a6bvl x1xrf6ya xscbp6u x1iw51ew xde1mab",
				children: [u.jsx(r("WDSButton.react"), {
					variant: "tonal",
					size: "small",
					label: s._(
						/*BTDS*/
						""
					),
					onPress: a,
					testid: "lead-gen-cancel-btn"
				}), u.jsx(r("WDSButton.react"), {
					variant: "filled",
					size: "small",
					label: s._(
						/*BTDS*/
						""
					),
					onPress: F,
					disabled: b === "" || A,
					testid: "lead-gen-next-btn"
				})]
			})
		] }) : u.jsxs(u.Fragment, { children: [
			u.jsx("div", {
				className: "x1xrf6ya xscbp6u x1iw51ew xde1mab",
				children: u.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body2",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}),
			Object.keys(k).map(function(e) {
				var t = k[e] === !0;
				return u.jsxs("div", {
					role: "button",
					tabIndex: 0,
					onClick: function() {
						return O(e);
					},
					onKeyDown: function(n) {
						(n.key === "Enter" || n.key === " ") && (n.preventDefault(), O(e));
					},
					className: "x6s0dn4 xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 x8a3fw1 x1aj3ljl x889kno x1a8lsjc x1iw51ew xde1mab x1ubxc9n",
					"data-testid": "field-toggle-" + e,
					children: [u.jsx(r("WDSBaseCheckbox.react"), { value: t }), u.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						children: e
					})]
				}, e);
			}),
			u.jsx(r("WAWebBizAILeadGenAddMoreInfoButton.react"), {
				onPress: B,
				testid: "lead-gen-create-add-more-info-btn"
			}),
			U >= 4 ? u.jsxs("div", {
				className: "x1h3rtpe xyi3aci xwf5gio x1p453bz x1suzm8a x1380le5 xefnzgg x1uvdrpn x14mko6t x16ovd2e x12xbjc7 x1iw51ew xde1mab",
				children: [u.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body2Emphasized",
					children: s._(
						/*BTDS*/
						""
					)
				}), u.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body2",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			}) : null,
			u.jsxs("div", {
				className: "x78zum5 x1qvou4u x1s70e7g x13a6bvl x1xrf6ya xscbp6u x1iw51ew xde1mab",
				children: [u.jsx(r("WDSButton.react"), {
					variant: "tonal",
					size: "small",
					label: s._(
						/*BTDS*/
						""
					),
					disabled: D,
					onPress: a,
					testid: "lead-gen-cancel-btn"
				}), u.jsx(r("WDSButton.react"), {
					variant: "filled",
					size: "small",
					label: s._(
						/*BTDS*/
						""
					),
					onPress: H,
					disabled: !V,
					loading: D,
					testid: "lead-gen-save-btn"
				})]
			})
		] }) });
		return u.jsxs("div", {
			className: "x1h678fw xcldk2z xv6tirj x1phvje8 x1czfd9k",
			"data-testid": "biz-ai-lead-gen-create-modal",
			children: [u.jsxs("div", {
				className: "x6s0dn4 x78zum5 x1qvou4u x1s70e7g x1nhvcw1 x12xbjc7",
				children: [u.jsx(r("WDSButton.react"), {
					Icon: r(P === "fields" ? "WDSIconIcArrowBack.react" : "WDSIconIcClose.react"),
					onPress: z,
					variant: "borderless",
					size: "small",
					"aria-label": P === "fields" ? s._(
						/*BTDS*/
						""
					).toString() : s._(
						/*BTDS*/
						""
					).toString(),
					testid: P === "fields" ? "lead-gen-create-back-btn" : "lead-gen-create-close-btn"
				}), u.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body1",
					children: G
				})]
			}), j]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);

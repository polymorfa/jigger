__d("WAWebBizAILeadGenEditFieldsModal.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAILeadGenAddFieldView.react",
	"WAWebBizAILeadGenAddMoreInfoButton.react",
	"WAWebBizAILeadGenEditFieldsModal_flow.graphql",
	"WAWebBizAiLeadGenUpdateMutation",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSBaseCheckbox.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useMemo, f = d.useState;
	function g(e) {
		return e === "READY_TO_BUY" ? s._(
			/*BTDS*/
			""
		) : e === "NEW_CHAT_BEGINS" ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	function h(e) {
		return e == null ? [] : e.filter(Boolean).map(function(e) {
			var t;
			return {
				is_enabled: e.is_enabled === !0,
				label: (t = e.label) != null ? t : ""
			};
		}).filter(function(e) {
			return e.label !== "";
		});
	}
	function y(t) {
		var a = t.flowRef, i = t.onBack, l = t.onSaved, u = o("CometRelay").useFragment(e !== void 0 ? e : e = n("WAWebBizAILeadGenEditFieldsModal_flow.graphql"), a);
		p(function() {
			o("WAWebBizAILargeScreensLogEvents").logViewLeadGenFieldSelection();
		}, []);
		var d = _(function() {
			return h(u.fields);
		}, [u.fields]), y = f(function() {
			return d;
		}), C = y[0], b = y[1], v = f(!1), S = v[0], R = v[1], L = f(!1), E = L[0], k = L[1], I = m(function(e) {
			b(function(t) {
				return t.map(function(t, n) {
					return n === e ? {
						is_enabled: !t.is_enabled,
						label: t.label
					} : t;
				});
			});
		}, []), T = m(function(e) {
			b(function(t) {
				return [].concat(t, [{
					is_enabled: !0,
					label: e
				}]);
			});
		}, []), D = m(function() {
			k(!0);
		}, []), x = m(function(e) {
			var t = e.toLowerCase();
			if (C.some(function(e) {
				return e.label.toLowerCase() === t;
			})) {
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
				return;
			}
			T(e), k(!1);
		}, [T, C]), $ = m(function() {
			k(!1);
		}, []), P = C.some(function(e) {
			return e.is_enabled;
		}), N = C.length !== d.length || C.some(function(e, t) {
			return t >= d.length || e.is_enabled !== d[t].is_enabled || e.label !== d[t].label;
		}), M = m(function() {
			if (!(S || !P || !N)) {
				var e = u.id;
				if (e != null) {
					o("WAWebBizAILargeScreensLogEvents").logClickSaveLeadGenForm(), R(!0);
					var t = C.map(function(e) {
						return {
							is_enabled: e.is_enabled,
							label: e.label
						};
					});
					o("WAWebBizAiLeadGenUpdateMutation").updateLeadGenFlow({
						custom_moment: u.moment_type === "CUSTOM_MOMENT" ? u.custom_moment : null,
						fields: t,
						flow_id: e
					}).then(function(e) {
						o("WAWebBizAILargeScreensLogEvents").logApiSaveLeadGenFormResult(e.isSuccess), e.isSuccess ? l() : (o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
							/*BTDS*/
							""
						) })), R(!1));
					}).catch(function() {
						o("WAWebBizAILargeScreensLogEvents").logApiSaveLeadGenFormResult(!1), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
							/*BTDS*/
							""
						) })), R(!1);
					});
				}
			}
		}, [
			C,
			u.custom_moment,
			u.id,
			u.moment_type,
			P,
			N,
			S,
			l
		]);
		return E ? c.jsx(r("WAWebBizAILeadGenAddFieldView.react"), {
			onBack: $,
			onSave: x,
			testid: "lead-gen-edit-add-field"
		}) : c.jsxs("div", {
			className: "x1h678fw xcldk2z xv6tirj x1phvje8 x1czfd9k",
			"data-testid": "biz-ai-lead-gen-edit-fields-modal",
			children: [
				c.jsxs("div", {
					className: "x6s0dn4 x1s70e7g x78zum5 x1nhvcw1 x12xbjc7",
					children: [c.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcClose.react"),
						onPress: i,
						variant: "borderless",
						size: "small",
						"aria-label": s._(
							/*BTDS*/
							""
						).toString(),
						testid: "lead-gen-edit-close-btn"
					}), c.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						children: g(u.moment_type)
					})]
				}),
				c.jsx("div", {
					className: "xvpt6g3 x1phvje8 xcldk2z",
					children: c.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				C.map(function(e, t) {
					return c.jsxs("div", {
						"data-testid": "edit-field-toggle-" + t,
						onClick: function() {
							return I(t);
						},
						onKeyDown: function(n) {
							(n.key === "Enter" || n.key === " ") && (n.preventDefault(), I(t));
						},
						role: "button",
						tabIndex: 0,
						className: "x6s0dn4 xyi3aci xwf5gio x1p453bz x1suzm8a xs2akgl x1ypdohk x78zum5 xqf2s3x x1uvdrpn x16ovd2e x12xbjc7 x1nzty39 x1iw51ew x1ubxc9n",
						children: [c.jsx(r("WDSBaseCheckbox.react"), { value: e.is_enabled }), c.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							type: "Body1",
							children: e.label
						})]
					}, t + "-" + e.label);
				}),
				c.jsx(r("WAWebBizAILeadGenAddMoreInfoButton.react"), {
					onPress: D,
					testid: "lead-gen-add-more-info-btn"
				}),
				c.jsx("div", {
					className: "xqf2s3x x1uvdrpn x1tiyuxx x1nbhmlj x1nzty39 x1iw51ew",
					children: c.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body3",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				c.jsxs("div", {
					className: "x1amjocr x78zum5 x13a6bvl x1h678fw",
					children: [c.jsx(r("WDSButton.react"), {
						variant: "tonal",
						size: "small",
						label: s._(
							/*BTDS*/
							""
						),
						disabled: S,
						onPress: i,
						testid: "lead-gen-edit-cancel-btn"
					}), c.jsx(r("WDSButton.react"), {
						variant: "filled",
						size: "small",
						label: s._(
							/*BTDS*/
							""
						),
						onPress: M,
						disabled: !P || !N,
						loading: S,
						testid: "lead-gen-edit-save-btn"
					})]
				})
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);

__d("WAWebBizAIInstructionsDrawer.react", [
	"fbt",
	"CometRelay",
	"WALogger",
	"WAWebBizAICustomRuleModal.react",
	"WAWebBizAIFixedRuleModal.react",
	"WAWebBizAIFollowUpModal.react",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAIQueryError.react",
	"WAWebBizAISettingsCategoryHandlers",
	"WAWebBizAISettingsNudgeAction",
	"WAWebBizAISettingsVersionCollection",
	"WAWebBizAiRuleDeleteMutation",
	"WAWebBizAiRulesGenMutation",
	"WAWebBizAiSaveUtils",
	"WAWebBizToolsDrawerBodySection.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerButton.react",
	"WAWebDrawerHeader.react",
	"WAWebDropdownItem.react",
	"WAWebErrorBoundary.react",
	"WAWebL10N",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebProtobufSyncAction.pb",
	"WAWebSpinner.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WDSButton.react",
	"WDSIconIcAdd.react",
	"WDSIconIcChatsDouble.react",
	"WDSIconIcChecklist.react",
	"WDSIconIcDelete.react",
	"WDSIconIcLabel.react",
	"WDSIconIcMood.react",
	"WDSIconIcMoreVert.react",
	"WDSTooltip.react",
	"getErrorSafe",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = ["ref"], d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useEffect, g = p.useRef, h = p.useState, y = "REENGAGEMENT", C = 15, b = {
		CUSTOM_RULE: "CUSTOM_RULE",
		EMOJIS: "EMOJIS",
		FOLLOW_UP: "FOLLOW_UP",
		PRICES: "PRICES"
	}, v = { NEVER: "NEVER" }, S = { HANDOFF_AND_NOT_SHARE_PRICE: "HANDOFF_AND_NOT_SHARE_PRICE" }, R = {
		body: {
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		icon: {
			color: "xhslqc4",
			$$css: !0
		},
		iconContainer: {
			marginInlineEnd: "x14mko6t",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			$$css: !0
		},
		item: {
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			$$css: !0
		}
	};
	function L(e, t) {
		var n, o = [], a = e.find(function(e) {
			return e.rule_type === b.EMOJIS;
		});
		if (a != null) {
			var i, l, u = (i = a.emojis_config) == null ? void 0 : i.emojis_freq;
			o.push({
				emojisFreq: u,
				icon: m.jsx(r("WDSIconIcMood.react"), { iconXstyle: R.icon }),
				id: (l = a.id) != null ? l : null,
				label: u === v.NEVER ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				),
				ruleType: b.EMOJIS
			});
		}
		var c = e.find(function(e) {
			return e.rule_type === b.PRICES;
		});
		if (c != null) {
			var d, p, _ = (d = c.price_config) == null ? void 0 : d.price_sharing;
			o.push({
				icon: m.jsx(r("WDSIconIcLabel.react"), { iconXstyle: R.icon }),
				id: (p = c.id) != null ? p : null,
				label: _ === S.HANDOFF_AND_NOT_SHARE_PRICE ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				),
				priceSharing: _,
				ruleType: b.PRICES
			});
		}
		var f = (t == null ? void 0 : t.enabled) === !0, g = (n = t == null ? void 0 : t.amount) != null ? n : C;
		o.push({
			followUpAmount: g,
			followUpEnabled: f,
			icon: m.jsx(r("WDSIconIcChatsDouble.react"), { iconXstyle: R.icon }),
			id: y,
			label: f ? s._(
				/*BTDS*/
				"",
				[s._plural(g), s._param("hours", r("WAWebL10N").n(g))]
			) : s._(
				/*BTDS*/
				""
			),
			ruleType: b.FOLLOW_UP
		});
		for (var h of e) if (h.rule_type === b.CUSTOM_RULE) {
			var L, E;
			o.push({
				customRule: h.custom_rule,
				icon: m.jsx(r("WDSIconIcChecklist.react"), { iconXstyle: R.icon }),
				id: (L = h.id) != null ? L : null,
				label: (E = h.custom_rule) != null ? E : "",
				ruleType: b.CUSTOM_RULE
			});
		}
		return o;
	}
	function E(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, c), i = a.onBack, l = h(function() {
			return L([], null);
		}), s = l[0], d = l[1], p = h(!1), g = p[0], y = p[1], C = h(!1), v = C[0], S = C[1], R = o("CometRelay").useMutation(o("WAWebBizAiRulesGenMutation").MUTATION), E = R[0], T = R[1], D = _(function() {
			E({
				onCompleted: function(n) {
					var t = n == null ? void 0 : n.xfb_meta_ai_biz_agent_wa_gen_rules;
					(t == null ? void 0 : t.success) === !0 && t.rules != null ? (d(L(t.rules, t.reengagement)), y(!0), S(!1)) : (o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["BizAI rules gen returned an unsuccessful result"]))).sendLogs("biz-ai-rules-gen-unsuccessful"), S(!0));
				},
				onError: function(t) {
					o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["BizAI rules gen mutation failed"]))).catching(r("getErrorSafe")(t)).sendLogs("biz-ai-rules-gen-error"), S(!0);
				},
				variables: {}
			});
		}, [E]);
		f(function() {
			o("WAWebBizAILargeScreensLogEvents").logViewInstructionsDrawer();
		}, []), f(function() {
			D();
		}, [D]), f(function() {
			o("WAWebBizAISettingsCategoryHandlers").registerCategoryHandler(o("WAWebProtobufSyncAction.pb").SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory.INSTRUCTIONS);
		}, []), o("useWAWebListener").useListener(o("WAWebBizAISettingsVersionCollection").BizAISettingsVersionCollection, "change", function() {
			var e = o("WAWebBizAISettingsVersionCollection").BizAISettingsVersionCollection.getByCategory(o("WAWebProtobufSyncAction.pb").SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory.INSTRUCTIONS);
			(e == null ? void 0 : e.stale) === !0 && (e.stale = !1, D());
		});
		var x = _(function(e, t) {
			var n = function() {
				o("WAWebModalManager").ModalManager.close(), D(), o("WAWebBizAISettingsNudgeAction").sendSettingsNudge(o("WAWebProtobufSyncAction.pb").SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory.INSTRUCTIONS);
			};
			switch (t) {
				case b.CUSTOM_RULE:
					o("WAWebModalManager").ModalManager.open(m.jsx(o("WAWebModal.react").Modal, {
						type: o("WAWebModal.react").ModalTheme.Auto,
						children: m.jsx(r("WAWebBizAICustomRuleModal.react"), {
							rule: e,
							onClose: o("WAWebModalManager").closeModalManager,
							onSaved: n
						})
					}));
					break;
				case b.EMOJIS:
				case b.PRICES:
					o("WAWebModalManager").ModalManager.open(m.jsx(o("WAWebModal.react").Modal, {
						type: o("WAWebModal.react").ModalTheme.Auto,
						children: m.jsx(r("WAWebBizAIFixedRuleModal.react"), {
							rule: e,
							ruleType: t,
							onClose: o("WAWebModalManager").closeModalManager,
							onSaved: n
						})
					}));
					break;
				case b.FOLLOW_UP:
					o("WAWebModalManager").ModalManager.open(m.jsx(o("WAWebModal.react").Modal, {
						type: o("WAWebModal.react").ModalTheme.Auto,
						children: m.jsx(r("WAWebBizAIFollowUpModal.react"), {
							rule: e,
							onClose: o("WAWebModalManager").closeModalManager,
							onSaved: n
						})
					}));
					break;
			}
		}, [D]), $ = _(function(e) {
			x(e, e.ruleType);
		}, [x]), P = _(function() {
			x(null, b.CUSTOM_RULE);
		}, [x]), N = _(function(e) {
			d(function(t) {
				return t.filter(function(t) {
					return t.id !== e;
				});
			}), o("WAWebBizAiRuleDeleteMutation").deleteRule(e).then(function(e) {
				e.isSuccess ? (o("WAWebBizAiSaveUtils").showDeletedToast(), o("WAWebBizAISettingsNudgeAction").sendSettingsNudge(o("WAWebProtobufSyncAction.pb").SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory.INSTRUCTIONS)) : (o("WAWebBizAiSaveUtils").showErrorToast(), D());
			}).catch(function() {
				o("WAWebBizAiSaveUtils").showErrorToast(), D();
			});
		}, [D]), M = T && !g;
		return m.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "biz-ai-instructions",
			fallback: function() {
				return m.jsx(k, {
					ref: n,
					onBack: i
				});
			},
			children: v ? m.jsx(k, {
				ref: n,
				onBack: i,
				onRetry: D
			}) : m.jsx(I, {
				ref: n,
				isLoading: M,
				rules: s,
				onBack: i,
				onAdd: P,
				onRuleTap: $,
				onDelete: N
			})
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = e.onBack, n = e.onRetry, a = e.ref;
		return m.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			testid: "instructions-drawer",
			children: [m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: t
			}), m.jsx(r("WAWebDrawerBody.react"), {
				xstyle: R.body,
				children: m.jsx(r("WAWebBizAIQueryError.react"), {
					onRetry: n,
					testid: "instructions-error"
				})
			})]
		});
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(e) {
		var t = e.isLoading, n = e.onAdd, a = e.onBack, i = e.onDelete, l = e.onRuleTap, u = e.ref, c = e.rules;
		return m.jsxs(r("WAWebDrawer.react"), {
			ref: u,
			testid: "instructions-drawer",
			children: [m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: a,
				rightActionElement: t ? null : m.jsx("span", { children: m.jsx(r("WDSTooltip.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					children: m.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcAdd.react"),
						onPress: n,
						variant: "borderless",
						size: "small",
						"aria-label": s._(
							/*BTDS*/
							""
						).toString(),
						testid: "ai-instructions-add-btn"
					})
				}) })
			}), m.jsx(r("WAWebDrawerBody.react"), {
				xstyle: R.body,
				children: t ? m.jsx("div", {
					className: "x6s0dn4 x78zum5 x5yr21d xl56j7k",
					children: m.jsx(o("WAWebSpinner.react").Spinner, {
						color: "default",
						size: 40,
						stroke: 4
					})
				}) : m.jsxs(m.Fragment, { children: [m.jsx(r("WAWebBizToolsDrawerBodySection.react"), {
					hideDivider: !0,
					theme: "biz-ai-home",
					headerText: s._(
						/*BTDS*/
						""
					),
					children: c.map(function(e) {
						var t;
						return m.jsx(T, {
							rule: e,
							onRuleTap: l,
							onDelete: i
						}, (t = e.id) != null ? t : e.ruleType);
					})
				}), m.jsx("div", {
					className: "x9f619 x78zum5 x16ovd2e x1phvje8 xcldk2z xh8yej3",
					children: m.jsx(r("WDSButton.react"), {
						variant: "outline",
						size: "medium",
						widthMode: "flexible",
						Icon: r("WDSIconIcAdd.react"),
						label: s._(
							/*BTDS*/
							""
						),
						onPress: n,
						testid: "instructions-add-instruction-btn"
					})
				})] })
			})]
		});
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(e) {
		var t, n, a = e.onDelete, i = e.onRuleTap, l = e.rule, u = l.ruleType === b.CUSTOM_RULE, c = h(!1), d = c[0], p = c[1], f = h(null), y = f[0], C = f[1], v = g(null), S = u && l.id != null && (d || y != null), L = _(function(e) {
			if (e.stopPropagation(), v.current != null && l.id != null) {
				var t = l.id;
				C({
					anchor: v.current,
					menu: m.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						action: function() {
							a(t), C(null);
						},
						icon: m.jsx(r("WDSIconIcDelete.react"), {}),
						theme: o("WAWebDropdownItem.react").DropdownItemThemeType.Negative,
						testid: "delete-rule-" + t,
						children: s._(
							/*BTDS*/
							""
						)
					})
				});
			}
		}, [a, l.id]), E = _(function() {
			C(null);
		}, []);
		return m.jsxs(m.Fragment, { children: [m.jsx("div", {
			onMouseEnter: function() {
				return p(!0);
			},
			onMouseLeave: function() {
				return p(!1);
			},
			children: m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
				testid: "instruction-" + l.ruleType + "-" + ((t = l.id) != null ? t : "new"),
				useRoundedStyle: !0,
				divider: !1,
				icon: l.icon,
				iconXstyle: R.iconContainer,
				xstyle: R.item,
				active: !1,
				onClick: function() {
					return i(l);
				},
				detail: S ? m.jsx("span", {
					ref: v,
					children: m.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcMoreVert.react"),
						onPress: L,
						variant: "borderless",
						size: "small",
						"aria-label": s._(
							/*BTDS*/
							""
						).toString(),
						testid: "rule-menu-" + ((n = l.id) != null ? n : "")
					})
				}) : null,
				children: m.jsx("span", babelHelpers.extends({}, {
					0: { className: "x1ua5tub x1h7i4cw x104kibb xqf2s3x xeuugli x6ikm8r x10wlt62 xlyipyv" },
					1: { className: "x1ua5tub x1h7i4cw x104kibb x11gldyt xeuugli x6ikm8r x10wlt62 xlyipyv" }
				}[!!S << 0], { children: l.label }))
			})
		}), y != null && m.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "RuleContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: E,
			children: m.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
				anchor: y.anchor,
				menu: y.menu
			} })
		})] });
	}
	T.displayName = T.name + " [from " + i.id + "]", l.default = E;
}), 226);

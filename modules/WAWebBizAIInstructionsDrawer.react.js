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
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(36), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, c), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, s = l.onBack, d = h(T), p = d[0], _ = d[1], g = h(!1), y = g[0], C = g[1], v = h(!1), S = v[0], R = v[1], E = o("CometRelay").useMutation(o("WAWebBizAiRulesGenMutation").MUTATION), $ = E[0], P = E[1], N;
		n[3] !== $ ? (N = function() {
			$({
				onCompleted: function(n) {
					var t = n == null ? void 0 : n.xfb_meta_ai_biz_agent_wa_gen_rules;
					(t == null ? void 0 : t.success) === !0 && t.rules != null ? (_(L(t.rules, t.reengagement)), C(!0), R(!1)) : (o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["BizAI rules gen returned an unsuccessful result"]))).sendLogs("biz-ai-rules-gen-unsuccessful"), R(!0));
				},
				onError: function(t) {
					o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["BizAI rules gen mutation failed"]))).catching(r("getErrorSafe")(t)).sendLogs("biz-ai-rules-gen-error"), R(!0);
				},
				variables: {}
			});
		}, n[3] = $, n[4] = N) : N = n[4];
		var M = N, w;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (w = [], n[5] = w) : w = n[5], f(I, w);
		var A, F;
		n[6] !== M ? (A = function() {
			M();
		}, F = [M], n[6] = M, n[7] = A, n[8] = F) : (A = n[7], F = n[8]), f(A, F);
		var O;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (O = [], n[9] = O) : O = n[9], f(k, O);
		var B;
		n[10] !== M ? (B = function() {
			var e = o("WAWebBizAISettingsVersionCollection").BizAISettingsVersionCollection.getByCategory(o("WAWebProtobufSyncAction.pb").SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory.INSTRUCTIONS);
			(e == null ? void 0 : e.stale) === !0 && (e.stale = !1, M());
		}, n[10] = M, n[11] = B) : B = n[11], o("useWAWebListener").useListener(o("WAWebBizAISettingsVersionCollection").BizAISettingsVersionCollection, "change", B);
		var W;
		n[12] !== M ? (W = function(t, n) {
			var e = function() {
				o("WAWebModalManager").ModalManager.close(), M(), o("WAWebBizAISettingsNudgeAction").sendSettingsNudge(o("WAWebProtobufSyncAction.pb").SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory.INSTRUCTIONS);
			};
			e: switch (n) {
				case b.CUSTOM_RULE: {
					o("WAWebModalManager").ModalManager.open(m.jsx(o("WAWebModal.react").Modal, {
						type: o("WAWebModal.react").ModalTheme.Auto,
						children: m.jsx(r("WAWebBizAICustomRuleModal.react"), {
							rule: t,
							onClose: o("WAWebModalManager").closeModalManager,
							onSaved: e
						})
					}));
					break e;
				}
				case b.EMOJIS:
				case b.PRICES: {
					o("WAWebModalManager").ModalManager.open(m.jsx(o("WAWebModal.react").Modal, {
						type: o("WAWebModal.react").ModalTheme.Auto,
						children: m.jsx(r("WAWebBizAIFixedRuleModal.react"), {
							rule: t,
							ruleType: n,
							onClose: o("WAWebModalManager").closeModalManager,
							onSaved: e
						})
					}));
					break e;
				}
				case b.FOLLOW_UP: o("WAWebModalManager").ModalManager.open(m.jsx(o("WAWebModal.react").Modal, {
					type: o("WAWebModal.react").ModalTheme.Auto,
					children: m.jsx(r("WAWebBizAIFollowUpModal.react"), {
						rule: t,
						onClose: o("WAWebModalManager").closeModalManager,
						onSaved: e
					})
				}));
			}
		}, n[12] = M, n[13] = W) : W = n[13];
		var q = W, U;
		n[14] !== q ? (U = function(t) {
			q(t, t.ruleType);
		}, n[14] = q, n[15] = U) : U = n[15];
		var V = U, H;
		n[16] !== q ? (H = function() {
			q(null, b.CUSTOM_RULE);
		}, n[16] = q, n[17] = H) : H = n[17];
		var G = H, z;
		n[18] !== M ? (z = function(t) {
			_(function(e) {
				return e.filter(function(e) {
					return e.id !== t;
				});
			}), o("WAWebBizAiRuleDeleteMutation").deleteRule(t).then(function(e) {
				e.isSuccess ? (o("WAWebBizAiSaveUtils").showDeletedToast(), o("WAWebBizAISettingsNudgeAction").sendSettingsNudge(o("WAWebProtobufSyncAction.pb").SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory.INSTRUCTIONS)) : (o("WAWebBizAiSaveUtils").showErrorToast(), M());
			}).catch(function() {
				o("WAWebBizAiSaveUtils").showErrorToast(), M();
			});
		}, n[18] = M, n[19] = z) : z = n[19];
		var j = z, K = P && !y, Q;
		n[20] !== s || n[21] !== i ? (Q = function() {
			return m.jsx(D, {
				ref: i,
				onBack: s
			});
		}, n[20] = s, n[21] = i, n[22] = Q) : Q = n[22];
		var X;
		n[23] !== G || n[24] !== j || n[25] !== V || n[26] !== S || n[27] !== K || n[28] !== M || n[29] !== s || n[30] !== i || n[31] !== p ? (X = S ? m.jsx(D, {
			ref: i,
			onBack: s,
			onRetry: M
		}) : m.jsx(x, {
			ref: i,
			isLoading: K,
			rules: p,
			onBack: s,
			onAdd: G,
			onRuleTap: V,
			onDelete: j
		}), n[23] = G, n[24] = j, n[25] = V, n[26] = S, n[27] = K, n[28] = M, n[29] = s, n[30] = i, n[31] = p, n[32] = X) : X = n[32];
		var Y;
		return n[33] !== Q || n[34] !== X ? (Y = m.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "biz-ai-instructions",
			fallback: Q,
			children: X
		}), n[33] = Q, n[34] = X, n[35] = Y) : Y = n[35], Y;
	}
	function k() {
		o("WAWebBizAISettingsCategoryHandlers").registerCategoryHandler(o("WAWebProtobufSyncAction.pb").SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory.INSTRUCTIONS);
	}
	function I() {
		o("WAWebBizAILargeScreensLogEvents").logViewInstructionsDrawer();
	}
	function T() {
		return L([], null);
	}
	function D(e) {
		var t = o("react-compiler-runtime").c(9), n = e.onBack, a = e.onRetry, i = e.ref, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[0] = l) : l = t[0];
		var u;
		t[1] !== n ? (u = m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: l,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: n
		}), t[1] = n, t[2] = u) : u = t[2];
		var c;
		t[3] !== a ? (c = m.jsx(r("WAWebDrawerBody.react"), {
			xstyle: R.body,
			children: m.jsx(r("WAWebBizAIQueryError.react"), {
				onRetry: a,
				testid: "instructions-error"
			})
		}), t[3] = a, t[4] = c) : c = t[4];
		var d;
		return t[5] !== i || t[6] !== u || t[7] !== c ? (d = m.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			testid: "instructions-drawer",
			children: [u, c]
		}), t[5] = i, t[6] = u, t[7] = c, t[8] = d) : d = t[8], d;
	}
	function x(e) {
		var t = o("react-compiler-runtime").c(17), n = e.isLoading, a = e.onAdd, i = e.onBack, l = e.onDelete, u = e.onRuleTap, c = e.ref, d = e.rules, p;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[0] = p) : p = t[0];
		var _;
		t[1] !== n || t[2] !== a ? (_ = n ? null : m.jsx("span", { children: m.jsx(r("WDSTooltip.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			children: m.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcAdd.react"),
				onPress: a,
				variant: "borderless",
				size: "small",
				"aria-label": s._(
					/*BTDS*/
					""
				).toString(),
				testid: "ai-instructions-add-btn"
			})
		}) }), t[1] = n, t[2] = a, t[3] = _) : _ = t[3];
		var f;
		t[4] !== i || t[5] !== _ ? (f = m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: p,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: i,
			rightActionElement: _
		}), t[4] = i, t[5] = _, t[6] = f) : f = t[6];
		var g;
		t[7] !== n || t[8] !== a || t[9] !== l || t[10] !== u || t[11] !== d ? (g = m.jsx(r("WAWebDrawerBody.react"), {
			xstyle: R.body,
			children: n ? m.jsx("div", {
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
				children: d.map(function(e) {
					var t;
					return m.jsx($, {
						rule: e,
						onRuleTap: u,
						onDelete: l
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
					onPress: a,
					testid: "instructions-add-instruction-btn"
				})
			})] })
		}), t[7] = n, t[8] = a, t[9] = l, t[10] = u, t[11] = d, t[12] = g) : g = t[12];
		var h;
		return t[13] !== c || t[14] !== f || t[15] !== g ? (h = m.jsxs(r("WAWebDrawer.react"), {
			ref: c,
			testid: "instructions-drawer",
			children: [f, g]
		}), t[13] = c, t[14] = f, t[15] = g, t[16] = h) : h = t[16], h;
	}
	function $(e) {
		var t, n = o("react-compiler-runtime").c(29), a = e.onDelete, i = e.onRuleTap, l = e.rule, u = l.ruleType === b.CUSTOM_RULE, c = h(!1), d = c[0], p = c[1], _ = h(null), f = _[0], y = _[1], C = g(null), v = u && l.id != null && (d || f != null), S;
		n[0] !== a || n[1] !== l.id ? (S = function(t) {
			if (t.stopPropagation(), C.current != null && l.id != null) {
				var e = l.id;
				y({
					anchor: C.current,
					menu: m.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						action: function() {
							a(e), y(null);
						},
						icon: m.jsx(r("WDSIconIcDelete.react"), {}),
						theme: o("WAWebDropdownItem.react").DropdownItemThemeType.Negative,
						testid: "delete-rule-" + e,
						children: s._(
							/*BTDS*/
							""
						)
					})
				});
			}
		}, n[0] = a, n[1] = l.id, n[2] = S) : S = n[2];
		var L = S, E;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (E = function() {
			y(null);
		}, n[3] = E) : E = n[3];
		var k = E, I, T;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (I = function() {
			return p(!0);
		}, T = function() {
			return p(!1);
		}, n[4] = I, n[5] = T) : (I = n[4], T = n[5]);
		var D = "instruction-" + l.ruleType + "-" + ((t = l.id) != null ? t : "new"), x = l.icon, $;
		n[6] !== i || n[7] !== l ? ($ = function() {
			return i(l);
		}, n[6] = i, n[7] = l, n[8] = $) : $ = n[8];
		var P;
		if (n[9] !== L || n[10] !== v || n[11] !== l.id) {
			var N;
			P = v ? m.jsx("span", {
				ref: C,
				children: m.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcMoreVert.react"),
					onPress: L,
					variant: "borderless",
					size: "small",
					"aria-label": s._(
						/*BTDS*/
						""
					).toString(),
					testid: "rule-menu-" + ((N = l.id) != null ? N : "")
				})
			}) : null, n[9] = L, n[10] = v, n[11] = l.id, n[12] = P;
		} else P = n[12];
		var M;
		n[13] !== v ? (M = {
			0: { className: "x1ua5tub x1h7i4cw x104kibb xqf2s3x xeuugli x6ikm8r x10wlt62 xlyipyv" },
			1: { className: "x1ua5tub x1h7i4cw x104kibb x11gldyt xeuugli x6ikm8r x10wlt62 xlyipyv" }
		}[!!v << 0], n[13] = v, n[14] = M) : M = n[14];
		var w;
		n[15] !== l.label || n[16] !== M ? (w = m.jsx("span", babelHelpers.extends({}, M, { children: l.label })), n[15] = l.label, n[16] = M, n[17] = w) : w = n[17];
		var A;
		n[18] !== l.icon || n[19] !== w || n[20] !== D || n[21] !== $ || n[22] !== P ? (A = m.jsx("div", {
			onMouseEnter: I,
			onMouseLeave: T,
			children: m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
				testid: D,
				useRoundedStyle: !0,
				divider: !1,
				icon: x,
				iconXstyle: R.iconContainer,
				xstyle: R.item,
				active: !1,
				onClick: $,
				detail: P,
				children: w
			})
		}), n[18] = l.icon, n[19] = w, n[20] = D, n[21] = $, n[22] = P, n[23] = A) : A = n[23];
		var F;
		n[24] !== f ? (F = f != null && m.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "RuleContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: k,
			children: m.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
				anchor: f.anchor,
				menu: f.menu
			} })
		}), n[24] = f, n[25] = F) : F = n[25];
		var O;
		return n[26] !== A || n[27] !== F ? (O = m.jsxs(m.Fragment, { children: [A, F] }), n[26] = A, n[27] = F, n[28] = O) : O = n[28], O;
	}
	l.default = E;
}), 226);

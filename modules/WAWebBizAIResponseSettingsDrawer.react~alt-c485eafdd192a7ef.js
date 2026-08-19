__d("WAWebBizAIResponseSettingsDrawer.react", [
	"fbt",
	"CometRelay",
	"WALogger",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAIQueryBoundary.react",
	"WAWebBizAIQueryRefreshBanner.react",
	"WAWebBizAIResponseSettingsDrawerQuery.graphql",
	"WAWebBizAiReplyBotEnabledTimeUpdateMutation",
	"WAWebBizAiReplyChatTriggerUpdateMutation",
	"WAWebBizToolsDrawerBodySection.react",
	"WAWebBusinessHoursUtils",
	"WAWebBusinessProfileLabels",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerButton.react",
	"WAWebDrawerHeader.react",
	"WAWebErrorBoundary.react",
	"WAWebFlex.react",
	"WAWebGalaxyFlowsNavBarUtils.react",
	"WAWebGroupInfoSeparator.react",
	"WAWebNullFunc",
	"WAWebSmbUtilsTimeUtils",
	"WAWebSpinner.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSBaseRadio.react",
	"WDSIconIcInfo.react",
	"WDSText.react",
	"WDSTextField.react",
	"getErrorSafe",
	"react",
	"useWAWebBizAIQueryRefreshError",
	"useWAWebDebouncedCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p, _, f, g = f || (f = o("react")), h = f, y = h.Suspense, C = h.useCallback, b = h.useEffect, v = h.useRef, S = h.useState, R = 0x4b645b3cace4e, L = {
		AD_RESPONSES_ONLY: "AD_RESPONSES_ONLY",
		ALL_CHATS: "ALL_CHATS",
		MANUAL: "MANUAL",
		NEW_CONTACT_ONLY: "NEW_CONTACT_ONLY"
	}, E = {
		ANYTIME: "ANYTIME",
		SELECTIVE_HOURS: "SELECTIVE_HOURS"
	}, k = {
		ALL_NEW: "all_new",
		EXCEPT_CONTACTS: "except_contacts",
		FROM_ADS: "from_ads",
		PAUSED: "paused"
	}, I = {
		ANYTIME: "anytime",
		SELECTED_TIMES: "selected_times"
	}, T = (u = {}, u[L.AD_RESPONSES_ONLY] = k.FROM_ADS, u[L.ALL_CHATS] = k.ALL_NEW, u[L.MANUAL] = k.PAUSED, u[L.NEW_CONTACT_ONLY] = k.EXCEPT_CONTACTS, u), D = (c = {}, c[k.ALL_NEW] = L.ALL_CHATS, c[k.EXCEPT_CONTACTS] = L.NEW_CONTACT_ONLY, c[k.FROM_ADS] = L.AD_RESPONSES_ONLY, c[k.PAUSED] = L.MANUAL, c), x = (d = {}, d[E.ANYTIME] = I.ANYTIME, d[E.SELECTIVE_HOURS] = I.SELECTED_TIMES, d), $ = (m = {}, m[I.ANYTIME] = E.ANYTIME, m[I.SELECTED_TIMES] = E.SELECTIVE_HOURS, m);
	function P() {
		o("WAWebGalaxyFlowsNavBarUtils.react").openHelpCenterArticle(R);
	}
	var N = 500, M = 60, w = 540, A = 1020;
	function F(e, t) {
		return t === void 0 && (t = w), o("WAWebSmbUtilsTimeUtils").minutesToTime(e == null ? t : Math.floor(e / M));
	}
	function O(e) {
		var t;
		return ((t = o("WAWebSmbUtilsTimeUtils").timeStringToMinutes(e)) != null ? t : 0) * M;
	}
	function B() {
		o("WAWebToastManager").ToastManager.open(g.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	function W() {
		o("WAWebToastManager").ToastManager.open(g.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	var q = [
		{
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			testid: "response-settings-all-new",
			value: k.ALL_NEW
		},
		{
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			testid: "response-settings-except-contacts",
			value: k.EXCEPT_CONTACTS
		},
		{
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			testid: "response-settings-from-ads",
			value: k.FROM_ADS
		},
		{
			label: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			testid: "response-settings-paused",
			value: k.PAUSED
		}
	], U = [{
		label: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		testid: "response-settings-anytime",
		value: I.ANYTIME
	}, {
		label: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		testid: "response-settings-selected-times",
		value: I.SELECTED_TIMES
	}], V = {
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
		},
		radioLabel: {
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		},
		sectionDescription: {
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		timeRow: {
			flexWrap: "x1a02dak",
			rowGap: "x8a3fw1",
			columnGap: "x1aj3ljl",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	};
	function H(e) {
		var t = e.onBack, n = e.onRetry, a = e.queryRef, i = e.queryVersion, l = i === void 0 ? 0 : i, u = e.ref;
		b(function() {
			o("WAWebBizAILargeScreensLogEvents").logViewResponseSettingsDrawer();
		}, []);
		var c = g.jsx("div", {
			"data-testid": "response-settings-loading",
			className: "x6s0dn4 x78zum5 x98rzlu xl56j7k",
			children: g.jsx(o("WAWebSpinner.react").Spinner, {
				color: "default",
				size: 24,
				stroke: 3
			})
		});
		return g.jsxs(r("WAWebDrawer.react"), {
			ref: u,
			testid: "response-settings-drawer",
			children: [g.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: t
			}), g.jsx(r("WAWebDrawerBody.react"), {
				xstyle: V.body,
				children: g.jsx(r("WAWebBizAIQueryBoundary.react"), {
					boundaryName: "biz-ai-response-settings",
					onRetry: n,
					queryVersion: l,
					testid: "response-settings-error",
					children: g.jsx(y, {
						fallback: c,
						children: a != null ? g.jsx(K, {
							onRetry: n,
							queryRef: a
						}) : c
					})
				})
			})]
		});
	}
	H.displayName = H.name + " [from " + i.id + "]";
	var G = e !== void 0 ? e : e = n("WAWebBizAIResponseSettingsDrawerQuery.graphql");
	function z(e) {
		var t;
		return e == null ? k.ALL_NEW : (t = T[e]) != null ? t : k.ALL_NEW;
	}
	function j(e) {
		var t;
		return e == null ? I.ANYTIME : (t = x[e]) != null ? t : I.ANYTIME;
	}
	function K(e) {
		var t, n, a, i, l, u, c, d, m, f, h, y = e.onRetry, R = e.queryRef, T = o("CometRelay").usePreloadedQuery(G, R), x = r("useWAWebBizAIQueryRefreshError")(R.source), M = T.xfb_meta_ai_biz_agent_wa_reply_chat_trigger, w = M == null ? void 0 : M.trigger_chat_type, H = M == null || (t = M.bot_enabled_time) == null ? void 0 : t.enabled_time, K = z(w != null ? w : null), Q = j(H != null ? H : null), X = F(M == null || (n = M.bot_enabled_time) == null ? void 0 : n.from_sec_in_day), Y = F(M == null || (a = M.bot_enabled_time) == null ? void 0 : a.to_sec_in_day, A), J = S({}), Z = J[0], ee = J[1], te = S({}), ne = te[0], re = te[1], oe = (i = ne.chatOption) != null ? i : K, ae = (l = ne.scheduleOption) != null ? l : Q, ie = (u = ne.startTime) != null ? u : X, le = (c = ne.endTime) != null ? c : Y, se = (d = Z.chatOption) != null ? d : oe, ue = (m = Z.scheduleOption) != null ? m : ae, ce = (f = Z.startTime) != null ? f : ie, de = (h = Z.endTime) != null ? h : le, me = se !== oe, pe = ue !== ae || ue === I.SELECTED_TIMES && (ce !== ie || de !== le), _e = ue !== I.SELECTED_TIMES || o("WAWebBusinessHoursUtils").isValidTime(ce) && o("WAWebBusinessHoursUtils").isValidTime(de) && O(de) > O(ce), fe = v(null), ge = v(null), he = v(0), ye = v(0), Ce = C(function(e) {
			var t, n = he.current + 1;
			he.current = n, fe.current = e, o("WAWebBizAiReplyChatTriggerUpdateMutation").updateChatTrigger((t = D[e]) != null ? t : L.ALL_CHATS).then(function(t) {
				var r = n === he.current;
				t.isSuccess ? r && (re(function(t) {
					return babelHelpers.extends({}, t, { chatOption: e });
				}), B()) : r && W();
			}).catch(function(e) {
				o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["response settings chat trigger save failed"]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-response-settings-chat-save"), n === he.current && W();
			}).finally(function() {
				n === he.current && (fe.current = null);
			});
		}, []), be = C(function(e, t, n) {
			var a, i, l = ye.current + 1;
			ye.current = l, ge.current = {
				endTime: n,
				scheduleOption: e,
				startTime: t
			}, o("WAWebBizAiReplyBotEnabledTimeUpdateMutation").updateBotEnabledTime(e === I.SELECTED_TIMES ? {
				enabled_time: (a = $[e]) != null ? a : E.ANYTIME,
				from_sec_in_day: O(t),
				time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
				to_sec_in_day: O(n)
			} : { enabled_time: (i = $[e]) != null ? i : E.ANYTIME }).then(function(r) {
				var o = l === ye.current;
				r.isSuccess ? o && (re(function(r) {
					return babelHelpers.extends({}, r, {
						endTime: n,
						scheduleOption: e,
						startTime: t
					});
				}), B()) : o && W();
			}).catch(function(e) {
				o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["response settings schedule save failed"]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-response-settings-schedule-save"), l === ye.current && W();
			}).finally(function() {
				l === ye.current && (ge.current = null);
			});
		}, []), ve = r("useWAWebDebouncedCallback")(function() {
			ue !== I.SELECTED_TIMES || !_e || ce === ie && de === le || navigator.onLine && be(ue, ce, de);
		}, N), Se = C(function(e) {
			ee(function(t) {
				return babelHelpers.extends({}, t, { chatOption: e });
			}), e !== oe && navigator.onLine && Ce(e);
		}, [oe, Ce]), Re = C(function(e) {
			if (ee(function(t) {
				return babelHelpers.extends({}, t, { scheduleOption: e });
			}), e !== ae) {
				var t = e === I.SELECTED_TIMES, n = !t || o("WAWebBusinessHoursUtils").isValidTime(ce) && o("WAWebBusinessHoursUtils").isValidTime(de) && O(de) > O(ce);
				n && navigator.onLine && be(e, ce, de);
			}
		}, [
			ae,
			de,
			be,
			ce
		]), Le = C(function(e) {
			ee(function(t) {
				return babelHelpers.extends({}, t, { startTime: e });
			}), ve();
		}, [ve]), Ee = C(function(e) {
			ee(function(t) {
				return babelHelpers.extends({}, t, { endTime: e });
			}), ve();
		}, [ve]), ke = C(function() {
			if (!(!me && !pe) && _e) {
				if (!navigator.onLine) {
					W();
					return;
				}
				if (me && fe.current !== se && Ce(se), pe) {
					var e = ge.current;
					(e == null || e.scheduleOption !== ue || e.startTime !== ce || e.endTime !== de) && be(ue, ce, de);
				}
			}
		}, [
			se,
			de,
			me,
			pe,
			_e,
			Ce,
			be,
			ue,
			ce
		]), Ie = v(ke);
		return b(function() {
			Ie.current = ke;
		}, [ke]), b(function() {
			return function() {
				Ie.current();
			};
		}, []), g.jsxs(g.Fragment, { children: [
			x && y != null ? g.jsx(r("WAWebBizAIQueryRefreshBanner.react"), {
				onRetry: y,
				testid: "response-settings-refresh"
			}) : null,
			g.jsxs(r("WAWebBizToolsDrawerBodySection.react"), {
				hideDivider: !0,
				theme: "biz-ai-home",
				headerText: s._(
					/*BTDS*/
					""
				),
				children: [g.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body2",
					xstyle: V.sectionDescription,
					children: s._(
						/*BTDS*/
						""
					)
				}), g.jsx(o("WAWebFlex.react").FlexColumn, {
					role: "radiogroup",
					"aria-label": "Chat response settings",
					children: q.map(function(e) {
						return g.jsxs("label", {
							htmlFor: "chat-" + e.value,
							className: "x6s0dn4 x1ubxc9n xyi3aci xwf5gio x1p453bz x1suzm8a x9f619 x1ypdohk x78zum5 xbktkl8 x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xh8yej3",
							"data-testid": e.testid,
							children: [g.jsx("div", {
								className: "x16ovd2e x1nzty39 x12xbjc7 x12w63v0",
								children: g.jsx(r("WDSBaseRadio.react"), {
									checked: se === e.value,
									id: "chat-" + e.value,
									name: "chat-response-settings",
									onChange: Se,
									testid: "wds-radio-input-" + (se === e.value ? "checked" : "unchecked"),
									value: e.value
								})
							}), g.jsx(o("WAWebFlex.react").FlexColumn, {
								xstyle: V.radioLabel,
								children: g.jsx(r("WDSText.react"), {
									colorName: "contentDefault",
									type: "Body1",
									children: e.label()
								})
							})]
						}, e.value);
					})
				})]
			}),
			se !== k.PAUSED && g.jsxs(g.Fragment, { children: [g.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }), g.jsxs(r("WAWebBizToolsDrawerBodySection.react"), {
				hideDivider: !0,
				theme: "biz-ai-home",
				headerText: s._(
					/*BTDS*/
					""
				),
				children: [g.jsx(o("WAWebFlex.react").FlexColumn, {
					role: "radiogroup",
					"aria-label": "Schedule settings",
					children: U.map(function(e) {
						return g.jsxs("label", {
							htmlFor: "schedule-" + e.value,
							className: "x6s0dn4 x1ubxc9n xyi3aci xwf5gio x1p453bz x1suzm8a x9f619 x1ypdohk x78zum5 xbktkl8 x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xh8yej3",
							"data-testid": e.testid,
							children: [g.jsx("div", {
								className: "x16ovd2e x1nzty39 x12xbjc7 x12w63v0",
								children: g.jsx(r("WDSBaseRadio.react"), {
									checked: ue === e.value,
									id: "schedule-" + e.value,
									name: "schedule-response-settings",
									onChange: Re,
									testid: "wds-radio-input-" + (ue === e.value ? "checked" : "unchecked"),
									value: e.value
								})
							}), g.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Body1",
								xstyle: V.radioLabel,
								children: e.label()
							})]
						}, e.value);
					})
				}), ue === I.SELECTED_TIMES && g.jsxs(o("WAWebFlex.react").FlexRow, {
					xstyle: V.timeRow,
					testid: "schedule-time-inputs",
					children: [g.jsx("div", {
						className: "x1r8uery x1iyjqo2 x5w4yej",
						children: g.jsx(r("WDSTextField.react"), {
							error: !o("WAWebBusinessHoursUtils").isValidTime(ce),
							errorText: o("WAWebBusinessProfileLabels").getInvalidTimeErrorLabel(),
							label: s._(
								/*BTDS*/
								""
							),
							testid: "biz_profile_ai_response_start_time_textfield",
							value: ce,
							onValueChange: Le
						})
					}), g.jsx("div", {
						className: "x1r8uery x1iyjqo2 x5w4yej",
						children: g.jsx(r("WDSTextField.react"), {
							error: !o("WAWebBusinessHoursUtils").isValidTime(de) || o("WAWebBusinessHoursUtils").isValidTime(ce) && o("WAWebBusinessHoursUtils").isValidTime(de) && O(de) <= O(ce),
							errorText: o("WAWebBusinessHoursUtils").isValidTime(de) ? s._(
								/*BTDS*/
								""
							) : o("WAWebBusinessProfileLabels").getInvalidTimeErrorLabel(),
							label: s._(
								/*BTDS*/
								""
							),
							testid: "biz_profile_ai_response_end_time_textfield",
							value: de,
							onValueChange: Ee
						})
					})]
				})]
			})] }),
			g.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }),
			g.jsx(r("WAWebBizToolsDrawerBodySection.react"), {
				hideDivider: !0,
				theme: "biz-ai-home",
				headerText: s._(
					/*BTDS*/
					""
				),
				children: g.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
					testid: "response-settings-disconnect",
					useRoundedStyle: !0,
					divider: !1,
					icon: g.jsx(r("WDSIconIcInfo.react"), { iconXstyle: V.icon }),
					iconXstyle: V.iconContainer,
					xstyle: V.item,
					active: !1,
					onClick: P,
					children: s._(
						/*BTDS*/
						""
					)
				})
			})
		] });
	}
	K.displayName = K.name + " [from " + i.id + "]";
	function Q(e) {
		switch (e) {
			case L.NEW_CONTACT_ONLY: return s._(
				/*BTDS*/
				""
			);
			case L.AD_RESPONSES_ONLY: return s._(
				/*BTDS*/
				""
			);
			case L.MANUAL: return s._(
				/*BTDS*/
				""
			);
			case L.ALL_CHATS:
			default: return s._(
				/*BTDS*/
				""
			);
		}
	}
	Q.displayName = Q.name + " [from " + i.id + "]";
	function X() {
		var e, t = o("CometRelay").useLazyLoadQuery(G, {}, { fetchPolicy: "store-and-network" }), n = (e = t.xfb_meta_ai_biz_agent_wa_reply_chat_trigger) == null ? void 0 : e.trigger_chat_type;
		return Q(n != null ? n : null);
	}
	X.displayName = X.name + " [from " + i.id + "]";
	function Y() {
		return g.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "biz-ai-response-settings-summary",
			fallback: o("WAWebNullFunc").returnNull,
			children: g.jsx(y, {
				fallback: null,
				children: g.jsx(X, {})
			})
		});
	}
	Y.displayName = Y.name + " [from " + i.id + "]", l.WAWebBizAIResponseSettingsDrawer = H, l.ResponseSettingsDrawerQuery = G, l.WAWebBizAIResponseSettingsSummary = Y;
}), 226);

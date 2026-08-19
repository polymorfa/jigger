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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(16), n = e.onBack, a = e.onRetry, i = e.queryRef, l = e.queryVersion, u = e.ref, c = l === void 0 ? 0 : l, d;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (d = [], t[0] = d) : d = t[0], b(G, d);
		var m;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (m = g.jsx("div", {
			"data-testid": "response-settings-loading",
			className: "x6s0dn4 x78zum5 x98rzlu xl56j7k",
			children: g.jsx(o("WAWebSpinner.react").Spinner, {
				color: "default",
				size: 24,
				stroke: 3
			})
		}), t[1] = m) : m = t[1];
		var p = m, _;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[2] = _) : _ = t[2];
		var f;
		t[3] !== n ? (f = g.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: _,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: n
		}), t[3] = n, t[4] = f) : f = t[4];
		var h;
		t[5] !== a || t[6] !== i ? (h = g.jsx(y, {
			fallback: p,
			children: i != null ? g.jsx(Q, {
				onRetry: a,
				queryRef: i
			}) : p
		}), t[5] = a, t[6] = i, t[7] = h) : h = t[7];
		var C;
		t[8] !== a || t[9] !== c || t[10] !== h ? (C = g.jsx(r("WAWebDrawerBody.react"), {
			xstyle: V.body,
			children: g.jsx(r("WAWebBizAIQueryBoundary.react"), {
				boundaryName: "biz-ai-response-settings",
				onRetry: a,
				queryVersion: c,
				testid: "response-settings-error",
				children: h
			})
		}), t[8] = a, t[9] = c, t[10] = h, t[11] = C) : C = t[11];
		var v;
		return t[12] !== u || t[13] !== f || t[14] !== C ? (v = g.jsxs(r("WAWebDrawer.react"), {
			ref: u,
			testid: "response-settings-drawer",
			children: [f, C]
		}), t[12] = u, t[13] = f, t[14] = C, t[15] = v) : v = t[15], v;
	}
	function G() {
		o("WAWebBizAILargeScreensLogEvents").logViewResponseSettingsDrawer();
	}
	var z = e !== void 0 ? e : e = n("WAWebBizAIResponseSettingsDrawerQuery.graphql");
	function j(e) {
		var t;
		return e == null ? k.ALL_NEW : (t = T[e]) != null ? t : k.ALL_NEW;
	}
	function K(e) {
		var t;
		return e == null ? I.ANYTIME : (t = x[e]) != null ? t : I.ANYTIME;
	}
	function Q(e) {
		var t, n, a, i, l, u, c, d, m, f, h, y = o("react-compiler-runtime").c(72), C = e.onRetry, R = e.queryRef, T = o("CometRelay").usePreloadedQuery(z, R), x = r("useWAWebBizAIQueryRefreshError")(R.source), M = T.xfb_meta_ai_biz_agent_wa_reply_chat_trigger, w = M == null ? void 0 : M.trigger_chat_type, H = M == null || (t = M.bot_enabled_time) == null ? void 0 : t.enabled_time, G = w != null ? w : null, Q;
		y[0] !== G ? (Q = j(G), y[0] = G, y[1] = Q) : Q = y[1];
		var X = Q, Y = H != null ? H : null, J;
		y[2] !== Y ? (J = K(Y), y[2] = Y, y[3] = J) : J = y[3];
		var Z = J, ee = M == null || (n = M.bot_enabled_time) == null ? void 0 : n.from_sec_in_day, te;
		y[4] !== ee ? (te = F(ee), y[4] = ee, y[5] = te) : te = y[5];
		var ne = te, re = M == null || (a = M.bot_enabled_time) == null ? void 0 : a.to_sec_in_day, oe;
		y[6] !== re ? (oe = F(re, A), y[6] = re, y[7] = oe) : oe = y[7];
		var ae = oe, ie;
		y[8] === Symbol.for("react.memo_cache_sentinel") ? (ie = {}, y[8] = ie) : ie = y[8];
		var le = S(ie), se = le[0], ue = le[1], ce;
		y[9] === Symbol.for("react.memo_cache_sentinel") ? (ce = {}, y[9] = ce) : ce = y[9];
		var de = S(ce), me = de[0], pe = de[1], _e = (i = me.chatOption) != null ? i : X, fe = (l = me.scheduleOption) != null ? l : Z, ge = (u = me.startTime) != null ? u : ne, he = (c = me.endTime) != null ? c : ae, ye = (d = se.chatOption) != null ? d : _e, Ce = (m = se.scheduleOption) != null ? m : fe, be = (f = se.startTime) != null ? f : ge, ve = (h = se.endTime) != null ? h : he, Se = ye !== _e, Re = Ce !== fe || Ce === I.SELECTED_TIMES && (be !== ge || ve !== he), Le;
		y[10] !== ve || y[11] !== Ce || y[12] !== be ? (Le = Ce !== I.SELECTED_TIMES || o("WAWebBusinessHoursUtils").isValidTime(be) && o("WAWebBusinessHoursUtils").isValidTime(ve) && O(ve) > O(be), y[10] = ve, y[11] = Ce, y[12] = be, y[13] = Le) : Le = y[13];
		var Ee = Le, ke = v(null), Ie = v(null), Te = v(0), De = v(0), xe;
		y[14] === Symbol.for("react.memo_cache_sentinel") ? (xe = function(t) {
			var e, n = Te.current + 1;
			Te.current = n, ke.current = t, o("WAWebBizAiReplyChatTriggerUpdateMutation").updateChatTrigger((e = D[t]) != null ? e : L.ALL_CHATS).then(function(e) {
				var r = n === Te.current;
				e.isSuccess ? r && (pe(function(e) {
					return babelHelpers.extends({}, e, { chatOption: t });
				}), B()) : r && W();
			}).catch(function(e) {
				o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["response settings chat trigger save failed"]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-response-settings-chat-save"), n === Te.current && W();
			}).finally(function() {
				n === Te.current && (ke.current = null);
			});
		}, y[14] = xe) : xe = y[14];
		var $e = xe, Pe;
		y[15] === Symbol.for("react.memo_cache_sentinel") ? (Pe = function(t, n, a) {
			var e, i, l = De.current + 1;
			De.current = l, Ie.current = {
				endTime: a,
				scheduleOption: t,
				startTime: n
			}, o("WAWebBizAiReplyBotEnabledTimeUpdateMutation").updateBotEnabledTime(t === I.SELECTED_TIMES ? {
				enabled_time: (e = $[t]) != null ? e : E.ANYTIME,
				from_sec_in_day: O(n),
				time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
				to_sec_in_day: O(a)
			} : { enabled_time: (i = $[t]) != null ? i : E.ANYTIME }).then(function(e) {
				var r = l === De.current;
				e.isSuccess ? r && (pe(function(e) {
					return babelHelpers.extends({}, e, {
						endTime: a,
						scheduleOption: t,
						startTime: n
					});
				}), B()) : r && W();
			}).catch(function(e) {
				o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["response settings schedule save failed"]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-response-settings-schedule-save"), l === De.current && W();
			}).finally(function() {
				l === De.current && (Ie.current = null);
			});
		}, y[15] = Pe) : Pe = y[15];
		var Ne = Pe, Me;
		y[16] !== he || y[17] !== ge || y[18] !== ve || y[19] !== Ee || y[20] !== Ce || y[21] !== be ? (Me = function() {
			Ce !== I.SELECTED_TIMES || !Ee || be === ge && ve === he || navigator.onLine && Ne(Ce, be, ve);
		}, y[16] = he, y[17] = ge, y[18] = ve, y[19] = Ee, y[20] = Ce, y[21] = be, y[22] = Me) : Me = y[22];
		var we = r("useWAWebDebouncedCallback")(Me, N), Ae;
		y[23] !== _e ? (Ae = function(t) {
			ue(function(e) {
				return babelHelpers.extends({}, e, { chatOption: t });
			}), t !== _e && navigator.onLine && $e(t);
		}, y[23] = _e, y[24] = Ae) : Ae = y[24];
		var Fe = Ae, Oe;
		y[25] !== fe || y[26] !== ve || y[27] !== be ? (Oe = function(t) {
			if (ue(function(e) {
				return babelHelpers.extends({}, e, { scheduleOption: t });
			}), t !== fe) {
				var e = t === I.SELECTED_TIMES, n = !e || o("WAWebBusinessHoursUtils").isValidTime(be) && o("WAWebBusinessHoursUtils").isValidTime(ve) && O(ve) > O(be);
				n && navigator.onLine && Ne(t, be, ve);
			}
		}, y[25] = fe, y[26] = ve, y[27] = be, y[28] = Oe) : Oe = y[28];
		var Be = Oe, We;
		y[29] !== we ? (We = function(t) {
			ue(function(e) {
				return babelHelpers.extends({}, e, { startTime: t });
			}), we();
		}, y[29] = we, y[30] = We) : We = y[30];
		var qe = We, Ue;
		y[31] !== we ? (Ue = function(t) {
			ue(function(e) {
				return babelHelpers.extends({}, e, { endTime: t });
			}), we();
		}, y[31] = we, y[32] = Ue) : Ue = y[32];
		var Ve = Ue, He;
		y[33] !== ye || y[34] !== ve || y[35] !== Se || y[36] !== Re || y[37] !== Ee || y[38] !== Ce || y[39] !== be ? (He = function() {
			if (!(!Se && !Re) && Ee) {
				if (!navigator.onLine) {
					W();
					return;
				}
				if (Se && ke.current !== ye && $e(ye), Re) {
					var e = Ie.current;
					(e == null || e.scheduleOption !== Ce || e.startTime !== be || e.endTime !== ve) && Ne(Ce, be, ve);
				}
			}
		}, y[33] = ye, y[34] = ve, y[35] = Se, y[36] = Re, y[37] = Ee, y[38] = Ce, y[39] = be, y[40] = He) : He = y[40];
		var Ge = He, ze = v(Ge), je, Ke;
		y[41] !== Ge ? (je = function() {
			ze.current = Ge;
		}, Ke = [Ge], y[41] = Ge, y[42] = je, y[43] = Ke) : (je = y[42], Ke = y[43]), b(je, Ke);
		var Qe, Xe;
		y[44] === Symbol.for("react.memo_cache_sentinel") ? (Qe = function() {
			return function() {
				ze.current();
			};
		}, Xe = [], y[44] = Qe, y[45] = Xe) : (Qe = y[44], Xe = y[45]), b(Qe, Xe);
		var Ye;
		y[46] !== x || y[47] !== C ? (Ye = x && C != null ? g.jsx(r("WAWebBizAIQueryRefreshBanner.react"), {
			onRetry: C,
			testid: "response-settings-refresh"
		}) : null, y[46] = x, y[47] = C, y[48] = Ye) : Ye = y[48];
		var Je;
		y[49] === Symbol.for("react.memo_cache_sentinel") ? (Je = s._(
			/*BTDS*/
			""
		), y[49] = Je) : Je = y[49];
		var Ze;
		y[50] === Symbol.for("react.memo_cache_sentinel") ? (Ze = g.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			xstyle: V.sectionDescription,
			children: s._(
				/*BTDS*/
				""
			)
		}), y[50] = Ze) : Ze = y[50];
		var et;
		y[51] !== ye || y[52] !== Fe ? (et = q.map(function(e) {
			return g.jsxs("label", {
				htmlFor: "chat-" + e.value,
				className: "x6s0dn4 x1ubxc9n xyi3aci xwf5gio x1p453bz x1suzm8a x9f619 x1ypdohk x78zum5 xbktkl8 x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xh8yej3",
				"data-testid": e.testid,
				children: [g.jsx("div", {
					className: "x16ovd2e x1nzty39 x12xbjc7 x12w63v0",
					children: g.jsx(r("WDSBaseRadio.react"), {
						checked: ye === e.value,
						id: "chat-" + e.value,
						name: "chat-response-settings",
						onChange: Fe,
						testid: "wds-radio-input-" + (ye === e.value ? "checked" : "unchecked"),
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
		}), y[51] = ye, y[52] = Fe, y[53] = et) : et = y[53];
		var tt;
		y[54] !== et ? (tt = g.jsxs(r("WAWebBizToolsDrawerBodySection.react"), {
			hideDivider: !0,
			theme: "biz-ai-home",
			headerText: Je,
			children: [Ze, g.jsx(o("WAWebFlex.react").FlexColumn, {
				role: "radiogroup",
				"aria-label": "Chat response settings",
				children: et
			})]
		}), y[54] = et, y[55] = tt) : tt = y[55];
		var nt;
		y[56] !== ye || y[57] !== ve || y[58] !== Ce || y[59] !== Ve || y[60] !== Be || y[61] !== qe || y[62] !== be ? (nt = ye !== k.PAUSED && g.jsxs(g.Fragment, { children: [g.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }), g.jsxs(r("WAWebBizToolsDrawerBodySection.react"), {
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
								checked: Ce === e.value,
								id: "schedule-" + e.value,
								name: "schedule-response-settings",
								onChange: Be,
								testid: "wds-radio-input-" + (Ce === e.value ? "checked" : "unchecked"),
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
			}), Ce === I.SELECTED_TIMES && g.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: V.timeRow,
				testid: "schedule-time-inputs",
				children: [g.jsx("div", {
					className: "x1r8uery x1iyjqo2 x5w4yej",
					children: g.jsx(r("WDSTextField.react"), {
						error: !o("WAWebBusinessHoursUtils").isValidTime(be),
						errorText: o("WAWebBusinessProfileLabels").getInvalidTimeErrorLabel(),
						label: s._(
							/*BTDS*/
							""
						),
						testid: "biz_profile_ai_response_start_time_textfield",
						value: be,
						onValueChange: qe
					})
				}), g.jsx("div", {
					className: "x1r8uery x1iyjqo2 x5w4yej",
					children: g.jsx(r("WDSTextField.react"), {
						error: !o("WAWebBusinessHoursUtils").isValidTime(ve) || o("WAWebBusinessHoursUtils").isValidTime(be) && o("WAWebBusinessHoursUtils").isValidTime(ve) && O(ve) <= O(be),
						errorText: o("WAWebBusinessHoursUtils").isValidTime(ve) ? s._(
							/*BTDS*/
							""
						) : o("WAWebBusinessProfileLabels").getInvalidTimeErrorLabel(),
						label: s._(
							/*BTDS*/
							""
						),
						testid: "biz_profile_ai_response_end_time_textfield",
						value: ve,
						onValueChange: Ve
					})
				})]
			})]
		})] }), y[56] = ye, y[57] = ve, y[58] = Ce, y[59] = Ve, y[60] = Be, y[61] = qe, y[62] = be, y[63] = nt) : nt = y[63];
		var rt;
		y[64] === Symbol.for("react.memo_cache_sentinel") ? (rt = g.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }), y[64] = rt) : rt = y[64];
		var ot;
		y[65] === Symbol.for("react.memo_cache_sentinel") ? (ot = s._(
			/*BTDS*/
			""
		), y[65] = ot) : ot = y[65];
		var at;
		y[66] === Symbol.for("react.memo_cache_sentinel") ? (at = g.jsx(r("WDSIconIcInfo.react"), { iconXstyle: V.icon }), y[66] = at) : at = y[66];
		var it;
		y[67] === Symbol.for("react.memo_cache_sentinel") ? (it = g.jsx(r("WAWebBizToolsDrawerBodySection.react"), {
			hideDivider: !0,
			theme: "biz-ai-home",
			headerText: ot,
			children: g.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
				testid: "response-settings-disconnect",
				useRoundedStyle: !0,
				divider: !1,
				icon: at,
				iconXstyle: V.iconContainer,
				xstyle: V.item,
				active: !1,
				onClick: P,
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), y[67] = it) : it = y[67];
		var lt;
		return y[68] !== Ye || y[69] !== tt || y[70] !== nt ? (lt = g.jsxs(g.Fragment, { children: [
			Ye,
			tt,
			nt,
			rt,
			it
		] }), y[68] = Ye, y[69] = tt, y[70] = nt, y[71] = lt) : lt = y[71], lt;
	}
	function X(e) {
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
	X.displayName = X.name + " [from " + i.id + "]";
	function Y() {
		var e, t = o("react-compiler-runtime").c(2), n = o("CometRelay").useLazyLoadQuery(z, {}, { fetchPolicy: "store-and-network" }), r = (e = n.xfb_meta_ai_biz_agent_wa_reply_chat_trigger) == null ? void 0 : e.trigger_chat_type, a = r != null ? r : null, i;
		return t[0] !== a ? (i = X(a), t[0] = a, t[1] = i) : i = t[1], i;
	}
	function J() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = g.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "biz-ai-response-settings-summary",
			fallback: o("WAWebNullFunc").returnNull,
			children: g.jsx(y, {
				fallback: null,
				children: g.jsx(Y, {})
			})
		}), e[0] = t) : t = e[0], t;
	}
	l.WAWebBizAIResponseSettingsDrawer = H, l.ResponseSettingsDrawerQuery = z, l.WAWebBizAIResponseSettingsSummary = J;
}), 226);

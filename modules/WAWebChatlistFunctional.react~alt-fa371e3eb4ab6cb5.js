__d("WAWebChatlistFunctional.react", [
	"fbt",
	"WAWebABProps",
	"WAWebBizAiAgentChatDisabledUtils",
	"WAWebBizAiAgentGating",
	"WAWebBizAiAgentStatusUtils",
	"WAWebBotFrontendUtils",
	"WAWebBotGating",
	"WAWebCallLogUtils",
	"WAWebChatCollection",
	"WAWebChatCommunityUtils",
	"WAWebChatGetters",
	"WAWebChatLisFunctionalPageNav.react",
	"WAWebChatLockUtils",
	"WAWebChatModel",
	"WAWebChatPreferenceCollection",
	"WAWebChatSearchFilters",
	"WAWebChatlistItem.react",
	"WAWebChatlistPanelMode",
	"WAWebChatlistTypes",
	"WAWebCmd",
	"WAWebCommunityGatingUtils",
	"WAWebContactModel",
	"WAWebContactUtils",
	"WAWebDisappearingMessageKeepInChatWamEvent",
	"WAWebEnvironment",
	"WAWebEventUtils",
	"WAWebFavoriteCollection",
	"WAWebFavoritesUtils",
	"WAWebFlatList.react",
	"WAWebFocusTracer",
	"WAWebFrontendMsgGetters",
	"WAWebInboxFiltersGatingUtils",
	"WAWebKeyboardHotKeys.react",
	"WAWebKeyboardTabUtils",
	"WAWebListUtils",
	"WAWebListsGatingUtils",
	"WAWebManageAiHandoffButton.react",
	"WAWebManageListButton.react",
	"WAWebMsgCollection",
	"WAWebMsgGetters",
	"WAWebMuteCollection",
	"WAWebMuteGetters",
	"WAWebNonContactPushNameSearchModel",
	"WAWebNoop",
	"WAWebOutContactModel",
	"WAWebSearchZeroStateGatingUtils",
	"WAWebTabOrder",
	"WAWebTextSizeUtils",
	"WAWebTimeSpentLoggingNavigation",
	"WAWebUim",
	"WAWebUimUie.react",
	"WAWebUseRecentlySearchedChats",
	"WAWebVoipCallsTabPanelManager",
	"WAWebVoipGatingUtils",
	"WAWebVoipOngoingCallCollection",
	"WAWebWamEnumKicActionNameType",
	"gkx",
	"nullthrows",
	"react",
	"useWAWebABPropConfigValue",
	"useWAWebForceUpdate",
	"useWAWebIncomingCall",
	"useWAWebIsKeyboardUser",
	"useWAWebListener",
	"useWAWebPrevious"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useDeferredValue, p = c.useEffect, _ = c.useImperativeHandle, f = c.useMemo, g = c.useRef, h = c.useState, y = r("gkx")("9220") ? 6 : 30, C = 44, b = 48, v = 56, S = 56, R = 61, L = { flatListViewport: {
		paddingTop: "x16ovd2e",
		$$css: !0
	} }, E = function() {
		var e = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().height;
		return e + 4;
	}, k = function() {
		return o("WAWebTextSizeUtils").getWAWebTextSizeStyles().detailImageSize;
	}, I = [], T = [], D = [], x = [];
	function $(e) {
		"use no forget";
		var t, n, a, i = e.actions, l = e.chats, c = l === void 0 ? I : l, $ = e.chatSearchMatches, P = e.commonGroups, N = P === void 0 ? T : P, M = e.communities, w = e.contacts, A = e.contactSearchMatches, F = e.debugCommands, O = e.filterPreset, B = e.flatListController, W = e.ftsResult, q = e.isSearching, U = e.isSearchInputFocused, V = e.messages, H = e.mode, G = e.multiSelection, z = e.nonContactPushnames, j = z === void 0 ? D : z, K = e.onFocusAfterLast, Q = e.onFocusSearch, X = e.onItemClick, Y = e.onStartMultiSelect, J = e.outContacts, Z = e.outContactSearchMatches, ee = e.ref, te = e.searchQuery, ne = e.selectableState, re = e.selection, oe = e.settings, ae = g(!0), ie = g(null), le = g(null), se = g(null), ue = g(null), ce = g(new Map()), de = g(!1), me = g(null), pe = h([]), _e = pe[0], fe = pe[1], ge = h([]), he = ge[0], ye = ge[1], Ce = h(!1), be = Ce[0], ve = Ce[1], Se = o("useWAWebABPropConfigValue").useABPropConfigValue("wa_web_chatlist_render_chat_open"), Re = h(o("WAWebChatCollection").ChatCollection.getActive()), Le = Re[0], Ee = Re[1], ke = g(null);
		ke.current == null && Se && (ke.current = o("WAWebChatCollection").ChatCollection.getActive());
		var Ie = h(re == null ? void 0 : re.getVal()), Te = Ie[0], De = Ie[1], xe = h(0), $e = xe[0], Pe = xe[1], Ne = m(W), Me = f(function() {
			var e = [], t = [], n = [];
			for (var r of Ne != null ? Ne : []) o("WAWebChatLockUtils").chatIsAccessible(o("WAWebFrontendMsgGetters").getChat(r)) && (r.star ? e.push(r) : o("WAWebMsgGetters").getIsKept(r) ? t.push(r) : o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId(r.id.id) == null && n.push(r));
			return {
				ftsStarred: e,
				ftsKept: t,
				ftsMessages: n
			};
		}, [Ne]), we = Me.ftsKept, Ae = Me.ftsMessages, Fe = Me.ftsStarred, Oe = f(function() {
			return r("gkx")("26258") ? x : (c != null ? c : []).filter(function(e) {
				var t = e.mute;
				return o("WAWebMuteGetters").getIsMuted(t);
			});
		}, [c, $e]), Be = h(r("gkx")("26258") ? !1 : o("WAWebMuteCollection").MuteCollection.getCollapseMuted()), We = Be[0], qe = Be[1], Ue = h(!0), Ve = Ue[0], He = Ue[1], Ge = g(0), ze = r("useWAWebIsKeyboardUser")(), je = ze.isKeyboardUser;
		p(function() {
			return Ge.current = o("WAWebTimeSpentLoggingNavigation").tsNavigationEnter({ surface: "chat-list" }), re == null || re.init(It()), function() {
				o("WAWebTimeSpentLoggingNavigation").tsNavigationExit(Ge.current);
			};
		}, []), o("useWAWebListener").useListener(r("WAWebChatPreferenceCollection"), "wallpaper_drawer_open", function(e) {
			o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") && e && (de.current = !0);
		}), o("useWAWebListener").useListener(r("WAWebChatPreferenceCollection"), "wallpaper_drawer_close", function(e) {
			o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") && e && (de.current = !1);
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "focus_next_chat", function(e) {
			(!o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") || !de.current) && rt(null, !0, e);
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "focus_prev_chat", function(e) {
			(!o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") || !de.current) && nt(null, !0, e);
		});
		var Ke = d(async function() {
			if (!o("WAWebABProps").getABPropConfigValue("enable_upcoming_schedule_call_events_in_calls_tab")) {
				fe([]), ye([]);
				return;
			}
			var e = await Promise.all([o("WAWebEventUtils").getUpcomingEvents(), o("WAWebEventUtils").getUpcomingEventsForCallsTab()]), t = e[0], n = e[1], r = n.slice(0, 1);
			fe(r), ye(t);
		}, []), Qe = d(function() {
			ue.current && le.current && r("WAWebFocusTracer").focus(le.current);
		}, []), Xe = d(function() {
			r("gkx")("26258") || He(function(e) {
				return !e;
			});
		}, []), Ye = d(function(e, t) {
			if (t.id.isAiHub() && o("WAWebBizAiAgentGating").isBizAiWebAgentChatDisabled()) {
				o("WAWebBizAiAgentChatDisabledUtils").openBizAiAgentChatDisabledAlert(t);
				return;
			}
			if (o("WAWebBotGating").isMetaAiChatInThreadsMode(t.id)) {
				q && o("WAWebSearchZeroStateGatingUtils").isSearchZeroStateEnabled() && o("WAWebUseRecentlySearchedChats").addChatToRecentSearches(t.id.toString()), o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(t, { type: "MetaAiChat" });
				return;
			}
			var n = e.nativeEvent;
			n instanceof MouseEvent && (De(null), re.unset()), X == null || X(e, t);
		}, [
			re,
			X,
			q
		]), Je = d(function(e) {
			var t = re == null ? void 0 : re.getVal();
			e === t && (re == null || re.unset()), Se ? ke.current = null : Ee(null), De(e);
		}, [re, Se]), Ze = d(function(e) {
			re == null || re.setVal(e, !1), ie.current = e;
		}, [re]), et = d(function(e) {
			e === void 0 && (e = 100), ue.current && re && re.index >= 0 && ue.current.scrollIntoViewIfNeeded(re.index, e);
		}, [re]), tt = d(function(e) {
			et(), De(re == null ? void 0 : re.getVal());
		}, [re, et]), nt = d(function(e, t, n) {
			e == null || e.preventDefault();
			var r = re == null ? void 0 : re.prev();
			r != null && r > -1 && (re == null || re.setPrev(!0), tt(n));
		}, [re, tt]), rt = d(function(e, t, n) {
			e == null || e.preventDefault();
			var r = re == null ? void 0 : re.next();
			(re == null ? void 0 : re.index) !== r ? (re == null || re.setNext(!0), tt(n)) : K != null && (re == null || re.unset(), K(e));
		}, [
			re,
			tt,
			K
		]), ot = d(function(e, t, n) {
			e == null || e.preventDefault(), (re == null ? void 0 : re.index) !== t && (re == null || re.set(t, !0), tt(n));
		}, [re, tt]), at = d(function() {
			var e = se.current;
			e && e.activate(), re == null || re.setFirst(), et(0), De(re == null ? void 0 : re.getVal()), H === r("WAWebChatlistPanelMode").CommandPalette && rt(void 0);
		}, [
			re,
			et,
			H,
			rt
		]), it = d(function() {
			var e = se.current;
			e && e.activate();
			var t = re ? re.list.length - 1 : -1;
			t < 0 || (re == null || re.setLast(), et(t), De(re == null ? void 0 : re.getVal()));
		}, [re, et]), lt = o("WAWebChatLisFunctionalPageNav.react").usePageNavigation({
			selection: re,
			setSelectedChat: De
		}), st = lt.handlePageDown, ut = lt.handlePageUp, ct = d(function() {
			var e = Se ? ke.current : Le;
			if (!e) {
				at();
				return;
			}
			var t = re == null ? void 0 : re.list.indexOf(e);
			if (t == null || t < 0) {
				at();
				return;
			}
			var n = se.current;
			n && n.activate(), re == null || re.set(t, !0), De(re == null ? void 0 : re.getVal()), et();
		}, [
			Se,
			Le,
			re,
			et,
			at
		]), dt = d(function(e) {
			e.target === le.current && ae.current && je && (re && re.index < 0 ? ct() : (se.current && se.current.activate(), re == null || re.reset(!0)), De(re == null ? void 0 : re.getVal()));
		}, [
			re,
			ct,
			je
		]), mt = d(function() {
			ae.current = !0;
		}, []), pt = d(function() {
			ae.current = !1;
		}, []), _t = d(function(e) {
			ve(e);
		}, []), ft = d(function(e) {
			var t = le.current, n = e.relatedTarget;
			!n || !t || !(n instanceof HTMLElement) || t.contains(n) || be || (re == null || re.set(-1, !1), De(null));
		}, [be, re]), gt = d(function(e) {
			var t = void 0, n = "DEFAULT", o = r("WAWebNoop");
			if (Se) {
				var a = e === Te;
				a && (n = "BORDER");
			} else {
				var i = e === Le, l = e === Te;
				i && l ? (t = !0, n = "BOTH") : i ? (t = !0, n = "DEFAULT") : l && (n = "BORDER");
			}
			return o = _t, {
				forceActive: t,
				activeStyleType: n,
				onContextMenuChange: o
			};
		}, [
			Le,
			Te,
			_t,
			Se
		]);
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "update_chatlist_selection", Ze), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_chat", function(e) {
			var t = e.chat, n = e.threadId;
			o("WAWebBotGating").isMetaAiChatInThreadsMode(t.id) && n != null || (Se ? ke.current = t : Ee(t));
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_chat", function(e) {
			Je(e), je && (re == null || re.setVal(e, !0), De(e), Se || Ee(null));
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "archive_chat", function(e) {
			var t = e.chat;
			Se ? t === ke.current && (ke.current = null) : t === Le && Ee(null);
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "scroll_to_active_chat", function() {
			et(0);
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "scroll_chat_list_to_top", function() {
			ue.current && ue.current.scrollIntoViewIfNeeded(0, 0);
		}), o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:muteExpiration", function() {
			r("gkx")("26258") || Pe(function(e) {
				return e + 1;
			});
		}), o("useWAWebListener").useListener(o("WAWebMuteCollection").MuteCollection, "change:collapseMuted", function(e) {
			r("gkx")("26258") || qe(e);
		}), o("useWAWebListener").useListener(r("WAWebVoipCallsTabPanelManager"), "closeCallLogInfoPanel", function() {
			H === r("WAWebChatlistPanelMode").CallsTab && (re == null || re.unset());
		}), o("useWAWebListener").useListener(o("WAWebMsgCollection").MsgCollection, "add remove reset", function() {
			H === r("WAWebChatlistPanelMode").CallsTab && Ke();
		}), o("useWAWebListener").useListener(o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection, "add remove reset", function() {
			H === r("WAWebChatlistPanelMode").CallsTab && Ke();
		}), p(function() {
			H === r("WAWebChatlistPanelMode").CallsTab && Ke();
		}, [H, Ke]);
		var ht = o("useWAWebABPropConfigValue").useABPropConfigValue("web_anr_group_metadata_yield"), yt = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:isParentGroup", function() {
			ht || yt();
		});
		var Ct = h(function() {
			return o("WAWebFavoritesUtils").getFavoriteItemsLimited(3);
		}), bt = Ct[0], vt = Ct[1];
		o("useWAWebListener").useListener(o("WAWebFavoriteCollection").FavoriteCollection, "add remove change", function() {
			vt(o("WAWebFavoritesUtils").getFavoriteItemsLimited(3));
		});
		var St = r("useWAWebPrevious")(q), Rt = f(function() {
			var e, t, n, r, o = re == null ? void 0 : re.list;
			if (!o || o.length === 0) return "";
			var a = (e = (t = o[0]) == null || (t = t.id) == null ? void 0 : t.toString()) != null ? e : "", i = (n = (r = o[o.length - 1]) == null || (r = r.id) == null ? void 0 : r.toString()) != null ? n : "";
			return o.length + "-" + a + "-" + i;
		}, [re == null ? void 0 : re.list]), Lt = r("useWAWebPrevious")(Rt), Et = r("useWAWebIncomingCall")(), kt = f(function() {
			if (H !== r("WAWebChatlistPanelMode").CallsTab || Ae.length === 0) return [];
			var e = Ae.slice(0, 200);
			return o("WAWebCallLogUtils").mergeCallRecords(e);
		}, [H, Ae]), It = d(function() {
			if (H === r("WAWebChatlistPanelMode").CallsTab) {
				var e = [];
				if (o("WAWebVoipGatingUtils").isWinHybridJoinableCallsEnabled() && o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.hasOngoingJoinableGroupCalls() && e.push.apply(e, o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getModelsArray()), o("WAWebABProps").getABPropConfigValue("enable_upcoming_schedule_call_events_in_calls_tab") && _e.length > 0 && e.push(_e[0]), !q) {
					var t = bt;
					if (t.length > 0) for (var n of t) n.chat != null ? e.push(n.chat) : n.contact != null && e.push(n.contact);
					else e.push(o("WAWebChatlistTypes").CALLS_ADD_FAVORITE_SELECTION_ITEM);
				}
				return kt.length > 0 && e.push.apply(e, kt.map(function(e) {
					var t = e.mergedMsgs;
					return t[t.length - 1];
				})), [].concat(e, F, i, oe, M, c, w, N.map(function(e) {
					return e[0];
				}), Fe, V);
			}
			return [].concat(F, i, oe, M, c, w, N.map(function(e) {
				return e[0];
			}), Fe, we, Ae, V);
		}, [
			F,
			i,
			oe,
			M,
			c,
			w,
			N,
			Fe,
			we,
			V,
			H,
			_e,
			q,
			Ae,
			kt,
			bt
		]), Tt = f(function() {
			return It();
		}, [It]);
		p(function() {
			var e;
			if (re) {
				var t = Se ? ke.current : Le, n = St !== !1 && !q && !U && !((e = te == null ? void 0 : te.hasFilter()) != null && e) && !(t != null && t.archive);
				if (re.init(Tt, n), t && re.list.includes(t) && re.getVal() !== t && !je && H === r("WAWebChatlistPanelMode").Chatlist && !q && !U && re.setVal(t, !1), H === r("WAWebChatlistPanelMode").CommandPalette && Lt !== void 0 && Rt !== Lt && re.setFirst(!1), St === !0 && !q && !U) {
					var o = re.getVal();
					!o && ie.current && re.setVal(ie.current);
				}
			}
		}, [
			re,
			Tt,
			q,
			U,
			te,
			St,
			Le,
			je,
			H,
			Rt,
			Lt,
			Se
		]);
		var Dt = d(function(e, t) {
			if (t != null) {
				ce.current.set(e, t);
				return;
			}
			ce.current.delete(e);
		}, []), xt = d(function(e) {
			var t;
			return (t = ce.current) == null ? void 0 : t.get(e);
		}, []), $t = d(function() {
			H !== r("WAWebChatlistPanelMode").CommandPalette && (re == null || re.reset(!1, !1), re && re.index > -1 && document.activeElement === document.body && Qe());
		}, [
			H,
			re,
			Qe
		]), Pt = d(function(e) {
			e.stopPropagation(), e.preventDefault(), Q == null || Q();
		}, [Q]), Nt = d(function(e, t) {
			var n = new (o("WAWebDisappearingMessageKeepInChatWamEvent")).DisappearingMessageKeepInChatWamEvent({
				kicActionName: o("WAWebWamEnumKicActionNameType").KIC_ACTION_NAME_TYPE.SEARCH_RESULTS_TAP,
				isAGroup: o("WAWebChatGetters").getIsGroup(t)
			});
			if (o("WAWebChatGetters").getIsGroup(t)) {
				var r;
				n.set({ isAdmin: (r = t.groupMetadata) == null ? void 0 : r.participants.iAmAdmin() });
			}
			n.commit(), X == null || X(e, t);
		}, [X]), Mt = d(function() {
			re == null || re.reset(!0);
		}, [re]), wt = d(function(e, t, n, r) {
			X == null || X(e, t);
		}, [X]), At = d(function(e, t, n) {
			G == null || G.setVal(e, t, n);
		}, [G]), Ft = d(function(e) {
			var t = xt(e);
			if (t) {
				var n = o("WAWebKeyboardTabUtils").getNextTabbableElement(t, o("WAWebKeyboardTabUtils").TabDirection.FORWARD, o("WAWebKeyboardTabUtils").FocusType.TABBABLE);
				r("WAWebFocusTracer").focus(n);
			}
		}, [xt]);
		me.current = {
			handleMultiSelect: At,
			handleArrowKeyInChatItem: Ft,
			setCheckboxWrapperRef: Dt,
			handleChatClick: Ye,
			onStartMultiSelect: Y,
			handleContactItemClick: wt,
			onItemClick: X,
			handleKeptMessageClick: Nt,
			handleMutedChatsBarClick: Xe,
			createPreventAutoReadProps: gt
		};
		var Ot = d(function(e) {
			var t = me.current;
			if (t == null) return null;
			var n;
			if (e.type === o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CONTACTS && e.data != null && A != null) {
				var a = e.data;
				a instanceof r("WAWebContactModel") && (n = A.get(a.id.toString()));
			} else if (e.type === o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS && e.data != null && $ != null) {
				var i = e.data;
				i instanceof o("WAWebChatModel").Chat && (n = $.get(i.id.toString()));
			}
			if (e.type === o("WAWebChatlistTypes").WAWebChatlistRow.ROW_OUT_CONTACTS && e.data != null && Z != null) {
				var l = e.data;
				l instanceof r("WAWebOutContactModel") && (n = Z.get(l.id.toString()));
			}
			return u.jsx(r("WAWebChatlistItem.react"), {
				data: e,
				mode: H,
				selectableState: ne,
				multiSelection: G,
				searchQuery: te,
				filterPreset: O,
				selection: re,
				mutedChats: Oe,
				mutedChatsCollapsed: Ve,
				getDetailImageSize: k,
				handlers: t,
				searchMatch: n
			});
		}, [
			A,
			Z,
			H,
			ne,
			G,
			te,
			O,
			re,
			Oe,
			Ve,
			$
		]), Bt = f(function() {
			if (H !== r("WAWebChatlistPanelMode").CallsTab) return [];
			var e = [];
			if (!q) {
				Et != null && !Et.isGroup && (e.push({
					itemKey: "section-incoming-call",
					type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_INCOMING,
					height: b
				}), e.push({
					itemKey: "incoming-call-" + Et.id,
					data: Et,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_INCOMING,
					height: 80
				}));
				var t = o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getVisibleOngoingJoinableGroupCalls();
				if (o("WAWebVoipGatingUtils").isWinHybridJoinableCallsEnabled() && t.length > 0 && (e.push({
					itemKey: "section-ongoing-calls",
					type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_ONGOING,
					height: b
				}), e.push.apply(e, t.map(function(e) {
					return {
						itemKey: "ongoing-call-" + e.id.toString(),
						data: e,
						type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_ONGOING,
						height: 96
					};
				}))), o("WAWebABProps").getABPropConfigValue("enable_upcoming_schedule_call_events_in_calls_tab") && _e.length > 0) {
					var n = _e[0], a = he.length > 1;
					e.push({
						itemKey: "section-upcoming-events",
						type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_UPCOMING_EVENTS,
						height: v,
						showViewAllUpcomingEvents: a
					}), e.push({
						itemKey: "upcoming-event-" + n.id.toString(),
						data: n,
						type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_UPCOMING_EVENT,
						height: 88
					});
				}
				var i = bt, l = i.length > 0;
				e.push({
					itemKey: "section-calls-favorites",
					type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_FAVORITES,
					height: S,
					showViewAllFavorites: l
				}), i.length > 0 ? e.push.apply(e, i.map(function(e) {
					return {
						itemKey: "favorite-chat-" + e.wid.toString(),
						data: e,
						type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALLS_FAVORITE
					};
				})) : e.push({
					itemKey: "add-favorite-button",
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALLS_ADD_FAVORITE
				});
			}
			return q && w && w.length > 0 && (e.push({
				itemKey: "section-contacts",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CONTACTS,
				height: C
			}), e.push.apply(e, w.map(function(e) {
				return {
					itemKey: "contact-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CONTACTS
				};
			}))), kt.length > 0 && (q ? e.push({
				itemKey: "section-calls-search-results",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_SEARCH_RESULTS,
				height: C
			}) : e.push({
				itemKey: "section-calls-recent",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_RECENT,
				height: R
			}), e.push.apply(e, kt.map(function(e) {
				var t = e.mergedMsgs, n = t[t.length - 1];
				return {
					itemKey: "msg-" + n.id.toString(),
					data: t,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_LOG
				};
			}))), e;
		}, [
			H,
			q,
			w,
			kt,
			_e,
			he,
			bt,
			Et
		]), Wt = f(function() {
			return q ? o("WAWebNonContactPushNameSearchModel").dedupeNonContactPushnames(j, c != null ? c : [], w != null ? w : []) : o("WAWebNonContactPushNameSearchModel").EMPTY_NON_CONTACT_PUSHNAMES;
		}, [
			q,
			j,
			c,
			w
		]), qt = f(function() {
			if (H === r("WAWebChatlistPanelMode").CallsTab) return [];
			var e = [], t = 0;
			q && F && F.length > 0 && e.push({
				itemKey: "section-debug-commands",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_DEBUG_COMMANDS,
				height: C
			}), e.push.apply(e, (F != null ? F : []).map(function(e) {
				return {
					itemKey: "debug-command-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_DEBUG_COMMANDS,
					height: 60
				};
			})), q && i && i.length > 0 && e.push({
				itemKey: "section-actions",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_ACTIONS,
				height: C
			}), e.push.apply(e, (i != null ? i : []).map(function(e) {
				return {
					itemKey: "action-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_ACTIONS,
					height: 60
				};
			})), q && oe && oe.length > 0 && e.push({
				itemKey: "section-settings",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_SETTINGS,
				height: C
			}), e.push.apply(e, (oe != null ? oe : []).map(function(e) {
				return {
					itemKey: "setting-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_SETTINGS,
					height: 60
				};
			})), q && M && M.length > 0 && e.push({
				itemKey: "section-communities",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_COMMUNITIES,
				height: C
			}), e.push.apply(e, (M != null ? M : []).map(function(e) {
				return {
					itemKey: "community-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_COMMUNITIES,
					height: 72
				};
			})), te && te.filter.kind === o("WAWebChatSearchFilters").SearchFilters.LABELS && o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() || (q && c && c.length > 0 ? e.push({
				itemKey: "section-chats",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CHATS,
				height: C
			}) : !q && te && te.filter.kind === o("WAWebChatSearchFilters").SearchFilters.UNREAD && !o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() ? e.push({
				itemKey: "section-chats",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_UNREAD_CHATS,
				height: C
			}) : !q && te && te.filter.kind === o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU && e.push({
				itemKey: "section-chats",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_ASSIGNED_TO_YOU,
				height: C
			}));
			var n = function(t) {
				if (o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(t.groupMetadata) || o("WAWebBizAiAgentStatusUtils").shouldShowTertiaryRowForChat(t)) return o("WAWebChatCommunityUtils").SUBGROUP_V2_CHAT_CELL_HEIGHT + 4;
			};
			if (!q && We) Oe.length > 0 && e.push({
				itemKey: "section-collapse-muted",
				contentKey: String(Ve) + "-" + Oe.length,
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MUTED_CHATS,
				height: 30
			}), Ve || e.push.apply(e, Oe.map(function(e) {
				return {
					itemKey: "chat-" + e.id.toString(),
					data: e,
					expanded: !Ve,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS,
					height: n(e)
				};
			})), e.push.apply(e, (c != null ? c : []).filter(function(e) {
				return !o("WAWebMuteGetters").getIsMuted(e.mute);
			}).map(function(e) {
				return {
					itemKey: "chat-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS,
					index: t++,
					height: n(e)
				};
			}));
			else {
				var a = [].concat(c != null ? c : []);
				e.push.apply(e, a.map(function(e) {
					return {
						itemKey: "chat-" + e.id.toString(),
						data: e,
						type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS,
						index: t++,
						height: n(e)
					};
				}));
			}
			var l = (J != null ? J : []).map(function(e) {
				return e.outContact;
			}), s = o("WAWebContactUtils").mergeSortedContacts(w != null ? w : [], l);
			return q && s.length > 0 && e.push({
				itemKey: "section-contacts",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CONTACTS,
				height: C
			}), e.push.apply(e, s.map(function(e) {
				return e instanceof r("WAWebOutContactModel") ? {
					itemKey: "out-contact-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_OUT_CONTACTS
				} : {
					itemKey: "contact-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CONTACTS
				};
			})), q && N && N.length > 0 && e.push({
				itemKey: "section-common-groups",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_COMMON_GROUPS,
				height: C
			}), e.push.apply(e, (N != null ? N : []).map(function(e) {
				return {
					itemKey: "common-group-" + e[0].id.toString() + "-" + e[1].map(function(e) {
						return e.id.toString();
					}).join("-"),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_COMMON_GROUPS
				};
			})), q && Wt.length > 0 && (e.push({
				itemKey: "section-non-contact-pushname",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_NON_CONTACT_PUSHNAME,
				height: C
			}), e.push.apply(e, Wt.map(function(e) {
				return {
					itemKey: "non-contact-pushname-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_NON_CONTACT_PUSHNAME
				};
			}))), q && Fe.length > 0 && e.push({
				itemKey: "section-starred",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_STARRED,
				height: C
			}), e.push.apply(e, Fe.map(function(e) {
				return {
					itemKey: "starred-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_STARRED
				};
			})), q && we.length > 0 && e.push({
				itemKey: "section-kept",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_KEPT,
				height: C
			}), e.push.apply(e, we.map(function(e) {
				return {
					itemKey: "kept-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_KEPT
				};
			})), q && Ae.length > 0 && e.push({
				itemKey: "section-msg",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MSG,
				height: C
			}), e.push.apply(e, Ae.map(function(e) {
				return {
					itemKey: "msg-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_MSG
				};
			})), q && V && V.length > 0 && e.push({
				itemKey: "section-msg",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MSG,
				height: C
			}), e.push.apply(e, (V != null ? V : []).map(function(e) {
				return {
					itemKey: "msg-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_MSG
				};
			})), e;
		}, [
			H,
			q,
			F,
			i,
			oe,
			M,
			Wt,
			te,
			c,
			We,
			J,
			w,
			N,
			Fe,
			we,
			Ae,
			V,
			Oe,
			Ve
		]), Ut = f(function() {
			return H === r("WAWebChatlistPanelMode").CallsTab ? Bt : qt;
		}, [
			H,
			Bt,
			qt
		]), Vt = f(function() {
			return { extraItems: y };
		}, []);
		o("useWAWebListener").useListener(document, "keydown", function(e) {
			var t = r("WAWebEnvironment").isWindows;
			if (t && e && e.ctrlKey) {
				var n = parseInt(e.key, 10);
				if (!isNaN(n) && n >= 1 && n <= 9) {
					var o = n - 1;
					e.preventDefault(), ot(e, o);
				}
			}
		}), p(function() {
			return function() {
				if (!(re && re.list.length > 0)) {
					var e = re == null ? void 0 : re.getVal();
					e instanceof o("WAWebChatModel").Chat && e.isState && !q && o("WAWebCmd").Cmd.closeChat(e);
				}
			};
		}, [re, q]), _(ee, function() {
			return {
				focusFirst: at,
				focusLast: it,
				requestFocus: $t,
				restoreFocus: Mt
			};
		}, [
			at,
			it,
			$t,
			Mt
		]);
		var Ht = f(function() {
			return {
				down: function(t) {
					return rt(t, !1);
				},
				j: function(t) {
					return rt(t, !1);
				},
				up: function(t) {
					return nt(t, !1);
				},
				k: function(t) {
					return nt(t, !1);
				},
				"/": function(t) {
					return Pt(t);
				},
				home: function(t) {
					return ot(t, 0);
				},
				end: function(t) {
					return ot(t, re ? re.list.length - 1 : 0);
				},
				pagedown: function(t) {
					return st(t);
				},
				pageup: function(t) {
					return ut(t);
				}
			};
		}, [
			rt,
			nt,
			Pt,
			ot,
			re,
			st,
			ut
		]), Gt = f(function() {
			return q ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}, [q]), zt = null;
		if (!q && (te == null ? void 0 : te.filter.kind) === o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF && ((t = c == null ? void 0 : c.length) != null ? t : 0) > 0 && o("WAWebBizAiAgentGating").isHandoffRemovalTimingSettingEnabled()) zt = u.jsx(r("WAWebManageAiHandoffButton.react"), {});
		else if (!q && (te == null ? void 0 : te.filter.kind) != null && ((n = c == null ? void 0 : c.length) != null ? n : 0) > 0 && o("WAWebListsGatingUtils").isListsM2Enabled()) {
			var jt = o("WAWebListUtils").getManageListInfo(te.filter);
			jt != null && (zt = u.jsx(r("WAWebManageListButton.react"), {
				listId: jt.listId,
				listName: jt.listName
			}));
		}
		return u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "Chatlist",
			ref: se,
			uimState: o("WAWebUim").UIMState.PASSIVE,
			requestFocus: $t,
			children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				tabIndex: 0,
				handlers: Ht,
				onFocus: dt,
				onBlur: ft,
				ref: le,
				"data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
				children: u.jsx(o("WAWebFlatList.react").FlatList, babelHelpers.extends({
					"aria-label": Gt,
					testid: "chat-list",
					data: Ut,
					renderItem: Ot,
					flatListController: B,
					direction: "vertical",
					defaultItemHeight: E(),
					onPointerEventsOff: pt,
					onPointerEventsOn: mt,
					ref: ue
				}, Vt, {
					role: "grid",
					itemRole: "row",
					"aria-rowcount": (a = c == null ? void 0 : c.length) != null ? a : 0,
					viewportXstyles: L.flatListViewport
				}))
			})
		}), zt] });
	}
	$.displayName = $.name + " [from " + i.id + "]", l.default = $;
}), 226);

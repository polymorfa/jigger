__d("WAWebChatlistFunctional.react", [
	"fbt",
	"Promise",
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
	"asyncToGeneratorRuntime",
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
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useDeferredValue, _ = d.useEffect, f = d.useImperativeHandle, g = d.useMemo, h = d.useRef, y = d.useState, C = r("gkx")("9220") ? 6 : 30, b = 44, v = 48, S = 56, R = 56, L = 61, E = { flatListViewport: {
		paddingTop: "x16ovd2e",
		$$css: !0
	} }, k = function() {
		var e = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().height;
		return e + 4;
	}, I = function() {
		return o("WAWebTextSizeUtils").getWAWebTextSizeStyles().detailImageSize;
	}, T = [], D = [], x = [], $ = [];
	function P(t) {
		"use no forget";
		var a, i, l, u = t.actions, d = t.chats, P = d === void 0 ? T : d, N = t.chatSearchMatches, M = t.commonGroups, w = M === void 0 ? D : M, A = t.communities, F = t.contacts, O = t.contactSearchMatches, B = t.debugCommands, W = t.filterPreset, q = t.flatListController, U = t.ftsResult, V = t.isSearching, H = t.isSearchInputFocused, G = t.messages, z = t.mode, j = t.multiSelection, K = t.nonContactPushnames, Q = K === void 0 ? x : K, X = t.onFocusAfterLast, Y = t.onFocusSearch, J = t.onItemClick, Z = t.onStartMultiSelect, ee = t.outContacts, te = t.outContactSearchMatches, ne = t.ref, re = t.searchQuery, oe = t.selectableState, ae = t.selection, ie = t.settings, le = h(!0), se = h(null), ue = h(null), ce = h(null), de = h(null), me = h(new Map()), pe = h(!1), _e = h(null), fe = y([]), ge = fe[0], he = fe[1], ye = y([]), Ce = ye[0], be = ye[1], ve = y(!1), Se = ve[0], Re = ve[1], Le = o("useWAWebABPropConfigValue").useABPropConfigValue("wa_web_chatlist_render_chat_open"), Ee = y(o("WAWebChatCollection").ChatCollection.getActive()), ke = Ee[0], Ie = Ee[1], Te = h(null);
		Te.current == null && Le && (Te.current = o("WAWebChatCollection").ChatCollection.getActive());
		var De = y(ae == null ? void 0 : ae.getVal()), xe = De[0], $e = De[1], Pe = y(0), Ne = Pe[0], Me = Pe[1], we = p(U), Ae = g(function() {
			var e = [], t = [], n = [];
			for (var r of we != null ? we : []) o("WAWebChatLockUtils").chatIsAccessible(o("WAWebFrontendMsgGetters").getChat(r)) && (r.star ? e.push(r) : o("WAWebMsgGetters").getIsKept(r) ? t.push(r) : o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId(r.id.id) == null && n.push(r));
			return {
				ftsStarred: e,
				ftsKept: t,
				ftsMessages: n
			};
		}, [we]), Fe = Ae.ftsKept, Oe = Ae.ftsMessages, Be = Ae.ftsStarred, We = g(function() {
			return r("gkx")("26258") ? $ : (P != null ? P : []).filter(function(e) {
				var t = e.mute;
				return o("WAWebMuteGetters").getIsMuted(t);
			});
		}, [P, Ne]), qe = y(r("gkx")("26258") ? !1 : o("WAWebMuteCollection").MuteCollection.getCollapseMuted()), Ue = qe[0], Ve = qe[1], He = y(!0), Ge = He[0], ze = He[1], je = h(0), Ke = r("useWAWebIsKeyboardUser")(), Qe = Ke.isKeyboardUser;
		_(function() {
			return je.current = o("WAWebTimeSpentLoggingNavigation").tsNavigationEnter({ surface: "chat-list" }), ae == null || ae.init(Dt()), function() {
				o("WAWebTimeSpentLoggingNavigation").tsNavigationExit(je.current);
			};
		}, []), o("useWAWebListener").useListener(r("WAWebChatPreferenceCollection"), "wallpaper_drawer_open", function(e) {
			o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") && e && (pe.current = !0);
		}), o("useWAWebListener").useListener(r("WAWebChatPreferenceCollection"), "wallpaper_drawer_close", function(e) {
			o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") && e && (pe.current = !1);
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "focus_next_chat", function(e) {
			(!o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") || !pe.current) && at(null, !0, e);
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "focus_prev_chat", function(e) {
			(!o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") || !pe.current) && ot(null, !0, e);
		});
		var Xe = m(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (!o("WAWebABProps").getABPropConfigValue("enable_upcoming_schedule_call_events_in_calls_tab")) {
				he([]), be([]);
				return;
			}
			var t = yield (e || (e = n("Promise"))).all([o("WAWebEventUtils").getUpcomingEvents(), o("WAWebEventUtils").getUpcomingEventsForCallsTab()]), r = t[0], a = t[1], i = a.slice(0, 1);
			he(i), be(r);
		}), []), Ye = m(function() {
			de.current && ue.current && r("WAWebFocusTracer").focus(ue.current);
		}, []), Je = m(function() {
			r("gkx")("26258") || ze(function(e) {
				return !e;
			});
		}, []), Ze = m(function(e, t) {
			if (t.id.isAiHub() && o("WAWebBizAiAgentGating").isBizAiWebAgentChatDisabled()) {
				o("WAWebBizAiAgentChatDisabledUtils").openBizAiAgentChatDisabledAlert(t);
				return;
			}
			if (o("WAWebBotGating").isMetaAiChatInThreadsMode(t.id)) {
				V && o("WAWebSearchZeroStateGatingUtils").isSearchZeroStateEnabled() && o("WAWebUseRecentlySearchedChats").addChatToRecentSearches(t.id.toString()), o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(t, { type: "MetaAiChat" });
				return;
			}
			var n = e.nativeEvent;
			n instanceof MouseEvent && ($e(null), ae.unset()), J == null || J(e, t);
		}, [
			ae,
			J,
			V
		]), et = m(function(e) {
			var t = ae == null ? void 0 : ae.getVal();
			e === t && (ae == null || ae.unset()), Le ? Te.current = null : Ie(null), $e(e);
		}, [ae, Le]), tt = m(function(e) {
			ae == null || ae.setVal(e, !1), se.current = e;
		}, [ae]), nt = m(function(e) {
			e === void 0 && (e = 100), de.current && ae && ae.index >= 0 && de.current.scrollIntoViewIfNeeded(ae.index, e);
		}, [ae]), rt = m(function(e) {
			nt(), $e(ae == null ? void 0 : ae.getVal());
		}, [ae, nt]), ot = m(function(e, t, n) {
			e == null || e.preventDefault();
			var r = ae == null ? void 0 : ae.prev();
			r != null && r > -1 && (ae == null || ae.setPrev(!0), rt(n));
		}, [ae, rt]), at = m(function(e, t, n) {
			e == null || e.preventDefault();
			var r = ae == null ? void 0 : ae.next();
			(ae == null ? void 0 : ae.index) !== r ? (ae == null || ae.setNext(!0), rt(n)) : X != null && (ae == null || ae.unset(), X(e));
		}, [
			ae,
			rt,
			X
		]), it = m(function(e, t, n) {
			e == null || e.preventDefault(), (ae == null ? void 0 : ae.index) !== t && (ae == null || ae.set(t, !0), rt(n));
		}, [ae, rt]), lt = m(function() {
			var e = ce.current;
			e && e.activate(), ae == null || ae.setFirst(), nt(0), $e(ae == null ? void 0 : ae.getVal()), z === r("WAWebChatlistPanelMode").CommandPalette && at(void 0);
		}, [
			ae,
			nt,
			z,
			at
		]), st = m(function() {
			var e = ce.current;
			e && e.activate();
			var t = ae ? ae.list.length - 1 : -1;
			t < 0 || (ae == null || ae.setLast(), nt(t), $e(ae == null ? void 0 : ae.getVal()));
		}, [ae, nt]), ut = o("WAWebChatLisFunctionalPageNav.react").usePageNavigation({
			selection: ae,
			setSelectedChat: $e
		}), ct = ut.handlePageDown, dt = ut.handlePageUp, mt = m(function() {
			var e = Le ? Te.current : ke;
			if (!e) {
				lt();
				return;
			}
			var t = ae == null ? void 0 : ae.list.indexOf(e);
			if (t == null || t < 0) {
				lt();
				return;
			}
			var n = ce.current;
			n && n.activate(), ae == null || ae.set(t, !0), $e(ae == null ? void 0 : ae.getVal()), nt();
		}, [
			Le,
			ke,
			ae,
			nt,
			lt
		]), pt = m(function(e) {
			e.target === ue.current && le.current && Qe && (ae && ae.index < 0 ? mt() : (ce.current && ce.current.activate(), ae == null || ae.reset(!0)), $e(ae == null ? void 0 : ae.getVal()));
		}, [
			ae,
			mt,
			Qe
		]), _t = m(function() {
			le.current = !0;
		}, []), ft = m(function() {
			le.current = !1;
		}, []), gt = m(function(e) {
			Re(e);
		}, []), ht = m(function(e) {
			var t = ue.current, n = e.relatedTarget;
			!n || !t || !(n instanceof HTMLElement) || t.contains(n) || Se || (ae == null || ae.set(-1, !1), $e(null));
		}, [Se, ae]), yt = m(function(e) {
			var t = void 0, n = "DEFAULT", o = r("WAWebNoop");
			if (Le) {
				var a = e === xe;
				a && (n = "BORDER");
			} else {
				var i = e === ke, l = e === xe;
				i && l ? (t = !0, n = "BOTH") : i ? (t = !0, n = "DEFAULT") : l && (n = "BORDER");
			}
			return o = gt, {
				forceActive: t,
				activeStyleType: n,
				onContextMenuChange: o
			};
		}, [
			ke,
			xe,
			gt,
			Le
		]);
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "update_chatlist_selection", tt), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_chat", function(e) {
			var t = e.chat, n = e.threadId;
			o("WAWebBotGating").isMetaAiChatInThreadsMode(t.id) && n != null || (Le ? Te.current = t : Ie(t));
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_chat", function(e) {
			et(e), Qe && (ae == null || ae.setVal(e, !0), $e(e), Le || Ie(null));
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "archive_chat", function(e) {
			var t = e.chat;
			Le ? t === Te.current && (Te.current = null) : t === ke && Ie(null);
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "scroll_to_active_chat", function() {
			nt(0);
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "scroll_chat_list_to_top", function() {
			de.current && de.current.scrollIntoViewIfNeeded(0, 0);
		}), o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:muteExpiration", function() {
			r("gkx")("26258") || Me(function(e) {
				return e + 1;
			});
		}), o("useWAWebListener").useListener(o("WAWebMuteCollection").MuteCollection, "change:collapseMuted", function(e) {
			r("gkx")("26258") || Ve(e);
		}), o("useWAWebListener").useListener(r("WAWebVoipCallsTabPanelManager"), "closeCallLogInfoPanel", function() {
			z === r("WAWebChatlistPanelMode").CallsTab && (ae == null || ae.unset());
		}), o("useWAWebListener").useListener(o("WAWebMsgCollection").MsgCollection, "add remove reset", function() {
			z === r("WAWebChatlistPanelMode").CallsTab && Xe();
		}), o("useWAWebListener").useListener(o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection, "add remove reset", function() {
			z === r("WAWebChatlistPanelMode").CallsTab && Xe();
		}), _(function() {
			z === r("WAWebChatlistPanelMode").CallsTab && Xe();
		}, [z, Xe]);
		var Ct = o("useWAWebABPropConfigValue").useABPropConfigValue("web_anr_group_metadata_yield"), bt = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change:isParentGroup", function() {
			Ct || bt();
		});
		var vt = y(function() {
			return o("WAWebFavoritesUtils").getFavoriteItemsLimited(3);
		}), St = vt[0], Rt = vt[1];
		o("useWAWebListener").useListener(o("WAWebFavoriteCollection").FavoriteCollection, "add remove change", function() {
			Rt(o("WAWebFavoritesUtils").getFavoriteItemsLimited(3));
		});
		var Lt = r("useWAWebPrevious")(V), Et = g(function() {
			var e, t, n, r, o = ae == null ? void 0 : ae.list;
			if (!o || o.length === 0) return "";
			var a = (e = (t = o[0]) == null || (t = t.id) == null ? void 0 : t.toString()) != null ? e : "", i = (n = (r = o[o.length - 1]) == null || (r = r.id) == null ? void 0 : r.toString()) != null ? n : "";
			return o.length + "-" + a + "-" + i;
		}, [ae == null ? void 0 : ae.list]), kt = r("useWAWebPrevious")(Et), It = r("useWAWebIncomingCall")(), Tt = g(function() {
			if (z !== r("WAWebChatlistPanelMode").CallsTab || Oe.length === 0) return [];
			var e = Oe.slice(0, 200);
			return o("WAWebCallLogUtils").mergeCallRecords(e);
		}, [z, Oe]), Dt = m(function() {
			if (z === r("WAWebChatlistPanelMode").CallsTab) {
				var e = [];
				if (o("WAWebVoipGatingUtils").isWinHybridJoinableCallsEnabled() && o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.hasOngoingJoinableGroupCalls() && e.push.apply(e, o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getModelsArray()), o("WAWebABProps").getABPropConfigValue("enable_upcoming_schedule_call_events_in_calls_tab") && ge.length > 0 && e.push(ge[0]), !V) {
					var t = St;
					if (t.length > 0) for (var n of t) n.chat != null ? e.push(n.chat) : n.contact != null && e.push(n.contact);
					else e.push(o("WAWebChatlistTypes").CALLS_ADD_FAVORITE_SELECTION_ITEM);
				}
				return Tt.length > 0 && e.push.apply(e, Tt.map(function(e) {
					var t = e.mergedMsgs;
					return t[t.length - 1];
				})), [].concat(e, B, u, ie, A, P, F, w.map(function(e) {
					return e[0];
				}), Be, G);
			}
			return [].concat(B, u, ie, A, P, F, w.map(function(e) {
				return e[0];
			}), Be, Fe, Oe, G);
		}, [
			B,
			u,
			ie,
			A,
			P,
			F,
			w,
			Be,
			Fe,
			G,
			z,
			ge,
			V,
			Oe,
			Tt,
			St
		]), xt = g(function() {
			return Dt();
		}, [Dt]);
		_(function() {
			var e;
			if (ae) {
				var t = Le ? Te.current : ke, n = Lt !== !1 && !V && !H && !((e = re == null ? void 0 : re.hasFilter()) != null && e) && !(t != null && t.archive);
				if (ae.init(xt, n), t && ae.list.includes(t) && ae.getVal() !== t && !Qe && z === r("WAWebChatlistPanelMode").Chatlist && !V && !H && ae.setVal(t, !1), z === r("WAWebChatlistPanelMode").CommandPalette && kt !== void 0 && Et !== kt && ae.setFirst(!1), Lt === !0 && !V && !H) {
					var o = ae.getVal();
					!o && se.current && ae.setVal(se.current);
				}
			}
		}, [
			ae,
			xt,
			V,
			H,
			re,
			Lt,
			ke,
			Qe,
			z,
			Et,
			kt,
			Le
		]);
		var $t = m(function(e, t) {
			if (t != null) {
				me.current.set(e, t);
				return;
			}
			me.current.delete(e);
		}, []), Pt = m(function(e) {
			var t;
			return (t = me.current) == null ? void 0 : t.get(e);
		}, []), Nt = m(function() {
			z !== r("WAWebChatlistPanelMode").CommandPalette && (ae == null || ae.reset(!1, !1), ae && ae.index > -1 && document.activeElement === document.body && Ye());
		}, [
			z,
			ae,
			Ye
		]), Mt = m(function(e) {
			e.stopPropagation(), e.preventDefault(), Y == null || Y();
		}, [Y]), wt = m(function(e, t) {
			var n = new (o("WAWebDisappearingMessageKeepInChatWamEvent")).DisappearingMessageKeepInChatWamEvent({
				kicActionName: o("WAWebWamEnumKicActionNameType").KIC_ACTION_NAME_TYPE.SEARCH_RESULTS_TAP,
				isAGroup: o("WAWebChatGetters").getIsGroup(t)
			});
			if (o("WAWebChatGetters").getIsGroup(t)) {
				var r;
				n.set({ isAdmin: (r = t.groupMetadata) == null ? void 0 : r.participants.iAmAdmin() });
			}
			n.commit(), J == null || J(e, t);
		}, [J]), At = m(function() {
			ae == null || ae.reset(!0);
		}, [ae]), Ft = m(function(e, t, n, r) {
			J == null || J(e, t);
		}, [J]), Ot = m(function(e, t, n) {
			j == null || j.setVal(e, t, n);
		}, [j]), Bt = m(function(e) {
			var t = Pt(e);
			if (t) {
				var n = o("WAWebKeyboardTabUtils").getNextTabbableElement(t, o("WAWebKeyboardTabUtils").TabDirection.FORWARD, o("WAWebKeyboardTabUtils").FocusType.TABBABLE);
				r("WAWebFocusTracer").focus(n);
			}
		}, [Pt]);
		_e.current = {
			handleMultiSelect: Ot,
			handleArrowKeyInChatItem: Bt,
			setCheckboxWrapperRef: $t,
			handleChatClick: Ze,
			onStartMultiSelect: Z,
			handleContactItemClick: Ft,
			onItemClick: J,
			handleKeptMessageClick: wt,
			handleMutedChatsBarClick: Je,
			createPreventAutoReadProps: yt
		};
		var Wt = m(function(e) {
			var t = _e.current;
			if (t == null) return null;
			var n;
			if (e.type === o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CONTACTS && e.data != null && O != null) {
				var a = e.data;
				a instanceof r("WAWebContactModel") && (n = O.get(a.id.toString()));
			} else if (e.type === o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS && e.data != null && N != null) {
				var i = e.data;
				i instanceof o("WAWebChatModel").Chat && (n = N.get(i.id.toString()));
			}
			if (e.type === o("WAWebChatlistTypes").WAWebChatlistRow.ROW_OUT_CONTACTS && e.data != null && te != null) {
				var l = e.data;
				l instanceof r("WAWebOutContactModel") && (n = te.get(l.id.toString()));
			}
			return c.jsx(r("WAWebChatlistItem.react"), {
				data: e,
				mode: z,
				selectableState: oe,
				multiSelection: j,
				searchQuery: re,
				filterPreset: W,
				selection: ae,
				mutedChats: We,
				mutedChatsCollapsed: Ge,
				getDetailImageSize: I,
				handlers: t,
				searchMatch: n
			});
		}, [
			O,
			te,
			z,
			oe,
			j,
			re,
			W,
			ae,
			We,
			Ge,
			N
		]), qt = g(function() {
			if (z !== r("WAWebChatlistPanelMode").CallsTab) return [];
			var e = [];
			if (!V) {
				It != null && !It.isGroup && (e.push({
					itemKey: "section-incoming-call",
					type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_INCOMING,
					height: v
				}), e.push({
					itemKey: "incoming-call-" + It.id,
					data: It,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_INCOMING,
					height: 80
				}));
				var t = o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getVisibleOngoingJoinableGroupCalls();
				if (o("WAWebVoipGatingUtils").isWinHybridJoinableCallsEnabled() && t.length > 0 && (e.push({
					itemKey: "section-ongoing-calls",
					type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_ONGOING,
					height: v
				}), e.push.apply(e, t.map(function(e) {
					return {
						itemKey: "ongoing-call-" + e.id.toString(),
						data: e,
						type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_ONGOING,
						height: 96
					};
				}))), o("WAWebABProps").getABPropConfigValue("enable_upcoming_schedule_call_events_in_calls_tab") && ge.length > 0) {
					var n = ge[0], a = Ce.length > 1;
					e.push({
						itemKey: "section-upcoming-events",
						type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_UPCOMING_EVENTS,
						height: S,
						showViewAllUpcomingEvents: a
					}), e.push({
						itemKey: "upcoming-event-" + n.id.toString(),
						data: n,
						type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_UPCOMING_EVENT,
						height: 88
					});
				}
				var i = St, l = i.length > 0;
				e.push({
					itemKey: "section-calls-favorites",
					type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_FAVORITES,
					height: R,
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
			return V && F && F.length > 0 && (e.push({
				itemKey: "section-contacts",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CONTACTS,
				height: b
			}), e.push.apply(e, F.map(function(e) {
				return {
					itemKey: "contact-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CONTACTS
				};
			}))), Tt.length > 0 && (V ? e.push({
				itemKey: "section-calls-search-results",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_SEARCH_RESULTS,
				height: b
			}) : e.push({
				itemKey: "section-calls-recent",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_RECENT,
				height: L
			}), e.push.apply(e, Tt.map(function(e) {
				var t = e.mergedMsgs, n = t[t.length - 1];
				return {
					itemKey: "msg-" + n.id.toString(),
					data: t,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_LOG
				};
			}))), e;
		}, [
			z,
			V,
			F,
			Tt,
			ge,
			Ce,
			St,
			It
		]), Ut = g(function() {
			return V ? o("WAWebNonContactPushNameSearchModel").dedupeNonContactPushnames(Q, P != null ? P : [], F != null ? F : []) : o("WAWebNonContactPushNameSearchModel").EMPTY_NON_CONTACT_PUSHNAMES;
		}, [
			V,
			Q,
			P,
			F
		]), Vt = g(function() {
			if (z === r("WAWebChatlistPanelMode").CallsTab) return [];
			var e = [], t = 0;
			V && B && B.length > 0 && e.push({
				itemKey: "section-debug-commands",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_DEBUG_COMMANDS,
				height: b
			}), e.push.apply(e, (B != null ? B : []).map(function(e) {
				return {
					itemKey: "debug-command-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_DEBUG_COMMANDS,
					height: 60
				};
			})), V && u && u.length > 0 && e.push({
				itemKey: "section-actions",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_ACTIONS,
				height: b
			}), e.push.apply(e, (u != null ? u : []).map(function(e) {
				return {
					itemKey: "action-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_ACTIONS,
					height: 60
				};
			})), V && ie && ie.length > 0 && e.push({
				itemKey: "section-settings",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_SETTINGS,
				height: b
			}), e.push.apply(e, (ie != null ? ie : []).map(function(e) {
				return {
					itemKey: "setting-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_SETTINGS,
					height: 60
				};
			})), V && A && A.length > 0 && e.push({
				itemKey: "section-communities",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_COMMUNITIES,
				height: b
			}), e.push.apply(e, (A != null ? A : []).map(function(e) {
				return {
					itemKey: "community-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_COMMUNITIES,
					height: 72
				};
			})), re && re.filter.kind === o("WAWebChatSearchFilters").SearchFilters.LABELS && o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() || (V && P && P.length > 0 ? e.push({
				itemKey: "section-chats",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CHATS,
				height: b
			}) : !V && re && re.filter.kind === o("WAWebChatSearchFilters").SearchFilters.UNREAD && !o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() ? e.push({
				itemKey: "section-chats",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_UNREAD_CHATS,
				height: b
			}) : !V && re && re.filter.kind === o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU && e.push({
				itemKey: "section-chats",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_ASSIGNED_TO_YOU,
				height: b
			}));
			var n = function(t) {
				if (o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(t.groupMetadata) || o("WAWebBizAiAgentStatusUtils").shouldShowTertiaryRowForChat(t)) return o("WAWebChatCommunityUtils").SUBGROUP_V2_CHAT_CELL_HEIGHT + 4;
			};
			if (!V && Ue) We.length > 0 && e.push({
				itemKey: "section-collapse-muted",
				contentKey: String(Ge) + "-" + We.length,
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MUTED_CHATS,
				height: 30
			}), Ge || e.push.apply(e, We.map(function(e) {
				return {
					itemKey: "chat-" + e.id.toString(),
					data: e,
					expanded: !Ge,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS,
					height: n(e)
				};
			})), e.push.apply(e, (P != null ? P : []).filter(function(e) {
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
				var a = [].concat(P != null ? P : []);
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
			var i = (ee != null ? ee : []).map(function(e) {
				return e.outContact;
			}), l = o("WAWebContactUtils").mergeSortedContacts(F != null ? F : [], i);
			return V && l.length > 0 && e.push({
				itemKey: "section-contacts",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CONTACTS,
				height: b
			}), e.push.apply(e, l.map(function(e) {
				return e instanceof r("WAWebOutContactModel") ? {
					itemKey: "out-contact-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_OUT_CONTACTS
				} : {
					itemKey: "contact-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CONTACTS
				};
			})), V && w && w.length > 0 && e.push({
				itemKey: "section-common-groups",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_COMMON_GROUPS,
				height: b
			}), e.push.apply(e, (w != null ? w : []).map(function(e) {
				return {
					itemKey: "common-group-" + e[0].id.toString() + "-" + e[1].map(function(e) {
						return e.id.toString();
					}).join("-"),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_COMMON_GROUPS
				};
			})), V && Ut.length > 0 && (e.push({
				itemKey: "section-non-contact-pushname",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_NON_CONTACT_PUSHNAME,
				height: b
			}), e.push.apply(e, Ut.map(function(e) {
				return {
					itemKey: "non-contact-pushname-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_NON_CONTACT_PUSHNAME
				};
			}))), V && Be.length > 0 && e.push({
				itemKey: "section-starred",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_STARRED,
				height: b
			}), e.push.apply(e, Be.map(function(e) {
				return {
					itemKey: "starred-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_STARRED
				};
			})), V && Fe.length > 0 && e.push({
				itemKey: "section-kept",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_KEPT,
				height: b
			}), e.push.apply(e, Fe.map(function(e) {
				return {
					itemKey: "kept-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_KEPT
				};
			})), V && Oe.length > 0 && e.push({
				itemKey: "section-msg",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MSG,
				height: b
			}), e.push.apply(e, Oe.map(function(e) {
				return {
					itemKey: "msg-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_MSG
				};
			})), V && G && G.length > 0 && e.push({
				itemKey: "section-msg",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MSG,
				height: b
			}), e.push.apply(e, (G != null ? G : []).map(function(e) {
				return {
					itemKey: "msg-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_MSG
				};
			})), e;
		}, [
			z,
			V,
			B,
			u,
			ie,
			A,
			Ut,
			re,
			P,
			Ue,
			ee,
			F,
			w,
			Be,
			Fe,
			Oe,
			G,
			We,
			Ge
		]), Ht = g(function() {
			return z === r("WAWebChatlistPanelMode").CallsTab ? qt : Vt;
		}, [
			z,
			qt,
			Vt
		]), Gt = g(function() {
			return { extraItems: C };
		}, []);
		o("useWAWebListener").useListener(document, "keydown", function(e) {
			var t = r("WAWebEnvironment").isWindows;
			if (t && e && e.ctrlKey) {
				var n = parseInt(e.key, 10);
				if (!isNaN(n) && n >= 1 && n <= 9) {
					var o = n - 1;
					e.preventDefault(), it(e, o);
				}
			}
		}), _(function() {
			return function() {
				if (!(ae && ae.list.length > 0)) {
					var e = ae == null ? void 0 : ae.getVal();
					e instanceof o("WAWebChatModel").Chat && e.isState && !V && o("WAWebCmd").Cmd.closeChat(e);
				}
			};
		}, [ae, V]), f(ne, function() {
			return {
				focusFirst: lt,
				focusLast: st,
				requestFocus: Nt,
				restoreFocus: At
			};
		}, [
			lt,
			st,
			Nt,
			At
		]);
		var zt = g(function() {
			return {
				down: function(t) {
					return at(t, !1);
				},
				j: function(t) {
					return at(t, !1);
				},
				up: function(t) {
					return ot(t, !1);
				},
				k: function(t) {
					return ot(t, !1);
				},
				"/": function(t) {
					return Mt(t);
				},
				home: function(t) {
					return it(t, 0);
				},
				end: function(t) {
					return it(t, ae ? ae.list.length - 1 : 0);
				},
				pagedown: function(t) {
					return ct(t);
				},
				pageup: function(t) {
					return dt(t);
				}
			};
		}, [
			at,
			ot,
			Mt,
			it,
			ae,
			ct,
			dt
		]), jt = g(function() {
			return V ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}, [V]), Kt = null;
		if (!V && (re == null ? void 0 : re.filter.kind) === o("WAWebChatSearchFilters").SearchFilters.AI_HANDOFF && ((a = P == null ? void 0 : P.length) != null ? a : 0) > 0 && o("WAWebBizAiAgentGating").isHandoffRemovalTimingSettingEnabled()) Kt = c.jsx(r("WAWebManageAiHandoffButton.react"), {});
		else if (!V && (re == null ? void 0 : re.filter.kind) != null && ((i = P == null ? void 0 : P.length) != null ? i : 0) > 0 && o("WAWebListsGatingUtils").isListsM2Enabled()) {
			var Qt = o("WAWebListUtils").getManageListInfo(re.filter);
			Qt != null && (Kt = c.jsx(r("WAWebManageListButton.react"), {
				listId: Qt.listId,
				listName: Qt.listName
			}));
		}
		return c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "Chatlist",
			ref: ce,
			uimState: o("WAWebUim").UIMState.PASSIVE,
			requestFocus: Nt,
			children: c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				tabIndex: 0,
				handlers: zt,
				onFocus: pt,
				onBlur: ht,
				ref: ue,
				"data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
				children: c.jsx(o("WAWebFlatList.react").FlatList, babelHelpers.extends({
					"aria-label": jt,
					testid: "chat-list",
					data: Ht,
					renderItem: Wt,
					flatListController: q,
					direction: "vertical",
					defaultItemHeight: k(),
					onPointerEventsOff: ft,
					onPointerEventsOn: _t,
					ref: de
				}, Gt, {
					role: "grid",
					itemRole: "row",
					"aria-rowcount": (l = P == null ? void 0 : P.length) != null ? l : 0,
					viewportXstyles: E.flatListViewport
				}))
			})
		}), Kt] });
	}
	P.displayName = P.name + " [from " + i.id + "]", l.default = P;
}), 226);

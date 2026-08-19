__d("WAWebChatlist_DEPRECATED.react", [
	"fbt",
	"WALogger",
	"WAMemoizeOne",
	"WAWebABProps",
	"WAWebAddFavoriteButton.react",
	"WAWebBizAiAgentChatDisabledUtils",
	"WAWebBizAiAgentGating",
	"WAWebBizAiAgentStatusUtils",
	"WAWebBotFrontendUtils",
	"WAWebBotGating",
	"WAWebCallLogEntryCell.react",
	"WAWebCallLogJoinOngoingCell.react",
	"WAWebCallLogUtils",
	"WAWebChat.react",
	"WAWebChatAction.react",
	"WAWebChatCheckboxWrapper.react",
	"WAWebChatCollection",
	"WAWebChatCommunityUtils",
	"WAWebChatContact.react",
	"WAWebChatContactUtils",
	"WAWebChatGetters",
	"WAWebChatLockUtils",
	"WAWebChatMessage.react",
	"WAWebChatModel",
	"WAWebChatPreferenceCollection",
	"WAWebChatSearchFilters",
	"WAWebChatSetting.react",
	"WAWebChatlistPageNavigation.react",
	"WAWebChatlistPanelMode",
	"WAWebChatlistTypes",
	"WAWebCmd",
	"WAWebCommunityCells.react",
	"WAWebCommunityGatingUtils",
	"WAWebContactGetters",
	"WAWebDisappearingMessageKeepInChatWamEvent",
	"WAWebElevatedPushNamesFlag",
	"WAWebEmojiText.react",
	"WAWebEnvironment",
	"WAWebErrorBoundary.react",
	"WAWebEventUtils",
	"WAWebFavoriteCell.react",
	"WAWebFavoriteCollection",
	"WAWebFavoritesUtils",
	"WAWebFbtIntlList",
	"WAWebFlatList.react",
	"WAWebFocusTracer",
	"WAWebFormatConfiguration",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebGroupInfoSeparator.react",
	"WAWebInboxFiltersGatingUtils",
	"WAWebKeyboardContext",
	"WAWebKeyboardHotKeys.react",
	"WAWebKeyboardTabUtils",
	"WAWebListenerHoc_DEPRECATED",
	"WAWebMsgCollection",
	"WAWebMsgGetters",
	"WAWebMuteCollection",
	"WAWebMuteGetters",
	"WAWebNonContactPushNameSearchModel",
	"WAWebNoop",
	"WAWebPreCallUserJourneyLogger",
	"WAWebTabOrder",
	"WAWebTextSizeUtils",
	"WAWebTimeSpentLoggingNavigation",
	"WAWebTimerHoc_DEPRECATED.react",
	"WAWebUim",
	"WAWebUimUie.react",
	"WAWebUpcomingEventCell.react",
	"WAWebViewAllButton.react",
	"WAWebVoipCallsTabPanelManager",
	"WAWebVoipGatingUtils",
	"WAWebVoipOngoingCallCollection",
	"WAWebWamEnumKicActionNameType",
	"WAWebWamEnumSubSurface",
	"WDSText.react",
	"cr:104",
	"cr:5736",
	"gkx",
	"nullthrows",
	"react",
	"stylex",
	"useWAWebActiveChatStyle"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = ["chat", "createPreventAutoReadProps"], d, m, p = m || (m = o("react")), _ = m.Component, f = 30, g = {
		unreadChatsHeader: {
			paddingInlineStart: "xbmws1g",
			$$css: !0
		},
		flatListViewport: {
			paddingTop: "x1tiyuxx",
			$$css: !0
		}
	}, h = o("WAWebChat.react").ChatFactory(), y = o("WAWebChatContact.react").ContactFactory();
	function C(e) {
		var t = e.chat, n = e.createPreventAutoReadProps, a = babelHelpers.objectWithoutPropertiesLoose(e, c), i = o("WAWebABProps").getABPropConfigValue("wa_web_chatlist_render_chat_open"), l = r("useWAWebActiveChatStyle")(t, i), s = n(t), u = s.forceActive, d = s.activeStyleType;
		if (i) {
			var m = l.forceActive === !0, _ = s.activeStyleType === "BORDER";
			m && _ ? (u = !0, d = "BOTH") : m ? (u = !0, d = "DEFAULT") : _ && (d = "BORDER");
		}
		return p.jsx(h, babelHelpers.extends({ chat: t }, a, {
			forceActive: u,
			activeStyleType: d,
			onContextMenuChange: s.onContextMenuChange
		}));
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e, t) {
		t === void 0 && (t = {});
		var n = t, a = n.formatString, i = a === void 0 ? "" : a, l = r("WAWebFbtIntlList")(e.map(function(e) {
			var t = o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(e), n = t ? o("WAWebChatContactUtils").getFormattedNotifyName(o("WAWebContactGetters").getNotifyName(e)).toString() : o("WAWebFrontendContactGetters").getFormattedName(e);
			return "" + i + n + i;
		}), r("WAWebFbtIntlList").CONJUNCTIONS.AND, r("WAWebFbtIntlList").DELIMITERS.COMMA);
		return s._(
			/*BTDS*/
			"",
			[s._plural(e.length), s._param("contacts-list", l)]
		);
	}
	b.displayName = b.name + " [from " + i.id + "]";
	var v = (function(t) {
		function a(a) {
			var i;
			return i = t.call(this, a) || this, i.$2 = new Map(), i.$5 = 0, i.disableChatSwitching = !1, i.$6 = o("WAWebABProps").getABPropConfigValue("wa_web_chatlist_render_chat_open"), i.$7 = null, i.$8 = r("WAMemoizeOne")(function(e) {
				var t = e.chats, n = e.contacts, r = e.nonContactPushnames;
				return o("WAWebNonContactPushNameSearchModel").dedupeNonContactPushnames(r, t, n);
			}), i.$9 = async function() {
				if (!o("WAWebABProps").getABPropConfigValue("enable_upcoming_schedule_call_events_in_calls_tab")) {
					i.setState({
						upcomingEvents: [],
						allUpcomingEvents: []
					});
					return;
				}
				var e = await o("WAWebEventUtils").getUpcomingEvents(), t = await o("WAWebEventUtils").getUpcomingEventsForCallsTab(), n = t.slice(0, 1);
				i.setState({
					upcomingEvents: n,
					allUpcomingEvents: e
				});
			}, i.$11 = function(e) {
				i.$4 = e;
			}, i.setRefUIE = function(e) {
				i.uie = e;
			}, i.setRefList = function(e) {
				i.refList = e;
			}, i.$12 = function() {
				i.refList && i.$4 && r("WAWebFocusTracer").focus(i.$4);
			}, i.$13 = function() {
				r("gkx")("26258") || i.setState(function(e) {
					return { mutedChatsCollapsed: !e.mutedChatsCollapsed };
				});
			}, i.$14 = function(e, t) {
				if (t.id.isAiHub() && o("WAWebBizAiAgentGating").isBizAiWebAgentChatDisabled()) {
					o("WAWebBizAiAgentChatDisabledUtils").openBizAiAgentChatDisabledAlert(t);
					return;
				}
				if (o("WAWebBotGating").isMetaAiChatInThreadsMode(t.id)) {
					o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(t, { type: "MetaAiChat" });
					return;
				}
				var n = e.nativeEvent;
				n instanceof MouseEvent && (i.setState({ selectedChat: null }), i.props.selection.unset()), i.props.onItemClick(e, t);
			}, i.$15 = function(e, t) {
				if (t != null) {
					i.$2.set(e, t);
					return;
				}
				i.$2.delete(e);
			}, i.$16 = function(e) {
				var t;
				return (t = i.$2) == null ? void 0 : t.get(e);
			}, i.requestFocus = function() {
				i.props.mode !== r("WAWebChatlistPanelMode").CommandPalette && (i.props.selection.reset(!1, !1), i.props.selection.index > -1 && document.activeElement === document.body && i.$12());
			}, i.$17 = function(e) {
				e.stopPropagation(), e.preventDefault(), i.props.onFocusSearch();
			}, i.$18 = function(e) {
				var t = i.props.selection.getVal();
				e === t && i.props.selection.unset(), i.$6 ? i.$7 = null : i.setState({ activeChat: null }), i.setState({ selectedChat: e }), i.$10() && (i.props.selection.setVal(e, !0), i.setState({ selectedChat: e }), i.$6 || i.setState({ activeChat: null }));
			}, i.restoreFocus = function() {
				i.props.selection.reset(!0);
			}, i.$19 = function(e, t) {
				var n = new (o("WAWebDisappearingMessageKeepInChatWamEvent")).DisappearingMessageKeepInChatWamEvent({
					kicActionName: o("WAWebWamEnumKicActionNameType").KIC_ACTION_NAME_TYPE.SEARCH_RESULTS_TAP,
					isAGroup: o("WAWebChatGetters").getIsGroup(t)
				});
				if (o("WAWebChatGetters").getIsGroup(t)) {
					var r;
					n.set({ isAdmin: (r = t.groupMetadata) == null ? void 0 : r.participants.iAmAdmin() });
				}
				n.commit(), i.props.onItemClick(e, t);
			}, i.$20 = function(e) {
				i.setState({ contextMenuOpened: e });
			}, i.$21 = function(e, t, n, r) {
				i.props.onItemClick(e, t);
			}, i.$25 = function(e, t, n) {
				var r = i.props.multiSelection;
				r.setVal(e, t, n);
			}, i.$26 = function(e) {
				var t = i.$16(e);
				if (t) {
					var n = o("WAWebKeyboardTabUtils").getNextTabbableElement(t, o("WAWebKeyboardTabUtils").TabDirection.FORWARD, o("WAWebKeyboardTabUtils").FocusType.TABBABLE);
					r("WAWebFocusTracer").focus(n);
				}
			}, i.$27 = function(e, t) {
				var n = i.props, a = n.multiSelection, l = n.selectableState;
				if (!l) return p.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
					name: "chat-list-item",
					children: e
				});
				var u = "selectable-chat-list-item-" + i.props.mode, c = t instanceof o("WAWebChatModel").Chat ? t.formattedTitle : null;
				return p.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
					name: u,
					children: p.jsx(r("WAWebChatCheckboxWrapper.react"), {
						ref: function(n) {
							return void i.$15(t.id.toString(), n);
						},
						model: t,
						theme: "chat-checkbox",
						selectableState: l,
						multiSelection: a,
						onSelect: i.$25,
						onArrowKeyLeftRight: function() {
							return i.$26(t.id.toString());
						},
						checkboxAriaLabel: s._(
							/*BTDS*/
							"",
							[s._param("chat-name", c)]
						),
						role: "gridcell",
						children: e
					})
				});
			}, i.$22 = function(e) {
				if (e && e.ctrlKey) {
					var t = parseInt(e.key, 10);
					if (!isNaN(t) && t >= 1 && t <= 9) {
						var n = t - 1;
						e.preventDefault(), i.$30(null, n);
					}
				}
			}, i.$34 = function(e) {
				var t = void 0, n = "DEFAULT", o = r("WAWebNoop");
				if (i.$6) {
					var a = e === i.state.selectedChat;
					a && (n = "BORDER");
				} else {
					var l = e === i.state.activeChat, s = e === i.state.selectedChat;
					l && s ? (t = !0, n = "BOTH") : l ? (t = !0, n = "DEFAULT") : s && (n = "BORDER");
				}
				return o = i.$20, {
					forceActive: t,
					activeStyleType: n,
					onContextMenuChange: o
				};
			}, i.renderItem = function(t) {
				var a = i.props, l = a.filterPreset, c = a.searchQuery;
				switch (t.type) {
					case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CHATS: return p.jsx(R, { header: s._(
						/*BTDS*/
						""
					) });
					case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_UNREAD_CHATS: return p.jsx(R, {
						xstyle: g.unreadChatsHeader,
						header: s._(
							/*BTDS*/
							""
						)
					});
					case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CONTACTS: return p.jsx(R, { header: s._(
						/*BTDS*/
						""
					) });
					case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_ACTIONS: return p.jsx(R, { header: s._(
						/*BTDS*/
						""
					) });
					case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_DEBUG_COMMANDS: return p.jsx(R, { header: "Debug Commands" });
					case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_COMMUNITIES: return p.jsx(R, { header: s._(
						/*BTDS*/
						""
					) });
					case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_SETTINGS: return p.jsx(R, { header: s._(
						/*BTDS*/
						""
					) });
					case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_COMMON_GROUPS: return p.jsx(R, { header: s._(
						/*BTDS*/
						""
					) });
					case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_NON_CONTACT_PUSHNAME: return p.jsx(R, { header: o("WAWebNonContactPushNameSearchModel").getNonContactPushNameHeader() });
					case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_STARRED: return p.jsx(R, {
						testid: "starred-messages-header",
						header: s._(
							/*BTDS*/
							""
						)
					});
					case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_KEPT: return p.jsx(R, {
						testid: "kept-messages-header",
						header: s._(
							/*BTDS*/
							""
						)
					});
					case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MSG: return p.jsx(R, { header: s._(
						/*BTDS*/
						""
					) });
					case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_FAVORITES: return p.jsxs(p.Fragment, { children: [(i.state.upcomingEvents.length > 0 || o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.hasOngoingJoinableGroupCalls() && o("WAWebVoipGatingUtils").isWinHybridJoinableCallsEnabled()) && p.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }), p.jsx(R, {
						emphasized: !0,
						header: s._(
							/*BTDS*/
							""
						)
					})] });
					case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_UPCOMING_EVENTS: return p.jsxs(p.Fragment, { children: [o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.hasOngoingJoinableGroupCalls() && o("WAWebVoipGatingUtils").isWinHybridJoinableCallsEnabled() && p.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }), p.jsx(R, {
						emphasized: !0,
						header: s._(
							/*BTDS*/
							""
						)
					})] });
					case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_ONGOING: return p.jsx(R, {
						emphasized: !0,
						header: s._(
							/*BTDS*/
							""
						)
					});
					case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_RECENT: return p.jsxs(p.Fragment, { children: [p.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }), p.jsx(R, {
						emphasized: !0,
						header: s._(
							/*BTDS*/
							""
						)
					})] });
					case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_SEARCH_GROUPS: return p.jsx(R, {
						emphasized: !0,
						header: s._(
							/*BTDS*/
							""
						)
					});
					case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_SEARCH_RESULTS: return p.jsx(R, {
						emphasized: !0,
						header: s._(
							/*BTDS*/
							""
						)
					});
					case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MUTED_CHATS: return n("cr:5736") != null ? p.jsx(n("cr:5736"), {
						mutedChats: i.state.mutedChats,
						mutedChatsCollapsed: i.state.mutedChatsCollapsed,
						onClick: i.$13
					}) : null;
					case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_ASSIGNED_TO_YOU: return p.jsx(R, { header: s._(
						/*BTDS*/
						""
					) });
					case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS: {
						var d, m = t.data, _ = t.index, f = (d = i.props.chatSearchMatches) == null ? void 0 : d.get(m.id.toString());
						return i.$27(p.jsx(C, {
							chat: m,
							createPreventAutoReadProps: i.$34,
							mode: o("WAWebChat.react").Mode.LAST,
							searchQuery: c,
							searchMatch: f,
							filterPreset: l,
							onClick: i.$14,
							mouseDownAsClick: !0,
							selectableState: i.props.selectableState,
							multiSelection: i.props.multiSelection,
							onStartMultiSelect: i.props.onStartMultiSelect,
							active: i.props.selection,
							ephemeralIcon: "chat-list",
							showStatusRingAroundProfilePhoto: !0,
							index: _,
							photoSize: i.$24(),
							showCommunityInfo: !0,
							skipCheckMark: !0,
							handleArrowKeyInChatItem: i.$26
						}), m);
					}
					case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CONTACTS: {
						var b, v = t.data, S = (b = i.props.contactSearchMatches) == null ? void 0 : b.get(v.id.toString());
						return i.$27(p.jsx(y, {
							contact: v,
							active: i.props.selection,
							searchQuery: c,
							searchMatch: S,
							onClick: i.$21,
							mouseDownAsClick: !0,
							waitIdle: !0,
							showStatusRingAroundProfilePhoto: !0,
							photoSize: i.$24(),
							hideStatus: o("WAWebContactGetters").getIsMe(v),
							showMessageYourselfName: o("WAWebContactGetters").getIsMe(v)
						}), v);
					}
					case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_ACTIONS: {
						var L = t.data;
						return i.$27(p.jsx(r("WAWebChatAction.react"), {
							action: L,
							active: i.props.selection,
							onClick: i.props.onItemClick,
							searchQuery: c
						}), L);
					}
					case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_DEBUG_COMMANDS: {
						var E = t.data;
						if (!r("gkx")("26258") && n("cr:104") != null) return i.$27(p.jsx(n("cr:104"), {
							active: i.props.selection,
							debugCommand: E,
							onClick: i.props.onItemClick,
							searchQuery: c
						}), E);
						throw o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[Chatlist_DEPRECATED] UnknownDataError ROW_DEBUG_COMMANDS"]))), new (o("WAWebFlatList.react")).UnknownDataError(t);
					}
					case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_COMMUNITIES: {
						var k = t.data;
						return i.$27(p.jsx(o("WAWebCommunityCells.react").CommunityCell, {
							active: i.props.selection,
							parentGroupMetadata: r("nullthrows")(k.groupMetadata),
							parentGroupChat: k,
							onClick: function(t) {
								return i.props.onItemClick(t, k);
							},
							inCommandPalette: !0
						}), k);
					}
					case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_SETTINGS: {
						var I = t.data;
						return i.$27(p.jsx(r("WAWebChatSetting.react"), {
							active: i.props.selection,
							onClick: i.props.onItemClick,
							searchQuery: c,
							setting: I
						}), I);
					}
					case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_COMMON_GROUPS: {
						var T = t.data, D = T[0], x = i.$28(T);
						return i.$27(p.jsx(h, babelHelpers.extends({
							chat: D,
							secondary: x,
							mode: o("WAWebChat.react").Mode.LAST,
							searchQuery: c,
							filterPreset: l,
							onClick: i.props.onItemClick,
							mouseDownAsClick: !0,
							selectableState: i.props.selectableState,
							multiSelection: i.props.multiSelection,
							onStartMultiSelect: i.props.onStartMultiSelect,
							active: i.props.selection
						}, i.$34(D))), D);
					}
					case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_NON_CONTACT_PUSHNAME: {
						var $ = t.data;
						return i.$27(p.jsx(y, {
							contact: $,
							active: i.props.selection,
							searchQuery: c,
							onClick: i.$21,
							mouseDownAsClick: !0,
							waitIdle: !0,
							showStatusRingAroundProfilePhoto: !0,
							photoSize: i.$24()
						}), $);
					}
					case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_STARRED: {
						var P = t.data;
						return i.$27(p.jsx(r("WAWebChatMessage.react"), {
							msg: P,
							chat: o("WAWebFrontendMsgGetters").getChat(P),
							searchQuery: c,
							filterPreset: l,
							onClick: i.props.onItemClick,
							active: i.props.selection,
							testid: "chatlist-starred-message-" + P.id.id
						}), P);
					}
					case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_KEPT: {
						var N = t.data;
						return i.$27(p.jsx(r("WAWebChatMessage.react"), {
							msg: N,
							chat: o("WAWebFrontendMsgGetters").getChat(N),
							searchQuery: c,
							filterPreset: l,
							onClick: i.$19,
							active: i.props.selection,
							testid: "chatlist-kept-message-" + N.id.id
						}), N);
					}
					case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_MSG: {
						var M = t.data;
						return i.$27(p.jsx(r("WAWebChatMessage.react"), {
							msg: M,
							chat: o("WAWebFrontendMsgGetters").getChat(M),
							searchQuery: c,
							filterPreset: l,
							onClick: i.props.onItemClick,
							active: i.props.selection,
							testid: "chatlist-message-" + M.id.id
						}), M);
					}
					case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_ONGOING: {
						var w = t.data;
						return i.$27(p.jsx(r("WAWebCallLogJoinOngoingCell.react"), {
							callLogMsg: w,
							active: i.props.selection,
							onClick: function() {
								return i.props.selection.setVal(w);
							}
						}), w);
					}
					case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_LOG: {
						var A = t.data, F = A[A.length - 1];
						return i.$27(p.jsx(o("WAWebCallLogEntryCell.react").CallLogEntryCell, {
							mergedMsgs: A,
							searchQuery: c,
							filterPreset: l,
							onClick: function() {
								return i.props.selection.setVal(F);
							},
							active: i.props.selection,
							testidPrefix: "chatlist-message"
						}), F);
					}
					case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALLS_FAVORITE: {
						var O, B = t.data, W = (O = B.chat) != null ? O : B.contact;
						return W == null ? null : i.$27(p.jsx(r("WAWebFavoriteCell.react"), {
							active: i.props.selection,
							favoriteItem: B,
							onClick: r("WAWebNoop"),
							photoSize: i.$24(),
							testid: "chatlist-favorite"
						}), W);
					}
					case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALLS_ADD_FAVORITE: return p.jsx(r("WAWebAddFavoriteButton.react"), {});
					case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALLS_VIEW_ALL_FAVORITES: return p.jsx(o("WAWebViewAllButton.react").ViewAllFavoritesButton, {});
					case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_UPCOMING_EVENT: {
						var q = t.data, U = function() {
							var e = new (o("WAWebPreCallUserJourneyLogger")).PreCallUserJourneyLogger();
							e.clickEventDetail(o("WAWebWamEnumSubSurface").SUB_SURFACE.NONE);
							var t = o("WAWebFrontendMsgGetters").getChat(q), n = o("WAWebFrontendMsgGetters").getAsEventCreation(q);
							n != null && o("WAWebCmd").Cmd.openEventInfoDrawer(t, n);
						};
						return i.$27(p.jsx(r("WAWebUpcomingEventCell.react"), {
							eventMessage: q,
							active: i.props.selection,
							onClick: U
						}), q);
					}
					case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_UPCOMING_EVENTS_VIEW_ALL: return p.jsx(o("WAWebViewAllButton.react").ViewAllUpcomingEventsButton, {});
					default: throw o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[Chatlist_DEPRECATED] UnknownDataError default"]))), new (o("WAWebFlatList.react")).UnknownDataError(t);
				}
			}, i.$33 = function(e) {
				i.props.selection.setVal(e, !1), i.$3 = e;
			}, i.$35 = function(e) {
				if (e.target === i.$4 && i.$1 && i.context.isKeyboardUser) {
					if (i.props.selection.index < 0) i.focusActiveChat();
					else {
						var t = i, n = t.uie;
						n && n.activate(), i.props.selection.reset(!0);
					}
					i.setState({ selectedChat: i.props.selection.getVal() });
				}
			}, i.$36 = function(e) {
				var t = i.$4, n = e.relatedTarget;
				!n || !t || !(n instanceof HTMLElement) || t.contains(n) || i.state.contextMenuOpened || (i.props.selection.set(-1, !1), i.setState({ selectedChat: null }));
			}, i.$37 = function() {
				i.$1 = !0;
			}, i.$38 = function() {
				i.$1 = !1;
			}, i.$39 = function(e) {
				var t = typeof e == "function" ? e(i.props.selection.getVal()) : e;
				i.setState({ selectedChat: t });
			}, i.$1 = !0, i.$3 = null, i.state = {
				ftsStarred: [],
				ftsKept: [],
				ftsMessages: [],
				mutedChats: [],
				collapseMutedChatsEnabled: !1,
				mutedChatsCollapsed: !0,
				upcomingEvents: [],
				allUpcomingEvents: [],
				contextMenuOpened: !1,
				activeChat: o("WAWebChatCollection").ChatCollection.getActive(),
				selectedChat: i.props.selection.getVal()
			}, i.$6 && (i.$7 = o("WAWebChatCollection").ChatCollection.getActive()), r("gkx")("26258") || (i.state.collapseMutedChatsEnabled = o("WAWebMuteCollection").MuteCollection.getCollapseMuted()), i;
		}
		babelHelpers.inheritsLoose(a, t), a.getDerivedStateFromProps = function(t) {
			var e = t.ftsResult.filter(function(e) {
				return o("WAWebChatLockUtils").chatIsAccessible(o("WAWebFrontendMsgGetters").getChat(e));
			}), n = e.filter(function(e) {
				return o("WAWebMsgGetters").getIsKept(e);
			}), a = e.filter(function(e) {
				return !e.star && !o("WAWebMsgGetters").getIsKept(e);
			});
			return babelHelpers.extends({
				ftsStarred: e.filter(function(e) {
					var t = e.star;
					return t;
				}),
				ftsKept: n,
				ftsMessages: a
			}, r("gkx")("26258") ? null : { mutedChats: t.chats.filter(function(e) {
				var t = e.mute;
				return o("WAWebMuteGetters").getIsMuted(t);
			}) });
		};
		var i = a.prototype;
		return i.$10 = function() {
			return this.context.isKeyboardUser;
		}, i.componentWillUnmount = function() {
			var e = r("WAWebEnvironment").isWindows;
			e && document.removeEventListener("keydown", this.$22), o("WAWebTimeSpentLoggingNavigation").tsNavigationExit(this.$5);
			var t = this.props.selection;
			if (!(t.list.length > 0)) {
				var n = t.getVal();
				n instanceof o("WAWebChatModel").Chat && n.isState && !this.props.isSearching && o("WAWebCmd").Cmd.closeChat(n);
			}
		}, i.$23 = function() {
			var e = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().height;
			return e + 4;
		}, i.$24 = function() {
			return o("WAWebTextSizeUtils").getWAWebTextSizeStyles().detailImageSize;
		}, i.$28 = function(t) {
			var e = t[1], n = e.slice(0, 2), r = b(n, { formatString: "*" }), a = b(n).toString(), i = o("WAWebFormatConfiguration").Search({ terms: [this.props.searchQuery.trimmed()] });
			return p.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: r,
				formatters: i,
				titlify: !0,
				title: a,
				direction: "auto"
			});
		}, i.getData = function() {
			var e = this.props, t = e.actions, n = e.chats, a = e.commonGroups, i = e.communities, l = e.contacts, s = e.debugCommands, u = e.isSearching, c = e.messages, d = e.nonContactPushnames, m = e.searchQuery, p = e.settings, _ = this.state, f = _.collapseMutedChatsEnabled, g = _.ftsKept, h = _.ftsMessages, y = _.ftsStarred, C = _.mutedChats, b = _.mutedChatsCollapsed, v = _.upcomingEvents, S = [], R = 0;
			if (this.props.mode === r("WAWebChatlistPanelMode").CallsTab) {
				if (!u) {
					var L = o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getVisibleOngoingJoinableGroupCalls();
					if (o("WAWebVoipGatingUtils").isWinHybridJoinableCallsEnabled() && L.length > 0 && (S.push({
						itemKey: "section-ongoing-calls",
						type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_ONGOING
					}), S.push.apply(S, L.map(function(e) {
						return {
							itemKey: "ongoing-call-" + e.id.toString(),
							data: e,
							type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_ONGOING,
							height: 96
						};
					}))), o("WAWebABProps").getABPropConfigValue("enable_upcoming_schedule_call_events_in_calls_tab") && v.length > 0) {
						var E = v[0];
						S.push({
							itemKey: "section-upcoming-events",
							type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_UPCOMING_EVENTS
						}), S.push({
							itemKey: "upcoming-event-" + E.id.toString(),
							data: E,
							type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_UPCOMING_EVENT,
							height: 108
						}), this.state.allUpcomingEvents.length > 1 && S.push({
							itemKey: "view-all-upcoming-events",
							type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_UPCOMING_EVENTS_VIEW_ALL
						});
					}
					var k = o("WAWebFavoritesUtils").getFavoriteItemsLimited(3);
					S.push({
						itemKey: "section-calls-favorites",
						type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_FAVORITES
					}), k.length > 0 ? (S.push.apply(S, k.map(function(e) {
						return {
							itemKey: "favorite-chat-" + e.wid.toString(),
							data: e,
							type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALLS_FAVORITE
						};
					})), S.push({
						itemKey: "view-all-favorites",
						type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALLS_VIEW_ALL_FAVORITES
					})) : S.push({
						itemKey: "add-favorite-button",
						type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALLS_ADD_FAVORITE
					});
				}
				if (u && l.length > 0 && (S.push({
					itemKey: "section-contacts",
					type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CONTACTS
				}), S.push.apply(S, l.map(function(e) {
					return {
						itemKey: "contact-" + e.id.toString(),
						data: e,
						type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CONTACTS
					};
				}))), h.length > 0) {
					u ? S.push({
						itemKey: "section-calls-search-results",
						type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_SEARCH_RESULTS
					}) : S.push({
						itemKey: "section-calls-recent",
						type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_RECENT
					});
					var I = h.slice(0, 200);
					S.push.apply(S, o("WAWebCallLogUtils").mergeCallRecords(I).map(function(e) {
						var t = e.mergedMsgs, n = t[t.length - 1];
						return {
							itemKey: "msg-" + n.id.toString(),
							data: t,
							type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_LOG
						};
					}));
				}
				return S;
			}
			u && s.length > 0 && S.push({
				itemKey: "section-debug-commands",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_DEBUG_COMMANDS
			}), S.push.apply(S, s.map(function(e) {
				return {
					itemKey: "debug-command-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_DEBUG_COMMANDS,
					height: 60
				};
			})), u && t.length > 0 && S.push({
				itemKey: "section-actions",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_ACTIONS
			}), S.push.apply(S, t.map(function(e) {
				return {
					itemKey: "action-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_ACTIONS,
					height: 60
				};
			})), u && p.length > 0 && S.push({
				itemKey: "section-settings",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_SETTINGS
			}), S.push.apply(S, p.map(function(e) {
				return {
					itemKey: "setting-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_SETTINGS,
					height: 60
				};
			})), u && i.length > 0 && S.push({
				itemKey: "section-communities",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_COMMUNITIES
			}), S.push.apply(S, i.map(function(e) {
				return {
					itemKey: "community-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_COMMUNITIES,
					height: 72
				};
			})), m.filter.kind === o("WAWebChatSearchFilters").SearchFilters.LABELS && o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() || (u && n.length > 0 ? S.push({
				itemKey: "section-chats",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CHATS
			}) : !u && m.filter.kind === o("WAWebChatSearchFilters").SearchFilters.UNREAD && !o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled() ? S.push({
				itemKey: "section-chats",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_UNREAD_CHATS
			}) : !u && m.filter.kind === o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU && S.push({
				itemKey: "section-chats",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_ASSIGNED_TO_YOU
			}));
			var T = function(t) {
				if (o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(t.groupMetadata) || o("WAWebBizAiAgentStatusUtils").shouldShowTertiaryRowForChat(t)) return o("WAWebChatCommunityUtils").SUBGROUP_V2_CHAT_CELL_HEIGHT + 4;
			};
			if (!u && f) C.length > 0 && S.push({
				itemKey: "section-collapse-muted",
				contentKey: String(b) + "-" + C.length,
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MUTED_CHATS,
				height: 30
			}), b || S.push.apply(S, C.map(function(e) {
				return {
					itemKey: "chat-" + e.id.toString(),
					data: e,
					expanded: !b,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS,
					height: T(e)
				};
			})), S.push.apply(S, n.filter(function(e) {
				return !o("WAWebMuteGetters").getIsMuted(e.mute);
			}).map(function(e) {
				return {
					itemKey: "chat-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS,
					index: R++,
					height: T(e)
				};
			}));
			else {
				var D = [].concat(n);
				S.push.apply(S, D.map(function(e) {
					return {
						itemKey: "chat-" + e.id.toString(),
						data: e,
						type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS,
						index: R++,
						height: T(e)
					};
				}));
			}
			if (u && l.length > 0 && S.push({
				itemKey: "section-contacts",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CONTACTS
			}), S.push.apply(S, l.map(function(e) {
				return {
					itemKey: "contact-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CONTACTS
				};
			})), u && a.length > 0 && S.push({
				itemKey: "section-common-groups",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_COMMON_GROUPS
			}), S.push.apply(S, a.map(function(e) {
				return {
					itemKey: "common-group-" + e[0].id.toString() + "-" + e[1].map(function(e) {
						return e.id.toString();
					}).join("-"),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_COMMON_GROUPS
				};
			})), u && d != null) {
				var x = this.$8({
					chats: n,
					contacts: l,
					nonContactPushnames: d
				});
				x.length > 0 && (S.push({
					itemKey: "section-non-contact-pushname",
					type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_NON_CONTACT_PUSHNAME
				}), S.push.apply(S, x.map(function(e) {
					return {
						itemKey: "non-contact-pushname-" + e.id.toString(),
						data: e,
						type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_NON_CONTACT_PUSHNAME
					};
				})));
			}
			return u && y.length > 0 && S.push({
				itemKey: "section-starred",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_STARRED
			}), S.push.apply(S, y.map(function(e) {
				return {
					itemKey: "starred-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_STARRED
				};
			})), u && g.length > 0 && S.push({
				itemKey: "section-kept",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_KEPT
			}), S.push.apply(S, g.map(function(e) {
				return {
					itemKey: "kept-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_KEPT
				};
			})), u && h.length > 0 && S.push({
				itemKey: "section-msg",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MSG
			}), S.push.apply(S, h.map(function(e) {
				return {
					itemKey: "msg-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_MSG
				};
			})), u && c.length > 0 && S.push({
				itemKey: "section-msg",
				type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MSG
			}), S.push.apply(S, c.map(function(e) {
				return {
					itemKey: "msg-" + e.id.toString(),
					data: e,
					type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_MSG
				};
			})), S;
		}, i.$29 = function(t) {
			t === void 0 && (t = 100), this.refList && this.props.selection.index >= 0 && this.refList.scrollIntoViewIfNeeded(this.props.selection.index, t);
		}, i.componentDidMount = function() {
			var e = this;
			this.$5 = o("WAWebTimeSpentLoggingNavigation").tsNavigationEnter({ surface: "chat-list" }), this.props.selection.init(this.getSelection());
			var t = r("WAWebEnvironment").isWindows;
			t && document.addEventListener("keydown", this.$22), this.props.listeners.add(r("WAWebChatPreferenceCollection"), "wallpaper_drawer_open", function(t) {
				o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") && t && (e.disableChatSwitching = !0);
			}), this.props.listeners.add(r("WAWebChatPreferenceCollection"), "wallpaper_drawer_close", function(t) {
				o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") && t && (e.disableChatSwitching = !1);
			}), this.props.listeners.add(o("WAWebCmd").Cmd, "focus_next_chat", function(t) {
				(!o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") || !e.disableChatSwitching) && e.$31(null, !0, t);
			}), this.props.listeners.add(o("WAWebCmd").Cmd, "focus_prev_chat", function(t) {
				(!o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") || !e.disableChatSwitching) && e.$32(null, !0, t);
			}), this.props.listeners.add(o("WAWebCmd").Cmd, "update_chatlist_selection", this.$33), this.props.listeners.add(o("WAWebCmd").Cmd, "close_chat", this.$18), this.props.listeners.add(o("WAWebCmd").Cmd, "open_chat", function(t) {
				var n = t.chat, r = t.threadId;
				o("WAWebBotGating").isMetaAiChatInThreadsMode(n.id) && r != null || (e.$6 ? e.$7 = n : e.setState({ activeChat: n }));
			}), this.props.listeners.add(o("WAWebCmd").Cmd, "archive_chat", function(t) {
				var n = t.chat;
				e.$6 ? n === e.$7 && (e.$7 = null) : n === e.state.activeChat && e.setState({ activeChat: null });
			}), this.props.listeners.add(o("WAWebCmd").Cmd, "scroll_to_active_chat", function() {
				e.$29(0);
			}), this.props.listeners.add(o("WAWebCmd").Cmd, "scroll_chat_list_to_top", function() {
				e.refList && e.refList.scrollIntoViewIfNeeded(0, 0);
			}), r("gkx")("26258") || (this.props.listeners.add(o("WAWebChatCollection").ChatCollection, "change:muteExpiration", function() {
				e.setState({ mutedChats: e.props.chats.filter(function(e) {
					return o("WAWebMuteGetters").getIsMuted(e.mute);
				}) });
			}), this.props.listeners.add(o("WAWebMuteCollection").MuteCollection, "change:collapseMuted", function(t) {
				e.setState({ collapseMutedChatsEnabled: t });
			})), this.props.mode === r("WAWebChatlistPanelMode").CallsTab && (this.props.listeners.add(r("WAWebVoipCallsTabPanelManager"), "closeCallLogInfoPanel", function() {
				e.props.selection.unset();
			}), this.props.listeners.add(o("WAWebMsgCollection").MsgCollection, "add remove reset", function() {
				e.$9();
			}), this.props.listeners.add(o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection, "add remove reset", function() {
				e.$9();
			}), this.$9()), this.props.listeners.add(o("WAWebChatCollection").ChatCollection, "change:isParentGroup", function() {
				return e.forceUpdate();
			}), this.props.listeners.add(o("WAWebFavoriteCollection").FavoriteCollection, "add remove change", function() {
				e.forceUpdate();
			});
		}, i.componentDidUpdate = function(t, n) {
			var e = t.selection.getVal(), o = this.$6 ? this.$7 : this.state.activeChat, a = !t.isSearching && !this.props.isSearching && !this.props.isSearchInputFocused && !this.props.searchQuery.hasFilter() && !(o != null && o.archive), i = this.props.selection, l = i.list.map(function(e) {
				return e.id.toString();
			}).join("-"), s = this.getSelection(), u = s.map(function(e) {
				return e.id.toString();
			}).join("-");
			i.init(s, a), o && i.list.includes(o) && i.getVal() !== o && !this.$10() && this.props.mode === r("WAWebChatlistPanelMode").Chatlist && !this.props.isSearching && !this.props.isSearchInputFocused && i.setVal(o, !1), this.props.mode === r("WAWebChatlistPanelMode").CommandPalette && l !== u && i.setFirst(!1);
			var c = this.props.selection.getVal();
			t.isSearching && !this.props.isSearching && !this.props.isSearchInputFocused && !c && this.$3 && this.props.selection.setVal(this.$3, !1);
		}, i.getSelection = function() {
			var e = [].concat(this.props.debugCommands, this.props.actions, this.props.settings, this.props.communities, this.props.chats, this.props.contacts, this.props.commonGroups.map(function(e) {
				return e[0];
			}), this.state.ftsStarred, this.props.messages);
			if (this.props.mode === r("WAWebChatlistPanelMode").CallsTab) {
				var t = [];
				if (o("WAWebVoipGatingUtils").isWinHybridJoinableCallsEnabled() && o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.hasOngoingJoinableGroupCalls() && t.push.apply(t, o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getModelsArray()), o("WAWebABProps").getABPropConfigValue("enable_upcoming_schedule_call_events_in_calls_tab") && this.state.upcomingEvents.length > 0 && t.push(this.state.upcomingEvents[0]), !this.props.isSearching) {
					var n = o("WAWebFavoritesUtils").getFavoriteItemsLimited(3);
					for (var a of n) a.chat != null ? t.push(a.chat) : a.contact != null && t.push(a.contact);
				}
				if (this.state.ftsMessages.length > 0) {
					var i = this.state.ftsMessages.slice(0, 200), l = o("WAWebCallLogUtils").mergeCallRecords(i);
					t.push.apply(t, l.map(function(e) {
						var t = e.mergedMsgs;
						return t[t.length - 1];
					}));
				}
				return [].concat(t, e);
			}
			return e.splice.apply(e, [9, 0].concat(this.state.ftsMessages)), e;
		}, i.$32 = function(t, n, r) {
			t && t.preventDefault();
			var e = this.props.selection.prev();
			e > -1 && (this.props.selection.setPrev(!0), this.$29(), this.setState({ selectedChat: this.props.selection.getVal() }));
		}, i.$31 = function(t, n, r) {
			t && t.preventDefault();
			var e = this.props.selection.next();
			this.props.selection.index !== e && (this.props.selection.setNext(!0), this.$29(), this.setState({ selectedChat: this.props.selection.getVal() }));
		}, i.$30 = function(t, n, r) {
			t && t.preventDefault(), this.props.selection.index !== n && (this.props.selection.set(n, !0), this.$29(), this.setState({ selectedChat: this.props.selection.getVal() }));
		}, i.focusActiveChat = function() {
			var e = this.$6 ? this.$7 : this.state.activeChat;
			if (!e) {
				this.focusFirst();
				return;
			}
			var t = this.props.selection.list.indexOf(e);
			if (t < 0) {
				this.focusFirst();
				return;
			}
			var n = this.uie;
			n && n.activate(), this.props.selection.set(t, !0), this.setState({ selectedChat: this.props.selection.getVal() }), this.$29();
		}, i.focusFirst = function() {
			var e = this.uie;
			e && e.activate(), this.props.selection.setFirst(), this.$29(0), this.setState({ selectedChat: this.props.selection.getVal() }), this.props.mode === r("WAWebChatlistPanelMode").CommandPalette && this.$31(void 0);
		}, i.render = function() {
			var e = this, t, n = this.props, r = n.chats, a = n.isSearching, i = {
				down: function(n) {
					return e.$31(n, !1);
				},
				j: function(n) {
					return e.$31(n, !1);
				},
				up: function(n) {
					return e.$32(n, !1);
				},
				k: function(n) {
					return e.$32(n, !1);
				},
				"/": function(n) {
					return e.$17(n);
				},
				home: function(n) {
					return e.$30(n, 0);
				},
				end: function(n) {
					return e.$30(n, e.props.selection.list.length - 1);
				},
				pageup: function(n) {
					var t = e.props.selection, r = e.$39;
					o("WAWebChatlistPageNavigation.react").handlePageNavigation({
						event: n,
						direction: "up",
						selection: t,
						setSelectedChat: r
					});
				},
				pagedown: function(n) {
					var t = e.props.selection, r = e.$39;
					o("WAWebChatlistPageNavigation.react").handlePageNavigation({
						event: n,
						direction: "down",
						selection: t,
						setSelectedChat: r
					});
				}
			}, l;
			return a ? l = s._(
				/*BTDS*/
				""
			) : l = s._(
				/*BTDS*/
				""
			), p.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "Chatlist",
				ref: this.setRefUIE,
				uimState: o("WAWebUim").UIMState.PASSIVE,
				requestFocus: this.requestFocus,
				children: p.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
					tabIndex: 0,
					handlers: i,
					onFocus: this.$35,
					onBlur: this.$36,
					ref: this.$11,
					"data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
					children: p.jsx(o("WAWebFlatList.react").FlatList, {
						"aria-label": l,
						testid: "chat-list",
						data: this.getData(),
						renderItem: this.renderItem,
						flatListController: this.props.flatListController,
						direction: "vertical",
						defaultItemHeight: this.$23(),
						onPointerEventsOff: this.$38,
						onPointerEventsOn: this.$37,
						ref: this.setRefList,
						extraItems: f,
						role: "grid",
						itemRole: "row",
						"aria-rowcount": (t = r == null ? void 0 : r.length) != null ? t : 0,
						viewportXstyles: g.flatListViewport
					})
				})
			});
		}, a;
	})(_);
	v.contextType = r("WAWebKeyboardContext"), v.defaultProps = {
		chats: [],
		commonGroups: []
	};
	var S = { container: {
		boxSizing: "x9f619",
		height: "x1cccnhj",
		paddingTop: "x9orja2",
		paddingInlineEnd: "xyri2b",
		paddingBottom: "x1995gp2",
		paddingInlineStart: "xzm8p2n",
		$$css: !0
	} };
	function R(e) {
		var t = e.emphasized, n = e.header, o = e.testid, a = e.xstyle;
		return p.jsx("div", babelHelpers.extends({ "data-testid": o != null ? o : "section-header" }, (d || (d = r("stylex"))).props(S.container, a), { children: p.jsx(r("WDSText.react"), {
			type: t === !0 ? "Body1Emphasized" : "Body2",
			colorName: t === !0 ? "contentDefault" : "contentDeemphasized",
			children: n
		}) }));
	}
	R.displayName = R.name + " [from " + i.id + "]";
	var L = o("WAWebListenerHoc_DEPRECATED").ListenerHOC(r("WAWebTimerHoc_DEPRECATED.react")(v)), E = (function(e) {
		function t() {
			return e.apply(this, arguments) || this;
		}
		babelHelpers.inheritsLoose(t, e);
		var n = t.prototype;
		return n.focusFirst = function() {
			return this.getComponent().focusFirst();
		}, t;
	})(L);
	l.default = E;
}), 226);

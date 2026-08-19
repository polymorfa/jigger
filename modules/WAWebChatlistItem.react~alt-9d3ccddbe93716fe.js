__d("WAWebChatlistItem.react", [
	"fbt",
	"CometPlaceholder.react",
	"WALogger",
	"WAWebABProps",
	"WAWebAddFavoriteButton.react",
	"WAWebCallLogEntryCell.react",
	"WAWebCallLogJoinOngoingCell.react",
	"WAWebChat.react",
	"WAWebChatAction.react",
	"WAWebChatContact.react",
	"WAWebChatMessage.react",
	"WAWebChatSetting.react",
	"WAWebChatlistPanelMode",
	"WAWebChatlistTypes",
	"WAWebChatlistWrappedItem.react",
	"WAWebCmd",
	"WAWebCommonGroupSubtitle.react",
	"WAWebCommunityCells.react",
	"WAWebContactCallButtons.react",
	"WAWebContactGetters",
	"WAWebFavoriteCell.react",
	"WAWebFlatList.react",
	"WAWebFocusTracer",
	"WAWebFrontendMsgGetters",
	"WAWebNonContactPushNameSearchModel",
	"WAWebNoop",
	"WAWebOutContactCell.react",
	"WAWebPreCallUserJourneyLogger",
	"WAWebSectionHeader.react",
	"WAWebTabOrder",
	"WAWebUpcomingEventCell.react",
	"WAWebVoipCallsTabPanelManager",
	"WAWebVoipGatingUtils",
	"WAWebWamEnumCompanionInviteOriginType",
	"WAWebWamEnumSubSurface",
	"WDSButton.react",
	"WDSSectionDivider.react",
	"cr:104",
	"cr:5736",
	"deferredLoadComponent",
	"gkx",
	"nullthrows",
	"react",
	"requireDeferredForDisplay",
	"useWAWebActiveChatStyle",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = ["chat", "createPreventAutoReadProps"], d, m = d || (d = o("react")), p = d, _ = p.memo, f = p.useRef, g = r("deferredLoadComponent")(r("requireDeferredForDisplay")("WAWebCallLogIncomingCell.react").__setRef("WAWebChatlistItem.react")), h = o("WAWebChat.react").ChatFactory(), y = o("WAWebChatContact.react").ContactFactory();
	function C(e) {
		var t = e.chat, n = e.createPreventAutoReadProps, a = babelHelpers.objectWithoutPropertiesLoose(e, c), i = o("WAWebABProps").getABPropConfigValue("wa_web_chatlist_render_chat_open"), l = r("useWAWebActiveChatStyle")(t, i), s = n(t), u = s.forceActive, d = s.activeStyleType;
		if (i) {
			var p = l.forceActive === !0, _ = s.activeStyleType === "BORDER";
			p && _ ? (u = !0, d = "BOTH") : p ? (u = !0, d = "DEFAULT") : _ && (d = "BORDER");
		}
		return m.jsx(h, babelHelpers.extends({ chat: t }, a, {
			forceActive: u,
			activeStyleType: d,
			onContextMenuChange: s.onContextMenuChange
		}));
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.active, n = f(null), a = function(t) {
			t === "focus" && r("WAWebFocusTracer").focus(n.current);
		};
		return o("useWAWebListener").useListener(t, o("WAWebChatlistTypes").CALLS_ADD_FAVORITE_SELECTION_ID, a), m.jsx(r("WAWebAddFavoriteButton.react"), { ref: n });
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(t) {
		var a = t.data, i = t.filterPreset, l = t.getDetailImageSize, c = t.handlers, d = t.mode, p = t.multiSelection, _ = t.mutedChats, f = t.mutedChatsCollapsed, v = t.searchMatch, E = t.searchQuery, k = t.selectableState, I = t.selection, T = c.createPreventAutoReadProps, D = c.handleArrowKeyInChatItem, x = c.handleChatClick, $ = c.handleContactItemClick, P = c.handleKeptMessageClick, N = c.handleMultiSelect, M = c.handleMutedChatsBarClick, w = c.onItemClick, A = c.onStartMultiSelect, F = c.setCheckboxWrapperRef, O = {
			mode: d,
			selectableState: k,
			multiSelection: p,
			onSelect: N,
			onArrowKeyInChatItem: D,
			setCheckboxWrapperRef: F
		};
		switch (a.type) {
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CHATS: return m.jsx(L, { header: s._(
				/*BTDS*/
				""
			) });
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_UNREAD_CHATS: return m.jsx(L, { header: s._(
				/*BTDS*/
				""
			) });
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CONTACTS: return m.jsx(L, { header: s._(
				/*BTDS*/
				""
			) });
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_ACTIONS: return m.jsx(L, { header: s._(
				/*BTDS*/
				""
			) });
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_DEBUG_COMMANDS: return m.jsx(L, { header: "Debug Commands" });
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_COMMUNITIES: return m.jsx(L, { header: s._(
				/*BTDS*/
				""
			) });
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_SETTINGS: return m.jsx(L, { header: s._(
				/*BTDS*/
				""
			) });
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_COMMON_GROUPS: return m.jsx(L, { header: s._(
				/*BTDS*/
				""
			) });
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_NON_CONTACT_PUSHNAME: return m.jsx(L, { header: o("WAWebNonContactPushNameSearchModel").getNonContactPushNameHeader() });
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_STARRED: return m.jsx(L, {
				testid: "starred-messages-header",
				header: s._(
					/*BTDS*/
					""
				)
			});
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_KEPT: return m.jsx(L, {
				testid: "kept-messages-header",
				header: s._(
					/*BTDS*/
					""
				)
			});
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MSG: return m.jsx(L, { header: s._(
				/*BTDS*/
				""
			) });
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_FAVORITES: return m.jsx(r("WDSSectionDivider.react"), { header: {
				action: a.showViewAllFavorites === !0 ? m.jsx(S, {}) : null,
				title: s._(
					/*BTDS*/
					""
				),
				type: "emphasized"
			} });
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_UPCOMING_EVENTS: return m.jsx(r("WDSSectionDivider.react"), { header: {
				action: a.showViewAllUpcomingEvents === !0 ? m.jsx(R, {}) : null,
				title: s._(
					/*BTDS*/
					""
				),
				type: "emphasized"
			} });
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_INCOMING: return m.jsx(r("WDSSectionDivider.react"), { header: {
				title: s._(
					/*BTDS*/
					""
				),
				type: "emphasized"
			} });
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_ONGOING: return m.jsx(r("WDSSectionDivider.react"), { header: {
				title: s._(
					/*BTDS*/
					""
				),
				type: "emphasized"
			} });
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_RECENT: return m.jsx(r("WDSSectionDivider.react"), { header: {
				title: s._(
					/*BTDS*/
					""
				),
				type: "emphasized"
			} });
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_SEARCH_GROUPS: return m.jsx(r("WAWebSectionHeader.react"), { header: s._(
				/*BTDS*/
				""
			) });
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_SEARCH_RESULTS: return m.jsx(L, { header: s._(
				/*BTDS*/
				""
			) });
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MUTED_CHATS: return n("cr:5736") != null ? m.jsx(n("cr:5736"), {
				mutedChats: _,
				mutedChatsCollapsed: f,
				onClick: M
			}) : null;
			case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_ASSIGNED_TO_YOU: return m.jsx(L, { header: s._(
				/*BTDS*/
				""
			) });
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS: {
				var B = a.data, W = a.index;
				return m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, O, {
					model: B,
					children: m.jsx(C, {
						chat: B,
						createPreventAutoReadProps: T,
						mode: o("WAWebChat.react").Mode.LAST,
						searchQuery: E,
						searchMatch: v,
						filterPreset: i,
						onClick: x,
						mouseDownAsClick: !0,
						selectableState: k,
						multiSelection: p,
						onStartMultiSelect: A,
						active: I,
						ephemeralIcon: "chat-list",
						showStatusRingAroundProfilePhoto: !0,
						index: W,
						photoSize: l(),
						showCommunityInfo: !0,
						skipCheckMark: !0,
						handleArrowKeyInChatItem: D
					})
				}));
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CONTACTS: {
				var q = a.data, U = d === r("WAWebChatlistPanelMode").CallsTab && o("WAWebVoipGatingUtils").isCallingEnabled() && !o("WAWebContactGetters").getIsMe(q);
				return m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, O, {
					model: q,
					children: m.jsx(y, {
						contact: q,
						active: I,
						searchQuery: E,
						searchMatch: v,
						onClick: $,
						mouseDownAsClick: !0,
						waitIdle: !0,
						showStatusRingAroundProfilePhoto: !0,
						photoSize: l(),
						hideStatus: o("WAWebContactGetters").getIsMe(q),
						showMessageYourselfName: o("WAWebContactGetters").getIsMe(q),
						detail: U ? m.jsx(r("WAWebContactCallButtons.react"), { contact: q }) : null
					})
				}));
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_OUT_CONTACTS: {
				var V = a.data;
				return m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, O, {
					model: V,
					children: m.jsx(r("WAWebOutContactCell.react"), {
						contact: V,
						entryPoint: o("WAWebWamEnumCompanionInviteOriginType").COMPANION_INVITE_ORIGIN_TYPE.CHATLIST_SEARCH,
						isSearchResult: !0,
						searchMatch: v
					})
				}));
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_NON_CONTACT_PUSHNAME: {
				var H = a.data;
				return m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, O, {
					model: H,
					children: m.jsx(y, {
						contact: H,
						active: I,
						searchQuery: E,
						onClick: $,
						mouseDownAsClick: !0,
						waitIdle: !0,
						showStatusRingAroundProfilePhoto: !0,
						photoSize: l()
					})
				}));
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_ACTIONS: {
				var G = a.data;
				return m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, O, {
					model: G,
					children: m.jsx(r("WAWebChatAction.react"), {
						action: G,
						active: I,
						onClick: w,
						searchQuery: E
					})
				}));
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_DEBUG_COMMANDS: {
				var z = a.data;
				if (!r("gkx")("26258") && n("cr:104") != null) return m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, O, {
					model: z,
					children: m.jsx(n("cr:104"), {
						active: I,
						debugCommand: z,
						onClick: w,
						searchQuery: E
					})
				}));
				throw o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAWebChatlistItem] UnknownDataError: ROW_DEBUG_COMMANDS"]))), new (o("WAWebFlatList.react")).UnknownDataError(a);
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_COMMUNITIES: {
				var j = a.data;
				return m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, O, {
					model: j,
					children: m.jsx(o("WAWebCommunityCells.react").CommunityCell, {
						active: I,
						parentGroupMetadata: r("nullthrows")(j.groupMetadata),
						parentGroupChat: j,
						onClick: function(t) {
							return w == null ? void 0 : w(t, j);
						},
						inCommandPalette: !0
					})
				}));
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_SETTINGS: {
				var K = a.data;
				return m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, O, {
					model: K,
					children: m.jsx(r("WAWebChatSetting.react"), {
						active: I,
						onClick: w,
						searchQuery: E,
						setting: K
					})
				}));
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_COMMON_GROUPS: {
				var Q = a.data, X = Q[0], Y = m.jsx(r("WAWebCommonGroupSubtitle.react"), {
					commonGroup: Q,
					searchQuery: E
				});
				return m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, O, {
					model: X,
					children: m.jsx(h, babelHelpers.extends({
						chat: X,
						secondary: Y,
						mode: o("WAWebChat.react").Mode.LAST,
						searchQuery: E,
						filterPreset: i,
						onClick: w,
						mouseDownAsClick: !0,
						selectableState: k,
						multiSelection: p,
						onStartMultiSelect: A,
						active: I
					}, T(X)))
				}));
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_STARRED: {
				var J = a.data;
				return m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, O, {
					model: J,
					children: m.jsx(r("WAWebChatMessage.react"), {
						msg: J,
						chat: o("WAWebFrontendMsgGetters").getChat(J),
						searchQuery: E,
						filterPreset: i,
						onClick: w,
						active: I,
						testid: "chatlist-starred-message-" + J.id.id
					})
				}));
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_KEPT: {
				var Z = a.data;
				return m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, O, {
					model: Z,
					children: m.jsx(r("WAWebChatMessage.react"), {
						msg: Z,
						chat: o("WAWebFrontendMsgGetters").getChat(Z),
						searchQuery: E,
						filterPreset: i,
						onClick: P,
						active: I,
						testid: "chatlist-kept-message-" + Z.id.id
					})
				}));
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_MSG: {
				var ee = a.data;
				return m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, O, {
					model: ee,
					children: m.jsx(r("WAWebChatMessage.react"), {
						msg: ee,
						chat: o("WAWebFrontendMsgGetters").getChat(ee),
						searchQuery: E,
						filterPreset: i,
						onClick: w,
						active: I,
						testid: "chatlist-message-" + ee.id.id
					})
				}));
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_INCOMING: {
				var te = a.data;
				return m.jsx(r("CometPlaceholder.react"), {
					fallback: m.jsx("div", { style: { minHeight: 72 } }),
					name: "WAWebCallLogIncomingCell",
					children: m.jsx(g, { call: te })
				});
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_ONGOING: {
				var ne = a.data;
				return m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, O, {
					model: ne,
					children: m.jsx(r("WAWebCallLogJoinOngoingCell.react"), {
						callLogMsg: ne,
						active: I,
						onClick: function() {
							return I == null ? void 0 : I.setVal(ne);
						}
					})
				}));
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_LOG: {
				var re = a.data, oe = re[re.length - 1];
				return m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, O, {
					model: oe,
					children: m.jsx(o("WAWebCallLogEntryCell.react").CallLogEntryCell, {
						mergedMsgs: re,
						searchQuery: E,
						filterPreset: i,
						onClick: function() {
							return I == null ? void 0 : I.setVal(oe);
						},
						active: I,
						testidPrefix: "chatlist-message"
					})
				}));
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALLS_FAVORITE: {
				var ae, ie = a.data, le = (ae = ie.chat) != null ? ae : ie.contact;
				return le == null ? null : m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, O, {
					model: le,
					children: m.jsx(r("WAWebFavoriteCell.react"), {
						active: I,
						favoriteItem: ie,
						onClick: r("WAWebNoop"),
						photoSize: l(),
						testid: "chatlist-favorite"
					})
				}));
			}
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALLS_ADD_FAVORITE: return m.jsx(b, { active: I });
			case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_UPCOMING_EVENT: {
				var se = a.data, ue = function() {
					var e = new (o("WAWebPreCallUserJourneyLogger")).PreCallUserJourneyLogger();
					e.clickEventDetail(o("WAWebWamEnumSubSurface").SUB_SURFACE.NONE);
					var t = o("WAWebFrontendMsgGetters").getChat(se), n = o("WAWebFrontendMsgGetters").getAsEventCreation(se);
					n != null && o("WAWebCmd").Cmd.openEventInfoDrawer(t, n);
				};
				return m.jsx(r("WAWebChatlistWrappedItem.react"), babelHelpers.extends({}, O, {
					model: se,
					children: m.jsx(r("WAWebUpcomingEventCell.react"), {
						eventMessage: se,
						active: I,
						onClick: ue
					})
				}));
			}
			default: throw o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[WAWebChatlistItem] UnknownDataError: default"]))), new (o("WAWebFlatList.react")).UnknownDataError(a);
		}
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S() {
		var e = function() {
			r("WAWebVoipCallsTabPanelManager").trigger("openFavoritesDrawer");
		};
		return m.jsx(r("WDSButton.react"), {
			"aria-label": s._(
				/*BTDS*/
				""
			),
			label: s._(
				/*BTDS*/
				""
			),
			onPress: e,
			size: "small",
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
			testid: "view-all-favorites-section-button",
			variant: "outline"
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R() {
		var e = function() {
			r("WAWebVoipCallsTabPanelManager").trigger("openUpcomingEventsDrawer");
		};
		return m.jsx(r("WDSButton.react"), {
			"aria-label": s._(
				/*BTDS*/
				""
			),
			label: s._(
				/*BTDS*/
				""
			),
			onPress: e,
			size: "small",
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
			testid: "view-all-upcoming-events-section-button",
			variant: "outline"
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.header, n = e.testid;
		return m.jsx(r("WDSSectionDivider.react"), {
			header: {
				title: t,
				type: "default"
			},
			testid: n != null ? n : "section-header"
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	var E = _(v);
	l.default = E;
}), 226);

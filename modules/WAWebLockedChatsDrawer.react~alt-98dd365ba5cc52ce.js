__d("WAWebLockedChatsDrawer.react", [
	"fbt",
	"WAWebChatCellV2.react",
	"WAWebChatCollection",
	"WAWebChatContextMenuItemBlock.react",
	"WAWebChatContextMenuItemDelete.react",
	"WAWebChatContextMenuItemMarkUnread.react",
	"WAWebChatContextMenuItemMute.react",
	"WAWebChatContextMenuItemUnlock.react",
	"WAWebChatEntryPoint",
	"WAWebChatListMenuItem.react",
	"WAWebChatLockUtils",
	"WAWebChatLockWAMUtils",
	"WAWebChatSearchModel",
	"WAWebCmd",
	"WAWebComposeBoxActions",
	"WAWebCopyToClipboard",
	"WAWebDevOnlyBadge.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDropdownItem.react",
	"WAWebDropdownItemSeparator.react",
	"WAWebEmptyState.react",
	"WAWebFlatList.react",
	"WAWebFlatListContainer.react",
	"WAWebFlatListController",
	"WAWebFocusTracer",
	"WAWebKeyboardHotKeys.react",
	"WAWebMiscGatingUtils",
	"WAWebPrivacyNarrativeE2EMessage.react",
	"WAWebSearchInput",
	"WAWebStateUtils",
	"WAWebTabOrder",
	"WAWebWamEnumChatLockActionType",
	"WAWebWamEnumLandingSurface",
	"gkx",
	"react",
	"useWAWebChatLockRestriction",
	"useWAWebListener",
	"useWAWebOnUnmount",
	"useWAWebOpenChat",
	"useWAWebSearchModel"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useMemo, p = c.useRef, _ = c.useState, f = { surface: "settings-drawer" }, g = function(t) {
		return t.id.toString();
	}, h = function(t, n) {
		return t != null && n instanceof HTMLElement;
	};
	function y(e) {
		var t, n = e.entryPoint, a = e.focusOnMount, i = a === void 0 ? !0 : a, l = e.onClose, c = e.ref, y = e.unlockEntryPoint, b = o("useWAWebSearchModel").useSearchModel(function() {
			return new (o("WAWebChatSearchModel")).LockedChatSearch();
		}), v = b.query, S = b.results, R = o("useWAWebOpenChat").useOpenChat(), L = R.openedChat, E = _(!1), k = E[0], I = E[1], T = S == null ? void 0 : S.query.searchText, D = T != null && T !== "";
		o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "change add remove", function() {
			v(T != null ? T : "", S == null ? void 0 : S.query.options);
		});
		var x = o("useWAWebChatLockRestriction").useChatLockRestriction({
			id: "locked-chats-drawer",
			condition: "always",
			entryPoint: n,
			unlockEntryPoint: y,
			landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE.FOLDER
		});
		d(function() {
			x && o("WAWebChatLockWAMUtils").chatLockActionWAMEvent({
				actionEntryPoint: n,
				chatLockActionType: o("WAWebWamEnumChatLockActionType").CHAT_LOCK_ACTION_TYPE.FOLDER_OPEN
			});
		}, [x, n]), r("useWAWebOnUnmount")(o("WAWebChatLockUtils").closeActiveChatIfLocked);
		var $ = (t = S == null ? void 0 : S.results.map(function(e) {
			return babelHelpers.extends({}, o("WAWebChatListMenuItem.react").getFlatListConfigFromChat(e.data, { showCommunityInfo: !0 }));
		})) != null ? t : [], P = s._(
			/*BTDS*/
			""
		), N = o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() ? u.jsx(o("WAWebPrivacyNarrativeE2EMessage.react").E2eMessageChatList, { tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_FOOTER }) : null, M = p(null), w = p(null), A = p(new Map()), F = function(t, n) {
			t ? A.current.set(n, t) : A.current.delete(n);
		}, O = _({
			index: 0,
			id: ""
		}), B = O[0], W = O[1], q = function(t) {
			if ($.length !== 0) {
				var e = B.index + (t === "up" ? -1 : 1);
				e >= $.length ? e = 0 : e < 0 && (e = $.length - 1);
				var n = $[e];
				if (n) {
					var r = g(n.chat);
					W({
						id: r,
						index: e
					}), V == null || V(r);
				}
			}
		}, U = {
			up: function() {
				return q("up");
			},
			down: function() {
				return q("down");
			},
			enter: function(t) {
				var e = t.target;
				if (!(B.index < 0)) {
					var n = A.current.get(B.id);
					if (n === e) {
						var r = $[B.index].chat;
						r && o("WAWebCmd").Cmd.openChatBottom({
							chat: r,
							chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist
						}).then(function() {
							window.setTimeout(function() {
								o("WAWebComposeBoxActions").ComposeBoxActions.focus(r);
							}, 200);
						});
					}
				}
			}
		}, V = function(t) {
			if (t != null) {
				var e = A.current.get(t);
				e && r("WAWebFocusTracer").focus(e);
			}
		}, H = function(t) {
			var e = M.current, n = t.relatedTarget;
			!h(e, n) || e != null && e.contains(n) || k || W({
				index: -1,
				id: ""
			});
		}, G = function(t) {
			var e = t.target, n = M.current;
			if (!(!h(n, e) || e !== n)) {
				var r = 0;
				if (L != null) {
					var o = $.findIndex(function(e) {
						return g(e.chat) === g(L);
					});
					o !== -1 && (r = o);
				}
				var a = $[r];
				if (a) {
					var i = g(a.chat);
					W({
						id: i,
						index: r
					}), V(i);
				}
			}
		}, z = m(function() {
			return new (r("WAWebFlatListController"))();
		}, []);
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: c,
			theme: "archived",
			testid: "settings-drawer",
			tsNavigationData: f,
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				onBack: l,
				type: l == null ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB : o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(o("WAWebSearchInput").DrawerSearchInput, {
				tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
				onSearch: v,
				focusOnMount: i,
				placeholder: P,
				children: [$.length === 0 ? u.jsx(o("WAWebEmptyState.react").Empty, { title: D ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				) }) : u.jsx("div", {
					"data-testid": "locked-chatlist",
					children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
						ref: M,
						handlers: U,
						onFocus: G,
						onBlur: H,
						"data-tab": o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
						children: u.jsx(r("WAWebFlatListContainer.react"), {
							flatListControllers: [z],
							className: "x1rife3k x1plvlek x1hm9lzh x1sa5p1d",
							children: u.jsx(o("WAWebFlatList.react").FlatList, {
								ref: w,
								data: $,
								renderItem: function(t) {
									return u.jsx(r("WAWebChatCellV2.react"), {
										size: "large",
										ref: function(n) {
											F(n, g(t.chat));
										},
										onClick: function() {
											o("WAWebCmd").Cmd.openChatBottom({
												chat: t.chat,
												chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist
											});
										},
										active: g(t.chat) === B.id,
										applyFocusStyles: !1,
										chat: t.chat,
										contextMenuItems: C(t.chat),
										forceActive: L != null && g(L) === g(t.chat),
										showCommunityInfo: !0,
										onContextMenuToggle: I
									}, t.itemKey);
								},
								direction: "vertical",
								flatListController: z,
								disablePointerEventsOnScroll: !1
							})
						})
					})
				}), N]
			}) })]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = o("WAWebStateUtils").unproxy(e), n = [
			u.jsx(r("WAWebChatContextMenuItemUnlock.react"), { chat: t }, "unlock"),
			u.jsx(r("WAWebChatContextMenuItemDelete.react"), { chat: t }, "delete"),
			u.jsx(r("WAWebChatContextMenuItemMute.react"), { chat: t }, "mute"),
			u.jsx(r("WAWebChatContextMenuItemBlock.react"), { chat: t }, "block"),
			u.jsx(r("WAWebChatContextMenuItemMarkUnread.react"), { chat: t }, "mark_unread")
		];
		return r("gkx")("26258") || (n.push(u.jsx(r("WAWebDropdownItemSeparator.react"), {}, "separator")), n.push(u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			testid: "copy-chat-id",
			action: function() {
				o("WAWebCopyToClipboard").copyTextToClipboard(g(t));
			},
			children: u.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, { label: "Copy Chat ID" })
		}, "copy_id"))), n;
	}
	l.default = y;
}), 226);

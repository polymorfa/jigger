__d("WAWebArchivedDrawer.react", [
	"fbt",
	"WALogger",
	"WAWebApiChat",
	"WAWebBizAiAgentStatusUtils",
	"WAWebChat.react",
	"WAWebChatCollection",
	"WAWebChatCommunityUtils",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebCommunityGatingUtils",
	"WAWebComposeBoxActions",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebEmptyState.react",
	"WAWebEnvironment",
	"WAWebFlatList.react",
	"WAWebFlatListController",
	"WAWebFocusTracer",
	"WAWebFrontendChatGetters",
	"WAWebKeyboardHotKeys.react",
	"WAWebSettingsGetters",
	"WAWebSingleSelection",
	"WAWebText.react",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useLazyRef",
	"useWAWebListener",
	"useWAWebSettingsValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["ref"], c, d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useEffect, g = p.useRef, h = p.useState, y = { paddingBottom10: {
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} }, C = { flatListContainer: {
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		$$css: !0
	} }, b = { surface: "archived-chats-drawer" }, v = o("WAWebChat.react").ChatFactory();
	function S(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, u), i = a.onClose, l = _(function() {
			var e = o("WAWebChatCollection").ChatCollection.filter(function(e) {
				return e.archive && o("WAWebFrontendChatGetters").getShouldAppearInList(e);
			});
			return e;
		}, []), d = o("useWAWebSettingsValues").useSettingsValues([o("WAWebSettingsGetters").getShowArchiveV2, o("WAWebSettingsGetters").getArchive]), p = d[0], S = d[1], R = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), L = r("useLazyRef")(function() {
			return new (r("WAWebSingleSelection"))([], function(e) {
				return e.id.toString();
			});
		}), E = g(null), k = h(l), I = k[0], T = k[1], D = function(t) {
			var e = L.current.getVal();
			t === e && L.current.unset();
		}, x = function() {
			return p;
		};
		o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, [
			x() ? "sort" : null,
			"change:archive",
			"add",
			"remove",
			"change:capiThreadControl",
			"change:isAiHandoff",
			"change:labels"
		].filter(Boolean), function() {
			T(l());
		});
		var $ = function(t) {
			L.current.setVal(t, !1);
		};
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_chat", D), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "update_chatlist_selection", $);
		var P = function() {
			return o("WAWebChatCollection").ChatCollection.some(function(e) {
				return e.archive;
			});
		}, N = _(function() {
			var e;
			return (e = o("WAWebChatCollection").ChatCollection.toArray().find(function(e) {
				return e.active && e.archive;
			})) != null ? e : null;
		}, []);
		f(function() {
			if (x()) {
				var t = l(), n = new Map();
				t.forEach(function(e) {
					e.archiveAtMentionViewedInDrawer = !0, n.set(e.id.toString(), !0);
				}), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WAWebArchivedDrawer: will mark chats for archive"]))), o("WAWebApiChat").updateChatArchiveDrawer(n);
			}
			E.current && r("WAWebFocusTracer").focus(E.current);
			var a = N();
			a && $(a);
		}, []);
		var M = function() {
			i();
		}, w = function(t, n) {
			o("WAWebCmd").Cmd.openChatFromUnread({
				chat: n,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist
			}).then(function(e) {
				e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(n);
			}), S.enabled || M();
		}, A = function(t) {
			t.preventDefault(), t.stopPropagation(), L.current.setNext(!0);
		}, F = function(t) {
			t.preventDefault(), t.stopPropagation(), L.current.setPrev(!0);
		}, O = function(t) {
			var e = o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(t.groupMetadata) || o("WAWebBizAiAgentStatusUtils").shouldShowTertiaryRowForChat(t) ? o("WAWebChatCommunityUtils").SUBGROUP_V2_CHAT_CELL_HEIGHT : o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT;
			return e + 4;
		}, B = function() {
			return I.map(function(e) {
				return {
					itemKey: e.id.toString(),
					chat: e,
					height: O(e)
				};
			});
		};
		L.current.init(I, !0);
		var W, q;
		if (P()) {
			var U = m.jsx("span", {
				className: "x117nqv4",
				children: s._(
					/*BTDS*/
					""
				)
			}), V = s._(
				/*BTDS*/
				"",
				[s._param("settingsPath", U)]
			), H = s._(
				/*BTDS*/
				"",
				[s._param("settingsPath", U)]
			);
			W = m.jsx("div", {
				className: "x1xnncb0",
				children: m.jsx("div", babelHelpers.extends({}, (c || (c = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingHor20, y.paddingBottom10), { children: m.jsx("div", {
					className: "x1yc453h",
					children: m.jsx(o("WAWebText.react").WAWebTextMuted, {
						as: "p",
						children: p ? V : H
					})
				}) }))
			});
		}
		if (I.length > 0) {
			var G = {
				down: A,
				up: F
			};
			q = m.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
				ref: E,
				handlers: G,
				children: [
					W,
					m.jsx("div", {
						className: "x889kno x1xnnf8n x1a8lsjc x106a9eq",
						children: m.jsx("div", { className: "xjm9jq1 xkh2ocl x1uew315" })
					}),
					m.jsx(o("WAWebFlatList.react").FlatList, {
						containerXstyles: C.flatListContainer,
						data: B(),
						testid: "archived-chatlist",
						flatListController: R.current,
						direction: "vertical",
						renderItem: function(t) {
							return m.jsx(v, {
								chat: t.chat,
								mode: o("WAWebChat.react").Mode.LAST,
								active: L.current,
								onClick: w,
								hideArchivedIcon: S.enabled,
								hideMuteIcon: x(),
								hideMuteOption: x(),
								ephemeralIcon: "chat-list",
								showCommunityInfo: !0
							});
						}
					})
				]
			});
		} else q = m.jsx(o("WAWebEmptyState.react").Archived, { onViewAllChats: i });
		var z = S.enabled ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), j = o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL;
		return r("WAWebEnvironment").isWindows === !0 && (j = o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB), m.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: "archived",
			tsNavigationData: b,
			children: [m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: z,
				onBack: M,
				type: j,
				menu: null
			}), m.jsx(r("WAWebDrawerBody.react"), {
				flatListControllers: [R.current],
				children: q
			})]
		});
	}
	S.displayName = S.name + " [from " + i.id + "]", l.default = S;
}), 226);

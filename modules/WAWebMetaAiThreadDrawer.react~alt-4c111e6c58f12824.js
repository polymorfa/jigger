__d("WAWebMetaAiThreadDrawer.react", [
	"fbt",
	"WAWebAiThreadList.react",
	"WAWebAiThreadMultiSelectBar.react",
	"WAWebAiThreadSearchResults.react",
	"WAWebBotBaseGating",
	"WAWebBotFrontendUtils",
	"WAWebChatEntryPoint",
	"WAWebChatListSearch.react",
	"WAWebChatMessageSearch",
	"WAWebCmd",
	"WAWebContentPlaceholder.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebDrawerSection.react",
	"WAWebEmptyState.react",
	"WAWebHistorySyncComponents.react",
	"WAWebMultiSelection",
	"WAWebOpenMetaAIHomeAction",
	"WAWebReconcileMetaAiUnreadCounts",
	"WAWebSelectableState",
	"WAWebTabOrder",
	"WAWebThreadJourneyLogger",
	"WAWebThreadMsgUtils",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumMetaAiActionEntryPoint",
	"WDSIconIcAddCircle.react",
	"WDSIconIcCheckBox.react",
	"WDSIconIcMoreVert.react",
	"WDSMenu.react",
	"WDSMenuBarItem.react",
	"WDSMenuItem.react",
	"isStringNullOrEmpty",
	"react",
	"useWAWebAiThreads",
	"useWAWebDebouncedSearch",
	"useWAWebListener",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = c.useRef, f = c.useState, g = { searchBar: {
		backgroundColor: "x1280gxy",
		$$css: !0
	} };
	function h(e) {
		var t = e.chat, n = e.ref, a = e.threadEntryPoint, i = s._(
			/*BTDS*/
			""
		), l = i, c = f(null), h = c[0], b = c[1];
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "update_ai_thread_list_selection", o("WAWebDrawerManager").closeDrawerRight);
		var v = r("useWAWebDebouncedSearch")(), S = v[0], R = v[1], L = _(), E = r("useWAWebAiThreads")(t), k = E[0], I = E[1], T = d(function(e) {
			b(e), o("WAWebCmd").Cmd.updateAiThreadlistSelection();
		}, []), D = d(async function() {
			var e = a.type === "MessageSearch" || a.type === "MetaAiChat" ? o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist : a.type === "MetaAiNavigationBar" ? o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINavigationBar : a.type === "MetaAiIntroPanel" ? o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIIntroPanel : a.type === "MetaAiSearchSuggestion" ? o("WAWebChatEntryPoint").ChatEntryPoint.MetaAISearchAskButton : a.type === "MetaAiForward" ? o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIForward : a.type === "AskMetaAi" ? o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI : a.type === "AskMetaAi1on1" ? o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI1on1 : a.type === "AskMetaAiGroup" ? o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAIGroup : a.type === "MetaAiMention" ? o("WAWebChatEntryPoint").ChatEntryPoint.Mention : a.type === "MetaAiContactInfo" ? o("WAWebChatEntryPoint").ChatEntryPoint.ContactInfo : a.type === "ForwardedAiBotMessage" ? o("WAWebChatEntryPoint").ChatEntryPoint.ForwardedAiBotMessage : (function() {
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + a.type);
			})();
			e: {
				var n = a;
				if ((typeof n == "object" && n !== null || typeof n == "function") && (n.type === "MetaAiSearchSuggestion" || n.type === "MetaAiForward") && "query" in n) {
					var r = n.query, i = o("WAWebBotFrontendUtils").openMetaAiThreadAndSendQuery(t, r, e);
					T(i);
					break e;
				}
				if ((typeof n == "object" && n !== null || typeof n == "function") && n.type === "MetaAiChat") {
					var l = await o("WAWebBotFrontendUtils").openLatestOrNewMetaAiThread(t, e);
					l.success ? (T(l.threadId), o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logThreadEnter(l.threadId, o("WAWebWamEnumMetaAiActionEntryPoint").META_AI_ACTION_ENTRY_POINT.CHAT_LIST, l.threadCreationTs)) : C();
					break e;
				}
				if ((typeof n == "object" && n !== null || typeof n == "function") && n.type === "MetaAiNavigationBar" && o("WAWebBotBaseGating").isMetaAIHomeEnabled()) {
					o("WAWebOpenMetaAIHomeAction").openMetaAIHome();
					break e;
				}
				if ((typeof n == "object" && n !== null || typeof n == "function") && n.type === "MetaAiNavigationBar" || (typeof n == "object" && n !== null || typeof n == "function") && n.type === "AskMetaAi" || (typeof n == "object" && n !== null || typeof n == "function") && n.type === "AskMetaAi1on1" || (typeof n == "object" && n !== null || typeof n == "function") && n.type === "AskMetaAiGroup" || (typeof n == "object" && n !== null || typeof n == "function") && n.type === "MetaAiIntroPanel" || (typeof n == "object" && n !== null || typeof n == "function") && n.type === "MetaAiMention" || (typeof n == "object" && n !== null || typeof n == "function") && n.type === "MetaAiContactInfo" || (typeof n == "object" && n !== null || typeof n == "function") && n.type === "ForwardedAiBotMessage") {
					var s = await o("WAWebBotFrontendUtils").openLatestOrNewMetaAiThread(t, e);
					s.success ? T(s.threadId) : C();
					break e;
				}
				if ((typeof n == "object" && n !== null || typeof n == "function") && n.type === "MessageSearch" && "msg" in n) {
					var u = n.msg;
					if (u != null) {
						var c = o("WAWebThreadMsgUtils").getMsgAiThread(u);
						if (c == null) {
							C();
							return;
						}
						var d = o("WAWebChatMessageSearch").getSearchContext({
							chat: t,
							msgKey: u.id,
							threadId: c
						}), m = await o("WAWebCmd").Cmd.openChatAt({
							chat: t,
							msgContext: d,
							threadId: c,
							chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIThreadList
						});
						m ? T(c) : C();
					}
					break e;
				}
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + n);
			}
		}, [
			t,
			a,
			T
		]);
		m(function() {
			I && D();
		}, [I, D]), r("useWAWebOnUnmount")(function() {
			o("WAWebReconcileMetaAiUnreadCounts").reconcileMetaAiUnreadCountsAction();
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_chat", function(e) {
			e === t && (b(null), o("WAWebCmd").Cmd.updateAiThreadlistSelection());
		});
		var x = u.jsx(r("WDSMenuBarItem.react"), {
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
			testid: "meta-ai-drawer-thread-creation-button",
			onClick: function() {
				if (o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logNewChatClick(o("WAWebWamEnumMetaAiActionEntryPoint").META_AI_ACTION_ENTRY_POINT.THREAD_LIST_VIEW), o("WAWebBotBaseGating").isMetaAIHomeEnabled()) b(null), o("WAWebOpenMetaAIHomeAction").openMetaAIHome();
				else {
					var e = o("WAWebBotFrontendUtils").createAndOpenNewMetaAiThread(t, o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINewThreadCreation);
					T(e);
				}
			},
			icon: r("WDSIconIcAddCircle.react"),
			title: s._(
				/*BTDS*/
				""
			)
		}), $ = f(!1), P = $[0], N = $[1], M = p(function() {
			return new (r("WAWebSelectableState"))(!1);
		}, []), w = p(function() {
			return new (r("WAWebMultiSelection"))([], function(e) {
				return e.id.toString();
			});
		}, []), A = function() {
			N(!1), w.unsetAll(), M.setSelectable(!1);
		}, F = s._(
			/*BTDS*/
			""
		), O = function() {
			N(!0), M.setSelectable(!0);
		}, B = u.jsx(r("WDSMenuBarItem.react"), {
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
			testid: "meta-ai-drawer-menu-button",
			icon: r("WDSIconIcMoreVert.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onMenuOpen: y,
			wdsMenuToRender: u.jsx(r("WDSMenu.react"), {
				testid: "chatlist-header-dropdown",
				children: u.jsx(r("WDSMenuItem.react"), {
					onPress: O,
					Icon: r("WDSIconIcCheckBox.react"),
					title: F
				})
			})
		}), W = P ? u.jsx(r("WAWebAiThreadMultiSelectBar.react"), {
			chat: t,
			multiSelection: w,
			onCancel: A
		}) : null, q = P ? [] : [x, B];
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			testid: "meta-ai-thread-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "meta-ai-thread"
			},
			children: [
				u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: l,
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
					focusBackOrCancel: !0,
					menu: q
				}),
				!P && u.jsx(r("WAWebDrawerSection.react"), {
					animation: !1,
					theme: "list-section",
					xstyle: g.searchBar,
					children: u.jsx(o("WAWebChatListSearch.react").ListSearch, {
						ref: L,
						placeholder: s._(
							/*BTDS*/
							""
						),
						onSearch: R,
						type: o("WAWebChatListSearch.react").ListSearchType.NEWSLETTER_SEARCH,
						showPlaceholderUntilType: !0
					})
				}),
				u.jsxs(r("WAWebDrawerBody.react"), { children: [W, r("isStringNullOrEmpty")(S) ? I ? u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebAiThreadList.react").WAWebAiThreadList, {
					chat: t,
					threads: k,
					selectableState: M,
					multiSelection: w,
					activeThreadId: h,
					onThreadClick: T
				}), u.jsx(r("WAWebContentPlaceholder.react"), {
					theme: "ai-thread-list",
					children: u.jsx(o("WAWebHistorySyncComponents.react").HistorySyncAiThreadsPlaceholderText, {})
				})] }) : u.jsx(o("WAWebEmptyState.react").Loading, {}) : u.jsx(r("WAWebAiThreadSearchResults.react"), {
					searchText: S,
					chat: t,
					threads: k,
					selectableState: M,
					multiSelection: w,
					onThreadClick: T,
					activeThreadId: h
				})] })
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y() {
		o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logThreeDotMenuClick();
	}
	function C() {
		o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	l.default = h;
}), 226);

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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(49), n = e.chat, a = e.ref, i = e.threadEntryPoint, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[0] = l) : l = t[0];
		var c = l, d = c, p = f(null), h = p[0], S = p[1];
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "update_ai_thread_list_selection", o("WAWebDrawerManager").closeDrawerRight);
		var R = r("useWAWebDebouncedSearch")(), L = R[0], E = R[1], k = _(), I = r("useWAWebAiThreads")(n), T = I[0], D = I[1], x;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (x = function(t) {
			S(t), o("WAWebCmd").Cmd.updateAiThreadlistSelection();
		}, t[1] = x) : x = t[1];
		var $ = x, P;
		t[2] !== n || t[3] !== i ? (P = async function() {
			var e = i.type === "MessageSearch" || i.type === "MetaAiChat" ? o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist : i.type === "MetaAiNavigationBar" ? o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINavigationBar : i.type === "MetaAiIntroPanel" ? o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIIntroPanel : i.type === "MetaAiSearchSuggestion" ? o("WAWebChatEntryPoint").ChatEntryPoint.MetaAISearchAskButton : i.type === "MetaAiForward" ? o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIForward : i.type === "AskMetaAi" ? o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI : i.type === "AskMetaAi1on1" ? o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI1on1 : i.type === "AskMetaAiGroup" ? o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAIGroup : i.type === "MetaAiMention" ? o("WAWebChatEntryPoint").ChatEntryPoint.Mention : i.type === "MetaAiContactInfo" ? o("WAWebChatEntryPoint").ChatEntryPoint.ContactInfo : i.type === "ForwardedAiBotMessage" ? o("WAWebChatEntryPoint").ChatEntryPoint.ForwardedAiBotMessage : (function() {
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + i.type);
			})();
			e: {
				var t = i;
				if ((typeof t == "object" && t !== null || typeof t == "function") && (t.type === "MetaAiSearchSuggestion" || t.type === "MetaAiForward") && "query" in t) {
					var r = t.query, a = o("WAWebBotFrontendUtils").openMetaAiThreadAndSendQuery(n, r, e);
					$(a);
					break e;
				}
				if ((typeof t == "object" && t !== null || typeof t == "function") && t.type === "MetaAiChat") {
					var l = await o("WAWebBotFrontendUtils").openLatestOrNewMetaAiThread(n, e);
					l.success ? ($(l.threadId), o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logThreadEnter(l.threadId, o("WAWebWamEnumMetaAiActionEntryPoint").META_AI_ACTION_ENTRY_POINT.CHAT_LIST, l.threadCreationTs)) : v();
					break e;
				}
				if ((typeof t == "object" && t !== null || typeof t == "function") && t.type === "MetaAiNavigationBar" && o("WAWebBotBaseGating").isMetaAIHomeEnabled()) {
					o("WAWebOpenMetaAIHomeAction").openMetaAIHome();
					break e;
				}
				if ((typeof t == "object" && t !== null || typeof t == "function") && t.type === "MetaAiNavigationBar" || (typeof t == "object" && t !== null || typeof t == "function") && t.type === "AskMetaAi" || (typeof t == "object" && t !== null || typeof t == "function") && t.type === "AskMetaAi1on1" || (typeof t == "object" && t !== null || typeof t == "function") && t.type === "AskMetaAiGroup" || (typeof t == "object" && t !== null || typeof t == "function") && t.type === "MetaAiIntroPanel" || (typeof t == "object" && t !== null || typeof t == "function") && t.type === "MetaAiMention" || (typeof t == "object" && t !== null || typeof t == "function") && t.type === "MetaAiContactInfo" || (typeof t == "object" && t !== null || typeof t == "function") && t.type === "ForwardedAiBotMessage") {
					var s = await o("WAWebBotFrontendUtils").openLatestOrNewMetaAiThread(n, e);
					s.success ? $(s.threadId) : v();
					break e;
				}
				if ((typeof t == "object" && t !== null || typeof t == "function") && t.type === "MessageSearch" && "msg" in t) {
					var u = t.msg;
					if (u != null) {
						var c = o("WAWebThreadMsgUtils").getMsgAiThread(u);
						if (c == null) {
							v();
							return;
						}
						var d = o("WAWebChatMessageSearch").getSearchContext({
							chat: n,
							msgKey: u.id,
							threadId: c
						}), m = await o("WAWebCmd").Cmd.openChatAt({
							chat: n,
							msgContext: d,
							threadId: c,
							chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIThreadList
						});
						m ? $(c) : v();
					}
					break e;
				}
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
			}
		}, t[2] = n, t[3] = i, t[4] = P) : P = t[4];
		var N = P, M, w;
		t[5] !== N || t[6] !== D ? (M = function() {
			D && N();
		}, w = [D, N], t[5] = N, t[6] = D, t[7] = M, t[8] = w) : (M = t[7], w = t[8]), m(M, w), r("useWAWebOnUnmount")(C);
		var A;
		t[9] !== n ? (A = function(t) {
			t === n && (S(null), o("WAWebCmd").Cmd.updateAiThreadlistSelection());
		}, t[9] = n, t[10] = A) : A = t[10], o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_chat", A);
		var F;
		t[11] !== n ? (F = function() {
			if (o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logNewChatClick(o("WAWebWamEnumMetaAiActionEntryPoint").META_AI_ACTION_ENTRY_POINT.THREAD_LIST_VIEW), o("WAWebBotBaseGating").isMetaAIHomeEnabled()) S(null), o("WAWebOpenMetaAIHomeAction").openMetaAIHome();
			else {
				var e = o("WAWebBotFrontendUtils").createAndOpenNewMetaAiThread(n, o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINewThreadCreation);
				$(e);
			}
		}, t[11] = n, t[12] = F) : F = t[12];
		var O;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (O = s._(
			/*BTDS*/
			""
		), t[13] = O) : O = t[13];
		var B;
		t[14] !== F ? (B = u.jsx(r("WDSMenuBarItem.react"), {
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
			testid: "meta-ai-drawer-thread-creation-button",
			onClick: F,
			icon: r("WDSIconIcAddCircle.react"),
			title: O
		}), t[14] = F, t[15] = B) : B = t[15];
		var W = B, q = f(!1), U = q[0], V = q[1], H;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (H = new (r("WAWebSelectableState"))(!1), t[16] = H) : H = t[16];
		var G = H, z;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (z = new (r("WAWebMultiSelection"))([], y), t[17] = z) : z = t[17];
		var j = z, K;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (K = function() {
			V(!1), j.unsetAll(), G.setSelectable(!1);
		}, t[18] = K) : K = t[18];
		var Q = K, X;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (X = s._(
			/*BTDS*/
			""
		), t[19] = X) : X = t[19];
		var Y = X, J;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (J = function() {
			V(!0), G.setSelectable(!0);
		}, t[20] = J) : J = t[20];
		var Z = J, ee;
		t[21] === Symbol.for("react.memo_cache_sentinel") ? (ee = s._(
			/*BTDS*/
			""
		), t[21] = ee) : ee = t[21];
		var te;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (te = u.jsx(r("WDSMenuBarItem.react"), {
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
			testid: "meta-ai-drawer-menu-button",
			icon: r("WDSIconIcMoreVert.react"),
			title: ee,
			onMenuOpen: b,
			wdsMenuToRender: u.jsx(r("WDSMenu.react"), {
				testid: "chatlist-header-dropdown",
				children: u.jsx(r("WDSMenuItem.react"), {
					onPress: Z,
					Icon: r("WDSIconIcCheckBox.react"),
					title: Y
				})
			})
		}), t[22] = te) : te = t[22];
		var ne = te, re;
		t[23] !== n || t[24] !== U ? (re = U ? u.jsx(r("WAWebAiThreadMultiSelectBar.react"), {
			chat: n,
			multiSelection: j,
			onCancel: Q
		}) : null, t[23] = n, t[24] = U, t[25] = re) : re = t[25];
		var oe = re, ae;
		t[26] !== U || t[27] !== W ? (ae = U ? [] : [W, ne], t[26] = U, t[27] = W, t[28] = ae) : ae = t[28];
		var ie = ae, le;
		t[29] === Symbol.for("react.memo_cache_sentinel") ? (le = {
			surface: "unknown",
			viewName: "meta-ai-thread"
		}, t[29] = le) : le = t[29];
		var se;
		t[30] !== ie ? (se = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: d,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
			focusBackOrCancel: !0,
			menu: ie
		}), t[30] = ie, t[31] = se) : se = t[31];
		var ue;
		t[32] !== E || t[33] !== U ? (ue = !U && u.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "list-section",
			xstyle: g.searchBar,
			children: u.jsx(o("WAWebChatListSearch.react").ListSearch, {
				ref: k,
				placeholder: s._(
					/*BTDS*/
					""
				),
				onSearch: E,
				type: o("WAWebChatListSearch.react").ListSearchType.NEWSLETTER_SEARCH,
				showPlaceholderUntilType: !0
			})
		}), t[32] = E, t[33] = U, t[34] = ue) : ue = t[34];
		var ce;
		t[35] !== h || t[36] !== n || t[37] !== D || t[38] !== L || t[39] !== T ? (ce = r("isStringNullOrEmpty")(L) ? D ? u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebAiThreadList.react").WAWebAiThreadList, {
			chat: n,
			threads: T,
			selectableState: G,
			multiSelection: j,
			activeThreadId: h,
			onThreadClick: $
		}), u.jsx(r("WAWebContentPlaceholder.react"), {
			theme: "ai-thread-list",
			children: u.jsx(o("WAWebHistorySyncComponents.react").HistorySyncAiThreadsPlaceholderText, {})
		})] }) : u.jsx(o("WAWebEmptyState.react").Loading, {}) : u.jsx(r("WAWebAiThreadSearchResults.react"), {
			searchText: L,
			chat: n,
			threads: T,
			selectableState: G,
			multiSelection: j,
			onThreadClick: $,
			activeThreadId: h
		}), t[35] = h, t[36] = n, t[37] = D, t[38] = L, t[39] = T, t[40] = ce) : ce = t[40];
		var de;
		t[41] !== oe || t[42] !== ce ? (de = u.jsxs(r("WAWebDrawerBody.react"), { children: [oe, ce] }), t[41] = oe, t[42] = ce, t[43] = de) : de = t[43];
		var me;
		return t[44] !== a || t[45] !== se || t[46] !== ue || t[47] !== de ? (me = u.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			testid: "meta-ai-thread-drawer",
			tsNavigationData: le,
			children: [
				se,
				ue,
				de
			]
		}), t[44] = a, t[45] = se, t[46] = ue, t[47] = de, t[48] = me) : me = t[48], me;
	}
	function y(e) {
		return e.id.toString();
	}
	function C() {
		o("WAWebReconcileMetaAiUnreadCounts").reconcileMetaAiUnreadCountsAction();
	}
	function b() {
		o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logThreeDotMenuClick();
	}
	function v() {
		o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	l.default = h;
}), 226);

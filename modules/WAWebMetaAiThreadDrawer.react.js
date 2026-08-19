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
	"asyncToGeneratorRuntime",
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
		var t = o("react-compiler-runtime").c(49), a = e.chat, i = e.ref, l = e.threadEntryPoint, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
			/*BTDS*/
			""
		), t[0] = c) : c = t[0];
		var d = c, p = d, h = f(null), S = h[0], R = h[1];
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "update_ai_thread_list_selection", o("WAWebDrawerManager").closeDrawerRight);
		var L = r("useWAWebDebouncedSearch")(), E = L[0], k = L[1], I = _(), T = r("useWAWebAiThreads")(a), D = T[0], x = T[1], $;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? ($ = function(t) {
			R(t), o("WAWebCmd").Cmd.updateAiThreadlistSelection();
		}, t[1] = $) : $ = t[1];
		var P = $, N;
		t[2] !== a || t[3] !== l ? (N = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = l.type === "MessageSearch" || l.type === "MetaAiChat" ? o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist : l.type === "MetaAiNavigationBar" ? o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINavigationBar : l.type === "MetaAiIntroPanel" ? o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIIntroPanel : l.type === "MetaAiSearchSuggestion" ? o("WAWebChatEntryPoint").ChatEntryPoint.MetaAISearchAskButton : l.type === "MetaAiForward" ? o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIForward : l.type === "AskMetaAi" ? o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI : l.type === "AskMetaAi1on1" ? o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI1on1 : l.type === "AskMetaAiGroup" ? o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAIGroup : l.type === "MetaAiMention" ? o("WAWebChatEntryPoint").ChatEntryPoint.Mention : l.type === "MetaAiContactInfo" ? o("WAWebChatEntryPoint").ChatEntryPoint.ContactInfo : l.type === "ForwardedAiBotMessage" ? o("WAWebChatEntryPoint").ChatEntryPoint.ForwardedAiBotMessage : (function() {
					throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + l.type);
				})();
				e: {
					var t = l;
					if ((typeof t == "object" && t !== null || typeof t == "function") && (t.type === "MetaAiSearchSuggestion" || t.type === "MetaAiForward") && "query" in t) {
						var n = t.query, r = o("WAWebBotFrontendUtils").openMetaAiThreadAndSendQuery(a, n, e);
						P(r);
						break e;
					}
					if ((typeof t == "object" && t !== null || typeof t == "function") && t.type === "MetaAiChat") {
						var i = yield o("WAWebBotFrontendUtils").openLatestOrNewMetaAiThread(a, e);
						i.success ? (P(i.threadId), o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logThreadEnter(i.threadId, o("WAWebWamEnumMetaAiActionEntryPoint").META_AI_ACTION_ENTRY_POINT.CHAT_LIST, i.threadCreationTs)) : v();
						break e;
					}
					if ((typeof t == "object" && t !== null || typeof t == "function") && t.type === "MetaAiNavigationBar" && o("WAWebBotBaseGating").isMetaAIHomeEnabled()) {
						o("WAWebOpenMetaAIHomeAction").openMetaAIHome();
						break e;
					}
					if ((typeof t == "object" && t !== null || typeof t == "function") && t.type === "MetaAiNavigationBar" || (typeof t == "object" && t !== null || typeof t == "function") && t.type === "AskMetaAi" || (typeof t == "object" && t !== null || typeof t == "function") && t.type === "AskMetaAi1on1" || (typeof t == "object" && t !== null || typeof t == "function") && t.type === "AskMetaAiGroup" || (typeof t == "object" && t !== null || typeof t == "function") && t.type === "MetaAiIntroPanel" || (typeof t == "object" && t !== null || typeof t == "function") && t.type === "MetaAiMention" || (typeof t == "object" && t !== null || typeof t == "function") && t.type === "MetaAiContactInfo" || (typeof t == "object" && t !== null || typeof t == "function") && t.type === "ForwardedAiBotMessage") {
						var s = yield o("WAWebBotFrontendUtils").openLatestOrNewMetaAiThread(a, e);
						s.success ? P(s.threadId) : v();
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
								chat: a,
								msgKey: u.id,
								threadId: c
							}), m = yield o("WAWebCmd").Cmd.openChatAt({
								chat: a,
								msgContext: d,
								threadId: c,
								chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIThreadList
							});
							m ? P(c) : v();
						}
						break e;
					}
					throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), t[2] = a, t[3] = l, t[4] = N) : N = t[4];
		var M = N, w, A;
		t[5] !== M || t[6] !== x ? (w = function() {
			x && M();
		}, A = [x, M], t[5] = M, t[6] = x, t[7] = w, t[8] = A) : (w = t[7], A = t[8]), m(w, A), r("useWAWebOnUnmount")(C);
		var F;
		t[9] !== a ? (F = function(t) {
			t === a && (R(null), o("WAWebCmd").Cmd.updateAiThreadlistSelection());
		}, t[9] = a, t[10] = F) : F = t[10], o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_chat", F);
		var O;
		t[11] !== a ? (O = function() {
			if (o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logNewChatClick(o("WAWebWamEnumMetaAiActionEntryPoint").META_AI_ACTION_ENTRY_POINT.THREAD_LIST_VIEW), o("WAWebBotBaseGating").isMetaAIHomeEnabled()) R(null), o("WAWebOpenMetaAIHomeAction").openMetaAIHome();
			else {
				var e = o("WAWebBotFrontendUtils").createAndOpenNewMetaAiThread(a, o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINewThreadCreation);
				P(e);
			}
		}, t[11] = a, t[12] = O) : O = t[12];
		var B;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (B = s._(
			/*BTDS*/
			""
		), t[13] = B) : B = t[13];
		var W;
		t[14] !== O ? (W = u.jsx(r("WDSMenuBarItem.react"), {
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
			testid: "meta-ai-drawer-thread-creation-button",
			onClick: O,
			icon: r("WDSIconIcAddCircle.react"),
			title: B
		}), t[14] = O, t[15] = W) : W = t[15];
		var q = W, U = f(!1), V = U[0], H = U[1], G;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (G = new (r("WAWebSelectableState"))(!1), t[16] = G) : G = t[16];
		var z = G, j;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (j = new (r("WAWebMultiSelection"))([], y), t[17] = j) : j = t[17];
		var K = j, Q;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (Q = function() {
			H(!1), K.unsetAll(), z.setSelectable(!1);
		}, t[18] = Q) : Q = t[18];
		var X = Q, Y;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (Y = s._(
			/*BTDS*/
			""
		), t[19] = Y) : Y = t[19];
		var J = Y, Z;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (Z = function() {
			H(!0), z.setSelectable(!0);
		}, t[20] = Z) : Z = t[20];
		var ee = Z, te;
		t[21] === Symbol.for("react.memo_cache_sentinel") ? (te = s._(
			/*BTDS*/
			""
		), t[21] = te) : te = t[21];
		var ne;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (ne = u.jsx(r("WDSMenuBarItem.react"), {
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
			testid: "meta-ai-drawer-menu-button",
			icon: r("WDSIconIcMoreVert.react"),
			title: te,
			onMenuOpen: b,
			wdsMenuToRender: u.jsx(r("WDSMenu.react"), {
				testid: "chatlist-header-dropdown",
				children: u.jsx(r("WDSMenuItem.react"), {
					onPress: ee,
					Icon: r("WDSIconIcCheckBox.react"),
					title: J
				})
			})
		}), t[22] = ne) : ne = t[22];
		var re = ne, oe;
		t[23] !== a || t[24] !== V ? (oe = V ? u.jsx(r("WAWebAiThreadMultiSelectBar.react"), {
			chat: a,
			multiSelection: K,
			onCancel: X
		}) : null, t[23] = a, t[24] = V, t[25] = oe) : oe = t[25];
		var ae = oe, ie;
		t[26] !== V || t[27] !== q ? (ie = V ? [] : [q, re], t[26] = V, t[27] = q, t[28] = ie) : ie = t[28];
		var le = ie, se;
		t[29] === Symbol.for("react.memo_cache_sentinel") ? (se = {
			surface: "unknown",
			viewName: "meta-ai-thread"
		}, t[29] = se) : se = t[29];
		var ue;
		t[30] !== le ? (ue = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: p,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
			focusBackOrCancel: !0,
			menu: le
		}), t[30] = le, t[31] = ue) : ue = t[31];
		var ce;
		t[32] !== k || t[33] !== V ? (ce = !V && u.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "list-section",
			xstyle: g.searchBar,
			children: u.jsx(o("WAWebChatListSearch.react").ListSearch, {
				ref: I,
				placeholder: s._(
					/*BTDS*/
					""
				),
				onSearch: k,
				type: o("WAWebChatListSearch.react").ListSearchType.NEWSLETTER_SEARCH,
				showPlaceholderUntilType: !0
			})
		}), t[32] = k, t[33] = V, t[34] = ce) : ce = t[34];
		var de;
		t[35] !== S || t[36] !== a || t[37] !== x || t[38] !== E || t[39] !== D ? (de = r("isStringNullOrEmpty")(E) ? x ? u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebAiThreadList.react").WAWebAiThreadList, {
			chat: a,
			threads: D,
			selectableState: z,
			multiSelection: K,
			activeThreadId: S,
			onThreadClick: P
		}), u.jsx(r("WAWebContentPlaceholder.react"), {
			theme: "ai-thread-list",
			children: u.jsx(o("WAWebHistorySyncComponents.react").HistorySyncAiThreadsPlaceholderText, {})
		})] }) : u.jsx(o("WAWebEmptyState.react").Loading, {}) : u.jsx(r("WAWebAiThreadSearchResults.react"), {
			searchText: E,
			chat: a,
			threads: D,
			selectableState: z,
			multiSelection: K,
			onThreadClick: P,
			activeThreadId: S
		}), t[35] = S, t[36] = a, t[37] = x, t[38] = E, t[39] = D, t[40] = de) : de = t[40];
		var me;
		t[41] !== ae || t[42] !== de ? (me = u.jsxs(r("WAWebDrawerBody.react"), { children: [ae, de] }), t[41] = ae, t[42] = de, t[43] = me) : me = t[43];
		var pe;
		return t[44] !== i || t[45] !== ue || t[46] !== ce || t[47] !== me ? (pe = u.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			testid: "meta-ai-thread-drawer",
			tsNavigationData: se,
			children: [
				ue,
				ce,
				me
			]
		}), t[44] = i, t[45] = ue, t[46] = ce, t[47] = me, t[48] = pe) : pe = t[48], pe;
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

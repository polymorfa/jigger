__d("WAWebChatsNavBarItem.react", [
	"fbt",
	"WAWebAppRootInteractionContext.react",
	"WAWebCountRenderingUtils",
	"WAWebDrawerManager",
	"WAWebInteractionTracePolicy",
	"WAWebNavBarLogEvents",
	"WAWebNavBarTypes",
	"WAWebOpenLastActiveChatAction",
	"WAWebSideNavButtonsActivityModel",
	"WAWebWamEnumWebcNavbarItemLabel",
	"WDSIconWdsIcChat.react",
	"WDSIconWdsIcChatFilled.react",
	"WDSMenuBarItem.react",
	"react",
	"react-compiler-runtime",
	"useWAWebChatsActivityIndicator",
	"useWAWebNavigateToRouterPage"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(15), n = e.activeNavBarItem, a = e.updateActiveNavBarItem, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = { onNavigationTransitioning: o("WAWebOpenLastActiveChatAction").openLastActiveChatIfNotLocked }, t[0] = i) : i = t[0];
		var l = r("useWAWebNavigateToRouterPage")(o("WAWebNavBarTypes").NavBarItems.Chats, i), c;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (c = {
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_CHATS
		}, t[1] = c) : c = t[1];
		var d = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(c), m = d.startInteraction, p;
		t[2] !== n || t[3] !== l || t[4] !== m || t[5] !== a ? (p = async function() {
			var e = await o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
			if (e && (o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen(), n !== o("WAWebNavBarTypes").NavBarItems.Chats)) {
				if (m(), a(o("WAWebNavBarTypes").NavBarItems.Chats), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.CHATS), o("WAWebSideNavButtonsActivityModel").setLastActiveButton(o("WAWebNavBarTypes").NavBarItems.Chats), l != null) {
					l();
					return;
				}
				o("WAWebOpenLastActiveChatAction").openLastActiveChatIfNotLocked();
			}
		}, t[2] = n, t[3] = l, t[4] = m, t[5] = a, t[6] = p) : p = t[6];
		var _ = p, f = n === o("WAWebNavBarTypes").NavBarItems.Chats, g = r(f ? "WDSIconWdsIcChatFilled.react" : "WDSIconWdsIcChat.react"), h = o("useWAWebChatsActivityIndicator").useChatsActivityIndicator(), y = h.unreadChatCount, C;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
			/*BTDS*/
			""
		), t[7] = C) : C = t[7];
		var b = C, v;
		t[8] !== y ? (v = y > 0 ? {
			count: o("WAWebCountRenderingUtils").renderCount(y, 100, "unread_message"),
			border: !0,
			size: "small"
		} : void 0, t[8] = y, t[9] = v) : v = t[9];
		var S;
		return t[10] !== g || t[11] !== _ || t[12] !== f || t[13] !== v ? (S = u.jsx(r("WDSMenuBarItem.react"), {
			icon: g,
			activityIndicator: v,
			title: b,
			testid: "navbar-item-chats",
			isActive: f,
			onClick: _,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}), t[10] = g, t[11] = _, t[12] = f, t[13] = v, t[14] = S) : S = t[14], S;
	}
	l.ChatsNavBarItem = c;
}), 226);

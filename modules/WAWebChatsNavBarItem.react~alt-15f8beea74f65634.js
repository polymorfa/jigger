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
	"useWAWebChatsActivityIndicator",
	"useWAWebNavigateToRouterPage"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.activeNavBarItem, n = e.updateActiveNavBarItem, a = r("useWAWebNavigateToRouterPage")(o("WAWebNavBarTypes").NavBarItems.Chats, { onNavigationTransitioning: o("WAWebOpenLastActiveChatAction").openLastActiveChatIfNotLocked }), i = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_CHATS
		}), l = i.startInteraction, c = async function() {
			var e = await o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
			if (e && (o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen(), t !== o("WAWebNavBarTypes").NavBarItems.Chats)) {
				if (l(), n(o("WAWebNavBarTypes").NavBarItems.Chats), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.CHATS), o("WAWebSideNavButtonsActivityModel").setLastActiveButton(o("WAWebNavBarTypes").NavBarItems.Chats), a != null) {
					a();
					return;
				}
				o("WAWebOpenLastActiveChatAction").openLastActiveChatIfNotLocked();
			}
		}, d = t === o("WAWebNavBarTypes").NavBarItems.Chats, m = r(d ? "WDSIconWdsIcChatFilled.react" : "WDSIconWdsIcChat.react"), p = o("useWAWebChatsActivityIndicator").useChatsActivityIndicator(), _ = p.unreadChatCount, f = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WDSMenuBarItem.react"), {
			icon: m,
			activityIndicator: _ > 0 ? {
				count: o("WAWebCountRenderingUtils").renderCount(_, 100, "unread_message"),
				border: !0,
				size: "small"
			} : void 0,
			title: f,
			testid: "navbar-item-chats",
			isActive: d,
			onClick: c,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.ChatsNavBarItem = c;
}), 226);

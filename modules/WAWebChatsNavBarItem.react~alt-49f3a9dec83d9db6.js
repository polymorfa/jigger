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
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebChatsActivityIndicator",
	"useWAWebNavigateToRouterPage"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.activeNavBarItem, a = e.updateActiveNavBarItem, i = r("useWAWebNavigateToRouterPage")(o("WAWebNavBarTypes").NavBarItems.Chats, { onNavigationTransitioning: o("WAWebOpenLastActiveChatAction").openLastActiveChatIfNotLocked }), l = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_CHATS
		}), c = l.startInteraction, d = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
				if (e && (o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen(), t !== o("WAWebNavBarTypes").NavBarItems.Chats)) {
					if (c(), a(o("WAWebNavBarTypes").NavBarItems.Chats), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.CHATS), o("WAWebSideNavButtonsActivityModel").setLastActiveButton(o("WAWebNavBarTypes").NavBarItems.Chats), i != null) {
						i();
						return;
					}
					o("WAWebOpenLastActiveChatAction").openLastActiveChatIfNotLocked();
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), m = t === o("WAWebNavBarTypes").NavBarItems.Chats, p = r(m ? "WDSIconWdsIcChatFilled.react" : "WDSIconWdsIcChat.react"), _ = o("useWAWebChatsActivityIndicator").useChatsActivityIndicator(), f = _.unreadChatCount, g = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WDSMenuBarItem.react"), {
			icon: p,
			activityIndicator: f > 0 ? {
				count: o("WAWebCountRenderingUtils").renderCount(f, 100, "unread_message"),
				border: !0,
				size: "small"
			} : void 0,
			title: g,
			testid: "navbar-item-chats",
			isActive: m,
			onClick: d,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.ChatsNavBarItem = c;
}), 226);

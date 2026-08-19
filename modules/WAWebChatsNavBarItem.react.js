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
	"react-compiler-runtime",
	"useWAWebChatsActivityIndicator",
	"useWAWebNavigateToRouterPage"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(15), a = e.activeNavBarItem, i = e.updateActiveNavBarItem, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = { onNavigationTransitioning: o("WAWebOpenLastActiveChatAction").openLastActiveChatIfNotLocked }, t[0] = l) : l = t[0];
		var c = r("useWAWebNavigateToRouterPage")(o("WAWebNavBarTypes").NavBarItems.Chats, l), d;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (d = {
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_CHATS
		}, t[1] = d) : d = t[1];
		var m = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(d), p = m.startInteraction, _;
		t[2] !== a || t[3] !== c || t[4] !== p || t[5] !== i ? (_ = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
				if (e && (o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen(), a !== o("WAWebNavBarTypes").NavBarItems.Chats)) {
					if (p(), i(o("WAWebNavBarTypes").NavBarItems.Chats), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.CHATS), o("WAWebSideNavButtonsActivityModel").setLastActiveButton(o("WAWebNavBarTypes").NavBarItems.Chats), c != null) {
						c();
						return;
					}
					o("WAWebOpenLastActiveChatAction").openLastActiveChatIfNotLocked();
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), t[2] = a, t[3] = c, t[4] = p, t[5] = i, t[6] = _) : _ = t[6];
		var f = _, g = a === o("WAWebNavBarTypes").NavBarItems.Chats, h = r(g ? "WDSIconWdsIcChatFilled.react" : "WDSIconWdsIcChat.react"), y = o("useWAWebChatsActivityIndicator").useChatsActivityIndicator(), C = y.unreadChatCount, b;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
			/*BTDS*/
			""
		), t[7] = b) : b = t[7];
		var v = b, S;
		t[8] !== C ? (S = C > 0 ? {
			count: o("WAWebCountRenderingUtils").renderCount(C, 100, "unread_message"),
			border: !0,
			size: "small"
		} : void 0, t[8] = C, t[9] = S) : S = t[9];
		var R;
		return t[10] !== h || t[11] !== f || t[12] !== g || t[13] !== S ? (R = u.jsx(r("WDSMenuBarItem.react"), {
			icon: h,
			activityIndicator: S,
			title: v,
			testid: "navbar-item-chats",
			isActive: g,
			onClick: f,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}), t[10] = h, t[11] = f, t[12] = g, t[13] = S, t[14] = R) : R = t[14], R;
	}
	l.ChatsNavBarItem = c;
}), 226);

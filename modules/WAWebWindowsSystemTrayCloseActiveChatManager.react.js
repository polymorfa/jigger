__d("WAWebWindowsSystemTrayCloseActiveChatManager.react", [
	"WAWebActions",
	"WAWebChatLockUtils",
	"WAWebCmd",
	"WAWebDrawerManager",
	"WAWebKeyboardRun",
	"WAWebNavBarTypes",
	"WAWebWindowsHybridBridgeCommon",
	"WAWebWindowsTaskbarController",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = !1, c = function(t) {
		u !== t && (u = t, t && (o("WAWebCmd").Cmd.closeStatusViewer(), o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(), r("WAWebKeyboardRun")(o("WAWebActions").Action.CLOSE_CHAT), o("WAWebCmd").Cmd.setActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Chats), o("WAWebCmd").Cmd.scrollChatListToTop(), o("WAWebChatLockUtils").lockedChatsAreAccessible() && o("WAWebChatLockUtils").lockChats({ showToast: !1 })), o("WAWebWindowsTaskbarController").WATaskbarController.OnIsAppInSystemTrayChanged(t));
	};
	function d() {
		var e;
		return o("useWAWebListener").useListener((e = o("WAWebWindowsHybridBridgeCommon").WAWebWindowsGetBridge()) == null || (e = e.nativeAppStateBridge) == null ? void 0 : e.getEvents(), "appStateChanged", c), null;
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

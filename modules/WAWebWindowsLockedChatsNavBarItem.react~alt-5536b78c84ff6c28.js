__d("WAWebWindowsLockedChatsNavBarItem.react", [
	"fbt",
	"WAWebChatLockCodeModal.react",
	"WAWebDrawerManager",
	"WAWebKeyboardTabUtils",
	"WAWebLockedChatsDrawer.react",
	"WAWebNavBarTypes",
	"WAWebWamEnumActionEntryPoint",
	"WAWebWamEnumLandingSurface",
	"WAWebWamEnumUnlockEntryPoint",
	"WDSIconWdsIcChatlockOutline.react",
	"WDSIconWdsIcChatlockUnlockedFilled.react",
	"WDSMenuBarItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.activeNavBarItem, n = e.updateActiveNavBarItem, a = t === o("WAWebNavBarTypes").NavBarItems.LockedChats, i = async function() {
			if (!a) {
				var e = await o("WAWebChatLockCodeModal.react").waitForChatlockSecretCode({
					unlockAppOnSuccess: !0,
					entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.CHAT_LIST,
					unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.CHAT_LIST,
					landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE.FOLDER
				});
				if (e) {
					var t = await o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(u.jsx(r("WAWebLockedChatsDrawer.react"), {
						entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.CHAT_LIST,
						unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.CHAT_LIST
					}), {
						focusType: o("WAWebKeyboardTabUtils").FocusType.CUSTOM,
						transition: "pop-drawer-fast"
					});
					t && n(o("WAWebNavBarTypes").NavBarItems.LockedChats);
				}
			}
		}, l = s._(
			/*BTDS*/
			""
		), c = r(a ? "WDSIconWdsIcChatlockUnlockedFilled.react" : "WDSIconWdsIcChatlockOutline.react");
		return u.jsx(r("WDSMenuBarItem.react"), {
			icon: c,
			title: l,
			testid: "navbar-item-locked",
			isActive: a,
			onClick: i,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);

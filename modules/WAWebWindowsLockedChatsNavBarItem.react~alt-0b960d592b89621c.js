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
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.activeNavBarItem, a = e.updateActiveNavBarItem, i = t === o("WAWebNavBarTypes").NavBarItems.LockedChats, l = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (!i) {
					var e = yield o("WAWebChatLockCodeModal.react").waitForChatlockSecretCode({
						unlockAppOnSuccess: !0,
						entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.CHAT_LIST,
						unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.CHAT_LIST,
						landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE.FOLDER
					});
					if (e) {
						var t = yield o("WAWebDrawerManager").DrawerManager.openDrawerLeftAsync(u.jsx(r("WAWebLockedChatsDrawer.react"), {
							entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.CHAT_LIST,
							unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.CHAT_LIST
						}), {
							focusType: o("WAWebKeyboardTabUtils").FocusType.CUSTOM,
							transition: "pop-drawer-fast"
						});
						t && a(o("WAWebNavBarTypes").NavBarItems.LockedChats);
					}
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), c = s._(
			/*BTDS*/
			""
		), d = r(i ? "WDSIconWdsIcChatlockUnlockedFilled.react" : "WDSIconWdsIcChatlockOutline.react");
		return u.jsx(r("WDSMenuBarItem.react"), {
			icon: d,
			title: c,
			testid: "navbar-item-locked",
			isActive: i,
			onClick: l,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);

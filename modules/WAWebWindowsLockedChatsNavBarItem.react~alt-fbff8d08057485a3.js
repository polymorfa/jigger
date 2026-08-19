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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(8), n = e.activeNavBarItem, a = e.updateActiveNavBarItem, i = n === o("WAWebNavBarTypes").NavBarItems.LockedChats, l;
		t[0] !== i || t[1] !== a ? (l = async function() {
			if (!i) {
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
					t && a(o("WAWebNavBarTypes").NavBarItems.LockedChats);
				}
			}
		}, t[0] = i, t[1] = a, t[2] = l) : l = t[2];
		var c = l, d;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (d = s._(
			/*BTDS*/
			""
		), t[3] = d) : d = t[3];
		var m = d, p = r(i ? "WDSIconWdsIcChatlockUnlockedFilled.react" : "WDSIconWdsIcChatlockOutline.react"), _;
		return t[4] !== c || t[5] !== p || t[6] !== i ? (_ = u.jsx(r("WDSMenuBarItem.react"), {
			icon: p,
			title: m,
			testid: "navbar-item-locked",
			isActive: i,
			onClick: c,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}), t[4] = c, t[5] = p, t[6] = i, t[7] = _) : _ = t[7], _;
	}
	l.default = c;
}), 226);

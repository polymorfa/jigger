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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(8), a = e.activeNavBarItem, i = e.updateActiveNavBarItem, l = a === o("WAWebNavBarTypes").NavBarItems.LockedChats, c;
		t[0] !== l || t[1] !== i ? (c = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (!l) {
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
						t && i(o("WAWebNavBarTypes").NavBarItems.LockedChats);
					}
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), t[0] = l, t[1] = i, t[2] = c) : c = t[2];
		var d = c, m;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), t[3] = m) : m = t[3];
		var p = m, _ = r(l ? "WDSIconWdsIcChatlockUnlockedFilled.react" : "WDSIconWdsIcChatlockOutline.react"), f;
		return t[4] !== d || t[5] !== _ || t[6] !== l ? (f = u.jsx(r("WDSMenuBarItem.react"), {
			icon: _,
			title: p,
			testid: "navbar-item-locked",
			isActive: l,
			onClick: d,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		}), t[4] = d, t[5] = _, t[6] = l, t[7] = f) : f = t[7], f;
	}
	l.default = c;
}), 226);

__d("WAWebChatLockedEntryPoint.react", [
	"fbt",
	"WAWebChatLockCodeModal.react",
	"WAWebChatlistPanelDrawerButton.react",
	"WAWebDrawerManager",
	"WAWebKeyboardTabUtils",
	"WAWebLockedChatsDrawer.react",
	"WAWebTabOrder",
	"WAWebWamEnumActionEntryPoint",
	"WAWebWamEnumLandingSurface",
	"WAWebWamEnumUnlockEntryPoint",
	"WDSIconWdsIcChatlockOutline.react",
	"WDSIconWdsIcChatlockUnlockedOutline.react",
	"react",
	"useWAWebChatLockEvents",
	"useWAWebChatLockRestriction",
	"useWAWebChatLockSettings"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.onOpen, n = o("useWAWebChatLockEvents").useChatLockEvents(), a = o("useWAWebChatLockSettings").useChatLockSettings(), i = a.hideLockedChats;
		o("useWAWebChatLockRestriction").useChatLockRestriction({
			id: "chatlist-entry-point",
			condition: i ? "always" : "bypass",
			entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.UNKNOWN,
			landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE.FOLDER,
			unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.CHAT_LIST
		});
		var l;
		n ? l = r("WDSIconWdsIcChatlockUnlockedOutline.react") : l = r("WDSIconWdsIcChatlockOutline.react");
		var c = u.jsx(l, {}), d = s._(
			/*BTDS*/
			""
		), m = async function() {
			var e = await o("WAWebChatLockCodeModal.react").waitForChatlockSecretCode({
				unlockAppOnSuccess: !0,
				landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE.FOLDER,
				unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.CHAT_LIST,
				entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.CHAT_LIST
			});
			e && (o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebLockedChatsDrawer.react"), {
				onClose: o("WAWebDrawerManager").closeDrawerLeft,
				entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.CHAT_LIST,
				unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.CHAT_LIST
			}), { focusType: o("WAWebKeyboardTabUtils").FocusType.CUSTOM }), t == null || t());
		};
		return u.jsx(r("WAWebChatlistPanelDrawerButton.react"), {
			dataTab: o("WAWebTabOrder").TAB_ORDER.ARCHIVED_ENTRY_POINT,
			onClick: m,
			primary: d,
			icon: c,
			ariaLabel: d
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);

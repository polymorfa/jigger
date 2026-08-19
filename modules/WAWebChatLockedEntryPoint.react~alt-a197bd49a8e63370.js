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
	"react-compiler-runtime",
	"useWAWebChatLockEvents",
	"useWAWebChatLockRestriction",
	"useWAWebChatLockSettings"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(10), n = e.onOpen, a = o("useWAWebChatLockEvents").useChatLockEvents(), i = o("useWAWebChatLockSettings").useChatLockSettings(), l = i.hideLockedChats, c = l ? "always" : "bypass", d;
		t[0] !== c ? (d = {
			id: "chatlist-entry-point",
			condition: c,
			entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.UNKNOWN,
			landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE.FOLDER,
			unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.CHAT_LIST
		}, t[0] = c, t[1] = d) : d = t[1], o("useWAWebChatLockRestriction").useChatLockRestriction(d);
		var m;
		a ? m = r("WDSIconWdsIcChatlockUnlockedOutline.react") : m = r("WDSIconWdsIcChatlockOutline.react");
		var p;
		t[2] !== m ? (p = u.jsx(m, {}), t[2] = m, t[3] = p) : p = t[3];
		var _ = p, f;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[4] = f) : f = t[4];
		var g = f, h;
		t[5] !== n ? (h = async function() {
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
			}), { focusType: o("WAWebKeyboardTabUtils").FocusType.CUSTOM }), n == null || n());
		}, t[5] = n, t[6] = h) : h = t[6];
		var y = h, C;
		return t[7] !== y || t[8] !== _ ? (C = u.jsx(r("WAWebChatlistPanelDrawerButton.react"), {
			dataTab: o("WAWebTabOrder").TAB_ORDER.ARCHIVED_ENTRY_POINT,
			onClick: y,
			primary: g,
			icon: _,
			ariaLabel: g
		}), t[7] = y, t[8] = _, t[9] = C) : C = t[9], C;
	}
	l.default = c;
}), 226);

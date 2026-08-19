__d("WAWebChatContextMenuItemUnlock.react", [
	"fbt",
	"WAWebChatLockCodeModal.react",
	"WAWebWamEnumActionEntryPoint",
	"WDSIconWdsIcChatlockUnlockedOutline.react",
	"WDSMenuItem.react",
	"react",
	"useWAWebModelValues",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.chat, n = o("useWAWebModelValues").useModelValues(t, ["isLocked"]), a = n.isLocked, i = r("useWAWebUIM")(), l = function() {
			o("WAWebChatLockCodeModal.react").promptAndUnlockChat(t, { entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.CHAT_CONTEXT_MENU }), i == null || i.requestDismiss();
		};
		if (!a) return null;
		var c = s._(
			/*BTDS*/
			""
		);
		return u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconWdsIcChatlockUnlockedOutline.react"),
			title: c,
			onPress: l,
			testid: "mi-chatunlock",
			closeMenuOnPress: !1
		}, "ChatUnlockMenuItem");
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);

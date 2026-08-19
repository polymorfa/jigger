__d("WAWebChatContextMenuItemUnlock.react", [
	"fbt",
	"WAWebChatLockCodeModal.react",
	"WAWebWamEnumActionEntryPoint",
	"WDSIconWdsIcChatlockUnlockedOutline.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(7), n = e.chat, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = ["isLocked"], t[0] = a) : a = t[0];
		var i = o("useWAWebModelValues").useModelValues(n, a), l = i.isLocked, c = r("useWAWebUIM")(), d;
		t[1] !== n || t[2] !== c ? (d = function() {
			o("WAWebChatLockCodeModal.react").promptAndUnlockChat(n, { entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.CHAT_CONTEXT_MENU }), c == null || c.requestDismiss();
		}, t[1] = n, t[2] = c, t[3] = d) : d = t[3];
		var m = d;
		if (!l) return null;
		var p;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[4] = p) : p = t[4];
		var _ = p, f;
		return t[5] !== m ? (f = u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconWdsIcChatlockUnlockedOutline.react"),
			title: _,
			onPress: m,
			testid: "mi-chatunlock",
			closeMenuOnPress: !1
		}, "ChatUnlockMenuItem"), t[5] = m, t[6] = f) : f = t[6], f;
	}
	l.default = c;
}), 226);

__d("WAWebConversationMsgsMenuV2.react", [
	"WAWebABProps",
	"WAWebChatGetters",
	"WAWebCmd",
	"WAWebContactMenuDropdown.react",
	"WAWebConversationMenus",
	"WAWebConversationMsgsUtils",
	"WDSMenu.react",
	"react",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useMemo, m = u.useRef;
	function p(e) {
		var t = e.chat, n = e.onCancelSelect, a = e.onMenuReady, i = e.onSelect, l = e.scrollContainerRef, u = e.selectable, p = m(null);
		c(function() {
			return p.current = l, function() {
				o("WAWebABProps").getABPropConfigValue("web_detached_dom_unmount_cleanup") && (p.current = null);
			};
		}, [l]);
		var _ = d(function() {
			function e() {
				o("WAWebCmd").Cmd.chatSearch(t);
			}
			if (o("WAWebConversationMsgsUtils").isSimplifiedChatConversationMenuEnabled(t)) {
				var a = o("WAWebConversationMenus").hybridMenu({
					chat: t,
					onCancelSelect: n,
					onSelect: i,
					selectable: u
				});
				return s.jsx(r("WDSMenu.react"), { children: a });
			} else {
				if (o("WAWebChatGetters").getIsUser(t)) return s.jsx(r("WAWebContactMenuDropdown.react"), {
					chat: t,
					onSelectMessages: i,
					enableChatThreadLogging: !1,
					onSearchChat: e,
					container: l
				});
				if (o("WAWebChatGetters").getIsGroup(t)) {
					var c = s.jsx(o("WAWebConversationMenus").GroupMenu, {
						chat: t,
						container: l,
						onSelect: i,
						onSearchChat: e
					});
					return s.jsx(r("WDSMenu.react"), { children: c });
				} else if (o("WAWebChatGetters").getIsBroadcast(t)) {
					var d = o("WAWebConversationMenus").broadcastMenu(t);
					return s.jsx(r("WDSMenu.react"), { children: d });
				}
			}
			return null;
		}, [
			t,
			i,
			n,
			u,
			l
		]), f = r("useWDSMenu")({
			targetRef: p,
			menu: _,
			contextMenuArea: !0,
			enableUIM: !1
		}), g = f.menuPortal, h = f.openMenu;
		return c(function() {
			a(h);
		}, [h, a]), g;
	}
	p.displayName = p.name + " [from " + i.id + "]", l.ConversationMsgsMenuV2 = p;
}), 98);

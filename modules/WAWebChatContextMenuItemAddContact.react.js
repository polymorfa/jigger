__d("WAWebChatContextMenuItemAddContact.react", [
	"JSResourceForInteraction",
	"Promise",
	"WAWebAddContactLabel",
	"WAWebChatGetters",
	"WAWebContactGetters",
	"WAWebContactManagementGating",
	"WDSIconIcPersonAdd.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime",
	"useWAWebChatValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = r("JSResourceForInteraction")("WAWebContactEditUtils").__setRef("WAWebChatContextMenuItemAddContact.react"), d = r("JSResourceForInteraction")("WAWebContactLogging").__setRef("WAWebChatContextMenuItemAddContact.react"), m = r("JSResourceForInteraction")("WAWebContactUtils").__setRef("WAWebChatContextMenuItemAddContact.react");
	function p(t) {
		var a, i = o("react-compiler-runtime").c(6), l = t.chat, s;
		i[0] === Symbol.for("react.memo_cache_sentinel") ? (s = [o("WAWebChatGetters").getIsUser], i[0] = s) : s = i[0];
		var p = o("useWAWebChatValues").useChatValues(l.id, s), _ = p[0], f = l.contact;
		if (!_ || f == null) return null;
		var g = f.id, h = o("WAWebContactGetters").getIsMe(f), y = !!(o("WAWebContactGetters").getIsUser(f) && ((a = o("WAWebContactGetters").getName(f)) != null && a.length || f.isUsernameContact));
		if (!g.isRegularUser() || h || g.isIAS() || g.isCAPISupportAccount() || g.isSupportAccount() || y || !o("WAWebContactManagementGating").addContactChatListEnabled()) return null;
		var C;
		i[1] !== f ? (C = function() {
			(e || (e = n("Promise"))).all([
				c.load(),
				d.load(),
				m.load()
			]).then(function(e) {
				var t = e[0], n = e[1], r = e[2], o = t.openContactEditDrawer, a = n.ContactSourceType, i = r.getContactDataFromContactModel;
				o(i(f), a.ChatListMenu);
			});
		}, i[1] = f, i[2] = C) : C = i[2];
		var b = C, v;
		i[3] === Symbol.for("react.memo_cache_sentinel") ? (v = o("WAWebAddContactLabel").getAddToContactsLabel(), i[3] = v) : v = i[3];
		var S;
		return i[4] !== b ? (S = u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcPersonAdd.react"),
			title: v,
			onPress: b,
			testid: "mi-add-contact"
		}, "AddContact"), i[4] = b, i[5] = S) : S = i[5], S;
	}
	l.default = p;
}), 98);

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
	"useWAWebChatValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = r("JSResourceForInteraction")("WAWebContactEditUtils").__setRef("WAWebChatContextMenuItemAddContact.react"), d = r("JSResourceForInteraction")("WAWebContactLogging").__setRef("WAWebChatContextMenuItemAddContact.react"), m = r("JSResourceForInteraction")("WAWebContactUtils").__setRef("WAWebChatContextMenuItemAddContact.react");
	function p(t) {
		var a, i = t.chat, l = o("useWAWebChatValues").useChatValues(i.id, [o("WAWebChatGetters").getIsUser]), s = l[0], p = i.contact;
		if (!s || p == null) return null;
		var _ = p.id, f = o("WAWebContactGetters").getIsMe(p), g = !!(o("WAWebContactGetters").getIsUser(p) && ((a = o("WAWebContactGetters").getName(p)) != null && a.length || p.isUsernameContact));
		if (!_.isRegularUser() || f || _.isIAS() || _.isCAPISupportAccount() || _.isSupportAccount() || g || !o("WAWebContactManagementGating").addContactChatListEnabled()) return null;
		var h = function() {
			(e || (e = n("Promise"))).all([
				c.load(),
				d.load(),
				m.load()
			]).then(function(e) {
				var t = e[0].openContactEditDrawer, n = e[1].ContactSourceType, r = e[2].getContactDataFromContactModel;
				t(r(p), n.ChatListMenu);
			});
		};
		return u.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcPersonAdd.react"),
			title: o("WAWebAddContactLabel").getAddToContactsLabel(),
			onPress: h,
			testid: "mi-add-contact"
		}, "AddContact");
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);

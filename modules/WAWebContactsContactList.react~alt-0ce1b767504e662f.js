__d("WAWebContactsContactList.react", [
	"WAWebBoolFunc",
	"WAWebChatContactList.react",
	"WAWebChatEntryPoint",
	"WAWebChatlistUtils",
	"WAWebCmd",
	"WAWebL10NAccentFold",
	"WAWebPhoneNumberSearch",
	"react",
	"useWAWebFilteredContacts"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useRef;
	function m(e) {
		var t = e.flatListController, n = e.searchQuery, a = d(), i = r("useWAWebFilteredContacts")(), l = c(function() {
			if (!n || n.trim() === "") return i;
			var e = o("WAWebL10NAccentFold").accentFold(n), t = o("WAWebPhoneNumberSearch").numberSearch(e);
			return i.filter(function(n) {
				return n.searchMatchExact(e, t);
			});
		}, [i, n]), u = l(), m = u.length > 0, p = c(function(e, t) {
			o("WAWebChatlistUtils").openOrCreateLatestChat(t.id).then(function(e) {
				o("WAWebCmd").Cmd.openChatBottom({
					chat: e,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ContactsTab
				});
			});
		}, []);
		return s.jsx(s.Fragment, { children: m && s.jsx(r("WAWebChatContactList.react"), {
			ref: a,
			contacts: u,
			flatListController: t,
			onClick: p,
			showMe: !1,
			showBot: !1,
			showPersonGroupDivisionHeader: !1,
			contextEnabled: o("WAWebBoolFunc").returnTrue,
			searchText: n
		}, "contact-list") });
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);

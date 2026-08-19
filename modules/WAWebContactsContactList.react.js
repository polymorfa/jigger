__d("WAWebContactsContactList.react", [
	"WAWebBoolFunc",
	"WAWebChatContactList.react",
	"WAWebChatEntryPoint",
	"WAWebChatlistUtils",
	"WAWebCmd",
	"WAWebL10NAccentFold",
	"WAWebPhoneNumberSearch",
	"react",
	"react-compiler-runtime",
	"useWAWebFilteredContacts"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useRef;
	function m(e) {
		var t = o("react-compiler-runtime").c(12), n = e.flatListController, a = e.searchQuery, i = d(), l = r("useWAWebFilteredContacts")(), u;
		t[0] !== l || t[1] !== a ? (u = function() {
			if (!a || a.trim() === "") return l;
			var e = o("WAWebL10NAccentFold").accentFold(a), t = o("WAWebPhoneNumberSearch").numberSearch(e);
			return l.filter(function(n) {
				return n.searchMatchExact(e, t);
			});
		}, t[0] = l, t[1] = a, t[2] = u) : u = t[2];
		var c = u, m;
		t[3] !== c ? (m = c(), t[3] = c, t[4] = m) : m = t[4];
		var _ = m, f = _.length > 0, g = p, h;
		t[5] !== _ || t[6] !== n || t[7] !== f || t[8] !== a ? (h = f && s.jsx(r("WAWebChatContactList.react"), {
			ref: i,
			contacts: _,
			flatListController: n,
			onClick: g,
			showMe: !1,
			showBot: !1,
			showPersonGroupDivisionHeader: !1,
			contextEnabled: o("WAWebBoolFunc").returnTrue,
			searchText: a
		}, "contact-list"), t[5] = _, t[6] = n, t[7] = f, t[8] = a, t[9] = h) : h = t[9];
		var y;
		return t[10] !== h ? (y = s.jsx(s.Fragment, { children: h }), t[10] = h, t[11] = y) : y = t[11], y;
	}
	function p(e, t) {
		o("WAWebChatlistUtils").openOrCreateLatestChat(t.id).then(_);
	}
	function _(e) {
		o("WAWebCmd").Cmd.openChatBottom({
			chat: e,
			chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ContactsTab
		});
	}
	l.default = m;
}), 98);

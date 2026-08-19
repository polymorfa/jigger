__d("WAWebDialerContactWithCallButtons.react", [
	"WAWebCallButtonsSurface",
	"WAWebChatContact.react",
	"WAWebFindChatAction",
	"WAWebSingleSelection",
	"WAWebVoipCallButtonsLoadable",
	"WAWebWamEnumCallFromUi",
	"WAWebWamEnumLobbyEntryPointType",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState, m = o("WAWebChatContact.react").ContactFactory();
	function p(e) {
		var t = e.contact, n = e.onClick, a = d(null), i = a[0], l = a[1], u = new (r("WAWebSingleSelection"))([t], function(e) {
			return e.id.toString();
		});
		return c(function() {
			o("WAWebFindChatAction").findOrCreateLatestChat(t.id, "newChatFlow").then(function(e) {
				var t = e.chat;
				l(t);
			});
		}, [t]), s.jsx("div", {
			className: "x1n2onr6 xh8yej3",
			children: s.jsxs("div", {
				className: "x1n2onr6",
				children: [s.jsx(m, {
					active: u,
					contact: t,
					onClick: n,
					hideStatus: !1,
					waitIdle: !0,
					showMessageYourselfName: !1,
					isSearchResult: !0,
					showNotifyName: !0,
					truncateName: !0
				}), i && s.jsx("div", {
					className: "x10l6tqk xwa60dl x1cb1t30 xdg88n9 x1vjfegm x1y1aw1k xwib8y2 x78zum5 x6s0dn4",
					children: s.jsx(o("WAWebVoipCallButtonsLoadable").WAWebCallButtonsLoadable, {
						chat: i,
						surface: o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.IconOnly,
						callFromUI: o("WAWebWamEnumCallFromUi").CALL_FROM_UI.DIALER_CONTACT,
						lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED
					})
				})]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);

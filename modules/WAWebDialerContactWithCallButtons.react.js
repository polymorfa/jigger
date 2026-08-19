__d("WAWebDialerContactWithCallButtons.react", [
	"WAWebCallButtonsSurface",
	"WAWebChatContact.react",
	"WAWebFindChatAction",
	"WAWebSingleSelection",
	"WAWebVoipCallButtonsLoadable",
	"WAWebWamEnumCallFromUi",
	"WAWebWamEnumLobbyEntryPointType",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState, m = o("WAWebChatContact.react").ContactFactory();
	function p(e) {
		var t = o("react-compiler-runtime").c(17), n = e.contact, a = e.onClick, i = d(null), l = i[0], u = i[1], p;
		t[0] !== n ? (p = new (r("WAWebSingleSelection"))([n], _), t[0] = n, t[1] = p) : p = t[1];
		var f = p, g;
		t[2] !== n.id ? (g = function() {
			o("WAWebFindChatAction").findOrCreateLatestChat(n.id, "newChatFlow").then(function(e) {
				var t = e.chat;
				u(t);
			});
		}, t[2] = n.id, t[3] = g) : g = t[3];
		var h;
		t[4] !== n ? (h = [n], t[4] = n, t[5] = h) : h = t[5], c(g, h);
		var y, C;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (y = { className: "x1n2onr6 xh8yej3" }, C = { className: "x1n2onr6" }, t[6] = y, t[7] = C) : (y = t[6], C = t[7]);
		var b;
		t[8] !== n || t[9] !== a || t[10] !== f ? (b = s.jsx(m, {
			active: f,
			contact: n,
			onClick: a,
			hideStatus: !1,
			waitIdle: !0,
			showMessageYourselfName: !1,
			isSearchResult: !0,
			showNotifyName: !0,
			truncateName: !0
		}), t[8] = n, t[9] = a, t[10] = f, t[11] = b) : b = t[11];
		var v;
		t[12] !== l ? (v = l && s.jsx("div", {
			className: "x10l6tqk xwa60dl x1cb1t30 xdg88n9 x1vjfegm x1y1aw1k xwib8y2 x78zum5 x6s0dn4",
			children: s.jsx(o("WAWebVoipCallButtonsLoadable").WAWebCallButtonsLoadable, {
				chat: l,
				surface: o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.IconOnly,
				callFromUI: o("WAWebWamEnumCallFromUi").CALL_FROM_UI.DIALER_CONTACT,
				lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED
			})
		}), t[12] = l, t[13] = v) : v = t[13];
		var S;
		return t[14] !== b || t[15] !== v ? (S = s.jsx("div", babelHelpers.extends({}, y, { children: s.jsxs("div", babelHelpers.extends({}, C, { children: [b, v] })) })), t[14] = b, t[15] = v, t[16] = S) : S = t[16], S;
	}
	function _(e) {
		return e.id.toString();
	}
	l.default = p;
}), 98);

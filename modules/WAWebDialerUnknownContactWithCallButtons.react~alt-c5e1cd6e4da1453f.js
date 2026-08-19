__d("WAWebDialerUnknownContactWithCallButtons.react", [
	"WAWebCallButtonsSurface",
	"WAWebFindChatAction",
	"WAWebUnknownContactSection.react",
	"WAWebUsernameKeyVerificationFlow",
	"WAWebVoipCallButtonsLoadable",
	"WAWebWamEnumCallFromUi",
	"WAWebWamEnumLobbyEntryPointType",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState;
	function m(e) {
		var t = o("react-compiler-runtime").c(15), n = e.contactInfo, a = e.disableHeader, i = e.onUnknownContactClick, l = e.searchText, u = d(null), m = u[0], p = u[1], _;
		t[0] !== n.chat || t[1] !== n.triedKey || t[2] !== n.username || t[3] !== n.wid ? (_ = function() {
			var e = async function() {
				if (n.wid == null) {
					var e = await o("WAWebUsernameKeyVerificationFlow").usernameKeyVerificationFlow({
						username: n.username,
						initWithError: n.triedKey
					});
					if (e == null) return;
					var t = await o("WAWebFindChatAction").findOrCreateLatestChat(e, "newChatFlow"), r = t.chat;
					p(r);
				} else {
					var a, i = (a = n.chat) != null ? a : (await o("WAWebFindChatAction").findOrCreateLatestChat(n.wid, "newChatFlow")).chat;
					p(i);
				}
			};
			e();
		}, t[0] = n.chat, t[1] = n.triedKey, t[2] = n.username, t[3] = n.wid, t[4] = _) : _ = t[4];
		var f;
		t[5] !== n ? (f = [n], t[5] = n, t[6] = f) : f = t[6], c(_, f);
		var g;
		t[7] !== m ? (g = m != null ? s.jsx(o("WAWebVoipCallButtonsLoadable").WAWebCallButtonsLoadable, {
			chat: m,
			surface: o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.IconOnly,
			callFromUI: o("WAWebWamEnumCallFromUi").CALL_FROM_UI.DIALER_NON_CONTACT,
			lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED
		}) : null, t[7] = m, t[8] = g) : g = t[8];
		var h = g, y;
		return t[9] !== h || t[10] !== n || t[11] !== a || t[12] !== i || t[13] !== l ? (y = s.jsx(r("WAWebUnknownContactSection.react"), {
			contactInfo: n,
			disableHeader: a,
			extraDetail: h,
			onUnknownContactClick: i,
			searchText: l
		}), t[9] = h, t[10] = n, t[11] = a, t[12] = i, t[13] = l, t[14] = y) : y = t[14], y;
	}
	l.default = m;
}), 98);

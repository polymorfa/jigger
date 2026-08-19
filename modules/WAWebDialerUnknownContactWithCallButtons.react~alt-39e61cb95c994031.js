__d("WAWebDialerUnknownContactWithCallButtons.react", [
	"WAWebCallButtonsSurface",
	"WAWebFindChatAction",
	"WAWebUnknownContactSection.react",
	"WAWebUsernameKeyVerificationFlow",
	"WAWebVoipCallButtonsLoadable",
	"WAWebWamEnumCallFromUi",
	"WAWebWamEnumLobbyEntryPointType",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState;
	function m(e) {
		var t = e.contactInfo, n = e.disableHeader, a = e.onUnknownContactClick, i = e.searchText, l = d(null), u = l[0], m = l[1];
		c(function() {
			var e = async function() {
				if (t.wid == null) {
					var e = await o("WAWebUsernameKeyVerificationFlow").usernameKeyVerificationFlow({
						username: t.username,
						initWithError: t.triedKey
					});
					if (e == null) return;
					var n = await o("WAWebFindChatAction").findOrCreateLatestChat(e, "newChatFlow"), r = n.chat;
					m(r);
				} else {
					var a, i = (a = t.chat) != null ? a : (await o("WAWebFindChatAction").findOrCreateLatestChat(t.wid, "newChatFlow")).chat;
					m(i);
				}
			};
			e();
		}, [t]);
		var p = u != null ? s.jsx(o("WAWebVoipCallButtonsLoadable").WAWebCallButtonsLoadable, {
			chat: u,
			surface: o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.IconOnly,
			callFromUI: o("WAWebWamEnumCallFromUi").CALL_FROM_UI.DIALER_NON_CONTACT,
			lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED
		}) : null;
		return s.jsx(r("WAWebUnknownContactSection.react"), {
			contactInfo: t,
			disableHeader: n,
			extraDetail: p,
			onUnknownContactClick: a,
			searchText: i
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);

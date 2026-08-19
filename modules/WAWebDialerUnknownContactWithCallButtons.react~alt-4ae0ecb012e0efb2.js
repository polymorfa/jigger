__d("WAWebDialerUnknownContactWithCallButtons.react", [
	"WAWebCallButtonsSurface",
	"WAWebFindChatAction",
	"WAWebUnknownContactSection.react",
	"WAWebUsernameKeyVerificationFlow",
	"WAWebVoipCallButtonsLoadable",
	"WAWebWamEnumCallFromUi",
	"WAWebWamEnumLobbyEntryPointType",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState;
	function m(e) {
		var t = e.contactInfo, a = e.disableHeader, i = e.onUnknownContactClick, l = e.searchText, u = d(null), m = u[0], p = u[1];
		c(function() {
			var e = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					if (t.wid == null) {
						var e = yield o("WAWebUsernameKeyVerificationFlow").usernameKeyVerificationFlow({
							username: t.username,
							initWithError: t.triedKey
						});
						if (e == null) return;
						var n = yield o("WAWebFindChatAction").findOrCreateLatestChat(e, "newChatFlow"), r = n.chat;
						p(r);
					} else {
						var a, i = (a = t.chat) != null ? a : (yield o("WAWebFindChatAction").findOrCreateLatestChat(t.wid, "newChatFlow")).chat;
						p(i);
					}
				});
				return function() {
					return e.apply(this, arguments);
				};
			})();
			e();
		}, [t]);
		var _ = m != null ? s.jsx(o("WAWebVoipCallButtonsLoadable").WAWebCallButtonsLoadable, {
			chat: m,
			surface: o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.IconOnly,
			callFromUI: o("WAWebWamEnumCallFromUi").CALL_FROM_UI.DIALER_NON_CONTACT,
			lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED
		}) : null;
		return s.jsx(r("WAWebUnknownContactSection.react"), {
			contactInfo: t,
			disableHeader: a,
			extraDetail: _,
			onUnknownContactClick: i,
			searchText: l
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);

__d("WAWebDialerUnknownContactWithCallButtons.react", [
	"WAWebCallButtonsSurface",
	"WAWebFindChatAction",
	"WAWebUnknownContactSection.react",
	"WAWebUsernameKeyVerificationFlow",
	"WAWebVoipCallButtonsLoadable",
	"WAWebWamEnumCallFromUi",
	"WAWebWamEnumLobbyEntryPointType",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState;
	function m(e) {
		var t = o("react-compiler-runtime").c(15), a = e.contactInfo, i = e.disableHeader, l = e.onUnknownContactClick, u = e.searchText, m = d(null), p = m[0], _ = m[1], f;
		t[0] !== a.chat || t[1] !== a.triedKey || t[2] !== a.username || t[3] !== a.wid ? (f = function() {
			var e = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					if (a.wid == null) {
						var e = yield o("WAWebUsernameKeyVerificationFlow").usernameKeyVerificationFlow({
							username: a.username,
							initWithError: a.triedKey
						});
						if (e == null) return;
						var t = yield o("WAWebFindChatAction").findOrCreateLatestChat(e, "newChatFlow"), n = t.chat;
						_(n);
					} else {
						var r, i = (r = a.chat) != null ? r : (yield o("WAWebFindChatAction").findOrCreateLatestChat(a.wid, "newChatFlow")).chat;
						_(i);
					}
				});
				return function() {
					return e.apply(this, arguments);
				};
			})();
			e();
		}, t[0] = a.chat, t[1] = a.triedKey, t[2] = a.username, t[3] = a.wid, t[4] = f) : f = t[4];
		var g;
		t[5] !== a ? (g = [a], t[5] = a, t[6] = g) : g = t[6], c(f, g);
		var h;
		t[7] !== p ? (h = p != null ? s.jsx(o("WAWebVoipCallButtonsLoadable").WAWebCallButtonsLoadable, {
			chat: p,
			surface: o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.IconOnly,
			callFromUI: o("WAWebWamEnumCallFromUi").CALL_FROM_UI.DIALER_NON_CONTACT,
			lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED
		}) : null, t[7] = p, t[8] = h) : h = t[8];
		var y = h, C;
		return t[9] !== y || t[10] !== a || t[11] !== i || t[12] !== l || t[13] !== u ? (C = s.jsx(r("WAWebUnknownContactSection.react"), {
			contactInfo: a,
			disableHeader: i,
			extraDetail: y,
			onUnknownContactClick: l,
			searchText: u
		}), t[9] = y, t[10] = a, t[11] = i, t[12] = l, t[13] = u, t[14] = C) : C = t[14], C;
	}
	l.default = m;
}), 98);

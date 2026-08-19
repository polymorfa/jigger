__d("WAWebConversationDeprecatedLidChatBanner.react", [
	"fbt",
	"WALogger",
	"WAWebButton.react",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebComposeBoxActions",
	"WAWebConversationNewBanner.react",
	"WAWebFindChatAction",
	"WAWebRoundSendInvIcon.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react"));
	function d(e) {
		var t = o("react-compiler-runtime").c(6), n = e.latestLid, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s._(
			/*BTDS*/
			""
		), t[0] = a) : a = t[0];
		var i = a, l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[1] = l) : l = t[1];
		var u = l, d;
		if (t[2] !== n) {
			var _ = async function() {
				o("WAWebFindChatAction").findOrCreateLatestChat(n, "deprecatedLidOrPnChat").then(p).catch(m);
			};
			d = c.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
				onClick: _,
				icon: o("WAWebRoundSendInvIcon.react").RoundSendInvIcon,
				children: u
			}, "go_to_latest_lid_chat"), t[2] = n, t[3] = d;
		} else d = t[3];
		var f = d, g;
		return t[4] !== f ? (g = c.jsx(r("WAWebConversationNewBanner.react"), {
			primaryText: i,
			buttons: [f]
		}), t[4] = f, t[5] = g) : g = t[5], g;
	}
	function m() {
		o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[deprecated lid chat] find/create latest chat failed"]))).sendLogs("failed-to-find-or-create-latest-chat-from-deprecated-chat");
	}
	async function p(e) {
		var t = e.chat, n = await o("WAWebCmd").Cmd.openChatFromUnread({
			chat: t,
			chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.DeprecatedLidChatBanner
		});
		n && o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
	}
	l.default = d;
}), 226);

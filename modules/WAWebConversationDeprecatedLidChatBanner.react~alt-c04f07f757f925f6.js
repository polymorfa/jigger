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
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react"));
	function d(t) {
		var n = t.latestLid, a = s._(
			/*BTDS*/
			""
		), i = s._(
			/*BTDS*/
			""
		), l = async function() {
			o("WAWebFindChatAction").findOrCreateLatestChat(n, "deprecatedLidOrPnChat").then(async function(e) {
				var t = e.chat, n = await o("WAWebCmd").Cmd.openChatFromUnread({
					chat: t,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.DeprecatedLidChatBanner
				});
				n && o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
			}).catch(function() {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[deprecated lid chat] find/create latest chat failed"]))).sendLogs("failed-to-find-or-create-latest-chat-from-deprecated-chat");
			});
		}, u = c.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
			onClick: l,
			icon: o("WAWebRoundSendInvIcon.react").RoundSendInvIcon,
			children: i
		}, "go_to_latest_lid_chat");
		return c.jsx(r("WAWebConversationNewBanner.react"), {
			primaryText: a,
			buttons: [u]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

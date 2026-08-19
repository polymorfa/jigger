__d("WAWebChangeNumberNotificationBanner.react", [
	"fbt",
	"WAWebButton.react",
	"WAWebChatEntryPoint",
	"WAWebChatGetters",
	"WAWebChatSendMessages",
	"WAWebCmd",
	"WAWebComposeBoxActions",
	"WAWebContactCollection",
	"WAWebConversationBanner.react",
	"WAWebFindChatAction",
	"WAWebFrontendChatGetters",
	"WAWebFrontendContactGetters",
	"WAWebText_DONOTUSE.react",
	"WAWebWidFormat",
	"nullthrows",
	"react",
	"useWAWebChatValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useMemo;
	async function d(e, t) {
		var n = await o("WAWebFindChatAction").findOrCreateLatestChat(e, "changeNumberNotificationClick"), r = n.chat;
		r.changeNumberOldJid || (r.changeNumberOldJid = t), r.changeNumberNewJid = void 0, o("WAWebCmd").Cmd.openChatFromUnread({
			chat: r,
			chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NumberChangeNotificationBanner
		}).then(function(e) {
			e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(r);
		});
	}
	function m(e) {
		var t = e.chat, n = e.ref, a = e.xstyle, i = o("useWAWebChatValues").useChatValues(t.id, [
			o("WAWebChatGetters").getChangeNumberOldJid,
			o("WAWebChatGetters").getChangeNumberNewJid,
			o("WAWebChatGetters").getId
		]), l = i[0], m = i[1], p = i[2], _ = function() {
			var e = p;
			d(r("nullthrows")(m), e);
		}, f = function() {
			o("WAWebChatSendMessages").sendDismissChangeNumber(t);
		}, g = l === void 0 && m !== void 0, h = l !== void 0 && m === void 0, y = c(function() {
			var e = l || p, t = o("WAWebContactCollection").ContactCollection.get(e), n = t != null && (o("WAWebFrontendContactGetters").getIsMyContact(t) || t != null && t.id.isLid()) ? o("WAWebFrontendContactGetters").getFormattedName(t) : o("WAWebWidFormat").widToFormattedUser(e);
			return h ? s._(
				/*BTDS*/
				"",
				[s._param("name", n)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("name", n)]
			);
		}, [
			l,
			p,
			h
		]), C = g ? u.jsx("div", {
			className: "x1bc76pt",
			children: u.jsx(o("WAWebButton.react").Button, {
				onClick: _,
				type: "plain-white",
				nowrap: !0,
				children: s._(
					/*BTDS*/
					""
				)
			})
		}) : null;
		return u.jsx(r("WAWebConversationBanner.react"), {
			ref: n,
			onClose: f,
			xstyle: a,
			children: u.jsxs("div", {
				className: "x78zum5 x6s0dn4",
				children: [u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
					theme: "plain",
					className: "x1iyjqo2 xhslqc4",
					children: y
				}), C]
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = o("useWAWebChatValues").useChatValues(e.id, [o("WAWebFrontendChatGetters").getShowChangeNumberNotification]), n = t[0];
		return n;
	}
	l.onChangeNumberNotificationClick = d, l.ChangeNumberNotificationBanner = m, l.useChangeNumberNotificationBanner = p;
}), 226);

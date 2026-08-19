__d("WAWebMarkUnreadMenuItem.react", [
	"fbt",
	"WAWebChatRefreshedIcon.react",
	"WDSIconIcUnread.react",
	"WDSMenuItem.react",
	"react",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.disabled, n = o("useWAWebModelValues").useModelValues(e.chat, ["unreadCount"]), a = e.onMarkUnread.bind(null, !n.unreadCount);
		return u.jsx(r("WDSMenuItem.react"), {
			Icon: n.unreadCount ? o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon : r("WDSIconIcUnread.react"),
			title: n.unreadCount ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			onPress: a,
			testid: "mi-mark-as",
			disabled: t
		}, "MarkUnreadMenuItem");
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);

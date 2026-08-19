__d("WAWebGroupCatchUpButton.react", [
	"fbt",
	"WAWebChatUnreadCount.react",
	"WAWebJumpToButtons.stylex",
	"WAWebMentionsRefreshedIcon.react",
	"WAWebTabOrder",
	"WAWebUnstyledButton.react",
	"WAWebVelocityTransitionGroup",
	"fbs",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { padding10: {
		paddingTop: "x889kno",
		paddingInlineEnd: "x2vl965",
		paddingBottom: "x1a8lsjc",
		paddingInlineStart: "xe2zdcy",
		$$css: !0
	} };
	function d(e) {
		var t = e.handleJumpToMention, n = e.unreadMentionCount, a = e.xstyle, i = r("fbs")._(
			/*BTDS*/
			"",
			[r("fbs")._plural(n, "count")]
		);
		return u.jsxs(r("WAWebUnstyledButton.react"), {
			xstyle: [
				o("WAWebJumpToButtons.stylex").styles.incomingRefreshed,
				c.padding10,
				a
			],
			dataTab: o("WAWebTabOrder").TAB_ORDER.MESSAGE_LIST_SCROLL_BUTTON,
			onClick: t,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: [u.jsx(o("WAWebMentionsRefreshedIcon.react").MentionsRefreshedIcon, {
				xstyle: o("WAWebJumpToButtons.stylex").styles.iconColor,
				width: 24,
				height: 24
			}), u.jsx(r("WAWebVelocityTransitionGroup"), {
				transitionName: "pop",
				xstyle: o("WAWebJumpToButtons.stylex").styles.unreadRefreshed,
				children: u.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
					count: n,
					ariaLabel: i.toString(),
					theme: o("WAWebChatUnreadCount.react").UnreadCountTheme.ChatThread
				})
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

__d("WAWebGroupCatchUpButton.react", [
	"fbt",
	"WAWebChatUnreadCount.react",
	"WAWebJumpToButtons.stylex",
	"WAWebMentionsRefreshedIcon.react",
	"WAWebTabOrder",
	"WAWebUnstyledButton.react",
	"WAWebVelocityTransitionGroup",
	"fbs",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { padding10: {
		paddingTop: "x889kno",
		paddingInlineEnd: "x2vl965",
		paddingBottom: "x1a8lsjc",
		paddingInlineStart: "xe2zdcy",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(15), n = e.handleJumpToMention, a = e.unreadMentionCount, i = e.xstyle, l;
		t[0] !== a ? (l = r("fbs")._(
			/*BTDS*/
			"",
			[r("fbs")._plural(a, "count")]
		), t[0] = a, t[1] = l) : l = t[1];
		var d = l, m;
		t[2] !== i ? (m = [
			o("WAWebJumpToButtons.stylex").styles.incomingRefreshed,
			c.padding10,
			i
		], t[2] = i, t[3] = m) : m = t[3];
		var p, _;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), _ = u.jsx(o("WAWebMentionsRefreshedIcon.react").MentionsRefreshedIcon, {
			xstyle: o("WAWebJumpToButtons.stylex").styles.iconColor,
			width: 24,
			height: 24
		}), t[4] = p, t[5] = _) : (p = t[4], _ = t[5]);
		var f;
		t[6] !== d ? (f = d.toString(), t[6] = d, t[7] = f) : f = t[7];
		var g;
		t[8] !== f || t[9] !== a ? (g = u.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "pop",
			xstyle: o("WAWebJumpToButtons.stylex").styles.unreadRefreshed,
			children: u.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
				count: a,
				ariaLabel: f,
				theme: o("WAWebChatUnreadCount.react").UnreadCountTheme.ChatThread
			})
		}), t[8] = f, t[9] = a, t[10] = g) : g = t[10];
		var h;
		return t[11] !== n || t[12] !== m || t[13] !== g ? (h = u.jsxs(r("WAWebUnstyledButton.react"), {
			xstyle: m,
			dataTab: o("WAWebTabOrder").TAB_ORDER.MESSAGE_LIST_SCROLL_BUTTON,
			onClick: n,
			"aria-label": p,
			children: [_, g]
		}), t[11] = n, t[12] = m, t[13] = g, t[14] = h) : h = t[14], h;
	}
	l.default = d;
}), 226);

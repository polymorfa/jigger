__d("WAWebMsgPreview.story", [
	"WAWebChatPreferenceCollection",
	"WAWebMessageContainer.react",
	"WAWebMsgPreview.react",
	"WAWebShowroomUtils",
	"WAWebWrapperSystemBubble.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u() {
		return s.jsx(r("WAWebMsgPreview.react"), {
			chatPreference: r("WAWebChatPreferenceCollection").assertGet("defaultPreference"),
			children: s.jsx(r("WAWebMessageContainer.react"), {
				isSentByMe: !0,
				children: s.jsx("div", {
					style: {
						padding: "12px 18px",
						display: "inline-block"
					},
					children: "this is a message"
				})
			})
		});
	}
	u.displayName = u.name + " [from " + i.id + "]";
	function c(e) {
		return s.jsx(r("WAWebMsgPreview.react"), {
			chatPreference: r("WAWebChatPreferenceCollection").assertGet("defaultPreference"),
			children: s.jsx(r("WAWebWrapperSystemBubble.react"), {
				theme: e,
				children: "this is an intentionally long system message so it fills up its container"
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	var d = {
		storyName: "WAWebMsgPreview",
		component: r("WAWebMsgPreview.react"),
		description: "\n        A container for single message to be shown out of conversation.\n\n        This is used in message info drawers.\n\n        MsgPreview respects system-wide setting for chat wallpaper/default wallpaper.\n    ",
		examples: [
			function() {
				return u();
			},
			{
				templateStyle: o("WAWebShowroomUtils").mediumPreview,
				example: function() {
					return c();
				},
				title: "System message is used for announcements and dates",
				description: "By default it follows the message styles (padding, etc.)"
			},
			{
				templateStyle: o("WAWebShowroomUtils").mediumPreview,
				example: function() {
					return c("sticky");
				},
				title: "System message with \"sticky\" theme",
				description: "When used as a sticky marker, padding might be disabled using <code>theme=\"sticky\"</code> prop."
			}
		]
	}, m = d;
	l.default = m;
}), 98);

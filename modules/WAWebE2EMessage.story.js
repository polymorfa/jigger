__d("WAWebE2EMessage.story", [
	"WAWebChat.react",
	"WAWebPrivacyNarrativeE2EMessage.react",
	"WAWebShowroomUtils",
	"WAWebWamEnumPrivacyHighlightSurfaceEnum",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		e2eMessageContainer: {
			color: "xthy82k",
			$$css: !0
		},
		e2eMessageIcon: {
			fill: "xsqfwrn",
			$$css: !0
		}
	}, c = {
		storyName: "WAWebE2EMessage",
		component: o("WAWebPrivacyNarrativeE2EMessage.react").E2eMessage,
		description: "The component <E2eMessage/> will display an arbitrary text with a locker icon",
		examples: [
			{
				templateStyle: o("WAWebShowroomUtils").compactPreview,
				example: function() {
					return s.jsx(o("WAWebPrivacyNarrativeE2EMessage.react").E2eMessage, {
						highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.GOLDEN_BOX_CONTACT,
						xstyle: u.e2eMessageContainer,
						iconXstyle: u.e2eMessageIcon,
						text: "Lorem ipsum dolor",
						testid: "e2e-message-example-small"
					});
				},
				title: "<E2eMessage/> with a small text"
			},
			{
				templateStyle: o("WAWebShowroomUtils").compactPreview,
				example: function() {
					return s.jsx(o("WAWebPrivacyNarrativeE2EMessage.react").E2eMessage, {
						highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.GOLDEN_BOX_CONTACT,
						xstyle: u.e2eMessageContainer,
						iconXstyle: u.e2eMessageIcon,
						testid: "e2e-message-example-large",
						text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar luctus leo nec fringilla. Donec vehicula mattis felis, eget consequat sapien dictum id. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					});
				},
				title: "<E2eMessage/> with a large text"
			},
			{
				templateStyle: o("WAWebShowroomUtils").compactPreview,
				example: function() {
					return s.jsxs("div", {
						className: "x1280gxy x1anpbxc x14z9mp xyorhqc x1lziwak",
						children: [
							s.jsx(o("WAWebChat.react").Chat, { chat: o("WAWebShowroomUtils").getRandomChat() }),
							s.jsx(o("WAWebChat.react").Chat, { chat: o("WAWebShowroomUtils").getRandomChat() }),
							s.jsx(o("WAWebChat.react").Chat, { chat: o("WAWebShowroomUtils").getRandomChat() }),
							s.jsx(o("WAWebPrivacyNarrativeE2EMessage.react").E2eMessageChatList, {})
						]
					});
				},
				title: "<E2eMessageChatList> component to be displayed at the end of our Chat list."
			},
			{
				templateStyle: o("WAWebShowroomUtils").compactPreview,
				example: function() {
					return s.jsx("div", {
						className: "x1280gxy x1anpbxc x14z9mp xyorhqc x1lziwak",
						children: s.jsx(o("WAWebPrivacyNarrativeE2EMessage.react").E2eMessageStatusList, {})
					});
				},
				title: "<E2eMessageStatusList> component to be displayed at the end of our Status list."
			}
		]
	}, d = c;
	l.default = d;
}), 98);

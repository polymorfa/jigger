__d("WAWebChat.story", [
	"WAWebChat.react",
	"WAWebShowroomUtils",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		storyName: "WAWebChat",
		component: o("WAWebChat.react").Chat,
		description: "Chat is a wrapper on Cell.",
		descriptionNode: s.jsxs("div", { children: [
			s.jsx("p", { children: "Chat is a wrapper on Cell. It's main features are:" }),
			s.jsxs("ul", { children: [
				s.jsx("li", { children: "Extract chat data to display (photo, title, last message, timestamp, etc)" }),
				s.jsx("li", { children: "Create and handle chat context menu" }),
				s.jsx("li", { children: "Handle drag-n-drop functions" })
			] }),
			s.jsx("p", { children: "See also: Cell, CellFrame." })
		] }),
		examples: [{
			templateStyle: o("WAWebShowroomUtils").compactPreview,
			example: function() {
				return s.jsxs(s.Fragment, { children: [
					s.jsx(o("WAWebChat.react").Chat, { chat: o("WAWebShowroomUtils").getRandomChat() }),
					s.jsx(o("WAWebChat.react").Chat, { chat: o("WAWebShowroomUtils").getRandomChat() }),
					s.jsx(o("WAWebChat.react").Chat, { chat: o("WAWebShowroomUtils").getRandomChat() })
				] });
			},
			title: "Basic list of chats"
		}, {
			templateStyle: o("WAWebShowroomUtils").compactPreview,
			example: function() {
				var e = o("WAWebShowroomUtils").getRandomGroup(), t = o("WAWebShowroomUtils").getRandomGroup();
				return !e || !t ? s.jsx("span", { children: "No groups found" }) : s.jsxs(s.Fragment, { children: [s.jsx(o("WAWebChat.react").Chat, {
					chat: e,
					noContext: !0,
					mode: "INFO"
				}), s.jsx(o("WAWebChat.react").Chat, {
					chat: t,
					noContext: !0,
					mode: "INFO"
				})] });
			},
			title: "List of groups with participants",
			description: "Context menu disabled by <code>noContext</code> prop."
		}]
	};
	l.default = u;
}), 98);

__d("WAWebSectionHeader.story", [
	"WAWebChat.react",
	"WAWebChatCollection",
	"WAWebChatContact.react",
	"WAWebSectionHeader.react",
	"WAWebShowroomStoryExample.react",
	"WAWebShowroomUtils",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = function() {
		var e = o("WAWebShowroomUtils").getRandomContact(), t = o("WAWebShowroomUtils").getRandomContact(), n = o("WAWebChatCollection").ChatCollection.toArray(), a = n[Math.floor(Math.random() * n.length)], i = n[Math.floor(Math.random() * n.length)], l = {
			example: function() {
				return s.jsxs(s.Fragment, { children: [
					s.jsx(r("WAWebSectionHeader.react"), { header: "Contacts" }),
					s.jsx(o("WAWebChatContact.react").Contact, { contact: e }),
					s.jsx(o("WAWebChatContact.react").Contact, { contact: t }),
					a != null && i != null && s.jsxs(s.Fragment, { children: [
						s.jsx(r("WAWebSectionHeader.react"), { header: "Chats" }),
						s.jsx(o("WAWebChat.react").Chat, {
							chat: a,
							mode: o("WAWebChat.react").Mode.LAST
						}),
						s.jsx(o("WAWebChat.react").Chat, {
							chat: i,
							mode: o("WAWebChat.react").Mode.LAST
						})
					] })
				] });
			},
			title: "In context of a list",
			description: "This is the most frequent use of this component."
		};
		return s.jsx(r("WAWebShowroomStoryExample.react"), { example: l });
	}, c = {
		storyName: "WAWebSectionHeader",
		component: r("WAWebSectionHeader.react"),
		description: "\n        SectionHeaders are used in lists that are divided into multiple sections (a list that contains groups/contacts/chats, alphabetically sorted, etc).\n    ",
		examples: [{
			example: function() {
				return s.jsx(r("WAWebSectionHeader.react"), { header: "Chats" });
			},
			title: "Default",
			description: "\n                SectionHeader without the list.\n\n                <b>Note:</b> White\n                    background is included with the component.\n            "
		}, function() {
			return u();
		}]
	};
	l.default = c;
}), 98);

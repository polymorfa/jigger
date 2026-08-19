__d("WAWebChatContact.story", [
	"WAWebChatContact.react",
	"WAWebShowroomUtils",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		storyName: "WAWebChatContact",
		component: o("WAWebChatContact.react").Contact,
		description: "Contact is a wrapper on Cell.",
		descriptionNode: s.jsxs("div", { children: [
			s.jsx("p", { children: "Contact is a wrapper on Cell. It's main features are:" }),
			s.jsxs("ul", { children: [s.jsx("li", { children: "Extract contact data for display (photo, name, status, etc)" }), s.jsx("li", { children: "Control contact context menu" })] }),
			s.jsx("p", { children: "See also: Cell, CellFrame, Tag." })
		] }),
		examples: [{
			templateStyle: o("WAWebShowroomUtils").compactPreview,
			example: function() {
				return s.jsxs(s.Fragment, { children: [
					s.jsx(o("WAWebChatContact.react").Contact, { contact: o("WAWebShowroomUtils").getRandomContact() }),
					s.jsx(o("WAWebChatContact.react").Contact, { contact: o("WAWebShowroomUtils").getRandomContact() }),
					s.jsx(o("WAWebChatContact.react").Contact, { contact: o("WAWebShowroomUtils").getRandomContact() })
				] });
			},
			title: "Basic list of contacts"
		}, {
			templateStyle: o("WAWebShowroomUtils").compactPreview,
			example: function() {
				return s.jsxs(s.Fragment, { children: [s.jsx(o("WAWebChatContact.react").Contact, {
					contact: o("WAWebShowroomUtils").getRandomContact(),
					admin: !0
				}), s.jsx(o("WAWebChatContact.react").Contact, {
					contact: o("WAWebShowroomUtils").getRandomContact(),
					isPendingParticipant: !0
				})] });
			},
			title: "Tag"
		}]
	};
	l.default = u;
}), 98);

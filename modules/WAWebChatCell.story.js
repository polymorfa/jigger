__d("WAWebChatCell.story", [
	"WAWebBoolFunc",
	"WAWebChatCell.react",
	"WAWebDetailImage.react",
	"WAWebShowroomUtils",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		storyName: "WAWebChatCell",
		component: r("WAWebChatCell.react"),
		description: "Cell is a wrapper on CellFrame.",
		descriptionNode: s.jsxs("div", { children: [
			s.jsx("p", { children: "Cell is a wrapper on CellFrame. It's main features are:" }),
			s.jsxs("ul", { children: [
				s.jsx("li", { children: "Reaction to hover (mouseEnter/mouseOut events)" }),
				s.jsx("li", { children: "Context menu handling (showing context menu icon on hover etc)" }),
				s.jsx("li", { children: "Additional checks on props (e.g. convert string provided as primary element to EmojiText for correct display)" })
			] }),
			s.jsx("p", { children: "Cell is used as a basis for Chat, Contact and StatusCell." }),
			s.jsx("p", { children: "Cell is built on top of CellFrame and accepts all its props and themes." }),
			s.jsx("p", { children: s.jsx("strong", { children: "Examples show only cases specific to Cell, for visual themes see CellFrame!" }) })
		] }),
		examples: [
			{
				templateStyle: o("WAWebShowroomUtils").compactPreview,
				example: function() {
					var e = o("WAWebShowroomUtils").getRandomGroup(), t = o("WAWebShowroomUtils").getRandomGroup();
					return !e || !t ? s.jsx("span", { children: "No groups found" }) : s.jsxs(s.Fragment, { children: [
						s.jsx(r("WAWebChatCell.react"), {
							image: s.jsx(o("WAWebDetailImage.react").DetailImage, { id: e.id }),
							primary: e.formattedTitle,
							secondary: "Contact: Recent message text, will be ellipsified if very long",
							contextEnabled: o("WAWebBoolFunc").returnTrue,
							onContext: function() {
								return o("WAWebShowroomUtils").showroomAlert("context clicked");
							}
						}),
						s.jsx(r("WAWebChatCell.react"), {
							image: s.jsx(o("WAWebDetailImage.react").DetailImage, { id: t.id }),
							primary: t.formattedTitle,
							secondary: "Another recent message",
							contextEnabled: o("WAWebBoolFunc").returnTrue,
							onContext: function() {
								return o("WAWebShowroomUtils").showroomAlert("context clicked");
							}
						}),
						s.jsx(r("WAWebChatCell.react"), {
							image: s.jsx(o("WAWebDetailImage.react").DetailImage, { id: o("WAWebShowroomUtils").getRandomWid() }),
							primary: "👾 Long chat name 😁 This needs to be ellipsified on most not super wide displays",
							secondary: "Recent message here",
							contextEnabled: o("WAWebBoolFunc").returnTrue,
							onContext: function() {
								return o("WAWebShowroomUtils").showroomAlert("context clicked");
							}
						})
					] });
				},
				title: "List of chats",
				description: "Enabled context menu and provide a basic callback (right click also works).\n\n                Note that in item #3 the title is converted from a string to EmojiText (emoji substituted with correct WhatsApp emoji) and ellipsified."
			},
			{
				templateStyle: o("WAWebShowroomUtils").compactPreview,
				example: function() {
					var e = o("WAWebShowroomUtils").getRandomGroup();
					return e ? s.jsx(r("WAWebChatCell.react"), {
						image: s.jsx(o("WAWebDetailImage.react").DetailImage, { id: e.id }),
						primary: e.formattedTitle,
						secondary: "Contact: Recent message text, will be ellipsified if very long",
						contextEnabled: o("WAWebBoolFunc").returnFalse,
						pendingAction: 1
					}) : s.jsx("span", { children: "No groups found" });
				},
				title: "Pending action spinner"
			},
			{
				templateStyle: o("WAWebShowroomUtils").compactPreview,
				example: function() {
					var e = o("WAWebShowroomUtils").getRandomGroup();
					return e ? s.jsx(r("WAWebChatCell.react"), {
						image: s.jsx(o("WAWebDetailImage.react").DetailImage, { id: e.id }),
						primary: "My test group",
						secondary: "This message is a test message to show text highlighting",
						contextEnabled: o("WAWebBoolFunc").returnFalse,
						searchText: "test"
					}) : s.jsx("span", { children: "No groups found" });
				},
				title: "Text highlighting"
			}
		]
	};
	l.default = u;
}), 98);

__d("WAWebNewsletterConversationPanelHeader.story", [
	"WAWebChatModel",
	"WAWebCommonNewsletterEnums",
	"WAWebNewsletterConversationPanelHeader.react",
	"WAWebNewsletterMetadataModel",
	"WAWebWidFactory",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = new (o("WAWebChatModel")).Chat({
		id: o("WAWebWidFactory").createWid("1234@newsletter"),
		muteExpiration: -1
	}), c = new (o("WAWebChatModel")).Chat({
		id: o("WAWebWidFactory").createWid("12345@newsletter"),
		muteExpiration: 0
	}), d = new (o("WAWebChatModel")).Chat({ id: o("WAWebWidFactory").createWid("123456@newsletter") }), m = new (o("WAWebNewsletterMetadataModel")).NewsletterMetadata({
		id: d.id,
		membershipType: o("WAWebCommonNewsletterEnums").NewsletterMembershipType == null ? void 0 : o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest
	});
	d.newsletterMetadata = m;
	var p = {
		storyName: "WAWebNewsletterConversationPanelHeader",
		component: r("WAWebNewsletterConversationPanelHeader.react"),
		description: "Header component for newsletter chats",
		examples: [
			{
				example: function() {
					return r("WAWebNewsletterConversationPanelHeader.react") != null ? s.jsx(r("WAWebNewsletterConversationPanelHeader.react"), { chat: u }) : null;
				},
				title: "Member, muted"
			},
			{
				example: function() {
					return r("WAWebNewsletterConversationPanelHeader.react") != null ? s.jsx(r("WAWebNewsletterConversationPanelHeader.react"), { chat: c }) : null;
				},
				title: "Member, unmuted"
			},
			{
				example: function() {
					return r("WAWebNewsletterConversationPanelHeader.react") != null ? s.jsx(r("WAWebNewsletterConversationPanelHeader.react"), { chat: d }) : null;
				},
				title: "Guest"
			}
		]
	};
	l.default = p;
}), 98);

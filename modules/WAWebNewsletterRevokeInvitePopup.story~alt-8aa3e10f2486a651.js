__d("WAWebNewsletterRevokeInvitePopup.story", [
	"WAWebButton.react",
	"WAWebContactCollection",
	"WAWebModalManager",
	"WAWebNewsletterCollection",
	"WAWebNewsletterRevokeInvitePopup.react",
	"WAWebShowroomUtils",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = r("WAWebNewsletterCollection").toArray()[Math.round(Math.random() * (r("WAWebNewsletterCollection").length - 1))];
	function c() {
		return s.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
			onClick: function() {
				o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebNewsletterRevokeInvitePopup.react").NewsletterRevokeInvitePopupWithNewsletterInformation, {
					chat: u,
					contact: o("WAWebContactCollection").ContactCollection.assertGet(o("WAWebShowroomUtils").getRandomContactWithImage())
				}));
			},
			children: "Open Modal"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	var d = {
		storyName: "WAWebNewsletterRevokeInvitePopup",
		component: o("WAWebNewsletterRevokeInvitePopup.react").NewsletterRevokeInvitePopupWithNewsletterInformation,
		description: "The revoke invite popup when you click on a channel admin invite",
		examples: [{
			example: function() {
				return s.jsx(c, {});
			},
			title: "Popup"
		}]
	};
	l.default = d;
}), 98);

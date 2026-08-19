__d("WAWebNewsletterCouldNotAcceptInvitePopup.story", [
	"Promise",
	"WAWebButton.react",
	"WAWebModalManager",
	"WAWebNewsletterErrorPopups.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react"));
	function c() {
		return u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
			onClick: function() {
				o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebNewsletterErrorPopups.react").NewsletterCouldNotAcceptInvitePopup, { onOK: function() {
					return (e || (e = n("Promise"))).resolve();
				} }));
			},
			children: "Error Accepting Invite Popup"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	var d = {
		storyName: "WAWebNewsletterCouldNotAcceptInvitePopup",
		component: o("WAWebNewsletterErrorPopups.react").NewsletterCouldNotAcceptInvitePopup,
		description: "The error popup when you try to accept an invite but it fails",
		examples: [{
			example: function() {
				return u.jsx(c, {});
			},
			title: "Could not accept invite popup"
		}]
	};
	l.default = d;
}), 98);

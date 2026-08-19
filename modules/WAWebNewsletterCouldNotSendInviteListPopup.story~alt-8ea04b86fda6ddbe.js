__d("WAWebNewsletterCouldNotSendInviteListPopup.story", [
	"WAWebButton.react",
	"WAWebContactCollection",
	"WAWebModalManager",
	"WAWebNewsletterErrorPopups.react",
	"WAWebNoop",
	"WAWebShowroomUtils",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = [
		o("WAWebContactCollection").ContactCollection.get(o("WAWebShowroomUtils").getRandomContactWithImage()),
		o("WAWebContactCollection").ContactCollection.get(o("WAWebShowroomUtils").getRandomContactWithImage()),
		o("WAWebContactCollection").ContactCollection.get(o("WAWebShowroomUtils").getRandomContactWithImage()),
		o("WAWebContactCollection").ContactCollection.get(o("WAWebShowroomUtils").getRandomContactWithImage()),
		o("WAWebContactCollection").ContactCollection.get(o("WAWebShowroomUtils").getRandomContactWithImage()),
		o("WAWebContactCollection").ContactCollection.get(o("WAWebShowroomUtils").getRandomContactWithImage())
	].filter(Boolean);
	function c() {
		return s.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
			onClick: function() {
				o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebNewsletterErrorPopups.react").NewsletterCouldNotSendInviteListPopup, {
					numberOfSuccessfulInvites: 0,
					contactList: u,
					onOk: r("WAWebNoop")
				}));
			},
			children: "Open Modal (with 0 successful invites)"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d() {
		return s.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
			onClick: function() {
				o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebNewsletterErrorPopups.react").NewsletterCouldNotSendInviteListPopup, {
					numberOfSuccessfulInvites: 4,
					contactList: u.slice(0, 3),
					onOk: r("WAWebNoop")
				}));
			},
			children: "Open Modal (exactly 3)"
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m() {
		return s.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
			onClick: function() {
				o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebNewsletterErrorPopups.react").NewsletterCouldNotSendInviteListPopup, {
					numberOfSuccessfulInvites: 4,
					contactList: u.slice(0, 4),
					onOk: r("WAWebNoop")
				}));
			},
			children: "Open Modal (exactly 4)"
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		return s.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
			onClick: function() {
				o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebNewsletterErrorPopups.react").NewsletterCouldNotSendInviteListPopup, {
					numberOfSuccessfulInvites: 4,
					contactList: u,
					onOk: r("WAWebNoop")
				}));
			},
			children: "Open Modal (more than 4)"
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	var _ = {
		storyName: "WAWebNewsletterCouldNotSendInviteListPopup",
		component: o("WAWebNewsletterErrorPopups.react").NewsletterCouldNotSendInviteListPopup,
		description: "The error popup when you try to send out admin invites and it fails for multiple admins",
		examples: [
			{
				example: function() {
					return s.jsx(c, {});
				},
				title: "Popup - 4 or more contacts, but 0 successful invites"
			},
			{
				example: function() {
					return s.jsx(d, {});
				},
				title: "Popup - exactly 3 contacts"
			},
			{
				example: function() {
					return s.jsx(m, {});
				},
				title: "Popup - exactly 4 contacts"
			},
			{
				example: function() {
					return s.jsx(p, {});
				},
				title: "Popup - more than 4 contacts"
			}
		]
	};
	l.default = _;
}), 98);

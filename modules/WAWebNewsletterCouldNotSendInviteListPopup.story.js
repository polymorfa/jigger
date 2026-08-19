__d("WAWebNewsletterCouldNotSendInviteListPopup.story", [
	"WAWebButton.react",
	"WAWebContactCollection",
	"WAWebModalManager",
	"WAWebNewsletterErrorPopups.react",
	"WAWebNoop",
	"WAWebShowroomUtils",
	"react",
	"react-compiler-runtime"
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
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
			onClick: d,
			children: "Open Modal (with 0 successful invites)"
		}), e[0] = t) : t = e[0], t;
	}
	function d() {
		o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebNewsletterErrorPopups.react").NewsletterCouldNotSendInviteListPopup, {
			numberOfSuccessfulInvites: 0,
			contactList: u,
			onOk: r("WAWebNoop")
		}));
	}
	function m() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
			onClick: p,
			children: "Open Modal (exactly 3)"
		}), e[0] = t) : t = e[0], t;
	}
	function p() {
		o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebNewsletterErrorPopups.react").NewsletterCouldNotSendInviteListPopup, {
			numberOfSuccessfulInvites: 4,
			contactList: u.slice(0, 3),
			onOk: r("WAWebNoop")
		}));
	}
	function _() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
			onClick: f,
			children: "Open Modal (exactly 4)"
		}), e[0] = t) : t = e[0], t;
	}
	function f() {
		o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebNewsletterErrorPopups.react").NewsletterCouldNotSendInviteListPopup, {
			numberOfSuccessfulInvites: 4,
			contactList: u.slice(0, 4),
			onOk: r("WAWebNoop")
		}));
	}
	function g() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
			onClick: h,
			children: "Open Modal (more than 4)"
		}), e[0] = t) : t = e[0], t;
	}
	function h() {
		o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebNewsletterErrorPopups.react").NewsletterCouldNotSendInviteListPopup, {
			numberOfSuccessfulInvites: 4,
			contactList: u,
			onOk: r("WAWebNoop")
		}));
	}
	var y = {
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
					return s.jsx(m, {});
				},
				title: "Popup - exactly 3 contacts"
			},
			{
				example: function() {
					return s.jsx(_, {});
				},
				title: "Popup - exactly 4 contacts"
			},
			{
				example: function() {
					return s.jsx(g, {});
				},
				title: "Popup - more than 4 contacts"
			}
		]
	};
	l.default = y;
}), 98);

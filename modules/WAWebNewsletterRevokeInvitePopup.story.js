__d("WAWebNewsletterRevokeInvitePopup.story", [
	"WAWebButton.react",
	"WAWebContactCollection",
	"WAWebModalManager",
	"WAWebNewsletterCollection",
	"WAWebNewsletterRevokeInvitePopup.react",
	"WAWebShowroomUtils",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = r("WAWebNewsletterCollection").toArray()[Math.round(Math.random() * (r("WAWebNewsletterCollection").length - 1))];
	function c() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
			onClick: d,
			children: "Open Modal"
		}), e[0] = t) : t = e[0], t;
	}
	function d() {
		o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebNewsletterRevokeInvitePopup.react").NewsletterRevokeInvitePopupWithNewsletterInformation, {
			chat: u,
			contact: o("WAWebContactCollection").ContactCollection.assertGet(o("WAWebShowroomUtils").getRandomContactWithImage())
		}));
	}
	var m = {
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
	l.default = m;
}), 98);

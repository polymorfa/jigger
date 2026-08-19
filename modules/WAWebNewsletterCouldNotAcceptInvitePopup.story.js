__d("WAWebNewsletterCouldNotAcceptInvitePopup.story", [
	"Promise",
	"WAWebButton.react",
	"WAWebModalManager",
	"WAWebNewsletterErrorPopups.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react"));
	function c() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
			onClick: d,
			children: "Error Accepting Invite Popup"
		}), e[0] = t) : t = e[0], t;
	}
	function d() {
		o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebNewsletterErrorPopups.react").NewsletterCouldNotAcceptInvitePopup, { onOK: m }));
	}
	function m() {
		return (e || (e = n("Promise"))).resolve();
	}
	var p = {
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
	l.default = p;
}), 98);

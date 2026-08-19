__d("WAWebReportNewsletterPostSpamButton.react", [
	"fbt",
	"WAWebFrontendMsgGetters",
	"WAWebModalManager",
	"WAWebReportNewsletterPostPopup.react",
	"WAWebSpamConstants",
	"WDSIconIcThumbDown.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.msg, n = o("WAWebFrontendMsgGetters").getChat(t), a = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebReportNewsletterPostPopup.react"), {
				chat: n,
				msg: t,
				spamFlow: o("WAWebSpamConstants").SpamFlow.MediaViewer
			}));
		};
		return u.jsx(r("WDSMenuItem.react"), {
			onPress: a,
			Icon: r("WDSIconIcThumbDown.react"),
			title: s._(
				/*BTDS*/
				""
			)
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);

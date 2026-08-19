__d("WAWebReportNewsletterPostSpamButton.react", [
	"fbt",
	"WAWebFrontendMsgGetters",
	"WAWebModalManager",
	"WAWebReportNewsletterPostPopup.react",
	"WAWebSpamConstants",
	"WDSIconIcThumbDown.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(8), n = e.msg, a;
		t[0] !== n ? (a = o("WAWebFrontendMsgGetters").getChat(n), t[0] = n, t[1] = a) : a = t[1];
		var i = a, l;
		t[2] !== i || t[3] !== n ? (l = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebReportNewsletterPostPopup.react"), {
				chat: i,
				msg: n,
				spamFlow: o("WAWebSpamConstants").SpamFlow.MediaViewer
			}));
		}, t[2] = i, t[3] = n, t[4] = l) : l = t[4];
		var c = l, d;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (d = s._(
			/*BTDS*/
			""
		), t[5] = d) : d = t[5];
		var m;
		return t[6] !== c ? (m = u.jsx(r("WDSMenuItem.react"), {
			onPress: c,
			Icon: r("WDSIconIcThumbDown.react"),
			title: d
		}), t[6] = c, t[7] = m) : m = t[7], m;
	}
	l.default = c;
}), 226);

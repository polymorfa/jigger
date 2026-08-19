__d("WAWebSendForAdminReviewButton.react", [
	"fbt",
	"WAWebFrontendMsgGetters",
	"WAWebModalManager",
	"WAWebReportToAdminEventsLogger",
	"WAWebReportToAdminPopup.react",
	"WAWebWamEnumReportToAdminInteraction",
	"WDSIconIcThumbDown.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(5), n = e.msg, a;
		t[0] !== n ? (a = function() {
			o("WAWebReportToAdminEventsLogger").logRTAReportingEvent({
				reportToAdminInteraction: o("WAWebWamEnumReportToAdminInteraction").REPORT_TO_ADMIN_INTERACTION.CLICK_SEND_FOR_ADMIN_REVIEW,
				groupId: o("WAWebFrontendMsgGetters").getChat(n).id.user
			}), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebReportToAdminPopup.react"), { msg: n }));
		}, t[0] = n, t[1] = a) : a = t[1];
		var i = a, l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[2] = l) : l = t[2];
		var c;
		return t[3] !== i ? (c = u.jsx(r("WDSMenuItem.react"), {
			onPress: i,
			Icon: r("WDSIconIcThumbDown.react"),
			title: l
		}), t[3] = i, t[4] = c) : c = t[4], c;
	}
	l.default = c;
}), 226);

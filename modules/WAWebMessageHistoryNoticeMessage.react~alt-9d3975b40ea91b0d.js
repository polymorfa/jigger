__d("WAWebMessageHistoryNoticeMessage.react", [
	"fbt",
	"WAWebFormatMessageHistoryNoticeBody",
	"WAWebGroupHistoryLearnMoreModalLoadable",
	"WAWebModalManager",
	"WAWebSystemMessageWithSingleCTA.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useCallback;
	function d(e) {
		var t = e.msg, n = e.ref, r = c(function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebGroupHistoryLearnMoreModalLoadable").GroupHistoryLearnMoreModalLoadable, {}));
		}, []);
		return u.jsx(o("WAWebSystemMessageWithSingleCTA.react").SystemMessageWithSingleCTA, {
			bodyText: o("WAWebFormatMessageHistoryNoticeBody").formatMessageHistoryNoticeBody(t),
			ctaText: s._(
				/*BTDS*/
				""
			),
			icon: null,
			onClick: r,
			onclickRef: n,
			role: "link",
			testid: "message-history-notice-message"
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

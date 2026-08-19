__d("WAWebMessageHistoryNoticeMessage.react", [
	"fbt",
	"WAWebFormatMessageHistoryNoticeBody",
	"WAWebGroupHistoryLearnMoreModalLoadable",
	"WAWebModalManager",
	"WAWebSystemMessageWithSingleCTA.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useCallback;
	function d(e) {
		var t = o("react-compiler-runtime").c(6), n = e.msg, r = e.ref, a = m, i;
		t[0] !== n ? (i = o("WAWebFormatMessageHistoryNoticeBody").formatMessageHistoryNoticeBody(n), t[0] = n, t[1] = i) : i = t[1];
		var l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[2] = l) : l = t[2];
		var c;
		return t[3] !== r || t[4] !== i ? (c = u.jsx(o("WAWebSystemMessageWithSingleCTA.react").SystemMessageWithSingleCTA, {
			bodyText: i,
			ctaText: l,
			icon: null,
			onClick: a,
			onclickRef: r,
			role: "link",
			testid: "message-history-notice-message"
		}), t[3] = r, t[4] = i, t[5] = c) : c = t[5], c;
	}
	function m() {
		o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebGroupHistoryLearnMoreModalLoadable").GroupHistoryLearnMoreModalLoadable, {}));
	}
	l.default = d;
}), 226);

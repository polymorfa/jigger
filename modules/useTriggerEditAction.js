__d("useTriggerEditAction", [
	"MAWEditMessageContext.react",
	"MWPActor.react",
	"MWPReplyContext.react",
	"react",
	"react-compiler-runtime",
	"useLogMAWEditMessage"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useContext;
	function d(e, t, n) {
		var a = o("react-compiler-runtime").c(11), i = r("useLogMAWEditMessage")(), l = c(o("MAWEditMessageContext.react").Context), s = l.setEditMessageData, u = c(o("MWPReplyContext.react").MWPReplyContext), d = u.clearReply, m = u.reply, p = o("MWPActor.react").useActor(), _;
		return a[0] !== p || a[1] !== d || a[2] !== i || a[3] !== e.messageId || a[4] !== e.threadKey || a[5] !== e.timestampMs || a[6] !== n || a[7] !== m || a[8] !== s || a[9] !== t ? (_ = function() {
			m != null && d(e.threadKey, !0), s({
				messageId: e.messageId,
				threadKey: e.threadKey,
				threadType: t,
				timestampMs: e.timestampMs
			}), i(t, e.threadKey, e.messageId, p, "EDIT_MESSAGE_TAP"), n == null || n();
		}, a[0] = p, a[1] = d, a[2] = i, a[3] = e.messageId, a[4] = e.threadKey, a[5] = e.timestampMs, a[6] = n, a[7] = m, a[8] = s, a[9] = t, a[10] = _) : _ = a[10], _;
	}
	l.default = d;
}), 98);

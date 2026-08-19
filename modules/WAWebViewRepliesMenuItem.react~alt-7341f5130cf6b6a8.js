__d("WAWebViewRepliesMenuItem.react", [
	"fbt",
	"WAWebIsInThreadsViewContext",
	"WAWebModalManager",
	"WAWebViewRepliesContextMenuUtils",
	"WAWebViewRepliesThreadsModal.react",
	"WDSIconIcReply.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useContext, p = c.useMemo;
	function _(e, t) {
		var n = m(r("WAWebIsInThreadsViewContext")), a = p(function() {
			return n ? null : o("WAWebViewRepliesContextMenuUtils").getViewRepliesThreadIdForContextMenu(e, t);
		}, [
			n,
			e,
			t
		]), i = d(function() {
			a != null && o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebViewRepliesThreadsModal.react"), {
				chat: t,
				threadId: a,
				focusMsgId: e.id.id
			}));
		}, [
			t,
			e.id.id,
			a
		]);
		return p(function() {
			if (a == null) return [];
			var e = s._(
				/*BTDS*/
				""
			);
			return [u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcReply.react"),
				title: e,
				onPress: i,
				testid: "mi-msg-view-replies"
			}, "view-replies")];
		}, [a, i]);
	}
	l.useViewRepliesMenuItems = _;
}), 226);

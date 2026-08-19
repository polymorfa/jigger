__d("WAWebViewRepliesMenuItem.react", [
	"fbt",
	"WAWebIsInThreadsViewContext",
	"WAWebModalManager",
	"WAWebViewRepliesContextMenuUtils",
	"WAWebViewRepliesThreadsModal.react",
	"WDSIconIcReply.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useContext, p = c.useMemo;
	function _(e, t) {
		var n = o("react-compiler-runtime").c(12), a = m(r("WAWebIsInThreadsViewContext")), i;
		n[0] !== t || n[1] !== a || n[2] !== e ? (i = a ? null : o("WAWebViewRepliesContextMenuUtils").getViewRepliesThreadIdForContextMenu(e, t), n[0] = t, n[1] = a, n[2] = e, n[3] = i) : i = n[3];
		var l = i, c;
		n[4] !== t || n[5] !== e.id.id || n[6] !== l ? (c = function() {
			l != null && o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebViewRepliesThreadsModal.react"), {
				chat: t,
				threadId: l,
				focusMsgId: e.id.id
			}));
		}, n[4] = t, n[5] = e.id.id, n[6] = l, n[7] = c) : c = n[7];
		var d = c, p;
		e: {
			if (l == null) {
				var _;
				n[8] === Symbol.for("react.memo_cache_sentinel") ? (_ = [], n[8] = _) : _ = n[8], p = _;
				break e;
			}
			var f;
			n[9] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
				/*BTDS*/
				""
			), n[9] = f) : f = n[9];
			var g = f, h;
			n[10] !== d ? (h = [u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcReply.react"),
				title: g,
				onPress: d,
				testid: "mi-msg-view-replies"
			}, "view-replies")], n[10] = d, n[11] = h) : h = n[11], p = h;
		}
		return p;
	}
	l.useViewRepliesMenuItems = _;
}), 226);

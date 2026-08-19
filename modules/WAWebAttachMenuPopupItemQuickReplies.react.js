__d("WAWebAttachMenuPopupItemQuickReplies.react", [
	"fbt",
	"WAWebAttachmentMenuLogger",
	"WAWebComposeBoxActions",
	"WDSIconIcBoltFilled.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { icon: {
		color: "x1ev1nr0",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(8), n = e.chat, a = e.dismissMenu, i;
		t[0] !== n ? (i = function() {
			o("WAWebComposeBoxActions").ComposeBoxActions.toggleQuickReplies(), o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(n, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.QUICK_REPLY);
		}, t[0] = n, t[1] = i) : i = t[1];
		var l = i, d;
		t[2] !== a || t[3] !== l ? (d = function() {
			l(), a();
		}, t[2] = a, t[3] = l, t[4] = d) : d = t[4];
		var m = d, p;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[5] = p) : p = t[5];
		var _;
		return t[6] !== m ? (_ = u.jsx(r("WDSMenuItem.react"), {
			testid: "mi-attach-quick-replies",
			onPress: m,
			Icon: r("WDSIconIcBoltFilled.react"),
			iconXstyle: c.icon,
			title: p
		}), t[6] = m, t[7] = _) : _ = t[7], _;
	}
	l.default = d;
}), 226);

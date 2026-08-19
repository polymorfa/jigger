__d("WAWebAttachMenuPopupItemQuickReplies.react", [
	"fbt",
	"WAWebAttachmentMenuLogger",
	"WAWebComposeBoxActions",
	"WDSIconIcBoltFilled.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { icon: {
		color: "x1ev1nr0",
		$$css: !0
	} };
	function d(e) {
		var t = e.chat, n = e.dismissMenu, a = function() {
			o("WAWebComposeBoxActions").ComposeBoxActions.toggleQuickReplies(), o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(t, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.QUICK_REPLY);
		}, i = function() {
			a(), n();
		};
		return u.jsx(r("WDSMenuItem.react"), {
			testid: "mi-attach-quick-replies",
			onPress: i,
			Icon: r("WDSIconIcBoltFilled.react"),
			iconXstyle: c.icon,
			title: s._(
				/*BTDS*/
				""
			)
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

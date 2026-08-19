__d("WAWebAttachMenuPopupItemContacts.react", [
	"fbt",
	"WAWebAttachVcardsFlowLoadable",
	"WAWebAttachmentMenuLogger",
	"WAWebModalManager",
	"WAWebPrepareMessageSendingAction",
	"WDSIconIcPersonFilled.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { refreshedIcon: {
		color: "x3j997e",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(6), n = e.chat, a = e.onMenuComplete, i;
		if (t[0] !== n || t[1] !== a) {
			var l = function() {
				o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebAttachVcardsFlowLoadable").AttachVcardsFlowLoadable, {
					chat: n,
					onCancel: function() {
						o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(n, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CONTACT);
					},
					onContactsSent: function() {
						a == null || a(!0), o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(n, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CONTACT);
					}
				})), o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(n), o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(n, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CONTACT);
			};
			i = function() {
				l();
			}, t[0] = n, t[1] = a, t[2] = i;
		} else i = t[2];
		var d = i, m;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), t[3] = m) : m = t[3];
		var p;
		return t[4] !== d ? (p = u.jsx(r("WDSMenuItem.react"), {
			testid: "mi-attach-contact",
			onPress: d,
			Icon: r("WDSIconIcPersonFilled.react"),
			iconXstyle: c.refreshedIcon,
			title: m
		}), t[4] = d, t[5] = p) : p = t[5], p;
	}
	l.default = d;
}), 226);

__d("WAWebAttachMenuPopupItemContacts.react", [
	"fbt",
	"WAWebAttachVcardsFlowLoadable",
	"WAWebAttachmentMenuLogger",
	"WAWebModalManager",
	"WAWebPrepareMessageSendingAction",
	"WDSIconIcPersonFilled.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { refreshedIcon: {
		color: "x3j997e",
		$$css: !0
	} };
	function d(e) {
		var t = e.chat, n = e.onMenuComplete, a = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebAttachVcardsFlowLoadable").AttachVcardsFlowLoadable, {
				chat: t,
				onCancel: function() {
					o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(t, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CONTACT);
				},
				onContactsSent: function() {
					n == null || n(!0), o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(t, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CONTACT);
				}
			})), o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(t), o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(t, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CONTACT);
		}, i = function() {
			a();
		};
		return u.jsx(r("WDSMenuItem.react"), {
			testid: "mi-attach-contact",
			onPress: i,
			Icon: r("WDSIconIcPersonFilled.react"),
			iconXstyle: c.refreshedIcon,
			title: s._(
				/*BTDS*/
				""
			)
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

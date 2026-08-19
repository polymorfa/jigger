__d("WAWebAttachMenuPopupItemPolls.react", [
	"fbt",
	"WAWebAttachmentMenuLogger",
	"WAWebModalManager",
	"WAWebPollCreationUtils",
	"WAWebPollsCreatePollModal",
	"WAWebPrepareMessageSendingAction",
	"WDSIconWdsIcPoll.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { refreshedIcon: {
		color: "x157dx7a",
		$$css: !0
	} };
	function d(e) {
		var t = e.chat, n = e.getComposeBoxEditorRef, a = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebPollsCreatePollModal").CreatePollModal, {
				chat: t,
				getComposeBoxEditorRef: n,
				pollType: o("WAWebPollCreationUtils").PollType.POLL
			}), { blockClose: !0 }), o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(t), o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(t, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.POLL);
		}, i = function() {
			a();
		};
		return u.jsx(r("WDSMenuItem.react"), {
			testid: "mi-attach-poll",
			onPress: i,
			Icon: r("WDSIconWdsIcPoll.react"),
			iconXstyle: c.refreshedIcon,
			title: s._(
				/*BTDS*/
				""
			)
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

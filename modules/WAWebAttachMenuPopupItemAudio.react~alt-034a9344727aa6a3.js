__d("WAWebAttachMenuPopupItemAudio.react", [
	"fbt",
	"WAWebAttachMenuFilePicker",
	"WAWebAttachmentMenuLogger",
	"WAWebPrepareMessageSendingAction",
	"WDSIconIcHeadphonesFilled.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { icon: {
		color: "xtko6g8",
		$$css: !0
	} };
	function d(e) {
		var t = e.chat, n = e.dismissMenu, r = e.multiple, a = e.onAudioPick;
		o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(t), o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(t, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.AUDIO), o("WAWebAttachMenuFilePicker").createFilePicker({
			accept: o("WAWebAttachMenuFilePicker").FilePickerMimeType.AUDIO,
			multiple: r,
			transformAttachment: function(t) {
				return { file: t };
			}
		}, a, n);
	}
	function m(e) {
		var t = e.chat, n = e.dismissMenu, o = e.multiple, a = e.onMediaPick, i = function() {
			d({
				chat: t,
				dismissMenu: n,
				multiple: o,
				onAudioPick: a
			});
		};
		return u.jsx(r("WDSMenuItem.react"), {
			testid: "mi-attach-media",
			onPress: i,
			Icon: r("WDSIconIcHeadphonesFilled.react"),
			iconXstyle: c.icon,
			title: s._(
				/*BTDS*/
				""
			)
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);

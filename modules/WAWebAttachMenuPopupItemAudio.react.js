__d("WAWebAttachMenuPopupItemAudio.react", [
	"fbt",
	"WAWebAttachMenuFilePicker",
	"WAWebAttachmentMenuLogger",
	"WAWebPrepareMessageSendingAction",
	"WDSIconIcHeadphonesFilled.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(8), n = e.chat, a = e.dismissMenu, i = e.multiple, l = e.onMediaPick, m;
		t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l ? (m = function() {
			d({
				chat: n,
				dismissMenu: a,
				multiple: i,
				onAudioPick: l
			});
		}, t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = m) : m = t[4];
		var p = m, _;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[5] = _) : _ = t[5];
		var f;
		return t[6] !== p ? (f = u.jsx(r("WDSMenuItem.react"), {
			testid: "mi-attach-media",
			onPress: p,
			Icon: r("WDSIconIcHeadphonesFilled.react"),
			iconXstyle: c.icon,
			title: _
		}), t[6] = p, t[7] = f) : f = t[7], f;
	}
	l.default = m;
}), 226);

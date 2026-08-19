__d("WAWebAttachMenuPopupItemStickers.react", [
	"fbt",
	"WAWebAttachMenuFilePicker",
	"WAWebAttachmentMenuLogger",
	"WAWebPrepareMessageSendingAction",
	"WAWebWamEnumWebcStickerMakerEventNameType",
	"WAWebWebcStickerMakerEventsWamEvent",
	"WDSIconWdsIcStickerPlusCreateFilled.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { refreshedIcon: {
		color: "x1rlzvk7",
		$$css: !0
	} };
	function d(e, t, n) {
		new (o("WAWebWebcStickerMakerEventsWamEvent")).WebcStickerMakerEventsWamEvent({ stickerMakerEventName: o("WAWebWamEnumWebcStickerMakerEventNameType").WEBC_STICKER_MAKER_EVENT_NAME_TYPE.STICKER_MAKER_BUTTON_TAP }).commit(), o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(e), o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(e, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.STICKER_MAKER), o("WAWebAttachMenuFilePicker").createFilePicker({
			accept: o("WAWebAttachMenuFilePicker").FilePickerMimeType.IMAGE,
			multiple: !1,
			transformAttachment: function(t) {
				return {
					file: t,
					stickerMaker: !0
				};
			}
		}, function(e) {
			new (o("WAWebWebcStickerMakerEventsWamEvent")).WebcStickerMakerEventsWamEvent({ stickerMakerEventName: o("WAWebWamEnumWebcStickerMakerEventNameType").WEBC_STICKER_MAKER_EVENT_NAME_TYPE.IMAGE_UPLOADED }).commit(), n(e);
		}, t);
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(7), n = e.chat, a = e.dismissMenu, i = e.onMediaPick, l;
		t[0] !== n || t[1] !== a || t[2] !== i ? (l = function() {
			d(n, a, i);
		}, t[0] = n, t[1] = a, t[2] = i, t[3] = l) : l = t[3];
		var m = l, p;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[4] = p) : p = t[4];
		var _;
		return t[5] !== m ? (_ = u.jsx(r("WDSMenuItem.react"), {
			testid: "mi-attach-sticker",
			onPress: m,
			Icon: r("WDSIconWdsIcStickerPlusCreateFilled.react"),
			iconXstyle: c.refreshedIcon,
			title: p
		}), t[5] = m, t[6] = _) : _ = t[6], _;
	}
	l.default = m;
}), 226);

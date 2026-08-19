__d("WAWebAttachMenuPopupItemStickers.react", [
	"fbt",
	"WAWebAttachMenuFilePicker",
	"WAWebAttachmentMenuLogger",
	"WAWebPrepareMessageSendingAction",
	"WAWebWamEnumWebcStickerMakerEventNameType",
	"WAWebWebcStickerMakerEventsWamEvent",
	"WDSIconWdsIcStickerPlusCreateFilled.react",
	"WDSMenuItem.react",
	"react"
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
		var t = e.chat, n = e.dismissMenu, o = e.onMediaPick, a = function() {
			d(t, n, o);
		};
		return u.jsx(r("WDSMenuItem.react"), {
			testid: "mi-attach-sticker",
			onPress: a,
			Icon: r("WDSIconWdsIcStickerPlusCreateFilled.react"),
			iconXstyle: c.refreshedIcon,
			title: s._(
				/*BTDS*/
				""
			)
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);

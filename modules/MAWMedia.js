__d("MAWMedia", [
	"LSIntEnum",
	"MAWDbMedia",
	"MessagingAttachmentType"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n) {
		return t === o("MAWDbMedia").MEDIA_TYPE.IMAGE ? n != null ? (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").EPHEMERAL_IMAGE) : (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").IMAGE) : t === o("MAWDbMedia").MEDIA_TYPE.VIDEO ? n != null ? (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").EPHEMERAL_VIDEO) : (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").VIDEO) : t === o("MAWDbMedia").MEDIA_TYPE.PTT ? (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").AUDIO) : t === o("MAWDbMedia").MEDIA_TYPE.GIF ? (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").ANIMATED_IMAGE) : t === o("MAWDbMedia").MEDIA_TYPE.STICKER ? (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").STICKER) : t === o("MAWDbMedia").MEDIA_TYPE.DOCUMENT_FILE ? (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").FILE) : (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").NONE);
	}
	l.mediaTypeToMessageAttachmentType = s;
}), 98);

__d("MAWMsg", [
	"$InternalEnum",
	"I64",
	"LSBitFlag",
	"LSIntEnum",
	"LSMessagingThreadTypeUtil",
	"LSReplyMessageAttachmentType",
	"MAWMsgType",
	"WAArmadilloXMA.pb"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c;
	function d(e, t, n, r, a, i, l) {
		return e === o("MAWMsgType").MSG_TYPE.TEXT ? t ? (u || (u = o("LSIntEnum"))).ofNumber(8192) : (u || (u = o("LSIntEnum"))).ofNumber(1) : e === o("MAWMsgType").MSG_TYPE.VIDEO && l === !0 ? (u || (u = o("LSIntEnum"))).ofNumber(16384) : e === o("MAWMsgType").MSG_TYPE.IMAGE || e === o("MAWMsgType").MSG_TYPE.VIDEO || e === o("MAWMsgType").MSG_TYPE.RAVEN ? (u || (u = o("LSIntEnum"))).ofNumber(2) : e === o("MAWMsgType").MSG_TYPE.PTT ? (u || (u = o("LSIntEnum"))).ofNumber(4) : e === o("MAWMsgType").MSG_TYPE.FUTUREPROOF ? m(a) : e === o("MAWMsgType").MSG_TYPE.CIPHERTEXT ? (u || (u = o("LSIntEnum"))).ofNumber(65536) : e === o("MAWMsgType").MSG_TYPE.UNAVAILABLE ? (u || (u = o("LSIntEnum"))).ofNumber(262144) : e === o("MAWMsgType").MSG_TYPE.GIF ? (u || (u = o("LSIntEnum"))).ofNumber(16384) : e === o("MAWMsgType").MSG_TYPE.STICKER ? (u || (u = o("LSIntEnum"))).ofNumber(4096) : e === o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE ? (u || (u = o("LSIntEnum"))).ofNumber(64) : e === o("MAWMsgType").MSG_TYPE.XMA ? n != null && n ? (u || (u = o("LSIntEnum"))).ofNumber(256) : i === o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_RECEIVER_FETCH ? (u || (u = o("LSIntEnum"))).ofNumber(536870912) : (u || (u = o("LSIntEnum"))).ofNumber(1024) : e === o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE ? r ? (u || (u = o("LSIntEnum"))).ofNumber(1) : (u || (u = o("LSIntEnum"))).ofNumber(33554432) : e === o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH ? (u || (u = o("LSIntEnum"))).ofNumber(134217728) : (u || (u = o("LSIntEnum"))).ofNumber(1);
	}
	function m(e) {
		switch (e) {
			case "liveLocationMessage": return (u || (u = o("LSIntEnum"))).ofNumber(4294967296);
			case "locationMessage": return (u || (u = o("LSIntEnum"))).ofNumber(524288);
			case "pollCreationMessage": return (u || (u = o("LSIntEnum"))).ofNumber(1048576);
			case "contactShareMessage": return (u || (u = o("LSIntEnum"))).ofNumber(2097152);
			case "storyMentionMessage": return (u || (u = o("LSIntEnum"))).ofNumber(4194304);
			case "postMentionMessage": return (u || (u = o("LSIntEnum"))).ofNumber(2147483648);
			case "metaAiMessage": return (u || (u = o("LSIntEnum"))).ofNumber(8388608);
			case "bumpMessage": return (u || (u = o("LSIntEnum"))).ofNumber(16777216);
			case "stickerReceiverFetchMessage": return (u || (u = o("LSIntEnum"))).ofNumber(67108864);
			case "noteMention": return (u || (u = o("LSIntEnum"))).ofNumber(1073741824);
			case "messengerMemory": return (u || (u = o("LSIntEnum"))).ofNumber(8589934592);
			case "rtcMessage": return (u || (u = o("LSIntEnum"))).ofNumber(17179869184);
			default: return (u || (u = o("LSIntEnum"))).ofNumber(131072);
		}
	}
	function p(e) {
		var t = e.displayedContentTypes;
		return (c || (c = o("I64"))).equal(t, (u || (u = o("LSIntEnum"))).ofNumber(2)) || (c || (c = o("I64"))).equal(t, (u || (u = o("LSIntEnum"))).ofNumber(4)) || (c || (c = o("I64"))).equal(t, (u || (u = o("LSIntEnum"))).ofNumber(16384)) || (c || (c = o("I64"))).equal(t, (u || (u = o("LSIntEnum"))).ofNumber(16)) || (c || (c = o("I64"))).equal(t, (u || (u = o("LSIntEnum"))).ofNumber(64)) || (c || (c = o("I64"))).equal(t, (u || (u = o("LSIntEnum"))).ofNumber(4096)) || (c || (c = o("I64"))).equal(t, (u || (u = o("LSIntEnum"))).ofNumber(134217728));
	}
	function _(e, t) {
		var n = e.replyAttachmentType;
		if (n == null) return !1;
		var a = o("LSMessagingThreadTypeUtil").isArmadilloSecure(t);
		return a && e.replyAttachmentId == null && e.replyAttachmentPlaintextHash == null ? !1 : (c || (c = o("I64"))).equal(n, (u || (u = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").PHOTO)) || (c || (c = o("I64"))).equal(n, (u || (u = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").GIF)) || (c || (c = o("I64"))).equal(n, (u || (u = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").AUDIO)) || (c || (c = o("I64"))).equal(n, (u || (u = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").STICKER)) || (c || (c = o("I64"))).equal(n, (u || (u = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").VIDEO));
	}
	function f(e) {
		return o("LSBitFlag").has((u || (u = o("LSIntEnum"))).ofNumber(536870912), e.displayedContentTypes);
	}
	function g(e) {
		var t = e.displayedContentTypes;
		return !!(c || (c = o("I64"))).equal(t, (u || (u = o("LSIntEnum"))).ofNumber(32));
	}
	function h(e) {
		return (c || (c = o("I64"))).lt(e.sendStatusV2, (u || (u = o("LSIntEnum"))).ofNumber(2));
	}
	function y(e) {
		var t = e.displayedContentTypes;
		return o("LSBitFlag").has((u || (u = o("LSIntEnum"))).ofNumber(1024), t) || o("LSBitFlag").has((u || (u = o("LSIntEnum"))).ofNumber(536870912), t);
	}
	function C(e) {
		var t = e.displayedContentTypes;
		return (c || (c = o("I64"))).equal(t, (u || (u = o("LSIntEnum"))).ofNumber(65536)) || (c || (c = o("I64"))).equal(t, (u || (u = o("LSIntEnum"))).ofNumber(131072)) || (c || (c = o("I64"))).equal(t, (u || (u = o("LSIntEnum"))).ofNumber(524288)) || (c || (c = o("I64"))).equal(t, (u || (u = o("LSIntEnum"))).ofNumber(4294967296)) || (c || (c = o("I64"))).equal(t, (u || (u = o("LSIntEnum"))).ofNumber(1048576)) || (c || (c = o("I64"))).equal(t, (u || (u = o("LSIntEnum"))).ofNumber(2097152)) || (c || (c = o("I64"))).equal(t, (u || (u = o("LSIntEnum"))).ofNumber(4194304)) || (c || (c = o("I64"))).equal(t, (u || (u = o("LSIntEnum"))).ofNumber(2147483648)) || (c || (c = o("I64"))).equal(t, (u || (u = o("LSIntEnum"))).ofNumber(8388608)) || (c || (c = o("I64"))).equal(t, (u || (u = o("LSIntEnum"))).ofNumber(16777216)) || (c || (c = o("I64"))).equal(t, (u || (u = o("LSIntEnum"))).ofNumber(1073741824)) || (c || (c = o("I64"))).equal(t, (u || (u = o("LSIntEnum"))).ofNumber(8589934592)) ? !0 : (c || (c = o("I64"))).equal(t, (u || (u = o("LSIntEnum"))).ofNumber(262144));
	}
	var b = (s = n("$InternalEnum"))({
		PLAYED: 0,
		SCREENSHOTTED: 1,
		FORCE_DISABLED: 2
	}), v = s({
		PERMANENT: 0,
		UNSEEN: 1,
		SEEN: 2,
		REPLAYED: 3,
		EXPIRED: 4
	}), S = s({
		VIEW_ONCE: 0,
		ALLOW_REPLAY: 1,
		KEEP_IN_CHAT: 2
	}), R = s({
		IMAGE: 0,
		VIDEO: 1
	});
	l.text = (e = o("MAWMsgType")).MSG_TYPE.TEXT, l.image = e.MSG_TYPE.IMAGE, l.video = e.MSG_TYPE.VIDEO, l.ptt = e.MSG_TYPE.PTT, l.unsent = e.MSG_TYPE.REVOKED, l.gif = e.MSG_TYPE.GIF, l.bumpExistingMessage = e.MSG_TYPE.BUMP_EXISTING_MESSAGE, l.getDisplayedContentTypes = d, l.isMediaMsg = p, l.isMediaReplyAttachmentType = _, l.isReceiverFetchXMAMsg = f, l.isAdminMsg = g, l.isOptimistic = h, l.isXMAMsg = y, l.isPlaceholder = C, l.MAWRavenActionNotifType = b, l.MAWRavenMsgEphemeralMediaState = v, l.MAWRavenMsgEphemeralType = S, l.MAWRavenMsgMediaType = R;
}), 98);

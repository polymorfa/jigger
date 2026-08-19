__d("MAWMsgReplyStatus", [
	"LSReplyMessageStatus",
	"MAWMsgType",
	"MAWReplyBuilder"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		switch (e) {
			case o("MAWMsgType").MSG_TYPE.DELETE_FOR_ME:
			case o("MAWMsgType").MSG_TYPE.REVOKED: return r("LSReplyMessageStatus").DELETED;
			case o("MAWMsgType").MSG_TYPE.TEXT:
			case o("MAWMsgType").MSG_TYPE.IMAGE:
			case o("MAWMsgType").MSG_TYPE.VIDEO:
			case o("MAWMsgType").MSG_TYPE.PTT:
			case o("MAWMsgType").MSG_TYPE.ADMIN:
			case o("MAWMsgType").MSG_TYPE.GIF:
			case o("MAWMsgType").MSG_TYPE.STICKER:
			case o("MAWMsgType").MSG_TYPE.XMA:
			case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE:
			case o("MAWMsgType").MSG_TYPE.RAVEN:
			case o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH: return r("LSReplyMessageStatus").VALID;
			case o("MAWMsgType").MSG_TYPE.FUTUREPROOF:
			case o("MAWMsgType").MSG_TYPE.CIPHERTEXT:
			case o("MAWMsgType").MSG_TYPE.UNAVAILABLE: return r("LSReplyMessageStatus").TEMPORARY_UNAVAILABLE;
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_CHANGE_FROM_CURRENT_DEVICE:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SYNC_RESPONSE: return r("LSReplyMessageStatus").UNKNOWN;
			case o("MAWMsgType").MSG_TYPE.EXPIRED_EPHEMERAL: return r("LSReplyMessageStatus").EXPIRED;
			default: return;
		}
	}
	function s(e) {
		var t = e.replyContent;
		if (t != null) {
			var n = o("MAWReplyBuilder").getReplyBuilder(t.replyType).buildReplyStatus(t);
			return n;
		}
	}
	l.getReplyMessageStatus = e, l.getLSReplyMessageStatus = s;
}), 98);

__d("MAWMsgReply", [
	"LSIntEnum",
	"LSReplyMessageAttachmentType",
	"MAWMsgType",
	"MAWReplyBuilder"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		var t = e.replyContent;
		if (t != null) {
			var n = o("MAWReplyBuilder").getReplyBuilder(t.replyType).buildReplyUserId(t);
			return n;
		}
	}
	function u(e) {
		var t = e.replyContent;
		if (t != null) {
			var n = o("MAWReplyBuilder").getReplyBuilder(t.replyType).buildReplySourceTypeV2();
			return n;
		}
	}
	function c(e) {
		var t = e.replyContent;
		if (t != null) {
			var n = o("MAWReplyBuilder").getReplyBuilder(t.replyType).buildReplySourceType();
			return n;
		}
	}
	function d(e) {
		var t = e.replyContent;
		if (t != null) {
			var n = o("MAWReplyBuilder").getReplyBuilder(t.replyType).buildReplySourceId(t);
			return n;
		}
	}
	function m(e) {
		var t = e.replyContent;
		if (t != null) {
			var n = o("MAWReplyBuilder").getReplyBuilder(t.replyType).buildReplyTimestampMs(t);
			return n;
		}
	}
	function p(e) {
		var t = e.replyContent;
		if (t != null) {
			var n = o("MAWReplyBuilder").getReplyBuilder(t.replyType).buildReplyMessageText(t);
			return n;
		}
	}
	function _(e) {
		if (e.replySourceId != null) return e.replyMentionedJids;
	}
	function f(e) {
		var t = e.replyContent;
		if (t != null) {
			var n = o("MAWReplyBuilder").getReplyBuilder(t.replyType).buildReplyType(t);
			return n;
		}
	}
	function g(e) {
		return e.replySourceId == null ? !1 : h(e.replyStatusType);
	}
	function h(e) {
		switch (e) {
			case o("MAWMsgType").MSG_TYPE.IMAGE:
			case o("MAWMsgType").MSG_TYPE.VIDEO:
			case o("MAWMsgType").MSG_TYPE.GIF:
			case o("MAWMsgType").MSG_TYPE.STICKER:
			case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE:
			case o("MAWMsgType").MSG_TYPE.PTT:
			case o("MAWMsgType").MSG_TYPE.RAVEN:
			case o("MAWMsgType").MSG_TYPE.XMA:
			case o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH: return !0;
			default: return !1;
		}
	}
	function y(e) {
		return e.replyStatusType === "XMA" && e.replyMessageText != null;
	}
	function C(e) {
		var t = e.replyContent;
		if (t != null) {
			var n = o("MAWReplyBuilder").getReplyBuilder(t.replyType).buildReplyMediaPreviewHeight(t);
			return n;
		}
	}
	function b(e) {
		var t = e.replyContent;
		if (t != null) {
			var n = o("MAWReplyBuilder").getReplyBuilder(t.replyType).buildReplyMediaPreviewWidth(t);
			return n;
		}
	}
	function v(e) {
		var t = e.replyContent;
		if (t != null) {
			var n = o("MAWReplyBuilder").getReplyBuilder(t.replyType).buildReplyAttachmentType(t);
			return n;
		}
	}
	function S(t) {
		var n = t.replyStatusType;
		if (n != null) {
			var a = n === "Raven", i = g(t) || a;
			if (i) switch (n) {
				case "Gif": return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").GIF);
				case "Ptt": return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").OTHER);
				case "Sticker": return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").STICKER);
				case "Video": return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").VIDEO);
				case "Image": return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").PHOTO);
				case "XMA": return t.isIGXMAPostShare === !0 || t.isIGXMAStoryShare === !0 || t.isStoryHighlightShare === !0 || t.isPostPrivateReply === !0 || t.isMsgHighlightsTabFriendUpdatesReply === !0 ? (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").FEED_POST) : y(t) ? void 0 : (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").XMA);
				case "DocumentFile": return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").OTHER);
				case "ReceiverFetch": return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").STICKER);
				case "Raven": return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").EPHEMERAL_RAVEN_MESSAGE);
				default:
			}
		}
	}
	function R(e) {
		var t = e.replyContent;
		if (t != null) {
			var n = o("MAWReplyBuilder").getReplyBuilder(t.replyType).buildReplyAttachmentId(t);
			return n;
		}
	}
	function L(e) {
		var t = e.replyContent;
		if (t != null) {
			var n = o("MAWReplyBuilder").getReplyBuilder(t.replyType).buildReplyAttachmentPlaintextHash(t);
			return n;
		}
	}
	function E(e) {
		var t = e.replyContent;
		if (t != null) {
			var n = o("MAWReplyBuilder").getReplyBuilder(t.replyType).buildReplyMediaExpirationTimestampMs(t);
			return n;
		}
	}
	l.getReplyUserId = s, l.getReplySourceTypeV2 = u, l.getReplySourceType = c, l.getReplySourceId = d, l.getReplyTimestampMs = m, l.getReplyMessageText = p, l.getReplyMentionedJids = _, l.getReplyType = f, l.getReplyMediaPreviewHeight = C, l.getReplyMediaPreviewWidth = b, l.getReplyAttachmentType = v, l.getReplyAttachmentTypeLegacy = S, l.getReplyAttachmentId = R, l.getReplyAttachmentPlaintextHash = L, l.getReplyMediaExpirationTimestampMs = E;
}), 98);

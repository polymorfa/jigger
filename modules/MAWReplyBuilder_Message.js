__d("MAWReplyBuilder_Message", [
	"fbt",
	"EntMessageReplyType",
	"FBLogger",
	"I64",
	"LSIntEnum",
	"LSMessageReplySourceTypeV2",
	"LSReplyMessageAttachmentType",
	"LSReplyMessageStatus",
	"MAWBumpMessageMsgReplySnippet",
	"MAWImageUtils",
	"MessagingAttachmentType",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = {
		buildReplyAttachmentId: function(t) {
			return d(t);
		},
		buildReplyAttachmentPlaintextHash: function(t) {
			return p(t);
		},
		buildReplyAttachmentType: function(t) {
			return y(t);
		},
		buildReplyMediaExpirationTimestampMs: function(t) {},
		buildReplyMediaPreviewHeight: function(t) {
			return _(t);
		},
		buildReplyMediaPreviewWidth: function(t) {
			return f(t);
		},
		buildReplyMessageText: function(t) {
			var e;
			return (e = t.replyToLSMessage) == null ? void 0 : e.text;
		},
		buildReplySnippet: function(t, n, r) {
			return C(t, n, r);
		},
		buildReplySourceId: function(t) {
			return t.replyToMsgId;
		},
		buildReplySourceType: function() {
			return (e || (e = o("LSIntEnum"))).ofNumber(r("LSMessageReplySourceTypeV2").MESSAGE);
		},
		buildReplySourceTypeV2: function() {
			return (e || (e = o("LSIntEnum"))).ofNumber(r("LSMessageReplySourceTypeV2").MESSAGE);
		},
		buildReplyStatus: function(t) {
			return b(t);
		},
		buildReplyTimestampMs: function(t) {
			var e;
			return (e = t.replyToLSMessage) == null ? void 0 : e.timestampMs;
		},
		buildReplyType: function(n) {
			return n.isBumpMsg ? (e || (e = o("LSIntEnum"))).ofNumber(r("EntMessageReplyType").BUMP) : (e || (e = o("LSIntEnum"))).ofNumber(r("EntMessageReplyType").REGULAR);
		},
		buildReplyUserId: function(t) {
			var e;
			return (e = t.replyToLSMessage) == null ? void 0 : e.senderId;
		}
	};
	function d(t) {
		var n = t.replyToLSAttachment;
		if (n != null && (n.attachmentType === (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").XMA) || n.attachmentType === (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").STICKER) && n.receiverFetchId != null)) {
			var a = n.attachmentFbid;
			try {
				return (u || (u = o("I64"))).of_string(a);
			} catch (e) {
				var i = r("getErrorSafe")(e);
				r("FBLogger")("messenger_e2ee_web").mustfix("[MAWMsgReply] getReplyAttachmentIdFromReplyContent: Error converting attachmentFbid, %s, to a big int for msg, %s. Attachment of type, %s, is likely using plaintexthash as id, please review types requiring attachment id: %s", a, n.messageId, (u || (u = o("I64"))).to_string(n.attachmentType), i.message);
			}
		}
	}
	var m = new Set([
		(e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").STICKER),
		e.ofNumber(r("MessagingAttachmentType").IMAGE),
		e.ofNumber(r("MessagingAttachmentType").ANIMATED_IMAGE),
		e.ofNumber(r("MessagingAttachmentType").VIDEO),
		e.ofNumber(r("MessagingAttachmentType").AUDIO),
		e.ofNumber(r("MessagingAttachmentType").FILE)
	]);
	function p(e) {
		var t = e.replyToLSAttachment;
		if (t != null && m.has(t.attachmentType)) return t.attachmentFbid;
	}
	function _(t) {
		var n = t.replyToLSAttachment;
		if (n != null) return n.attachmentType === (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").STICKER) ? g(t).replyHeight : n.previewHeight;
	}
	function f(t) {
		var n = t.replyToLSAttachment;
		if (n != null) return n.attachmentType === (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").STICKER) ? g(t).replyWidth : n.previewWidth;
	}
	function g(e) {
		var t, n = (t = e.replyToLSAttachment) != null ? t : {}, r = n.previewHeight, a = n.previewWidth;
		if (r == null || a == null) return {
			replyHeight: void 0,
			replyWidth: void 0
		};
		var i = o("MAWImageUtils").boundHeightWidth((u || (u = o("I64"))).to_int32(r), u.to_int32(a), 96 * .8), l = i.height, s = i.width;
		return {
			replyHeight: u.of_int32(l),
			replyWidth: u.of_int32(s)
		};
	}
	function h(e) {
		var t, n = (t = e.replyToLSMessage) == null ? void 0 : t.text;
		return n != null && n !== "";
	}
	function y(t) {
		var n = t.replyToLSAttachment;
		if (n != null) switch (n.attachmentType) {
			case (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").STICKER): return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").STICKER);
			case (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").IMAGE): return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").PHOTO);
			case (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").ANIMATED_IMAGE): return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").GIF);
			case (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").VIDEO): return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").VIDEO);
			case (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").AUDIO): return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").OTHER);
			case (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").FILE): return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").OTHER);
			case (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").XMA): return h(t) ? void 0 : (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").XMA);
			case (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").EPHEMERAL_IMAGE):
			case (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").EPHEMERAL_VIDEO): return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").EPHEMERAL_RAVEN_MESSAGE);
			default:
		}
	}
	function C(e, t, n) {
		var r = e.replyToLSMessage, a = t === n, i = "$PARTICIPANT_FIRST_NAME(" + t + ")";
		if (r == null || r.isUnsent === !0) return a ? s._(
			/*BTDS*/
			""
		).toString() : s._(
			/*BTDS*/
			"",
			[s._param("name", i)]
		).toString();
		var l = r.senderId, c = (u || (u = o("I64"))).to_string(l) === n, d = t === u.to_string(l), m = "$PARTICIPANT_FIRST_NAME(" + u.to_string(l) + ")";
		if (e.isBumpMsg) {
			var p = o("MAWBumpMessageMsgReplySnippet").buildBumpMessageReplySnippet({
				isAuthorMe: a,
				recipientName: m,
				replySenderIsMe: c,
				replySenderIsRecipient: d,
				senderName: i
			});
			return p == null ? void 0 : p.toString();
		}
		return a && c ? s._(
			/*BTDS*/
			""
		).toString() : d ? s._(
			/*BTDS*/
			"",
			[s._param("other", i)]
		).toString() : a ? s._(
			/*BTDS*/
			"",
			[s._param("other_name", m)]
		).toString() : c ? s._(
			/*BTDS*/
			"",
			[s._param("other_name", i)]
		).toString() : s._(
			/*BTDS*/
			"",
			[s._param("other", i), s._param("other_name", m)]
		).toString();
	}
	function b(t) {
		var n = t.replyToLSMessage;
		if (n == null) return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageStatus").DELETED);
		var a = t.replyToLSAttachment;
		if (n.isUnsent === !0) return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageStatus").DELETED);
		if (n.isExpired === !0) return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageStatus").EXPIRED);
		if (n.isAdminMessage === !0) return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageStatus").VALID);
		switch (n.displayedContentTypes) {
			case (e || (e = o("LSIntEnum"))).ofNumber(256): return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageStatus").DELETED);
			case (e || (e = o("LSIntEnum"))).ofNumber(1):
			case (e || (e = o("LSIntEnum"))).ofNumber(4):
			case (e || (e = o("LSIntEnum"))).ofNumber(32):
			case (e || (e = o("LSIntEnum"))).ofNumber(64):
			case (e || (e = o("LSIntEnum"))).ofNumber(1024):
			case (e || (e = o("LSIntEnum"))).ofNumber(536870912):
			case (e || (e = o("LSIntEnum"))).ofNumber(4096):
			case (e || (e = o("LSIntEnum"))).ofNumber(16384):
			case (e || (e = o("LSIntEnum"))).ofNumber(134217728): return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageStatus").VALID);
			case (e || (e = o("LSIntEnum"))).ofNumber(2): {
				if (a != null) switch (a.attachmentType) {
					case (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").STICKER):
					case (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").IMAGE):
					case (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").ANIMATED_IMAGE):
					case (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").VIDEO):
					case (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").AUDIO):
					case (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").FILE):
					case (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").XMA):
					case (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").EPHEMERAL_IMAGE):
					case (e || (e = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").EPHEMERAL_VIDEO): return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageStatus").VALID);
				}
				return;
			}
			case (e || (e = o("LSIntEnum"))).ofNumber(65536):
			case (e || (e = o("LSIntEnum"))).ofNumber(131072):
			case (e || (e = o("LSIntEnum"))).ofNumber(262144): return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageStatus").TEMPORARY_UNAVAILABLE);
			case (e || (e = o("LSIntEnum"))).ofNumber(32768): return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageStatus").UNKNOWN);
			default: return;
		}
	}
	l.MAWReplyBuilder_Message = c;
}), 226);

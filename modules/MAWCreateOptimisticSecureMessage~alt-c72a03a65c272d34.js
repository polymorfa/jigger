__d("MAWCreateOptimisticSecureMessage", [
	"EntMessageReplyType",
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum",
	"LSMessageReplySourceType",
	"LSMessageReplySourceTypeV2",
	"LSMessageSendStatus",
	"LSQuickReplyType",
	"LSReplyMessageAttachmentType",
	"LSReplyMessageStatus",
	"MAWBridgeBuildMsg",
	"MAWMsgReplySnippet",
	"MessagingAttachmentType",
	"QPLUserFlow",
	"ReQL",
	"isMWBumpMessage",
	"qpl",
	"sendToSentQPLLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	async function u(e, t, n, a) {
		if (n == null) return [void 0, void 0];
		var i = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.messages).getKeyRange(t, n.timestampMs, n.messageId));
		r("QPLUserFlow").addPoint(r("qpl")._(25313175, "1551"), "get_reply_msg_end", { instanceKey: a });
		var l = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.attachments).getKeyRange(t, n.messageId));
		return r("QPLUserFlow").addPoint(r("qpl")._(25313175, "1551"), "get_reply_attachment_end", { instanceKey: a }), [i, l];
	}
	async function c(e, t) {
		var n = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.tables.contacts).getKeyRange(t));
		return n == null ? void 0 : n.firstName;
	}
	async function d(t, n, a, i) {
		var l;
		if (n != null) {
			var s = r("isMWBumpMessage")(n.replyType) && n.replyToUserId != null ? n.replyToUserId : n.senderId, u = await c(t, s), d = n.replyStatus != null ? (e || (e = o("I64"))).to_int32(n.replyStatus) === r("LSReplyMessageStatus").DELETED : !1;
			return (l = o("MAWMsgReplySnippet").buildLocalizedReplySnippetLegacy({
				isAuthorMe: !0,
				isBumpMsg: i,
				isDeletedMsg: d,
				recipientName: u,
				replySenderIsMe: (e || (e = o("I64"))).equal(s, a)
			})) == null ? void 0 : l.toString();
		}
	}
	function m(t) {
		if (t != null) {
			var n = t.attachmentType;
			return (e || (e = o("I64"))).equal(n, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").IMAGE)) || (e || (e = o("I64"))).equal(n, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").STICKER)) ? t.previewUrl : void 0;
		}
	}
	function p(t) {
		if (t != null) return (e || (e = o("I64"))).equal(t == null ? void 0 : t.attachmentType, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").IMAGE)) ? (s || (s = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").PHOTO) : (e || (e = o("I64"))).equal(t == null ? void 0 : t.attachmentType, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").STICKER)) ? (s || (s = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").STICKER) : (e || (e = o("I64"))).equal(t == null ? void 0 : t.attachmentType, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").VIDEO)) ? (s || (s = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").VIDEO) : (e || (e = o("I64"))).equal(t == null ? void 0 : t.attachmentType, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").ANIMATED_IMAGE)) ? (s || (s = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").GIF) : (e || (e = o("I64"))).equal(t == null ? void 0 : t.attachmentType, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").EPHEMERAL_IMAGE)) || (e || (e = o("I64"))).equal(t == null ? void 0 : t.attachmentType, (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").EPHEMERAL_VIDEO)) ? (s || (s = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").EPHEMERAL_RAVEN_MESSAGE) : (s || (s = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").OTHER);
	}
	async function _(e, t, n, a, i, l, c, _, f, g, h, y, C, b) {
		var v = await o("sendToSentQPLLogger").measureSendToSentPerformance("optimistic_message_get_reply", _, function() {
			return u(t, l, a, _);
		}), S = v[0], R = v[1], L = o("MAWBridgeBuildMsg").buildOptimisticMessage(i, S, f, C), E = await o("sendToSentQPLLogger").measureSendToSentPerformance("optimistic_message_reply_snippet", _, function() {
			return d(e, S, n, b === !0);
		}), k = babelHelpers.extends({}, L, {
			authorityLevel: (s || (s = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").OPTIMISTIC),
			displayedContentTypes: s.ofNumber(y),
			hasQuickReplies: !1,
			hotEmojiSize: c,
			isAdminMessage: !1,
			isCollapsed: !1,
			isUnsent: !1,
			messageId: g,
			offlineThreadingId: g,
			primarySortKey: h,
			quickReplyType: s.ofNumber(r("LSQuickReplyType").NONE),
			replyAttachmentType: p(R),
			replyMediaPreviewHeight: R == null ? void 0 : R.previewHeight,
			replyMediaPreviewWidth: R == null ? void 0 : R.previewWidth,
			replyMediaUrl: m(R),
			replyMediaUrlMimeType: R == null ? void 0 : R.playableUrlMimeType,
			replySnippet: E,
			replySourceId: a == null ? void 0 : a.messageId,
			replySourceType: a != null ? (s || (s = o("LSIntEnum"))).ofNumber(r("LSMessageReplySourceType").MESSAGE) : void 0,
			replySourceTypeV2: a != null ? (s || (s = o("LSIntEnum"))).ofNumber(r("LSMessageReplySourceTypeV2").MESSAGE) : void 0,
			replyType: b === !0 ? (s || (s = o("LSIntEnum"))).ofNumber(r("EntMessageReplyType").BUMP) : void 0,
			senderId: n,
			sendStatus: s.ofNumber(r("LSMessageSendStatus").SENDING_TO_SERVER),
			sendStatusV2: s.ofNumber(1),
			textHasLinks: !1,
			threadKey: l,
			timestampMs: h,
			transportKey: "WhatsApp",
			viewFlags: s.ofNumber(0)
		});
		return k;
	}
	l.buildOptimisticLsMessage = _;
}), 98);

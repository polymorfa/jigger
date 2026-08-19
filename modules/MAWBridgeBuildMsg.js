__d("MAWBridgeBuildMsg", [
	"fbt",
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum",
	"LSMessageUnsendabilityStatus",
	"MAWAckLevel",
	"MAWBridgeBuildAdminMsg",
	"MAWBridgeBuildMsgMentions",
	"MAWBridgeMsg",
	"MAWBridgeMsgUtils",
	"MAWJids",
	"MAWMsg",
	"MAWMsgReply",
	"MAWMsgReplySnippet",
	"MAWMsgReplyStatus",
	"MAWMsgType",
	"MAWTimeUtils",
	"MAWVault",
	"MWPBumpEntityKey",
	"isMWBumpMessage"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u;
	function c() {
		for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
		return t.filter(Boolean).reduce(function(e, t) {
			return [].concat(e, t);
		}, []);
	}
	function d(e) {
		return e != null ? o("MAWVault").unvault(e) : void 0;
	}
	function m(e) {
		return e != null ? o("MAWVault").vault(e) : void 0;
	}
	function p(e) {
		return babelHelpers.extends({}, e, {
			replyMessageText: m(e.replyMessageText),
			text: m(e.text)
		});
	}
	function _(e) {
		var t, n, r = o("MAWMsgReply").getReplyMessageText(e), a = e.adminContent, i = e.adminMessage, l = e.adminType, u = e.adminVersion, _ = e.content, f = e.isAdminMessage, g = _ != null ? _ : i;
		f && a != null && l != null && (g = o("MAWBridgeBuildAdminMsg").buildAdminMsgText(a, l, u));
		var h = o("MAWMsgReplySnippet").getReplySnippet(e);
		e.type_ === o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE && (g = m(e.replySourceId == null ? "" : h != null ? h : s._(
			/*BTDS*/
			""
		).toString()));
		var y = ((t = e.replyContent) == null ? void 0 : t.replyType) === "MESSAGE" ? (n = e.replyContent) == null || (n = n.replyToLSMessage) == null || (n = n.mentionIds) == null ? void 0 : n.split(",").map(o("MAWJids").toUserJid) : void 0, C = c(e.mentionedJids, o("MAWMsgReply").getReplyMentionedJids(e), y), b = e.commands ? e.commands : [];
		return C.length > 0 || b.length > 0 ? p(o("MAWBridgeBuildMsgMentions").buildMsgTextWithMentions(d(g), C, d(r), b.length > 0 ? b : void 0)) : {
			replyMessageText: r,
			text: g
		};
	}
	function f(t) {
		var n = t.ephemeralDurationInSec;
		return n != null ? (e || (e = o("I64"))).of_int32(n) : void 0;
	}
	function g(e, t, n, a) {
		var i, l = r("isMWBumpMessage")(t == null ? void 0 : t.replyType) ? t == null ? void 0 : t.replyMessageText : t == null ? void 0 : t.text, s = c(n, t == null || (i = t.mentionIds) == null ? void 0 : i.split(",").map(o("MAWJids").toUserJid)), u = a != null ? a : [];
		return s.length > 0 || u.length > 0 ? p(o("MAWBridgeBuildMsgMentions").buildMsgTextWithMentions(d(e), s, d(l), u)) : {
			replyMessageText: l,
			text: e
		};
	}
	function h(t, n) {
		var a, i, l, s, c = _(t), d = t.type_ === o("MAWMsg").unsent, m = o("MAWTimeUtils").toTimestamp(d && (a = t.originalTs) != null ? a : t.ts);
		if (o("MAWMsgReply").getReplyAttachmentId(t) != null && o("MAWMsgReply").getReplyAttachmentPlaintextHash(t) == null) {
			var p;
			o("MWPBumpEntityKey").bumpEntityKeyWithAppId("maw.reply_attachment_media_missing_plaintext_hash", "new_message_handler_for_reply_type_" + (e || (e = o("I64"))).to_float((p = o("MAWMsgReply").getReplyAttachmentType(t)) != null ? p : (e || (e = o("I64"))).zero));
		}
		var g = o("MAWBridgeMsgUtils").convertStringToLSTransportKeyType(t.transportKey);
		return babelHelpers.extends({}, c, {
			adminMsgCtaId: n == null ? void 0 : n.ctaId,
			adminMsgCtaTitle: n == null ? void 0 : n.title,
			adminMsgCtaType: n == null ? void 0 : n.ctaType,
			authorityLevel: (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE),
			cannotUnsendReason: d || !t.isAuthorMe ? (u || (u = o("LSIntEnum"))).ofNumber(r("LSMessageUnsendabilityStatus").DENY_FOR_NON_SENDER) : void 0,
			collapsibleId: t.collapsibleId != null ? (e || (e = o("I64"))).of_float(t.collapsibleId) : void 0,
			displayedContentTypes: o("MAWMsg").getDisplayedContentTypes(t.type_, t.isForwarded, t.isExpiredXmaMsg, t.replySourceId != null, t.unsupportedType, t.xmaMessageType, t.gifPlayback),
			editCount: (e || (e = o("I64"))).of_int32((i = t.editCount) != null ? i : 0),
			ephemeralDurationInSec: f(t),
			groupId: (l = t.groupId) != null ? l : void 0,
			groupIndex: t.groupIndex != null ? (e || (e = o("I64"))).of_float(t.groupIndex) : void 0,
			groupSize: t.groupSize != null ? (e || (e = o("I64"))).of_float(t.groupSize) : void 0,
			hotEmojiSize: o("MAWBridgeMsg").getSpecialTextSize(t),
			isCollapsed: (s = t.isCollapsed) != null ? s : !1,
			isUnsent: d,
			isVisibilityPlaceholder: t.isVisibilityPlaceholder === !0,
			messageId: t.msgId,
			primarySortKey: e.of_float(t.sortOrderMs),
			replyAttachmentId: o("MAWMsgReply").getReplyAttachmentId(t),
			replyAttachmentPlaintextHash: o("MAWMsgReply").getReplyAttachmentPlaintextHash(t),
			replyAttachmentType: o("MAWMsgReply").getReplyAttachmentType(t),
			replyMediaExpirationTimestampMs: o("MAWMsgReply").getReplyMediaExpirationTimestampMs(t),
			replyMediaPreviewHeight: o("MAWMsgReply").getReplyMediaPreviewHeight(t),
			replyMediaPreviewWidth: o("MAWMsgReply").getReplyMediaPreviewWidth(t),
			replySnippet: o("MAWMsgReplySnippet").getReplySnippet(t),
			replySourceId: o("MAWMsgReply").getReplySourceId(t),
			replySourceTimestampMs: o("MAWMsgReply").getReplyTimestampMs(t),
			replySourceType: o("MAWMsgReply").getReplySourceType(t),
			replySourceTypeV2: o("MAWMsgReply").getReplySourceTypeV2(t),
			replyStatus: o("MAWMsgReplyStatus").getLSReplyMessageStatus(t),
			replyToUserId: o("MAWMsgReply").getReplyUserId(t),
			replyType: o("MAWMsgReply").getReplyType(t),
			sendStatus: o("MAWAckLevel").levelToMessagingSendStatus(t.ack),
			sendStatusV2: o("MAWAckLevel").levelToMessagingSendStatusV2(t.ack),
			timestampMs: m,
			transportKey: g,
			unsentTimestampMs: d ? o("MAWTimeUtils").toTimestamp(t.ts) : void 0
		});
	}
	l.getEphemeralDurationInSec = f, l.buildOptimisticMessage = g, l.buildNewAndUpdatedMessageSharedParams = h;
}), 226);

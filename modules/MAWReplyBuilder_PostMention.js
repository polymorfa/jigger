__d("MAWReplyBuilder_PostMention", [
	"EntMessageReplyType",
	"FBLogger",
	"I64",
	"LSIntEnum",
	"LSMessageReplySourceTypeV2",
	"MAWPostMentionXMASnippetFbt"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = {
		buildReplyAttachmentId: function(t) {},
		buildReplyAttachmentPlaintextHash: function(t) {},
		buildReplyAttachmentType: function(t) {},
		buildReplyMediaExpirationTimestampMs: function(t) {},
		buildReplyMediaPreviewHeight: function(t) {},
		buildReplyMediaPreviewWidth: function(t) {},
		buildReplyMessageText: function(t) {
			return "";
		},
		buildReplySnippet: function(t, n, a) {
			var e = t.mentionedUserId;
			if (e == null) {
				r("FBLogger")("messenger_e2ee_web").mustfix("Error building reply snippet without recipient ID");
				return;
			}
			var i = "$PARTICIPANT_FIRST_NAME(" + e + ")", l = n === a, s = l ? o("MAWPostMentionXMASnippetFbt").getCurrentUserSendPostMentionSnippetFbt(i) : o("MAWPostMentionXMASnippetFbt").getParticipantSendPostMentionSnippetFbt(i);
			return s.toString();
		},
		buildReplySourceId: function(t) {},
		buildReplySourceType: function() {
			return (e || (e = o("LSIntEnum"))).ofNumber(r("LSMessageReplySourceTypeV2").MESSAGE);
		},
		buildReplySourceTypeV2: function() {
			return (e || (e = o("LSIntEnum"))).ofNumber(r("LSMessageReplySourceTypeV2").FB_POST_MENTION);
		},
		buildReplyStatus: function(t) {},
		buildReplyTimestampMs: function(t) {
			return t.timestampMs != null ? (s || (s = o("I64"))).of_float(t.timestampMs) : void 0;
		},
		buildReplyType: function(n) {
			return (e || (e = o("LSIntEnum"))).ofNumber(r("EntMessageReplyType").REGULAR);
		},
		buildReplyUserId: function(t) {
			return t.mentionedUserId != null ? (s || (s = o("I64"))).of_string(t.mentionedUserId) : void 0;
		}
	};
	l.MAWReplyBuilder_PostMention = u;
}), 98);

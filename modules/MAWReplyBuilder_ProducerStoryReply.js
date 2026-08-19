__d("MAWReplyBuilder_ProducerStoryReply", [
	"fbt",
	"EntMessageReplyType",
	"I64",
	"LSIntEnum",
	"LSMessageReplySourceTypeV2",
	"LSReplyMessageAttachmentType",
	"LSReplyMessageStatus",
	"MAWMsgType"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = {
		buildReplyAttachmentId: function(n) {
			return n.storyMediaId != null ? (e || (e = o("I64"))).of_float(n.storyMediaId) : void 0;
		},
		buildReplyAttachmentPlaintextHash: function(t) {
			var e;
			return (e = t.storyMediaPlaintextHash) != null ? e : void 0;
		},
		buildReplyAttachmentType: function(t) {
			return (u || (u = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").PHOTO);
		},
		buildReplyMediaExpirationTimestampMs: function(t) {},
		buildReplyMediaPreviewHeight: function(t) {},
		buildReplyMediaPreviewWidth: function(t) {},
		buildReplyMessageText: function(t) {},
		buildReplySnippet: function(t, n, r) {
			var e = n === r, o = "$PARTICIPANT_FIRST_NAME(" + n + ")";
			return e ? s._(
				/*BTDS*/
				""
			).toString() : s._(
				/*BTDS*/
				"",
				[s._param("name", o)]
			).toString();
		},
		buildReplySourceId: function(t) {
			return t.storyUrl;
		},
		buildReplySourceType: function() {
			return (u || (u = o("LSIntEnum"))).ofNumber(r("LSMessageReplySourceTypeV2").STORY);
		},
		buildReplySourceTypeV2: function() {
			return (u || (u = o("LSIntEnum"))).ofNumber(r("LSMessageReplySourceTypeV2").FB_PRODUCER_STORY_REPLY);
		},
		buildReplyStatus: function(t) {
			return t.storyMsgType === o("MAWMsgType").MSG_TYPE.IMAGE ? (u || (u = o("LSIntEnum"))).ofNumber(r("LSReplyMessageStatus").VALID) : void 0;
		},
		buildReplyTimestampMs: function(n) {
			return n.timestampMs != null ? (e || (e = o("I64"))).of_float(n.timestampMs) : void 0;
		},
		buildReplyType: function(t) {
			return (u || (u = o("LSIntEnum"))).ofNumber(r("EntMessageReplyType").REGULAR);
		},
		buildReplyUserId: function(n) {
			return (e || (e = o("I64"))).of_string(n.storyOwnerId);
		}
	};
	l.MAWReplyBuilder_ProducerStoryReply = c;
}), 226);

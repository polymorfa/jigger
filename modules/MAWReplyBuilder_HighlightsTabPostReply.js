__d("MAWReplyBuilder_HighlightsTabPostReply", [
	"fbt",
	"EntMessageReplyType",
	"I64",
	"LSIntEnum",
	"LSMessageReplySourceTypeV2"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = {
		buildReplyAttachmentId: function(t) {},
		buildReplyAttachmentPlaintextHash: function(t) {},
		buildReplyAttachmentType: function(t) {},
		buildReplyMediaExpirationTimestampMs: function(t) {},
		buildReplyMediaPreviewHeight: function(t) {},
		buildReplyMediaPreviewWidth: function(t) {},
		buildReplyMessageText: function(t) {
			return "";
		},
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
			return t.replyToMsgId;
		},
		buildReplySourceType: function() {
			return (e || (e = o("LSIntEnum"))).ofNumber(r("LSMessageReplySourceTypeV2").HIGHLIGHTS_TAB_POST_REPLY);
		},
		buildReplySourceTypeV2: function() {
			return (e || (e = o("LSIntEnum"))).ofNumber(r("LSMessageReplySourceTypeV2").HIGHLIGHTS_TAB_POST_REPLY);
		},
		buildReplyStatus: function(t) {},
		buildReplyTimestampMs: function(t) {
			return t.timestampMs != null ? (u || (u = o("I64"))).of_float(t.timestampMs) : void 0;
		},
		buildReplyType: function(n) {
			return (e || (e = o("LSIntEnum"))).ofNumber(r("EntMessageReplyType").REGULAR);
		},
		buildReplyUserId: function(t) {
			return t.replyToUserId != null ? (u || (u = o("I64"))).of_string(t.replyToUserId) : void 0;
		}
	};
	l.MAWReplyBuilder_HighlightsTabPostReply = c;
}), 226);

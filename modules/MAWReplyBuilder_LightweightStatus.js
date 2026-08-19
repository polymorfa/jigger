__d("MAWReplyBuilder_LightweightStatus", [
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
		buildReplyMediaExpirationTimestampMs: function(n) {
			return n.replyMediaExpirationTimestampMs != null ? (e || (e = o("I64"))).of_float(n.replyMediaExpirationTimestampMs) : void 0;
		},
		buildReplyMediaPreviewHeight: function(t) {},
		buildReplyMediaPreviewWidth: function(t) {},
		buildReplyMessageText: function(t) {
			return t.noteContent;
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
			return (u || (u = o("LSIntEnum"))).ofNumber(r("LSMessageReplySourceTypeV2").LIGHTWEIGHT_STATUS);
		},
		buildReplySourceTypeV2: function() {
			return (u || (u = o("LSIntEnum"))).ofNumber(r("LSMessageReplySourceTypeV2").LIGHTWEIGHT_STATUS);
		},
		buildReplyStatus: function(t) {},
		buildReplyTimestampMs: function(t) {},
		buildReplyType: function(t) {
			return (u || (u = o("LSIntEnum"))).ofNumber(r("EntMessageReplyType").REGULAR);
		},
		buildReplyUserId: function(n) {
			return n.replyToUserId != null ? (e || (e = o("I64"))).of_string(n.replyToUserId) : void 0;
		}
	};
	l.MAWReplyBuilder_LightweightStatus = c;
}), 226);

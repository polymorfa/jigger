__d("MAWReplyBuilder_Story", [
	"fbt",
	"I64",
	"LSIntEnum",
	"LSMessageReplySourceTypeV2",
	"LSReplyMessageAttachmentType"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = {
		buildReplyAttachmentId: function(t) {},
		buildReplyAttachmentPlaintextHash: function(t) {
			var e;
			return (e = t.storyMediaPlaintextHash) != null ? e : void 0;
		},
		buildReplyAttachmentType: function(n) {
			return (e || (e = o("LSIntEnum"))).ofNumber(r("LSReplyMessageAttachmentType").PHOTO);
		},
		buildReplyMediaExpirationTimestampMs: function(t) {},
		buildReplyMediaPreviewHeight: function(t) {},
		buildReplyMediaPreviewWidth: function(t) {},
		buildReplyMessageText: function(t) {},
		buildReplySnippet: function(t, n, r) {
			var e = t.storyOwnerId === r, o = n === r, a = "$PARTICIPANT_FIRST_NAME(" + n + ")", i = "$PARTICIPANT_FIRST_NAME(" + t.storyOwnerId + ")";
			return e ? o ? s._(
				/*BTDS*/
				""
			).toString() : s._(
				/*BTDS*/
				"",
				[s._param("name", a)]
			).toString() : o ? s._(
				/*BTDS*/
				"",
				[s._param("name", i)]
			).toString() : void 0;
		},
		buildReplySourceId: function(t) {
			return t.storyUrl;
		},
		buildReplySourceType: function() {
			return (e || (e = o("LSIntEnum"))).ofNumber(r("LSMessageReplySourceTypeV2").STORY);
		},
		buildReplySourceTypeV2: function() {
			return (e || (e = o("LSIntEnum"))).ofNumber(r("LSMessageReplySourceTypeV2").STORY);
		},
		buildReplyStatus: function(t) {},
		buildReplyTimestampMs: function(t) {
			return t.timestampMs != null ? (u || (u = o("I64"))).of_float(t.timestampMs) : void 0;
		},
		buildReplyType: function(t) {},
		buildReplyUserId: function(t) {
			return (u || (u = o("I64"))).of_string(t.storyOwnerId);
		}
	};
	l.MAWReplyBuilder_StoryReply = c;
}), 226);

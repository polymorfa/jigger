__d("MAWReplyBuilder_StoryMention", [
	"fbt",
	"EntMessageReplyType",
	"FBLogger",
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
		buildReplyMessageText: function(t) {},
		buildReplySnippet: function(t, n, o) {
			var e = t.mentionedUserId;
			if (e == null) {
				r("FBLogger")("messenger_e2ee_web").mustfix("Error building reply snippet without recipient ID");
				return;
			}
			var a = "$PARTICIPANT_FIRST_NAME(" + e + ")", i = n === o;
			return i ? s._(
				/*BTDS*/
				"",
				[s._param("name", a)]
			).toString() : s._(
				/*BTDS*/
				""
			).toString();
		},
		buildReplySourceId: function(t) {},
		buildReplySourceType: function() {
			return (e || (e = o("LSIntEnum"))).ofNumber(r("LSMessageReplySourceTypeV2").MESSAGE);
		},
		buildReplySourceTypeV2: function() {
			return (e || (e = o("LSIntEnum"))).ofNumber(r("LSMessageReplySourceTypeV2").FB_STORY_MENTION);
		},
		buildReplyStatus: function(t) {},
		buildReplyTimestampMs: function(t) {
			return t.timestampMs != null ? (u || (u = o("I64"))).of_float(t.timestampMs) : void 0;
		},
		buildReplyType: function(n) {
			return (e || (e = o("LSIntEnum"))).ofNumber(r("EntMessageReplyType").REGULAR);
		},
		buildReplyUserId: function(t) {
			return t.mentionedUserId != null ? (u || (u = o("I64"))).of_string(t.mentionedUserId) : void 0;
		}
	};
	l.MAWReplyBuilder_StoryMention = c;
}), 226);

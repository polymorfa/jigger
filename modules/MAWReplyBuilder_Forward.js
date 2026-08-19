__d("MAWReplyBuilder_Forward", ["LSIntEnum", "LSMessageReplySourceTypeV2"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = {
		buildReplyAttachmentId: function(t) {},
		buildReplyAttachmentPlaintextHash: function(t) {},
		buildReplyAttachmentType: function(t) {},
		buildReplyMediaExpirationTimestampMs: function(t) {},
		buildReplyMediaPreviewHeight: function(t) {},
		buildReplyMediaPreviewWidth: function(t) {},
		buildReplyMessageText: function(t) {},
		buildReplySnippet: function(t, n, r) {},
		buildReplySourceId: function(t) {},
		buildReplySourceType: function() {
			return (e || (e = o("LSIntEnum"))).ofNumber(r("LSMessageReplySourceTypeV2").FORWARD);
		},
		buildReplySourceTypeV2: function() {
			return (e || (e = o("LSIntEnum"))).ofNumber(r("LSMessageReplySourceTypeV2").FORWARD);
		},
		buildReplyStatus: function(t) {},
		buildReplyTimestampMs: function(t) {},
		buildReplyType: function(t) {},
		buildReplyUserId: function(t) {}
	};
	l.MAWReplyBuilder_Forward = s;
}), 98);

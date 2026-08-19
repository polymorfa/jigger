__d("MpsMessageToBridgeWrapper", [
	"MAWProtobufDeserializers",
	"MAWUserJidWrapper",
	"MpsToBridgeMessageId",
	"WAJids",
	"WATimeUtils",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("WAJids").createJidUtils({ platform: "msgr" }), s = (function() {
		function t(e, t) {
			this.message = e, this.topLevel = t;
		}
		t.fromTopLevel = function(n) {
			return new t(n, n);
		}, t.fromSupplemental = function(n, a) {
			var e, i = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(n.payload), l = {
				messageId: n.messageId,
				payload: n.payload,
				senderId: r("nullthrows")((e = i.proto.metadata) == null ? void 0 : e.senderId),
				threadId: a.threadId,
				timestampMs: n.timestampMs
			};
			return new t(l, a);
		};
		var n = t.prototype;
		return n.getChatJid = function() {
			return o("WAJids").unsafeCoerceToChatJid(this.message.threadId);
		}, n.getExternalId = function() {
			return this.message.messageId;
		}, n.getMsgId = function() {
			return o("MpsToBridgeMessageId").mpsToBridgeMsgId(this.message.threadId, this.message.messageId);
		}, n.getSenderJid = function() {
			return e.toUserJid(this.message.senderId);
		}, n.topLevelMetadata = function() {
			return t.fromTopLevel(this.topLevel);
		}, n.isAuthorMe = function() {
			return o("WAJids").userIdFromJid(o("MAWUserJidWrapper").getMyUserJid()) === this.message.senderId;
		}, n.getAuthor = function() {
			return this.isAuthorMe() ? o("WAJids").AUTHOR_ME : this.getSenderJid();
		}, n.getUnixTs = function() {
			return o("WATimeUtils").castMilliSecondsToUnixTime(this.message.timestampMs);
		}, n.deserialize = function() {
			return o("MAWProtobufDeserializers").DeserializedBackupMessage.create(this.message.payload);
		}, t;
	})();
	l.MpsMessageToBridgeWrapper = s;
}), 98);

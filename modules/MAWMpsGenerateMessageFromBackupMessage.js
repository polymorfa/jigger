__d("MAWMpsGenerateMessageFromBackupMessage", [
	"FBLogger",
	"MAWProtobufDeserializers",
	"MpsTypes",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		try {
			var n, a, i = e.decryptedProtobuf, l = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(i), s = l.payload().kind;
			if (s !== "messageApplication" && s !== "adminMessage") return r("FBLogger")("mps").warn("Expected messageApplication or adminMessage, got %s", s), null;
			var u = (n = l.proto.metadata) == null ? void 0 : n.senderId, c = (a = l.proto.metadata) == null ? void 0 : a.messageId;
			return u != null && c != null ? {
				messageId: o("MpsTypes").toMessageId(c),
				payload: o("MpsTypes").toBytes(i),
				senderId: u,
				threadId: t,
				timestampMs: o("MpsTypes").toTimestamp(e.protobufTimestampMS)
			} : null;
		} catch (e) {
			var d = r("getErrorSafe")(e);
			throw r("FBLogger")("mps").catching(d).mustfix("Runtime error performing generateMessage: %s", d.message), d;
		}
	}
	l.generateMessage = e;
}), 98);

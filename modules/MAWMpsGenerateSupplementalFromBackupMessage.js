__d("MAWMpsGenerateSupplementalFromBackupMessage", [
	"FBLogger",
	"MAWProtobufDeserializers",
	"MpsTypes",
	"WALongInt",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		try {
			var t, n, a = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(e);
			if (a.payload().kind !== "messageApplication") return r("FBLogger")("mps").warn("Expected messageApplication, got %s", a.payload().kind), null;
			var i = (t = a.proto.metadata) == null ? void 0 : t.messageId, l = (n = a.proto.metadata) == null ? void 0 : n.timestampMs;
			return i != null && l != null ? {
				messageId: o("MpsTypes").toMessageId(i),
				payload: o("MpsTypes").toBytes(e),
				timestampMs: o("MpsTypes").toTimestamp(o("WALongInt").numberOrThrowIfTooLarge(l))
			} : null;
		} catch (e) {
			var s = r("getErrorSafe")(e);
			throw r("FBLogger")("mps").catching(s).mustfix("Runtime error performing generateSupplemental: %s", s.message), e;
		}
	}
	l.generateSupplemental = e;
}), 98);

__d("MpsTags", [
	"FBLogger",
	"MAWProtobufDeserializers",
	"MSGDataclassTypes.flow",
	"getErrorSafe",
	"getMediaTypeFromConsumerMessage"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		try {
			var t, n = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(e), a = (t = n.encryptedTransportMessage()) == null || (t = t.consumerMessage()) == null ? void 0 : t.proto, i = o("getMediaTypeFromConsumerMessage").getMediaTypeFromConsumerMessage(a);
			return s(i);
		} catch (e) {
			var l = r("getErrorSafe")(e);
			return r("FBLogger")("wmi").tags(["mps", "mps-tags"]).catching(l).mustfix("Failed to get the tag from the protobuf"), null;
		}
	}
	function s(e) {
		return e === "image" ? o("MSGDataclassTypes.flow").MpsMessageTag.Photo : e === "video" ? o("MSGDataclassTypes.flow").MpsMessageTag.Video : e === "gif" ? o("MSGDataclassTypes.flow").MpsMessageTag.Gif : e === "ptt" ? o("MSGDataclassTypes.flow").MpsMessageTag.Audio : e === "document" ? o("MSGDataclassTypes.flow").MpsMessageTag.File : e === "sticker" || e === "md-app-state" || e === "xma-image" || e === void 0 || e === null ? null : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	l.getTagFromProto = e, l.getMpsMessageTagFromMediaType = s;
}), 98);

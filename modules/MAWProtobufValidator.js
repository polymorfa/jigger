__d("MAWProtobufValidator", [
	"FBLogger",
	"MAWProtobufDeserializers",
	"decodeProtobuf",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		try {
			var n = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(t), a = n.encryptedTransportMessage();
			return a != null ? u(a) : !0;
		} catch (t) {
			var i = r("getErrorSafe")(t);
			return r("FBLogger")("messenger_web").MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Unknown error when trying to validate Protobuf: ", ""])), i.message), !1;
		}
	}
	function u(e) {
		var t = e.consumerMessage();
		if (t != null) return c(t);
		var n = e.armadillo();
		return n != null ? d(n) : !0;
	}
	function c(e) {
		var t = e.imageMessage();
		if (t != null) return m(t.payload);
		var n = e.videoMessage();
		if (n != null) return m(n.payload);
		var r = e.audioMessage();
		if (r != null) return m(r.payload);
		var o = e.stickerMessage();
		if (o != null) return m(o.payload);
		var a = e.documentMessage();
		return a != null ? m(a.payload) : !0;
	}
	function d(e) {
		var t = e.extendedContentMessage();
		if (t != null) {
			var n = t.previews();
			for (var r of n) if (!m(r)) return !1;
			return !0;
		}
		return !0;
	}
	function m(e) {
		var t, n, r, a, i, l, s, u;
		if (!(e != null && (t = e.integral) != null && t.transport)) return !1;
		var c = (n = e.integral) == null ? void 0 : n.transport;
		return !(o("decodeProtobuf").getUnknownFields(c.integral) != null || ((r = c.integral) == null ? void 0 : r.fileSha256) == null || ((a = c.integral) == null ? void 0 : a.fileEncSha256) == null || ((i = c.integral) == null ? void 0 : i.mediaKey) == null || ((l = c.integral) == null ? void 0 : l.directPath) == null || ((s = c.integral) == null ? void 0 : s.mediaKeyTimestamp) == null || ((u = c.ancillary) == null ? void 0 : u.objectId) == null);
	}
	l.isProtobufValid = s, l.isAttachmentValid = m;
}), 98);

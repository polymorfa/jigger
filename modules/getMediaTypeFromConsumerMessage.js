__d("getMediaTypeFromConsumerMessage", ["WAMediaTransport.pb", "decodeProtobuf"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t, n, r, o = ((t = e.ancillary) == null ? void 0 : t.gifPlayback) === !0 || ((n = e.ancillary) == null ? void 0 : n.gifAttribution) != null, a = (r = e.integral) == null || (r = r.transport) == null || (r = r.ancillary) == null ? void 0 : r.mimetype;
		return o && !(a != null && a.startsWith("video/")) ? "gif" : "video";
	}
	function s(t) {
		var n, r = t == null || (n = t.payload) == null ? void 0 : n.content;
		if ((r == null ? void 0 : r.audioMessage) != null) return "ptt";
		if ((r == null ? void 0 : r.videoMessage) != null) {
			var a, i = r == null || (a = r.videoMessage) == null || (a = a.video) == null ? void 0 : a.payload, l = o("decodeProtobuf").decodeProtobuf(o("WAMediaTransport.pb").VideoTransportSpec, i);
			return e(l);
		}
		if ((r == null ? void 0 : r.documentMessage) != null) return "document";
		if ((r == null ? void 0 : r.stickerMessage) != null) return "sticker";
		if ((r == null ? void 0 : r.imageMessage) != null) return "image";
		if ((r == null ? void 0 : r.extendedContentMessage) != null) return "xma-image";
	}
	l.getMediaTypeForVideo = e, l.getMediaTypeFromConsumerMessage = s;
}), 98);

__d("MAWMediaUtils", [
	"FBLogger",
	"MAWDbMedia",
	"MAWDexieTable",
	"MAWHMACKey",
	"MAWImageUtils",
	"MAWMsgType",
	"WABlobToArrayBuffer",
	"WAGlobals",
	"WAHashUtils",
	"WAMsgType",
	"WATimeUtils",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		switch (t === void 0 && (t = "media"), e) {
			case o("MAWDbMedia").MEDIA_TYPE.IMAGE: return t === "xma-media" ? "xma-image" : "image";
			case o("MAWDbMedia").MEDIA_TYPE.VIDEO: return "video";
			case o("MAWDbMedia").MEDIA_TYPE.PTT: return "ptt";
			case o("MAWDbMedia").MEDIA_TYPE.GIF: return "gif";
			case o("MAWDbMedia").MEDIA_TYPE.STICKER: return "sticker";
			case o("MAWDbMedia").MEDIA_TYPE.DOCUMENT_FILE: return "document";
			default: throw r("FBLogger")("messenger_web").mustfixThrow("get a wrong media file with type %s", e);
		}
	}
	function s(e) {
		try {
			return o("WABlobToArrayBuffer").blobToArrayBuffer(e).then(u);
		} catch (e) {
			var t = r("getErrorSafe")(e);
			throw r("FBLogger")("messenger_web").mustfixThrow("Got %s when convert the blob to Uint8Array", t.message);
		}
	}
	function u(e) {
		return self.crypto.subtle.digest("SHA-256", e).then(function(e) {
			return new Uint8Array(e);
		});
	}
	async function c(e) {
		var t = await s(e), n = o("WAHashUtils").toPlaintextHash(t), r = m(n);
		return [n, r];
	}
	async function d(e) {
		var t = await u(e), n = o("WAHashUtils").toPlaintextHash(t);
		return n;
	}
	function m(e) {
		var t = o("WAGlobals").getHMACKey();
		return o("WAHashUtils").toHashedPlaintextHash(o("MAWHMACKey").hmacTweetNaCl(e, t));
	}
	function p(e) {
		if (e == null) return null;
		var t = "preview-" + o("WATimeUtils").unixTime().toString() + ".jpeg";
		return _(e, t, "image/jpeg");
	}
	function _(e, t, n) {
		return new File([new Blob([new Uint8Array(e)], { type: n })], t, { type: n });
	}
	function f(e, t, n) {
		var r = function() {
			return n != null ? o("MAWDexieTable").dexieResolve(n.filter(function(e) {
				return e.type !== o("WAMsgType").REVOKED && t.msgIds.includes(e.msgId);
			})) : e.messages.where("msgId").anyOf(t.msgIds).filter(function(e) {
				return e.type !== o("WAMsgType").REVOKED;
			}).toArray();
		};
		return r().then(function(e) {
			return h(t, e);
		});
	}
	function g(e) {
		return e.reduce(function(e, t) {
			var n = t.hdType;
			return n != null && (e[t.msgId] = n), e;
		}, {});
	}
	function h(e, t) {
		var n = t.filter(function(t) {
			return t.type !== o("WAMsgType").REVOKED && e.msgIds.includes(t.msgId);
		}), a = n.map(function(e) {
			return e.msgId;
		}), i = babelHelpers.extends({}, e, { msgIds: a }), l = n.reduce(function(e, t) {
			return e[t.msgId] = o("WATimeUtils").castToMillisTime(t.sortOrderMs != null ? t.sortOrderMs : t.ts * 1e3), e;
		}, {});
		if (i = babelHelpers.extends({}, i, { messagesSortOrderMs: l }), n.every(function(e) {
			return e.type === o("WAMsgType").STICKER;
		})) {
			var s = o("MAWImageUtils").boundHeightWidth(i.previewHeight, i.previewWidth, o("MAWImageUtils").STICKER_THUMBNAIL_MAX_SIZE), u = s.height, c = s.width;
			i = babelHelpers.extends({}, i, {
				mediaType: o("MAWDbMedia").MEDIA_TYPE.STICKER,
				previewHeight: u,
				previewHeightLarge: u,
				previewWidth: c,
				previewWidthLarge: c
			});
		}
		var d = new Set(n.map(function(e) {
			return e.type;
		}));
		return d.forEach(function(t) {
			t !== o("MAWMsgType").MSG_TYPE.RAVEN && e.mediaType !== y(t) && r("FBLogger")("messenger_web").mustfix("Message and media type mismatch: message with type %s is associated with media with type %s", t, e.mediaType);
		}), i;
	}
	function y(e) {
		switch (e) {
			case o("MAWMsgType").MSG_TYPE.IMAGE: return o("MAWDbMedia").MEDIA_TYPE.IMAGE;
			case o("MAWMsgType").MSG_TYPE.VIDEO: return o("MAWDbMedia").MEDIA_TYPE.VIDEO;
			case o("MAWMsgType").MSG_TYPE.PTT: return o("MAWDbMedia").MEDIA_TYPE.PTT;
			case o("MAWMsgType").MSG_TYPE.GIF: return o("MAWDbMedia").MEDIA_TYPE.GIF;
			case o("MAWMsgType").MSG_TYPE.STICKER: return o("MAWDbMedia").MEDIA_TYPE.STICKER;
			case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE: return o("MAWDbMedia").MEDIA_TYPE.DOCUMENT_FILE;
		}
	}
	function C(e) {
		var t, n, r, o = ((t = e.ancillary) == null ? void 0 : t.gifPlayback) === !0, a = (n = (r = e.integral) == null || (r = r.transport) == null || (r = r.ancillary) == null || (r = r.mimetype) == null ? void 0 : r.startsWith("image")) != null ? n : !1;
		return o && a;
	}
	function b(e) {
		var t, n, r, o = ((t = e.ancillary) == null ? void 0 : t.gifPlayback) === !0, a = (n = (r = e.integral) == null || (r = r.transport) == null || (r = r.ancillary) == null || (r = r.mimetype) == null ? void 0 : r.startsWith("video")) != null ? n : !1;
		return o && a;
	}
	l.getServerMediaTypeFromMediaType = e, l.hashBlob = s, l.genBlobHashes = c, l.genHashFromArrayBuffer = d, l.genHMACPlaintextHash = m, l.convertJpegThumbnailArrayBufferToFile = p, l.getBridgeMediaAnnotatedForDisplay = f, l.createHdTypesForBridgeMedia = g, l.annotateBridgeMediaForDisplay = h, l.isTransportLegacyGif = C, l.isTransportVideoGif = b;
}), 98);

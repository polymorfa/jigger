__d("MAWParseNoteReplyMsg", [
	"FBLogger",
	"MAWJids",
	"MAWMsgType",
	"WAJids",
	"WALongInt",
	"WAMediaTransport.pb",
	"WAMsgType",
	"WAParseMediaTransportProtocol",
	"WAParseProtocolUtils",
	"WAParseReadOnlyMetadataDataclassUtils",
	"WATimeUtils",
	"decodeProtobuf"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t, n, a = e.content, i = e.ebTimestampMs, l = e.meta, s = e.metadata, u = a.noteReplyMessage;
		if (o("WAParseReadOnlyMetadataDataclassUtils").isNoteMention(s)) return "noteMention";
		if (u == null) throw r("FBLogger")("messenger_web").mustfixThrow("noteReplyMessage has no content");
		var c = (t = u.noteText) == null ? void 0 : t.text;
		if (c == null) throw r("FBLogger")("messenger_web").mustfixThrow("noteReplyMessage has no note text");
		var d = u.noteTimestampMs != null ? o("WATimeUtils").castMilliSecondsToUnixTime(o("WALongInt").numberOrThrowIfTooLarge(u.noteTimestampMs)) : void 0, m = o("MAWJids").toUserJid(l.id.author), p = o("MAWJids").toUserJid(l.id.chat), _ = p === m ? o("WAJids").AUTHOR_ME : p, f = o("WAParseProtocolUtils").parseEphemerality(l, s), g = f.deleteTs, h = f.ephemeralSetting, y = f.expirationTs, C = {
			ack: l.ack,
			deleteTs: g,
			ebTimestampMs: i,
			ephemeralSetting: h,
			expirationTs: y,
			forwardingScore: l.forwardingScore,
			id: {
				author: l.id.author,
				chat: l.id.chat,
				externalId: l.id.externalId
			},
			quote: {
				content: {
					author: _,
					expirationTs: d,
					externalId: l.id.externalId,
					msgContent: { content: c },
					ts: l.serverTs,
					type: o("WAMsgType").NOTE_REPLY
				},
				remoteJid: l.id.chat
			},
			ts: l.serverTs
		}, b, v, S, R = (n = u.textContent) == null ? void 0 : n.text, L = u.stickerContent, E = u.videoContent;
		if (R != null) {
			var k = babelHelpers.extends({
				msgContent: { content: R },
				type: o("MAWMsgType").MSG_TYPE.TEXT
			}, C);
			b = k;
		} else if (L != null) {
			var I = o("decodeProtobuf").decodeProtobuf(o("WAMediaTransport.pb").StickerTransportSpec, L == null ? void 0 : L.payload);
			if (v = o("WAParseMediaTransportProtocol").parseStickerMsg(I, l.ts), v) {
				var T = babelHelpers.extends({
					mediaId: v.plaintextHash,
					type: o("MAWMsgType").MSG_TYPE.STICKER
				}, C);
				b = T;
			} else {
				var D;
				if (((D = I.integral) == null ? void 0 : D.receiverFetchId) != null) {
					if (S = o("WAParseMediaTransportProtocol").parseStickerReceiverFetchInfo(I), S == null) throw r("FBLogger")("messenger_web").mustfixThrow("consumerMessage has no sticker receiver fetch info");
					var x = babelHelpers.extends({ type: o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH }, C);
					b = x;
				} else throw r("FBLogger")("messenger_web").mustfixThrow("noteReplyMessage sticker has no media");
			}
		} else if (E != null) {
			var $, P, N = o("decodeProtobuf").decodeProtobuf(o("WAMediaTransport.pb").VideoTransportSpec, E == null ? void 0 : E.payload), M = N == null || ($ = N.integral) == null || ($ = $.transport) == null || ($ = $.ancillary) == null ? void 0 : $.mimetype, w = (N == null || (P = N.ancillary) == null ? void 0 : P.gifPlayback) === !0 && M === "image/gif";
			if (v = o("WAParseMediaTransportProtocol").parseVideoMsg(N, l.ts, w), v && w) {
				var A = babelHelpers.extends({
					mediaId: v.plaintextHash,
					type: o("MAWMsgType").MSG_TYPE.GIF
				}, C);
				b = A;
			} else throw v ? r("FBLogger")("messenger_web").mustfixThrow("noteReplyMessage video is not a gif") : r("FBLogger")("messenger_web").mustfixThrow("noteReplyMessage video has no media");
		} else throw r("FBLogger")("messenger_web").mustfixThrow("noteReplyMessage has no valid content");
		return {
			contentTypeForLogging: "noteReplyMessage",
			unstoredMedia: v,
			unstoredMsg: b,
			unstoredQuotedMedia: null,
			unstoredReceiverFetchInfo: S,
			unstoredXMA: null
		};
	}
	l.default = e;
}), 98);

__d("MAWParseBumpExistingMessageMsg", [
	"FBLogger",
	"WAMessageKey",
	"WAParseConsumerMessageProtocol",
	"WAParseProtocolUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = e.chat, n = e.content, a = e.meta, i = e.metadata, l = n.bumpExistingMessage;
		if (l == null) throw r("FBLogger")("messenger_web").mustfixThrow("bumpExistingMessage has no content");
		var s = l.key;
		if (s == null) throw r("FBLogger")("messenger_web").mustfixThrow("bumpExistingMessage has no message key");
		var u = o("WAParseConsumerMessageProtocol").interpretAsNonSystemAuthor(a.id.author), c = o("WAMessageKey").extractProtocolMessageId(t, u, s), d = c.author, m = c.externalId, p = o("WAParseProtocolUtils").parseEphemerality(a, i), _ = p.deleteTs, f = p.ephemeralSetting, g = p.expirationTs, h = {
			ack: a.ack,
			deleteTs: _,
			ephemeralSetting: f,
			expirationTs: g,
			id: {
				author: a.id.author,
				chat: a.id.chat,
				externalId: a.id.externalId
			},
			quote: {
				content: {
					author: d,
					externalId: m,
					ts: null,
					type: "Unavailable"
				},
				remoteJid: t
			},
			reportingMeta: a.reportingMeta,
			sentTs: a.sentTs,
			serverTs: a.serverTs,
			ts: a.serverTs,
			type: "BumpExistingMessage"
		};
		return {
			contentTypeForLogging: "bumpExistingMessage",
			unstoredMedia: null,
			unstoredMsg: h,
			unstoredQuotedMedia: null,
			unstoredXMA: null
		};
	}
	l.default = e;
}), 98);

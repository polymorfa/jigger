__d("MAWParseRavenMsg", [
	"FBLogger",
	"MAWMsg",
	"MAWMsgType",
	"MAWParseSubprotocolVersionConsts",
	"WALogger",
	"WAMediaTransport.pb",
	"WAParseMediaTransportProtocol",
	"WAParseProtocolUtils",
	"decodeProtobuf"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t) {
		var n = t.content, a = t.ebTimestampMs, i = t.meta, l = t.metadata, u = n.ravenMessageMsgr;
		if (u == null) throw r("FBLogger")("messenger_web").mustfixThrow("Raven message payload has no content");
		var c = o("MAWMsg").MAWRavenMsgEphemeralType.cast(u.ephemeralType);
		if (c == null) throw r("FBLogger")("messenger_web").mustfixThrow("Error when casting ephemeralType for Raven message");
		var d = void 0, m = void 0;
		if (u.imageMessage) (u.imageMessage.version == null || u.imageMessage.version < o("MAWParseSubprotocolVersionConsts").RAVEN_IMAGE_MESSAGE_SUBPROTOCOL_VERSION) && o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["\n        received image messsage version is older than expected ", ". "])), o("MAWParseSubprotocolVersionConsts").RAVEN_IMAGE_MESSAGE_SUBPROTOCOL_VERSION), d = o("WAParseMediaTransportProtocol").decodeImageTransport(u.imageMessage.payload, i.ts, "image"), m = o("MAWMsg").MAWRavenMsgMediaType.IMAGE;
		else if (u.videoMessage) {
			(u.videoMessage.version == null || u.videoMessage.version < o("MAWParseSubprotocolVersionConsts").RAVEN_VIDEO_MESSAGE_SUBPROTOCOL_VERSION) && o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["\n        received video messsage version is older than expected ", ". "])), o("MAWParseSubprotocolVersionConsts").RAVEN_VIDEO_MESSAGE_SUBPROTOCOL_VERSION);
			var p = o("decodeProtobuf").decodeProtobufWithUnknowns(o("WAMediaTransport.pb").VideoTransportSpec, u.videoMessage.payload);
			d = o("WAParseMediaTransportProtocol").parseVideoMsg(p, i.ts, !1), m = o("MAWMsg").MAWRavenMsgMediaType.VIDEO;
		} else throw r("FBLogger")("messenger_web").mustfixThrow("Error unsupported Raven message type");
		if (d == null) throw r("FBLogger")("messenger_web").mustfixThrow("Error Raven message has no associated image or video");
		var _ = o("WAParseProtocolUtils").parseEphemerality(i, l), f = _.deleteTs, g = _.ephemeralSetting, h = _.expirationTs, y = {
			ack: i.ack,
			deleteTs: f,
			ebTimestampMs: a,
			ephemeralSetting: g,
			expirationTs: h,
			id: i.id,
			mediaId: d.plaintextHash,
			ravenEphemeralMediaState: c === o("MAWMsg").MAWRavenMsgEphemeralType.KEEP_IN_CHAT ? o("MAWMsg").MAWRavenMsgEphemeralMediaState.PERMANENT : o("MAWMsg").MAWRavenMsgEphemeralMediaState.UNSEEN,
			ravenEphemeralType: c,
			ravenMediaType: m,
			reportingMeta: i.reportingMeta,
			sentTs: i.sentTs,
			serverTs: i.serverTs,
			ts: i.ts,
			type: o("MAWMsgType").MSG_TYPE.RAVEN
		};
		return {
			unstoredMedia: d,
			unstoredMsg: y,
			unstoredQuotedMedia: null,
			unstoredXMA: null
		};
	}
	l.parseRavenMessage = u;
}), 98);

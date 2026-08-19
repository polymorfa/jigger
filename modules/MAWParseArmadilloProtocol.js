__d("MAWParseArmadilloProtocol", [
	"FBLogger",
	"MAWMessageParseError",
	"MAWMsgType",
	"MAWParseBumpExistingMessageMsg",
	"MAWParseNetworkVerificationMsg",
	"MAWParseNoteReplyMsg",
	"MAWParseRavenActionNotificationMsg",
	"MAWParseRavenMsg",
	"MAWParseScreenshotActionMsg",
	"MAWParseXMAProtocol",
	"WAArmadilloApplication.pb",
	"WAHex",
	"WALogger",
	"decodeProtobuf",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = new Map([
		["screenshotAction", o("MAWParseScreenshotActionMsg").parseEphemeralScreenshotActionProtocol],
		["extendedContentMessage", o("MAWParseXMAProtocol").parseXMAProtocol],
		["paymentsTransactionMessage", o("MAWParseXMAProtocol").parseXMAProtocol],
		["noteReplyMessage", r("MAWParseNoteReplyMsg")],
		["bumpExistingMessage", r("MAWParseBumpExistingMessageMsg")],
		["ravenMessageMsgr", o("MAWParseRavenMsg").parseRavenMessage],
		["ravenActionNotifMessage", o("MAWParseRavenActionNotificationMsg").parseRavenActionNotificationMessage],
		["networkVerificationMessage", o("MAWParseNetworkVerificationMsg").parseNetworkVerificationMsg]
	]);
	function c(t, n, a, i, l, c) {
		var p, _ = o("decodeProtobuf").decodeProtobufWithUnknowns(o("WAArmadilloApplication.pb").ArmadilloSpec, n), f = (p = _.payload) == null ? void 0 : p.content;
		if (!f) throw new (o("MAWMessageParseError")).MAWMessageParseError("parse_armadillo_protocol_error:: empty_payload_content");
		var g = m(f);
		try {
			var h = u.get(g), y = null;
			if (h != null) {
				var C = h({
					chat: t,
					content: f,
					ebTimestampMs: c,
					meta: a,
					metadata: l,
					protobuf: i
				});
				if (typeof C != "string") return C;
				y = C;
			}
			return o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["MAWParseArmadilloProtocol - handling futureproof message for contentType: ", ""])), g), {
				contentTypeForLogging: g,
				unstoredMedia: null,
				unstoredMsg: {
					ack: a.ack,
					id: a.id,
					msgContent: {
						protobuf: o("WAHex").bytesToBuffer(i),
						subtype: y != null ? y : d(g)
					},
					reportingMeta: a.reportingMeta,
					sentTs: a.sentTs,
					serverTs: a.serverTs,
					ts: a.ts,
					type: o("MAWMsgType").MSG_TYPE.FUTUREPROOF
				},
				unstoredQuotedMedia: null,
				unstoredXMA: null
			};
		} catch (e) {
			var b = r("getErrorSafe")(e);
			throw o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
				"MAWParseArmadilloProtocol - Dropping message. contentType: ",
				", reason: ",
				""
			])), g, b.message), new (o("MAWMessageParseError")).MAWMessageParseError("parse_armadillo_protocol_error:: contentType:: " + g + " reason:: " + b.message);
		}
	}
	function d(e) {
		switch (e) {
			case "bumpExistingMessage": return "bumpMessage";
			default: return null;
		}
	}
	function m(e) {
		var t = Object.keys(e).filter(function(e) {
			return e !== "$$unknownFieldCount";
		});
		if (t.length !== 1) throw r("FBLogger")("messenger_web").mustfixThrow(JSON.stringify(e) + " armadillo payload content should only have one field");
		var n = t[0];
		return n;
	}
	l.parseArmadilloProtocol = c, l.parseOneOfContentType = m;
}), 98);

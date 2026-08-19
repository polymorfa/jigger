__d("MAWSendMsgUtil", [
	"MAWMediaType",
	"WAArmadilloApplication.pb",
	"WAConsumerApplication.pb",
	"WAMsgType",
	"decodeProtobuf",
	"getMediaTypeFromConsumerMessage"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = o("MAWMediaType").getMediaType(e), n = e === o("WAMsgType").MSG_TYPE.REVOKED;
		return t != null ? {
			mediaType: t,
			type: "media"
		} : e === o("WAMsgType").MSG_TYPE.SK_DISTRIBUTION ? {
			isInvisible: !0,
			isRevoked: !1,
			type: "text"
		} : {
			isRevoked: n,
			type: "text"
		};
	}
	function s(t) {
		var n = o("MAWMediaType").getMediaType(t);
		if (n != null) return {
			mediaType: n,
			type: "media"
		};
		switch (t) {
			case "XMA":
			case "Raven":
			case "RavenAction":
			case "EphemeralScreenshotAction":
			case "EditAction":
			case "BumpExistingMessage": return {
				isRevoked: !1,
				type: "text"
			};
			default: return e(t);
		}
	}
	function u(e) {
		var t, n, r = (t = e.payload) == null || (t = t.subProtocol) == null ? void 0 : t.consumerMessage, a = (n = e.payload) == null || (n = n.subProtocol) == null ? void 0 : n.armadillo;
		if (r != null) {
			var i, l, s = o("decodeProtobuf").decodeProtobuf(o("WAConsumerApplication.pb").ConsumerApplicationSpec, r.payload);
			if ((s == null || (i = s.payload) == null || (i = i.content) == null ? void 0 : i.reactionMessage) != null) return { type: "reaction" };
			if (s != null && (l = s.payload) != null && (l = l.applicationData) != null && l.revoke) return {
				isRevoked: !0,
				type: "text"
			};
			var u = o("getMediaTypeFromConsumerMessage").getMediaTypeFromConsumerMessage(s);
			if (u != null) return {
				mediaType: u,
				type: "media"
			};
		}
		if (a != null) {
			var c = o("decodeProtobuf").decodeProtobuf(o("WAArmadilloApplication.pb").ArmadilloSpec, a.payload), d = o("getMediaTypeFromConsumerMessage").getMediaTypeFromConsumerMessage(c);
			if (d != null) return {
				mediaType: d,
				type: "media"
			};
		}
		return {
			isRevoked: !1,
			type: "text"
		};
	}
	l.getMessageTypeFromMsg = s, l.getMessageTypeFromMessageApplication = u;
}), 98);

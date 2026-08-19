__d("MpsMessageToSearchBridge", ["MpsMessageToBridgeWrapper"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["content"];
	function s(e) {
		var t, n = o("MpsMessageToBridgeWrapper").MpsMessageToBridgeWrapper.fromTopLevel(e.toplevelProtobuf);
		if (e.expiryTimestampMs == null) {
			var r = (t = n.deserialize().encryptedTransportMessage()) == null || (t = t.consumerMessage()) == null || (t = t.payload) == null || (t = t.content) == null || (t = t.messageText) == null ? void 0 : t.text;
			return r == null ? null : {
				chatJid: n.getChatJid(),
				externalId: n.getExternalId(),
				msg: {
					content: r,
					sender: n.message.senderId,
					ts: n.getUnixTs()
				},
				sortOrderMs: n.message.timestampMs
			};
		}
	}
	function u(t) {
		var n = t.content, r = babelHelpers.objectWithoutPropertiesLoose(t, e), a = o("MpsMessageToBridgeWrapper").MpsMessageToBridgeWrapper.fromTopLevel(r);
		return {
			chatJid: a.getChatJid(),
			externalId: a.getExternalId(),
			msg: {
				content: n,
				sender: a.message.senderId,
				ts: a.getUnixTs()
			},
			sortOrderMs: a.message.timestampMs
		};
	}
	l.messageToSearchBridge = s, l.messageToSearchBridgeV2 = u;
}), 98);

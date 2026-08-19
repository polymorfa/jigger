__d("MpsMessageToBridge", [
	"FBLogger",
	"MAWMsgType",
	"MpsAdminMsgToBridge",
	"MpsBumpMessageToBridgeMsg",
	"MpsEditToBridge",
	"MpsEphemeralMessageToBridge",
	"MpsForwardToBridge",
	"MpsFutureproofToBridge",
	"MpsMediaToBridge",
	"MpsMessageTextToBridge",
	"MpsMessageToBridgeWrapper",
	"MpsNoteReplyToBridge",
	"MpsRavenToBridge",
	"MpsReactionToBridge",
	"MpsReceiverFetchInfoToBridge",
	"MpsReplyToBridge",
	"MpsRevokeMessageToBridgeMsg",
	"MpsScreenshotActionToBridgeMsg",
	"MpsUnsupportedMessagesToBridge",
	"MpsWaAdminMsgToBridge",
	"MpsWaPlaceholderToBridge",
	"MpsXmaMentionToBridge",
	"MpsXmaStoryReplyToBridge",
	"MpsXmaToBridge",
	"WAGetPlatformFromStanzaId",
	"WAJids",
	"WAStanzaUtils",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = [
		o("MpsUnsupportedMessagesToBridge").unsupportedMessagesBridgeMsg,
		o("MpsMessageTextToBridge").messageTextToBridgeMsg,
		o("MpsMediaToBridge").mediaToBridge,
		o("MpsAdminMsgToBridge").adminMsgToBridgeMsg,
		o("MpsScreenshotActionToBridgeMsg").screenshotActionToBridgeMsg,
		o("MpsRevokeMessageToBridgeMsg").revokeMessageToBridgeMsg,
		o("MpsBumpMessageToBridgeMsg").bumpMessageToBridgeMsg,
		o("MpsWaAdminMsgToBridge").waAdminMsgToBridgeMsg,
		(e = o("MpsXmaToBridge")).xmaToBridge,
		o("MpsXmaStoryReplyToBridge").storyReplyToBridge,
		o("MpsRavenToBridge").ravenToBridge,
		o("MpsNoteReplyToBridge").noteReplyToBridge,
		o("MpsWaPlaceholderToBridge").waPlaceholderToBridgeMsg,
		o("MpsFutureproofToBridge").futureproofBridgeMsg
	], u = [o("MpsEditToBridge").editMessageToBridgeMsg, o("MpsReactionToBridge").reactionMessageToBridgeMsg], c = [
		o("MpsEditToBridge").processEditedMessage,
		o("MpsReplyToBridge").processReplyMessage,
		o("MpsMediaToBridge").processAttachment,
		o("MpsEphemeralMessageToBridge").processEphemeralMessage,
		o("MpsReceiverFetchInfoToBridge").processReceiverFetchInfo,
		e.processXmaAttachment,
		e.processXmaAssociatedMessageAttachment,
		o("MpsXmaMentionToBridge").processXmaMention,
		o("MpsRavenToBridge").processRavenAttachment,
		o("MpsForwardToBridge").processForwarding,
		o("MpsNoteReplyToBridge").processNoteReply,
		o("MpsNoteReplyToBridge").processNoteReplyAttachment,
		e.processXmaExpiration
	];
	function d(e, t) {
		for (var n of e) try {
			var a = n(t);
			if (a != null) return a;
		} catch (e) {
			var i = o("WAStanzaUtils").toStanzaId(t.getExternalId()), l = o("WAJids").interpretAsGroupJid(t.getChatJid()) != null;
			throw r("FBLogger")("mps").catching(r("getErrorSafe")(e)).mustfixThrow("mpsMessagetoBridge failed to create a bridge object for message from platform: %s, is_group: %s", o("WAGetPlatformFromStanzaId").getPlatformFromStanzaId(i), l);
		}
	}
	function m(e) {
		var t = o("MpsMessageToBridgeWrapper").MpsMessageToBridgeWrapper.fromTopLevel(e.toplevelProtobuf), n = d(s, t);
		if (n != null && !(n.kind === "bridgeMsg" && n.value.type_ === o("MAWMsgType").MSG_TYPE.ADMIN && n.value.adminType == null)) {
			if (n.kind === "bridgeMsg" && n.value.type_ === o("MAWMsgType").MSG_TYPE.FUTUREPROOF) return {
				supplementals: [],
				topLevel: n
			};
			var r = e.supplementalProtobufs.values().toArray().map(function(t) {
				return d(u, o("MpsMessageToBridgeWrapper").MpsMessageToBridgeWrapper.fromSupplemental(t, e.toplevelProtobuf));
			}).filter(Boolean), a = c.reduce(function(e, t) {
				return t(e);
			}, {
				message: t,
				supplementalMessages: e.supplementalProtobufs,
				supplementals: r,
				topLevel: n
			});
			return {
				supplementals: a.supplementals,
				topLevel: a.topLevel
			};
		}
	}
	l.mpsFullMessagetoBridge = m;
}), 98);

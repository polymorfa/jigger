__d("MAWAsConsumerApplication", [
	"FBLogger",
	"I64",
	"LSIntEnum",
	"MAWEncodeMediaTransportProtocol",
	"MAWJids",
	"MAWMsgType",
	"MAWVault",
	"WAAssertUnreachable",
	"WAConsumerApplication.pb",
	"WAGlobals",
	"WAJids",
	"WAMediaTransport.pb",
	"encodeProtobuf",
	"validateMAWMediaAndComposeEntryForProtoMsg"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e, t, n, a) {
		switch (e.type) {
			case o("MAWMsgType").MSG_TYPE.TEXT: return d(e);
			case o("MAWMsgType").MSG_TYPE.IMAGE: return m(e, t);
			case o("MAWMsgType").MSG_TYPE.VIDEO: return h(e, t);
			case o("MAWMsgType").MSG_TYPE.PTT: return C(e, t);
			case o("MAWMsgType").MSG_TYPE.REVOKED: return v(e.revokedExternalId);
			case o("MAWMsgType").MSG_TYPE.GIF: return h(e, t);
			case o("MAWMsgType").MSG_TYPE.STICKER: return f(e, t);
			case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE: return T(e, t);
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SYNC_RESPONSE:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_CHANGE_FROM_CURRENT_DEVICE:
			case o("MAWMsgType").MSG_TYPE.SK_DISTRIBUTION: return null;
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN: throw r("FBLogger")("messenger_web").mustfixThrow("Implemented ephemeral setting message in MAWAsConsumerApplication");
			case o("MAWMsgType").MSG_TYPE.XMA: throw r("FBLogger")("messenger_web").mustfixThrow("XMA content message is not consumer application. It should be addressed as ArmadilloApplication");
			case o("MAWMsgType").MSG_TYPE.FUTUREPROOF:
			case o("MAWMsgType").MSG_TYPE.CIPHERTEXT:
			case o("MAWMsgType").MSG_TYPE.UNAVAILABLE:
			case o("MAWMsgType").MSG_TYPE.EXPIRED_EPHEMERAL:
			case o("MAWMsgType").MSG_TYPE.ADMIN:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION:
			case o("MAWMsgType").MSG_TYPE.DELETE_FOR_ME: throw r("FBLogger")("messenger_web").mustfixThrow("We do not support converting to protoMsg with " + e.type + " type", "maw_db");
			case o("MAWMsgType").MSG_TYPE.RAVEN:
			case o("MAWMsgType").MSG_TYPE.RAVEN_ACTION: throw r("FBLogger")("messenger_web").mustfixThrow("Raven content message is not consumer application. It should be addressed as ArmadilloApplication");
			case o("MAWMsgType").MSG_TYPE.EDIT_ACTION: throw r("FBLogger")("messenger_web").mustfixThrow("We do not support editing messages right now since the sending flow is not implemented yet. ");
			case o("MAWMsgType").MSG_TYPE.GROUP_INVITE: return R(e, n);
			case o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE: throw r("FBLogger")("messenger_web").mustfixThrow("Bump message is not consumer application. It should be addressed as ArmadilloApplication");
			case o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH: return k(e, a);
			case o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE: throw r("FBLogger")("messenger_web").mustfixThrow("We do not support group poll creation messages yet as the sending flow is not implemented.");
			case o("MAWMsgType").MSG_TYPE.GROUP_POLL_UPDATE: throw r("FBLogger")("messenger_web").mustfixThrow("We do not support group poll update messages yet as the sending flow is not implemented.");
			default: return r("WAAssertUnreachable")(e.type);
		}
	}
	function c(e) {
		if (e != null) {
			var t = e === 1 ? o("WAConsumerApplication.pb").CONSUMER_APPLICATION_METADATA_SPECIAL_TEXT_SIZE.SMALL : e === 2 ? o("WAConsumerApplication.pb").CONSUMER_APPLICATION_METADATA_SPECIAL_TEXT_SIZE.MEDIUM : o("WAConsumerApplication.pb").CONSUMER_APPLICATION_METADATA_SPECIAL_TEXT_SIZE.LARGE;
			return { specialTextSize: t };
		}
	}
	function d(e) {
		var t = { payload: { content: { messageText: {
			commands: e.msgContent.commands,
			mentionedJid: e.msgContent.mentionedJids,
			text: o("MAWVault").unvault(e.msgContent.content)
		} } } }, n = c(e.specialTextSize);
		return n != null && (t.metadata = n), t;
	}
	function m(e, t) {
		return p(e.msgId, t, e);
	}
	function p(e, t, n) {
		var r = o("validateMAWMediaAndComposeEntryForProtoMsg").validateMAWMediaAndComposeEntryForProtoMsg(e, t), a = r[0], i = r[1];
		return o("MAWEncodeMediaTransportProtocol").encodeValidatedImageMessage(a, i, n);
	}
	function _(e) {
		function t() {
			var t = o("WAJids").validateGroupJid(e.threadJid);
			return t != null ? t : o("WAJids").isAuthorMe(e.author) ? e.threadJid : o("WAGlobals").getMyUserJid();
		}
		var n = t();
		return { payload: { content: { editMessage: {
			key: {
				fromMe: !0,
				id: e.originalMsgExternalId,
				remoteJid: n
			},
			message: {
				mentionedJid: e.msgContent.mentionedJids,
				text: o("MAWVault").unvault(e.msgContent.content)
			},
			timestampMs: e.editTs * 1e3
		} } } };
	}
	function f(e, t) {
		return g(e.msgId, t);
	}
	function g(e, t) {
		var n = o("validateMAWMediaAndComposeEntryForProtoMsg").validateMAWMediaAndComposeEntryForProtoMsg(e, t), r = n[0], a = n[1];
		return o("MAWEncodeMediaTransportProtocol").encodeValidatedStickerMessage(r, a);
	}
	function h(e, t) {
		return y(e.msgId, t);
	}
	function y(e, t) {
		var n = o("validateMAWMediaAndComposeEntryForProtoMsg").validateMAWMediaAndComposeEntryForProtoMsg(e, t), r = n[0], a = n[1];
		return o("MAWEncodeMediaTransportProtocol").encodeValidatedVideoMessage(r, a);
	}
	function C(e, t) {
		return b(e.msgId, t);
	}
	function b(e, t) {
		var n = o("validateMAWMediaAndComposeEntryForProtoMsg").validateMAWMediaAndComposeEntryForProtoMsg(e, t), r = n[0], a = n[1];
		return o("MAWEncodeMediaTransportProtocol").encodeValidatedAudioMessage(r, a);
	}
	function v(e) {
		return { payload: { applicationData: { revoke: { key: {
			fromMe: !0,
			id: e
		} } } } };
	}
	function S(e) {
		var t = o("WAJids").isAuthorMe(e.reactToAuthor) ? o("WAGlobals").getMyUserJid() : e.reactToAuthor;
		function n() {
			var n = o("WAJids").isAuthorMe(e.author) ? o("WAGlobals").getMyUserJid() : e.author;
			return n === t;
		}
		var r = n(), a = o("WAJids").interpretAsGroupJid(e.threadJid) != null, i = {
			groupingKey: e.groupingKey == null ? void 0 : e.groupingKey,
			key: {
				fromMe: r,
				id: e.reactToExternalId,
				participant: a && !r ? t : void 0,
				remoteJid: e.threadJid
			},
			senderTimestampMs: e.senderTimestampMs,
			text: e.reaction == null ? void 0 : e.reaction
		};
		return { payload: { content: { reactionMessage: i } } };
	}
	function R(e, t) {
		if (e.threadJid == null) throw r("FBLogger")("messenger_web").mustfixThrow("msg threadJid is null in encodeGroupInviteMessage");
		if (t == null) throw r("FBLogger")("messenger_web").mustfixThrow("DbGroupInvite is null in encodeGroupInviteMessage");
		var n = o("WAJids").interpretAsGroupJid(e.threadJid);
		if (n == null) throw r("FBLogger")("messenger_web").mustfixThrow("groupJid is null in encodeGroupInviteMessage");
		return { payload: { content: { groupInviteMessage: {
			groupJid: n,
			groupName: e.groupName,
			inviteCode: t.inviteCode,
			inviteExpiration: t.inviteExpirationTs
		} } } };
	}
	function L(t) {
		return (e || (e = o("I64"))).equal(t.displayedContentTypes, (s || (s = o("LSIntEnum"))).ofNumber(1)) || (e || (e = o("I64"))).equal(t.displayedContentTypes, (s || (s = o("LSIntEnum"))).ofNumber(256)) || t.textHasLinks || t.isUnsent ? E(t) : null;
	}
	function E(e) {
		var t, n = (t = e.mentionIds) == null || (t = t.split(",")) == null ? void 0 : t.map(o("MAWJids").toUserJid);
		return { payload: { content: { messageText: {
			mentionedJid: n != null ? n : [],
			text: e.text
		} } } };
	}
	function k(e, t) {
		if (e.receiverFetchId == null) throw r("FBLogger")("messenger_web").mustfixThrow("Cannot generate receiver fetch message without receiver fetch id");
		if (t == null) throw r("FBLogger")("messenger_web").mustfixThrow("Cannot generate receiver fetch message without receiver fetch info");
		switch (t.type) {
			case "sticker": return I(t);
			default: throw r("FBLogger")("messenger_web").mustfixThrow("Unsupported receiver fetch type: " + t.type);
		}
	}
	function I(e) {
		if (e.receiverFetchId == null) throw r("FBLogger")("messenger_web").mustfixThrow("Cannot generate receiver fetch sticker message without receiver fetch id");
		var t = {
			ancillary: {
				accessibilityLabel: e.accessibilitySummaryText,
				height: e.previewHeight,
				isThirdParty: !1,
				receiverFetchId: e.receiverFetchId,
				width: e.previewWidth
			},
			integral: {
				receiverFetchId: e.receiverFetchId,
				transport: {
					ancillary: {
						mimetype: o("MAWEncodeMediaTransportProtocol").STICKER_MIME_TYPE,
						thumbnail: {
							thumbnailHeight: e.previewHeight,
							thumbnailWidth: e.previewWidth
						}
					},
					integral: {}
				}
			}
		}, n = o("encodeProtobuf").encodeProtobuf(o("WAMediaTransport.pb").StickerTransportSpec, t);
		return { payload: { content: { stickerMessage: { sticker: {
			payload: n.readBuffer(),
			version: 1
		} } } } };
	}
	function T(e, t) {
		return D(e.msgId, t);
	}
	function D(e, t) {
		var n = o("validateMAWMediaAndComposeEntryForProtoMsg").validateMAWMediaAndComposeEntryForProtoMsg(e, t), r = n[0], a = n[1];
		return o("MAWEncodeMediaTransportProtocol").encodeValidatedFileMessage(r, a);
	}
	l.asConsumerApplication = u, l.encodeConsumerApplicationMetadata = c, l.encodeEditMessage = _, l.encodeReactionMessage = S, l.asConsumerApplicationLSDb = L, l.encodeReceiverFetchStickerMessage = I;
}), 98);

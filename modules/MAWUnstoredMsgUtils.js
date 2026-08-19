__d("MAWUnstoredMsgUtils", [
	"FBLogger",
	"MAWMsgType",
	"MAWUnstoredTypedMsgUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = e.unstoredMsg, n = e.unstoredReceiverFetchInfo, a = e.unstoredXMA;
		if (t == null) return null;
		switch (t.type) {
			case o("MAWMsgType").MSG_TYPE.TEXT: return o("MAWUnstoredTypedMsgUtils").getTextMsg(t);
			case o("MAWMsgType").MSG_TYPE.IMAGE: return o("MAWUnstoredTypedMsgUtils").getImageMsg(t);
			case o("MAWMsgType").MSG_TYPE.VIDEO: return o("MAWUnstoredTypedMsgUtils").getVideoMsg(t);
			case o("MAWMsgType").MSG_TYPE.PTT: return o("MAWUnstoredTypedMsgUtils").getPttMsg(t);
			case o("MAWMsgType").MSG_TYPE.ADMIN: return o("MAWUnstoredTypedMsgUtils").getAdminMsg(t);
			case o("MAWMsgType").MSG_TYPE.FUTUREPROOF: return o("MAWUnstoredTypedMsgUtils").getFutureproofMsg(t);
			case o("MAWMsgType").MSG_TYPE.REVOKED: return o("MAWUnstoredTypedMsgUtils").getRevokedMsg(t);
			case o("MAWMsgType").MSG_TYPE.GIF: return o("MAWUnstoredTypedMsgUtils").getGifMsg(t);
			case o("MAWMsgType").MSG_TYPE.STICKER: return o("MAWUnstoredTypedMsgUtils").getStickerMsg(t);
			case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE: return o("MAWUnstoredTypedMsgUtils").getDocumentFileMsg(t);
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN: return o("MAWUnstoredTypedMsgUtils").getEphemeralSettingAdminMsg(t);
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION: return o("MAWUnstoredTypedMsgUtils").getEphemeralScreenshotActionMsg(t);
			case o("MAWMsgType").MSG_TYPE.XMA: {
				if ((a == null ? void 0 : a.xma) == null) throw r("FBLogger")("messenger_web").mustfixThrow("XMA content cannot be parsed without XMA payload");
				return o("MAWUnstoredTypedMsgUtils").getXMAMsg(t, a == null ? void 0 : a.xma);
			}
			case o("MAWMsgType").MSG_TYPE.RAVEN: return o("MAWUnstoredTypedMsgUtils").getRavenMsg(t);
			case o("MAWMsgType").MSG_TYPE.RAVEN_ACTION:
			case o("MAWMsgType").MSG_TYPE.REACTION:
			case o("MAWMsgType").MSG_TYPE.EDIT_ACTION: return null;
			case o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE: return o("MAWUnstoredTypedMsgUtils").getBumpExistingMessageMsg(t);
			case o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH: {
				if (n == null) throw r("FBLogger")("messenger_web").mustfixThrow("Receiver Fetch Info cannot be null for Receiver Fetch Msg");
				return o("MAWUnstoredTypedMsgUtils").getReceiverFetchMsg(t, n);
			}
			case o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE: throw r("FBLogger")("messenger_web").mustfixThrow("Group polls are not yet supported");
			case o("MAWMsgType").MSG_TYPE.GROUP_POLL_UPDATE: throw r("FBLogger")("messenger_web").mustfixThrow("Group polls are not yet supported");
			default: return t.type, null;
		}
	}
	function s(e) {
		if (e == null) return null;
		switch (e.type) {
			case o("MAWMsgType").MSG_TYPE.TEXT: return o("MAWUnstoredTypedMsgUtils").getTextMsg(e);
			case o("MAWMsgType").MSG_TYPE.GIF: return o("MAWUnstoredTypedMsgUtils").getGifMsg(e);
			case o("MAWMsgType").MSG_TYPE.STICKER: return o("MAWUnstoredTypedMsgUtils").getStickerMsg(e);
			default: return null;
		}
	}
	function u(e) {
		var t = e.unstoredMsg;
		if (!t || t.type !== o("MAWMsgType").MSG_TYPE.REACTION) return null;
		var n = t;
		return {
			ack: n.ack,
			author: n.id.author,
			externalId: n.id.externalId,
			groupingKey: n.groupingKey,
			reaction: n.reaction,
			reactToAuthor: n.reactToAuthor,
			reactToExternalId: n.reactToExternalId,
			senderTimestampMs: n.senderTimestampMs,
			threadJid: n.id.chat,
			ts: n.ts
		};
	}
	function c(e) {
		var t = e.unstoredMsg;
		if (!t || t.type !== o("MAWMsgType").MSG_TYPE.RAVEN_ACTION) return null;
		var n = t;
		return {
			ack: n.ack,
			actionTimestamp: n.actionTimestamp,
			actionType: n.actionType,
			author: n.id.author,
			externalId: n.id.externalId,
			ravenActionToMsgExternalId: n.ravenActionToMsgExternalId,
			ts: n.ts,
			type: n.type
		};
	}
	function d(e) {
		var t = e.unstoredIncomingGroupInvite;
		return t ? babelHelpers.extends({}, t) : null;
	}
	function m(e) {
		return e == null ? null : {
			ack: e.ack,
			author: e.id.author,
			editMsgContent: e.editMsgContent,
			externalId: e.id.externalId,
			originalMsgExternalId: e.originalMsgExternalId,
			reportingMeta: e.reportingMeta,
			serverTs: e.serverTs,
			specialTextSize: e.specialTextSize,
			ts: e.ts,
			type: e.type
		};
	}
	function p(e) {
		var t = e.unstoredReceiverFetchInfo;
		return t == null ? null : babelHelpers.extends({}, t, { type: "sticker" });
	}
	function _(e) {
		var t = e.unstoredGroupPollCreateInfo;
		return t == null ? null : babelHelpers.extends({}, t, { latestSenderTimestampsMs: new Map() });
	}
	function f(e) {
		var t = e.unstoredGroupPollUpdateInfo;
		return t == null ? null : { encryptedMessage: t.pollUpdateMessage };
	}
	l.getUnstoredMsg = e, l.getUnstoredAssociatedMsg = s, l.getUnstoredReaction = u, l.getUnstoredRavenActionMsg = c, l.getGroupInvite = d, l.getUnstoredEditActionMsg = m, l.getUnstoredReceiverFetchInfo = p, l.getUnstoredGroupPollCreateInfo = _, l.getUnstoredDbGroupPollUpdateInfo = f;
}), 98);

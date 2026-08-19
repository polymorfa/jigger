__d("MAWUnstoredTypedMsgUtils", [
	"MAWDbMsg",
	"MAWMsgType",
	"MAWRavenUtils",
	"MAWUnstoredQuotedMsgUtils",
	"WAJids"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return {
			ack: e.ack,
			author: e.id.author,
			ebTimestampMs: e.ebTimestampMs,
			externalId: e.id.externalId,
			reportingMeta: e.reportingMeta,
			serverTs: e.serverTs,
			ts: e.ts
		};
	}
	function s(e) {
		return {
			forwardingScore: e.forwardingScore,
			isForwarded: e.isForwarded
		};
	}
	function u(e) {
		return {
			ephemeralSetting: c(e.ephemeralSetting),
			messageDeleteTs: e.deleteTs,
			messageExpirationTs: e.expirationTs
		};
	}
	function c(e) {
		if (e != null) return {
			ephemeralExpirationInSec: e.expirationTs,
			ephemeralLastUpdatedOrSetTimestamp: e.updatedTs
		};
	}
	function d(t, n) {
		var r;
		return babelHelpers.extends({}, e(t), s(t), o("MAWUnstoredQuotedMsgUtils").getWithQuoteMsg(t), u(t), {
			altIndex: void 0,
			collapsibleId: t.collapsibleId,
			isCollapsed: t.isCollapsed,
			msgContent: {
				commands: n.commands,
				content: (r = n.sentWithMessage) != null ? r : "",
				mentionedJids: n.mentionedJids
			},
			type: o("MAWMsgType").MSG_TYPE.XMA,
			xmaMessageType: n.targetType
		});
	}
	function m(t) {
		return babelHelpers.extends({}, e(t), s(t), o("MAWUnstoredQuotedMsgUtils").getWithQuoteMsg(t), u(t), {
			altIndex: void 0,
			editCount: 0,
			msgContent: t.msgContent,
			specialTextSize: t.specialTextSize,
			type: o("MAWMsgType").MSG_TYPE.TEXT
		});
	}
	function p(t) {
		var n;
		return babelHelpers.extends({}, e(t), s(t), o("MAWUnstoredQuotedMsgUtils").getWithQuoteMsg(t), u(t), {
			altIndex: void 0,
			plaintextHash: (n = t.mediaId) != null ? n : void 0,
			type: o("MAWMsgType").MSG_TYPE.IMAGE
		});
	}
	function _(t) {
		return babelHelpers.extends({}, e(t), o("MAWUnstoredQuotedMsgUtils").getWithQuoteMsg(t), u(t), {
			altIndex: void 0,
			ravenEphemeralMediaState: o("MAWRavenUtils").getEphemeralMediaState(t.ravenEphemeralMediaState),
			ravenEphemeralType: t.ravenEphemeralType,
			ravenMediaType: t.ravenMediaType,
			type: o("MAWMsgType").MSG_TYPE.RAVEN
		});
	}
	function f(t) {
		var n;
		return babelHelpers.extends({}, e(t), s(t), o("MAWUnstoredQuotedMsgUtils").getWithQuoteMsg(t), u(t), {
			altIndex: void 0,
			plaintextHash: (n = t.mediaId) != null ? n : void 0,
			type: o("MAWMsgType").MSG_TYPE.VIDEO
		});
	}
	function g(t) {
		return babelHelpers.extends({}, e(t), s(t), o("MAWUnstoredQuotedMsgUtils").getWithQuoteMsg(t), u(t), {
			altIndex: void 0,
			type: o("MAWMsgType").MSG_TYPE.PTT
		});
	}
	function h(e) {
		return {
			adminMsgContent: e.adminMsgContent,
			adminType: e.adminType
		};
	}
	function y(t) {
		return babelHelpers.extends({}, e(t), {
			altIndex: void 0,
			author: o("WAJids").AUTHOR_SYSTEM,
			msgContent: h(t.msgContent),
			type: o("MAWMsgType").MSG_TYPE.ADMIN
		});
	}
	function C(t) {
		var n;
		return babelHelpers.extends({}, e(t), s(t), o("MAWUnstoredQuotedMsgUtils").getWithQuoteMsg(t), u(t), {
			altIndex: void 0,
			plaintextHash: (n = t.mediaId) != null ? n : void 0,
			type: o("MAWMsgType").MSG_TYPE.GIF
		});
	}
	function b(t) {
		var n;
		return babelHelpers.extends({}, e(t), s(t), o("MAWUnstoredQuotedMsgUtils").getWithQuoteMsg(t), u(t), {
			altIndex: void 0,
			plaintextHash: (n = t.mediaId) != null ? n : void 0,
			type: o("MAWMsgType").MSG_TYPE.STICKER
		});
	}
	function v(t) {
		return babelHelpers.extends({}, e(t), s(t), o("MAWUnstoredQuotedMsgUtils").getWithQuoteMsg(t), u(t), {
			altIndex: void 0,
			type: o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE
		});
	}
	function S(t) {
		return babelHelpers.extends({}, e(t), {
			altIndex: o("MAWDbMsg").FUTUREPROOF_ALT_INDEX,
			msgContent: t.msgContent,
			type: o("MAWMsgType").MSG_TYPE.FUTUREPROOF
		});
	}
	function R(t) {
		return babelHelpers.extends({}, e(t), {
			altIndex: void 0,
			ebTimestampMs: t.ebTimestampMs,
			revokedExternalId: t.revokedExternalId,
			type: o("MAWMsgType").MSG_TYPE.REVOKED
		});
	}
	function L(e) {
		return {
			adminMsgContent: e.adminMsgContent,
			adminType: e.adminType
		};
	}
	function E(t) {
		return babelHelpers.extends({}, e(t), {
			altIndex: void 0,
			msgContent: L(t.msgContent),
			type: o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN
		});
	}
	function k(e) {
		return {
			adminMsgContent: e.adminMsgContent,
			adminType: e.adminType,
			screenshotActionType: e.screenshotActionType,
			version: e.version
		};
	}
	function I(t) {
		return babelHelpers.extends({}, e(t), {
			altIndex: void 0,
			msgContent: k(t.msgContent),
			type: o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION
		});
	}
	function T(t) {
		return babelHelpers.extends({}, e(t), o("MAWUnstoredQuotedMsgUtils").getWithQuoteMsg(t), u(t), {
			altIndex: void 0,
			type: o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE
		});
	}
	function D(t, n) {
		var r = n.receiverFetchId;
		return babelHelpers.extends({}, e(t), s(t), o("MAWUnstoredQuotedMsgUtils").getWithQuoteMsg(t), u(t), {
			altIndex: void 0,
			receiverFetchId: r,
			type: o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH
		});
	}
	l.getXMAMsg = d, l.getTextMsg = m, l.getImageMsg = p, l.getRavenMsg = _, l.getVideoMsg = f, l.getPttMsg = g, l.getAdminMsg = y, l.getGifMsg = C, l.getStickerMsg = b, l.getDocumentFileMsg = v, l.getFutureproofMsg = S, l.getRevokedMsg = R, l.getEphemeralSettingAdminMsg = E, l.getEphemeralScreenshotActionMsg = I, l.getBumpExistingMessageMsg = T, l.getReceiverFetchMsg = D;
}), 98);

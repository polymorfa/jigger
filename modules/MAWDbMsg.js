__d("MAWDbMsg", [
	"FBLogger",
	"I64",
	"MAWDbChatId__UNSAFE_DO_NOT_USE",
	"MAWHexUtils",
	"MAWMsgType",
	"WAMsg"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = [
		(s = o("MAWMsgType")).MSG_TYPE.REVOKED,
		s.MSG_TYPE.EPHEMERAL_SYNC_RESPONSE,
		s.MSG_TYPE.EPHEMERAL_SETTING_CHANGE_FROM_CURRENT_DEVICE,
		s.MSG_TYPE.GROUP_INVITE,
		s.MSG_TYPE.SK_DISTRIBUTION,
		s.MSG_TYPE.RAVEN_ACTION
	], c = 0, d = Number.MAX_SAFE_INTEGER;
	function m(e) {
		return e;
	}
	function p(e) {
		return e;
	}
	function _(e) {
		return D(e) ? e : null;
	}
	function f(e) {
		return e;
	}
	function g(e) {
		return e;
	}
	var h = "futureproof", y = "futureproof_spam", C = "spam", b = "toBeRead", v = "e2ee_admin_msg", S = "cutover_admin_msg";
	function R(e, t) {
		return o("MAWHexUtils").orderPreservingHex(e) + "_" + o("MAWHexUtils").orderPreservingHex(t) + "_m";
	}
	function L(e, t, n) {
		var r = o("MAWHexUtils").orderPreservingHex(e) + "_" + o("MAWHexUtils").orderPreservingHex(t) + "_m";
		return r + "_" + n.externalId;
	}
	function E(e, t) {
		return o("MAWHexUtils").orderPreservingHex(e) + "_" + o("MAWHexUtils").orderPreservingHex(t) + "_um";
	}
	function k(e, t) {
		return o("MAWHexUtils").orderPreservingHex(e) + "_" + o("MAWHexUtils").orderPreservingHex(t) + "_r";
	}
	function I(e, t, n) {
		var r = n != null ? n : o("MAWHexUtils").orderPreservingHex(Math.floor(Math.random() * 1e4));
		return o("MAWHexUtils").orderPreservingHex(e) + "_" + o("MAWHexUtils").orderPreservingHex(t) + "_DEBUG_" + r + ")}";
	}
	function T(e) {
		var t = e.split("_");
		return t.length >= 3 && t[0] !== "" && t[1] !== "" && t[2] === "m";
	}
	function D(e) {
		var t = /^(.*)\..*?$/, n = t.test(e);
		return T(e) || n;
	}
	function x(e) {
		return o("MAWDbChatId__UNSAFE_DO_NOT_USE").craftAltIndex__DEPRECATED(e, b);
	}
	function $(e) {
		return o("MAWDbChatId__UNSAFE_DO_NOT_USE").craftAltIndex__DEPRECATED(e, v);
	}
	function P(e) {
		return o("MAWDbChatId__UNSAFE_DO_NOT_USE").craftAltIndex__DEPRECATED(e, S);
	}
	function N(e) {
		if (!T(e)) return 0;
		var t = e.split("_"), n = t[0], r = t[1];
		return o("MAWHexUtils").reverseOrderPreservingHex(r);
	}
	function M(e) {
		return o("MAWHexUtils").orderPreservingHex(e) + "_";
	}
	function w(e) {
		return o("MAWHexUtils").orderPreservingHex(e) + "_z";
	}
	function A(e) {
		switch (e.type) {
			case o("MAWMsgType").MSG_TYPE.XMA: return !0;
			case o("MAWMsgType").MSG_TYPE.IMAGE:
			case o("MAWMsgType").MSG_TYPE.VIDEO:
			case o("MAWMsgType").MSG_TYPE.PTT:
			case o("MAWMsgType").MSG_TYPE.GIF:
			case o("MAWMsgType").MSG_TYPE.STICKER:
			case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE:
			case o("MAWMsgType").MSG_TYPE.TEXT:
			case o("MAWMsgType").MSG_TYPE.FUTUREPROOF:
			case o("MAWMsgType").MSG_TYPE.CIPHERTEXT:
			case o("MAWMsgType").MSG_TYPE.UNAVAILABLE:
			case o("MAWMsgType").MSG_TYPE.ADMIN:
			case o("MAWMsgType").MSG_TYPE.REVOKED:
			case o("MAWMsgType").MSG_TYPE.EXPIRED_EPHEMERAL:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SYNC_RESPONSE:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION:
			case o("MAWMsgType").MSG_TYPE.GROUP_INVITE:
			case o("MAWMsgType").MSG_TYPE.RAVEN:
			case o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE:
			case o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH:
			case o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE:
			case o("MAWMsgType").MSG_TYPE.GROUP_POLL_UPDATE: return !1;
		}
		throw r("FBLogger")("messenger_web").mustfixThrow("Invalid msg type for isXMAMsg check: \"%s\"", e.type);
	}
	function F(e) {
		switch (e.type) {
			case o("MAWMsgType").MSG_TYPE.IMAGE:
			case o("MAWMsgType").MSG_TYPE.VIDEO:
			case o("MAWMsgType").MSG_TYPE.PTT:
			case o("MAWMsgType").MSG_TYPE.GIF:
			case o("MAWMsgType").MSG_TYPE.STICKER:
			case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE:
			case o("MAWMsgType").MSG_TYPE.RAVEN: return !0;
			case o("MAWMsgType").MSG_TYPE.TEXT:
			case o("MAWMsgType").MSG_TYPE.FUTUREPROOF:
			case o("MAWMsgType").MSG_TYPE.CIPHERTEXT:
			case o("MAWMsgType").MSG_TYPE.UNAVAILABLE:
			case o("MAWMsgType").MSG_TYPE.ADMIN:
			case o("MAWMsgType").MSG_TYPE.REVOKED:
			case o("MAWMsgType").MSG_TYPE.EXPIRED_EPHEMERAL:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SYNC_RESPONSE:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION:
			case o("MAWMsgType").MSG_TYPE.GROUP_INVITE:
			case o("MAWMsgType").MSG_TYPE.XMA:
			case o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE:
			case o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH:
			case o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE:
			case o("MAWMsgType").MSG_TYPE.GROUP_POLL_UPDATE: return !1;
		}
		throw r("FBLogger")("messenger_web").mustfixThrow("Invalid msg type for isMediaMsg check: \"%s\"", e.type);
	}
	function O(e) {
		return e.type === o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH;
	}
	function B(e) {
		switch (e.type) {
			case o("MAWMsgType").MSG_TYPE.IMAGE:
			case o("MAWMsgType").MSG_TYPE.VIDEO: return !0;
			case o("MAWMsgType").MSG_TYPE.PTT:
			case o("MAWMsgType").MSG_TYPE.GIF:
			case o("MAWMsgType").MSG_TYPE.STICKER:
			case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE:
			case o("MAWMsgType").MSG_TYPE.RAVEN:
			case o("MAWMsgType").MSG_TYPE.TEXT:
			case o("MAWMsgType").MSG_TYPE.FUTUREPROOF:
			case o("MAWMsgType").MSG_TYPE.CIPHERTEXT:
			case o("MAWMsgType").MSG_TYPE.UNAVAILABLE:
			case o("MAWMsgType").MSG_TYPE.ADMIN:
			case o("MAWMsgType").MSG_TYPE.REVOKED:
			case o("MAWMsgType").MSG_TYPE.EXPIRED_EPHEMERAL:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SYNC_RESPONSE:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION:
			case o("MAWMsgType").MSG_TYPE.GROUP_INVITE:
			case o("MAWMsgType").MSG_TYPE.XMA:
			case o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE:
			case o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH:
			case o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE: return !1;
			default: return r("FBLogger")("messenger_web").mustfix("Invalid msg type for isPhotoOrVideoMediaMsg check: \"%s\"", e.type), !1;
		}
	}
	function W(e) {
		switch (e.type) {
			case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE: return !0;
			case o("MAWMsgType").MSG_TYPE.IMAGE:
			case o("MAWMsgType").MSG_TYPE.VIDEO:
			case o("MAWMsgType").MSG_TYPE.PTT:
			case o("MAWMsgType").MSG_TYPE.GIF:
			case o("MAWMsgType").MSG_TYPE.STICKER:
			case o("MAWMsgType").MSG_TYPE.RAVEN:
			case o("MAWMsgType").MSG_TYPE.TEXT:
			case o("MAWMsgType").MSG_TYPE.FUTUREPROOF:
			case o("MAWMsgType").MSG_TYPE.CIPHERTEXT:
			case o("MAWMsgType").MSG_TYPE.UNAVAILABLE:
			case o("MAWMsgType").MSG_TYPE.ADMIN:
			case o("MAWMsgType").MSG_TYPE.REVOKED:
			case o("MAWMsgType").MSG_TYPE.EXPIRED_EPHEMERAL:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SYNC_RESPONSE:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION:
			case o("MAWMsgType").MSG_TYPE.GROUP_INVITE:
			case o("MAWMsgType").MSG_TYPE.XMA:
			case o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE:
			case o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH:
			case o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE: return !1;
			default: return r("FBLogger")("messenger_web").mustfix("Invalid msg type for isDocumentFileMediaMsg check: \"%s\"", e.type), !1;
		}
	}
	function q(e) {
		switch (e.type) {
			case o("MAWMsgType").MSG_TYPE.TEXT:
			case o("MAWMsgType").MSG_TYPE.IMAGE:
			case o("MAWMsgType").MSG_TYPE.VIDEO:
			case o("MAWMsgType").MSG_TYPE.PTT:
			case o("MAWMsgType").MSG_TYPE.GIF:
			case o("MAWMsgType").MSG_TYPE.STICKER:
			case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE:
			case o("MAWMsgType").MSG_TYPE.REVOKED:
			case o("MAWMsgType").MSG_TYPE.DELETE_FOR_ME:
			case o("MAWMsgType").MSG_TYPE.XMA:
			case o("MAWMsgType").MSG_TYPE.RAVEN:
			case o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE:
			case o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH:
			case o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE: return !0;
			case o("MAWMsgType").MSG_TYPE.FUTUREPROOF:
			case o("MAWMsgType").MSG_TYPE.CIPHERTEXT:
			case o("MAWMsgType").MSG_TYPE.UNAVAILABLE:
			case o("MAWMsgType").MSG_TYPE.ADMIN:
			case o("MAWMsgType").MSG_TYPE.EXPIRED_EPHEMERAL:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SYNC_RESPONSE:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_CHANGE_FROM_CURRENT_DEVICE:
			case o("MAWMsgType").MSG_TYPE.GROUP_INVITE:
			case o("MAWMsgType").MSG_TYPE.SK_DISTRIBUTION:
			case o("MAWMsgType").MSG_TYPE.RAVEN_ACTION:
			case o("MAWMsgType").MSG_TYPE.EDIT_ACTION: return !1;
		}
		throw r("FBLogger")("messenger_web").mustfixThrow("Invalid msg type for isContentMsg check: \"%s\"", e.type);
	}
	function U(e) {
		switch (e.type) {
			case o("MAWMsgType").MSG_TYPE.TEXT:
			case o("MAWMsgType").MSG_TYPE.IMAGE:
			case o("MAWMsgType").MSG_TYPE.VIDEO:
			case o("MAWMsgType").MSG_TYPE.PTT:
			case o("MAWMsgType").MSG_TYPE.GIF:
			case o("MAWMsgType").MSG_TYPE.STICKER:
			case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE:
			case o("MAWMsgType").MSG_TYPE.XMA:
			case o("MAWMsgType").MSG_TYPE.RAVEN:
			case o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE:
			case o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH: return !0;
			case o("MAWMsgType").MSG_TYPE.FUTUREPROOF:
			case o("MAWMsgType").MSG_TYPE.CIPHERTEXT:
			case o("MAWMsgType").MSG_TYPE.UNAVAILABLE:
			case o("MAWMsgType").MSG_TYPE.ADMIN:
			case o("MAWMsgType").MSG_TYPE.EXPIRED_EPHEMERAL:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SYNC_RESPONSE:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_CHANGE_FROM_CURRENT_DEVICE:
			case o("MAWMsgType").MSG_TYPE.GROUP_INVITE:
			case o("MAWMsgType").MSG_TYPE.REVOKED:
			case o("MAWMsgType").MSG_TYPE.DELETE_FOR_ME:
			case o("MAWMsgType").MSG_TYPE.SK_DISTRIBUTION:
			case o("MAWMsgType").MSG_TYPE.EDIT_ACTION:
			case o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE: return !1;
		}
		throw r("FBLogger")("messenger_web").mustfixThrow("Invalid msg type for isMsgEligibleForTriggeringEphemeralSyncResponse check: \"%s\"", e.type);
	}
	function V(e) {
		return G(e.type);
	}
	function H(e) {
		return e.type === o("MAWMsgType").MSG_TYPE.ADMIN;
	}
	function G(e) {
		return e === "EphemeralSyncResponse" || e === "EphemeralSettingChangeFromCurrentDevice" || e === "GroupInvite" || e === "SenderKeyDistribution" || e === "RavenAction" || e === "EditAction";
	}
	function z(e) {
		return e === "RavenAction";
	}
	function j(e) {
		return e.originalTs != null ? e.originalTs : K(e);
	}
	function K(e) {
		return e.serverTs != null ? e.serverTs : e.ts;
	}
	function Q(e) {
		return e.sortOrderMs != null ? e.sortOrderMs : K(e) * 1e3;
	}
	function X(e, t) {
		return e.serverTs != null ? Math.max(t + 1, e.serverTs * 1e3) : t + 1;
	}
	function Y(e) {
		switch (e.type) {
			case o("MAWMsgType").MSG_TYPE.TEXT: return e.msgContent;
			case o("MAWMsgType").MSG_TYPE.EDIT_ACTION: return e.editMsgContent;
			case o("MAWMsgType").MSG_TYPE.IMAGE:
			case o("MAWMsgType").MSG_TYPE.VIDEO:
			case o("MAWMsgType").MSG_TYPE.PTT:
			case o("MAWMsgType").MSG_TYPE.GIF:
			case o("MAWMsgType").MSG_TYPE.STICKER:
			case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE:
			case o("MAWMsgType").MSG_TYPE.REVOKED:
			case o("MAWMsgType").MSG_TYPE.DELETE_FOR_ME:
			case o("MAWMsgType").MSG_TYPE.FUTUREPROOF:
			case o("MAWMsgType").MSG_TYPE.CIPHERTEXT:
			case o("MAWMsgType").MSG_TYPE.UNAVAILABLE:
			case o("MAWMsgType").MSG_TYPE.ADMIN:
			case o("MAWMsgType").MSG_TYPE.EXPIRED_EPHEMERAL:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SYNC_RESPONSE:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_CHANGE_FROM_CURRENT_DEVICE:
			case o("MAWMsgType").MSG_TYPE.GROUP_INVITE:
			case o("MAWMsgType").MSG_TYPE.XMA:
			case o("MAWMsgType").MSG_TYPE.RAVEN:
			case o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE:
			case o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH:
			case o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE: return;
		}
		throw r("FBLogger")("messenger_web").mustfixThrow("Invalid msg type for getMsgContent check: \"%s\"", e.type);
	}
	function J(e) {
		return o("WAMsg").craftWAMsgIdString({
			author: e.author,
			chat: e.threadJid,
			externalId: e.externalId
		});
	}
	function Z(t) {
		return (e || (e = o("I64"))).to_float(t);
	}
	l.NO_CONTENT_MESSAGE_TYPES_ALLOWLIST = u, l.MIN_MSG_SORT_ORDER = c, l.MAX_MSG_SORT_ORDER = d, l.toCachedMsgId__UNSAFE_DO_NOT_USE = m, l.toMsgId__UNSAFE_DO_NOT_USE = p, l.toMsgId = _, l.stanzaIdToMsgId = f, l.instamadilloMsgIdToMsgId = g, l.FUTUREPROOF_ALT_INDEX = h, l.FUTUREPROOF_SPAM_ALT_INDEX = y, l.SPAM_ALT_INDEX = C, l.craftMsgId__DEPRECATED = R, l.craftMsgIdV2 = L, l.craftUnrenderedMsgId = E, l.craftReactionId = k, l.craftDebugMsgId = I, l.isValidMsgId = D, l.craftToBeReadAltIndex = x, l.craftE2eeAdminMsgAltIndex = $, l.craftCutoverAdminMsgAltIndex = P, l.getInChatMsgIdFromMsgId = N, l.msgIdsInChatLowerBound = M, l.msgIdsInChatUpperBound = w, l.isXMAMsg = A, l.isMediaMsg = F, l.isReceiverFetchStickerMsg = O, l.isPhotoOrVideoMediaMsg = B, l.isDocumentFileMediaMsg = W, l.isContentMsg = q, l.isMsgEligibleForTriggeringEphemeralSyncResponse = U, l.isUnrenderedMsg = V, l.isAdminMsg = H, l.isUnrenderedMsgType = G, l.isRavenActionMsgType = z, l.getOriginalTsFromMsg = j, l.getCanonicalTsFromMsg = K, l.getSortOrderWithFallback = Q, l.getSortOrderFromPrevious = X, l.getMsgContent = Y, l.getWAMsgId = J, l.convertMsgRowId64 = Z;
}), 98);

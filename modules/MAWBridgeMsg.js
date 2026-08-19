__d("MAWBridgeMsg", [
	"FBLogger",
	"LSHotEmojiSize",
	"LSIntEnum",
	"MAWDbMsg",
	"MAWImageUtils",
	"MAWMsgType",
	"MAWUserJidWrapper",
	"MAWVault",
	"MAWXMAUtils",
	"MWPBumpEntityKey",
	"WAAssertUnreachable",
	"WAHashUtils",
	"WAJids",
	"WALogger",
	"WAMsgType",
	"WATimeUtils",
	"getReplyContentForNoteReply",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e, t) {
		var n;
		if (e.isForwarded === !0 && e.type !== o("MAWMsgType").MSG_TYPE.STICKER) return { replyType: "FORWARD" };
		if (o("MAWXMAUtils").isXMAMsgHighlightsTabFriendUpdatesReply(e.xmaMessageType)) return {
			replyToMsgId: e.msgId,
			replyToUserId: o("WAJids").authorToUserId(e.author, t),
			replyType: "HIGHLIGHTS_TAB_POST_REPLY",
			timestampMs: e.sortOrderMs != null ? o("WATimeUtils").castToMillisTime(e.sortOrderMs) : null
		};
		if (o("MAWXMAUtils").isXMAStoryMention(e.xmaMessageType) || o("MAWXMAUtils").isFBXMAPostMention(e.xmaMessageType)) {
			var r = e.threadJid, a = o("WAJids").interpretAsUserJid(r), i;
			return a != null && (i = o("WAJids").userIdFromJid(a)), o("MAWXMAUtils").isFBXMAPostMention(e.xmaMessageType) ? {
				mentionedUserId: i != null ? i : t,
				replyType: "FB_POST_MENTION",
				timestampMs: e.sortOrderMs != null ? o("WATimeUtils").castToMillisTime(e.sortOrderMs) : null
			} : {
				mentionedUserId: i != null ? i : t,
				replyType: "FB_STORY_MENTION",
				timestampMs: e.sortOrderMs != null ? o("WATimeUtils").castToMillisTime(e.sortOrderMs) : null
			};
		}
		if (!(o("MAWXMAUtils").isXMAStoryShare(e.xmaMessageType) || o("MAWXMAUtils").isXMAStoryReaction(e.xmaMessageType) || o("MAWXMAUtils").isXMAStoryHighlightShare(e.xmaMessageType) || o("MAWXMAUtils").isXMAMsgHighlightsTabFriendUpdatesReply(e.xmaMessageType))) {
			var l = (n = e.quote) == null ? void 0 : n.content;
			if (l != null) {
				var s = l.author, u = l.expirationTs, c = l.mediaId, d = l.msgContent, m = l.msgId, p = l.plaintextHash, _ = l.sourceId, f = l.ts, g = l.type, h = l.xmaMessageType, y = o("WAJids").authorToUserId(s, t);
				if (g === o("WAMsgType").NOTE_REPLY) return {
					noteContent: d == null ? void 0 : d.content,
					replyMediaExpirationTimestampMs: u != null ? o("WATimeUtils").castToMillisTime(u * 1e3) : void 0,
					replyToMsgId: e.msgId,
					replyToUserId: y,
					replyType: "LIGHTWEIGHT_STATUS"
				};
				if (g === o("MAWMsgType").MSG_TYPE.XMA && o("MAWXMAUtils").isXMAStoryReply(h)) {
					if (_ == null) return;
					var C = o("MAWXMAUtils").isXMAStoryProducerReply(h);
					return C ? {
						replyType: "FB_PRODUCER_STORY_REPLY",
						storyMediaId: c != null ? c : void 0,
						storyMediaPlaintextHash: p,
						storyMsgType: c != null ? o("MAWMsgType").MSG_TYPE.IMAGE : void 0,
						storyOwnerId: y,
						storyUrl: _,
						timestampMs: f != null ? o("WATimeUtils").castUnixTimeToMillisTime(f) : null
					} : {
						replyType: "STORY",
						storyMediaPlaintextHash: p,
						storyOwnerId: y,
						storyUrl: _,
						timestampMs: f != null ? o("WATimeUtils").castUnixTimeToMillisTime(f) : null
					};
				}
				if (m != null) return {
					isBumpMsg: e.type === o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE,
					replyToMsgId: m,
					replyType: "MESSAGE"
				};
			}
		}
	}
	function c(e, t, n) {
		var a, i, l, s = ((a = e.quote) == null ? void 0 : a.content.type) === o("WAMsgType").NOTE_REPLY;
		if (s) return r("getReplyContentForNoteReply")(e, n);
		var u = (i = e.quote) == null ? void 0 : i.content;
		if (o("MAWXMAUtils").isXMAStoryShare(e.xmaMessageType) || o("MAWXMAUtils").isXMAStoryReaction(e.xmaMessageType) || o("MAWXMAUtils").isXMAStoryMention(e.xmaMessageType) || o("MAWXMAUtils").isXMAStoryHighlightShare(e.xmaMessageType) || o("MAWXMAUtils").isXMAMsgHighlightsTabFriendUpdatesReply(e.xmaMessageType) || o("MAWXMAUtils").isFBXMAPostMention(e.xmaMessageType)) {
			var c, d = e.author, m = e.mediaId, p = e.msgId, _ = o("WAJids").authorToUserId(d, n);
			if (o("MAWXMAUtils").isXMAStoryMention(e.xmaMessageType) || o("MAWXMAUtils").isFBXMAPostMention(e.xmaMessageType)) {
				var f = e.threadJid, g;
				f != null && (g = o("WAJids").interpretAsUserJid(f)), g != null && (_ = o("WAJids").userIdFromJid(g));
			}
			return m != null && e.plaintextHash == null && o("MWPBumpEntityKey").bumpEntityKeyWithAppId("maw.reply_attachment_media_missing_plaintext_hash", "bridge_msg_get_reply_content"), {
				isFBPostMention: o("MAWXMAUtils").isFBXMAPostMention(e.xmaMessageType),
				isFBStoryMention: o("MAWXMAUtils").isFBXMAStoryMention(e.xmaMessageType),
				isIGStoryMention: o("MAWXMAUtils").isIGXMAStoryMention(e.xmaMessageType),
				isIGXMAStoryShare: o("MAWXMAUtils").isIGXMAStoryShare(e.xmaMessageType),
				isMsgHighlightsTabFriendUpdatesReply: o("MAWXMAUtils").isXMAMsgHighlightsTabFriendUpdatesReply(e.xmaMessageType),
				isStoryHighlightShare: o("MAWXMAUtils").isXMAStoryHighlightShare(e.xmaMessageType),
				isStoryReaction: o("MAWXMAUtils").isXMAStoryReaction(e.xmaMessageType),
				isStoryReply: o("MAWXMAUtils").isXMAStoryReply(e.xmaMessageType),
				replyMediaExpirationTimestampMs: u == null ? void 0 : u.expirationTs,
				replyMediaId: m,
				replyPlaintextHash: (c = e.plaintextHash) != null ? c : void 0,
				replySenderIsMe: d === o("WAJids").AUTHOR_ME || _ === n,
				replySourceId: p,
				replySourceTimestampMs: e.sortOrderMs,
				replyStatusType: m != null ? o("MAWMsgType").MSG_TYPE.IMAGE : void 0,
				replyToUserId: _
			};
		}
		if (!(u == null || (u == null ? void 0 : u.msgId) == null && (u == null ? void 0 : u.sourceId) == null)) {
			var h = u || {}, y = h.author, C = h.mediaId, b = h.msgId, v = h.plaintextHash, S = h.sourceId, R = h.specialTextSize, L = h.ts, E = h.type, k = h.xmaMessageType, I = L != null ? L * 1e3 : void 0, T = u.type === o("MAWMsgType").MSG_TYPE.TEXT || o("MAWXMAUtils").isXMAExternalLinkShare(k) ? (l = u.msgContent) == null ? void 0 : l.content : void 0, D = o("WAJids").authorToUserId(y, n), x = u.type === o("MAWMsgType").MSG_TYPE.TEXT ? u.msgContent.mentionedJids : void 0, $ = y === o("WAJids").AUTHOR_ME || D === n, P = t || {}, N = P.replyMediaId, M = P.replyMediaPreviewHeight, w = P.replyMediaPreviewWidth, A = P.replyMediaUrlFallback, F = P.replyPlaintextHash, O = P.replyXMAId;
			if (o("MAWXMAUtils").isXMAStoryReply(k)) {
				var B;
				return {
					isStoryProducerReply: o("MAWXMAUtils").isXMAStoryProducerReply(k),
					isStoryReaction: o("MAWXMAUtils").isXMAStoryReaction(k),
					isStoryReply: !0,
					replyMediaExpirationTimestampMs: u == null ? void 0 : u.expirationTs,
					replyMediaId: C,
					replyPlaintextHash: (B = F != null ? o("WAHashUtils").stringToPlaintextHash(F) : v) != null ? B : void 0,
					replySenderIsMe: $,
					replySourceId: S,
					replySourceTimestampMs: I,
					replyStatusType: C != null ? o("MAWMsgType").MSG_TYPE.IMAGE : void 0,
					replyToUserId: D
				};
			}
			var W = o("MAWImageUtils").boundHeightWidth(M, w, 96 * .8), q = W.height, U = W.width;
			return {
				isIGXMAPostShare: o("MAWXMAUtils").isIGXMAPostShare(k),
				isIGXMAStoryShare: o("MAWXMAUtils").isIGXMAStoryShare(k),
				isStoryReply: !1,
				replyMediaId: N,
				replyMediaPreviewHeight: E === o("MAWMsgType").MSG_TYPE.STICKER ? q : M,
				replyMediaPreviewWidth: E === o("MAWMsgType").MSG_TYPE.STICKER ? U : w,
				replyMediaUrlFallback: A,
				replyMentionedJids: x,
				replyMessageText: T,
				replyPlaintextHash: F != null ? o("WAHashUtils").stringToPlaintextHash(F) : void 0,
				replySenderIsMe: $,
				replySourceId: b,
				replySourceTimestampMs: I,
				replyStatusType: R === 1 || R === 2 || R === 3 ? o("MAWMsgType").MSG_TYPE.STICKER : E,
				replyToUserId: D,
				replyXMAId: O
			};
		}
	}
	function d(e) {
		var t = e.specialTextSize;
		switch (t) {
			case 1: return (s || (s = o("LSIntEnum"))).ofNumber(r("LSHotEmojiSize").SMALL);
			case 2: return (s || (s = o("LSIntEnum"))).ofNumber(r("LSHotEmojiSize").MEDIUM);
			case 3: return (s || (s = o("LSIntEnum"))).ofNumber(r("LSHotEmojiSize").LARGE);
			default: return (s || (s = o("LSIntEnum"))).ofNumber(r("LSHotEmojiSize").NONE);
		}
	}
	function m(e) {
		if (r("justknobx")._("3424") && e === "media_restore") return "EncryptedBackupsMedia";
		switch (e) {
			case "eb_restore": return "EncryptedBackups";
			case "media_restore": return "EncryptedBackupsMedia";
			case "whatsapp": return "WhatsApp";
			default: return;
		}
	}
	function p(t, n, a) {
		var i, l, s, d, p = o("WAJids").extractUserId(o("MAWUserJidWrapper").getMyUserJid()), _ = ((i = t.isForwarded) != null ? i : !1) && t.type !== o("MAWMsgType").MSG_TYPE.STICKER, f = (l = t.forwardingScore) != null ? l : 0, g = o("MAWDbMsg").getCanonicalTsFromMsg(t), h = c(t, n, p), y = u(t, p), C = o("MAWXMAUtils").isXMAStoryShare(t.xmaMessageType), b = o("MAWXMAUtils").isXMAStoryReaction(t.xmaMessageType), v = o("MAWXMAUtils").isXMAExternalLinkShare(t.xmaMessageType), S = o("MAWXMAUtils").isIGXMAStoryMention(t.xmaMessageType), R = o("MAWXMAUtils").isFBXMAStoryMention(t.xmaMessageType), L = o("MAWXMAUtils").isXMAStoryHighlightShare(t.xmaMessageType), E = o("MAWXMAUtils").isXMAPostPrivateReply(t.xmaMessageType), k = o("MAWXMAUtils").isXMAMsgHighlightsTabFriendUpdatesReply(t.xmaMessageType), I = t.messageExpirationTs != null && t.messageExpirationTs <= o("WATimeUtils").unixTime(), T = o("MAWDbMsg").getSortOrderWithFallback(t), D = t.externalId, x = m(t.source);
		(n == null ? void 0 : n.replyPlaintextHash) !== (h == null ? void 0 : h.replyPlaintextHash) && r("FBLogger")("messenger_web").warn("replyPlaintextHash mismatch. From replyMeta is null: %s, from replyContent is null: %s. Message type: %s", (n == null ? void 0 : n.replyPlaintextHash) == null, (h == null ? void 0 : h.replyPlaintextHash) == null, t.type);
		var $ = (n == null ? void 0 : n.replyPlaintextHash) != null ? o("WAHashUtils").stringToPlaintextHash(n == null ? void 0 : n.replyPlaintextHash) : (s = h == null ? void 0 : h.replyPlaintextHash) != null ? s : void 0;
		switch (t.type) {
			case o("MAWMsgType").MSG_TYPE.TEXT: {
				var P, N = o("MAWVault").isVaulted(t.msgContent.content) ? t.msgContent.content : o("MAWVault").vault(t.msgContent.content);
				return babelHelpers.extends({}, h, {
					_META_loaded_as_quoted_msg: a,
					ack: t.ack,
					applicationErrorCode: t.applicationErrorCode,
					chatJid: t.threadJid,
					commands: t.msgContent.commands,
					content: N,
					editCount: t.editCount,
					ephemeralDurationInSec: (P = t.ephemeralSetting) == null ? void 0 : P.ephemeralExpirationInSec,
					externalId: D,
					forwardingScore: f,
					isAdminMessage: !1,
					isAuthorMe: t.author === o("WAJids").AUTHOR_ME,
					isExpiredMsg: I,
					isForwarded: _,
					mentionedJids: t.msgContent.mentionedJids,
					msgId: t.msgId,
					replyContent: y,
					replyPlaintextHash: $,
					sender: o("WAJids").authorToUserId(t.author, p),
					sortOrderMs: T,
					specialTextSize: t.specialTextSize,
					transportKey: x,
					ts: g,
					type_: t.type
				});
			}
			case o("MAWMsgType").MSG_TYPE.IMAGE:
			case o("MAWMsgType").MSG_TYPE.VIDEO:
			case o("MAWMsgType").MSG_TYPE.PTT:
			case o("MAWMsgType").MSG_TYPE.GIF:
			case o("MAWMsgType").MSG_TYPE.STICKER:
			case o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH:
			case o("MAWMsgType").MSG_TYPE.RAVEN:
			case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE:
			case o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE: return babelHelpers.extends({}, h, {
				_META_loaded_as_quoted_msg: a,
				ack: t.ack,
				applicationErrorCode: t.applicationErrorCode,
				chatJid: t.threadJid,
				ephemeralDurationInSec: (d = t.ephemeralSetting) == null ? void 0 : d.ephemeralExpirationInSec,
				externalId: D,
				forwardingScore: f,
				groupId: t.groupId,
				groupIndex: t.groupIndex,
				groupSize: t.groupSize,
				isAdminMessage: !1,
				isAuthorMe: t.author === o("WAJids").AUTHOR_ME,
				isExpiredMsg: I,
				isForwarded: _,
				msgId: t.msgId,
				replyContent: y,
				replyPlaintextHash: $,
				sender: o("WAJids").authorToUserId(t.author, p),
				sortOrderMs: T,
				transportKey: x,
				ts: g,
				type_: t.type
			});
			case o("MAWMsgType").MSG_TYPE.FUTUREPROOF: return babelHelpers.extends({}, h, {
				_META_loaded_as_quoted_msg: a,
				ack: t.ack,
				chatJid: t.threadJid,
				externalId: D,
				forwardingScore: f,
				isAdminMessage: !1,
				isAuthorMe: t.author === o("WAJids").AUTHOR_ME,
				isExpiredMsg: I,
				isForwarded: _,
				msgId: t.msgId,
				replyContent: y,
				replyPlaintextHash: $,
				sender: o("WAJids").authorToUserId(t.author, p),
				sortOrderMs: T,
				transportKey: x,
				ts: g,
				type_: t.type,
				unsupportedType: t.msgContent.subtype
			});
			case o("MAWMsgType").MSG_TYPE.CIPHERTEXT: return {
				_META_loaded_as_quoted_msg: a,
				ack: t.ack,
				chatJid: t.threadJid,
				externalId: D,
				forwardingScore: f,
				isAdminMessage: !1,
				isAuthorMe: t.author === o("WAJids").AUTHOR_ME,
				isExpiredMsg: I,
				isForwarded: _,
				msgId: t.msgId,
				sender: o("WAJids").authorToUserId(t.author, p),
				sortOrderMs: T,
				transportKey: x,
				ts: g,
				type_: t.type
			};
			case o("MAWMsgType").MSG_TYPE.UNAVAILABLE:
			case o("MAWMsgType").MSG_TYPE.EXPIRED_EPHEMERAL: return babelHelpers.extends({}, h, {
				_META_loaded_as_quoted_msg: a,
				ack: t.ack,
				chatJid: t.threadJid,
				externalId: D,
				forwardingScore: f,
				isAdminMessage: !1,
				isAuthorMe: t.author === o("WAJids").AUTHOR_ME,
				isExpiredMsg: I,
				isForwarded: _,
				msgId: t.msgId,
				replyContent: y,
				replyPlaintextHash: $,
				sender: o("WAJids").authorToUserId(t.author, p),
				sortOrderMs: T,
				transportKey: x,
				ts: g,
				type_: t.type
			});
			case o("MAWMsgType").MSG_TYPE.ADMIN:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN:
			case o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE:
			case o("MAWMsgType").MSG_TYPE.GROUP_POLL_UPDATE: {
				var M, w, A;
				return {
					_META_loaded_as_quoted_msg: a,
					ack: t.ack,
					adminContent: (M = t.msgContent) == null || (M = M.adminMsgContent) == null ? void 0 : M.map(function(e) {
						return e === "Facebook User" ? "0" : e;
					}),
					adminType: (w = t.msgContent) == null ? void 0 : w.adminType,
					adminVersion: (A = t.msgContent) == null ? void 0 : A.version,
					chatJid: t.threadJid,
					externalId: D,
					forwardingScore: f,
					isAdminMessage: !0,
					isAuthorMe: t.author === o("WAJids").AUTHOR_ME,
					isExpiredMsg: I,
					isForwarded: _,
					msgId: t.msgId,
					sender: o("WAJids").authorToUserId(t.author, p),
					sortOrderMs: T,
					transportKey: x,
					ts: g,
					type_: t.type
				};
			}
			case o("MAWMsgType").MSG_TYPE.REVOKED: return {
				_META_loaded_as_quoted_msg: a,
				ack: t.ack,
				chatJid: t.threadJid,
				externalId: D,
				forwardingScore: f,
				isAdminMessage: !1,
				isAuthorMe: t.author === o("WAJids").AUTHOR_ME,
				isExpiredMsg: I,
				isForwarded: _,
				msgId: t.msgId,
				originalTs: t.originalTs,
				sender: o("WAJids").authorToUserId(t.author, p),
				sortOrderMs: T,
				transportKey: x,
				ts: g,
				type_: t.type
			};
			case o("MAWMsgType").MSG_TYPE.XMA: {
				var F, O, B, W, q, U = (F = t.msgContent) == null ? void 0 : F.content, V = U != null ? o("MAWVault").isVaulted(U) ? (O = t.msgContent) == null ? void 0 : O.content : o("MAWVault").vault(U) : void 0;
				v && V == null && o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[MAWBridgeMsg] Missing content for external link share XMA message"])));
				var H = V;
				return babelHelpers.extends({}, h, {
					_META_loaded_as_quoted_msg: a,
					ack: t.ack,
					applicationErrorCode: t.applicationErrorCode,
					chatJid: t.threadJid,
					commands: (B = t.msgContent) == null ? void 0 : B.commands,
					content: H,
					ephemeralDurationInSec: (W = t.ephemeralSetting) == null ? void 0 : W.ephemeralExpirationInSec,
					externalId: D,
					forwardingScore: f,
					isAdminMessage: !1,
					isAuthorMe: t.author === o("WAJids").AUTHOR_ME,
					isCollapsed: t.isCollapsed,
					isExpiredMsg: I,
					isExpiredXmaMsg: t.isExpiredXmaMsg,
					isFBPostMention: o("MAWXMAUtils").isFBXMAPostMention(t.xmaMessageType),
					isFBStoryMention: R,
					isForwarded: _,
					isIGStoryMention: S,
					isMsgHighlightsTabFriendUpdatesReply: k,
					isPostPrivateReply: E,
					isStoryHighlightShare: L,
					isStoryReaction: b,
					isStoryShare: C,
					mentionedJids: (q = t.msgContent) == null ? void 0 : q.mentionedJids,
					msgId: t.msgId,
					replyContent: y,
					replyPlaintextHash: $,
					sender: o("WAJids").authorToUserId(t.author, p),
					sortOrderMs: T,
					transportKey: x,
					ts: g,
					type_: t.type,
					xmaMessageType: t.xmaMessageType
				});
			}
			default: return r("WAAssertUnreachable")(t.type);
		}
	}
	l.getSpecialTextSize = d, l.convertDbMsgSourceToLSTransportKey = m, l.createBridgeMsg = p;
}), 98);

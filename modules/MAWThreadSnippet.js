__d("MAWThreadSnippet", [
	"FBLogger",
	"MAWLocalizationType",
	"MAWMsgType",
	"MAWThreadSnippetForAdminOrEphemeralMsg",
	"MAWThreadSnippetForBumpExistingMessageMsg",
	"MAWThreadSnippetForCiphertextMsg",
	"MAWThreadSnippetForDocumentFileMsg",
	"MAWThreadSnippetForFallbackMessageMsg",
	"MAWThreadSnippetForGifMsg",
	"MAWThreadSnippetForImageMsg",
	"MAWThreadSnippetForPttMsg",
	"MAWThreadSnippetForRavenMsg",
	"MAWThreadSnippetForReceiverFetchMsg",
	"MAWThreadSnippetForRevokedMsg",
	"MAWThreadSnippetForStickerMsg",
	"MAWThreadSnippetForTextMsg",
	"MAWThreadSnippetForVideoMsg",
	"MAWThreadSnippetForXMAMsg",
	"MAWUserJidWrapper",
	"WAJids"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return /^\d+$/.test(e);
	}
	function s(t) {
		if (!o("WAJids").isAuthorSystem(t)) {
			var n = o("WAJids").isAuthorMe(t) ? o("WAJids").userIdFromJid(o("MAWUserJidWrapper").getMyUserJid()) : o("WAJids").userIdFromJid(t);
			if (!e(n)) {
				r("FBLogger")("messenger_web").mustfix("[MAWThreadSnippetBuildTxns] Snippet sender contact id is invalid");
				return;
			}
			return n;
		}
	}
	function u(e) {
		var t = e.adminMsgContent, n = e.adminType, a = e.author, i = e.chatJid, l = e.content, u = e.gifPlayback, c = e.mentionedJids, d = e.msgType, m = e.ravenMediaType, p = e.replyAuthor, _ = e.replyType, f = e.specialTextSize, g = e.unsupportedType, h = e.xmaMessageType, y = o("WAJids").switchOnMsgrChatJidType(i, {
			group: function(t) {
				return !0;
			},
			user: function(t) {
				return !1;
			}
		}), C = s(a);
		switch (d) {
			case o("MAWMsgType").MSG_TYPE.CIPHERTEXT: return r("MAWThreadSnippetForCiphertextMsg")(C);
			case o("MAWMsgType").MSG_TYPE.TEXT: return r("MAWThreadSnippetForTextMsg")({
				author: a,
				content: l,
				isGroup: y,
				mentionedJids: c,
				snippetSenderContactId: C,
				specialTextSize: f
			});
			case o("MAWMsgType").MSG_TYPE.IMAGE: return r("MAWThreadSnippetForImageMsg")({
				author: a,
				mentionedJids: c,
				snippetSenderContactId: C
			});
			case o("MAWMsgType").MSG_TYPE.VIDEO: return r("MAWThreadSnippetForVideoMsg")({
				author: a,
				gifPlayback: u,
				mentionedJids: c,
				snippetSenderContactId: C
			});
			case o("MAWMsgType").MSG_TYPE.PTT: return r("MAWThreadSnippetForPttMsg")({
				author: a,
				mentionedJids: c,
				snippetSenderContactId: C
			});
			case o("MAWMsgType").MSG_TYPE.ADMIN:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SETTING_ADMIN:
			case o("MAWMsgType").MSG_TYPE.EPHEMERAL_SCREENSHOT_ACTION:
			case o("MAWMsgType").MSG_TYPE.GROUP_POLL_CREATE:
			case o("MAWMsgType").MSG_TYPE.GROUP_POLL_UPDATE: return r("MAWThreadSnippetForAdminOrEphemeralMsg")({
				adminMsgContent: t,
				adminType: n,
				snippetSenderContactId: C
			});
			case o("MAWMsgType").MSG_TYPE.GIF: return r("MAWThreadSnippetForGifMsg")({
				author: a,
				mentionedJids: c,
				snippetSenderContactId: C
			});
			case o("MAWMsgType").MSG_TYPE.STICKER: return r("MAWThreadSnippetForStickerMsg")({
				author: a,
				mentionedJids: c,
				snippetSenderContactId: C
			});
			case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE: return r("MAWThreadSnippetForDocumentFileMsg")({
				author: a,
				mentionedJids: c,
				snippetSenderContactId: C
			});
			case o("MAWMsgType").MSG_TYPE.REVOKED: return r("MAWThreadSnippetForRevokedMsg")({
				author: a,
				mentionedJids: c,
				snippetSenderContactId: C
			});
			case o("MAWMsgType").MSG_TYPE.XMA: return r("MAWThreadSnippetForXMAMsg")({
				author: a,
				chatJid: i,
				content: l,
				mentionedJids: c,
				snippetSenderContactId: C,
				xmaMessageType: h
			});
			case o("MAWMsgType").MSG_TYPE.BUMP_EXISTING_MESSAGE: return r("MAWThreadSnippetForBumpExistingMessageMsg")({
				author: a,
				replyAuthor: p,
				replyType: _,
				snippetSenderContactId: C
			});
			case o("MAWMsgType").MSG_TYPE.FUTUREPROOF: return r("MAWThreadSnippetForFallbackMessageMsg")({
				author: a,
				snippetSenderContactId: C,
				unsupportedType: g
			});
			case o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH: return r("MAWThreadSnippetForReceiverFetchMsg")({
				author: a,
				mentionedJids: c,
				snippetSenderContactId: C
			});
			case o("MAWMsgType").MSG_TYPE.RAVEN: return r("MAWThreadSnippetForRavenMsg")({
				author: a,
				mentionedJids: c,
				ravenMediaType: m,
				snippetSenderContactId: C
			});
			default: return {
				snippetParams: {
					contactIDs: [],
					strings: []
				},
				snippetSenderContactId: C,
				snippetType: o("MAWLocalizationType").LOCALIZATION_TYPE.UNAVAILABLE_SNIPPET
			};
		}
	}
	l.getSnippetContactId = s, l.buildThreadSnippet = u;
}), 98);

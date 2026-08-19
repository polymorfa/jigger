__d("MAWGetThreadUpdateType", [
	"FBLogger",
	"MAWGetThreadUpdateTypeForAdminMsg",
	"MAWThreadSnippetUtils",
	"MAWThreadUpdateType",
	"MAWUserJidWrapper",
	"WAJids"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = e.reaction == null;
		return u(e, t);
	}
	function s(e) {
		return c(e.reactToAuthor) && !c(e.author);
	}
	function u(e, t) {
		return s(e) && !t ? e.senderTimestampMs == null ? o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.SNIPPET_ONLY : o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.MARK_THREAD_AS_UNREAD : o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.NO_SNIPPET_OR_ACTIVITY_TS_UPDATE;
	}
	function c(e) {
		return e === o("WAJids").AUTHOR_ME || e === o("MAWUserJidWrapper").getMyUserJid();
	}
	function d(e) {
		var t = e.adminType, n = e.author, a = e.msgType, i = e.xmaMessageType, l = function(t) {
			var e = t.me, r = t.other;
			return o("WAJids").isAuthorMe(n) ? e : r;
		};
		switch (a) {
			case "Text":
			case "ReceiverFetch":
			case "Sticker":
			case "Unavailable":
			case "Video":
			case "Futureproof":
			case "DocumentFile":
			case "EphemeralScreenshotAction":
			case "Gif":
			case "Image":
			case "Ptt":
			case "RavenAction":
			case "Raven":
			case "GroupPollCreate":
			case "GroupPollUpdate":
			case "BumpExistingMessage": return l({
				me: o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.BUMP_THREAD,
				other: o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.MARK_THREAD_AS_UNREAD
			});
			case "XMA": return o("MAWThreadSnippetUtils").shouldIgnoreXMAMsgForSnippet(i) ? o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.NO_SNIPPET_OR_ACTIVITY_TS_UPDATE : l({
				me: o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.BUMP_THREAD,
				other: o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.MARK_THREAD_AS_UNREAD
			});
			case "Revoked": return o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.SNIPPET_ONLY;
			case "DeleteForMe": return o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.NO_SNIPPET_OR_ACTIVITY_TS_UPDATE;
			case "EditAction": return l({
				me: o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.SNIPPET_ONLY,
				other: o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.NO_SNIPPET_OR_ACTIVITY_TS_UPDATE
			});
			case "GroupInvite": return o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.BUMP_THREAD;
			case "Admin": {
				if (a === "Admin") return o("MAWGetThreadUpdateTypeForAdminMsg").getThreadUpdateTypeForAdminMsg(t);
				throw r("FBLogger")("messenger_web").mustfixThrow("Non-admin msg passed in " + (a != null ? a : "UNKNOWN"));
			}
			case "SenderKeyDistribution": return o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.NO_SNIPPET_OR_ACTIVITY_TS_UPDATE;
			case "Ciphertext": return o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.BUMP_THREAD;
			case "EphemeralSettingAdmin":
			case "EphemeralSettingChangeFromCurrentDevice":
			case "EphemeralSyncResponse": return o("MAWThreadUpdateType").THREAD_UPDATE_TYPE.SNIPPET_ONLY;
			default: throw r("FBLogger")("messenger_web").mustfixThrow("[MAWGetThreadUpdateType] Unexpected message type: %s", a != null ? a : "UNKNOWN");
		}
	}
	l.getThreadUpdateTypeForReaction = e, l.getThreadUpdateTypeForMsg = d;
}), 98);

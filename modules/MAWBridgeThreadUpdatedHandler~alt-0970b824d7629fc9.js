__d("MAWBridgeThreadUpdatedHandler", [
	"MAWBridgeBuildThreadSnippet",
	"MAWBridgeUIEventDataValidation",
	"MAWFolderUtils",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"ReQL",
	"getMAWLastMessageCtaType"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		var n, r = t.folder != null ? o("MAWFolderUtils").getMessagingFolderTag(t.folder) : e.folderName;
		return (n = t.cannotReplyReason) != null ? n : r === "inbox" ? void 0 : e.cannotReplyReason;
	}
	async function s(t, n, a) {
		var i = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.threads).getKeyRange(a));
		if (i != null) {
			var l = o("MAWBridgeBuildThreadSnippet").buildBridgeThreadSnippet(n, i.snippet), s = e(i, n), u = r("getMAWLastMessageCtaType")(n.snippetType), c = babelHelpers.extends({}, i, {
				cannotReplyReason: s,
				folderName: i.folderName,
				lastMessageCtaType: u,
				parentThreadKey: i.parentThreadKey,
				snippet: l,
				snippetSenderContactId: n.snippetSenderContactId == null ? i.snippetSenderContactId : o("MAWBridgeUIEventDataValidation").stringToI64Opt(n.snippetSenderContactId)
			});
			await t.threads.put(c);
		}
	}
	function u(e, t) {
		var n = t.threadJid;
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(e, n, "MAWBridgeThreadUpdatedHandler", function(e, n) {
			return s(e, t, n);
		});
	}
	l.callWithoutWaitingForAnything = s, l.call = u;
}), 98);

__d("MAWBridgeThreadUpdatedHandler", [
	"MAWBridgeBuildThreadSnippet",
	"MAWBridgeUIEventDataValidation",
	"MAWFolderUtils",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"ReQL",
	"asyncToGeneratorRuntime",
	"getMAWLastMessageCtaType"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		var n, r = t.folder != null ? o("MAWFolderUtils").getMessagingFolderTag(t.folder) : e.folderName;
		return (n = t.cannotReplyReason) != null ? n : r === "inbox" ? void 0 : e.cannotReplyReason;
	}
	function s(e, t, n) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
			var i = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.threads).getKeyRange(a));
			if (i != null) {
				var l = o("MAWBridgeBuildThreadSnippet").buildBridgeThreadSnippet(n, i.snippet), s = e(i, n), u = r("getMAWLastMessageCtaType")(n.snippetType), c = babelHelpers.extends({}, i, {
					cannotReplyReason: s,
					folderName: i.folderName,
					lastMessageCtaType: u,
					parentThreadKey: i.parentThreadKey,
					snippet: l,
					snippetSenderContactId: n.snippetSenderContactId == null ? i.snippetSenderContactId : o("MAWBridgeUIEventDataValidation").stringToI64Opt(n.snippetSenderContactId)
				});
				yield t.threads.put(c);
			}
		}), u.apply(this, arguments);
	}
	function c(e, t) {
		var n = t.threadJid;
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(e, n, "MAWBridgeThreadUpdatedHandler", function(e, n) {
			return s(e, t, n);
		});
	}
	l.callWithoutWaitingForAnything = s, l.call = c;
}), 98);

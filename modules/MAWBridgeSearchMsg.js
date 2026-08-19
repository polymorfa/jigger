__d("MAWBridgeSearchMsg", [
	"MAWCurrentUser",
	"MAWVault",
	"WAJids"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		t === void 0 && (t = !0);
		var n = e, r = o("MAWCurrentUser").getID(), a = e.author, i = e.externalId, l = e.msgId, s = e.threadJid;
		if (s == null) return null;
		var u = n.content, c = n.sortOrderMs, d = {
			chatJid: s,
			externalId: i,
			msg: {
				msgId: l,
				sender: o("WAJids").authorToUserId(a, r),
				ts: e.canonicalTs
			},
			sortOrderMs: c
		}, m = u;
		return babelHelpers.extends({}, d, { msg: babelHelpers.extends({}, d.msg, { content: m != null ? o("MAWVault").isVaulted(m) ? t ? m : o("MAWVault").unvault(m) : t ? o("MAWVault").vault(m) : m : void 0 }) });
	}
	var s = "message_content_search", u = "non_message_content_search";
	l.createBridgeSearchMsg = e, l.MESSAGE_CONTENT_SEARCH = s, l.NON_MESSAGE_CONTENT_SEARCH = u;
}), 98);

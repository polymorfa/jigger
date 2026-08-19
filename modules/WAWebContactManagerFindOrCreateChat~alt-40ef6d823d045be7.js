__d("WAWebContactManagerFindOrCreateChat", ["WAWebChatCollection", "WAWebFindChatAction"], (function(t, n, r, o, a, i, l) {
	async function e(e) {
		var t = o("WAWebChatCollection").ChatCollection.get(e);
		if (t != null) return t;
		var n = await o("WAWebFindChatAction").findOrCreateLatestChat(e, "contactManager"), r = n.chat;
		return r;
	}
	l.contactManagerFindOrCreateChat = e;
}), 98);

__d("MAWGetProtocolMsgIdByMsgIdInUI", [
	"I64",
	"LSDatabaseSingleton",
	"MAWMpsGating",
	"MAWThreadMappingUtils",
	"MAWUserJidWrapper",
	"WAJids",
	"WAStanzaUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = o("WAJids").createJidUtils({ platform: "msgr" });
	async function c(t) {
		var n = await (e || (e = o("LSDatabaseSingleton"))).getLSDatabaseSingletonPromiseOrValue();
		return n.runInTransaction(async function(e) {
			var n = await e.messages.index("messageId").get(t);
			if (n == null) return null;
			var r = await o("MAWThreadMappingUtils").getChatJidFromMappingTable(e, n.threadKey);
			if (r != null) return {
				author: u.toUserJid((s || (s = o("I64"))).to_float(n.senderId).toString()),
				chat: r,
				externalId: o("WAStanzaUtils").toStanzaId(n.offlineThreadingId)
			};
		}, "readonly", void 0, void 0, i.id + ":32");
	}
	var d = async function(t) {
		if (o("MAWMpsGating").isFullMpsEnabled()) return c(t);
		var e = await c(t);
		return e != null && o("MAWUserJidWrapper").getMyUserJid() === e.author ? {
			author: "@me",
			chat: e.chat,
			externalId: e.externalId
		} : e;
	};
	l.getProtocolMsgIdByMsgIdUI = d;
}), 98);

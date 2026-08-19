__d("getProtocolMsgIdByMsgIdCommon", [
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"WAJids"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return o("MAWDexieTable").dexieAll([
			e.messages.get({ msgId: t }),
			e.unrenderedMessages.get({ msgId: t }),
			e.reactions.get({ reactionId: t })
		]).then(function(t) {
			var n = t[0], r = t[1], a = t[2];
			if (a != null) return o("WAJids").isAuthorSystem(a.author) ? null : {
				author: a.author,
				chat: a.threadJid,
				externalId: a.externalId
			};
			var i = n || r;
			if (i == null) return null;
			var l = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(i.threadJid)) : e.threads.get({ jid: i.threadJid });
			return l.then(function(e) {
				var t = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(e, "getProtocolMsgIdByMsgIdCommon.getProtocolMsgIdByMsgIdCommon");
				return t == null || o("WAJids").isAuthorSystem(i.author) ? null : {
					author: i.author,
					chat: t.jid,
					externalId: i.externalId
				};
			});
		});
	}
	l.getProtocolMsgIdByMsgIdCommon = e;
}), 98);

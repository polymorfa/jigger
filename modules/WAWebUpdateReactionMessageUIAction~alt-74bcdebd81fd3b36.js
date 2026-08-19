__d("WAWebUpdateReactionMessageUIAction", [
	"WAWebDBGetReactions",
	"WAWebReactionDataUtils",
	"WAWebReactionsCollection",
	"WAWebReactionsMsgAction",
	"WAWebReactionsUtils"
], (function(t, n, r, o, a, i, l) {
	async function e(e, t) {
		var n = await o("WAWebReactionsUtils").createReactionsRow(e);
		if (n != null) {
			var r = !t, a = "reaction " + String(e.id) + " received to: " + String(e.reactionParentKey), i = await o("WAWebDBGetReactions").existsReactionAddressingModeInsensitive({
				parentMsgKey: n.parentMsgKey,
				senderUserJid: n.senderUserJid
			});
			if (i && i.msgKey === n.msgKey) {
				var l = i;
				await o("WAWebReactionsMsgAction").addOrUpdateReactionsModelCollection(l, { allowNotify: r });
			}
		}
	}
	function s(e) {
		var t = new Set(e);
		for (var n of o("WAWebReactionsCollection").ReactionsCollection.toArray()) for (var r of n.reactions.toArray()) for (var a of t) {
			var i = r.senders.get(a);
			if (i != null && (r.senders.remove(a), t.delete(a), t.size === 0)) return;
		}
	}
	async function u(e, t, n) {
		await Promise.all(e.map(function(e) {
			return o("WAWebReactionsMsgAction").addOrUpdateReactionsModelCollection(o("WAWebReactionDataUtils").reactionMsgDataToReactionRow(e), n);
		})), t.length > 0 && s(t);
	}
	l.updateReactionUI = e, l.updateReactionCollection = u;
}), 98);

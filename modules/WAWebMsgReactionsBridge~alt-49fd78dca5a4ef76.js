__d("WAWebMsgReactionsBridge", [
	"WALogger",
	"WAWebAck",
	"WAWebDBGetReactions",
	"WAWebDBUpdateMessageTable",
	"WAWebLidMigrationUtils",
	"WAWebMsgCollection",
	"WAWebMsgKey",
	"WAWebUserPrefsMeUser",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e;
	async function s(e, t) {
		var n = o("WAWebMsgCollection").MsgCollection.get(e);
		if (n && n.hasReaction !== t) {
			var r = { hasReaction: t };
			await o("WAWebDBUpdateMessageTable").updateMessageTable(n.id, r), n.set(r);
		}
		return Promise.resolve();
	}
	async function u(t) {
		var n;
		try {
			if (n = await o("WAWebDBGetReactions").getReactions(t.id.toString()), n.reactions.length === 0 && t.id.remote.isStatus()) {
				var a = o("WAWebLidMigrationUtils").getAlternateMsgKey(t.id);
				a && (n = await o("WAWebDBGetReactions").getReactions(a.toString()));
			}
		} catch (t) {
			var i = r("getErrorSafe")(t);
			throw o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["getReactions: failed"]))).catching(i).verbose().sendLogs("getReactions failed"), i;
		}
		var l = n.reactions.map(function(e) {
			var t = e.senders.map(function(e) {
				return babelHelpers.extends({}, e, {
					id: r("WAWebMsgKey").fromString(e.msgKey),
					isSendFailure: o("WAWebUserPrefsMeUser").isSerializedWidMe(e.senderUserJid) && e.ack === o("WAWebAck").ACK.CLOCK
				});
			});
			return babelHelpers.extends({}, e, {
				hasReactionByMe: e.hasReactionByMe,
				id: e.aggregateEmoji,
				senders: t
			});
		}), u = l.length > 0;
		return await s(t.id.toString(), u), babelHelpers.extends({}, n, {
			id: t.id,
			reactions: l
		});
	}
	l.updateHasReactionInParent = s, l.sendQueryReactions = u;
}), 98);

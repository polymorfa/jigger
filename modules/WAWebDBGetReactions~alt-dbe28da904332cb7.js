__d("WAWebDBGetReactions", [
	"WAWebApiContact",
	"WAWebEmoji",
	"WAWebLidMigrationUtils",
	"WAWebModelStorageUtils",
	"WAWebMsgKey",
	"WAWebParseMsgKeyString",
	"WAWebSchemaReactions",
	"WAWebWidFactory"
], (function(t, n, r, o, a, i, l) {
	var e = "";
	async function s(t) {
		var n = await o("WAWebSchemaReactions").getReactionsTable().equals(["parentMsgKey"], t), a = {
			reactions: [],
			reactionByMe: null
		}, i = new Map();
		n.forEach(function(t) {
			var n = t.orphan, l = t.reactionText;
			if (l !== e && n !== 1) {
				var s, u = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(l), c = (s = i.get(u)) != null ? s : [];
				i.set(u, [].concat(c, [t]));
				var d = r("WAWebParseMsgKeyString")(t.msgKey);
				d.fromMe && (a.reactionByMe = t);
			}
		});
		var l = a.reactionByMe ? o("WAWebEmoji").EmojiUtil.getEmojiAggregate(a.reactionByMe.reactionText) : "";
		return i.forEach(function(e, t) {
			var n = !1;
			t === l && (n = !0), a.reactions.push({
				aggregateEmoji: t,
				senders: e,
				hasReactionByMe: n
			});
		}), a;
	}
	async function u(t) {
		var n = new Map();
		return await o("WAWebModelStorageUtils").getStorage().lock(["reactions"], async function(r) {
			var o = r[0], a = await o.anyOf(["parentMsgKey"], t);
			a.forEach(function(t) {
				var r = t.orphan, o = t.reactionText;
				if (o !== e && r !== 1) {
					var a, i = (a = n.get(t.parentMsgKey)) != null ? a : [];
					i.push(t), n.set(t.parentMsgKey, i);
				}
			});
		}), n;
	}
	function c(e) {
		return o("WAWebModelStorageUtils").getStorage().lock(["reactions"], function(t) {
			var n = t[0];
			return n.anyOf(["parentMsgKey"], e);
		});
	}
	async function d(e) {
		var t, n, a = e.parentMsgKey, i = e.senderUserJid, l = [], s = (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(r("WAWebMsgKey").from(a))) == null ? void 0 : t.toString(), u = (n = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").createUserWidOrThrow(i))) == null ? void 0 : n.toString(), c = [a, s].filter(Boolean), d = [i, u].filter(Boolean);
		for (var m of c) for (var p of d) l.push([m, p]);
		var _ = await o("WAWebSchemaReactions").getReactionsTable().anyOf(["parentMsgKey", "senderUserJid"], l, { limit: 1 });
		return _[0];
	}
	l.REVOKED_REACTION_TEXT = e, l.getReactions = s, l.getFilteredReactionsFromParentMsgs = u, l.getAllReactionsFromParentMsgs = c, l.existsReactionAddressingModeInsensitive = d;
}), 98);

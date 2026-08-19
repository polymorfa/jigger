__d("MAWDbReactionsTxns", [
	"FBLogger",
	"MAWAuthor",
	"MAWBridgeTypesCreators",
	"MAWDbMsg",
	"MAWDexieTable",
	"MAWIndexedDb",
	"WALogger",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = function(t) {
		return t;
	};
	function d(e, t) {
		return e.reactions.put(c(t));
	}
	function m(t, n) {
		return t.reactions.delete(n.rowId).then(function() {
			var t = n.author, r = n.reactionId, a = n.reactToMsgId, i = n.threadJid;
			a != null && (o("MAWIndexedDb").afterTransaction({
				tag: "DeleteReaction",
				value: o("MAWBridgeTypesCreators").createBridgeDeleteReaction({
					author: t,
					chatJid: i,
					reactToMsgId: a
				})
			}), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Successfully deleted reaction with id : ", "."])), r));
		});
	}
	function p(e, t) {
		var n = t.reduce(function(e, t) {
			return e.set(t.msgId, t), e;
		}, new Map());
		return e.reactions.where("reactToMsgId").anyOf(t.map(function(e) {
			return e.msgId;
		})).toArray().then(function(e) {
			var t = e.filter(function(e) {
				var t, r = e.reactToExternalId, o = e.reactToMsgId;
				return o != null && r === ((t = n.get(o)) == null ? void 0 : t.externalId);
			});
			return t.length < e.length && r("FBLogger")("messenger_web").mustfix("Reactions query by reactToMsgId returns reactions with mismatching externalId"), t;
		});
	}
	function _(e, t) {
		return e.reactions.where("reactToMsgId").equals(t.msgId).toArray().then(function(e) {
			var n = e.filter(function(e) {
				var n = e.reactToExternalId;
				return n === t.externalId;
			});
			return n.length < e.length && r("FBLogger")("messenger_web").mustfix("Reactions query by reactToMsgId returns reactions with mismatching externalId"), n;
		});
	}
	function f(e, t) {
		return p(e, [t]);
	}
	function g(e, t) {
		var n = t.author, r = t.chat, o = t.externalId;
		return e.reactions.where("externalId").equals(o).filter(function(e) {
			return e.author === n && e.threadJid === r;
		}).first();
	}
	function h(e, t) {
		return o("MAWDexieTable").dexieAll(t.map(function(t) {
			var n = t.author, r = t.externalId, a = o("MAWAuthor").getAuthorUserJid(n);
			return e.reactions.where("reactToExternalId").equals(r).filter(function(e) {
				return o("MAWAuthor").getAuthorUserJid(e.reactToAuthor) === a;
			}).toArray();
		})).then(function(t) {
			var n = t.flat();
			if (n.forEach(function(e) {
				var t = e.author, n = e.reactToMsgId, r = e.threadJid;
				n != null && o("MAWIndexedDb").afterTransaction({
					tag: "DeleteReaction",
					value: o("MAWBridgeTypesCreators").createBridgeDeleteReaction({
						author: t,
						chatJid: r,
						reactToMsgId: n
					})
				});
			}), n.length !== 0) return o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Successfully deleted: ", " reactions rows."])), n.length), e.reactions.bulkDelete(n.map(function(e) {
				return e.rowId;
			}));
		});
	}
	function y(e, t) {
		return e.reactions.where("reactToMsgId").anyOf(t.map(function(e) {
			return e.msgId;
		})).delete().then(function(e) {
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Deleted ", " reactions"])), e);
		});
	}
	function C(e, t) {
		return e.reactions.where("reactionId").between(o("MAWDbMsg").msgIdsInChatLowerBound(t.chatId), o("MAWDbMsg").msgIdsInChatUpperBound(t.chatId)).last().then(function(e) {
			var t = e == null ? 0 : o("MAWDbMsg").getInChatMsgIdFromMsgId(e.reactionId);
			return t + 1;
		});
	}
	function b(e, t, n, r, a, i, l) {
		var s, u, c = (s = r == null ? void 0 : r.ts) != null ? s : o("WATimeUtils").unixTime();
		return e.reactions.where(["threadJid", "ts"]).between([t, (u = o("WATimeUtils").castMillisTimeToUnixTime(n)) != null ? u : o("WATimeUtils").castToUnixTime(0)], [t, c], !0, a).reverse().filter(l).limit(i).toArray();
	}
	l.coerceToReaction = c, l.putReaction = d, l.deleteReaction = m, l.getReactionsFromMessages = p, l.getReactionsForMessage = _, l.getReactionsFromMessage = f, l.maybeGetReactionByProtocolMsgId = g, l.deleteReactionsByUniqueMsgIdentifiers = h, l.deleteAllReactionsForMessages = y, l.getNextReactionIdNumberForThread = C, l.fetchReactionsFromDbWithTimestamp = b;
}), 98);

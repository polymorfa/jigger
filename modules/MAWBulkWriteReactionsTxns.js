__d("MAWBulkWriteReactionsTxns", [
	"FBLogger",
	"MAWAuthor",
	"MAWBulkPutReactionsWithThreadUpdateTxn",
	"MAWDbMsg",
	"MAWDbReaction",
	"MAWDbReactionsTxns",
	"MAWDeletedReactionsCache",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"MAWJidUtils",
	"MAWODSProxy",
	"MAWUseProtocolMsgIdForMsgId",
	"WAArrayGroupBy",
	"WAJids",
	"WAOdsEnums"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		var n = [], a = [];
		t.forEach(function(e) {
			var t = e.chatJid, r = e.unstoredReaction, o = r.reactToExternalId;
			n.push(t), a.push(o);
		});
		var i = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().getAll(n)) : e.threads.where("jid").anyOf(n).toArray();
		return o("MAWDexieTable").dexieAll([
			i,
			e.messages.where("externalId").anyOf(a).toArray(),
			e.reactions.where("reactToExternalId").anyOf(a).toArray()
		]).then(function(n) {
			var a = n[0], i = n[1], l = n[2], u = o("MAWInMemoryThreadStore").compareThreadsAndMaybeSwap(a, "MAWBulkWriteReactionsTxns.prepareReactionsData"), c = new Map(u.map(function(e) {
				return [e.jid, e];
			})), d = new Map(o("WAArrayGroupBy").groupBy(i, function(e) {
				return e.externalId;
			})), m = new Map(o("WAArrayGroupBy").groupBy(l, function(e) {
				return e.reactToExternalId;
			})), p = [], _ = o("MAWUseProtocolMsgIdForMsgId").shouldUseProtocolMsgIdForMsgId(), f = function(n) {
				return t.forEach(function(e) {
					var t = e.chatJid, a = e.unstoredReaction, i = a.author, l = a.externalId, u = a.groupingKey, f = a.reaction, g = a.reactToAuthor, h = a.reactToExternalId, y = a.senderTimestampMs, C = a.ts, b = c.get(t);
					if (b == null) return "missing_thread";
					var v = null;
					if (!_ && n != null) {
						var S = new Map(n), R = S.get(b.jid);
						if (R == null) throw r("FBLogger")("messenger_web").mustfixThrow("nextInChatReactionId should not be null");
						S.set(b.jid, R + 1), v = o("MAWDbMsg").craftReactionId(b.chatId, R);
					} else v = o("MAWJidUtils").formatProtocolMsgIdFromExternalId(b.jid, l);
					var L = m.get(a.reactToExternalId) || [], E = o("MAWDbReaction").findMatchingReaction(L, b.jid, i);
					if (E != null && o("MAWDbReaction").getReactionTimeMs(E) > o("MAWDbReaction").getReactionTimeMs(a)) return "newer_reaction_exists";
					if (E != null && a.reaction == null) {
						var k = {
							author: a.author,
							chat: a.threadJid,
							externalId: a.externalId
						};
						o("MAWDeletedReactionsCache").DeletedReactionsCache.set(k, E);
					}
					var I = o("MAWAuthor").getAuthorUserJid(g), T = d.get(a.reactToExternalId);
					T == null && a.reactToExternalId === a.externalId && r("FBLogger")("messenger_web").warn("reactToExternalId is same as externalId");
					var D = s(b, I, T), x = o("MAWDbReaction").formatReactionForDb(b.jid, l, v, h, f, u, g, D == null && _ ? o("MAWJidUtils").formatProtocolMsgIdFromExternalId(b.jid, h) : D == null ? void 0 : D.msgId, C, i != null ? i : o("WAJids").AUTHOR_ME, E == null ? void 0 : E.rowId, void 0, y);
					p.push(x);
				}), {
					chatJidToDbThread: c,
					unstoredDbReactionsForInsertion: p
				};
			};
			if (!_) {
				var g = u.map(function(t) {
					return o("MAWDbReactionsTxns").getNextReactionIdNumberForThread(e, t).then(function(e) {
						return [t.jid, e];
					});
				});
				return o("MAWDexieTable").dexieAll(g).then(f);
			}
			return f(null);
		});
	}
	function s(e, t, n) {
		var a, i = (a = n == null ? void 0 : n.filter(function(n) {
			return n.threadJid === e.jid && t === o("MAWAuthor").getAuthorUserJid(n.author);
		})) != null ? a : [];
		return i.length > 1 && (r("FBLogger")("maw_mutation_validator").warn("%s matching duplicate messages found for a reaction", i.length), o("MAWODSProxy").odsBumpEntityKey({
			entity: o("WAOdsEnums").Entity.MAW_MUTATION_VALIDATOR,
			key: "match_reaction_to_message.invalid"
		})), i[0];
	}
	function u(e, t) {
		var n = t.chatJidToDbThread, r = t.unstoredDbReactionsForInsertion;
		return o("MAWBulkPutReactionsWithThreadUpdateTxn").bulkPutReactionsWithThreadUpdates(e, r, n);
	}
	l.prepareReactionsData = e, l.bulkWriteReactions = u;
}), 98);

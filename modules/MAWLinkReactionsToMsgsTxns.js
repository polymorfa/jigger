__d("MAWLinkReactionsToMsgsTxns", ["MAWDbMsgTxns", "WAMsgMap"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return e.reduce(function(e, t) {
			var n, r = {
				author: t.reactToAuthor,
				chat: t.threadJid,
				externalId: t.reactToExternalId
			}, o = (n = e.get(r)) != null ? n : [];
			return o.push(t), e.set(r, o);
		}, new (o("WAMsgMap")).MsgMap());
	}
	function s(t, n) {
		return t.reactions.where("reactToExternalId").anyOf(n).toArray().then(function(t) {
			return e(t.filter(function(e) {
				return e.reactToMsgId == null;
			}));
		});
	}
	function u(e, t) {
		return s(e, t).then(function(t) {
			return o("MAWDbMsgTxns").getMsgsByProtocolMsgId(e, t.keys()).then(function(e) {
				return e.flatMap(function(e) {
					var n, r = {
						author: e.author,
						chat: e.threadJid,
						externalId: e.externalId
					}, o = (n = t.get(r)) != null ? n : [];
					return o.map(function(t) {
						return t.reactToMsgId = e.msgId, t;
					});
				});
			});
		});
	}
	function c(e, t) {
		return e.reactions.bulkPut(t).then(function() {});
	}
	l.getReactionLinkUpdatesForExternalIds = u, l.updateReactionLinks = c;
}), 98);

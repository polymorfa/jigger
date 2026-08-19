__d("MAWDbUnrenderedMsgTxns", [
	"MAWAckLevel",
	"MAWDbMsg",
	"MAWDbMsgUtil",
	"MAWDexieTable",
	"MAWInMemoryThreadStore",
	"WAJids",
	"WALogger",
	"WAMsgMap",
	"WAResultOrError"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(e, t) {
		var n = t.author, r = t.chat, a = t.externalId, i = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().get(r)) : e.threads.get({ jid: r });
		return i.then(function(t) {
			var i = o("MAWInMemoryThreadStore").compareThreadAndMaybeSwap(t, "MAWDbUnrenderedMsgTxns.maybeGetUnrenderedMsgByProtocolMsgId");
			return i == null ? o("WAResultOrError").makeError("missing_thread_unrendered_msg") : m(e, a, r, n).then(function(e) {
				return e == null ? o("WAResultOrError").makeError("missing_unrendered_msg") : o("WAResultOrError").makeResult(e);
			});
		});
	}
	function d(e, t) {
		var n = t.map(function(e) {
			var t = e.externalId;
			return t;
		});
		return e.unrenderedMessages.where("externalId").anyOf(n).toArray().then(function(e) {
			var n = o("MAWDbMsgUtil").convertMsgArrayToMap(e), r = new (o("WAMsgMap")).MsgMap();
			return t.forEach(function(e) {
				var t = n.get(e);
				t != null && r.set(e, t);
			}), r;
		});
	}
	function m(e, t, n, r) {
		return e.unrenderedMessages.where("externalId").equals(t).filter(function(e) {
			return e.author === r && e.threadJid === n;
		}).first();
	}
	function p(e, t) {
		return e + "_" + t;
	}
	function _(e, t) {
		var n = t.map(function(e) {
			var t = e.externalId;
			return t;
		}), r = Array.from(new Set(t.map(function(e) {
			return e.chat;
		}))), a = o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(o("MAWInMemoryThreadStore").getReadonlyInMemoryThreadsStore().getAll(r)) : e.threads.where("jid").anyOf(r).toArray();
		return o("MAWDexieTable").dexieAll([a, e.unrenderedMessages.where("externalId").anyOf(n).toArray()]).then(function(e) {
			var n = e[0], r = e[1];
			if (r.length === 0 || n.length === 0) return [];
			var o = new Map();
			return t.forEach(function(e) {
				var t = e.author, n = e.chat, r = e.externalId, a = o.get(r) || new Set();
				a.add(p(t, n)), o.set(r, a);
			}), r.filter(function(e) {
				var t = e.author, n = e.externalId, r = e.threadJid, a = o.get(n);
				return a != null && r != null && a.has(p(t, r));
			});
		});
	}
	function f(t, n, r) {
		return g(t, [{
			ack: r,
			msgId: n
		}]).then(function(t) {
			var n = t[0];
			return n == null ? (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["updateSystemAckForUnrenderedMsg on non existing message"]))), null) : n;
		});
	}
	function g(e, t) {
		var n = t.map(function(e) {
			return e.msgId;
		}), r = new Map();
		return t.forEach(function(e) {
			return r.set(e.msgId, { ack: e.ack });
		}), e.unrenderedMessages.where("msgId").anyOf(n).toArray().then(function(t) {
			if (t.length === 0) return t;
			var n = [], a = [];
			return t.forEach(function(e) {
				var t;
				if (e.author !== o("WAJids").AUTHOR_ME) {
					o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["bulkUpdateSystemAck on incoming message"]))), n.push(e);
					return;
				}
				if (e.ack > o("MAWAckLevel").ACK.clock) {
					o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["bulkUpdateSystemAck on sent message"]))), n.push(e);
					return;
				}
				var i = (t = r.get(e.msgId)) == null ? void 0 : t.ack;
				if (i == null) return null;
				var l = babelHelpers.extends({}, e, { ack: i });
				i === o("MAWAckLevel").ACK.sent && delete l.resendCount, a.push(l);
			}), e.unrenderedMessages.bulkPut(a).then(function() {
				return [].concat(a, n);
			});
		});
	}
	function h(e, t) {
		var n = t.map(function(t) {
			return e.unrenderedMessages.get({ msgId: t });
		});
		return o("MAWDexieTable").dexieAll(n);
	}
	function y(e, t) {
		return e.unrenderedMessages.where("msgId").between(o("MAWDbMsg").msgIdsInChatLowerBound(t.chatId), o("MAWDbMsg").msgIdsInChatUpperBound(t.chatId)).last().then(function(e) {
			var t = e == null ? 0 : o("MAWDbMsg").getInChatMsgIdFromMsgId(e.msgId);
			return t + 1;
		});
	}
	l.maybeGetUnrenderedMsgByProtocolMsgId = c, l.getUnrenderedMsgMapByProtocolMsgId = d, l.maybeGetUnrenderedMsgByExternalId = m, l.getUnrenderedMsgsByProtocolMsgId = _, l.updateSystemAckForUnrenderedMsg = f, l.bulkUpdateSystemAckForUnrenderedMsgs = g, l.getUnrenderedMsgsByMsgIds = h, l.getNextUnrenderedMsgIdNumberForThread = y;
}), 98);

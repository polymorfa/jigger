__d("MAWMessageExpirationStorage", [
	"LSDatabaseSingleton",
	"MAWBridgeDeleteMessagesHandler",
	"ReQL",
	"clearTimeout",
	"promiseDone",
	"setTimeout"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = new Map();
	async function u(e, t, n) {
		await Promise.all(t.map(function(t) {
			var n = t.ts, r = t.msgId, a = {
				msgId: r,
				ts: n
			}, i = t.threadJid, l = [a], s = {
				messages: l,
				threadJid: i
			};
			return o("MAWBridgeDeleteMessagesHandler").call(e, s);
		})), s.delete(n);
	}
	async function c(e, t, n) {
		await Promise.all(t.map(async function(t) {
			var n = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.messages.index("messageId")).getKeyRange(t.msgId));
			if (n != null) {
				var r = babelHelpers.extends({}, n, { replyAttachmentPlaintextHash: void 0 });
				await e.messages.put(r);
			}
		})), s.delete(n);
	}
	async function d(e, t, n) {
		await Promise.all(t.map(async function(t) {
			var n = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.messages.index("messageId")).getKeyRange(t.msgId));
			if (n != null) {
				var r = babelHelpers.extends({}, n, { replyMessageText: void 0 });
				await e.messages.put(r);
			}
		})), s.delete(n);
	}
	function m(t, n, a, l) {
		return r("setTimeout")(async function() {
			var a = await (e || (e = o("LSDatabaseSingleton"))).LSDatabaseSingleton;
			r("promiseDone")(a.runInTransaction(async function(e) {
				await l(e, t, n);
			}, "readwrite", void 0, void 0, i.id + ":127"));
		}, a);
	}
	function p(e) {
		var t = e.bridgeMsgStartCountdown, n = e.expirationEvent, o = t.countdownTs, a = t.millisecondsUntilCountdownTs, i = s.get(o), l;
		if (i == null) l = [t];
		else {
			r("clearTimeout")(i.timeoutId);
			var u = i.msgs.map(function(e) {
				return e.msgId;
			}).indexOf(t.msgId) === -1;
			u && i.msgs.push(t), l = i.msgs;
		}
		var c = m(l, o, a, n);
		s.set(o, {
			expirationTs: o,
			msgs: l,
			timeoutId: c
		});
	}
	function _(e) {
		var t = e.msgId, n = s.get(e.countdownTs);
		if (n != null) {
			var r = n.msgs.map(function(e) {
				return e.msgId;
			}).indexOf(t);
			if (r > -1) {
				n.msgs.splice(r, 1);
				return;
			}
		}
	}
	l.expirationDeletionEvent = u, l.expirationStoryReplyEvent = c, l.expirationNoteReplyEvent = d, l.setMessageForExpiration = p, l.clearMessageFromExpiration = _;
}), 98);

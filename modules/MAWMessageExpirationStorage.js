__d("MAWMessageExpirationStorage", [
	"LSDatabaseSingleton",
	"MAWBridgeDeleteMessagesHandler",
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime",
	"clearTimeout",
	"promiseDone",
	"setTimeout"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = new Map();
	function c(e, t, n) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
			yield (s || (s = n("Promise"))).all(t.map(function(t) {
				var n = t.ts, r = t.msgId, a = {
					msgId: r,
					ts: n
				}, i = t.threadJid, l = [a], s = {
					messages: l,
					threadJid: i
				};
				return o("MAWBridgeDeleteMessagesHandler").call(e, s);
			})), u.delete(r);
		}), d.apply(this, arguments);
	}
	function m(e, t, n) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
			yield (s || (s = n("Promise"))).all(t.map((function() {
				var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
					var n = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.messages.index("messageId")).getKeyRange(t.msgId));
					if (n != null) {
						var r = babelHelpers.extends({}, n, { replyAttachmentPlaintextHash: void 0 });
						yield e.messages.put(r);
					}
				});
				return function(e) {
					return t.apply(this, arguments);
				};
			})())), u.delete(r);
		}), p.apply(this, arguments);
	}
	function _(e, t, n) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
			yield (s || (s = n("Promise"))).all(t.map((function() {
				var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
					var n = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.messages.index("messageId")).getKeyRange(t.msgId));
					if (n != null) {
						var r = babelHelpers.extends({}, n, { replyMessageText: void 0 });
						yield e.messages.put(r);
					}
				});
				return function(e) {
					return t.apply(this, arguments);
				};
			})())), u.delete(r);
		}), f.apply(this, arguments);
	}
	function g(t, a, l, s) {
		return r("setTimeout")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var l = yield (e || (e = o("LSDatabaseSingleton"))).LSDatabaseSingleton;
			r("promiseDone")(l.runInTransaction((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					yield s(e, t, a);
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})(), "readwrite", void 0, void 0, i.id + ":127"));
		}), l);
	}
	function h(e) {
		var t = e.bridgeMsgStartCountdown, n = e.expirationEvent, o = t.countdownTs, a = t.millisecondsUntilCountdownTs, i = u.get(o), l;
		if (i == null) l = [t];
		else {
			r("clearTimeout")(i.timeoutId);
			var s = i.msgs.map(function(e) {
				return e.msgId;
			}).indexOf(t.msgId) === -1;
			s && i.msgs.push(t), l = i.msgs;
		}
		var c = g(l, o, a, n);
		u.set(o, {
			expirationTs: o,
			msgs: l,
			timeoutId: c
		});
	}
	function y(e) {
		var t = e.msgId, n = u.get(e.countdownTs);
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
	l.expirationDeletionEvent = c, l.expirationStoryReplyEvent = m, l.expirationNoteReplyEvent = _, l.setMessageForExpiration = h, l.clearMessageFromExpiration = y;
}), 98);

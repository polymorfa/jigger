__d("MAWMsgFetchLSReplyMsgAndAttachment", [
	"EntMessageReplyType",
	"FBLogger",
	"I64",
	"LSIntEnum",
	"LSMessageReplySourceTypeV2",
	"MAWCurrentUser",
	"MAWDbMsg",
	"MAWReplyBuilder",
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(e, t) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = t.replyContent;
			if (n == null || n.replyType !== "MESSAGE" || n.replyToMsgId == null) return null;
			var r = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.messages.index("messageId")).getKeyRange(n.replyToMsgId)), a;
			return r != null && (a = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.attachments).getKeyRange(r.threadKey, r.messageId))), babelHelpers.extends({}, t, { replyContent: babelHelpers.extends({}, n, {
				replyToLSAttachment: a,
				replyToLSMessage: r
			}) });
		}), d.apply(this, arguments);
	}
	function m(e, t) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
			var i = yield o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(t.messages.index("replySourceIdMessageID")).getKeyRange(a.messageId));
			yield (u || (u = n("Promise"))).all(i.map(function(n) {
				var i = n.replySourceTypeV2, l = n.replyType;
				if (i == null || l == null) {
					r("FBLogger")("messenger_e2ee_web").mustfix("[updateMessagesReplyingToMsg] Error getting reply snippet without replySourceTypeV2 and/or replyType");
					return;
				}
				var u = o("MAWDbMsg").toMsgId(a.messageId);
				if (u == null) {
					r("FBLogger")("messenger_e2ee_web").mustfix("[updateMessagesReplyingToMsg] Error extracting message id from replyToLSMessage");
					return;
				}
				if (n.messageId === a.messageId) {
					r("FBLogger")("messenger_e2ee_web").mustfix("[updateMessagesReplyingToMsg] Message replying to itself should not be updated");
					return;
				}
				if (i === (e || (e = o("LSIntEnum"))).ofNumber(r("LSMessageReplySourceTypeV2").MESSAGE)) {
					var c = {
						isBumpMsg: n.replyType === (e || (e = o("LSIntEnum"))).ofNumber(r("EntMessageReplyType").BUMP),
						replyToLSAttachment: void 0,
						replyToLSMessage: a,
						replyToMsgId: u,
						replyType: "MESSAGE"
					}, d = o("MAWReplyBuilder").getReplyBuilder(c.replyType), m = babelHelpers.extends({}, n, {
						replyMessageText: d.buildReplyMessageText(c),
						replySnippet: d.buildReplySnippet(c, (s || (s = o("I64"))).to_string(n.senderId), o("MAWCurrentUser").getID()),
						replySourceTimestampMs: d.buildReplyTimestampMs(c),
						replyStatus: d.buildReplyStatus(c),
						replyToUserId: d.buildReplyUserId(c)
					});
					return t.messages.put(m);
				}
			}));
		}), p.apply(this, arguments);
	}
	l.fetchReplyLocalViaLS = c, l.updateMessagesReplyingToMsg = m;
}), 98);

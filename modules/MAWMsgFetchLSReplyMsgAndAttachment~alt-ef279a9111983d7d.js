__d("MAWMsgFetchLSReplyMsgAndAttachment", [
	"EntMessageReplyType",
	"FBLogger",
	"I64",
	"LSIntEnum",
	"LSMessageReplySourceTypeV2",
	"MAWCurrentUser",
	"MAWDbMsg",
	"MAWReplyBuilder",
	"ReQL"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	async function u(e, t) {
		var n = t.replyContent;
		if (n == null || n.replyType !== "MESSAGE" || n.replyToMsgId == null) return null;
		var r = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.messages.index("messageId")).getKeyRange(n.replyToMsgId)), a;
		return r != null && (a = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.attachments).getKeyRange(r.threadKey, r.messageId))), babelHelpers.extends({}, t, { replyContent: babelHelpers.extends({}, n, {
			replyToLSAttachment: a,
			replyToLSMessage: r
		}) });
	}
	async function c(t, n) {
		var a = await o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(t.messages.index("replySourceIdMessageID")).getKeyRange(n.messageId));
		await Promise.all(a.map(function(a) {
			var i = a.replySourceTypeV2, l = a.replyType;
			if (i == null || l == null) {
				r("FBLogger")("messenger_e2ee_web").mustfix("[updateMessagesReplyingToMsg] Error getting reply snippet without replySourceTypeV2 and/or replyType");
				return;
			}
			var u = o("MAWDbMsg").toMsgId(n.messageId);
			if (u == null) {
				r("FBLogger")("messenger_e2ee_web").mustfix("[updateMessagesReplyingToMsg] Error extracting message id from replyToLSMessage");
				return;
			}
			if (a.messageId === n.messageId) {
				r("FBLogger")("messenger_e2ee_web").mustfix("[updateMessagesReplyingToMsg] Message replying to itself should not be updated");
				return;
			}
			if (i === (e || (e = o("LSIntEnum"))).ofNumber(r("LSMessageReplySourceTypeV2").MESSAGE)) {
				var c = {
					isBumpMsg: a.replyType === (e || (e = o("LSIntEnum"))).ofNumber(r("EntMessageReplyType").BUMP),
					replyToLSAttachment: void 0,
					replyToLSMessage: n,
					replyToMsgId: u,
					replyType: "MESSAGE"
				}, d = o("MAWReplyBuilder").getReplyBuilder(c.replyType), m = babelHelpers.extends({}, a, {
					replyMessageText: d.buildReplyMessageText(c),
					replySnippet: d.buildReplySnippet(c, (s || (s = o("I64"))).to_string(a.senderId), o("MAWCurrentUser").getID()),
					replySourceTimestampMs: d.buildReplyTimestampMs(c),
					replyStatus: d.buildReplyStatus(c),
					replyToUserId: d.buildReplyUserId(c)
				});
				return t.messages.put(m);
			}
		}));
	}
	l.fetchReplyLocalViaLS = u, l.updateMessagesReplyingToMsg = c;
}), 98);

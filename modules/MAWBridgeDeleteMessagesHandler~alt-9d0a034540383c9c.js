__d("MAWBridgeDeleteMessagesHandler", [
	"EntMessageReplyType",
	"FBLogger",
	"I64",
	"LSIntEnum",
	"MAWCurrentUser",
	"MAWDbMsg",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"MAWReplyBuilder",
	"ReQL"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e, t) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(e, t.threadJid, "MAWBridgeDeleteMessagesHandler", async function(e) {
			await Promise.all(t.messages.map(async function(t) {
				var n = await e.messages.index("messageId").get(t.msgId);
				n != null && (await c({
					callbackTxn: e,
					messageId: n.messageId,
					threadKey: n.threadKey,
					timestampMs: n.timestampMs
				}), await d(e, n));
			}));
		});
	}
	async function c(e) {
		var t = e.callbackTxn, n = e.messageId, r = e.threadKey, a = e.timestampMs;
		await t.messages.delete(r, a, n);
		var i = await o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(t.attachments).getKeyRange(r, n));
		await Promise.all(i.map(function(e) {
			var n = [
				e.defaultCtaId,
				e.attachmentCta1Id,
				e.attachmentCta2Id,
				e.attachmentCta3Id
			].filter(Boolean), r = n.map(function(e) {
				return t.attachment_ctas.delete(e);
			});
			return Promise.all(r).then(function() {
				return t.attachments.delete(e.threadKey, e.messageId, e.attachmentFbid);
			});
		}));
	}
	async function d(t, n) {
		var a = await o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(t.messages.index("replySourceIdMessageID")).getKeyRange(n.messageId)), i = o("MAWDbMsg").toMsgId(n.messageId);
		if (i == null) {
			r("FBLogger")("messenger_e2ee_web").mustfix("[MAWBridgeDeleteMessagesHandler] Error extracting message id from message");
			return;
		}
		await Promise.all(a.map(function(a) {
			var l = {
				isBumpMsg: a.replyType === (e || (e = o("LSIntEnum"))).ofNumber(r("EntMessageReplyType").BUMP),
				replyToLSMessage: babelHelpers.extends({}, n, { isUnsent: !0 }),
				replyToMsgId: i,
				replyType: "MESSAGE"
			}, u = babelHelpers.extends({}, a, {
				replyAttachmentId: void 0,
				replyAttachmentPlaintextHash: void 0,
				replyAttachmentType: void 0,
				replyMediaExpirationTimestampMs: void 0,
				replyMediaPreviewHeight: void 0,
				replyMediaPreviewWidth: void 0,
				replySnippet: o("MAWReplyBuilder").getReplyBuilder(l.replyType).buildReplySnippet(l, (s || (s = o("I64"))).to_string(a.senderId), o("MAWCurrentUser").getID()),
				replyStatus: o("MAWReplyBuilder").getReplyBuilder(l.replyType).buildReplyStatus(l)
			});
			return t.messages.put(u);
		}));
	}
	l.call = u;
}), 98);

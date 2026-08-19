__d("MAWBridgeDeleteMessagesHandler", [
	"EntMessageReplyType",
	"FBLogger",
	"I64",
	"LSIntEnum",
	"MAWCurrentUser",
	"MAWDbMsg",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"MAWReplyBuilder",
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(e, t) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(e, t.threadJid, "MAWBridgeDeleteMessagesHandler", (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				yield (u || (u = n("Promise"))).all(t.messages.map((function() {
					var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
						var n = yield e.messages.index("messageId").get(t.msgId);
						n != null && (yield d({
							callbackTxn: e,
							messageId: n.messageId,
							threadKey: n.threadKey,
							timestampMs: n.timestampMs
						}), yield p(e, n));
					});
					return function(e) {
						return t.apply(this, arguments);
					};
				})()));
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})());
	}
	function d(e) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.callbackTxn, r = e.messageId, a = e.threadKey, i = e.timestampMs;
			yield t.messages.delete(a, i, r);
			var l = yield o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(t.attachments).getKeyRange(a, r));
			yield (u || (u = n("Promise"))).all(l.map(function(e) {
				var r = [
					e.defaultCtaId,
					e.attachmentCta1Id,
					e.attachmentCta2Id,
					e.attachmentCta3Id
				].filter(Boolean), o = r.map(function(e) {
					return t.attachment_ctas.delete(e);
				});
				return (u || (u = n("Promise"))).all(o).then(function() {
					return t.attachments.delete(e.threadKey, e.messageId, e.attachmentFbid);
				});
			}));
		}), m.apply(this, arguments);
	}
	function p(e, t) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
			var i = yield o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(t.messages.index("replySourceIdMessageID")).getKeyRange(a.messageId)), l = o("MAWDbMsg").toMsgId(a.messageId);
			if (l == null) {
				r("FBLogger")("messenger_e2ee_web").mustfix("[MAWBridgeDeleteMessagesHandler] Error extracting message id from message");
				return;
			}
			yield (u || (u = n("Promise"))).all(i.map(function(n) {
				var i = {
					isBumpMsg: n.replyType === (e || (e = o("LSIntEnum"))).ofNumber(r("EntMessageReplyType").BUMP),
					replyToLSMessage: babelHelpers.extends({}, a, { isUnsent: !0 }),
					replyToMsgId: l,
					replyType: "MESSAGE"
				}, u = babelHelpers.extends({}, n, {
					replyAttachmentId: void 0,
					replyAttachmentPlaintextHash: void 0,
					replyAttachmentType: void 0,
					replyMediaExpirationTimestampMs: void 0,
					replyMediaPreviewHeight: void 0,
					replyMediaPreviewWidth: void 0,
					replySnippet: o("MAWReplyBuilder").getReplyBuilder(i.replyType).buildReplySnippet(i, (s || (s = o("I64"))).to_string(n.senderId), o("MAWCurrentUser").getID()),
					replyStatus: o("MAWReplyBuilder").getReplyBuilder(i.replyType).buildReplyStatus(i)
				});
				return t.messages.put(u);
			}));
		}), _.apply(this, arguments);
	}
	l.call = c;
}), 98);

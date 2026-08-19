__d("MAWBridgeNewXMAHandler", [
	"MAWBridgeHandleReceiverFetchXMA",
	"MAWBridgeXMAUtils",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"WAArmadilloXMA.pb"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e, t, n) {
		var r = String(t.xmaId), a = t.msgId;
		if (a != null) {
			var i = t.targetType === o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_RECEIVER_FETCH;
			if (i) return o("MAWBridgeHandleReceiverFetchXMA").call(e, t, n);
			var l = await o("MAWBridgeXMAUtils").getExistingAttachmentAndAttachmentCtas(e, n, a), s = l[0], u = l[1], c = await o("MAWBridgeXMAUtils").addAttachmentCtas(e, t, n, a, r, u), d = c.attachmentCta1Id, m = c.attachmentCta2Id, p = c.attachmentCta3Id, _ = c.defaultCtaId, f = o("MAWBridgeXMAUtils").composeAttachmentXMA(t, n, r, a, d, m, p, _, "MAWBridgeNewXMAHandler");
			s != null ? await e.attachments.upsert([
				s.threadKey,
				s.messageId,
				s.attachmentFbid
			], f) : await e.attachments.add(f);
		}
	}
	function s(t, n) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(t, n.threadJid, "MAWBridgeNewXMAHandler", function(t, r) {
			return e(t, n, r);
		});
	}
	function u(e, t) {
		return s(e, t);
	}
	l.callWithoutWaitingForAnything = e, l.call = u;
}), 98);

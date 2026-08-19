__d("MAWBridgeNewXMAHandler", [
	"MAWBridgeHandleReceiverFetchXMA",
	"MAWBridgeXMAUtils",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"WAArmadilloXMA.pb",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var r = String(t.xmaId), a = t.msgId;
			if (a != null) {
				var i = t.targetType === o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_RECEIVER_FETCH;
				if (i) return o("MAWBridgeHandleReceiverFetchXMA").call(e, t, n);
				var l = yield o("MAWBridgeXMAUtils").getExistingAttachmentAndAttachmentCtas(e, n, a), s = l[0], u = l[1], c = yield o("MAWBridgeXMAUtils").addAttachmentCtas(e, t, n, a, r, u), d = c.attachmentCta1Id, m = c.attachmentCta2Id, p = c.attachmentCta3Id, _ = c.defaultCtaId, f = o("MAWBridgeXMAUtils").composeAttachmentXMA(t, n, r, a, d, m, p, _, "MAWBridgeNewXMAHandler");
				s != null ? yield e.attachments.upsert([
					s.threadKey,
					s.messageId,
					s.attachmentFbid
				], f) : yield e.attachments.add(f);
			}
		}), s.apply(this, arguments);
	}
	function u(t, n) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(t, n.threadJid, "MAWBridgeNewXMAHandler", function(t, r) {
			return e(t, n, r);
		});
	}
	function c(e, t) {
		return u(e, t);
	}
	l.callWithoutWaitingForAnything = e, l.call = c;
}), 98);

__d("MAWBridgeXMAShareExpiredHandler", ["MAWMiActOnMiThreadExistsForJid__DO_NOT_USE", "Promise"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, r, o) {
		var a = String(o.xmaId);
		return t.attachments.get(r, o.msgId, a).then(function(i) {
			if (i == null) return (e || (e = n("Promise"))).resolve();
			var l = [
				i.defaultCtaId,
				i.attachmentCta1Id,
				i.attachmentCta2Id,
				i.attachmentCta3Id
			].filter(Boolean), s = l.map(function(e) {
				return t.attachment_ctas.delete(e);
			});
			return (e || (e = n("Promise"))).all(s).then(function() {
				return t.attachments.delete(r, o.msgId, a);
			});
		});
	}
	function u(e, t) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(e, t.threadJid, "MAWBridgeXMAShareExpiredHandler", function(e, n) {
			return s(e, n, t);
		});
	}
	l.callWithoutWaitingForAnything = s, l.call = u;
}), 98);

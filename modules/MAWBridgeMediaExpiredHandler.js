__d("MAWBridgeMediaExpiredHandler", ["MAWMiActOnMiThreadExistsForJid__DO_NOT_USE"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(e, t.threadJid, "MAWBridgeMediaExpiredHandler.bs", function(e, n) {
			return e.attachments.delete(n, t.msgId, String(t.plaintextHash));
		});
	}
	l.call = e;
}), 98);

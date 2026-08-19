__d("MAWPrepareAttachmentsFromMediaManager", [
	"MAWExternalId",
	"MAWSendFileMsgTypes",
	"sendToSentQPLLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, r, a) {
		o("sendToSentQPLLogger").addSendToSentAnnotations(a, { int: { media_staging_count: e.length } });
		var i = t.hasFile, l = i === void 0 ? !1 : i, s = t.hasImage, u = s === void 0 ? !1 : s, c = t.hasVideo, d = c === void 0 ? !1 : c, m = null;
		if (d || u || l) {
			var p = e[e.length - 1];
			m = o("MAWSendFileMsgTypes").toOfflineAttachmentIDFromString(p.offlineAttachmentId);
		} else m = o("MAWSendFileMsgTypes").toOfflineAttachmentIDFromStanzaId(o("MAWExternalId").generateExternalId());
		n(m);
		var _ = e.reduce(function(e, t) {
			var n = r.get(o("MAWSendFileMsgTypes").toOfflineAttachmentIDFromString(t.offlineAttachmentId));
			return n != null ? e.push([n, o("MAWSendFileMsgTypes").toOfflineAttachmentIDFromString(t.offlineAttachmentId)]) : o("sendToSentQPLLogger").markSendToSentPoint(a, "prepare_attachments_from_media_manager_missing_attachment"), e;
		}, []);
		return {
			attachmentOfflineId: m,
			attachments: _
		};
	}
	l.prepareAttachmentsFromMediaManagerImpl = e;
}), 98);

__d("MAWEBFrontendQPLLogger", [
	"QPLUserFlow",
	"WAHashStringToNumber",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = e.deliveryObjectId, n = e.flow, a = e.mediaType, i = e.messageId, l = e.threadId, s = e.traceId;
		if (u(n)) {
			var c = o("WAHashStringToNumber").hashStringToNumber(s), d = {
				bool: {
					is_legacy_hardening: !1,
					is_unified_attachment: !0
				},
				string: {
					deliveryObjectId: t,
					flow: n,
					mediaType: a,
					messageId: i,
					threadId: l,
					traceId: s
				}
			};
			r("QPLUserFlow").start(r("qpl")._(521480391, "1167"), {
				annotations: d,
				instanceKey: c
			});
		}
	}
	function s(e, t, n, a) {
		if (e != null && u(n)) {
			var i = o("WAHashStringToNumber").hashStringToNumber(e);
			if (t) {
				r("QPLUserFlow").endSuccess(r("qpl")._(521480391, "1167"), { instanceKey: i });
				return;
			}
			r("QPLUserFlow").endFailure(r("qpl")._(521480391, "1167"), "upload_attachment_backup_failed", {
				annotations: { string: { error: a != null ? a : "upload_attachment_backup_failed" } },
				instanceKey: i
			});
		}
	}
	function u(e) {
		return e === "old";
	}
	l.startFlowUploadAttachmentBackup = e, l.endFlowUploadAttachmentBackup = s;
}), 98);

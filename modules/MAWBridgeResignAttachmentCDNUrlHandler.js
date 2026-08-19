__d("MAWBridgeResignAttachmentCDNUrlHandler", [
	"I64",
	"LSFactory",
	"LSIssueAttachmentRestoreTaskStoredProcedure",
	"MAWAsyncEBMediaDownloadPromise",
	"MAWBridgeFireAndForget",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = "-8";
	function u(t, n) {
		var a, i = n.traceId, l = (a = n.skipLegacyMediaDownloadFlow) != null ? a : !1;
		function u(e, t, n) {
			!l && i != null && o("MAWBridgeFireAndForget").fireAndForget("backend", "addMediaDownloadQpl", {
				annotations: n != null ? n : void 0,
				pointName: t,
				qplInstanceKey: i,
				qplType: e
			});
		}
		return u("point", "resign_cdn_url_bridge_handler_start"), o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(t, n.threadJid, "MAWBridgeResignAttachmentCDNUrlHandler", function(t, a) {
			var l = {
				backupEntFbid: (e || (e = o("I64"))).of_string(s),
				deliveryObjectId: n.deliveryObjectId,
				mediaType: n.mediaType,
				messageId: n.messageId,
				productType: n.productType,
				serverThreadKey: e.to_string(a),
				sortOrder: e.of_float(n.sortOrder),
				threadId: n.threadId,
				traceId: i.toString()
			};
			return n.skipLegacyMediaDownloadFlow !== !0 && o("MAWAsyncEBMediaDownloadPromise").setMediaDownloadPayload({
				messageId: n.msgId,
				objectId: n.deliveryObjectId,
				plaintextHash: n.plaintextHash,
				threadId: n.threadId
			}), u("point", "resign_cdn_url_issue_attachment_task", { string: { taskTraceId: l.traceId } }), r("LSIssueAttachmentRestoreTaskStoredProcedure")(r("LSFactory")(t), l).then(function() {
				u("point", "resign_cdn_url_issue_attachment_task_end");
			}).catch(function(e) {
				u("fail", "resign_cdn_url_issue_attachment_task_fail", { string: { error: e.toString() } });
			});
		});
	}
	l.call = u;
}), 98);

__d("MAWBridgeUpload", ["MAWMainTraceUtils"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = e.actionType, n = e.attachmentContext, r = e.attachmentContextArray, o = e.authTs, a = e.echoDocument, i = e.echoEncodingLatencyNs, l = e.errorCode, s = e.errorMessage, c = e.messageId, d = e.messageType, m = e.productType, p = e.protoMsg, _ = e.sortOrderMs, f = e.threadId, g = e.traceId, h = e.uploadTrackingInstanceKey, y = u(n, m != null ? m : "msgr", r);
		return {
			actionType: t,
			attachmentBackupContext: y,
			authTs: o,
			echoDocument: a,
			echoEncodingLatencyNs: i,
			errorCode: l,
			errorMessage: s,
			messageId: c,
			messageType: d,
			protoMsg: p,
			sortOrderMs: _,
			threadId: f,
			traceId: g,
			uploadTrackingInstanceKey: h
		};
	}
	function s(e, t, n, r, o, a) {
		return {
			actionType: a,
			echoDocument: o,
			folderType: t,
			threadId: e,
			transportKey: n,
			ts: r
		};
	}
	function u(e, t, n) {
		if (n != null) {
			var r = n.map(function(e) {
				return {
					attachmentTraceId: o("MAWMainTraceUtils").createTraceId(),
					mediaType: e.mediaType,
					zippyObjectId: e.mediaObjectId
				};
			}), a = {
				attachmentInfos: r,
				productType: t
			};
			return a;
		}
	}
	l.createBridgeUploadMessage = e, l.createBridgeDeleteMessagesOfThread = s, l.createBridgeUploadAttachmentBackupContext = u;
}), 98);

__d("MAWUploadPayloadGenerator", [
	"EBLogger",
	"EBWasmSerializeMessagesModule",
	"I64",
	"LSEncryptedBackupsAttachmentErrorCode",
	"LSFactory",
	"LSIntEnum",
	"LSSerializeAttachmentBackupPayloadStoredProcedure",
	"LSShape",
	"LSVec",
	"MAWCastToMsgrServerMediaType",
	"MAWEBFrontendQPLLogger",
	"MAWEBUploadTrackingUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = o("EBLogger").EBLogger().tags(["MAWUploadPayloadGenerator"]);
	async function d(t, n) {
		var r = await Promise.allSettled(n.map(function(e) {
			var n = e.uploadTrackingInstanceKey;
			if (n != null) {
				var r = o("MAWEBUploadTrackingUtils").makeEBWorkerQplFlowFromInstanceKey(n);
				r.addPoint("wasm_upload_serialization_start");
			}
			return _(t, e);
		})), a = r.map(function(t) {
			if (t.status === "rejected") {
				c.WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to generate attachment payload: ", ""])), t.reason);
				return;
			}
			return t.value;
		});
		return o("EBWasmSerializeMessagesModule").serializeMessageBatchWasm(t, n, a);
	}
	function m(e) {
		if (e.attachmentInfos.length !== 1) return [];
		var t = e.attachmentInfos[0];
		return [{
			attachment_trace_id: t.attachmentTraceId,
			media_type: t.mediaType,
			zippy_object_id: t.zippyObjectId
		}];
	}
	function p(e) {
		var t, n = e.bridgeUploadAttachmentBackupContext, a = e.messageId, i = e.serverThreadKey, l = e.threadId, u = e.traceId;
		if (n.attachmentInfos.length !== 0) {
			var c = n.attachmentInfos;
			o("MAWEBFrontendQPLLogger").startFlowUploadAttachmentBackup({
				deliveryObjectId: c[0].zippyObjectId,
				flow: "unified",
				mediaType: (t = o("MAWCastToMsgrServerMediaType").castMediaAttachmentTypeToServerMediaType(c[0].mediaType)) != null ? t : "unknown",
				messageId: a,
				threadId: l,
				traceId: u
			});
			var d = r("LSVec").ofArray(c.map(function(e) {
				return o("LSShape").ofRecord({
					attachment_trace_id: e.attachmentTraceId,
					media_type: e.mediaType,
					zippy_object_id: e.zippyObjectId
				});
			})), m = (s || (s = o("LSIntEnum"))).ofNumber(r("LSEncryptedBackupsAttachmentErrorCode").NO_ERROR);
			n.error != null && (m = (s || (s = o("LSIntEnum"))).ofNumber(r("LSEncryptedBackupsAttachmentErrorCode").UNKNOWN_ERROR));
			var p = {
				attachment_infos: d,
				error: m,
				error_message: null,
				product_type: n.productType,
				server_thread_key: i
			};
			return p;
		}
	}
	async function _(e, t) {
		var n, a, i = t.attachmentBackupContext;
		if (i != null) {
			if (t.uploadTrackingInstanceKey != null) {
				var l = "undefined";
				if (i.attachmentInfos.length > 0) {
					l = "new";
					for (var s of i.attachmentInfos) if (s.zippyObjectId.length <= 60) {
						l = "old";
						break;
					}
				}
				o("MAWEBUploadTrackingUtils").addPointWorkerOnly(t.uploadTrackingInstanceKey, "attachment_payload_generation_start", { string: { attachment_object_id_type: l } });
			}
			if (a = p({
				bridgeUploadAttachmentBackupContext: i,
				messageId: t.messageId,
				serverThreadKey: null,
				threadId: t.threadId,
				traceId: t.traceId
			}), a != null) {
				var c = await r("LSSerializeAttachmentBackupPayloadStoredProcedure")(r("LSFactory")(e), {
					attachmentInfos: a.attachment_infos,
					error: a.error,
					errorMessage: a.error_message,
					messageId: t.messageId,
					productType: a.product_type,
					threadId: t.threadId
				}), d = c[0], _ = c[1];
				if (d != null) {
					var f = o("LSShape").toRecord(d);
					n = JSON.stringify({
						success: f.payload,
						upload_context: m(i)
					}), t.uploadTrackingInstanceKey != null && o("MAWEBUploadTrackingUtils").addPointWorkerOnly(t.uploadTrackingInstanceKey, "attachment_payload_generation_success", { bool: { attachment_payload_generation_success: !0 } });
				} else if (_ != null) {
					var g = o("LSShape").toRecord(_), h = g.error_code;
					n = JSON.stringify({
						failure: {
							error_code: (u || (u = o("I64"))).to_float(h),
							error_message: g.error_message,
							stored_procedure: g.stored_procedure
						},
						upload_context: m(i)
					}), t.uploadTrackingInstanceKey != null && o("MAWEBUploadTrackingUtils").addPointWorkerOnly(t.uploadTrackingInstanceKey, "attachment_payload_generation_failure", {
						bool: { attachment_payload_generation_success: !1 },
						string: {
							attachment_payload_generation_error_code: (u || (u = o("I64"))).to_string(h),
							attachment_payload_generation_error_message: g.error_message
						}
					});
				}
			}
		}
		return n;
	}
	l.genUploadPayload = d;
}), 98);

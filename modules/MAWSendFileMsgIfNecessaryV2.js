__d("MAWSendFileMsgIfNecessaryV2", [
	"FBLogger",
	"MAWExternalId",
	"MAWSendSecureAttachment",
	"Promise",
	"WAResultOrError",
	"sendToSentQPLLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, a) {
		var i = a.actorId, l = a.attachments, s = a.axLabels, u = a.chatJid, c = a.ephemeralSetting, d = a.hdMediaMap, m = a.initiatingSource, p = a.isFirstMsg, _ = a.isVideoGif, f = a.lssTraceApi, g = a.mediaGroupMetadataMap, h = a.offlineAttachmentIdToMessageData, y = a.reply, C = a.s2sInstanceKey, b = a.source, v = a.thread;
		if (l.length === 0) return o("sendToSentQPLLogger").markSendToSentFail(C, "empty_attachments"), (e || (e = n("Promise"))).resolve([o("WAResultOrError").makeError({
			isRetriable: !1,
			type: "empty-attachments"
		})]);
		o("sendToSentQPLLogger").markSendToSentPoint(C, "send_attachment_start", null, { int: { attachment_count: l.length } });
		var S = l.map(function(e) {
			var n, r, a, l = e[0], S = e[1], R = h == null ? void 0 : h.get(S), L = (n = d == null ? void 0 : d.get(S)) != null ? n : void 0;
			return o("MAWSendSecureAttachment").sendSecureAttachment(t, u, v.threadKey, v.threadType, i, l, S, b, y, p, _, C, c, m, R == null ? void 0 : {
				msgId: R == null ? void 0 : R.messageExternalId,
				ts: R == null ? void 0 : R.offlineMsgTimestamp
			}, (r = R == null ? void 0 : R.messageExternalId) != null ? r : o("MAWExternalId").generateExternalId(), g == null ? void 0 : g.get(S), L, (a = s == null ? void 0 : s.get(S)) != null ? a : void 0, f);
		});
		return (e || (e = n("Promise"))).all(S).then(function(e) {
			var t = e == null ? void 0 : e.find(function(e) {
				return (e == null ? void 0 : e.success) === !1;
			});
			return o("sendToSentQPLLogger").markSendToSentPoint(C, "send_attachment_end"), t != null ? [t] : e;
		}).catch(function(e) {
			throw o("sendToSentQPLLogger").markSendToSentFail(C, "send_attachment_fail", e), e instanceof Error ? r("FBLogger")("messenger_web_media").catching(e).addMetadata("MESSENGER_E2EE_WEB", "ERROR_MESSAGE", "failed while sending attachment promise").mustfix("Failed while sending message") : r("FBLogger")("messenger_web_media").addMetadata("MESSENGER_E2EE_WEB", "ERROR_MESSAGE", "failed while sending attachment promise").mustfix("Failed while sending attachment, %s", e.message), e;
		});
	}
	l.sendFileMsgIfNecessaryV2 = s;
}), 98);

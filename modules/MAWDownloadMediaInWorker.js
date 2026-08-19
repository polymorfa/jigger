__d("MAWDownloadMediaInWorker", [
	"I64",
	"InteractionTracingMetrics",
	"LSAuthorityLevel",
	"LSIntEnum",
	"LSXmaContentType",
	"MAWBridgeFireAndForget",
	"MAWDbMedia",
	"MAWDbXMA",
	"MAWMediaDownloadStatus",
	"MAWMediaSetClientMediaStatus",
	"MAWMsgType",
	"WAHashUtils",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e) {
		var t = e.attachment, n = e.dbPromise, o = e.downloadType, a = e.interactionId, i = e.mediaRenderQpl, l = e.triggerUIView;
		g(t) || m({
			attachment: r("nullthrows")(t),
			dbPromise: n,
			downloadType: o,
			interactionId: a,
			mediaRenderQpl: i,
			triggerUIView: l
		});
	}
	function c(e) {
		var t = e.attachment, n = e.dbPromise, r = e.downloadType, o = e.interactionId, a = e.mediaRenderQpl, i = e.plaintextHash, l = e.triggerUIView, s = e.xmaMediaType;
		g(t) || i == null || d({
			dbPromise: n,
			downloadType: r,
			interactionId: o,
			mediaRenderQpl: a,
			plaintextHash: i,
			triggerUIView: l,
			xmaMediaType: s
		});
	}
	function d(e) {
		var t = e.dbPromise, n = e.downloadType, a = e.interactionId, i = e.mediaRenderQpl, l = e.plaintextHash, s = e.triggerUIView, u = e.xmaMediaType;
		i == null || i.addPoint("download_media_in_worker_start", { bool: { using_plaintext_hash: !0 } }), a != null && r("InteractionTracingMetrics").addMarkerPoint(a, "download_media_in_worker_start", "AppTiming", void 0, { using_plaintext_hash: !0 }), o("MAWMediaSetClientMediaStatus").call(t, l, {
			mainMediaStatus: r("MAWMediaDownloadStatus").RETRYING,
			mainMediaStatusDetails: "download-media-in-worker-with-plaintext-hash",
			previewMediaStatus: r("MAWMediaDownloadStatus").RETRYING,
			previewMediaStatusDetails: "download-media-in-worker-with-plaintext-hash"
		});
		var c = {
			downloadType: n,
			msgType: null,
			plaintextHash: l,
			triggerUIView: s,
			type: "plaintextHash",
			xmaMediaType: u
		};
		p(c, i);
	}
	function m(e) {
		var t = e.attachment, n = e.dbPromise, a = e.downloadType, i = e.interactionId, l = e.mediaRenderQpl, s = e.triggerUIView;
		l == null || l.addPoint("download_media_in_worker_start"), i != null && r("InteractionTracingMetrics").addMarkerPoint(i, "download_media_in_worker_start", "AppTiming");
		var u = isNaN(t.attachmentFbid) ? o("WAHashUtils").stringToPlaintextHash(t.attachmentFbid) : o("MAWDbMedia").convertNumberToMediaId(parseInt(t.attachmentFbid, 10));
		o("MAWMediaSetClientMediaStatus").call(n, u.toString(), {
			mainMediaStatus: r("MAWMediaDownloadStatus").RETRYING,
			mainMediaStatusDetails: "download-media-in-worker",
			previewMediaStatus: r("MAWMediaDownloadStatus").RETRYING,
			previewMediaStatusDetails: "download-media-in-worker"
		});
		var c = h(t, s, a);
		p(c, l);
	}
	function p(e, t) {
		o("MAWBridgeFireAndForget").fireAndForget("backend", "downloadMediaForUI", e);
	}
	function _(e) {
		var t = e.attachmentsWithQpl, n = e.dbPromise, r = e.downloadType, o = e.triggerUIView, a = t.filter(function(e) {
			return !g(e.attachment);
		});
		f({
			attachmentsWithQpl: a,
			dbPromise: n,
			downloadType: r,
			triggerUIView: o
		});
	}
	function f(e) {
		var t = e.attachmentsWithQpl, n = e.dbPromise, a = e.downloadType, i = e.triggerUIView, l = t.map(function(e) {
			var t = e.attachment, l = e.mediaRenderQpl;
			l == null || l.addPoint("download_media_in_worker_start");
			var s = isNaN(t.attachmentFbid) ? o("WAHashUtils").stringToPlaintextHash(t.attachmentFbid) : o("MAWDbMedia").convertNumberToMediaId(parseInt(t.attachmentFbid, 10));
			return o("MAWMediaSetClientMediaStatus").call(n, s.toString(), {
				mainMediaStatus: r("MAWMediaDownloadStatus").RETRYING,
				mainMediaStatusDetails: "bulk-download-media-in-worker",
				previewMediaStatus: r("MAWMediaDownloadStatus").RETRYING,
				previewMediaStatusDetails: "bulnk-download-media-in-worker"
			}), h(t, i, a);
		});
		o("MAWBridgeFireAndForget").fireAndForget("backend", "bulkDownloadMediaForUI", { media: l });
	}
	function g(t) {
		return t == null || (e || (e = o("I64"))).equal(t.authorityLevel, (s || (s = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").OPTIMISTIC)) || (t == null ? void 0 : t.hasXma) === !0 && (t == null ? void 0 : t.xmaContentType) != null && (e || (e = o("I64"))).equal(t.xmaContentType, (s || (s = o("LSIntEnum"))).ofNumber(r("LSXmaContentType").MSG_RECEIVER_FETCH)) || (t == null ? void 0 : t.hasXma) === !0 && (t == null ? void 0 : t.hasXmaPreview) !== !0 || t.receiverFetchId != null;
	}
	function h(e, t, n) {
		var r = e.attachmentFbid, a = e.hasXma;
		return a && e.xmaPreviewFbid != null ? {
			downloadType: n,
			msgType: o("MAWMsgType").MSG_TYPE.IMAGE,
			plaintextHash: o("WAHashUtils").stringToPlaintextHash(e.xmaPreviewFbid),
			triggerUIView: t,
			type: "plaintextHash"
		} : a ? {
			triggerUIView: t,
			type: "xmaId",
			xmaId: o("MAWDbXMA").convertNumberToXMAId(Number.parseInt(e.attachmentFbid, 10))
		} : {
			downloadType: n,
			msgType: null,
			plaintextHash: o("WAHashUtils").stringToPlaintextHash(r),
			triggerUIView: t,
			type: "plaintextHash"
		};
	}
	l.maybeDownloadMediaInWorker = u, l.maybeDownloadMediaInWorkerWithPlaintextHash = c, l.downloadMediaInWorker = m, l.maybeBulkDownloadMediaInWorker = _;
}), 98);

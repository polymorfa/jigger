__d("MAWMediaDownloadStatusForUI", [
	"MAWBridge",
	"MAWLoggerUtils",
	"MAWMediaDownloadStatus",
	"MAWVideoAudioValidationUtils",
	"MWFBLogger",
	"WAIsDownloadMediaErrorRetryable"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MWFBLogger").MWMediaLogger().tags([o("MAWLoggerUtils").Tag.MediaDownload, o("MAWLoggerUtils").Tag.MessageReceive]);
	function u(e) {
		var t = e.details, n = e.hash, r = e.status, o = e.type, a = e.validationResult;
		c({
			details: t,
			hash: n,
			status: r,
			type: o,
			validationResult: a
		});
	}
	function c(e) {
		var t = e.details, n = e.hash, r = e.status, a = e.type, i = e.validationResult;
		o("MAWBridge").getBridge().fireAndForget("event", "updateMediaStatus", {
			details: t,
			key: n,
			status: r,
			type: a,
			validationResult: i
		});
	}
	function d(t) {
		switch (t) {
			case "disconnected":
			case "backoff":
			case "body-network-error":
			case "no-host":
			case "download-throttled":
			case "max-attempts-exceeded":
			case "runtime-error":
			case "access-expired":
			case "http-fetch-exception":
			case "http-fetch-aborted":
			case "unspecified-http-error":
			case "server-timeout": return r("MAWMediaDownloadStatus").MANUAL_RETRYABLE_FAILURE;
			case "request-error":
			case "media-not-found":
			case "media-entry-invalid":
			case "media-entry-invalid-direct-path":
			case "media-entry-invalid-file-enc-sha256":
			case "media-entry-invalid-file-sha256":
			case "media-entry-invalid-media-key":
			case "media-entry-invalid-server-media-type":
			case "decryption-error":
			case "enc-hash-mismatch":
			case "hash-mismatch":
			case "ciphertext-hash-mismatch":
			case "signature-expired": return r("MAWMediaDownloadStatus").NOT_MANUAL_RETRYABLE_FAILURE;
			default: return s.MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["getStatusTypeFromWAAPIDownloadMediaError: Unknown error type ", ""])), String(t)), r("MAWMediaDownloadStatus").MANUAL_RETRYABLE_FAILURE;
		}
	}
	function m(e, t) {
		u({
			details: t,
			hash: e,
			status: r("MAWMediaDownloadStatus").DOWNLOADING,
			type: "main"
		});
	}
	function p(e, t, n) {
		n === void 0 && (n = "main");
		var a = t != null ? t : {}, i = a.audioStreamReport, l = a.mimeType, s = a.videoStreamReport;
		u({
			details: "handle_media_download_end",
			hash: e,
			status: r("MAWMediaDownloadStatus").SUCCESS,
			type: n,
			validationResult: o("MAWVideoAudioValidationUtils").normalizeValidationResult({
				audioAvgBitsPerSecond: i == null ? void 0 : i.avgBitsPerSecond,
				audioNumberOfChannels: i == null ? void 0 : i.numberOfChannels,
				audioSamplingRate: i == null ? void 0 : i.samplingRate,
				audioStreamType: i == null ? void 0 : i.streamType,
				validatedMimeType: l,
				videoAvgBitsPerSecond: s == null ? void 0 : s.avgBitsPerSecond,
				videoCalculatedFps: s == null ? void 0 : s.calculatedFps,
				videoDuration: s == null ? void 0 : s.duration,
				videoHeight: s == null ? void 0 : s.videoHeight,
				videoNominalFps: s == null ? void 0 : s.nominalFps,
				videoStreamType: s == null ? void 0 : s.streamType,
				videoWidth: s == null ? void 0 : s.videoWidth
			})
		});
	}
	function _(e, t, n) {
		n === void 0 && (n = "main"), o("WAIsDownloadMediaErrorRetryable").isDownloadMediaErrorRetryable(t) ? f(e, t, n) : g(e, t, n);
	}
	function f(e, t, n) {
		n === void 0 && (n = "main"), u({
			details: t,
			hash: e,
			status: r("MAWMediaDownloadStatus").MANUAL_RETRYABLE_FAILURE,
			type: n
		});
	}
	function g(e, t, n) {
		n === void 0 && (n = "main"), u({
			details: t,
			hash: e,
			status: r("MAWMediaDownloadStatus").NOT_MANUAL_RETRYABLE_FAILURE,
			type: n
		});
	}
	l.sendMediaDownloadStatusToUI = u, l.getStatusFromWAAPIDownloadMediaError = d, l.sendUIStatusDownloading = m, l.sendUIStatusSuccess = p, l.sendUIStatusFailure = _;
}), 98);

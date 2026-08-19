__d("MAWClientMediaStatusUtils", [
	"I64",
	"LSIntEnum",
	"MAWMediaDownloadStatus"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t) {
		switch (t) {
			case r("MAWMediaDownloadStatus").DOWNLOADING: return (e || (e = o("LSIntEnum"))).ofNumber(0);
			case r("MAWMediaDownloadStatus").SUCCESS: return (e || (e = o("LSIntEnum"))).ofNumber(1);
			case r("MAWMediaDownloadStatus").NOT_MANUAL_RETRYABLE_FAILURE: return (e || (e = o("LSIntEnum"))).ofNumber(2);
			case r("MAWMediaDownloadStatus").MANUAL_RETRYABLE_FAILURE: return (e || (e = o("LSIntEnum"))).ofNumber(3);
			case r("MAWMediaDownloadStatus").MISSING_FILE: return (e || (e = o("LSIntEnum"))).ofNumber(4);
			case r("MAWMediaDownloadStatus").RETRYING: return (e || (e = o("LSIntEnum"))).ofNumber(5);
			case r("MAWMediaDownloadStatus").AUTOMATICALLY_RETRYABLE_TIMEOUT_FAILURE: return (e || (e = o("LSIntEnum"))).ofNumber(6);
		}
	}
	function c(e) {
		switch (e) {
			case 0: return r("MAWMediaDownloadStatus").DOWNLOADING;
			case 1: return r("MAWMediaDownloadStatus").SUCCESS;
			case 2: return r("MAWMediaDownloadStatus").NOT_MANUAL_RETRYABLE_FAILURE;
			case 3: return r("MAWMediaDownloadStatus").MANUAL_RETRYABLE_FAILURE;
			case 4: return r("MAWMediaDownloadStatus").MISSING_FILE;
			case 5: return r("MAWMediaDownloadStatus").RETRYING;
			case 6: return r("MAWMediaDownloadStatus").AUTOMATICALLY_RETRYABLE_TIMEOUT_FAILURE;
		}
	}
	function d(t) {
		return {
			mainMediaStatus: c((e || (e = o("LSIntEnum"))).unwrapIntEnum(t.mainMediaStatus)),
			mainMediaStatusDetails: t.mainMediaStatusDetails,
			previewMediaStatus: t.previewMediaStatus ? c((e || (e = o("LSIntEnum"))).unwrapIntEnum(t.previewMediaStatus)) : null,
			previewMediaStatusDetails: t.previewMediaStatusDetails,
			validationResult: m(t)
		};
	}
	function m(e) {
		var t, n, r;
		if (!(e.audioAvgBitsPerSecond == null && e.audioNumberOfChannels == null && e.audioSamplingRate == null && e.audioStreamType == null && e.validateMimeType == null && e.videoAvgBitsPerSecond == null && e.videoCalculatedFps == null && e.videoDuration == null && e.videoHeight == null && e.videoNominalFps == null && e.videoStreamType == null && e.videoWidth == null)) return {
			audioAvgBitsPerSecond: e.audioAvgBitsPerSecond != null ? (s || (s = o("I64"))).to_int32(e.audioAvgBitsPerSecond) : void 0,
			audioNumberOfChannels: e.audioNumberOfChannels != null ? (s || (s = o("I64"))).to_int32(e.audioNumberOfChannels) : void 0,
			audioSamplingRate: e.audioSamplingRate != null ? (s || (s = o("I64"))).to_int32(e.audioSamplingRate) : void 0,
			audioStreamType: (t = e.audioStreamType) != null ? t : void 0,
			validatedMimeType: (n = e.validateMimeType) != null ? n : void 0,
			videoAvgBitsPerSecond: e.videoAvgBitsPerSecond != null ? (s || (s = o("I64"))).to_int32(e.videoAvgBitsPerSecond) : void 0,
			videoCalculatedFps: e.videoCalculatedFps != null ? (s || (s = o("I64"))).to_int32(e.videoCalculatedFps) : void 0,
			videoDuration: e.videoDuration != null ? (s || (s = o("I64"))).to_int32(e.videoDuration) : void 0,
			videoHeight: e.videoHeight != null ? (s || (s = o("I64"))).to_int32(e.videoHeight) : void 0,
			videoNominalFps: e.videoNominalFps != null ? (s || (s = o("I64"))).to_int32(e.videoNominalFps) : void 0,
			videoStreamType: (r = e.videoStreamType) != null ? r : void 0,
			videoWidth: e.videoWidth != null ? (s || (s = o("I64"))).to_int32(e.videoWidth) : void 0
		};
	}
	function p(e) {
		var t, n, r;
		return {
			audioAvgBitsPerSecond: (e == null ? void 0 : e.audioAvgBitsPerSecond) != null ? (s || (s = o("I64"))).of_int32(e.audioAvgBitsPerSecond) : void 0,
			audioNumberOfChannels: (e == null ? void 0 : e.audioNumberOfChannels) != null ? (s || (s = o("I64"))).of_int32(e.audioNumberOfChannels) : void 0,
			audioSamplingRate: (e == null ? void 0 : e.audioSamplingRate) != null ? (s || (s = o("I64"))).of_int32(e.audioSamplingRate) : void 0,
			audioStreamType: (t = e == null ? void 0 : e.audioStreamType) != null ? t : void 0,
			validateMimeType: (n = e == null ? void 0 : e.validatedMimeType) != null ? n : void 0,
			videoAvgBitsPerSecond: (e == null ? void 0 : e.videoAvgBitsPerSecond) != null ? (s || (s = o("I64"))).of_int32(e.videoAvgBitsPerSecond) : void 0,
			videoCalculatedFps: (e == null ? void 0 : e.videoCalculatedFps) != null ? (s || (s = o("I64"))).of_int32(e.videoCalculatedFps) : void 0,
			videoDuration: (e == null ? void 0 : e.videoDuration) != null ? (s || (s = o("I64"))).of_int32(e.videoDuration) : void 0,
			videoHeight: (e == null ? void 0 : e.videoHeight) != null ? (s || (s = o("I64"))).of_int32(e.videoHeight) : void 0,
			videoNominalFps: (e == null ? void 0 : e.videoNominalFps) != null ? (s || (s = o("I64"))).of_int32(e.videoNominalFps) : void 0,
			videoStreamType: (r = e == null ? void 0 : e.videoStreamType) != null ? r : void 0,
			videoWidth: (e == null ? void 0 : e.videoWidth) != null ? (s || (s = o("I64"))).of_int32(e.videoWidth) : void 0
		};
	}
	function _(e) {
		var t, n = e.clientMediaStatus, r = e.preloadedMediaStatus, a = e.statusKey, i = r != null ? r : n == null ? void 0 : n.find(function(e) {
			var t = e.id;
			return t === a;
		}), l = i ? d(i) : null, u = l != null, c = (s || (s = o("I64"))).to_int32((t = i == null ? void 0 : i.downloadRetryCount) != null ? t : (s || (s = o("I64"))).zero);
		return {
			hasStatus: u,
			retryCount: c,
			statusData: l
		};
	}
	l.getClientMediaStatusType = u, l.getMAWMediaDownloadStatus = c, l.getMAWMediaStatus = d, l.getValidationResults = p, l.getStatusDataFromLsdb = _;
}), 98);

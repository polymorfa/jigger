__d("MAWGetMediaValidationResultApi", [
	"MAWGetMediaApi",
	"MAWVideoAudioValidationUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = e.validatedResult;
		return t == null ? null : o("MAWVideoAudioValidationUtils").normalizeValidationResult({
			audioAvgBitsPerSecond: t.audioAvgBitsPerSecond,
			audioNumberOfChannels: t.audioNumberOfChannels,
			audioSamplingRate: t.audioSamplingRate,
			audioStreamType: t.audioStreamType,
			validatedMimeType: t.validatedMimeType,
			videoAvgBitsPerSecond: t.videoAvgBitsPerSecond,
			videoCalculatedFps: t.videoCalculatedFps,
			videoDuration: t.videoDuration,
			videoHeight: t.videoHeight,
			videoNominalFps: t.videoNominalFps,
			videoStreamType: t.videoStreamType,
			videoWidth: t.videoWidth
		});
	}
	var s = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			var r = yield o("MAWGetMediaApi").getMediaByMediaId(t);
			return r == null ? null : e(r);
		});
		return function(n, r) {
			return t.apply(this, arguments);
		};
	})(), u = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			var r = yield o("MAWGetMediaApi").getMediaByPlaintextHash(t);
			return r == null ? null : e(r);
		});
		return function(n, r) {
			return t.apply(this, arguments);
		};
	})();
	l.getMediaValidationResultByMediaId = s, l.getMediaValidationResultByPlainTextHash = u;
}), 98);

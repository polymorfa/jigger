__d("MAWGetMediaValidationResultApi", ["MAWGetMediaApi", "MAWVideoAudioValidationUtils"], (function(t, n, r, o, a, i, l) {
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
	var s = async function(n, r) {
		var t = await o("MAWGetMediaApi").getMediaByMediaId(n);
		return t == null ? null : e(t);
	}, u = async function(n, r) {
		var t = await o("MAWGetMediaApi").getMediaByPlaintextHash(n);
		return t == null ? null : e(t);
	};
	l.getMediaValidationResultByMediaId = s, l.getMediaValidationResultByPlainTextHash = u;
}), 98);

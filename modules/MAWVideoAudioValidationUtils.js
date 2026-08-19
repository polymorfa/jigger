__d("MAWVideoAudioValidationUtils", [], (function(t, n, r, o, a, i) {
	"use strict";
	function e(e) {
		return {
			audioAvgBitsPerSecond: e.audioAvgBitsPerSecond != null ? Math.round(e.audioAvgBitsPerSecond) : null,
			audioNumberOfChannels: e.audioNumberOfChannels != null ? Math.round(e.audioNumberOfChannels) : null,
			audioSamplingRate: e.audioSamplingRate != null ? Math.round(e.audioSamplingRate) : null,
			audioStreamType: e.audioStreamType,
			validatedMimeType: e.validatedMimeType,
			videoAvgBitsPerSecond: e.videoAvgBitsPerSecond != null ? Math.round(e.videoAvgBitsPerSecond) : null,
			videoCalculatedFps: e.videoCalculatedFps != null ? Math.round(e.videoCalculatedFps) : null,
			videoDuration: e.videoDuration != null ? Math.round(e.videoDuration) : null,
			videoHeight: e.videoHeight != null ? Math.round(e.videoHeight) : null,
			videoNominalFps: e.videoNominalFps != null ? Math.round(e.videoNominalFps) : null,
			videoStreamType: e.videoStreamType,
			videoWidth: e.videoWidth != null ? Math.round(e.videoWidth) : null
		};
	}
	i.normalizeValidationResult = e;
}), 66);

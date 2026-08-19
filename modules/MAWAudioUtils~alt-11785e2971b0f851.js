__d("MAWAudioUtils", [
	"FBLogger",
	"WAMaybeTranscodeOggOpusToWavForPlayback",
	"WAPttComposerScaleWaveform"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = 8.5, s = 100, u = 64;
	async function c(e) {
		var t = URL.createObjectURL(await o("WAMaybeTranscodeOggOpusToWavForPlayback").maybeTranscodeOggOpusToWavForPlayback(e));
		return new Promise(function(e, n) {
			var o = new Audio();
			o.setAttribute("crossOrigin", "anonymous"), o.addEventListener("loadedmetadata", function(r) {
				URL.revokeObjectURL(t);
				var o = r.currentTarget;
				if (o instanceof HTMLAudioElement) {
					var a = o.duration;
					e(Math.ceil(a));
				} else n("EventTarget returned for event should be HTMLAudioElement");
			}), o.src = t, o.onabort = function() {
				URL.revokeObjectURL(t), n(r("FBLogger")("messenger_web").mustfixThrow("Error loading audio from provided URL"));
			}, o.onerror = function() {
				var e, a;
				URL.revokeObjectURL(t), n(r("FBLogger")("messenger_web").mustfixThrow("getAudioDurationInSeconds: audioElement error code: %s. message: %s", (e = o.error) == null ? void 0 : e.code, (a = o.error) == null ? void 0 : a.message));
			};
		});
	}
	function d(e) {
		return e.map(function(e) {
			return Math.floor(e * s);
		});
	}
	function m(e, t) {
		return t === void 0 && (t = u), d(r("WAPttComposerScaleWaveform")(e, t));
	}
	function p(e) {
		return Array.from(new Uint8Array(e)).join(",");
	}
	l.WAVEFORM_SAMPLE_RATE = e, l.WAVEFORM_TARGET_SIZE = u, l.getAudioDurationInSeconds = c, l.recomputeWaveform = m, l.serializeWaveform = p;
}), 98);

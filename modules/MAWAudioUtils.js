__d("MAWAudioUtils", [
	"FBLogger",
	"Promise",
	"WAMaybeTranscodeOggOpusToWavForPlayback",
	"WAPttComposerScaleWaveform",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = 8.5, u = 100, c = 64;
	function d(e) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var a = URL.createObjectURL(yield o("WAMaybeTranscodeOggOpusToWavForPlayback").maybeTranscodeOggOpusToWavForPlayback(t));
			return new (e || (e = (n("Promise"))))(function(e, t) {
				var n = new Audio();
				n.setAttribute("crossOrigin", "anonymous"), n.addEventListener("loadedmetadata", function(n) {
					URL.revokeObjectURL(a);
					var r = n.currentTarget;
					if (r instanceof HTMLAudioElement) {
						var o = r.duration;
						e(Math.ceil(o));
					} else t("EventTarget returned for event should be HTMLAudioElement");
				}), n.src = a, n.onabort = function() {
					URL.revokeObjectURL(a), t(r("FBLogger")("messenger_web").mustfixThrow("Error loading audio from provided URL"));
				}, n.onerror = function() {
					var e, o;
					URL.revokeObjectURL(a), t(r("FBLogger")("messenger_web").mustfixThrow("getAudioDurationInSeconds: audioElement error code: %s. message: %s", (e = n.error) == null ? void 0 : e.code, (o = n.error) == null ? void 0 : o.message));
				};
			});
		}), m.apply(this, arguments);
	}
	function p(e) {
		return e.map(function(e) {
			return Math.floor(e * u);
		});
	}
	function _(e, t) {
		return t === void 0 && (t = c), p(r("WAPttComposerScaleWaveform")(e, t));
	}
	function f(e) {
		return Array.from(new Uint8Array(e)).join(",");
	}
	l.WAVEFORM_SAMPLE_RATE = s, l.WAVEFORM_TARGET_SIZE = c, l.getAudioDurationInSeconds = d, l.recomputeWaveform = _, l.serializeWaveform = f;
}), 98);

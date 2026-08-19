__d("MAWAudioPreProcess", [
	"MAWAudioUtils",
	"MAWMediaPreProcessQpl",
	"MAWSupportedAudioTypes",
	"Promise",
	"WABlobToArrayBuffer",
	"WATagsLogger",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m = o("WATagsLogger").TAGS(["MAWAudioPreProcess"]);
	function p(t, r) {
		var a = o("MAWMediaPreProcessQpl").startMediaPreProcessQpl("audio", t);
		return a.addAnnotations({
			bool: { isOptimistic: !1 },
			int: { total_number_of_files: r != null ? r : 1 }
		}), m.LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["start audio preprocess"]))), o("MAWAudioUtils").getAudioDurationInSeconds(t).then((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				a.endSuccess();
				var n = {
					durations: e,
					file: t,
					isPtt: !0,
					plaintext: yield o("WABlobToArrayBuffer").blobToArrayBuffer(t),
					type: "audio"
				};
				return n;
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})()).catch(function(e) {
			throw m.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Error while preprocessing audio: ", ""])), String(e)), a.endFail("unable_to_process_audio", { string: { preprocessError: e.toString() } }), e;
		});
	}
	function _(e, r, a) {
		var i, l, s = o("MAWMediaPreProcessQpl").startMediaPreProcessQpl("audio", e);
		m.LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["start optimistic audio preprocess"])));
		var p = t.URL.createObjectURL(e), _ = r == null ? void 0 : r.voiceClipDuration;
		s.addAnnotations({
			bool: {
				isOptimistic: !0,
				isVoiceClip: _ != null
			},
			int: { total_number_of_files: a != null ? a : 1 }
		});
		var f = _ != null ? (d || (d = n("Promise"))).resolve(_) : o("MAWAudioUtils").getAudioDurationInSeconds(e), g = (r == null || (i = r.voiceClipWaveformData) == null ? void 0 : i.amplitudes) != null ? r == null || (l = r.voiceClipWaveformData) == null ? void 0 : l.amplitudes.join(",") : void 0;
		return f.then(function(t) {
			s.endSuccess();
			var n = {
				durations: t,
				file: e,
				isPtt: !0,
				type: "audio",
				url: p,
				waveformString: g
			};
			return n;
		}).catch(function(e) {
			throw m.ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Error while preprocessing optimistic audio: ", ""])), String(e)), s.endFail("unable_to_process_audio_optimistic", { string: { preprocessError: e.toString() } }), e;
		});
	}
	l.audioPreprocess = p, l.optimisticAudioPreprocess = _, l.isSupportedAudioFileType = o("MAWSupportedAudioTypes").isSupportedAudioFileType;
}), 98);

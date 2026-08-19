__d("MAWAudioPreProcess", [
	"MAWAudioUtils",
	"MAWMediaPreProcessQpl",
	"MAWSupportedAudioTypes",
	"WABlobToArrayBuffer",
	"WATagsLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = o("WATagsLogger").TAGS(["MAWAudioPreProcess"]);
	function m(t, n) {
		var r = o("MAWMediaPreProcessQpl").startMediaPreProcessQpl("audio", t);
		return r.addAnnotations({
			bool: { isOptimistic: !1 },
			int: { total_number_of_files: n != null ? n : 1 }
		}), d.LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["start audio preprocess"]))), o("MAWAudioUtils").getAudioDurationInSeconds(t).then(async function(e) {
			r.endSuccess();
			var n = {
				durations: e,
				file: t,
				isPtt: !0,
				plaintext: await o("WABlobToArrayBuffer").blobToArrayBuffer(t),
				type: "audio"
			};
			return n;
		}).catch(function(e) {
			throw d.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Error while preprocessing audio: ", ""])), String(e)), r.endFail("unable_to_process_audio", { string: { preprocessError: e.toString() } }), e;
		});
	}
	function p(e, n, r) {
		var a, i, l = o("MAWMediaPreProcessQpl").startMediaPreProcessQpl("audio", e);
		d.LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["start optimistic audio preprocess"])));
		var s = t.URL.createObjectURL(e), m = n == null ? void 0 : n.voiceClipDuration;
		l.addAnnotations({
			bool: {
				isOptimistic: !0,
				isVoiceClip: m != null
			},
			int: { total_number_of_files: r != null ? r : 1 }
		});
		var p = m != null ? Promise.resolve(m) : o("MAWAudioUtils").getAudioDurationInSeconds(e), _ = (n == null || (a = n.voiceClipWaveformData) == null ? void 0 : a.amplitudes) != null ? n == null || (i = n.voiceClipWaveformData) == null ? void 0 : i.amplitudes.join(",") : void 0;
		return p.then(function(t) {
			l.endSuccess();
			var n = {
				durations: t,
				file: e,
				isPtt: !0,
				type: "audio",
				url: s,
				waveformString: _
			};
			return n;
		}).catch(function(e) {
			throw d.ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Error while preprocessing optimistic audio: ", ""])), String(e)), l.endFail("unable_to_process_audio_optimistic", { string: { preprocessError: e.toString() } }), e;
		});
	}
	l.audioPreprocess = m, l.optimisticAudioPreprocess = p, l.isSupportedAudioFileType = o("MAWSupportedAudioTypes").isSupportedAudioFileType;
}), 98);

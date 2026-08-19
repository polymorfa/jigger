__d("MWPUseVoiceRecorderV2", [
	"FBLogger",
	"MAWAudioUtils",
	"MWPAudioPlayerIcons.react",
	"MWPAudioPlayerLabels",
	"Promise",
	"WAMaybeTranscodeOggOpusToWavForPlayback",
	"WAPttComposerRecorder",
	"asyncToGeneratorRuntime",
	"clearTimeout",
	"emptyFunction",
	"err",
	"getSafeQplErrorMessage",
	"react",
	"setTimeout",
	"useIsMountedRef",
	"usePrevious"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _ = p || (p = o("react")), f = p, g = f.useCallback, h = f.useEffect, y = f.useReducer, C = f.useRef, b = function() {
		return r("FBLogger")("wmi").tags(["audio"]);
	};
	function v(e) {
		switch (e.stage) {
			case "Unopen":
			case "Recording": return !1;
			case "Recorded":
			case "Playing": return !0;
		}
	}
	function S(e) {
		switch (e.stage) {
			case "Unopen":
			case "Recording": return !1;
			case "Recorded":
			case "Playing": return !0;
		}
	}
	function R(e) {
		switch (e.stage) {
			case "Unopen": return 0;
			case "Recording": return e.duration;
			case "Recorded":
			case "Playing": return Math.max(e.duration - e.currentTime, 0);
		}
	}
	function L(e) {
		switch (e.stage) {
			case "Unopen": return 0;
			case "Recording": return e.recordingTimeout;
			case "Recorded":
			case "Playing": return e.duration;
		}
	}
	function E(e) {
		switch (e.stage) {
			case "Unopen":
			case "Recording": return;
			case "Recorded":
			case "Playing": return e.currentTime;
		}
	}
	function k(e) {
		switch (e.stage) {
			case "Unopen":
			case "Recorded": return !1;
			case "Recording":
			case "Playing": return !0;
		}
	}
	function I(e) {
		return e.stage === "Recorded" ? e.currentTime === 0 : !1;
	}
	function T(e) {
		switch (e.stage) {
			case "Recording": return o("MWPAudioPlayerLabels").stopLabel;
			case "Unopen":
			case "Recorded": return o("MWPAudioPlayerLabels").playLabel;
			case "Playing": return o("MWPAudioPlayerLabels").pauseLabel;
		}
	}
	function D(e, t) {
		switch (e.stage) {
			case "Recording": return _.jsx(o("MWPAudioPlayerIcons.react").StopIcon, { color: t });
			case "Unopen":
			case "Recorded": return _.jsx(o("MWPAudioPlayerIcons.react").PlayIcon, { color: t });
			case "Playing": return _.jsx(o("MWPAudioPlayerIcons.react").PauseIcon, { color: t });
		}
	}
	D.displayName = D.name + " [from " + i.id + "]";
	function x(e, t) {
		switch (t.type) {
			case "Start": return {
				duration: 0,
				mediaStream: t.mediaStream,
				recordingTimeout: t.recordingTimeout,
				stage: "Recording"
			};
			case "Toggle": {
				switch (e.stage) {
					case "Unopen": return e;
					case "Recording": return {
						currentTime: 0,
						duration: e.duration,
						stage: "Recorded"
					};
					case "Recorded": return {
						currentTime: e.currentTime,
						duration: e.duration,
						stage: "Playing"
					};
					case "Playing": return {
						currentTime: e.currentTime,
						duration: e.duration,
						stage: "Recorded"
					};
				}
				break;
			}
			case "UpdateDuration": {
				if (e.duration != null && t.duration < e.duration) return e;
				var n = t.duration;
				switch (e.stage) {
					case "Unopen": return e;
					case "Recording": return {
						duration: n,
						mediaStream: e.mediaStream,
						recordingTimeout: e.recordingTimeout,
						stage: "Recording"
					};
					case "Recorded": return {
						currentTime: e.currentTime,
						duration: n,
						stage: "Recorded"
					};
					case "Playing": return {
						currentTime: e.currentTime,
						duration: n,
						stage: "Playing"
					};
				}
				break;
			}
			case "UpdateTime": {
				var r = t.currentTime;
				switch (e.stage) {
					case "Unopen":
					case "Recording": return e;
					case "Recorded": {
						var o = e.duration;
						return r === o ? {
							currentTime: 0,
							duration: o,
							stage: "Recorded"
						} : {
							currentTime: r,
							duration: o,
							stage: "Recorded"
						};
					}
					case "Playing": {
						var a = e.duration;
						return r === a ? {
							currentTime: 0,
							duration: a,
							stage: "Recorded"
						} : {
							currentTime: r,
							duration: a,
							stage: "Playing"
						};
					}
				}
				break;
			}
			case "RecordingTimeout": return {
				currentTime: 0,
				duration: t.recordingTimeout,
				stage: "Recorded"
			};
			case "Reset": return { stage: "Unopen" };
		}
	}
	var $ = { stage: "Unopen" };
	function P(t) {
		var a = t.maxDuration, i = a === void 0 ? 60 : a, l = t.logClickStartRecording, p = l === void 0 ? r("emptyFunction") : l, _ = t.logBrowserDenyAccess, f = _ === void 0 ? r("emptyFunction") : _, v = t.createVoiceRecordQpl, S = t.isSecureThread, R = S === void 0 ? !1 : S, L = y(x, $), E = L[0], k = L[1], I = r("useIsMountedRef")(), T = C(), D = C(), P = C(), N = C(), M = C(), w = C(r("emptyFunction")), A = g((function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var n = t[0], r = t[1], a = t[2];
				if (I.current) {
					var i = new Date().getTime(), l = Math.round(r * 1e3), s = "audioclip-" + i + "-" + l + ".ogg", u = new File([n], s, { type: "audio/ogg" }), c = URL.createObjectURL(yield o("WAMaybeTranscodeOggOpusToWavForPlayback").maybeTranscodeOggOpusToWavForPlayback(n));
					P.current = c;
					var d = new Audio(c);
					d.addEventListener("error", function() {
						var t, n;
						b().MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose([
							"audioElement error code: ",
							". message: ",
							""
						])), (t = d.error) == null ? void 0 : t.code, (n = d.error) == null ? void 0 : n.message);
					}), d.addEventListener("canplay", function() {
						var e;
						D.current = d;
						var t = d.duration;
						k({
							duration: t,
							type: "UpdateDuration"
						});
						var n = R ? {
							amplitudes: o("MAWAudioUtils").recomputeWaveform(a),
							sampling_freq: t > 0 ? o("MAWAudioUtils").WAVEFORM_TARGET_SIZE / t : 0
						} : {
							amplitudes: a,
							sampling_freq: o("MAWAudioUtils").WAVEFORM_SAMPLE_RATE
						}, r = {
							duration: t,
							file: u,
							waveformData: n
						};
						N.current = r, w.current(r), (e = M.current) == null || e.endSuccess();
					}), d.addEventListener("timeupdate", function() {
						var e, t = (e = D.current) == null ? void 0 : e.currentTime;
						t != null && k({
							currentTime: t,
							type: "UpdateTime"
						});
					}), d.addEventListener("durationchange", function() {
						var e, t = (e = D.current) == null ? void 0 : e.duration;
						t != null && !Number.isNaN(t) && k({
							duration: t,
							type: "UpdateDuration"
						});
					});
				}
			});
			return function(e) {
				return t.apply(this, arguments);
			};
		})(), [I, R]);
		h(function() {
			if (E.stage === "Recording") {
				p();
				var e = E.mediaStream;
				return (m || (m = n("Promise"))).resolve().then(function() {
					var t = new (r("WAPttComposerRecorder"))({
						createStream: function() {
							return (m || (m = n("Promise"))).resolve(e);
						},
						waveformSampleRate: o("MAWAudioUtils").WAVEFORM_SAMPLE_RATE
					});
					return T.current = t, t.start();
				}).then(function(e) {
					if (e) {
						b().INFO(s || (s = babelHelpers.taggedTemplateLiteralLoose(["PTT recording start successfully"])));
						return;
					}
					return (m || (m = n("Promise"))).reject(r("err")("PTT recording start failed"));
				}).catch(function(e) {
					var t;
					b().MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose(["PTT recording start Error ", ""])), String(e)), (t = M.current) == null || t.endFail("start-error", { string: { failReason: o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e) } });
				}), function() {
					var e;
					(e = T.current) == null || e.stop();
				};
			}
		}, [
			p,
			E.mediaStream,
			E.stage
		]);
		var F = r("usePrevious")(E);
		h(function() {
			if ((F == null ? void 0 : F.stage) === "Recording" && E.stage === "Recorded") {
				var e = T.current;
				if (e == null) return;
				e.stop(), (m || (m = n("Promise"))).all([e.getCompleteRecording(), e.getCorrectedWaveformSamples()]).then(function(t) {
					var n = t[0], r = t[1], o = e.getDuration();
					return A([
						n,
						o,
						r
					]);
				}).catch(function(e) {
					var t;
					b().MUSTFIX(c || (c = babelHelpers.taggedTemplateLiteralLoose(["PTT recording stop Error ", ""])), String(e)), (t = M.current) == null || t.endFail("browser-deny-access", { string: { failReason: o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e) } });
				});
			}
		}, [
			A,
			F == null ? void 0 : F.stage,
			E.stage
		]), h(function() {
			if (E.stage === "Recording") {
				var e = Date.now(), t, n = function() {
					var o = (Date.now() - e) / 1e3;
					if (o >= i) {
						k({
							recordingTimeout: i,
							type: "RecordingTimeout"
						});
						return;
					}
					k({
						duration: o,
						type: "UpdateDuration"
					}), t = r("setTimeout")(n, 1e3);
				};
				return t = r("setTimeout")(n, 1e3), function() {
					t != null && r("clearTimeout")(t);
				};
			}
		}, [i, E.stage]);
		var O = g(function(e) {
			var t = v == null ? void 0 : v();
			M.current = t, t == null || t.start({ startInfo: { isOpusRecorder: !0 } }), k({
				mediaStream: e,
				recordingTimeout: i,
				type: "Start"
			});
		}, [i, v]), B = g(function() {
			var e, t;
			(e = M.current) == null || e.endCancel(), k({ type: "Reset" }), (t = D.current) == null || t.pause(), D.current = void 0, N.current = void 0;
			var n = P.current;
			n != null && (URL.revokeObjectURL(n), P.current = void 0);
		}, []), W = g(function() {
			var e = function() {
				k({
					maxDuration: i,
					type: "Toggle"
				});
			}, t = D.current;
			if (t == null) {
				e();
				return;
			}
			switch (E.stage) {
				case "Unopen": {
					e();
					break;
				}
				case "Recording": {
					var n;
					(n = M.current) == null || n.addPoint("stop-recording"), e();
					break;
				}
				case "Recorded": {
					var r;
					(r = M.current) == null || r.addPoint("play-audio"), t.play().then(e).catch(function(e) {
						var t;
						b().MUSTFIX(d || (d = babelHelpers.taggedTemplateLiteralLoose(["PTT recording play Error ", ""])), String(e)), (t = M.current) == null || t.endFail("browser-deny-access", { string: { failReason: o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e) } }), f();
					});
					break;
				}
				case "Playing": {
					var a;
					(a = M.current) == null || a.addPoint("pause-playing"), t.pause(), e();
					break;
				}
			}
		}, [
			f,
			E.stage,
			i
		]), q = g(function() {
			return new (m || (m = (n("Promise"))))(function(e) {
				var t = N.current;
				if (t != null) return e(t);
				if (w.current = e, E.stage === "Recording") return W();
			});
		}, [E, W]);
		return {
			audioEl: D,
			getVoiceClip: q,
			reset: B,
			start: O,
			state: E,
			toggle: W
		};
	}
	l.showScreenReaderLabel = v, l.hasScrubber = S, l.getTimerTime = R, l.getDuration = L, l.getCurrentTime = E, l.isProgressing = k, l.isCompleted = I, l.getPlaybackLabel = T, l.getPlaybackIcon = D, l.useVoiceRecorder = P;
}), 98);

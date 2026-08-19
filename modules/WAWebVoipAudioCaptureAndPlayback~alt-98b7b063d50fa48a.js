__d("WAWebVoipAudioCaptureAndPlayback", [
	"WALogger",
	"WAPromiseDelays",
	"WAResolvable",
	"WAWebABProps",
	"WAWebAudioDeviceManager",
	"WAWebAudioUtility",
	"WAWebBoolFunc",
	"WAWebVoipAudioCaptureBase",
	"WAWebVoipAudioPlaybackBase",
	"WAWebVoipAudioPlaybackState",
	"WAWebVoipAvDriverInitQpl",
	"WAWebVoipOperationQueue",
	"WAWebVoipPopoutWindowState"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v = null, S = 0;
	function R() {
		return S++, S;
	}
	var L = null, E = !1, k = 0, I = new (o("WAResolvable")).Resolvable();
	function T() {
		return E = !1, k++, I = new (o("WAResolvable")).Resolvable(), k;
	}
	function D(e, t) {
		t === void 0 && (t = k), t === k && (E = e, I.resolve(e));
	}
	function x() {
		return I.resolve(!1), T();
	}
	function $(e) {
		e === k && (I.resolve(!1), T());
	}
	function P() {
		var e, t;
		return (e = (t = L) == null ? void 0 : t.getEstimatedOutputLagSamples()) != null ? e : 0;
	}
	async function N(e) {
		return E ? !0 : await o("WAPromiseDelays").withTimeout(I.promise, e, o("WAWebBoolFunc").returnFalse);
	}
	var M = new (o("WAWebVoipOperationQueue")).WAWebVoipOperationQueue("AudioCapture"), w = new (o("WAWebVoipOperationQueue")).WAWebVoipOperationQueue("AudioPlayback"), A = !1;
	function F() {
		return o("WAWebABProps").getABPropConfigValue("enable_web_voip_audio_driver_lifetime_fix") === !0;
	}
	async function O(t) {
		var n = t.deviceId, r = t.targetWindow;
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV] requestAudioReacquisition: ", ""])), n);
		try {
			var a = await Q(n, r, !0);
			a ? o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV] audio re-acquisition completed"]))) : o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV] audio re-acquisition failed"])));
		} catch (e) {
			o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV] audio re-acquisition error: ", ""])), e).sendLogs("voip: audio re-acquisition failed");
		}
	}
	function B() {
		A || (o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.on("requestAudioReacquisition", O), A = !0);
	}
	function W() {
		var e, t, n, r = (e = v) == null ? void 0 : e.captureParams;
		return {
			sampleRate: (t = r == null ? void 0 : r.sampleRate) != null ? t : 16e3,
			framesPerChunk: (n = r == null ? void 0 : r.framesPerChunk) != null ? n : 320
		};
	}
	async function q(e) {
		if (e.device_type !== o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio) {
			var t = F(), n = t ? R() : S;
			B(), M.enqueue(async function() {
				if (!(t && n !== S)) {
					v == null && (v = new (o("WAWebVoipAudioCaptureBase")).WAWebVoipAudioCaptureBase());
					var r = v, a = o("WAWebVoipAvDriverInitQpl").startVoipAvDriverInitQpl();
					o("WAWebVoipAvDriverInitQpl").voipAvDriverInitQplAddPoint(a, o("WAWebVoipAvDriverInitQpl").VoipAvDriverInitQplPoint.CAPTURE_DRIVER_INIT_START);
					try {
						await r.initCaptureDriver(e), o("WAWebVoipAvDriverInitQpl").voipAvDriverInitQplAddPoint(a, o("WAWebVoipAvDriverInitQpl").VoipAvDriverInitQplPoint.CAPTURE_DRIVER_INIT_END), o("WAWebVoipAvDriverInitQpl").endVoipAvDriverInitQplSuccess(a);
					} catch (e) {
						throw o("WAWebVoipAvDriverInitQpl").endVoipAvDriverInitQplFail(a, "capture_init_failed"), e;
					}
				}
			}, "initCaptureDriver");
		}
	}
	async function U(e) {
		if ((e == null ? void 0 : e.device_type) !== o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio) {
			var t = F(), n = S;
			M.enqueue(async function() {
				var e;
				if (!(t && n !== S)) {
					if (v == null) {
						o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:startCaptureJS] capture instance is null. Call initCaptureDriverJS first."]))).sendLogs("voip: capture instance is null");
						return;
					}
					if (await v.startCapture(t ? function() {
						return n !== S;
					} : void 0), !(t && n !== S)) {
						var r = (e = L) == null ? void 0 : e.playbackAudioContext;
						if (r != null && r.state === "suspended") try {
							if (await r.resume(), t && n !== S) return;
							o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:startCaptureJS] Also resumed playback AudioContext"])));
						} catch (e) {
							if (t && n !== S) return;
							o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:startCaptureJS] Failed to resume playback AudioContext: ", ""])), e);
						}
					}
				}
			}, "startCapture");
		}
	}
	async function V(e) {
		(e == null ? void 0 : e.device_type) !== o("WAWebAudioUtility").AudioCaptureDevType.kInternalAudio && (F() && R(), M.enqueue(async function() {
			if (v == null) {
				o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:stopCaptureJS] capture instance is null, nothing to stop."])));
				return;
			}
			await v.stopCapture(), v = null;
		}, "stopCapture"));
	}
	async function H(e) {
		var t = x();
		w.enqueue(async function() {
			if (t === k) {
				L == null && (L = new (o("WAWebVoipAudioPlaybackBase")).WAWebVoipAudioPlaybackBase());
				var n = L;
				z = null;
				var r = o("WAWebVoipAvDriverInitQpl").startVoipAvDriverInitQpl();
				o("WAWebVoipAvDriverInitQpl").voipAvDriverInitQplAddPoint(r, o("WAWebVoipAvDriverInitQpl").VoipAvDriverInitQplPoint.PLAYBACK_DRIVER_INIT_START);
				try {
					await n.initPlaybackDriver(e), o("WAWebVoipAvDriverInitQpl").voipAvDriverInitQplAddPoint(r, o("WAWebVoipAvDriverInitQpl").VoipAvDriverInitQplPoint.PLAYBACK_DRIVER_INIT_END), o("WAWebVoipAvDriverInitQpl").endVoipAvDriverInitQplSuccess(r);
				} catch (e) {
					throw o("WAWebVoipAvDriverInitQpl").endVoipAvDriverInitQplFail(r, "playback_init_failed"), e;
				}
				t === k && o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(e.sample_rate);
			}
		}, "initPlaybackDriver");
	}
	async function G() {
		var e = F(), t = k;
		w.enqueue(async function() {
			if (t === k) {
				if (L == null) {
					D(!1, t), o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:startPlaybackJS] playback instance is null. Call initPlaybackDriverJS first."]))).sendLogs("voip: playback instance is null");
					return;
				}
				try {
					await L.startPlayback(e ? function() {
						return t !== k;
					} : void 0), D(!0, t);
				} catch (e) {
					throw D(!1, t), e;
				}
			}
		}, "startPlayback");
	}
	var z = null;
	function j() {
		if (L != null) return L.consumeAudioPlaybackMetrics();
		var e = z;
		return z = null, e;
	}
	async function K() {
		var e = F(), t = e ? null : k;
		e && x(), w.enqueue(async function() {
			var e = L;
			if (e == null) {
				t != null && $(t), o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:stopPlaybackJS] playback instance is null, nothing to stop."])));
				return;
			}
			z = e.consumeAudioPlaybackMetrics();
			try {
				await e.stopPlayback();
			} finally {
				t != null && $(t), L = null, o("WAWebVoipAudioPlaybackState").updatePlaybackSampleRate(null);
			}
		}, "stopPlayback");
	}
	async function Q(e, t, n) {
		var r = new (o("WAResolvable")).Resolvable();
		return M.enqueue(async function() {
			try {
				if (v == null) {
					o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:switchAudioDevice] capture instance is null."]))), r.resolve(!1);
					return;
				}
				var a = await v.switchDevice(e, t, n);
				r.resolve(a);
			} catch (e) {
				o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:switchAudioInputDevice] failed: ", ""])), e).sendLogs("voip: switchAudioInputDevice failed"), r.resolve(!1);
			}
		}, "switchInputDevice"), r.promise;
	}
	async function X(e) {
		var t = new (o("WAResolvable")).Resolvable();
		return w.enqueue(async function() {
			try {
				if (L == null) {
					o("WALogger").WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:switchAudioOutputDevice] playback instance is null, saving preference only"]))), o("WAWebAudioDeviceManager").saveAudioOutputDevicePreference(e, "AV:switchAudioOutputDevice"), t.resolve(!1);
					return;
				}
				var n = await L.switchOutputDevice(e);
				t.resolve(n);
			} catch (e) {
				o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:switchAudioOutputDevice] failed: ", ""])), e).sendLogs("voip: switchAudioOutputDevice failed"), t.resolve(!1);
			}
		}, "switchOutputDevice"), t.promise;
	}
	l.getPlaybackSampleRate = o("WAWebVoipAudioPlaybackState").getPlaybackSampleRate, l.getEstimatedPlaybackOutputLagSamples = P, l.waitForPlaybackStart = N, l.getCaptureParams = W, l.initCaptureDriverJS = q, l.startCaptureJS = U, l.stopCaptureJS = V, l.initPlaybackDriverJS = H, l.startPlaybackJS = G, l.consumeAudioPlaybackMetrics = j, l.stopPlaybackJS = K, l.switchAudioInputDevice = Q, l.switchAudioOutputDevice = X;
}), 98);

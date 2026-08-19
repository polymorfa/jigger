__d("WAWebVoipAcquireMediaStream", [
	"$InternalEnum",
	"WAAbortError",
	"WAFilteredCatch",
	"WAGetMediaDevicesSupportedConstraints",
	"WALogger",
	"WAPromiseRaceAbort",
	"WAWebABProps",
	"WAWebAudioDeviceManager",
	"WAWebCallCollection",
	"WAWebCoreActionsODS",
	"WAWebEnvironment",
	"WAWebGetUserMediaErrors",
	"WAWebGuidePopup.react",
	"WAWebMediaCapture",
	"WAWebMediaCaptureStreamType",
	"WAWebMediaPermissionsUtils",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebNullFunc",
	"WAWebUA",
	"WAWebUserPrefsVoip",
	"WAWebVoipActivityTracker",
	"WAWebVoipBrowserAudioStatus",
	"WAWebVoipCameraPrewarm",
	"WAWebVoipCameraTrackConstraints",
	"WAWebVoipGatingUtils",
	"WAWebVoipPopoutModalManager",
	"WAWebVoipStackInterface",
	"isStringNullOrEmpty",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["type"], s = ["type"], u = ["type"], c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F, O, B, W, q, U, V, H, G, z, j, K = j || (j = o("react"));
	function Q() {
		return o("WAWebABProps").getABPropConfigValue("enable_web_voip_virtual_video_capture_driver") === !0;
	}
	var X = 200, Y = new WeakMap();
	function J(e) {
		var t = Y.get(e);
		if (t != null) return t;
		var n = (async function() {
			var t = Date.now(), n = await Ge(e), r = Date.now() - t;
			n.getTracks().forEach(function(e) {
				o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [AV:getAvailableVideoDevices] permission track ",
					": readyState=",
					", stopping (took ",
					"ms)"
				])), e.kind, e.readyState, r), e.stop();
			});
		})().finally(function() {
			window.setTimeout(function() {
				Y.get(e) === n && Y.delete(e);
			}, X);
		});
		return Y.set(e, n), n;
	}
	var Z = n("$InternalEnum").Mirrored([
		"None",
		"Ideal",
		"Exact"
	]), ee = new Set([
		"ConstraintNotSatisfiedError",
		"OverconstrainedError",
		"NotFoundError"
	]), te = null;
	function ne() {
		return te;
	}
	var re = {
		microphone: null,
		camera: null
	};
	function oe() {
		re.microphone = null, re.camera = null;
	}
	var ae = 1e3, ie = 1e4, le = 3e4, se = 1e4, ue = 1e3, ce = 3e4, de = null;
	function me(e) {
		return de !== e;
	}
	function pe(e) {
		de === e && (de = null);
	}
	function _e(e) {
		var t = e.scheduledCallId, n = r("WAWebCallCollection").activeCall, o = n == null ? void 0 : n.id;
		return t == null || t !== o ? "call changed (scheduled=" + (t != null ? t : "none") + ", current=" + (o != null ? o : "none") + ")" : e.isCallLinkPreviewRetry && (n == null ? void 0 : n.isInCallLinkPreview()) !== !0 ? "call link preview no longer active (callId=" + t + ")" : null;
	}
	function fe(e, t) {
		var n = _e(e);
		return n == null ? !1 : (o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
			"voip: [AV:acquireCameraStream] camera permission retry stopped at ",
			": ",
			""
		])), t, n), pe(e), !0);
	}
	function ge(e) {
		return (function(e) {
			return (typeof e == "object" && e !== null || typeof e == "function") && e.checkVideo === !0 && e.microphone === !0 && e.camera === !0 || (typeof e == "object" && e !== null || typeof e == "function") && e.checkVideo === !1 && e.microphone === !0;
		})(babelHelpers.extends({ checkVideo: e }, re));
	}
	function he() {
		var e, t = r("WAWebCallCollection").activeCall;
		return {
			isCallLinkPreview: (t == null ? void 0 : t.isInCallLinkPreview()) === !0,
			scheduledCallId: (e = t == null ? void 0 : t.id) != null ? e : null
		};
	}
	function ye(e, t) {
		return e !== "prompt" || o("WAWebUA").UA.isSafari ? ie : t.isCallLinkPreview ? le : null;
	}
	function Ce(e) {
		return e !== "prompt" || o("WAWebUA").UA.isSafari ? se : null;
	}
	async function be(e) {
		if (!fe(e, "unmute start")) {
			var t = await o("WAWebVoipStackInterface").getVoipStackInterface();
			if (!fe(e, "after stack load") && (t == null ? void 0 : t.type) === "web") {
				var n = await t.setCallVideoMute(!1);
				o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:acquireCameraStream] camera permission retry setCallVideoMute(false) status: ", ""])), n);
			}
		}
	}
	async function ve(e) {
		if (!me(e) && !fe(e, "before permission query")) {
			var t = await ke(!0), n = t.cameraPermission;
			if (!me(e) && !fe(e, "after permission query")) {
				if (n === "granted") {
					o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:acquireCameraStream] camera permission granted after timeout; retrying video capture"])));
					try {
						await be(e);
					} finally {
						pe(e);
					}
					return;
				}
				var r = Date.now() - e.retryStartedAt;
				if (n === "denied" || !e.isCallLinkPreviewRetry && r >= ce) {
					pe(e), o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
						"voip: [AV:acquireCameraStream] camera permission retry stopped: permission=",
						", elapsed=",
						"ms"
					])), n, r);
					return;
				}
				Se(e);
			}
		}
	}
	function Se(e) {
		self.setTimeout(function() {
			me(e) || ve(e).catch(function(e) {
				o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:acquireCameraStream] camera permission retry poll failed: ", ""])), e).sendLogs("voip-camera-retry-poll-fail");
			});
		}, ue);
	}
	function Re(e) {
		var t;
		if (!(!o("WAWebUA").UA.isSafari && !e.isCallLinkPreview)) {
			var n = {
				isCallLinkPreviewRetry: e.isCallLinkPreview,
				retryStartedAt: Date.now(),
				scheduledCallId: e.scheduledCallId
			}, r = _e(n);
			if (r != null) {
				o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:acquireCameraStream] camera permission retry not scheduled: ", ""])), r);
				return;
			}
			de = n, o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [AV:acquireCameraStream] camera permission prompt timed out; waiting for grant to retry (callId=",
				", callLinkPreview=",
				", safari=",
				")"
			])), (t = n.scheduledCallId) != null ? t : "none", n.isCallLinkPreviewRetry, String(o("WAWebUA").UA.isSafari)), Se(n);
		}
	}
	function Le(e, t, n, a, i) {
		var l = null, s = !1;
		return e.catch(r("WAWebNoop")), Promise.race([e, new Promise(function(e) {
			l = self.setTimeout(function() {
				s = !0, l = null, o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [AV:",
					"] getUserMedia timed out after ",
					"ms"
				])), a, n), i == null || i(), t(), e(null);
			}, n);
		})]).finally(function() {
			!s && l != null && self.clearTimeout(l);
		});
	}
	async function Ee() {
		if (navigator === void 0 || !navigator.permissions) return null;
		try {
			var e = await navigator.permissions.query({ name: "camera" });
			return e.state;
		} catch (e) {
			return null;
		}
	}
	async function ke(e) {
		var t = {
			micPermission: "prompt",
			cameraPermission: "prompt"
		};
		if (navigator === void 0 || !navigator.permissions) return t;
		try {
			var n = await navigator.permissions.query({ name: "microphone" });
			if (t.micPermission = n.state, e) {
				var r = await navigator.permissions.query({ name: "camera" });
				t.cameraPermission = r.state;
			}
		} catch (e) {}
		return t;
	}
	function Ie(e, t) {
		return e ? (function(e) {
			if (e === "camera") return o("WAWebGuidePopup.react").Messaging.CAMERA_FAIL;
			if (e === "mic") return o("WAWebGuidePopup.react").Messaging.MIC_FAIL;
			if (e === "camera_and_mic") return o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC_FAIL;
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})(o("WAWebMediaPermissionsUtils").getDeviceSpecificPermissionMessaging(t.micPermission === "granted", t.cameraPermission === "granted")) : o("WAWebGuidePopup.react").Messaging.MIC_FAIL;
	}
	async function Te(e) {
		if (r("WAWebEnvironment").isWindows && !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()) return re.microphone = !0, re.camera = !0, !0;
		var t = e && !Q(), n = await ke(e);
		try {
			o("WAWebVoipActivityTracker").trackUiActivity(t ? o("WAWebVoipActivityTracker").VoipUiActivity.PERMISSION_REQUEST_CAMERA_AND_MIC_START : o("WAWebVoipActivityTracker").VoipUiActivity.PERMISSION_REQUEST_MIC_START);
			var a = t ? o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA_AND_MICROPHONE : o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE, i = await De(a, t);
			return i ? (await o("WAWebMediaCapture").stop(i), o("WAWebVoipActivityTracker").trackUiActivity(t ? o("WAWebVoipActivityTracker").VoipUiActivity.PERMISSION_REQUEST_CAMERA_AND_MIC_END : o("WAWebVoipActivityTracker").VoipUiActivity.PERMISSION_REQUEST_MIC_END), re.microphone = !0, t && (re.camera = !0), !0) : !1;
		} catch (e) {
			if (e instanceof o("WAWebGetUserMediaErrors").NotAllowedError) {
				o("WAWebCoreActionsODS").logCallPermissionDenied();
				var l = Ie(t, n);
				o("WAWebModalManager").ModalManager.open(K.jsx(o("WAWebGuidePopup.react").GuidePopup, {
					messaging: l,
					type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
					featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP
				}));
			} else if (e instanceof o("WAWebGetUserMediaErrors").NotReadableError || e instanceof o("WAWebGetUserMediaErrors").SourceUnavailableError) {
				o("WAWebCoreActionsODS").logCallPermissionDeviceError();
				var s = Ie(t, n);
				o("WAWebModalManager").ModalManager.open(K.jsx(o("WAWebGuidePopup.react").GuidePopup, {
					messaging: s,
					type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
					featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP
				}));
			} else e instanceof o("WAWebGetUserMediaErrors").GetUserMediaError && o("WAWebModalManager").ModalManager.open(K.jsx(o("WAWebGuidePopup.react").GuidePopup, {
				messaging: t ? o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC_MISSING : o("WAWebGuidePopup.react").Messaging.MIC_MISSING,
				type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE,
				featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP
			}));
			return !1;
		}
	}
	async function De(e, t) {
		var n = ge(t) ? Number.POSITIVE_INFINITY : void 0, r = $e(t);
		try {
			return await xe(e, n, r);
		} catch (t) {
			if (r == null || !Pe(t)) throw t;
			return o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:checkVoipDevicePermissions] selected camera unavailable, retrying permission check with default camera: ", ""])), t), xe(e, n);
		}
	}
	async function xe(e, t, n) {
		var r = {
			type: e,
			featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP
		};
		t != null && (r.timeoutLimit = t), n != null && (r.mediaConstraints = n);
		var a = await o("WAWebMediaCapture").start(r), i = a.asyncStream;
		return i;
	}
	function $e(e) {
		if (!e) return null;
		var t = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
		return r("isStringNullOrEmpty")(t) ? null : [{
			video: { deviceId: { exact: t } },
			audio: !0
		}];
	}
	function Pe(e) {
		return e instanceof Error && ee.has(e.name);
	}
	async function Ne(t) {
		return !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia ? (o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV] getUserMedia not supported"]))), null) : (function(t) {
			if ((typeof t == "object" && t !== null || typeof t == "function") && t.type === "microphone") {
				var n = t.type, r = babelHelpers.objectWithoutPropertiesLoose(t, e);
				return Fe({
					selectedDeviceId: r.selectedDeviceId,
					params: r.params,
					targetWindow: r.targetWindow,
					suppressErrorPopup: r.suppressErrorPopup
				});
			}
			if ((typeof t == "object" && t !== null || typeof t == "function") && t.type === "camera") {
				var o = t.type, a = babelHelpers.objectWithoutPropertiesLoose(t, s);
				return qe({
					selectedDeviceId: a.selectedDeviceId,
					params: a.params,
					targetWindow: a.targetWindow,
					isAVUpgrade: a.isAVUpgrade
				});
			}
			if ((typeof t == "object" && t !== null || typeof t == "function") && t.type === "desktop") {
				var i = t.type, l = babelHelpers.objectWithoutPropertiesLoose(t, u);
				return Ze({
					params: l.params,
					targetWindow: l.targetWindow
				});
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
		})(t);
	}
	var Me = null;
	function we() {
		var e;
		if (Me == null) {
			var t = o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
			o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose(["voip: [EarlyMicAcquire] Acquiring microphone in gesture (device=", ")"])), (e = t == null ? void 0 : t.slice(0, 8)) != null ? e : "default");
			var n = Me = Ne({
				type: "microphone",
				selectedDeviceId: t != null ? t : void 0,
				suppressErrorPopup: !0
			}).then(function(e) {
				return e != null && o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose(["voip: [EarlyMicAcquire] Microphone acquired successfully"]))), e;
			}).catch(function(e) {
				return o("WALogger").WARN(R || (R = babelHelpers.taggedTemplateLiteralLoose(["voip: [EarlyMicAcquire] Microphone acquire failed: ", ""])), e), Me === n && (Me = null), null;
			});
		}
	}
	function Ae() {
		if (Me != null) {
			var e = Me;
			Me = null, e.then(function(e) {
				e != null && (o("WAWebMediaCapture").stop(e), o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose(["voip: [EarlyMicAcquire] Cleaned up unused early-acquired microphone stream"]))));
			}).catch(function(e) {
				o("WALogger").WARN(E || (E = babelHelpers.taggedTemplateLiteralLoose(["voip: [EarlyMicAcquire] Cleanup failed: ", ""])), e);
			});
		}
	}
	async function Fe(e) {
		var t, n = e.params, r = e.selectedDeviceId, a = e.suppressErrorPopup, i = e.targetWindow;
		o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
			"voip: [MicDeviceSelector] acquireMicrophoneStream: selectedDeviceId=",
			", hasParams=",
			""
		])), (t = r == null ? void 0 : r.slice(0, 8)) != null ? t : "null", String(n != null));
		var l = i != null ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager : o("WAWebModalManager").ModalManager, s = ge(!1), u = await o("WAWebMediaCapture").start({
			type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE,
			featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
			timeoutLimit: s ? Number.POSITIVE_INFINITY : void 0,
			targetWindow: i,
			mediaConstraints: n ? [
				Be(r, "exact", n),
				Be(r, "ideal", n),
				Be(null, "none", n)
			] : void 0
		}), c = u.asyncStream, d = u.disposeStream, m = null;
		if (!s) try {
			var p, _, f = await ((p = navigator.permissions) == null ? void 0 : p.query({ name: "microphone" }));
			m = (_ = f == null ? void 0 : f.state) != null ? _ : null;
		} catch (e) {}
		var g = s ? se : Ce(m), h = g != null ? Le(c, d, g, "acquireMicrophoneStream") : c;
		return h.then(function(e) {
			if (e != null) try {
				Oe(e);
			} catch (e) {
				o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:detectBrowserAudioProcessing] failed: ", ""])), String(e));
			}
			return e;
		}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebGetUserMediaErrors").NotAllowedError, function() {
			if (o("WAWebCoreActionsODS").logCallMediaMicError(), a !== !0) {
				var e;
				l.open(K.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
					messaging: e.Messaging.MIC_FAIL,
					type: e.GuidePopupType.GUIDE_UNBLOCK,
					featureSurface: e.FeatureSurface.VOIP,
					onConfirm: function() {
						return l.close();
					}
				}));
			}
		})).catch(o("WAFilteredCatch").filteredCatch([o("WAWebGetUserMediaErrors").NotReadableError, o("WAWebGetUserMediaErrors").SourceUnavailableError], function() {
			if (o("WAWebCoreActionsODS").logCallMediaMicError(), a !== !0) {
				var e;
				l.open(K.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
					messaging: e.Messaging.MIC_FAIL,
					type: e.GuidePopupType.GUIDE_UNBLOCK,
					featureSurface: e.FeatureSurface.VOIP,
					onConfirm: function() {
						return l.close();
					}
				}));
			}
		})).catch(o("WAFilteredCatch").filteredCatch(o("WAWebGetUserMediaErrors").GetUserMediaError, function() {
			if (o("WAWebCoreActionsODS").logCallMediaMicError(), a !== !0) {
				var e;
				l.open(K.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
					messaging: e.Messaging.MIC_MISSING,
					type: e.GuidePopupType.GUIDE_NONE,
					featureSurface: e.FeatureSurface.VOIP,
					onConfirm: function() {
						return l.close();
					}
				}));
			}
		}));
	}
	function Oe(e) {
		var t = o("WAGetMediaDevicesSupportedConstraints").getMediaDevicesSupportedConstraints(), n = {
			echoCancellation: (t == null ? void 0 : t.echoCancellation) === !0,
			noiseSuppression: (t == null ? void 0 : t.noiseSuppression) === !0,
			autoGainControl: (t == null ? void 0 : t.autoGainControl) === !0
		}, r = e.getAudioTracks()[0];
		if (r != null) {
			var a = r.getSettings(), i = new Map(Object.entries(a)), l = {
				echoCancellation: a.echoCancellation === !0,
				noiseSuppression: i.get("noiseSuppression") === !0,
				autoGainControl: i.get("autoGainControl") === !0
			};
			te = {
				supported: n,
				applied: l
			}, o("WAWebVoipBrowserAudioStatus").setBrowserAudioProcessingApplied(l), o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [AV:detectBrowserAudioProcessing] supported: EC=",
				", NS=",
				", AGC=",
				" | applied: EC=",
				", NS=",
				", AGC=",
				""
			])), String(n.echoCancellation), String(n.noiseSuppression), String(n.autoGainControl), String(l.echoCancellation), String(l.noiseSuppression), String(l.autoGainControl));
		} else te = {
			supported: n,
			applied: {
				echoCancellation: !1,
				noiseSuppression: !1,
				autoGainControl: !1
			}
		}, o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:detectBrowserAudioProcessing] no audio track found in stream"])));
	}
	function Be(e, t, n) {
		var r;
		t === void 0 && (t = "exact");
		var a = {
			video: !1,
			audio: {
				sampleRate: n.sampleRate,
				channelCount: n.channels,
				echoCancellation: !0,
				noiseSuppression: !0,
				autoGainControl: !0,
				sampleSize: n.bitsPerSample
			}
		};
		return e != null && t === "exact" ? a.audio = babelHelpers.extends({}, a.audio, { deviceId: { exact: e } }) : e != null && t === "ideal" && (a.audio = babelHelpers.extends({}, a.audio, { deviceId: { ideal: e } })), o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
			"voip: [MicDeviceSelector] getVoipMicrophoneMediaConstraints: deviceId=",
			", constraintType=",
			", sampleRate=",
			", channels=",
			""
		])), (r = e == null ? void 0 : e.slice(0, 8)) != null ? r : "null", t, n.sampleRate, n.channels), a;
	}
	async function We(e) {
		var t, n = e.params, a = e.selectedDeviceId, i = e.targetWindow;
		if (i != null && (o("WAWebUA").UA.isFirefox || o("WAWebUA").UA.isSafari)) return o("WAWebVoipCameraPrewarm").cleanupPrewarmedCamera(), null;
		var l = await o("WAWebVoipCameraPrewarm").consumePrewarmedStream();
		if (l == null) return null;
		var s = l.getVideoTracks()[0], u = s == null || (t = s.getSettings()) == null ? void 0 : t.deviceId, c = !r("isStringNullOrEmpty")(a) && u != null && u !== "" && u !== a;
		return c ? (o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
			"voip: [CameraPrewarm] pre-warmed stream device mismatch: requested=",
			", actual=",
			". Discarding pre-warmed stream."
		])), a, u != null ? u : "unknown"), l.getTracks().forEach(function(e) {
			return e.stop();
		}), null) : (n != null && o("WAWebVoipCameraPrewarm").scheduleResolutionSwitch(l, n), l);
	}
	async function qe(e) {
		var t, n = e.isAVUpgrade, r = e.params, a = e.selectedDeviceId, i = e.targetWindow;
		if (Q()) return null;
		var l = await Ee();
		if (l === "denied") {
			o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:acquireCameraStream] camera permission denied, skipping camera acquisition"])));
			var s = await o("WAWebVoipCameraPrewarm").consumePrewarmedStream();
			return s != null && s.getTracks().forEach(function(e) {
				return e.stop();
			}), null;
		}
		var u = await We({
			selectedDeviceId: a,
			params: r,
			targetWindow: i
		});
		if (u != null) return u;
		var c = n === !0 ? o("WAWebGuidePopup.react").FeatureSurface.VOIP_VIDEO_UPGRADE : o("WAWebGuidePopup.react").FeatureSurface.VOIP, d = i != null ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager : o("WAWebModalManager").ModalManager, m = he(), p = Date.now();
		o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
			"voip: [AV:acquireCameraStream] requesting camera: deviceId=",
			", targetWindow=",
			", isAVUpgrade=",
			""
		])), (t = a == null ? void 0 : a.slice(0, 8)) != null ? t : "none", String(i != null), String(n != null ? n : !1));
		var _ = await o("WAWebMediaCapture").start({
			type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA,
			featureSurface: c,
			timeoutLimit: ge(!0) ? Number.POSITIVE_INFINITY : void 0,
			targetWindow: i,
			mediaConstraints: r ? [
				Ue({
					device: {
						deviceId: a,
						constraintType: Z.Exact
					},
					params: r
				}),
				Ue({
					device: {
						deviceId: a,
						constraintType: Z.Ideal
					},
					params: r
				}),
				Ue({ params: r })
			] : void 0
		}), f = _.asyncStream, g = _.disposeStream, h = ye(l, m), y = h != null ? Le(f, g, h, "acquireCameraStream", function() {
			l === "prompt" && Re(m);
		}) : f;
		return y.then(function(e) {
			var t = Date.now() - p;
			if (e != null) {
				var n, r, a, i, l = e.getVideoTracks()[0];
				o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [AV:acquireCameraStream] acquired in ",
					"ms: readyState=",
					", muted=",
					", deviceId=",
					""
				])), t, (n = l == null ? void 0 : l.readyState) != null ? n : "no-track", String((r = l == null ? void 0 : l.muted) != null ? r : !1), (a = l == null || (i = l.getSettings()) == null ? void 0 : i.deviceId) != null ? a : "unknown");
			} else o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:acquireCameraStream] returned null stream after ", "ms"])), t);
			return e;
		}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebGetUserMediaErrors").NotAllowedError, function() {
			o("WAWebCoreActionsODS").logCallMediaCameraError();
			var e = Date.now() - p;
			o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:acquireCameraStream] NotAllowedError after ", "ms"])), e), d.open(K.jsx(o("WAWebGuidePopup.react").GuidePopup, {
				messaging: o("WAWebGuidePopup.react").Messaging.CAMERA_FAIL,
				type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
				featureSurface: c,
				onConfirm: function() {
					return d.close();
				}
			}));
		})).catch(o("WAFilteredCatch").filteredCatch([o("WAWebGetUserMediaErrors").NotReadableError, o("WAWebGetUserMediaErrors").SourceUnavailableError], function(e) {
			o("WAWebCoreActionsODS").logCallMediaCameraError();
			var t = Date.now() - p;
			o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [AV:acquireCameraStream] NotReadableError after ",
				"ms: ",
				""
			])), t, e), d.open(K.jsx(o("WAWebGuidePopup.react").GuidePopup, {
				messaging: o("WAWebGuidePopup.react").Messaging.CAMERA_FAIL,
				type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
				featureSurface: c,
				onConfirm: function() {
					return d.close();
				}
			}));
		})).catch(o("WAFilteredCatch").filteredCatch(o("WAWebGetUserMediaErrors").GetUserMediaError, function(e) {
			o("WAWebCoreActionsODS").logCallMediaCameraError();
			var t = Date.now() - p;
			o("WALogger").LOG(O || (O = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [AV:acquireCameraStream] GetUserMediaError after ",
				"ms: ",
				""
			])), t, e), d.open(K.jsx(o("WAWebGuidePopup.react").GuidePopup, {
				messaging: o("WAWebGuidePopup.react").Messaging.CAMERA_MISSING,
				type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE,
				featureSurface: c,
				onConfirm: function() {
					return d.close();
				}
			}));
		}));
	}
	function Ue(e) {
		var t = e.device, n = e.params, a = {
			video: r("WAWebVoipCameraTrackConstraints")(n),
			audio: !1
		};
		return o("WALogger").LOG(B || (B = babelHelpers.taggedTemplateLiteralLoose([
			`voip: [CameraDeviceSelector] getVoipCameraMediaConstraints:
    deviceId=`,
			", constraintType=",
			", params=",
			""
		])), t == null ? void 0 : t.deviceId, t == null ? void 0 : t.constraintType, n), t && !r("isStringNullOrEmpty")(t.deviceId) && (a.video = t.constraintType === Z.None ? a.video : t.constraintType === Z.Exact ? babelHelpers.extends({}, a.video, { deviceId: { exact: t.deviceId } }) : t.constraintType === Z.Ideal ? babelHelpers.extends({}, a.video, { deviceId: { ideal: t.deviceId } }) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t.constraintType);
		})()), a;
	}
	function Ve(e) {
		return {
			video: {
				width: { ideal: e.width },
				height: { ideal: e.height },
				frameRate: { ideal: e.maxFps }
			},
			audio: !1
		};
	}
	async function He(e) {
		var t = e === void 0 ? {} : e, n = t.isInActiveCall, r = t.skipPermissionRequest, a = t.targetWindow;
		try {
			var i, l, s = o("WAWebVoipGatingUtils").isPopoutReuseCaptureEnabled(), u = n === !0 && !o("WAWebUA").UA.isFirefox && !o("WAWebUA").UA.isSafari, c = u || n === !0 && s, d = c ? navigator.mediaDevices : (i = a == null || (l = a.navigator) == null ? void 0 : l.mediaDevices) != null ? i : navigator.mediaDevices;
			if (!(d != null && d.enumerateDevices)) return o("WALogger").ERROR(W || (W = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:getAvailableVideoDevices] mediaDevices API not supported"]))), [];
			var m = r === !0 || o("WAWebUA").UA.isSafari && n === !0, p = o("WAWebUA").UA.isFirefox && a != null;
			if (!(c || m)) {
				if (!Q()) {
					var _ = p ? { granted: !1 } : await o("WAWebMediaPermissionsUtils").checkMediaPermissionState("camera", a == null ? void 0 : a.navigator), f = _.granted;
					if (!f) try {
						await J(d);
					} catch (e) {
						if (n !== !0) throw e;
					}
				}
			}
			var g = await o("WAWebAudioDeviceManager").coalescedEnumerateDevices(d), h = g.filter(function(e) {
				return e.kind === "videoinput";
			}).map(function(e) {
				return {
					deviceId: e.deviceId,
					label: e.label || "Camera " + e.deviceId.slice(0, 8)
				};
			});
			return o("WALogger").LOG(q || (q = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:getAvailableVideoDevices] loaded ", `
      video devices`])), h.length), h;
		} catch (e) {
			return (!(e instanceof Error) || !e.name.includes("NotAllowed")) && o("WALogger").ERROR(U || (U = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:getAvailableVideoDevices] error loading devices: ", ""])), e), [];
		}
	}
	async function Ge(e) {
		var t = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
		if (r("isStringNullOrEmpty")(t)) return e.getUserMedia({ video: !0 });
		try {
			return await e.getUserMedia({ video: { deviceId: { exact: t } } });
		} catch (t) {
			if (!Pe(t)) throw t;
			return o("WALogger").LOG(V || (V = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:getAvailableVideoDevices] selected camera unavailable, falling back to default camera: ", ""])), t), e.getUserMedia({ video: !0 });
		}
	}
	async function ze(e, t, n, r) {
		var a = await He({
			isInActiveCall: n,
			skipPermissionRequest: r,
			targetWindow: t
		});
		return a.some(function(t) {
			return t.deviceId === e;
		}) ? !0 : (o("WALogger").ERROR(H || (H = babelHelpers.taggedTemplateLiteralLoose(["voip: getIsValidVideoDevice: device not found in available devices: ", ""])), e), !1);
	}
	var je = 25e3, Ke = 250, Qe = 500;
	function Xe(e) {
		var t = e;
		return t.closed === !0;
	}
	function Ye(e, t) {
		var n = null, r = null, o = null;
		try {
			n = function() {
				return t("popout pagehide");
			}, e.addEventListener("pagehide", n);
		} catch (e) {
			n = null;
		}
		return r = self.setTimeout(function() {
			r = null, o = self.setInterval(function() {
				try {
					Xe(e) && t("popout closed");
				} catch (e) {
					t("popout inaccessible");
				}
			}, Ke);
		}, Qe), function() {
			if (r != null && self.clearTimeout(r), o != null && self.clearInterval(o), n != null) try {
				e.removeEventListener("pagehide", n);
			} catch (e) {}
		};
	}
	function Je(e, t, n) {
		var a = new AbortController(), i = !1, l = function(n) {
			i || (i = !0, o("WALogger").LOG(G || (G = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:acquireDesktopStream] aborted: ", ""])), n), t(), a.abort());
		}, s = self.setTimeout(function() {
			return l("getDisplayMedia timed out after " + je + "ms");
		}, je), u = n != null ? Ye(n, l) : null;
		return e.catch(r("WAWebNoop")), r("WAPromiseRaceAbort")(e, a.signal).catch(o("WAAbortError").catchAbort(o("WAWebNullFunc").returnNull)).finally(function() {
			self.clearTimeout(s), u != null && u();
		});
	}
	async function Ze(e) {
		var t, n = e.params, r = e.targetWindow, a = n ? Ve(n) : { video: !0 }, i = ((t = o("WAWebABProps").getABPropConfigValue("calling_audio_share_version")) != null ? t : 1) > 0, l = babelHelpers.extends({}, a, {
			audio: i,
			preferCurrentTab: !1,
			selfBrowserSurface: "exclude",
			systemAudio: i ? "include" : "exclude",
			surfaceSwitching: "include",
			monitorTypeSurfaces: "include"
		}), s = Date.now();
		try {
			var u = await o("WAWebMediaCapture").start({
				type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.DESKTOP,
				featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
				mediaConstraints: [l],
				targetWindow: r
			}), c = u.asyncStream, d = u.disposeStream;
			return Je(c, d, r).catch(function(e) {
				if (e instanceof o("WAWebGetUserMediaErrors").NotAllowedError) {
					o("WAWebCoreActionsODS").logCallScreenShareDenied();
					var t = Date.now() - s;
					if (t < ae) {
						o("WALogger").LOG(z || (z = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV] acquireDesktopStream: auto-denied in ", "ms, showing guide popup"])), t);
						var n = r != null ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager : o("WAWebModalManager").ModalManager;
						n.open(K.jsx(o("WAWebGuidePopup.react").GuidePopup, {
							messaging: o("WAWebGuidePopup.react").Messaging.SCREEN_SHARE_FAIL,
							type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
							featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
							onConfirm: function() {
								return n.close();
							}
						}));
					}
					return null;
				}
				return null;
			});
		} catch (e) {
			if (e instanceof o("WAWebGetUserMediaErrors").NotAllowedError) {
				o("WAWebCoreActionsODS").logCallScreenShareDenied();
				var m = Date.now() - s;
				if (m < ae) {
					var p = r != null ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager : o("WAWebModalManager").ModalManager;
					p.open(K.jsx(o("WAWebGuidePopup.react").GuidePopup, {
						messaging: o("WAWebGuidePopup.react").Messaging.SCREEN_SHARE_FAIL,
						type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
						featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
						onConfirm: function() {
							return p.close();
						}
					}));
				}
				return null;
			}
			return null;
		}
	}
	l.getBrowserAudioProcessingStatus = ne, l.resetPermissionsCheckedForTest = oe, l.queryCameraPermissionStrict = Ee, l.queryPermissionStatus = ke, l.checkVoipDevicePermissions = Te, l.acquireVoipMediaStream = Ne, l.earlyAcquireMic = we, l.cleanupEarlyAcquiredMic = Ae, l.getAvailableVideoDevices = He, l.getIsValidVideoDevice = ze;
}), 98);

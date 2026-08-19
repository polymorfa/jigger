__d("WAWebVoipVideoCameraCapture", [
	"WALogger",
	"WAWebBackendApi",
	"WAWebNoop",
	"WAWebTypedEventEmitter",
	"WAWebUA",
	"WAWebUserPrefsVoip",
	"WAWebVoipPopoutWindowState",
	"WAWebVoipResolutionCap",
	"WAWebVoipStackInterface",
	"WAWebVoipVideoCaptureBase",
	"WAWebVoipVideoRendererInterface",
	"WAWebVoipVideoRendererRegistry",
	"err",
	"getErrorSafe",
	"isStringNullOrEmpty",
	"justknobx",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F, O, B, W, q, U, V, H, G, z, j, K, Q, X, Y, J, Z, ee = (function(e) {
		function t() {
			return e.apply(this, arguments) || this;
		}
		return babelHelpers.inheritsLoose(t, e), t;
	})(r("WAWebTypedEventEmitter")), te = new ee(), ne = new Set(), re = 2e3;
	function oe(t) {
		var n = 0, r = 0;
		for (var a of ne) {
			var i = a.getTracks().filter(function(e) {
				return e.readyState === "live";
			});
			i.length > 0 && (i.forEach(function(e) {
				return e.stop();
			}), r++, n += i.length), ne.delete(a);
		}
		n > 0 ? o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"voip: [AV:cameraReconciliation] ",
			": stopped ",
			" leaked live camera track(s) across ",
			" stream(s) that survived teardown"
		])), t, n, r).sendLogs("voip-camera-stream-leak") : o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:cameraReconciliation] ", ": clean — no live camera tracks after teardown"])), t);
	}
	var ae = (function(e) {
		function t() {
			for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
			return t = e.call.apply(e, [this].concat(r)) || this, t.name = "camera", t.captureParams = null, t.currentDeviceId = null, t.__lastCapturedStream = null, t.__lastTargetWindow = null, t.__frameMonitorCleanup = null, t.__healthCheckRetryCount = 0, t.__stopping = !1, babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
		}
		babelHelpers.inheritsLoose(t, e);
		var n = t.prototype;
		return n.startCameraCapture = async function(t) {
			var e = this, n = t.camera_id_requested, a = t.height, i = t.isAVUpgrade, l = t.max_fps, s = t.targetWindow, C = t.width;
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
				"[AV:startCameraCapture] cam=",
				" w=",
				" h=",
				" fps=",
				" upgrade=",
				" targetWindow=",
				""
			])), n, C, a, l, i, String(s != null)), this.__lastTargetWindow = s != null ? s : null;
			var b = n;
			if (r("isStringNullOrEmpty")(b)) {
				var v = o("WAWebUserPrefsVoip").getLandingPageVideoDeviceId();
				v != null && (b = v, o("WAWebUserPrefsVoip").clearLandingPageVideoDeviceId());
			}
			if (r("isStringNullOrEmpty")(b) && this.currentDeviceId != null && (b = this.currentDeviceId), r("isStringNullOrEmpty")(b)) {
				var S = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
				S != null && (b = S);
			}
			var R = s != null ? s : o("WAWebUA").UA.isFirefox ? o("WAWebVoipPopoutWindowState").getPopoutWindow() : null;
			if (!r("isStringNullOrEmpty")(b)) try {
				var L = await o("WAWebBackendApi").frontendSendAndReceive("getIsValidVideoDevice", {
					deviceId: b,
					targetWindow: R,
					isInActiveCall: !0
				});
				L || (o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[AV:startCameraCapture] device ", " no longer available, falling back to default"])), b), b = "");
			} catch (e) {
				o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
					"[AV:startCameraCapture] device validation failed, proceeding with ",
					": ",
					""
				])), b, e);
			}
			this.captureParams = o("WAWebVoipResolutionCap").applyLowEndResolutionCap({
				width: C,
				height: a,
				maxFps: l
			});
			var E = null, k = async function() {
				if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
					var t = await o("WAWebBackendApi").frontendSendAndReceive("voipAcquireMediaStream", {
						type: "camera",
						selectedDeviceId: b,
						params: r("nullthrows")(e.captureParams),
						isAVUpgrade: i,
						targetWindow: s
					});
					if (t == null) {
						o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[AV:getCameraMediaStream] getUserMedia failed, muting video"])));
						var n = await o("WAWebVoipStackInterface").getVoipStackInterface();
						return (n == null ? void 0 : n.type) === "web" && await n.setCallVideoMute(!0), null;
					}
					e.__lastCapturedStream = t, ne.add(t);
					var a = t.getVideoTracks().at(0);
					if (a != null) {
						var l, u = a.getSettings();
						u.deviceId != null && u.deviceId !== "" && (E = u.deviceId), o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
							"[AV:getCameraMediaStream] track acquired: readyState=",
							", muted=",
							", enabled=",
							", deviceId=",
							", resolution=",
							"x",
							""
						])), a.readyState, String(a.muted), String(a.enabled), (l = u.deviceId) != null ? l : "unknown", String(u.width), String(u.height));
					} else o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[AV:getCameraMediaStream] stream acquired but no video track found"])));
					return a == null || a.addEventListener("ended", async function() {
						if (o("WAWebVoipPopoutWindowState").getIsCameraStreamReacquisitionInProgress() || e.__lastCapturedStream !== t) {
							o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[AV:getCameraMediaStream] ignoring 'ended' during popout stream swap"])));
							return;
						}
						o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[AV:getCameraMediaStream] stream ended, muting video"])));
						var n = await o("WAWebVoipStackInterface").getVoipStackInterface();
						(n == null ? void 0 : n.type) === "web" && await n.setCallVideoMute(!0);
					}), t;
				}
				throw r("err")("getUserMedia not supported");
			};
			await this.__startCapture(babelHelpers.extends({
				getMediaStream: k,
				onVideoDataFnType: "onVideoDataFromJs"
			}, r("nullthrows")(this.captureParams)));
			var I = this.__lastCapturedStream;
			I != null && (o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.resetFirstFrameReceivedForJid(o("WAWebVoipVideoRendererInterface").selfPreviewJid), this.__monitorFrameProduction(I));
			var T = E != null ? E : b;
			this.currentDeviceId !== T && (this.currentDeviceId = T, r("isStringNullOrEmpty")(T) || o("WAWebUserPrefsVoip").setSelectedVideoInputDevice(T), te.trigger("deviceSelectionChanged", [T]), o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
				"[AV:startCameraCapture] device changed: requested=",
				", actual=",
				""
			])), b, T)), o("WAWebUA").UA.isFirefox && s != null && (te.trigger("deviceListRefreshRequested", []), o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["[AV:startCameraCapture] Firefox popout camera capture ready, refreshing device list"]))));
		}, n.startWithStream = async function(t, n, a, i, l) {
			var e = this;
			if (l === void 0 && (l = !1), o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
				"[AV:startWithStream] w=",
				" h=",
				" fps=",
				" track=",
				""
			])), n, a, i, String(l)), this.captureParams = {
				width: n,
				height: a,
				maxFps: i
			}, this.__lastTargetWindow = null, await this.__startCapture({
				getMediaStream: async function() {
					return t;
				},
				onVideoDataFnType: "onVideoDataFromJs",
				width: n,
				height: a,
				maxFps: i
			}), o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.resetFirstFrameReceivedForJid(o("WAWebVoipVideoRendererInterface").selfPreviewJid), l) {
				var s = this.__lastCapturedStream;
				s != null && s !== t && ne.delete(s), this.__lastCapturedStream = t, ne.add(t);
				var u = t.getVideoTracks().at(0);
				u == null || u.addEventListener("ended", async function() {
					if (!(o("WAWebVoipPopoutWindowState").getIsCameraStreamReacquisitionInProgress() || e.__lastCapturedStream !== t)) {
						o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["[AV:startWithStream] stream ended, muting video"])));
						try {
							var n = await o("WAWebVoipStackInterface").getVoipStackInterface();
							(n == null ? void 0 : n.type) === "web" && await n.setCallVideoMute(!0);
						} catch (e) {
							o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose(["[AV:startWithStream] mute on stream-ended failed"]))).catching(r("getErrorSafe")(e)).sendLogs("voip-popout-reuse-ended-mute-failed");
						}
					}
				});
			}
		}, n.getLastCapturedStream = function() {
			return this.__lastCapturedStream;
		}, n.switchVideoDevice = async function(t, n) {
			var e = "voip: switchVideoDevice (" + this.name + ")";
			if (o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
				"",
				" switching to device: ",
				""
			])), e, t), !await this.__ensureRestartableForSwitch(e)) return !1;
			var r = this.captureParams;
			if (r == null) return o("WALogger").ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose(["", " capture params not available"])), e), !1;
			var a = await o("WAWebBackendApi").frontendSendAndReceive("getIsValidVideoDevice", {
				deviceId: t,
				targetWindow: n,
				isInActiveCall: !0
			});
			if (!a) return o("WALogger").ERROR(L || (L = babelHelpers.taggedTemplateLiteralLoose([
				"",
				" device not found in available devices: ",
				""
			])), e, t), !1;
			var i = this.currentDeviceId;
			this.__healthCheckRetryCount = 0;
			try {
				await this.__cleanup(), await this.startCameraCapture({
					camera_id_requested: t,
					height: r.height,
					isAVUpgrade: !1,
					max_fps: r.maxFps,
					targetWindow: n,
					width: r.width
				});
			} catch (e) {
				if (o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:switchVideoDevice] error switching device: ", ""])), e), i != null && i !== "") {
					o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose(["[AV:switchVideoDevice] rollback to: ", ""])), i);
					try {
						var l = this.captureParams;
						l != null && await this.startCameraCapture({
							camera_id_requested: i,
							height: l.height,
							isAVUpgrade: !1,
							max_fps: l.maxFps,
							targetWindow: n,
							width: l.width
						});
					} catch (e) {
						o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose(["[AV:switchVideoDevice] rollback failed: ", ""])), e);
					}
				}
				return !1;
			}
			return o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose(["[AV:switchVideoDevice] switched to: ", ""])), t), !0;
		}, n.__ensureRestartableForSwitch = async function(t) {
			if (this.captureInitState === o("WAWebVoipVideoCaptureBase").CaptureInitState.Initializing && this.captureInitResolvable != null) {
				var e = this.captureInitResolvable;
				o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose(["", " capture still initializing, waiting for ready"])), t);
				var n = !1;
				try {
					await e.promise;
				} catch (e) {
					n = !0, o("WALogger").ERROR(x || (x = babelHelpers.taggedTemplateLiteralLoose(["", " capture initialization failed while waiting"])), t);
				}
				if (this.captureInitResolvable !== e) return o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose(["", " capture init resolvable changed while waiting, aborting switch"])), t), !1;
				if (!n && this.captureInitState !== o("WAWebVoipVideoCaptureBase").CaptureInitState.Ready) return o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose(["", " capture not ready after init wait, aborting switch"])), t), !1;
				n && o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose(["", " continuing switch after failed capture initialization"])), t);
			}
			return this.captureInitState !== o("WAWebVoipVideoCaptureBase").CaptureInitState.Ready && this.captureInitState !== o("WAWebVoipVideoCaptureBase").CaptureInitState.Error && this.captureInitState !== o("WAWebVoipVideoCaptureBase").CaptureInitState.Uninitialized ? (o("WALogger").ERROR(M || (M = babelHelpers.taggedTemplateLiteralLoose([
				"",
				` video capture not restartable,
      current state: `,
				""
			])), t, this.captureInitState), !1) : (this.captureInitState !== o("WAWebVoipVideoCaptureBase").CaptureInitState.Ready && o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose([
				"",
				" restarting capture from state: ",
				""
			])), t, this.captureInitState), !0);
		}, n.__monitorFrameProduction = function(t) {
			var e, n, a, i, l = this;
			if (r("justknobx")._("5082")) {
				(e = this.__frameMonitorCleanup) == null || e.call(this), this.__frameMonitorCleanup = null;
				var s = 2e3, u = 15e3, c = this.__healthCheckRetryCount === 0, d = c ? u : s, m = 5, p = 0, _ = (n = (a = o("WAWebVoipPopoutWindowState").getPopoutWindow()) == null ? void 0 : a.document) != null ? n : null, f = _ != null ? _ : document;
				o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraHealthCheck] monitoring frame production (doc=", ")"])), _ != null ? "popout" : "main");
				var g = f.createElement("video");
				g.setAttribute("playsinline", ""), g.setAttribute("aria-hidden", "true"), g.muted = !0, g.style.cssText = "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;", g.srcObject = t;
				var h = (i = f.body) != null ? i : document.body;
				if (h == null) {
					o("WALogger").ERROR(F || (F = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraHealthCheck] no document body to host probe video; skipping monitor"]))).sendLogs("voip-camera-health-check-no-body"), g.srcObject = null;
					return;
				}
				h.appendChild(g);
				var y = !1, C = null, b = function() {
					y || (y = !0, C != null && (self.clearTimeout(C), C = null), g.srcObject = null, g.remove(), l.__frameMonitorCleanup === b && (l.__frameMonitorCleanup = null));
				};
				this.__frameMonitorCleanup = b;
				var v = function() {
					y || (o("WALogger").LOG(O || (O = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraHealthCheck] frame received"]))), te.trigger("cameraFrameReceived", []), b());
				}, S = function() {
					if (!y) {
						if (o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.hasReceivedFirstFrameForJid(o("WAWebVoipVideoRendererInterface").selfPreviewJid)) {
							o("WALogger").LOG(B || (B = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraHealthCheck] self preview already rendered a frame"]))), v();
							return;
						}
						if (!o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.hasCanvasForJid(o("WAWebVoipVideoRendererInterface").selfPreviewJid) && p < m) {
							p++, o("WALogger").LOG(W || (W = babelHelpers.taggedTemplateLiteralLoose([
								"voip: [CameraHealthCheck] no consumer canvas yet, deferring verdict (deferral=",
								"/",
								")"
							])), p, m), C = self.setTimeout(S, s);
							return;
						}
						o("WALogger").LOG(q || (q = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraHealthCheck] no frames within timeout (retryCount=", ")"])), l.__healthCheckRetryCount), te.trigger("cameraNotProducingFrames", []), b(), l.__healthCheckRetryCount === 0 ? (l.__healthCheckRetryCount = 1, o("WALogger").LOG(U || (U = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraHealthCheck] auto-retrying camera capture"]))), l.retryCameraCapture()) : (o("WALogger").LOG(V || (V = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraHealthCheck] retry exhausted, notifying UI"]))), te.trigger("cameraHealthCheckFailed", []));
					}
				};
				C = self.setTimeout(S, d), typeof g.requestVideoFrameCallback == "function" ? g.requestVideoFrameCallback(v) : o("WALogger").LOG(H || (H = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraHealthCheck] requestVideoFrameCallback not available, relying on timeout"]))), g.play().then(function() {
					!c || y || (C != null && self.clearTimeout(C), C = self.setTimeout(S, s));
				}, r("WAWebNoop"));
			}
		}, n.stopCapture = async function(n) {
			var t;
			n === void 0 && (n = !1), this.__stopping = !0, (t = this.__frameMonitorCleanup) == null || t.call(this), this.__frameMonitorCleanup = null;
			var r = this.__lastCapturedStream;
			if (this.__lastCapturedStream = null, this.__healthCheckRetryCount = 0, r != null) {
				var a = r.getTracks();
				o("WALogger").LOG(G || (G = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [AV:stopCapture] stopping ",
					" track(s): ",
					""
				])), a.length, a.map(function(e) {
					return e.kind + ":" + e.readyState;
				}).join(", "));
			}
			try {
				await e.prototype.stopCapture.call(this, n);
			} finally {
				var i;
				(i = this.__frameMonitorCleanup) == null || i.call(this), this.__frameMonitorCleanup = null;
				var l = this.__lastCapturedStream;
				if (this.__lastCapturedStream = null, this.__lastTargetWindow = null, r != null) {
					var s = [], u = 0;
					r.getTracks().forEach(function(e) {
						var t = e.readyState;
						e.stop(), u++, s.length < 3 && s.push(e.kind + ":" + t + "->" + e.readyState);
					}), u > 0 && o("WALogger").LOG(z || (z = babelHelpers.taggedTemplateLiteralLoose([
						"voip: [AV:stopCapture] stopped ",
						" track(s) => ",
						""
					])), u, s);
				}
				if (l != null && l !== r) {
					o("WALogger").LOG(j || (j = babelHelpers.taggedTemplateLiteralLoose(["voip: [AV:stopCapture] cleaning up stream leaked during stop"])));
					var c = [], d = 0;
					l.getTracks().forEach(function(e) {
						e.stop(), d++, c.length < 3 && c.push(e.kind + ":" + e.readyState);
					}), d > 0 && o("WALogger").LOG(K || (K = babelHelpers.taggedTemplateLiteralLoose([
						"voip: [AV:stopCapture] stopped ",
						" leaked track(s) => ",
						""
					])), d, c);
				}
				oe("stopCapture"), this.__stopping = !1;
			}
		}, n.retryCameraCapture = async function() {
			if (o("WALogger").LOG(Q || (Q = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraHealthCheck] retrying camera capture"]))), this.__stopping) return o("WALogger").LOG(X || (X = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraHealthCheck] stop in progress, skipping retry"]))), !1;
			if (this.captureParams == null) return o("WALogger").ERROR(Y || (Y = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraHealthCheck] cannot retry, no capture params"]))), !1;
			var e = this.captureParams, t = this.__lastTargetWindow, n = t != null && t.document != null ? t : null;
			try {
				var r;
				return await this.__cleanup(), await this.startCameraCapture({
					camera_id_requested: (r = this.currentDeviceId) != null ? r : "",
					height: e.height,
					isAVUpgrade: !1,
					max_fps: e.maxFps,
					targetWindow: n,
					width: e.width
				}), !0;
			} catch (e) {
				return o("WALogger").ERROR(J || (J = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraHealthCheck] retry failed: ", ""])), e), te.trigger("cameraHealthCheckFailed", []), !1;
			}
		}, n.scheduleCallEndCameraRelease = function() {
			var e = Array.from(ne);
			e.length !== 0 && self.setTimeout(function() {
				var t = 0, n = 0;
				for (var r of e) {
					var a = r.getTracks().filter(function(e) {
						return e.readyState === "live";
					});
					a.length > 0 && (a.forEach(function(e) {
						return e.stop();
					}), n++, t += a.length), ne.delete(r);
				}
				t > 0 && o("WALogger").WARN(Z || (Z = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [AV:cameraReconciliation] callEndBackstop: stopped ",
					" leaked live camera track(s) across ",
					" stream(s) the WASM teardown never released"
				])), t, n).sendLogs("voip-camera-callend-backstop");
			}, re);
		}, t;
	})(o("WAWebVoipVideoCaptureBase").WAWebVoipVideoCaptureBase), ie = new ae();
	l.VideoDeviceEvents = te, l.WAWebVoipVideoCameraCapture = ie;
}), 98);

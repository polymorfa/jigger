__d("WAWebVoipVideoRendererRegistry", [
	"WALogger",
	"WAWebABProps",
	"WAWebAudioDeviceEvents",
	"WAWebBackendApi",
	"WAWebVoipAVSyncController",
	"WAWebVoipAudioCaptureAndPlayback",
	"WAWebVoipAudioPlaybackState",
	"WAWebVoipMediaEnums",
	"WAWebVoipPerfMeasurement",
	"WAWebVoipScreenShareStreamKey",
	"WAWebVoipStackInterface",
	"WAWebVoipVideoOffThreadRendererStub",
	"WAWebVoipVideoRasterRenderer",
	"WAWebVoipVideoRendererInterface",
	"WAWebVoipVideoWebCodecsRenderer",
	"WAWebVoipVideoWebGLRenderer",
	"WAWebVoipVideoWebGPURenderer",
	"WAWebVoipWindowMetrics",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F = 30, O = 5e3, B = 500;
	function W(e) {
		return o("WAWebVoipScreenShareStreamKey").getBaseJidFromStreamKey(e) === o("WAWebVoipVideoRendererInterface").selfPreviewJid;
	}
	function q(e) {
		var t = Number.parseFloat(e);
		return Number.isFinite(t) ? Math.min(1, Math.max(0, t)) : 0;
	}
	var U = (function() {
		function t() {
			this.$14 = new Map(), this.$9 = new Map(), this.$7 = new Map(), this.$8 = new WeakSet(), this.$28 = new Map(), this.$1 = null, this.$3 = null, this.$35 = {
				brightness: 0,
				sharpening: 0
			}, this.$37 = !1, this.$38 = 0, this.$21 = new Map(), this.$22 = new Set(), this.$26 = new Map(), this.$20 = new Map(), this.$10 = new Set(), this.$27 = new Set(), this.$12 = new (o("WAWebVoipAVSyncController")).WAWebVoipAVSyncController(), this.$23 = !1, this.$40 = null, this.$5 = [], this.$16 = new Map(), this.$18 = new Map(), this.$31 = new Map(), this.$30 = new Set(), this.$41 = 0;
		}
		var n = t.prototype;
		return n.init = async function() {
			var t = this;
			try {
				this.$1 = await this.$2();
			} catch (t) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[VideoRendererRegistry] detection failed, fallback RASTER: ", ""])), t), this.$1 = o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.RASTER;
			}
			if (this.$3 = this.$4(this.$1), o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
				"[VideoRendererRegistry] init type=",
				" mode=",
				""
			])), this.$1, this.$3), this.$1 != null && o("WAWebVoipWindowMetrics").setRendererType(this.$1, this.$3), this.$3 === o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererThreadingMode.MAIN_THREAD && o("WAWebVoipVideoWebCodecsRenderer").setFatalErrorCallback(function() {
				return t.onDecoderFatalError();
			}), this.$5.length > 0) {
				o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[VideoRendererRegistry] flushing ", " pending"])), this.$5.length);
				for (var n of this.$5) {
					var r = n.canvas, a = n.portalMode;
					this.$6(r, a);
				}
				this.$5 = [];
			}
		}, n.getRendererType = function() {
			var e = this.$1;
			if (e == null) throw r("err")("init() must be called before getRendererType");
			return e;
		}, n.registerVideoCanvas = function(t, n) {
			if (this.$1 == null || this.$3 == null) {
				o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[VideoRendererRegistry] init() pending, queuing canvas"]))), this.$5.push({
					canvas: t,
					portalMode: n
				});
				return;
			}
			this.$6(t, n);
		}, n.assignJidToCanvas = function(t) {
			var e = t.canvas, n = t.mirror, r = t.userJid, a = this.$7.get(e);
			a != null && a !== r && (o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
				"[VideoRendererRegistry] reassign ",
				" from ",
				""
			])), r, a), this.unassignJidFromCanvas(a, e)), a !== r && this.$8.delete(e);
			var i = this.$9.get(r), l = i == null || i.size === 0;
			l && this.$10.delete(r) && this.$11(r), i ? i.set(e, n) : this.$9.set(r, new Map([[e, n]])), this.$7.set(e, r), this.$12.removeParticipant(r), this.$13(r, "assign_canvas");
		}, n.unassignJidFromCanvas = function(t, n) {
			var e = this.$9.get(t);
			if (!(e == null || !e.has(n))) {
				e.delete(n), this.$7.delete(n), this.$8.delete(n);
				var r = this.$14.get(n);
				r == null || r.reset(), e.size === 0 && this.$15(t);
			}
		}, n.unassignCanvas = function(t) {
			var e = this.$7.get(t);
			e != null ? this.unassignJidFromCanvas(e, t) : o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: VideoRendererRegistry: Canvas not found in registry"])));
		}, n.pauseRenderingForJid = function(t) {
			this.$16.set(t, !1), this.$17(t);
		}, n.resumeRenderingForJid = function(t) {
			var e = this.$16.get(t);
			e != null && (this.$16.delete(t), (e || this.$18.has(t)) && this.$13(t, "resume_rendering"));
		}, n.$17 = function(t) {
			if (!(this.$1 !== o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.WEBCODECS_H264 || o("WAWebABProps").getABPropConfigValue("enable_webcodec_require_keyframe") !== !0)) {
				o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[VideoRendererRegistry] resetWebCodecs ", " — await keyframe"])), t), this.$18.set(t, 0);
				var e = this.$9.get(t);
				if (e) for (var n of e) {
					var a = n[0], i = this.$14.get(a);
					(i instanceof o("WAWebVoipVideoWebCodecsRenderer").WAWebVoipVideoWebCodecsRenderer || i instanceof r("WAWebVoipVideoOffThreadRendererStub")) && i.requireKeyframe();
				}
			}
		}, n.unregisterVideoCanvas = function(t) {
			this.unassignCanvas(t), this.$19(t), this.$5 = this.$5.filter(function(e) {
				return e.canvas !== t;
			});
		}, n.onVideoFrameWasmToJs = function(t, n, r, a, i, l, s, u) {
			var e, c;
			W(t) ? o("WAWebVoipPerfMeasurement").endMeasurement(o("WAWebVoipPerfMeasurement").PerfMeasurement.FIRST_CAMERA_FRAME) : o("WAWebVoipPerfMeasurement").endMeasurement(o("WAWebVoipPerfMeasurement").PerfMeasurement.FIRST_PEER_FRAME);
			var d = this.$20.get(t);
			d != null ? (d.frameCount += 1, d.lastFrameTimestampMs = window.performance.now(), d.lastWidth = r, d.lastHeight = a) : this.$20.set(t, {
				frameCount: 1,
				lastFrameTimestampMs: window.performance.now(),
				lastWidth: r,
				lastHeight: a
			});
			var m = (e = o("WAWebVoipMediaEnums").Orientation.cast(i)) != null ? e : o("WAWebVoipMediaEnums").Orientation.Normal, p = m === o("WAWebVoipMediaEnums").Orientation.Rotate90 || m === o("WAWebVoipMediaEnums").Orientation.Rotate270, _ = p ? a : r, f = p ? r : a, g = this.$21.get(t);
			if (g == null || g.width !== _ || g.height !== f) {
				this.$21.set(t, {
					width: _,
					height: f
				});
				for (var h of this.$22) h(t, _, f);
			}
			var y = (c = o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.cast(l)) != null ? c : o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.UNKNOWN;
			if (!W(t) && !this.$23 && !this.$12.isEnabled() && this.$24(), this.$12.isEnabled() && !W(t)) {
				this.$12.enqueueVideoFrame({
					userJid: t,
					frameBuffer: n,
					width: r,
					height: a,
					orientation: i,
					format: y,
					timestamp: s,
					isKeyFrame: u
				});
				return;
			}
			this.$25(t, n, r, a, i, y, s, u);
		}, n.getVideoDimensions = function(t) {
			var e;
			return (e = this.$21.get(t)) != null ? e : null;
		}, n.hasCanvasForJid = function(t) {
			var e = this.$9.get(t);
			return e != null && e.size > 0;
		}, n.getDecodeStatsForJid = function(t) {
			var e;
			return (e = this.$20.get(t)) != null ? e : null;
		}, n.getLastPaintTimestampMsForJid = function(t) {
			var e;
			return (e = this.$26.get(t)) != null ? e : null;
		}, n.addVideoDimensionChangeListener = function(t) {
			var e = this;
			return this.$22.add(t), function() {
				e.$22.delete(t);
			};
		}, n.hasReceivedFirstFrameForJid = function(t) {
			return this.$10.has(t);
		}, n.resetFirstFrameReceivedForJid = function(t) {
			this.$10.delete(t) && this.$11(t);
		}, n.addFirstFrameReceivedListener = function(t) {
			var e = this;
			return this.$27.add(t), function() {
				e.$27.delete(t);
			};
		}, n.hasRenderedFirstFrameForCanvas = function(t) {
			return this.$8.has(t);
		}, n.addFirstFrameRenderedListenerForCanvas = function(t, n) {
			var e = this, r = this.$28.get(t);
			return r == null && (r = new Set(), this.$28.set(t, r)), r.add(n), function() {
				var o, a;
				(o = r) == null || o.delete(n), ((a = r) == null ? void 0 : a.size) === 0 && e.$28.get(t) === r && e.$28.delete(t);
			};
		}, n.$11 = function(t) {
			for (var e of this.$27) try {
				e(t);
			} catch (e) {
				o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["voip: VideoRendererRegistry: firstFrameReceivedListener error: ", ""])), e);
			}
		}, n.$29 = function(t) {
			var e;
			if (!(!this.$7.has(t) || this.$8.has(t))) {
				this.$8.add(t);
				var n = Array.from((e = this.$28.get(t)) != null ? e : []);
				for (var r of n) try {
					r();
				} catch (e) {
					o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: VideoRendererRegistry: canvas first-frame listener error: ", ""])), e);
				}
			}
		}, n.onCanvasResize = function(t, n, r) {
			try {
				var e = this.$14.get(t);
				if (!e) return;
				e.onCanvasResize(n, r);
			} catch (e) {
				o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["voip: VideoRendererRegistry: onCanvasResize : ", ""])), e);
			}
		}, n.setCoverFit = function(t, n) {
			try {
				var e = this.$14.get(t);
				if (!e) return;
				e.setCoverFit(n);
			} catch (e) {
				o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: VideoRendererRegistry: setCoverFit : ", ""])), e);
			}
		}, n.requestKeyFrameForCanvas = function(t) {
			var e = this.$7.get(t);
			e != null && this.$13(e, "canvas_request");
		}, n.$13 = async function(t, n) {
			if (n === void 0 && (n = "unspecified"), !W(t)) {
				var e = Date.now();
				if (!this.$30.has(t)) {
					var r = this.$31.get(t);
					if (!(r != null && e - r < B)) {
						this.$30.add(t), this.$31.set(t, e);
						try {
							var a = await o("WAWebVoipStackInterface").getVoipStackInterface();
							if ((a == null ? void 0 : a.type) !== "web") return;
							var i = await a.requestKeyFrame(t);
							i !== 0 && o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["voip: VideoRendererRegistry: requestKeyFrameForJid failed: ", ""])), i);
						} finally {
							this.$30.delete(t);
						}
					}
				}
			}
		}, n.$25 = function(t, n, r, o, a, i, l, s) {
			var e = this.$9.get(t);
			if (e && !this.$32(t, r, o, s)) {
				var u = this.$33(e, t, n, r, o, a, i, l, s);
				u && this.$26.set(t, window.performance.now()), u && !this.$10.has(t) && (this.$10.add(t), this.$11(t));
			}
		}, n.$32 = function(t, n, r, a) {
			if (this.$16.has(t)) return a && this.$16.set(t, !0), !0;
			var e = this.$18.get(t);
			if (e != null) if (a) o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
				"[VideoRendererRegistry] keyframe rcvd ",
				" after ",
				" drops — resume"
			])), t, e), this.$18.delete(t);
			else {
				if (e < F) return this.$18.set(t, e + 1), !0;
				o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
					"[VideoRendererRegistry] keyframe timeout ",
					" ",
					" drops — reactive"
				])), t, F), this.$18.delete(t);
			}
			return n % 2 !== 0 || r % 2 !== 0 ? (o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose([
				"[VideoRendererRegistry] renderFrame: odd frame ",
				"x",
				""
			])), n, r), !0) : !1;
		}, n.$33 = function(t, n, r, a, i, l, s, u, c) {
			var e = !1;
			for (var d of t.entries()) {
				var m = d[0], p = d[1], _ = this.$14.get(m);
				if (_) try {
					var f;
					_.renderFrame({
						format: s,
						frameBuffer: r,
						height: i,
						isKeyFrame: c,
						mirror: p,
						orientation: (f = o("WAWebVoipMediaEnums").Orientation.cast(l)) != null ? f : o("WAWebVoipMediaEnums").Orientation.Normal,
						timestamp: u,
						width: a
					}), e = !0;
				} catch (e) {
					if (e instanceof o("WAWebVoipVideoWebCodecsRenderer").KeyFrameNeededError) {
						this.$13(n, "renderer_need_keyframe");
						continue;
					}
					o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose(["voip: VideoRendererRegistry: renderFrame: ", ""])), e);
				}
			}
			return e;
		}, n.$4 = function(t) {
			var e;
			return r("WAWebVoipVideoOffThreadRendererStub").checkAvailability() ? t === o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.WEBGL ? e = o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererThreadingMode.POOLED_WORKERS : e = o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererThreadingMode.SINGLE_WORKER : e = o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererThreadingMode.MAIN_THREAD, o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose(["[VideoRendererRegistry] threadingMode=", " (compat)"])), e), e;
		}, n.$2 = async function() {
			var e, t = o("WAWebABProps").getABPropConfigValue("web_voip_video_renderer"), n = (e = o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.cast(t)) != null ? e : o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.DEFAULT;
			return n !== o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.DEFAULT ? (o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose(["[VideoRendererRegistry] rendererType=", " (ABProp)"])), n), n) : (await o("WAWebVoipVideoWebCodecsRenderer").WAWebVoipVideoWebCodecsRenderer.checkAvailability() ? n = o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.WEBCODECS_H264 : await r("WAWebVoipVideoWebGPURenderer").checkAvailability() ? n = o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.WEBGPU : r("WAWebVoipVideoWebGLRenderer").checkAvailability() ? n = o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.WEBGL : await o("WAWebVoipVideoRasterRenderer").WAWebVoipVideoFrameRenderer.checkAvailability() ? n = o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.VIDEOFRAME : n = o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.RASTER, o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose(["[VideoRendererRegistry] rendererType=", " (compat)"])), n), n);
		}, n.$6 = function(t, n) {
			try {
				var e;
				if (this.$14.has(t)) throw r("err")("canvas already registered");
				var a = this.$1, i = this.$3;
				if (a == null || i == null) throw r("err")("init() must be called before registering canvases");
				if (i !== o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererThreadingMode.MAIN_THREAD) {
					o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
						"[VideoRendererRegistry] offthread ",
						" ",
						" portal=",
						""
					])), a, i, n);
					var l = new (r("WAWebVoipVideoOffThreadRendererStub"))({
						canvas: t,
						portalMode: n,
						rendererType: a,
						threadingMode: i
					});
					this.$14.set(t, l), this.$34(t, l);
					return;
				}
				var s = (e = t.ownerDocument) == null ? void 0 : e.defaultView, u = s != null && s !== self && typeof s.VideoDecoder == "function" ? s.VideoDecoder : void 0, c = a === o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.WEBCODECS_H264 ? new (o("WAWebVoipVideoWebCodecsRenderer")).WAWebVoipVideoWebCodecsRenderer(t, u) : a === o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.WEBGPU ? new (r("WAWebVoipVideoWebGPURenderer"))(t) : a === o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.WEBGL ? new (r("WAWebVoipVideoWebGLRenderer"))(t) : a === o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.VIDEOFRAME ? new (o("WAWebVoipVideoRasterRenderer")).WAWebVoipVideoFrameRenderer(t) : new (o("WAWebVoipVideoRasterRenderer")).WAWebVoipVideoRasterRenderer(t);
				this.$14.set(t, c), this.$34(t, c);
			} catch (e) {
				o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose(["voip: VideoRendererRegistry: registerCanvasToRegistry: ", ""])), e);
			}
		}, n.$34 = function(t, n) {
			var e = this;
			n.setRenderCallback(function() {
				e.$29(t);
			}), n.setVideoEnhancement(this.$35.brightness, this.$35.sharpening), this.$36();
		}, n.$36 = async function() {
			if (!this.$37) {
				this.$37 = !0;
				var e = this.$38;
				try {
					var t = await o("WAWebVoipStackInterface").getVoipStackInterface();
					if ((t == null ? void 0 : t.type) !== "web") return;
					var n = await Promise.all([t.getVoipParam("options.video_brightness_setting"), t.getVoipParam("options.video_sharpening_setting")]), r = n[0], a = n[1];
					if (e !== this.$38) return;
					var i = q(r), l = q(a);
					this.$35 = {
						brightness: i,
						sharpening: l
					}, o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
						"[VideoRendererRegistry] video enhancement brightness=",
						" sharpening=",
						""
					])), i, l);
					for (var s of this.$14.values()) s.setVideoEnhancement(i, l);
				} catch (e) {
					o("WALogger").ERROR(D || (D = babelHelpers.taggedTemplateLiteralLoose(["voip: VideoRendererRegistry: loadVideoEnhancement failed: ", ""])), e);
				}
			}
		}, n.resetVideoEnhancementState = function() {
			this.$38++, this.$37 = !1, this.$35 = {
				brightness: 0,
				sharpening: 0
			};
			for (var e of this.$14.values()) e.setVideoEnhancement(0, 0);
		}, n.reloadVideoEnhancement = function() {
			this.$38++, this.$37 = !1, this.$36();
		}, n.$39 = function(t, n) {
			var e = this;
			o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose(["voip: VideoRendererRegistry: enabling A/V sync, sampleRate=", ""])), t), this.$12.enable(t, function(t, n, r, o, a, i, l, s) {
				e.$25(t, n, r, o, a, i, l, s);
			}, n, function(t) {
				o("WALogger").WARN($ || ($ = babelHelpers.taggedTemplateLiteralLoose(["voip: VideoRendererRegistry: AV sync video reset for ", ", requesting keyframe"])), t), e.$17(t), e.$13(t, "av_sync_video_reset");
			}), this.$40 = function(t) {
				e.$12.reset();
			}, o("WAWebAudioDeviceEvents").AudioDeviceEvents.on("speakerDeviceSelectionChanged", this.$40);
		}, n.disableAVSync = function() {
			this.$12.isEnabled() && (o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose(["voip: VideoRendererRegistry: disabling A/V sync"]))), this.$12.disable());
			var e = this.$40;
			e != null && (o("WAWebAudioDeviceEvents").AudioDeviceEvents.off("speakerDeviceSelectionChanged", e), this.$40 = null), this.$23 = !1;
		}, n.consumeAVSyncMetrics = function() {
			return this.$12.consumeMetrics();
		}, n.peekPerParticipantAVSyncMetrics = function(t) {
			return this.$12.peekPerParticipantMetrics(t);
		}, n.onDecoderFatalError = function() {
			this.$41++;
		}, n.consumeWebCodecsFatalErrorCount = function() {
			var e = this.$41;
			return this.$41 = 0, e;
		}, n.removeParticipantAVSync = function(t) {
			this.$12.removeParticipant(t);
		}, n.$24 = async function() {
			this.$23 = !0;
			try {
				var e, t = await o("WAWebVoipAudioCaptureAndPlayback").waitForPlaybackStart(O);
				if (!t) {
					this.$23 = !1, o("WALogger").WARN(N || (N = babelHelpers.taggedTemplateLiteralLoose(["voip: VideoRendererRegistry: timed out waiting ", "ms for audio playback start before enabling A/V sync"])), O);
					return;
				}
				var n = await o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm"), r = (e = o("WAWebVoipAudioPlaybackState").getPlaybackSampleRate()) != null ? e : 16e3;
				this.$39(r, function() {
					var e = n.getAudioPlaybackTimestamp(), t = o("WAWebVoipAudioCaptureAndPlayback").getEstimatedPlaybackOutputLagSamples();
					return Math.max(0, e - t);
				});
			} catch (e) {
				this.$23 = !1, o("WALogger").ERROR(M || (M = babelHelpers.taggedTemplateLiteralLoose(["voip: VideoRendererRegistry: initAVSync failed: ", ""])), e);
			}
		}, n.$15 = function(t) {
			this.$42(t), this.$10.delete(t) && this.$11(t);
		}, n.$42 = function(t) {
			this.$9.delete(t), this.$16.delete(t), this.$18.delete(t), this.$31.delete(t), this.$30.delete(t), this.$21.delete(t), this.$20.delete(t), this.$26.delete(t);
		}, n.$19 = function(t) {
			try {
				var e = this.$14.get(t);
				if (!e) return;
				e.cleanup(), this.$14.delete(t), this.$8.delete(t), this.$28.delete(t);
				var n = this.$7.get(t);
				if (n != null) {
					this.$7.delete(t);
					var r = this.$9.get(n);
					r != null && (r.delete(t), r.size === 0 && (this.$42(n), this.$10.delete(n)));
				}
				o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose(["[VideoRendererRegistry] unregister canvas, left=", ""])), this.$14.size);
			} catch (e) {
				o("WALogger").ERROR(A || (A = babelHelpers.taggedTemplateLiteralLoose(["voip: VideoRendererRegistry: unregisterCanvasFromRegistry: ", ""])), e);
			}
		}, t;
	})(), V = new U();
	l.WAWebVoipVideoRendererRegistry = U, l.videoRendererRegistry = V;
}), 98);

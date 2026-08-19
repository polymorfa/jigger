__d("WAWebVoipWebCodecsEncoder", [
	"WAWebVoipMediaEnums",
	"WAWebVoipVideoCaptureOffThread",
	"WAWebVoipVideoFrameCtor",
	"WAWebVoipVideoRendererInterface",
	"WAWebVoipWebCodecsEncoderState"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F, O, B, W, q, U, V, H;
	function G(e) {
		for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
		self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
			level: 3,
			message: String.raw.apply(String, [{ raw: e }].concat(n))
		});
	}
	function z(e) {
		for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
		self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
			level: 1,
			message: String.raw.apply(String, [{ raw: e }].concat(n))
		});
	}
	var j = new Map(), K = 5e3, Q = 3e3, X = 3, Y = 1e3, J = 4e3, Z = null, ee = null;
	function te() {
		try {
			var e = new OffscreenCanvas(4, 2), t = e.getContext("2d");
			if (t == null) return !1;
			t.fillStyle = "#ff0000", t.fillRect(0, 0, 2, 2), t.fillStyle = "#0000ff", t.fillRect(2, 0, 2, 2);
			var n = new VideoFrame(e, { timestamp: 0 }), r = new OffscreenCanvas(2, 2), o = r.getContext("2d");
			if (o == null) return n.close(), !1;
			o.drawImage(n, 0, 0, 2, 2, 0, 0, 2, 2), n.close();
			var a = o.getImageData(1, 1, 1, 1).data;
			return a[0] > 200 && a[2] < 50;
		} catch (e) {
			return !1;
		}
	}
	function ne() {
		return {
			encoder: null,
			frameCounter: 0,
			lastKeyFrameTime: 0,
			currentBitrate: 5e5,
			currentWidth: 640,
			currentHeight: 480,
			currentFps: 30,
			requestKeyframe: !1,
			rateControlInitialized: !1,
			fpsPacingCredit: 0,
			fpsPacingLastFrameTime: 0,
			fpsPacingDropCount: 0,
			fpsPacingEncodeCount: 0,
			encodeStartTimes: new Map(),
			latencyMin: 1 / 0,
			latencyMax: 0,
			latencySum: 0,
			latencyCount: 0,
			latencyLastLogTime: 0,
			consecutiveFatalErrors: 0,
			lastFatalErrorTime: 0,
			preferSoftwareEncoder: !1,
			portDetached: !1,
			lastPortAvailable: !1,
			reattachFailures: 0,
			lastReattachFailureTime: 0,
			cropCanvas: null,
			cropCanvasCtx: null,
			isScreenShare: !1
		};
	}
	function re(e) {
		return e & -2;
	}
	function oe(e) {
		return {
			codec: o("WAWebVoipWebCodecsEncoderState").getH264CodecString(e.currentWidth, e.currentHeight, e.currentFps),
			width: e.currentWidth,
			height: e.currentHeight,
			bitrate: e.currentBitrate,
			framerate: e.currentFps,
			hardwareAcceleration: e.preferSoftwareEncoder ? "prefer-software" : "prefer-hardware",
			latencyMode: "realtime",
			bitrateMode: "variable",
			avc: { format: "annexb" }
		};
	}
	function ae(e) {
		return e <= 0 ? 0 : Math.min(Y * Math.pow(2, e - 1), J);
	}
	function ie(t, n) {
		var r = "voip: [webcodec-encode][stream=" + t + "]";
		return new VideoEncoder({
			output: function(i, l) {
				var a, s, u, c, d;
				n.consecutiveFatalErrors = 0;
				var m = n.encodeStartTimes.get(i.timestamp), p = 0;
				if (m != null) {
					n.encodeStartTimes.delete(i.timestamp);
					var _ = Date.now();
					if (p = _ - m, n.latencyMin = Math.min(n.latencyMin, p), n.latencyMax = Math.max(n.latencyMax, p), n.latencySum += p, n.latencyCount++, _ - n.latencyLastLogTime >= K) {
						var f = n.latencyCount > 0 ? (n.latencySum / n.latencyCount).toFixed(1) : "0";
						G(e || (e = babelHelpers.taggedTemplateLiteralLoose([
							"",
							" encode latency (5s): min=",
							"ms max=",
							"ms avg=",
							"ms (",
							" frames) pacing=",
							"enc/",
							"drop@",
							"fps"
						])), r, n.latencyMin, n.latencyMax, f, n.latencyCount, n.fpsPacingEncodeCount, n.fpsPacingDropCount, n.currentFps), n.latencyMin = 1 / 0, n.latencyMax = 0, n.latencySum = 0, n.latencyCount = 0, n.fpsPacingEncodeCount = 0, n.fpsPacingDropCount = 0, n.latencyLastLogTime = _;
					}
				}
				var g = (a = l == null || (s = l.decoderConfig) == null ? void 0 : s.codedWidth) != null ? a : n.currentWidth, h = (u = l == null || (c = l.decoderConfig) == null ? void 0 : c.codedHeight) != null ? u : n.currentHeight, y = (d = o("WAWebVoipVideoCaptureOffThread").encodedFrameOrientations.get(i.timestamp)) != null ? d : o("WAWebVoipVideoCaptureOffThread").getCurrentWorkerOrientation();
				Le(t, n, i, g, h, p, y);
			},
			error: (function(e) {
				function t(t) {
					return e.apply(this, arguments);
				}
				return t.toString = function() {
					return e.toString();
				}, t;
			})(function(e) {
				n.encoder = null, n.consecutiveFatalErrors++, n.lastFatalErrorTime = Date.now(), n.consecutiveFatalErrors >= 2 && (n.preferSoftwareEncoder = !0), n.consecutiveFatalErrors > X ? z(s || (s = babelHelpers.taggedTemplateLiteralLoose([
					"",
					" encoder fatal error, max recovery attempts (",
					") exceeded: ",
					""
				])), r, X, e.message) : z(u || (u = babelHelpers.taggedTemplateLiteralLoose([
					"",
					" encoder fatal error, will attempt recovery (",
					"/",
					"): ",
					""
				])), r, n.consecutiveFatalErrors, X, e.message);
			})
		});
	}
	function le(e) {
		var t = j.get(e);
		if ((t == null ? void 0 : t.encoder) != null) try {
			t.encoder.close();
		} catch (e) {}
		j.delete(e);
	}
	function se() {
		for (var e of Array.from(j.keys())) le(e);
		_e = null, fe = null;
	}
	function ue(e, t) {
		var n = "voip: [webcodec-encode][stream=" + e + "]";
		if (t.encoder != null && t.encoder.state === "configured") return t.encoder;
		if (t.consecutiveFatalErrors === 0 || t.consecutiveFatalErrors > X || Date.now() - t.lastFatalErrorTime < Y) return null;
		G(c || (c = babelHelpers.taggedTemplateLiteralLoose([
			"",
			" recreating encoder after fatal error (attempt ",
			"/",
			")"
		])), n, t.consecutiveFatalErrors, X);
		var r = null;
		try {
			return r = ie(e, t), r.configure(oe(t)), t.encoder = r, t.requestKeyframe = !0, r;
		} catch (e) {
			if (r != null) try {
				r.close();
			} catch (e) {}
			return t.consecutiveFatalErrors++, t.lastFatalErrorTime = Date.now(), z(d || (d = babelHelpers.taggedTemplateLiteralLoose([
				"",
				" encoder recovery failed (",
				"/",
				"): ",
				""
			])), n, t.consecutiveFatalErrors, X, e), null;
		}
	}
	function ce(e) {
		var t = e.visibleRect;
		return {
			x: t != null ? Math.max(0, Math.floor(t.x)) : 0,
			y: t != null ? Math.max(0, Math.floor(t.y)) : 0
		};
	}
	function de(e, t) {
		var n = r("WAWebVoipVideoFrameCtor")();
		return n == null ? e : new n(e, t);
	}
	function me(e) {
		var t = e.displayWidth, n = e.displayHeight, r = ce(e), o = r.x, a = r.y;
		return e.codedWidth === t && e.codedHeight === n && o === 0 && a === 0 ? e : de(e, {
			visibleRect: {
				x: o,
				y: a,
				width: t,
				height: n
			},
			displayWidth: t,
			displayHeight: n
		});
	}
	function pe(e, t, n, r, o, a, i) {
		return de(e, {
			visibleRect: {
				x: t,
				y: n,
				width: r,
				height: o
			},
			displayWidth: a,
			displayHeight: i
		});
	}
	var _e = null, fe = null;
	function ge(e, t, n, r) {
		if (e != null && e.width === n && e.height === r) return [e, t];
		var o = new OffscreenCanvas(n, r);
		return [o, o.getContext("2d")];
	}
	function he(e, t, n, r, o, a, i, l, s, u) {
		var c, d = ge(_e, fe, t, n);
		_e = d[0], fe = d[1];
		var p = ge(u.cropCanvas, u.cropCanvasCtx, l, s), _ = p[0], f = p[1];
		u.cropCanvas = _, u.cropCanvasCtx = f;
		var g = fe, h = f, y = _e;
		return g == null || h == null || y == null ? (z(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: [webcodec-encode] cropFrame canvas context unavailable, clearing for retry"]))), _e = null, fe = null, u.cropCanvas = null, u.cropCanvasCtx = null, null) : (g.drawImage(e, 0, 0, t, n), h.drawImage(y, r, o, a, i, 0, 0, l, s), new VideoFrame(_, {
			timestamp: e.timestamp,
			duration: (c = e.duration) != null ? c : void 0
		}));
	}
	function ye(e) {
		var t = e.encoderCtx, n = e.frame, r = e.targetH, o = e.targetW, a = n.displayWidth, i = n.displayHeight;
		if (o <= 0 || r <= 0 || a <= 0 || i <= 0) return n;
		var l = re(Math.max(o, 2)), s = re(Math.max(r, 2)), u = me(n), c = a / i, d = l / s;
		if (Math.abs(c - d) < .01) return u;
		var m, p, _, f;
		if (c > d ? (f = i, _ = Math.round(i * d), m = Math.round((a - _) / 2), p = 0) : (_ = a, f = Math.round(a / d), m = 0, p = Math.round((i - f) / 2)), m &= -2, p &= -2, _ &= -2, f &= -2, _ = Math.min(_, a - m), f = Math.min(f, i - p), _ <= 0 || f <= 0) return u;
		var g;
		return ee === !0 ? g = pe(u, m, p, _, f, l, s) : g = he(u, a, i, m, p, _, f, l, s, t), g != null && u !== n && u.close(), g != null ? g : u;
	}
	function Ce(e) {
		var t = Date.now(), n = e.fpsPacingLastFrameTime > 0 ? t - e.fpsPacingLastFrameTime : 0;
		e.fpsPacingLastFrameTime = t;
		var r = Math.max(e.currentFps, 1);
		return n > 0 && n < 1e3 ? e.fpsPacingCredit += r * n / 1e3 : e.fpsPacingCredit = 1, e.fpsPacingCredit < 1 ? (e.fpsPacingDropCount++, !1) : (e.fpsPacingCredit -= 1, e.fpsPacingCredit = Math.min(e.fpsPacingCredit, 1), e.fpsPacingEncodeCount++, !0);
	}
	function be(e) {
		var t = Date.now(), n = t - e.lastKeyFrameTime;
		return e.requestKeyframe || n > Q || e.frameCounter === 0;
	}
	function ve(e) {
		var t = e.streamId, n = "voip: [webcodec-encode][stream=" + t + "]", r = j.get(t);
		r == null && (r = ne(), j.set(t, r), Z != null && t > 0 && (r.currentBitrate = e.targetBitrateBps, r.currentWidth = re(e.targetWidth), r.currentHeight = re(e.targetHeight), r.currentFps = Math.max(e.targetFps, 1), r.encoder = ie(t, r), r.encoder.configure(oe(r)), G(p || (p = babelHelpers.taggedTemplateLiteralLoose([
			"",
			" encoder created and configured: ",
			"x",
			" ",
			"bps ",
			"fps"
		])), n, r.currentWidth, r.currentHeight, r.currentBitrate, r.currentFps))), r.isScreenShare = e.isScreenShare, r.rateControlInitialized || (r.rateControlInitialized = !0, G(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["", " rate control initialized, encoding can begin"])), n));
		var o = re(e.targetWidth), a = re(e.targetHeight), i = Math.max(e.targetFps, 1), l = o !== r.currentWidth || a !== r.currentHeight, s = l || e.targetBitrateBps !== r.currentBitrate || i !== r.currentFps;
		if ((e.requestKeyframe || l) && (r.requestKeyframe = !0), s && r.encoder != null && r.encoder.state === "configured") {
			var u = r.currentBitrate, c = r.currentWidth, d = r.currentHeight, m = r.currentFps;
			r.currentBitrate = e.targetBitrateBps, r.currentWidth = o, r.currentHeight = a, r.currentFps = i, G(f || (f = babelHelpers.taggedTemplateLiteralLoose([
				"",
				" reconfiguring: ",
				"x",
				" bitrate=",
				" fps=",
				""
			])), n, o, a, e.targetBitrateBps, i);
			try {
				r.encoder.configure(oe(r));
			} catch (e) {
				r.currentBitrate = u, r.currentWidth = c, r.currentHeight = d, r.currentFps = m, z(g || (g = babelHelpers.taggedTemplateLiteralLoose([
					"",
					" reconfigure failed: ",
					""
				])), n, e);
			}
		} else r.currentBitrate = e.targetBitrateBps, r.currentWidth = o, r.currentHeight = a, r.currentFps = i;
	}
	async function Se(e) {
		for (var t of j) {
			var n = t[0], r = t[1], o = r.encoder;
			if (o != null) {
				try {
					o.state !== "closed" && (await o.flush(), o.close());
				} catch (t) {
					z(h || (h = babelHelpers.taggedTemplateLiteralLoose([
						"",
						" error closing encoder stream=",
						": ",
						""
					])), e, n, t);
				}
				r.encoder = null;
			}
		}
		j.clear();
	}
	async function Re(e, t, n, r, a, i) {
		r === void 0 && (r = !1), i === void 0 && (i = !1);
		var l = "voip: [webcodec-encode]";
		try {
			var s = async function(t) {
				self.WhatsAppVoipWasmWorkerCompatibleCallbacks.videoCaptureFrameTick();
				try {
					var e = t.displayWidth, r = t.displayHeight;
					!i && !d && (d = !0, G(R || (R = babelHelpers.taggedTemplateLiteralLoose([
						"",
						" camera dimensions: ",
						"x",
						", reporting to VoIP stack"
					])), l, e, r), n.setVideoPreviewSize(e, r)), i && (e !== m || r !== p) && (m = e, p = r, G(L || (L = babelHelpers.taggedTemplateLiteralLoose([
						"",
						" screen share capture size changed: ",
						"x",
						""
					])), l, e, r), n.setScreenShareCaptureSize(e, r));
					var a = o("WAWebVoipMediaEnums").formatEnumFromVideoFrameFormat(t.format), s = t.format === "BGRA";
					if (_ < f) {
						var u, c, h, y, C;
						_++, G(E || (E = babelHelpers.taggedTemplateLiteralLoose([
							"",
							" frame[",
							"] format=",
							" coded=",
							"x",
							" display=",
							"x",
							" colorSpace=",
							"/",
							""
						])), l, _, (u = t.format) != null ? u : "null", t.codedWidth, t.codedHeight, t.displayWidth, t.displayHeight, (c = (h = t.colorSpace) == null ? void 0 : h.primaries) != null ? c : "unknown", (y = (C = t.colorSpace) == null ? void 0 : C.transfer) != null ? y : "unknown");
					}
					try {
						if (a === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12 || a === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.I420 || a === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA || s) {
							var b = re(t.displayWidth), v = re(t.displayHeight), S = ce(t), P = S.x, N = S.y, M = t.allocationSize();
							if ((g.buffer.byteLength === 0 || g.byteLength < M) && (g = new Uint8Array(M)), t.codedWidth !== b || t.codedHeight !== v || P !== 0 || N !== 0 ? await t.copyTo(g, { rect: {
								x: P,
								y: N,
								width: b,
								height: v
							} }) : await t.copyTo(g), s) for (var w = 0; w < g.length; w += 4) {
								var A = g[w];
								g[w] = g[w + 2], g[w + 2] = A;
							}
							self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onVideoFrameWasmToJs({
								userJid: o("WAWebVoipVideoRendererInterface").selfPreviewJid,
								frameBuffer: g.buffer,
								width: b,
								height: v,
								format: s ? o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA : a,
								orientation: o("WAWebVoipVideoCaptureOffThread").getFrameOrientation(t),
								timestamp: 0,
								isKeyFrame: !1,
								isScreenShare: i
							});
						} else if (_ < f) {
							var F;
							G(k || (k = babelHelpers.taggedTemplateLiteralLoose([
								"",
								" skipping self-preview: unrecognized frame format=",
								""
							])), l, (F = t.format) != null ? F : "null");
						}
					} catch (e) {
						_ < f && z(I || (I = babelHelpers.taggedTemplateLiteralLoose([
							"",
							" self-preview error: ",
							""
						])), l, e);
					}
					var O = o("WAWebVoipVideoCaptureOffThread").getFrameOrientation(t);
					o("WAWebVoipVideoCaptureOffThread").encodedFrameOrientations.set(t.timestamp, O);
					var B = n.getEncodedVideoPortMask();
					for (var W of j) {
						var q = W[0], U = W[1], V = (B & 1 << q) !== 0;
						if (V) if (U.portDetached) {
							U.lastPortAvailable = !0;
							var H = ae(U.reattachFailures);
							if (H > 0 && Date.now() - U.lastReattachFailureTime < H) continue;
							G(D || (D = babelHelpers.taggedTemplateLiteralLoose([
								"",
								" stream ",
								" port reattached, recreating encoder"
							])), l, q);
							var K = null;
							try {
								K = ie(q, U), K.configure(oe(U)), U.encoder = K, U.requestKeyframe = !0, U.portDetached = !1, U.reattachFailures = 0, U.consecutiveFatalErrors = 0, U.lastReattachFailureTime = 0;
							} catch (e) {
								if (K != null) try {
									K.close();
								} catch (e) {}
								U.reattachFailures++, U.lastReattachFailureTime = Date.now(), z(x || (x = babelHelpers.taggedTemplateLiteralLoose([
									"",
									" stream ",
									" reattach failed (attempt ",
									"), will retry in ",
									"ms: ",
									""
								])), l, q, U.reattachFailures, ae(U.reattachFailures), e);
							}
						} else U.lastPortAvailable = !0;
						else {
							if (!U.portDetached) {
								if (G(T || (T = babelHelpers.taggedTemplateLiteralLoose([
									"",
									" stream ",
									" port detached, closing encoder"
								])), l, q), U.encoder != null) {
									try {
										U.encoder.close();
									} catch (e) {}
									U.encoder = null;
								}
								U.portDetached = !0;
							}
							U.lastPortAvailable && (U.reattachFailures = 0, U.lastReattachFailureTime = 0), U.lastPortAvailable = !1;
						}
					}
					var Q = !1;
					for (var X of j.values()) if (X.isScreenShare) {
						Q = !0;
						break;
					}
					for (var Y of j) {
						var J = Y[0], Z = Y[1];
						if (!Z.portDetached && Z.rateControlInitialized) {
							var ee = i ? !Q || Z.isScreenShare : !Z.isScreenShare;
							if (ee) {
								var te = ue(J, Z);
								if (te != null && Ce(Z)) {
									var ne = be(Z), le = t.clone(), se = ye({
										encoderCtx: Z,
										frame: le,
										targetH: Z.currentHeight,
										targetW: Z.currentWidth
									});
									try {
										Z.encodeStartTimes.set(t.timestamp, Date.now()), te.encode(se, { keyFrame: ne });
									} finally {
										se !== le && se.close(), le.close();
									}
									Z.frameCounter++, ne && (Z.lastKeyFrameTime = Date.now(), Z.requestKeyframe = !1);
								}
							}
						}
					}
					var de = 150;
					if (o("WAWebVoipVideoCaptureOffThread").encodedFrameOrientations.size > de * 2) for (var me = Array.from(o("WAWebVoipVideoCaptureOffThread").encodedFrameOrientations.keys()), pe = me.length - de, _e = 0; _e < pe; _e++) o("WAWebVoipVideoCaptureOffThread").encodedFrameOrientations.delete(me[_e]);
				} catch (e) {
					z($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
						"",
						" encode error: ",
						""
					])), l, e);
				}
			};
			G(y || (y = babelHelpers.taggedTemplateLiteralLoose([
				"",
				" starting capture ",
				"x",
				"@",
				"fps"
			])), l, t.width, t.height, t.maxFps), o("WAWebVoipVideoCaptureOffThread").updateStopCapture(!1), Z = n, self.WhatsAppVoipWasmWorkerCompatibleCallbacks.videoCaptureFpsReset(), a != null && (o("WAWebVoipVideoCaptureOffThread").updateCurrentWorkerOrientation(a), G(C || (C = babelHelpers.taggedTemplateLiteralLoose([
				"",
				" initial orientation: ",
				""
			])), l, a)), ee == null && (ee = te(), G(b || (b = babelHelpers.taggedTemplateLiteralLoose([
				"",
				" visibleRect crop probe: ",
				""
			])), l, ee ? "supported (fast path)" : "broken (canvas workaround)"));
			var u = 0;
			se();
			var c = ne();
			c.lastKeyFrameTime = Date.now(), c.currentWidth = re(t.width), c.currentHeight = re(t.height), c.currentFps = Math.max(t.maxFps, 1), c.latencyLastLogTime = Date.now(), j.set(u, c), (t.width !== c.currentWidth || t.height !== c.currentHeight) && G(v || (v = babelHelpers.taggedTemplateLiteralLoose([
				"",
				" normalized odd dimensions: ",
				"x",
				" -> ",
				"x",
				""
			])), l, t.width, t.height, c.currentWidth, c.currentHeight);
			var d = !1, m = 0, p = 0, _ = 0, f = 5, g = new Uint8Array(Math.floor(t.width * t.height * 1.5)), h = ie(u, c);
			c.encoder = h;
			var q = oe(c);
			if (h.configure(q), G(S || (S = babelHelpers.taggedTemplateLiteralLoose([
				"",
				" encoder configured: codec=",
				" bitrate=",
				""
			])), l, q.codec, c.currentBitrate), r) o("WAWebVoipVideoCaptureOffThread").registerCaptureAndEncodeFn(s), G(P || (P = babelHelpers.taggedTemplateLiteralLoose(["", " video-element mode: encoder ready, waiting for frames"])), l), await new Promise(function(e) {
				var t = function() {
					o("WAWebVoipVideoCaptureOffThread").getStopCapture() ? e() : globalThis.setTimeout(t, 200);
				};
				t();
			}), G(N || (N = babelHelpers.taggedTemplateLiteralLoose(["", " video-element mode: stop requested"])), l), o("WAWebVoipVideoCaptureOffThread").registerCaptureAndEncodeFn(null), await Se(l);
			else if (e != null) try {
				var U = e.readable || await new MediaStreamTrackProcessor({ track: e.track }).readable;
				G(M || (M = babelHelpers.taggedTemplateLiteralLoose(["", " got MediaStreamTrackProcessor readable"])), l);
				var V = U.getReader();
				for (G(w || (w = babelHelpers.taggedTemplateLiteralLoose(["", " starting capture loop"])), l); !o("WAWebVoipVideoCaptureOffThread").getStopCapture();) {
					var H = await V.read(), K = H.done, Q = H.value;
					try {
						if (K || !Q) {
							o("WAWebVoipVideoCaptureOffThread").updateStopCapture(!0);
							break;
						}
						await s(Q);
					} finally {
						Q == null || Q.close();
					}
				}
				G(A || (A = babelHelpers.taggedTemplateLiteralLoose(["", " finished capture loop"])), l);
			} finally {
				e.track && e.track.stop(), await Se(l);
			}
			else z(F || (F = babelHelpers.taggedTemplateLiteralLoose(["", " captureObject is null in non-videoElement mode"])), l), await Se(l);
		} catch (e) {
			z(O || (O = babelHelpers.taggedTemplateLiteralLoose([
				"",
				" capture error: ",
				""
			])), l, e);
		} finally {
			Z = null;
			try {
				n.exitJsWorkerThread();
			} catch (e) {
				z(B || (B = babelHelpers.taggedTemplateLiteralLoose([
					"",
					" exitJsWorkerThread error: ",
					""
				])), l, e);
			}
			G(W || (W = babelHelpers.taggedTemplateLiteralLoose(["", " exit capture worker thread"])), l);
		}
	}
	function Le(e, t, n, r, o, a, i) {
		var l = "voip: [webcodec-encode][stream=" + e + "]", s = Z;
		if (s == null) {
			z(q || (q = babelHelpers.taggedTemplateLiteralLoose(["", " handleEncodedChunk called with no voipWasm"])), l);
			return;
		}
		try {
			var u = new Uint8Array(n.byteLength);
			n.copyTo(u);
			var c = n.type === "key", d = n.timestamp / 1e3, m = Date.now() - d;
			c && G(U || (U = babelHelpers.taggedTemplateLiteralLoose([
				"",
				" encoded keyframe: size=",
				" captureTsMs=",
				" captureToEncodedMs=",
				" ",
				"x",
				""
			])), l, u.byteLength, d.toFixed(2), m.toFixed(1), r, o);
			var p = s._malloc(u.byteLength), _ = 0;
			try {
				s.GROWABLE_HEAP_U8().set(u, p), _ = s.onEncodedVideoDataFromJsForStream(e, p, u.byteLength, r, o, d, c, a, i);
			} finally {
				s._free(p);
			}
			c && (t.lastKeyFrameTime = Date.now()), _ === 1 && (G(V || (V = babelHelpers.taggedTemplateLiteralLoose(["", " WASM requested keyframe (initial frames dropped)"])), l), t.requestKeyframe = !0);
		} catch (e) {
			z(H || (H = babelHelpers.taggedTemplateLiteralLoose([
				"",
				" error handling encoded chunk: ",
				""
			])), l, e);
		}
	}
	l.updateWebCodecsEncoderParams = ve, l.startVideoCaptureWithWebCodecsEncoderInWorker = Re;
}), 98);

__d("WAWebVoipWebWasmSampleWebcodecLoopback.react", [
	"fbt",
	"WALogger",
	"WAWebFlex.react",
	"WAWebText.react",
	"WAWebVoipGatingUtils",
	"WAWebVoipWebWasmSampleContainer.react",
	"WDSButton.react",
	"asyncToGeneratorRuntime",
	"err",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F, O, B, W, q, U, V, H, G, z, j, K, Q, X, Y, J, Z, ee, te, ne, re, oe, ae, ie, le, se, ue, ce, de, me, pe, _e, fe, ge, he, ye, Ce, be, ve, Se, Re, Le, Ee, ke, Ie, Te, De, xe, $e, Pe, Ne, Me, we = Me || (Me = o("react")), Ae = Me, Fe = Ae.useEffect, Oe = Ae.useRef, Be = Ae.useState, We = { marginHoriz20: {
		marginInlineStart: "x6pxu1d",
		marginInlineEnd: "xd6izgl",
		marginLeft: null,
		marginRight: null,
		$$css: !0
	} }, qe = {
		"720p": {
			width: 1280,
			height: 720,
			label: "1280x720 (HD)"
		},
		"640p": {
			width: 640,
			height: 480,
			label: "640x480 (VGA)"
		},
		"480p": {
			width: 640,
			height: 360,
			label: "640x360 (nHD)"
		},
		"320p": {
			width: 320,
			height: 240,
			label: "320x240 (QVGA)"
		},
		"144p": {
			width: 256,
			height: 144,
			label: "256x144 (FWQVGA)"
		}
	}, Ue = [
		30,
		20,
		15,
		10,
		5
	];
	function Ve() {
		var t = Oe(null), a = Oe(null), i = Oe(null), l = Oe(null), Me = Oe(null), Ae = Oe(null), Ve = Oe(null), He = Oe([]), Ge = Oe(0), ze = Oe(0), je = Oe(0), Ke = Oe(!0), Qe = Be(!1), Xe = Qe[0], Ye = Qe[1], Je = Be(!1), Ze = Je[0], et = Je[1], tt = Oe(!1), nt = Be("Ready to start"), rt = nt[0], ot = nt[1], at = Be(null), it = at[0], lt = at[1], st = Be("640p"), ut = st[0], ct = st[1], dt = Oe(qe["640p"]), mt = Oe(null), pt = Be(30), _t = pt[0], ft = pt[1], gt = Oe(30), ht = Oe(0);
		if (Fe(function() {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Component mounted, initializing canvas text overlays"]))), window.setTimeout(function() {
				o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Timeout executed, attempting to draw text overlays"]))), yt();
				var e = t.current, n = a.current;
				o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
					"[WebCodec] Canvas refs after timeout - self: ",
					", decoded: ",
					""
				])), e != null ? "available" : "null", n != null ? "available" : "null"), e && o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
					"[WebCodec] Self canvas dimensions: ",
					"x",
					", client: ",
					"x",
					""
				])), e.width, e.height, e.clientWidth, e.clientHeight), n && o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
					"[WebCodec] Decoded canvas dimensions: ",
					"x",
					", client: ",
					"x",
					""
				])), n.width, n.height, n.clientWidth, n.clientHeight), self.VideoEncoder !== void 0 ? o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] VideoEncoder API is available"]))) : o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] VideoEncoder API is NOT available - browser may not support WebCodec"]))), self.VideoDecoder !== void 0 ? o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] VideoDecoder API is available"]))) : o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] VideoDecoder API is NOT available - browser may not support WebCodec"]))), self.MediaStreamTrackProcessor !== void 0 ? o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] MediaStreamTrackProcessor API is available"]))) : o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] MediaStreamTrackProcessor API is NOT available - browser may not support this feature"])));
			}, 100);
		}, []), !o("WAWebVoipGatingUtils").isCallingEnabled()) return we.jsx(r("WAWebVoipWebWasmSampleContainer.react"), { children: we.jsx(o("WAWebText.react").WAWebTextLarge, { children: s._(
			/*BTDS*/
			""
		) }) });
		var yt = function() {
			var e = t.current, n = a.current;
			if (o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
				"[WebCodec] Drawing text overlays - selfCanvas: ",
				", decodedCanvas: ",
				""
			])), e != null, n != null), !e && !n) {
				o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Both canvases are null - DOM elements may not be mounted yet"])));
				return;
			}
			if (e) {
				var r = e.getContext("2d");
				r && (r.font = "36px Arial", r.fillStyle = "white", r.strokeStyle = "black", r.lineWidth = 2, r.textAlign = "center", r.textBaseline = "middle", r.fillStyle = "lightgray", r.fillRect(0, 0, e.width, e.height), r.strokeText("Self Video", e.width / 2, 50), r.fillText("Self Video", e.width / 2, 50), o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
					"[WebCodec] Self canvas text overlay drawn - canvas size: ",
					"x",
					""
				])), e.width, e.height));
			} else o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Self canvas not available for text overlay"])));
			if (n) {
				var i = n.getContext("2d");
				i && (i.font = "36px Arial", i.fillStyle = "white", i.strokeStyle = "black", i.lineWidth = 2, i.textAlign = "center", i.textBaseline = "middle", i.fillStyle = "lightblue", i.fillRect(0, 0, n.width, n.height), i.strokeText("WebCodec Video", n.width / 2, 50), i.fillText("WebCodec Video", n.width / 2, 50), o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
					"[WebCodec] Decoded canvas text overlay drawn - canvas size: ",
					"x",
					""
				])), n.width, n.height));
			} else o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Decoded canvas not available for text overlay"])));
		}, Ct = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = He.current;
				if (Ke.current = e.length === 0, !Ke.current) {
					var t = e.shift();
					if (t) {
						var n = a.current;
						if (n) {
							var r = n.getContext("2d");
							r && (o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
								"[WebCodec] Rendering decoded frame - frame size: ",
								"x",
								""
							])), t.displayWidth, t.displayHeight), r.drawImage(t, 0, 0, n.width, n.height), r.font = "24px Arial", r.fillStyle = "white", r.strokeStyle = "black", r.lineWidth = 2, r.textAlign = "center", r.strokeText("WebCodec Video", n.width / 2, 30), r.fillText("WebCodec Video", n.width / 2, 30));
						} else o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Decoded canvas not available for frame rendering"])));
						t.close(), window.setTimeout(Ct, 0);
					}
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), bt = function(t) {
			o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
				"[WebCodec] Received decoded frame - timestamp: ",
				", size: ",
				"x",
				""
			])), t.timestamp, t.displayWidth, t.displayHeight), He.current.push(t), Ke.current && window.setTimeout(Ct, 0);
		}, vt = function(t, n) {
			var e = Ae.current, r = tt.current;
			o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
				"[WebCodec] Received encoded chunk - count: ",
				", type: ",
				", timestamp: ",
				", size: ",
				" bytes, packetDropEnabled: ",
				""
			])), je.current + 1, t.type, t.timestamp, t.byteLength, r), n != null && n.decoderConfig && e && (o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Configuring decoder with new config from metadata"]))), e.configure(n.decoderConfig)), je.current++;
			var a = r && je.current % 10 === 0 && t.type !== "key";
			if (o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
				"[WebCodec] Packet drop check - count: ",
				", mod10: ",
				", isEnabled: ",
				", chunkType: ",
				", willDrop: ",
				""
			])), je.current, je.current % 10, r, t.type, a), a) {
				o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
					"[WebCodec] Dropping packet ",
					" - chunk type: ",
					", timestamp: ",
					""
				])), je.current, t.type, t.timestamp);
				return;
			}
			e ? (o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
				"[WebCodec] Decoding chunk - type: ",
				", timestamp: ",
				", size: ",
				" bytes"
			])), t.type, t.timestamp, t.byteLength), e.decode(t)) : o("WALogger").ERROR(N || (N = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Decoder not available for chunk decoding"])));
		}, St = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose([
					"[WebCodec] Starting encoder/decoder creation with resolution: ",
					"x",
					""
				])), e.width, e.height);
				try {
					var t = {
						codec: "avc1.42001E",
						width: e.width,
						height: e.height,
						bitrate: 1e6,
						framerate: 30
					}, n = {
						output: vt,
						error: function(t) {
							o("WALogger").ERROR(w || (w = babelHelpers.taggedTemplateLiteralLoose(["Encoder error"]))).catching(t), lt("Encoder error: " + t.message);
						}
					};
					o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Checking H.264 encoder support"])));
					var r = yield VideoEncoder.isConfigSupported(t);
					if (o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Encoder support result: ", ""])), JSON.stringify(r)), (r == null ? void 0 : r.supported) !== !0) return lt("H.264 encoding not supported"), !1;
					var a = new VideoEncoder(n);
					a.configure(t), Me.current = a;
					var i = { codec: "avc1.42001E" }, l = {
						output: bt,
						error: function(t) {
							o("WALogger").ERROR(O || (O = babelHelpers.taggedTemplateLiteralLoose(["Decoder error"]))).catching(t), lt("Decoder error: " + t.message);
						}
					};
					o("WALogger").LOG(B || (B = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Checking H.264 decoder support"])));
					var s = yield VideoDecoder.isConfigSupported(i);
					if (o("WALogger").LOG(W || (W = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Decoder support result: ", ""])), JSON.stringify(s)), (s == null ? void 0 : s.supported) !== !0) return lt("H.264 decoding not supported"), !1;
					var u = new VideoDecoder(l);
					return u.configure(i), Ae.current = u, !0;
				} catch (e) {
					var c = typeof e == "object" && e != null && "message" in e ? String(e.message) : String(e);
					return lt("Failed to create encoder/decoder: " + c), !1;
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), Rt = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var e = navigator.mediaDevices;
					if (!e) {
						var t = new Error("MediaDevices API not available");
						throw t.stack, t;
					}
					var n = yield e.getUserMedia({ video: {
						width: 1280,
						height: 720
					} }), r = i.current;
					return r && n && (r.srcObject = n, r.autoplay = !0), l.current = n, !0;
				} catch (e) {
					var o = typeof e == "object" && e != null && "message" in e ? String(e.message) : String(e);
					return lt("Failed to access camera: " + o), !1;
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), Lt = function(t, n, r) {
			var e = mt.current;
			e || (e = document.createElement("canvas"), mt.current = e), e.width = n, e.height = r;
			var o = e.getContext("2d");
			if (!o) {
				var a = new Error("Failed to get 2d context for scaling canvas");
				throw a.stack, a;
			}
			o.drawImage(t, 0, 0, n, r);
			var i = { timestamp: t.timestamp };
			return t.duration != null && (i.duration = t.duration), new VideoFrame(e, i);
		}, Et = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				o("WALogger").LOG(q || (q = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Starting video frame processing"])));
				var e = l.current;
				if (!e) {
					o("WALogger").ERROR(U || (U = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] No media stream available for video processing"])));
					return;
				}
				o("WALogger").LOG(V || (V = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Media stream available, getting video track"])));
				var a = e.getVideoTracks()[0];
				if (!a) {
					o("WALogger").ERROR(H || (H = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] No video track found in media stream"])));
					return;
				}
				o("WALogger").LOG(G || (G = babelHelpers.taggedTemplateLiteralLoose([
					"[WebCodec] Video track found: ",
					", state: ",
					""
				])), a.label, a.readyState);
				try {
					o("WALogger").LOG(z || (z = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Creating MediaStreamTrackProcessor"])));
					var i = new MediaStreamTrackProcessor(a);
					o("WALogger").LOG(j || (j = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] MediaStreamTrackProcessor created successfully"]))), o("WALogger").LOG(K || (K = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Getting readable stream reader"])));
					var s = i.readable.getReader();
					o("WALogger").LOG(Q || (Q = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Readable stream reader obtained"]))), Ve.current = s, ht.current = 0;
					var u = (function() {
						var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
							try {
								o("WALogger").LOG(X || (X = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] About to read frame from stream"])));
								var e = yield s.read(), n = e.done, a = e.value;
								if (o("WALogger").LOG(Y || (Y = babelHelpers.taggedTemplateLiteralLoose([
									"[WebCodec] Frame read result - done: ",
									", frame: ",
									""
								])), n, a != null ? "available" : "null"), n || !a) {
									o("WALogger").LOG(J || (J = babelHelpers.taggedTemplateLiteralLoose([
										"End of video stream - done: ",
										", videoFrame: ",
										""
									])), n, a != null);
									return;
								}
								var i = t.current;
								if (i) {
									var l = i.getContext("2d");
									l && (o("WALogger").LOG(Z || (Z = babelHelpers.taggedTemplateLiteralLoose([
										"[WebCodec] Drawing video frame to self canvas - frame size: ",
										"x",
										""
									])), a.displayWidth, a.displayHeight), l.drawImage(a, 0, 0, i.width, i.height), l.font = "24px Arial", l.fillStyle = "white", l.strokeStyle = "black", l.lineWidth = 2, l.textAlign = "center", l.strokeText("Self Video", i.width / 2, 30), l.fillText("Self Video", i.width / 2, 30));
								} else o("WALogger").LOG(ee || (ee = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Self canvas not available for video frame drawing"])));
								var c = Me.current;
								if (c) if (c.encodeQueueSize > 2) o("WALogger").LOG(te || (te = babelHelpers.taggedTemplateLiteralLoose(["Encoder overwhelmed, dropping frame"]))), a.close();
								else {
									ht.current++;
									var d = gt.current, m = 30 / d, p = ht.current % Math.round(m) === 0;
									if (p) {
										var _ = dt.current, f = a.displayWidth !== _.width || a.displayHeight !== _.height, g = a;
										f && (o("WALogger").LOG(ne || (ne = babelHelpers.taggedTemplateLiteralLoose([
											"[WebCodec] Scaling frame from ",
											"x",
											" to ",
											"x",
											""
										])), a.displayWidth, a.displayHeight, _.width, _.height), g = Lt(a, _.width, _.height), a.close()), ze.current++;
										var h = ze.current % 150 === 0;
										o("WALogger").LOG(re || (re = babelHelpers.taggedTemplateLiteralLoose([
											"[WebCodec] Encoding frame ",
											" at ",
											" FPS, keyFrame: ",
											""
										])), ze.current, d, h), c.encode(g, { keyFrame: h }), g.close();
									} else o("WALogger").LOG(oe || (oe = babelHelpers.taggedTemplateLiteralLoose([
										"[WebCodec] Dropping frame to maintain ",
										" FPS (total frames: ",
										", ratio: ",
										")"
									])), d, ht.current, m), a.close();
								}
								else a.close();
								window.setTimeout(u, 33.333333333333336);
							} catch (e) {
								var y = e instanceof Error ? e : r("err")(String(e));
								o("WALogger").ERROR(ae || (ae = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Error in processFrames loop"]))).catching(y);
								var C = typeof e == "object" && e != null && "message" in e ? String(e.message) : String(e);
								lt("Frame processing error: " + C);
							}
						});
						return function() {
							return e.apply(this, arguments);
						};
					})();
					o("WALogger").LOG(ie || (ie = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Starting frame processing loop"]))), u();
				} catch (e) {
					var c = e instanceof Error ? e : r("err")(String(e));
					o("WALogger").ERROR(le || (le = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Error in processVideoFrames setup"]))).catching(c);
					var d = typeof e == "object" && e != null && "message" in e ? String(e.message) : String(e);
					lt("Video processing error: " + d);
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), kt = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				o("WALogger").LOG(se || (se = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Starting demo"]))), lt(null), ot("Initializing...");
				var e = qe[ut];
				o("WALogger").LOG(ue || (ue = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Creating encoder and decoder"])));
				var t = yield St(e);
				if (!t) {
					o("WALogger").ERROR(ce || (ce = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Failed to initialize encoder/decoder"]))), ot("Failed to initialize encoder/decoder");
					return;
				}
				o("WALogger").LOG(de || (de = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Encoder and decoder created successfully"]))), o("WALogger").LOG(me || (me = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Starting camera"]))), ot("Starting camera...");
				var n = yield Rt();
				if (n && o("WALogger").LOG(pe || (pe = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Camera initialization successful, stream available: ", ""])), l.current != null), !n) {
					o("WALogger").ERROR(_e || (_e = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Failed to start camera"]))), ot("Failed to start camera");
					return;
				}
				o("WALogger").LOG(fe || (fe = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Camera started successfully"]))), Ye(!0), ot("Running"), o("WALogger").LOG(ge || (ge = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Starting video frame processing"]))), Et();
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), It = function() {
			Ye(!1), ot("Stopping...");
			var e = l.current;
			e && (e.getTracks().forEach(function(e) {
				return e.stop();
			}), l.current = null), Me.current && (Me.current.close(), Me.current = null), Ae.current && (Ae.current.close(), Ae.current = null), Ve.current && (Ve.current.cancel(), Ve.current = null), Ge.current = 0, ze.current = 0, je.current = 0, He.current = [], Ke.current = !0, ot("Stopped");
		}, Tt = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				o("WALogger").LOG(he || (he = babelHelpers.taggedTemplateLiteralLoose([
					"[WebCodec] Reconfiguring encoder with resolution: ",
					"x",
					""
				])), e.width, e.height);
				try {
					var t = Me.current, n = Ae.current;
					if (!t || !n) return o("WALogger").ERROR(ye || (ye = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Encoder or decoder not available for reconfiguration"]))), !1;
					o("WALogger").LOG(Ce || (Ce = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Flushing encoder before reconfiguration"]))), yield t.flush();
					var a = {
						codec: "avc1.42001E",
						width: e.width,
						height: e.height,
						bitrate: 1e6,
						framerate: 30
					};
					o("WALogger").LOG(be || (be = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Checking H.264 encoder support for new resolution"])));
					var i = yield VideoEncoder.isConfigSupported(a);
					return (i == null ? void 0 : i.supported) !== !0 ? (o("WALogger").ERROR(ve || (ve = babelHelpers.taggedTemplateLiteralLoose([
						"[WebCodec] H.264 encoding not supported for resolution ",
						"x",
						""
					])), e.width, e.height), !1) : (o("WALogger").LOG(Se || (Se = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Reconfiguring encoder with new resolution"]))), t.configure(a), o("WALogger").LOG(Re || (Re = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Flushing decoder"]))), yield n.flush(), dt.current = e, o("WALogger").LOG(Le || (Le = babelHelpers.taggedTemplateLiteralLoose([
						"[WebCodec] Encoder successfully reconfigured to ",
						"x",
						""
					])), e.width, e.height), !0);
				} catch (e) {
					var l = typeof e == "object" && e != null && "message" in e ? String(e.message) : String(e), s = e instanceof Error ? e : r("err")(l);
					return o("WALogger").ERROR(Ee || (Ee = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Failed to reconfigure encoder"]))).catching(s), lt("Failed to reconfigure encoder: " + l), !1;
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), Dt = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				if (e !== ut) {
					o("WALogger").LOG(ke || (ke = babelHelpers.taggedTemplateLiteralLoose([
						"[WebCodec] Changing resolution from ",
						" to ",
						""
					])), ut, e);
					var t = qe[e];
					if (Xe) {
						o("WALogger").LOG(Ie || (Ie = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Demo is running, reconfiguring encoder on-the-fly"]))), ot("Reconfiguring encoder...");
						var n = yield Tt(t);
						n ? (ct(e), ot("Running"), o("WALogger").LOG(Te || (Te = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Resolution changed to ", " successfully"])), e)) : (o("WALogger").ERROR(De || (De = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Failed to reconfigure encoder, keeping current resolution"]))), ot("Running (reconfiguration failed)"));
					} else ct(e), dt.current = t, o("WALogger").LOG(xe || (xe = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Resolution changed to ", " (demo not running)"])), e);
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), xt = function() {
			var e = !Ze, t = je.current;
			et(e), tt.current = e, e ? (o("WALogger").LOG($e || ($e = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Packet drop ENABLED - will drop every 10th non-key frame. Resetting counter from ", " to 0"])), t), je.current = 0) : o("WALogger").LOG(Pe || (Pe = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Packet drop DISABLED - all frames will be processed. Current counter: ", ""])), t);
		};
		return we.jsx(r("WAWebVoipWebWasmSampleContainer.react"), { children: we.jsxs(o("WAWebFlex.react").FlexColumn, {
			gap: 12,
			xstyle: We.marginHoriz20,
			children: [
				we.jsx(o("WAWebText.react").WAWebTextLarge, { children: s._(
					/*BTDS*/
					""
				) }),
				we.jsx("div", { children: s._(
					/*BTDS*/
					""
				) }),
				we.jsxs("div", { children: [
					s._(
						/*BTDS*/
						""
					),
					" ",
					we.jsxs("select", {
						value: ut,
						onChange: function(t) {
							var e = t.currentTarget, n = e.value;
							(n === "720p" || n === "640p" || n === "480p" || n === "320p" || n === "144p") && Dt(n);
						},
						disabled: !1,
						style: {
							padding: "5px",
							fontSize: "14px"
						},
						children: [
							we.jsx("option", {
								value: "720p",
								children: qe["720p"].label
							}),
							we.jsx("option", {
								value: "640p",
								children: qe["640p"].label
							}),
							we.jsx("option", {
								value: "480p",
								children: qe["480p"].label
							}),
							we.jsx("option", {
								value: "320p",
								children: qe["320p"].label
							}),
							we.jsx("option", {
								value: "144p",
								children: qe["144p"].label
							})
						]
					})
				] }),
				we.jsxs("div", { children: [
					s._(
						/*BTDS*/
						""
					),
					" ",
					we.jsxs("select", {
						value: _t,
						onChange: function(t) {
							var e = t.currentTarget, n = parseInt(e.value, 10);
							Ue.includes(n) && (ft(n), gt.current = n, o("WALogger").LOG(Ne || (Ne = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Frame rate changed to ", " FPS"])), n));
						},
						disabled: !1,
						style: {
							padding: "5px",
							fontSize: "14px"
						},
						children: [
							we.jsx("option", {
								value: 30,
								children: s._(
									/*BTDS*/
									""
								)
							}),
							we.jsx("option", {
								value: 20,
								children: s._(
									/*BTDS*/
									""
								)
							}),
							we.jsx("option", {
								value: 15,
								children: s._(
									/*BTDS*/
									""
								)
							}),
							we.jsx("option", {
								value: 10,
								children: s._(
									/*BTDS*/
									""
								)
							}),
							we.jsx("option", {
								value: 5,
								children: s._(
									/*BTDS*/
									""
								)
							})
						]
					})
				] }),
				we.jsxs(o("WAWebFlex.react").FlexColumn, {
					gap: 8,
					children: [we.jsxs("div", {
						style: {
							display: "flex",
							gap: "10px"
						},
						children: [we.jsx("canvas", {
							ref: t,
							width: qe[ut].width,
							height: qe[ut].height,
							style: {
								border: "1px solid black",
								width: "45%",
								height: "360px"
							}
						}), we.jsx("canvas", {
							ref: a,
							width: qe[ut].width,
							height: qe[ut].height,
							style: {
								border: "1px solid black",
								width: "45%",
								height: "360px"
							}
						})]
					}), we.jsx("video", {
						ref: i,
						style: { display: "none" },
						muted: !0
					})]
				}),
				we.jsxs(o("WAWebFlex.react").FlexColumn, {
					gap: 8,
					children: [we.jsxs("div", { children: [
						s._(
							/*BTDS*/
							""
						),
						" ",
						rt
					] }), it != null && we.jsxs("div", {
						style: { color: "red" },
						children: [
							s._(
								/*BTDS*/
								""
							),
							" ",
							it
						]
					})]
				}),
				we.jsxs(o("WAWebFlex.react").FlexColumn, {
					gap: 8,
					children: [Xe ? we.jsx(r("WDSButton.react"), {
						variant: "outline",
						onPress: It,
						label: s._(
							/*BTDS*/
							""
						)
					}) : we.jsx(r("WDSButton.react"), {
						variant: "filled",
						onPress: function() {
							return void kt();
						},
						label: s._(
							/*BTDS*/
							""
						)
					}), we.jsx(r("WDSButton.react"), {
						variant: "outline",
						onPress: xt,
						disabled: !Xe,
						label: Ze ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							""
						)
					})]
				}),
				we.jsx("div", { children: s._(
					/*BTDS*/
					""
				) })
			]
		}) });
	}
	Ve.displayName = Ve.name + " [from " + i.id + "]", l.default = Ve;
}), 226);

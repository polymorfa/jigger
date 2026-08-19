__d("WAWebVoipWebWasmSampleWebcodecLoopback.react", [
	"fbt",
	"WALogger",
	"WAWebFlex.react",
	"WAWebText.react",
	"WAWebVoipGatingUtils",
	"WAWebVoipWebWasmSampleContainer.react",
	"WDSButton.react",
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
		var t = Oe(null), n = Oe(null), a = Oe(null), i = Oe(null), l = Oe(null), Me = Oe(null), Ae = Oe(null), Ve = Oe([]), He = Oe(0), Ge = Oe(0), ze = Oe(0), je = Oe(!0), Ke = Be(!1), Qe = Ke[0], Xe = Ke[1], Ye = Be(!1), Je = Ye[0], Ze = Ye[1], et = Oe(!1), tt = Be("Ready to start"), nt = tt[0], rt = tt[1], ot = Be(null), at = ot[0], it = ot[1], lt = Be("640p"), st = lt[0], ut = lt[1], ct = Oe(qe["640p"]), dt = Oe(null), mt = Be(30), pt = mt[0], _t = mt[1], ft = Oe(30), gt = Oe(0);
		if (Fe(function() {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Component mounted, initializing canvas text overlays"]))), window.setTimeout(function() {
				o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Timeout executed, attempting to draw text overlays"]))), ht();
				var e = t.current, r = n.current;
				o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
					"[WebCodec] Canvas refs after timeout - self: ",
					", decoded: ",
					""
				])), e != null ? "available" : "null", r != null ? "available" : "null"), e && o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
					"[WebCodec] Self canvas dimensions: ",
					"x",
					", client: ",
					"x",
					""
				])), e.width, e.height, e.clientWidth, e.clientHeight), r && o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
					"[WebCodec] Decoded canvas dimensions: ",
					"x",
					", client: ",
					"x",
					""
				])), r.width, r.height, r.clientWidth, r.clientHeight), self.VideoEncoder !== void 0 ? o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] VideoEncoder API is available"]))) : o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] VideoEncoder API is NOT available - browser may not support WebCodec"]))), self.VideoDecoder !== void 0 ? o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] VideoDecoder API is available"]))) : o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] VideoDecoder API is NOT available - browser may not support WebCodec"]))), self.MediaStreamTrackProcessor !== void 0 ? o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] MediaStreamTrackProcessor API is available"]))) : o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] MediaStreamTrackProcessor API is NOT available - browser may not support this feature"])));
			}, 100);
		}, []), !o("WAWebVoipGatingUtils").isCallingEnabled()) return we.jsx(r("WAWebVoipWebWasmSampleContainer.react"), { children: we.jsx(o("WAWebText.react").WAWebTextLarge, { children: s._(
			/*BTDS*/
			""
		) }) });
		var ht = function() {
			var e = t.current, r = n.current;
			if (o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
				"[WebCodec] Drawing text overlays - selfCanvas: ",
				", decodedCanvas: ",
				""
			])), e != null, r != null), !e && !r) {
				o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Both canvases are null - DOM elements may not be mounted yet"])));
				return;
			}
			if (e) {
				var a = e.getContext("2d");
				a && (a.font = "36px Arial", a.fillStyle = "white", a.strokeStyle = "black", a.lineWidth = 2, a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = "lightgray", a.fillRect(0, 0, e.width, e.height), a.strokeText("Self Video", e.width / 2, 50), a.fillText("Self Video", e.width / 2, 50), o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
					"[WebCodec] Self canvas text overlay drawn - canvas size: ",
					"x",
					""
				])), e.width, e.height));
			} else o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Self canvas not available for text overlay"])));
			if (r) {
				var i = r.getContext("2d");
				i && (i.font = "36px Arial", i.fillStyle = "white", i.strokeStyle = "black", i.lineWidth = 2, i.textAlign = "center", i.textBaseline = "middle", i.fillStyle = "lightblue", i.fillRect(0, 0, r.width, r.height), i.strokeText("WebCodec Video", r.width / 2, 50), i.fillText("WebCodec Video", r.width / 2, 50), o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
					"[WebCodec] Decoded canvas text overlay drawn - canvas size: ",
					"x",
					""
				])), r.width, r.height));
			} else o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Decoded canvas not available for text overlay"])));
		}, yt = async function() {
			var e = Ve.current;
			if (je.current = e.length === 0, !je.current) {
				var t = e.shift();
				if (t) {
					var r = n.current;
					if (r) {
						var a = r.getContext("2d");
						a && (o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
							"[WebCodec] Rendering decoded frame - frame size: ",
							"x",
							""
						])), t.displayWidth, t.displayHeight), a.drawImage(t, 0, 0, r.width, r.height), a.font = "24px Arial", a.fillStyle = "white", a.strokeStyle = "black", a.lineWidth = 2, a.textAlign = "center", a.strokeText("WebCodec Video", r.width / 2, 30), a.fillText("WebCodec Video", r.width / 2, 30));
					} else o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Decoded canvas not available for frame rendering"])));
					t.close(), window.setTimeout(yt, 0);
				}
			}
		}, Ct = function(t) {
			o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
				"[WebCodec] Received decoded frame - timestamp: ",
				", size: ",
				"x",
				""
			])), t.timestamp, t.displayWidth, t.displayHeight), Ve.current.push(t), je.current && window.setTimeout(yt, 0);
		}, bt = function(t, n) {
			var e = Me.current, r = et.current;
			o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
				"[WebCodec] Received encoded chunk - count: ",
				", type: ",
				", timestamp: ",
				", size: ",
				" bytes, packetDropEnabled: ",
				""
			])), ze.current + 1, t.type, t.timestamp, t.byteLength, r), n != null && n.decoderConfig && e && (o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Configuring decoder with new config from metadata"]))), e.configure(n.decoderConfig)), ze.current++;
			var a = r && ze.current % 10 === 0 && t.type !== "key";
			if (o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
				"[WebCodec] Packet drop check - count: ",
				", mod10: ",
				", isEnabled: ",
				", chunkType: ",
				", willDrop: ",
				""
			])), ze.current, ze.current % 10, r, t.type, a), a) {
				o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
					"[WebCodec] Dropping packet ",
					" - chunk type: ",
					", timestamp: ",
					""
				])), ze.current, t.type, t.timestamp);
				return;
			}
			e ? (o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
				"[WebCodec] Decoding chunk - type: ",
				", timestamp: ",
				", size: ",
				" bytes"
			])), t.type, t.timestamp, t.byteLength), e.decode(t)) : o("WALogger").ERROR(N || (N = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Decoder not available for chunk decoding"])));
		}, vt = async function(t) {
			o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose([
				"[WebCodec] Starting encoder/decoder creation with resolution: ",
				"x",
				""
			])), t.width, t.height);
			try {
				var e = {
					codec: "avc1.42001E",
					width: t.width,
					height: t.height,
					bitrate: 1e6,
					framerate: 30
				}, n = {
					output: bt,
					error: function(t) {
						o("WALogger").ERROR(w || (w = babelHelpers.taggedTemplateLiteralLoose(["Encoder error"]))).catching(t), it("Encoder error: " + t.message);
					}
				};
				o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Checking H.264 encoder support"])));
				var r = await VideoEncoder.isConfigSupported(e);
				if (o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Encoder support result: ", ""])), JSON.stringify(r)), (r == null ? void 0 : r.supported) !== !0) return it("H.264 encoding not supported"), !1;
				var a = new VideoEncoder(n);
				a.configure(e), l.current = a;
				var i = { codec: "avc1.42001E" }, s = {
					output: Ct,
					error: function(t) {
						o("WALogger").ERROR(O || (O = babelHelpers.taggedTemplateLiteralLoose(["Decoder error"]))).catching(t), it("Decoder error: " + t.message);
					}
				};
				o("WALogger").LOG(B || (B = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Checking H.264 decoder support"])));
				var u = await VideoDecoder.isConfigSupported(i);
				if (o("WALogger").LOG(W || (W = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Decoder support result: ", ""])), JSON.stringify(u)), (u == null ? void 0 : u.supported) !== !0) return it("H.264 decoding not supported"), !1;
				var c = new VideoDecoder(s);
				return c.configure(i), Me.current = c, !0;
			} catch (e) {
				var d = typeof e == "object" && e != null && "message" in e ? String(e.message) : String(e);
				return it("Failed to create encoder/decoder: " + d), !1;
			}
		}, St = async function() {
			try {
				var e = navigator.mediaDevices;
				if (!e) {
					var t = new Error("MediaDevices API not available");
					throw t.stack, t;
				}
				var n = await e.getUserMedia({ video: {
					width: 1280,
					height: 720
				} }), r = a.current;
				return r && n && (r.srcObject = n, r.autoplay = !0), i.current = n, !0;
			} catch (e) {
				var o = typeof e == "object" && e != null && "message" in e ? String(e.message) : String(e);
				return it("Failed to access camera: " + o), !1;
			}
		}, Rt = function(t, n, r) {
			var e = dt.current;
			e || (e = document.createElement("canvas"), dt.current = e), e.width = n, e.height = r;
			var o = e.getContext("2d");
			if (!o) {
				var a = new Error("Failed to get 2d context for scaling canvas");
				throw a.stack, a;
			}
			o.drawImage(t, 0, 0, n, r);
			var i = { timestamp: t.timestamp };
			return t.duration != null && (i.duration = t.duration), new VideoFrame(e, i);
		}, Lt = async function() {
			o("WALogger").LOG(q || (q = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Starting video frame processing"])));
			var e = i.current;
			if (!e) {
				o("WALogger").ERROR(U || (U = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] No media stream available for video processing"])));
				return;
			}
			o("WALogger").LOG(V || (V = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Media stream available, getting video track"])));
			var n = e.getVideoTracks()[0];
			if (!n) {
				o("WALogger").ERROR(H || (H = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] No video track found in media stream"])));
				return;
			}
			o("WALogger").LOG(G || (G = babelHelpers.taggedTemplateLiteralLoose([
				"[WebCodec] Video track found: ",
				", state: ",
				""
			])), n.label, n.readyState);
			try {
				o("WALogger").LOG(z || (z = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Creating MediaStreamTrackProcessor"])));
				var a = new MediaStreamTrackProcessor(n);
				o("WALogger").LOG(j || (j = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] MediaStreamTrackProcessor created successfully"]))), o("WALogger").LOG(K || (K = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Getting readable stream reader"])));
				var s = a.readable.getReader();
				o("WALogger").LOG(Q || (Q = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Readable stream reader obtained"]))), Ae.current = s, gt.current = 0;
				var u = async function() {
					try {
						o("WALogger").LOG(X || (X = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] About to read frame from stream"])));
						var e = await s.read(), n = e.done, a = e.value;
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
							var c = i.getContext("2d");
							c && (o("WALogger").LOG(Z || (Z = babelHelpers.taggedTemplateLiteralLoose([
								"[WebCodec] Drawing video frame to self canvas - frame size: ",
								"x",
								""
							])), a.displayWidth, a.displayHeight), c.drawImage(a, 0, 0, i.width, i.height), c.font = "24px Arial", c.fillStyle = "white", c.strokeStyle = "black", c.lineWidth = 2, c.textAlign = "center", c.strokeText("Self Video", i.width / 2, 30), c.fillText("Self Video", i.width / 2, 30));
						} else o("WALogger").LOG(ee || (ee = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Self canvas not available for video frame drawing"])));
						var d = l.current;
						if (d) if (d.encodeQueueSize > 2) o("WALogger").LOG(te || (te = babelHelpers.taggedTemplateLiteralLoose(["Encoder overwhelmed, dropping frame"]))), a.close();
						else {
							gt.current++;
							var m = ft.current, p = 30 / m, _ = gt.current % Math.round(p) === 0;
							if (_) {
								var f = ct.current, g = a.displayWidth !== f.width || a.displayHeight !== f.height, h = a;
								g && (o("WALogger").LOG(ne || (ne = babelHelpers.taggedTemplateLiteralLoose([
									"[WebCodec] Scaling frame from ",
									"x",
									" to ",
									"x",
									""
								])), a.displayWidth, a.displayHeight, f.width, f.height), h = Rt(a, f.width, f.height), a.close()), Ge.current++;
								var y = Ge.current % 150 === 0;
								o("WALogger").LOG(re || (re = babelHelpers.taggedTemplateLiteralLoose([
									"[WebCodec] Encoding frame ",
									" at ",
									" FPS, keyFrame: ",
									""
								])), Ge.current, m, y), d.encode(h, { keyFrame: y }), h.close();
							} else o("WALogger").LOG(oe || (oe = babelHelpers.taggedTemplateLiteralLoose([
								"[WebCodec] Dropping frame to maintain ",
								" FPS (total frames: ",
								", ratio: ",
								")"
							])), m, gt.current, p), a.close();
						}
						else a.close();
						window.setTimeout(u, 1e3 / 30);
					} catch (e) {
						var C = e instanceof Error ? e : r("err")(String(e));
						o("WALogger").ERROR(ae || (ae = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Error in processFrames loop"]))).catching(C);
						var b = typeof e == "object" && e != null && "message" in e ? String(e.message) : String(e);
						it("Frame processing error: " + b);
					}
				};
				o("WALogger").LOG(ie || (ie = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Starting frame processing loop"]))), u();
			} catch (e) {
				var c = e instanceof Error ? e : r("err")(String(e));
				o("WALogger").ERROR(le || (le = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Error in processVideoFrames setup"]))).catching(c);
				var d = typeof e == "object" && e != null && "message" in e ? String(e.message) : String(e);
				it("Video processing error: " + d);
			}
		}, Et = async function() {
			o("WALogger").LOG(se || (se = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Starting demo"]))), it(null), rt("Initializing...");
			var e = qe[st];
			o("WALogger").LOG(ue || (ue = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Creating encoder and decoder"])));
			var t = await vt(e);
			if (!t) {
				o("WALogger").ERROR(ce || (ce = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Failed to initialize encoder/decoder"]))), rt("Failed to initialize encoder/decoder");
				return;
			}
			o("WALogger").LOG(de || (de = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Encoder and decoder created successfully"]))), o("WALogger").LOG(me || (me = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Starting camera"]))), rt("Starting camera...");
			var n = await St();
			if (n && o("WALogger").LOG(pe || (pe = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Camera initialization successful, stream available: ", ""])), i.current != null), !n) {
				o("WALogger").ERROR(_e || (_e = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Failed to start camera"]))), rt("Failed to start camera");
				return;
			}
			o("WALogger").LOG(fe || (fe = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Camera started successfully"]))), Xe(!0), rt("Running"), o("WALogger").LOG(ge || (ge = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Starting video frame processing"]))), Lt();
		}, kt = function() {
			Xe(!1), rt("Stopping...");
			var e = i.current;
			e && (e.getTracks().forEach(function(e) {
				return e.stop();
			}), i.current = null), l.current && (l.current.close(), l.current = null), Me.current && (Me.current.close(), Me.current = null), Ae.current && (Ae.current.cancel(), Ae.current = null), He.current = 0, Ge.current = 0, ze.current = 0, Ve.current = [], je.current = !0, rt("Stopped");
		}, It = async function(t) {
			o("WALogger").LOG(he || (he = babelHelpers.taggedTemplateLiteralLoose([
				"[WebCodec] Reconfiguring encoder with resolution: ",
				"x",
				""
			])), t.width, t.height);
			try {
				var e = l.current, n = Me.current;
				if (!e || !n) return o("WALogger").ERROR(ye || (ye = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Encoder or decoder not available for reconfiguration"]))), !1;
				o("WALogger").LOG(Ce || (Ce = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Flushing encoder before reconfiguration"]))), await e.flush();
				var a = {
					codec: "avc1.42001E",
					width: t.width,
					height: t.height,
					bitrate: 1e6,
					framerate: 30
				};
				o("WALogger").LOG(be || (be = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Checking H.264 encoder support for new resolution"])));
				var i = await VideoEncoder.isConfigSupported(a);
				return (i == null ? void 0 : i.supported) !== !0 ? (o("WALogger").ERROR(ve || (ve = babelHelpers.taggedTemplateLiteralLoose([
					"[WebCodec] H.264 encoding not supported for resolution ",
					"x",
					""
				])), t.width, t.height), !1) : (o("WALogger").LOG(Se || (Se = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Reconfiguring encoder with new resolution"]))), e.configure(a), o("WALogger").LOG(Re || (Re = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Flushing decoder"]))), await n.flush(), ct.current = t, o("WALogger").LOG(Le || (Le = babelHelpers.taggedTemplateLiteralLoose([
					"[WebCodec] Encoder successfully reconfigured to ",
					"x",
					""
				])), t.width, t.height), !0);
			} catch (e) {
				var s = typeof e == "object" && e != null && "message" in e ? String(e.message) : String(e), u = e instanceof Error ? e : r("err")(s);
				return o("WALogger").ERROR(Ee || (Ee = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Failed to reconfigure encoder"]))).catching(u), it("Failed to reconfigure encoder: " + s), !1;
			}
		}, Tt = async function(t) {
			if (t !== st) {
				o("WALogger").LOG(ke || (ke = babelHelpers.taggedTemplateLiteralLoose([
					"[WebCodec] Changing resolution from ",
					" to ",
					""
				])), st, t);
				var e = qe[t];
				if (Qe) {
					o("WALogger").LOG(Ie || (Ie = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Demo is running, reconfiguring encoder on-the-fly"]))), rt("Reconfiguring encoder...");
					var n = await It(e);
					n ? (ut(t), rt("Running"), o("WALogger").LOG(Te || (Te = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Resolution changed to ", " successfully"])), t)) : (o("WALogger").ERROR(De || (De = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Failed to reconfigure encoder, keeping current resolution"]))), rt("Running (reconfiguration failed)"));
				} else ut(t), ct.current = e, o("WALogger").LOG(xe || (xe = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Resolution changed to ", " (demo not running)"])), t);
			}
		}, Dt = function() {
			var e = !Je, t = ze.current;
			Ze(e), et.current = e, e ? (o("WALogger").LOG($e || ($e = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Packet drop ENABLED - will drop every 10th non-key frame. Resetting counter from ", " to 0"])), t), ze.current = 0) : o("WALogger").LOG(Pe || (Pe = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Packet drop DISABLED - all frames will be processed. Current counter: ", ""])), t);
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
						value: st,
						onChange: function(t) {
							var e = t.currentTarget, n = e.value;
							(n === "720p" || n === "640p" || n === "480p" || n === "320p" || n === "144p") && Tt(n);
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
						value: pt,
						onChange: function(t) {
							var e = t.currentTarget, n = parseInt(e.value, 10);
							Ue.includes(n) && (_t(n), ft.current = n, o("WALogger").LOG(Ne || (Ne = babelHelpers.taggedTemplateLiteralLoose(["[WebCodec] Frame rate changed to ", " FPS"])), n));
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
							width: qe[st].width,
							height: qe[st].height,
							style: {
								border: "1px solid black",
								width: "45%",
								height: "360px"
							}
						}), we.jsx("canvas", {
							ref: n,
							width: qe[st].width,
							height: qe[st].height,
							style: {
								border: "1px solid black",
								width: "45%",
								height: "360px"
							}
						})]
					}), we.jsx("video", {
						ref: a,
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
						nt
					] }), at != null && we.jsxs("div", {
						style: { color: "red" },
						children: [
							s._(
								/*BTDS*/
								""
							),
							" ",
							at
						]
					})]
				}),
				we.jsxs(o("WAWebFlex.react").FlexColumn, {
					gap: 8,
					children: [Qe ? we.jsx(r("WDSButton.react"), {
						variant: "outline",
						onPress: kt,
						label: s._(
							/*BTDS*/
							""
						)
					}) : we.jsx(r("WDSButton.react"), {
						variant: "filled",
						onPress: function() {
							return void Et();
						},
						label: s._(
							/*BTDS*/
							""
						)
					}), we.jsx(r("WDSButton.react"), {
						variant: "outline",
						onPress: Dt,
						disabled: !Qe,
						label: Je ? s._(
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

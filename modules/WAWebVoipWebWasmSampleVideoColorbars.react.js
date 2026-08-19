__d("WAWebVoipWebWasmSampleVideoColorbars.react", [
	"Promise",
	"WAWebNoop",
	"WAWebText.react",
	"WAWebVoipMediaEnums",
	"WAWebVoipVideoCaptureCanvas",
	"WAWebVoipVideoCaptureWebGL",
	"WAWebVoipVideoCaptureWebGPU",
	"WAWebVoipVideoRasterRenderer",
	"WAWebVoipVideoWebCodecsRenderer",
	"WAWebVoipVideoWebGLRenderer",
	"WAWebVoipWebWasmSampleContainer.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	for (var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useRef, p = [
		[
			0,
			0,
			0
		],
		[
			0,
			0,
			0
		],
		[
			10,
			10,
			10
		],
		[
			255,
			0,
			0
		],
		[
			0,
			255,
			0
		],
		[
			0,
			0,
			255
		],
		[
			0,
			255,
			255
		],
		[
			255,
			0,
			255
		],
		[
			255,
			255,
			0
		],
		[
			245,
			245,
			245
		],
		[
			255,
			255,
			255
		],
		[
			255,
			255,
			255
		],
		[
			24,
			252,
			16
		],
		[
			224,
			8,
			232
		],
		[
			0,
			252,
			16
		],
		[
			252,
			40,
			252
		],
		[
			8,
			204,
			8
		],
		[
			248,
			24,
			248
		]
	], _ = [
		[
			0,
			128,
			128
		],
		[
			16,
			128,
			128
		],
		[
			25,
			128,
			128
		],
		[
			81,
			90,
			240
		],
		[
			145,
			54,
			34
		],
		[
			41,
			240,
			110
		],
		[
			170,
			166,
			16
		],
		[
			106,
			202,
			222
		],
		[
			210,
			16,
			146
		],
		[
			226,
			128,
			128
		],
		[
			235,
			128,
			128
		],
		[
			255,
			128,
			128
		],
		[
			149,
			58,
			45
		],
		[
			100,
			193,
			206
		],
		[
			143,
			62,
			35
		],
		[
			125,
			189,
			205
		],
		[
			121,
			71,
			56
		],
		[
			115,
			193,
			209
		]
	], f = 32 * p.length, g = 88, h = new Uint8ClampedArray(f * g * 4), y = 0; y < p.length; y++) for (var C = p[y], b = y * h.length / p.length; b < (y + 1) * h.length / p.length; b += 4) h[b] = C[0], h[b + 1] = C[1], h[b + 2] = C[2], h[b + 3] = 255;
	for (var v = new Uint8ClampedArray(f * g * 2), S = 0; S < _.length; S++) for (var R = _[S], L = S * f * g / _.length; L < (S + 1) * f * g / _.length; L++) v[L] = R[0];
	for (var E = 0; E < _.length; E++) for (var k = _[E], I = E * f * g / 2 / _.length; I < (E + 1) * f * g / 2 / _.length; I += 2) v[f * g + I] = k[1], v[f * g + I + 1] = k[2];
	function T() {
		var t = o("react-compiler-runtime").c(24), a = m(null), i = m(null), l = m(null), s = m(null), c = m(null), p = m(null), _ = m(null), y = m(null), C = m(null), b = m(null), v = m(null), S = m(null), R, L;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (R = function() {
			var t = [
				[
					a,
					c,
					o("WAWebVoipVideoRasterRenderer").WAWebVoipVideoRasterRenderer
				],
				[
					i,
					p,
					o("WAWebVoipVideoRasterRenderer").WAWebVoipVideoFrameRenderer
				],
				[
					l,
					_,
					r("WAWebVoipVideoWebGLRenderer")
				],
				[
					s,
					y,
					o("WAWebVoipVideoWebCodecsRenderer").WAWebVoipVideoWebCodecsRenderer
				]
			];
			t.forEach(D);
			var u = C.current, d = b.current, m = v.current, R = S.current;
			if (!(!u || !d || !m || !R)) {
				var L = new (o("WAWebVoipVideoWebCodecsRenderer")).WAWebVoipVideoWebCodecsRenderer(u), E = function(t, n) {
					var e = new Uint8Array(t.byteLength);
					t.copyTo(e), L.renderFrame({
						format: o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.H264,
						frameBuffer: e.buffer,
						height: f,
						isKeyFrame: !0,
						mirror: !1,
						orientation: o("WAWebVoipMediaEnums").Orientation.Normal,
						timestamp: t.timestamp,
						width: g
					});
				}, k = {
					codec: "avc1.42001E",
					width: g,
					height: f,
					bitrate: 1e6,
					framerate: 30,
					avc: { format: "annexb" },
					optimizeForLatency: !0
				}, I = {
					output: E,
					error: r("WAWebNoop")
				}, T = new VideoEncoder(I);
				T.configure(k), createImageBitmap(new ImageData(h, g, f)).then(function(e) {
					for (var t = 0; t < 20; t++) {
						var n = new VideoFrame(e, { timestamp: t * 33e3 });
						T.encode(n, { keyframe: !0 }), n.close();
					}
				}), x("WebCodecsH264", u);
				var $ = [
					[d, (e || (e = n("Promise"))).resolve(new (o("WAWebVoipVideoCaptureCanvas")).CanvasVideoConverter(g, f))],
					[m, e.resolve(new (o("WAWebVoipVideoCaptureWebGL")).WebGLVideoConverter(g, f))],
					[R, o("WAWebVoipVideoCaptureWebGPU").WebGPUVideoConverter.create(g, f)]
				], P = function() {
					var t = N[0], r = N[1];
					createImageBitmap(new ImageData(h, g, f)).then(function(a) {
						r.then(function(r) {
							(e || (e = n("Promise"))).resolve(r.convertVideoToNV12(a)).then(function(e) {
								r.cleanup();
								var n = new (o("WAWebVoipVideoRasterRenderer")).WAWebVoipVideoRasterRenderer(t);
								n.renderFrame({
									format: o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12,
									frameBuffer: e.buffer,
									height: f,
									isKeyFrame: !1,
									mirror: !1,
									orientation: o("WAWebVoipMediaEnums").Orientation.Normal,
									timestamp: 0,
									width: g
								}), n.cleanup(), x(r.constructor.name.replace("VideoConverter", "Conv"), t);
							});
						});
					});
				};
				for (var N of $) P();
				return (function() {
					L.cleanup(), T.close();
				});
			}
		}, L = [], t[0] = R, t[1] = L) : (R = t[0], L = t[1]), d(R, L);
		var E;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (E = u.jsx(o("WAWebText.react").WAWebTextLarge, { children: "Video Voip Colorbars Test" }), t[2] = E) : E = t[2];
		var k;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (k = u.jsx("canvas", {
			ref: a,
			style: {
				display: "inline-block",
				width: g,
				height: f
			},
			height: f,
			width: g
		}), t[3] = k) : k = t[3];
		var I;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (I = u.jsx("canvas", {
			ref: i,
			style: {
				display: "inline-block",
				width: g,
				height: f
			},
			height: f,
			width: g
		}), t[4] = I) : I = t[4];
		var T;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (T = u.jsx("canvas", {
			ref: l,
			style: {
				display: "inline-block",
				width: g,
				height: f
			},
			height: f,
			width: g
		}), t[5] = T) : T = t[5];
		var $;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? ($ = u.jsx("canvas", {
			ref: s,
			style: {
				display: "inline-block",
				width: g,
				height: f
			},
			height: f,
			width: g
		}), t[6] = $) : $ = t[6];
		var P;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (P = u.jsx("canvas", {
			ref: c,
			style: {
				display: "inline-block",
				width: g,
				height: f
			},
			height: f,
			width: g
		}), t[7] = P) : P = t[7];
		var N;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (N = u.jsx("canvas", {
			ref: p,
			style: {
				display: "inline-block",
				width: g,
				height: f
			},
			height: f,
			width: g
		}), t[8] = N) : N = t[8];
		var M;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (M = u.jsx("canvas", {
			ref: _,
			style: {
				display: "inline-block",
				width: g,
				height: f
			},
			height: f,
			width: g
		}), t[9] = M) : M = t[9];
		var w;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (w = u.jsx("canvas", {
			ref: y,
			style: {
				display: "inline-block",
				width: g,
				height: f
			},
			height: f,
			width: g
		}), t[10] = w) : w = t[10];
		var A;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (A = u.jsx("canvas", {
			ref: C,
			style: {
				display: "inline-block",
				width: g,
				height: f
			},
			height: f,
			width: g
		}), t[11] = A) : A = t[11];
		var F;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (F = u.jsx("canvas", {
			ref: b,
			style: {
				display: "inline-block",
				width: g,
				height: f
			},
			height: f,
			width: g
		}), t[12] = F) : F = t[12];
		var O;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (O = u.jsx("canvas", {
			ref: v,
			style: {
				display: "inline-block",
				width: g,
				height: f
			},
			height: f,
			width: g
		}), t[13] = O) : O = t[13];
		var B;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (B = u.jsxs("div", { children: [
			k,
			I,
			T,
			$,
			P,
			N,
			M,
			w,
			A,
			F,
			O,
			u.jsx("canvas", {
				ref: S,
				style: {
					display: "inline-block",
					width: g,
					height: f
				},
				height: f,
				width: g
			})
		] }), t[14] = B) : B = t[14];
		var W;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (W = u.jsx("br", {}), t[15] = W) : W = t[15];
		var q;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (q = u.jsx("br", {}), t[16] = q) : q = t[16];
		var U, V, H, G, z;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (U = u.jsx("li", { children: "Each column corresponds to a renderer and source colorspace, or a capture-side RGB to YUV converter (using the Raster renderer). All color lines should look the same across columns. Actual RGB values may be slightly different due to rounding differences." }), V = u.jsx("li", { children: "The first line is a black with Y'<16 (blacker-than-black). This should be rendered the same as the black line below." }), H = u.jsx("li", { children: "The second line is a black with Y'=16 (black). It should be the blackest color the screen can render. If it is lighter than the blacker-than-black above, it means the YUV-RGB conversion is using studio (limited) RGB range rather than computer (full) range." }), G = u.jsx("li", { children: "The third line is a near-black with RGB values = 10. It should be slightly lighter than the black line above (may be hard to see depending on display gamma - if in doubt, use a color picker app). If it looks exactly the same as the blacks above, it means that the conversion from full-range RGB to Y'UV is using the studio RGB formulas without offsetting, and crushing near-blacks below the Y'=16 threshold." }), z = u.jsx("li", { children: "The next few lines are reference primary colors. If colors have a different tone than their neighbors, it means the Y'UV is being rendered using the wrong colorspace matrices. Our code currently expects BT601 to be used for rendering. Some fringing between colors can happen due to chroma subsampling in NV12 renderers." }), t[17] = U, t[18] = V, t[19] = H, t[20] = G, t[21] = z) : (U = t[17], V = t[18], H = t[19], G = t[20], z = t[21]);
		var j;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (j = u.jsxs("li", { children: [
			"The next 3 lines are near-white, white, and whiter-than-white, and follow the same rules as blacks above:",
			u.jsx("br", {}),
			"Near-white should be slightly darker than the lines below (again, how much darker depends on display gamma), while both white and whiter-than-white should be the brightest the screen can render."
		] }), t[22] = j) : j = t[22];
		var K;
		return t[23] === Symbol.for("react.memo_cache_sentinel") ? (K = u.jsxs(r("WAWebVoipWebWasmSampleContainer.react"), { children: [
			E,
			B,
			u.jsx("div", { children: u.jsxs(o("WAWebText.react").WAWebTextSmall, { children: [
				"Computer screen RGB goes from 0 to 255 (full range), but the Y' in Y'UV goes from 16 to 235. Some reference formulas are for conversion from Y'UV to studio RGB (16-235 range) and should not be used for computer screens without scaling/offsetting.",
				W,
				"Y'UV conversion to/from RGB is colorspace-dependent, the same Y'UV values can map to different RGB values in BT709 vs BT601. All our code should use the same set of colorspace matrices (currently BT601)",
				q,
				"How to read the chart above:",
				u.jsxs("ul", { children: [
					U,
					V,
					H,
					G,
					z,
					j,
					u.jsxs("li", { children: ["The next 6 lines are the colors with the most discrepancy when rendered in the wrong colorspace or range:", u.jsxs("ul", { children: [
						u.jsx("li", { children: "Maximum error for RGB->Bt601(16-235)->Bt709(16-235) renderer" }),
						u.jsx("li", { children: "Maximum error for RGB->Bt601(0-255)->Bt709(16-235) renderer" }),
						u.jsx("li", { children: "Maximum error for RGB->Bt709(16-235)->Bt601(0-255) renderer" }),
						u.jsx("li", { children: "Maximum error for RGB->Bt709(16-235)->Bt601(16-235) renderer" }),
						u.jsx("li", { children: "Maximum error for RGB->Bt709(0-255)->Bt601(16-235) renderer" }),
						u.jsx("li", { children: "Maximum error for RGB->Bt709(16-235)->Bt601(0-255) renderer" })
					] })] })
				] })
			] }) })
		] }), t[23] = K) : K = t[23], K;
	}
	function D(e) {
		var t = e[0], n = e[1], r = e[2], a = t.current, i = n.current;
		if (!(!a || !i)) {
			var l = r.name.replace("WAWebVoipVideo", "").replace("Renderer", "");
			[[
				a,
				o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA,
				h
			], [
				i,
				o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12,
				v
			]].forEach(function(e) {
				var t = e[0], n = e[1], a = e[2], i = new r(t);
				i.renderFrame({
					format: n,
					frameBuffer: a.buffer,
					height: f,
					isKeyFrame: !1,
					mirror: !1,
					orientation: o("WAWebVoipMediaEnums").Orientation.Normal,
					timestamp: 0,
					width: g
				}), i.cleanup(), x(l + o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.getName(n), t);
			});
		}
	}
	function x(e, t) {
		window.setTimeout(function() {
			var n = t.getContext("2d");
			n && (n.font = "10px Arial", n.fillStyle = "white", n.fillText(e, 10, 30));
		}, 500);
	}
	l.default = T;
}), 98);

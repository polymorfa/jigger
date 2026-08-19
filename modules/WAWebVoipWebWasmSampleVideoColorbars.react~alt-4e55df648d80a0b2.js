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
	"react"
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
		var t = m(null), a = m(null), i = m(null), l = m(null), s = m(null), c = m(null), p = m(null), _ = m(null), y = m(null), C = m(null), b = m(null), S = m(null);
		return d(function() {
			var u = [
				[
					t,
					s,
					o("WAWebVoipVideoRasterRenderer").WAWebVoipVideoRasterRenderer
				],
				[
					a,
					c,
					o("WAWebVoipVideoRasterRenderer").WAWebVoipVideoFrameRenderer
				],
				[
					i,
					p,
					r("WAWebVoipVideoWebGLRenderer")
				],
				[
					l,
					_,
					o("WAWebVoipVideoWebCodecsRenderer").WAWebVoipVideoWebCodecsRenderer
				]
			];
			u.forEach(function(e) {
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
						}), i.cleanup(), D(l + o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.getName(n), t);
					});
				}
			});
			var d = y.current, m = C.current, R = b.current, L = S.current;
			if (!(!d || !m || !R || !L)) {
				var E = new (o("WAWebVoipVideoWebCodecsRenderer")).WAWebVoipVideoWebCodecsRenderer(d), k = function(t, n) {
					var e = new Uint8Array(t.byteLength);
					t.copyTo(e), E.renderFrame({
						format: o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.H264,
						frameBuffer: e.buffer,
						height: f,
						isKeyFrame: !0,
						mirror: !1,
						orientation: o("WAWebVoipMediaEnums").Orientation.Normal,
						timestamp: t.timestamp,
						width: g
					});
				}, I = {
					codec: "avc1.42001E",
					width: g,
					height: f,
					bitrate: 1e6,
					framerate: 30,
					avc: { format: "annexb" },
					optimizeForLatency: !0
				}, T = {
					output: k,
					error: r("WAWebNoop")
				}, x = new VideoEncoder(T);
				x.configure(I), createImageBitmap(new ImageData(h, g, f)).then(function(e) {
					for (var t = 0; t < 20; t++) {
						var n = new VideoFrame(e, { timestamp: t * 33e3 });
						x.encode(n, { keyframe: !0 }), n.close();
					}
				}), D("WebCodecsH264", d);
				var $ = [
					[m, (e || (e = n("Promise"))).resolve(new (o("WAWebVoipVideoCaptureCanvas")).CanvasVideoConverter(g, f))],
					[R, e.resolve(new (o("WAWebVoipVideoCaptureWebGL")).WebGLVideoConverter(g, f))],
					[L, o("WAWebVoipVideoCaptureWebGPU").WebGPUVideoConverter.create(g, f)]
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
								}), n.cleanup(), D(r.constructor.name.replace("VideoConverter", "Conv"), t);
							});
						});
					});
				};
				for (var N of $) P();
				return function() {
					E.cleanup(), x.close();
				};
			}
		}, []), u.jsxs(r("WAWebVoipWebWasmSampleContainer.react"), { children: [
			u.jsx(o("WAWebText.react").WAWebTextLarge, { children: "Video Voip Colorbars Test" }),
			u.jsxs("div", { children: [
				u.jsx("canvas", {
					ref: t,
					style: {
						display: "inline-block",
						width: g,
						height: f
					},
					height: f,
					width: g
				}),
				u.jsx("canvas", {
					ref: a,
					style: {
						display: "inline-block",
						width: g,
						height: f
					},
					height: f,
					width: g
				}),
				u.jsx("canvas", {
					ref: i,
					style: {
						display: "inline-block",
						width: g,
						height: f
					},
					height: f,
					width: g
				}),
				u.jsx("canvas", {
					ref: l,
					style: {
						display: "inline-block",
						width: g,
						height: f
					},
					height: f,
					width: g
				}),
				u.jsx("canvas", {
					ref: s,
					style: {
						display: "inline-block",
						width: g,
						height: f
					},
					height: f,
					width: g
				}),
				u.jsx("canvas", {
					ref: c,
					style: {
						display: "inline-block",
						width: g,
						height: f
					},
					height: f,
					width: g
				}),
				u.jsx("canvas", {
					ref: p,
					style: {
						display: "inline-block",
						width: g,
						height: f
					},
					height: f,
					width: g
				}),
				u.jsx("canvas", {
					ref: _,
					style: {
						display: "inline-block",
						width: g,
						height: f
					},
					height: f,
					width: g
				}),
				u.jsx("canvas", {
					ref: y,
					style: {
						display: "inline-block",
						width: g,
						height: f
					},
					height: f,
					width: g
				}),
				u.jsx("canvas", {
					ref: C,
					style: {
						display: "inline-block",
						width: g,
						height: f
					},
					height: f,
					width: g
				}),
				u.jsx("canvas", {
					ref: b,
					style: {
						display: "inline-block",
						width: g,
						height: f
					},
					height: f,
					width: g
				}),
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
			] }),
			u.jsx("div", { children: u.jsxs(o("WAWebText.react").WAWebTextSmall, { children: [
				"Computer screen RGB goes from 0 to 255 (full range), but the Y' in Y'UV goes from 16 to 235. Some reference formulas are for conversion from Y'UV to studio RGB (16-235 range) and should not be used for computer screens without scaling/offsetting.",
				u.jsx("br", {}),
				"Y'UV conversion to/from RGB is colorspace-dependent, the same Y'UV values can map to different RGB values in BT709 vs BT601. All our code should use the same set of colorspace matrices (currently BT601)",
				u.jsx("br", {}),
				"How to read the chart above:",
				u.jsxs("ul", { children: [
					u.jsx("li", { children: "Each column corresponds to a renderer and source colorspace, or a capture-side RGB to YUV converter (using the Raster renderer). All color lines should look the same across columns. Actual RGB values may be slightly different due to rounding differences." }),
					u.jsx("li", { children: "The first line is a black with Y'<16 (blacker-than-black). This should be rendered the same as the black line below." }),
					u.jsx("li", { children: "The second line is a black with Y'=16 (black). It should be the blackest color the screen can render. If it is lighter than the blacker-than-black above, it means the YUV-RGB conversion is using studio (limited) RGB range rather than computer (full) range." }),
					u.jsx("li", { children: "The third line is a near-black with RGB values = 10. It should be slightly lighter than the black line above (may be hard to see depending on display gamma - if in doubt, use a color picker app). If it looks exactly the same as the blacks above, it means that the conversion from full-range RGB to Y'UV is using the studio RGB formulas without offsetting, and crushing near-blacks below the Y'=16 threshold." }),
					u.jsx("li", { children: "The next few lines are reference primary colors. If colors have a different tone than their neighbors, it means the Y'UV is being rendered using the wrong colorspace matrices. Our code currently expects BT601 to be used for rendering. Some fringing between colors can happen due to chroma subsampling in NV12 renderers." }),
					u.jsxs("li", { children: [
						"The next 3 lines are near-white, white, and whiter-than-white, and follow the same rules as blacks above:",
						u.jsx("br", {}),
						"Near-white should be slightly darker than the lines below (again, how much darker depends on display gamma), while both white and whiter-than-white should be the brightest the screen can render."
					] }),
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
		] });
	}
	T.displayName = T.name + " [from " + i.id + "]";
	function D(e, t) {
		window.setTimeout(function() {
			var n = t.getContext("2d");
			n && (n.font = "10px Arial", n.fillStyle = "white", n.fillText(e, 10, 30));
		}, 500);
	}
	l.default = T;
}), 98);

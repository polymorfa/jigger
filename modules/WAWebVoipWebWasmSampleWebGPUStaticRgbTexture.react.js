__d("WAWebVoipWebWasmSampleWebGPUStaticRgbTexture.react", [
	"fbt",
	"WALogger",
	"WAWebText.react",
	"WAWebVoipWebWasmSampleContainer.react",
	"WDSVars.stylex",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _, f, g, h = g || (g = o("react")), y = g, C = y.useEffect, b = y.useState, v = "\nstruct VertexOutput {\n  @builtin(position) position: vec4<f32>,\n  @location(0) texCoord: vec2<f32>,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {\n  var pos = array<vec2<f32>, 6>(\n    vec2<f32>(-1.0, -1.0),  // Bottom left\n    vec2<f32>( 1.0, -1.0),  // Bottom right\n    vec2<f32>(-1.0,  1.0),  // Top left\n    vec2<f32>(-1.0,  1.0),  // Top left\n    vec2<f32>( 1.0, -1.0),  // Bottom right\n    vec2<f32>( 1.0,  1.0)   // Top right\n  );\n\n  var texCoords = array<vec2<f32>, 6>(\n    vec2<f32>(0.0, 1.0),  // Bottom left\n    vec2<f32>(1.0, 1.0),  // Bottom right\n    vec2<f32>(0.0, 0.0),  // Top left\n    vec2<f32>(0.0, 0.0),  // Top left\n    vec2<f32>(1.0, 1.0),  // Bottom right\n    vec2<f32>(1.0, 0.0)   // Top right\n  );\n\n  var output: VertexOutput;\n  output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);\n  output.texCoord = texCoords[vertexIndex];\n  return output;\n}\n", S = "\nstruct VertexOutput {\n  @builtin(position) position: vec4<f32>,\n  @location(0) texCoord: vec2<f32>,\n}\n\n@group(0) @binding(0) var myTexture: texture_2d<f32>;\n@group(0) @binding(1) var mySampler: sampler;\n\n@fragment\nfn fs_main(input: VertexOutput) -> @location(0) vec4<f32> {\n  return textureSample(myTexture, mySampler, input.texCoord);\n}\n";
	function R(t) {
		var a = t.canvasRef, i = t.height, l = t.textureData, g = t.width, y = b(!0), R = y[0], L = y[1], E = b(!1), k = E[0], I = E[1];
		return C(function() {
			var t = a.current;
			if (t != null) {
				var r = (function() {
					var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
						try {
							if (!navigator.gpu) {
								o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WebGPU not supported in this browser"]))), L(!1);
								return;
							}
							o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Initializing WebGPU renderer for static RGB texture"])));
							var n = yield navigator.gpu.requestAdapter();
							if (!n) {
								o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["No suitable WebGPU adapter found"]))), L(!1);
								return;
							}
							var r = yield n.requestDevice();
							if (!r) {
								o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Failed to create WebGPU device"]))), L(!1);
								return;
							}
							var a = t.getContext("webgpu");
							if (!a) {
								o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Failed to get WebGPU context"]))), L(!1);
								return;
							}
							var s = "bgra8unorm";
							a.configure({
								device: r,
								format: s
							});
							for (var h = r.createTexture({
								size: {
									width: g,
									height: i,
									depthOrArrayLayers: 1
								},
								format: "rgba8unorm",
								usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
							}), y = new Uint8Array(g * i * 4), C = 0; C < g * i; C++) {
								var b = C * 3, R = C * 4;
								y[R] = l[b], y[R + 1] = l[b + 1], y[R + 2] = l[b + 2], y[R + 3] = 255;
							}
							r.queue.writeTexture({ texture: h }, y, {
								offset: 0,
								bytesPerRow: g * 4,
								rowsPerImage: i
							}, {
								width: g,
								height: i,
								depthOrArrayLayers: 1
							});
							var E = r.createSampler({
								magFilter: "linear",
								minFilter: "linear"
							}), k = r.createBindGroupLayout({ entries: [{
								binding: 0,
								visibility: GPUShaderStage.FRAGMENT,
								texture: { sampleType: "float" }
							}, {
								binding: 1,
								visibility: GPUShaderStage.FRAGMENT,
								sampler: {}
							}] }), T = r.createBindGroup({
								layout: k,
								entries: [{
									binding: 0,
									resource: h.createView()
								}, {
									binding: 1,
									resource: E
								}]
							}), D = r.createShaderModule({ code: v }), x = r.createShaderModule({ code: S }), $ = r.createRenderPipeline({
								layout: r.createPipelineLayout({ bindGroupLayouts: [k] }),
								vertex: {
									module: D,
									entryPoint: "vs_main"
								},
								fragment: {
									module: x,
									entryPoint: "fs_main",
									targets: [{ format: s }]
								},
								primitive: { topology: "triangle-list" }
							}), P = function() {
								var e = r.createCommandEncoder(), t = { colorAttachments: [{
									view: a.getCurrentTexture().createView(),
									clearValue: {
										r: 0,
										g: 0,
										b: 0,
										a: 1
									},
									loadOp: "clear",
									storeOp: "store"
								}] }, n = e.beginRenderPass(t);
								n.setPipeline($), n.setBindGroup(0, T), n.draw(6, 1, 0, 0), n.end(), r.queue.submit([e.finish()]), o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Static RGB texture rendered successfully using WebGPU"])));
							};
							P(), I(!0), o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["WebGPU renderer initialized and static RGB texture rendered"])));
						} catch (e) {
							o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Failed to initialize WebGPU: ", ""])), e), L(!1);
						}
					});
					return function() {
						return r.apply(this, arguments);
					};
				})();
				r();
			}
		}, [
			g,
			i,
			l,
			a
		]), h.jsxs(r("WAWebVoipWebWasmSampleContainer.react"), { children: [
			h.jsx(o("WAWebText.react").WAWebTextLarge, { children: s._(
				/*BTDS*/
				""
			) }),
			h.jsx("p", { children: s._(
				/*BTDS*/
				""
			) }),
			h.jsx("p", { children: s._(
				/*BTDS*/
				""
			) }),
			!R && h.jsxs("div", {
				style: {
					color: "red",
					marginBottom: "10px"
				},
				children: [h.jsx("p", { children: s._(
					/*BTDS*/
					""
				) }), h.jsx("p", { children: s._(
					/*BTDS*/
					""
				) })]
			}),
			h.jsx("div", {
				style: {
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					margin: o("WDSVars.stylex").WDSVars.spacingDoublePlus + " 0"
				},
				children: h.jsx("canvas", {
					ref: function(t) {
						t && a.current !== t && (a.current = t);
					},
					style: {
						border: "2px solid blue",
						borderRadius: o("WDSVars.stylex").WDSVars.borderRadiusHalf,
						display: "block"
					},
					width: 640,
					height: 480
				})
			}),
			h.jsx("div", {
				style: { marginTop: "10px" },
				children: h.jsxs("p", { children: [
					s._(
						/*BTDS*/
						""
					),
					" ",
					!R && s._(
						/*BTDS*/
						""
					),
					R && k && s._(
						/*BTDS*/
						""
					),
					R && !k && s._(
						/*BTDS*/
						""
					)
				] })
			})
		] });
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = R;
}), 226);

__d("WAWebVoipWebWasmSampleWebGPUNV12Texture.react", [
	"fbt",
	"WALogger",
	"WAWebVoipWebWasmSampleContainer.react",
	"WDSText.react",
	"WDSVars.stylex",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _, f, g, h, y = h || (h = o("react")), C = h, b = C.useEffect, v = C.useState, S = "\nstruct VertexOutput {\n  @builtin(position) position: vec4<f32>,\n  @location(0) texCoord: vec2<f32>,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {\n  var pos = array<vec2<f32>, 6>(\n    vec2<f32>(-1.0, -1.0),  // Bottom left\n    vec2<f32>( 1.0, -1.0),  // Bottom right\n    vec2<f32>(-1.0,  1.0),  // Top left\n    vec2<f32>(-1.0,  1.0),  // Top left\n    vec2<f32>( 1.0, -1.0),  // Bottom right\n    vec2<f32>( 1.0,  1.0)   // Top right\n  );\n\n  var texCoords = array<vec2<f32>, 6>(\n    vec2<f32>(0.0, 1.0),  // Bottom left\n    vec2<f32>(1.0, 1.0),  // Bottom right\n    vec2<f32>(0.0, 0.0),  // Top left\n    vec2<f32>(0.0, 0.0),  // Top left\n    vec2<f32>(1.0, 1.0),  // Bottom right\n    vec2<f32>(1.0, 0.0)   // Top right\n  );\n\n  var output: VertexOutput;\n  output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);\n  output.texCoord = texCoords[vertexIndex];\n  return output;\n}\n", R = "\nstruct VertexOutput {\n  @builtin(position) position: vec4<f32>,\n  @location(0) texCoord: vec2<f32>,\n}\n\n@group(0) @binding(0) var yTexture: texture_2d<f32>;\n@group(0) @binding(1) var uvTexture: texture_2d<f32>;\n@group(0) @binding(2) var mySampler: sampler;\n\n@fragment\nfn fs_main(input: VertexOutput) -> @location(0) vec4<f32> {\n  let y = textureSample(yTexture, mySampler, input.texCoord).r;\n  let uv = textureSample(uvTexture, mySampler, input.texCoord).rg;\n\n  let u = uv.r - 0.5;\n  let v = uv.g - 0.5;\n\n  // YUV to RGB conversion (BT.601 standard)\n  let r = y + 1.402 * v;\n  let g = y - 0.344136 * u - 0.714136 * v;\n  let b = y + 1.772 * u;\n\n  return vec4<f32>(r, g, b, 1.0);\n}\n";
	function L(t) {
		var a = t.canvasRef, i = t.height, l = t.nv12Data, h = t.width, C = v(!0), L = C[0], E = C[1], k = v(!1), I = k[0], T = k[1];
		return b(function() {
			var t = a.current;
			if (t != null) {
				var r = null, s = null, y = (function() {
					var a = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
						try {
							if (!navigator.gpu) {
								o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WebGPU not supported in this browser"]))), E(!1);
								return;
							}
							o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Initializing WebGPU renderer for NV12 texture"])));
							var n = yield navigator.gpu.requestAdapter();
							if (!n) {
								o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["No suitable WebGPU adapter found"]))), E(!1);
								return;
							}
							var a = yield n.requestDevice();
							if (!a) {
								o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Failed to create WebGPU device"]))), E(!1);
								return;
							}
							var y = t.getContext("webgpu");
							if (!y) {
								o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Failed to get WebGPU context"]))), E(!1);
								return;
							}
							var C = "bgra8unorm";
							y.configure({
								device: a,
								format: C
							});
							var b = h * i, v = h / 2 * (i / 2) * 2;
							if (l.length < b + v) {
								o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
									"Invalid NV12 data size. Expected at least ",
									" bytes, got ",
									""
								])), b + v, l.length), E(!1);
								return;
							}
							var L = l.slice(0, b), k = l.slice(b, b + v);
							r = a.createTexture({
								size: {
									width: h,
									height: i,
									depthOrArrayLayers: 1
								},
								format: "r8unorm",
								usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
							}), s = a.createTexture({
								size: {
									width: h / 2,
									height: i / 2,
									depthOrArrayLayers: 1
								},
								format: "rg8unorm",
								usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
							}), a.queue.writeTexture({ texture: r }, L, {
								offset: 0,
								bytesPerRow: h,
								rowsPerImage: i
							}, {
								width: h,
								height: i,
								depthOrArrayLayers: 1
							}), a.queue.writeTexture({ texture: s }, k, {
								offset: 0,
								bytesPerRow: h,
								rowsPerImage: i / 2
							}, {
								width: h / 2,
								height: i / 2,
								depthOrArrayLayers: 1
							});
							var I = a.createSampler({
								magFilter: "linear",
								minFilter: "linear"
							}), D = a.createBindGroupLayout({ entries: [
								{
									binding: 0,
									visibility: GPUShaderStage.FRAGMENT,
									texture: { sampleType: "float" }
								},
								{
									binding: 1,
									visibility: GPUShaderStage.FRAGMENT,
									texture: { sampleType: "float" }
								},
								{
									binding: 2,
									visibility: GPUShaderStage.FRAGMENT,
									sampler: {}
								}
							] }), x = a.createBindGroup({
								layout: D,
								entries: [
									{
										binding: 0,
										resource: r.createView()
									},
									{
										binding: 1,
										resource: s.createView()
									},
									{
										binding: 2,
										resource: I
									}
								]
							}), $ = a.createShaderModule({ code: S }), P = a.createShaderModule({ code: R }), N = a.createRenderPipeline({
								layout: a.createPipelineLayout({ bindGroupLayouts: [D] }),
								vertex: {
									module: $,
									entryPoint: "vs_main"
								},
								fragment: {
									module: P,
									entryPoint: "fs_main",
									targets: [{ format: C }]
								},
								primitive: { topology: "triangle-list" }
							}), M = function() {
								var e = a.createCommandEncoder(), t = { colorAttachments: [{
									view: y.getCurrentTexture().createView(),
									clearValue: {
										r: 0,
										g: 0,
										b: 0,
										a: 1
									},
									loadOp: "clear",
									storeOp: "store"
								}] }, n = e.beginRenderPass(t);
								n.setPipeline(N), n.setBindGroup(0, x), n.draw(6, 1, 0, 0), n.end(), a.queue.submit([e.finish()]), o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["NV12 texture rendered successfully using WebGPU"])));
							};
							M(), T(!0), o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["WebGPU renderer initialized and NV12 texture rendered"])));
						} catch (e) {
							o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["Failed to initialize WebGPU: ", ""])), e), E(!1);
						}
					});
					return function() {
						return a.apply(this, arguments);
					};
				})();
				return y(), function() {
					r != null && r.destroy(), s != null && s.destroy();
				};
			}
		}, [
			h,
			i,
			l,
			a
		]), y.jsxs(r("WAWebVoipWebWasmSampleContainer.react"), { children: [
			y.jsx(r("WDSText.react"), {
				type: "Headline1",
				colorName: "contentDefault",
				children: s._(
					/*BTDS*/
					""
				)
			}),
			y.jsx("p", { children: s._(
				/*BTDS*/
				""
			) }),
			y.jsx("p", { children: s._(
				/*BTDS*/
				""
			) }),
			!L && y.jsxs("div", {
				style: {
					color: "red",
					marginBottom: "10px"
				},
				children: [y.jsx("p", { children: s._(
					/*BTDS*/
					""
				) }), y.jsx("p", { children: s._(
					/*BTDS*/
					""
				) })]
			}),
			y.jsx("div", {
				style: {
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					margin: o("WDSVars.stylex").WDSVars.spacingDoublePlus + " 0"
				},
				children: y.jsx("canvas", {
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
			y.jsx("div", {
				style: { marginTop: "10px" },
				children: y.jsxs("p", { children: [
					s._(
						/*BTDS*/
						""
					),
					!L && s._(
						/*BTDS*/
						""
					),
					L && I && s._(
						/*BTDS*/
						""
					),
					L && !I && s._(
						/*BTDS*/
						""
					)
				] })
			})
		] });
	}
	L.displayName = L.name + " [from " + i.id + "]", l.default = L;
}), 226);

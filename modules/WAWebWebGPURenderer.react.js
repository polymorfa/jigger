__d("WAWebWebGPURenderer.react", [
	"WALogger",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h = g || (g = o("react")), y = g, C = y.useEffect, b = y.useRef, v = "\nstruct VertexOutput {\n  @builtin(position) position: vec4<f32>,\n  @location(0) texCoord: vec2<f32>,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {\n  var pos = array<vec2<f32>, 6>(\n    vec2<f32>(-1.0, -1.0),  // Bottom left\n    vec2<f32>( 1.0, -1.0),  // Bottom right\n    vec2<f32>(-1.0,  1.0),  // Top left\n    vec2<f32>(-1.0,  1.0),  // Top left\n    vec2<f32>( 1.0, -1.0),  // Bottom right\n    vec2<f32>( 1.0,  1.0)   // Top right\n  );\n\n  var texCoords = array<vec2<f32>, 6>(\n    vec2<f32>(0.0, 1.0),  // Bottom left\n    vec2<f32>(1.0, 1.0),  // Bottom right\n    vec2<f32>(0.0, 0.0),  // Top left\n    vec2<f32>(0.0, 0.0),  // Top left\n    vec2<f32>(1.0, 1.0),  // Bottom right\n    vec2<f32>(1.0, 0.0)   // Top right\n  );\n\n  var output: VertexOutput;\n  output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);\n  output.texCoord = texCoords[vertexIndex];\n  return output;\n}\n", S = "\nstruct VertexOutput {\n  @builtin(position) position: vec4<f32>,\n  @location(0) texCoord: vec2<f32>,\n}\n\n@group(0) @binding(0) var yTexture: texture_2d<f32>;\n@group(0) @binding(1) var uvTexture: texture_2d<f32>;\n@group(0) @binding(2) var mySampler: sampler;\n\n@fragment\nfn fs_main(input: VertexOutput) -> @location(0) vec4<f32> {\n  let y = textureSample(yTexture, mySampler, input.texCoord).r;\n  let uv = textureSample(uvTexture, mySampler, input.texCoord).rg;\n\n  let u = uv.r - 0.5;\n  let v = uv.g - 0.5;\n\n  // YUV to RGB conversion (BT.601 standard)\n  let r = y + 1.402 * v;\n  let g = y - 0.344136 * u - 0.714136 * v;\n  let b = y + 1.772 * u;\n\n  return vec4<f32>(r, g, b, 1.0);\n}\n";
	function R(t) {
		var r = t.height, a = t.nv12Data, i = t.onError, l = t.onInitialized, g = t.width, y = b(null), R = b(null), L = b(null), E = b(null), k = b(null), I = b(null), T = b(null), D = b(null);
		return C(function() {
			var t = (function() {
				var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					try {
						if (!navigator.gpu) {
							o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WebGPU not supported in this browser"]))), i == null || i("WebGPU not supported in this browser");
							return;
						}
						o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Initializing WebGPU renderer"])));
						var t = yield navigator.gpu.requestAdapter();
						if (!t) {
							o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["No suitable WebGPU adapter found"]))), i == null || i("No suitable WebGPU adapter found");
							return;
						}
						var n = yield t.requestDevice();
						if (!n) {
							o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Failed to create WebGPU device"]))), i == null || i("Failed to create WebGPU device");
							return;
						}
						R.current = n;
						var a = y.current;
						if (!a) {
							o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Canvas not available"]))), i == null || i("Canvas not available");
							return;
						}
						var f = a.getContext("webgpu");
						if (!f) {
							o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Failed to get WebGPU context"]))), i == null || i("Failed to get WebGPU context");
							return;
						}
						L.current = f;
						var h = "bgra8unorm";
						f.configure({
							device: n,
							format: h
						});
						var C = n.createTexture({
							size: {
								width: g,
								height: r,
								depthOrArrayLayers: 1
							},
							format: "r8unorm",
							usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
						});
						T.current = C;
						var b = n.createTexture({
							size: {
								width: g / 2,
								height: r / 2,
								depthOrArrayLayers: 1
							},
							format: "rg8unorm",
							usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
						});
						D.current = b;
						var x = n.createSampler({
							magFilter: "linear",
							minFilter: "linear"
						});
						I.current = x;
						var $ = n.createBindGroupLayout({ entries: [
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
						] });
						k.current = $;
						var P = n.createShaderModule({ code: v }), N = n.createShaderModule({ code: S }), M = n.createRenderPipeline({
							layout: n.createPipelineLayout({ bindGroupLayouts: [$] }),
							vertex: {
								module: P,
								entryPoint: "vs_main"
							},
							fragment: {
								module: N,
								entryPoint: "fs_main",
								targets: [{ format: h }]
							},
							primitive: { topology: "triangle-list" }
						});
						E.current = M, l == null || l(), o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["WebGPU renderer initialized"])));
					} catch (e) {
						o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Failed to initialize WebGPU: ", ""])), e), i == null || i("Failed to initialize WebGPU");
					}
				});
				return function() {
					return t.apply(this, arguments);
				};
			})();
			return t(), function() {
				var e = T.current, t = D.current;
				e != null && e.destroy(), t != null && t.destroy();
			};
		}, [
			g,
			r,
			i,
			l
		]), C(function() {
			if (a) {
				var e = R.current, t = L.current, n = E.current, i = k.current, l = I.current, s = T.current, u = D.current;
				if (!(!e || !t || !n || !i || !l || !s || !u)) try {
					var c = g * r, d = a.slice(0, c), m = a.slice(c);
					e.queue.writeTexture({ texture: s }, d, {
						offset: 0,
						bytesPerRow: g,
						rowsPerImage: r
					}, {
						width: g,
						height: r,
						depthOrArrayLayers: 1
					}), e.queue.writeTexture({ texture: u }, m, {
						offset: 0,
						bytesPerRow: g,
						rowsPerImage: r / 2
					}, {
						width: g / 2,
						height: r / 2,
						depthOrArrayLayers: 1
					});
					var p = e.createBindGroup({
						layout: i,
						entries: [
							{
								binding: 0,
								resource: s.createView()
							},
							{
								binding: 1,
								resource: u.createView()
							},
							{
								binding: 2,
								resource: l
							}
						]
					}), _ = e.createCommandEncoder(), h = { colorAttachments: [{
						view: t.getCurrentTexture().createView(),
						clearValue: {
							r: 0,
							g: 0,
							b: 0,
							a: 1
						},
						loadOp: "clear",
						storeOp: "store"
					}] }, y = _.beginRenderPass(h);
					y.setPipeline(n), y.setBindGroup(0, p), y.draw(6, 1, 0, 0), y.end(), e.queue.submit([_.finish()]);
				} catch (e) {
					o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Error rendering NV12 frame: ", ""])), e);
				}
			}
		}, [
			a,
			g,
			r
		]), h.jsx("canvas", {
			ref: function(t) {
				t && y.current !== t && (y.current = t);
			},
			width: g,
			height: r
		});
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = R;
}), 98);

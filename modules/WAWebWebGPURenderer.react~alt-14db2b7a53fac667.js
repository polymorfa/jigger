__d("WAWebWebGPURenderer.react", ["WALogger", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h = g || (g = o("react")), y = g, C = y.useEffect, b = y.useRef, v = `
struct VertexOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) texCoord: vec2<f32>,
}

@vertex
fn vs_main(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {
  var pos = array<vec2<f32>, 6>(
    vec2<f32>(-1.0, -1.0),  // Bottom left
    vec2<f32>( 1.0, -1.0),  // Bottom right
    vec2<f32>(-1.0,  1.0),  // Top left
    vec2<f32>(-1.0,  1.0),  // Top left
    vec2<f32>( 1.0, -1.0),  // Bottom right
    vec2<f32>( 1.0,  1.0)   // Top right
  );

  var texCoords = array<vec2<f32>, 6>(
    vec2<f32>(0.0, 1.0),  // Bottom left
    vec2<f32>(1.0, 1.0),  // Bottom right
    vec2<f32>(0.0, 0.0),  // Top left
    vec2<f32>(0.0, 0.0),  // Top left
    vec2<f32>(1.0, 1.0),  // Bottom right
    vec2<f32>(1.0, 0.0)   // Top right
  );

  var output: VertexOutput;
  output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
  output.texCoord = texCoords[vertexIndex];
  return output;
}
`, S = `
struct VertexOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) texCoord: vec2<f32>,
}

@group(0) @binding(0) var yTexture: texture_2d<f32>;
@group(0) @binding(1) var uvTexture: texture_2d<f32>;
@group(0) @binding(2) var mySampler: sampler;

@fragment
fn fs_main(input: VertexOutput) -> @location(0) vec4<f32> {
  let y = textureSample(yTexture, mySampler, input.texCoord).r;
  let uv = textureSample(uvTexture, mySampler, input.texCoord).rg;

  let u = uv.r - 0.5;
  let v = uv.g - 0.5;

  // YUV to RGB conversion (BT.601 standard)
  let r = y + 1.402 * v;
  let g = y - 0.344136 * u - 0.714136 * v;
  let b = y + 1.772 * u;

  return vec4<f32>(r, g, b, 1.0);
}
`;
	function R(t) {
		var n = t.height, r = t.nv12Data, a = t.onError, i = t.onInitialized, l = t.width, g = b(null), y = b(null), R = b(null), L = b(null), E = b(null), k = b(null), I = b(null), T = b(null);
		return C(function() {
			var t = async function() {
				try {
					if (!navigator.gpu) {
						o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WebGPU not supported in this browser"]))), a == null || a("WebGPU not supported in this browser");
						return;
					}
					o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Initializing WebGPU renderer"])));
					var t = await navigator.gpu.requestAdapter();
					if (!t) {
						o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["No suitable WebGPU adapter found"]))), a == null || a("No suitable WebGPU adapter found");
						return;
					}
					var r = await t.requestDevice();
					if (!r) {
						o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Failed to create WebGPU device"]))), a == null || a("Failed to create WebGPU device");
						return;
					}
					y.current = r;
					var f = g.current;
					if (!f) {
						o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Canvas not available"]))), a == null || a("Canvas not available");
						return;
					}
					var h = f.getContext("webgpu");
					if (!h) {
						o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Failed to get WebGPU context"]))), a == null || a("Failed to get WebGPU context");
						return;
					}
					R.current = h;
					var C = "bgra8unorm";
					h.configure({
						device: r,
						format: C
					});
					var b = r.createTexture({
						size: {
							width: l,
							height: n,
							depthOrArrayLayers: 1
						},
						format: "r8unorm",
						usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
					});
					I.current = b;
					var D = r.createTexture({
						size: {
							width: l / 2,
							height: n / 2,
							depthOrArrayLayers: 1
						},
						format: "rg8unorm",
						usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
					});
					T.current = D;
					var x = r.createSampler({
						magFilter: "linear",
						minFilter: "linear"
					});
					k.current = x;
					var $ = r.createBindGroupLayout({ entries: [
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
					E.current = $;
					var P = r.createShaderModule({ code: v }), N = r.createShaderModule({ code: S }), M = r.createRenderPipeline({
						layout: r.createPipelineLayout({ bindGroupLayouts: [$] }),
						vertex: {
							module: P,
							entryPoint: "vs_main"
						},
						fragment: {
							module: N,
							entryPoint: "fs_main",
							targets: [{ format: C }]
						},
						primitive: { topology: "triangle-list" }
					});
					L.current = M, i == null || i(), o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["WebGPU renderer initialized"])));
				} catch (e) {
					o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Failed to initialize WebGPU: ", ""])), e), a == null || a("Failed to initialize WebGPU");
				}
			};
			return t(), function() {
				var e = I.current, t = T.current;
				e != null && e.destroy(), t != null && t.destroy();
			};
		}, [
			l,
			n,
			a,
			i
		]), C(function() {
			if (r) {
				var e = y.current, t = R.current, a = L.current, i = E.current, s = k.current, u = I.current, c = T.current;
				if (!(!e || !t || !a || !i || !s || !u || !c)) try {
					var d = l * n, m = r.slice(0, d), p = r.slice(d);
					e.queue.writeTexture({ texture: u }, m, {
						offset: 0,
						bytesPerRow: l,
						rowsPerImage: n
					}, {
						width: l,
						height: n,
						depthOrArrayLayers: 1
					}), e.queue.writeTexture({ texture: c }, p, {
						offset: 0,
						bytesPerRow: l,
						rowsPerImage: n / 2
					}, {
						width: l / 2,
						height: n / 2,
						depthOrArrayLayers: 1
					});
					var _ = e.createBindGroup({
						layout: i,
						entries: [
							{
								binding: 0,
								resource: u.createView()
							},
							{
								binding: 1,
								resource: c.createView()
							},
							{
								binding: 2,
								resource: s
							}
						]
					}), g = e.createCommandEncoder(), h = { colorAttachments: [{
						view: t.getCurrentTexture().createView(),
						clearValue: {
							r: 0,
							g: 0,
							b: 0,
							a: 1
						},
						loadOp: "clear",
						storeOp: "store"
					}] }, C = g.beginRenderPass(h);
					C.setPipeline(a), C.setBindGroup(0, _), C.draw(6, 1, 0, 0), C.end(), e.queue.submit([g.finish()]);
				} catch (e) {
					o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Error rendering NV12 frame: ", ""])), e);
				}
			}
		}, [
			r,
			l,
			n
		]), h.jsx("canvas", {
			ref: function(t) {
				t && g.current !== t && (g.current = t);
			},
			width: l,
			height: n
		});
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = R;
}), 98);

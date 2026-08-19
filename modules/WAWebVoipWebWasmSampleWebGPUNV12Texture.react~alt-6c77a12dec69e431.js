__d("WAWebVoipWebWasmSampleWebGPUNV12Texture.react", [
	"fbt",
	"WALogger",
	"WAWebVoipWebWasmSampleContainer.react",
	"WDSText.react",
	"WDSVars.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _, f, g, h, y = h || (h = o("react")), C = h, b = C.useEffect, v = C.useState, S = `
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
`, R = `
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
	function L(t) {
		var n = t.canvasRef, a = t.height, i = t.nv12Data, l = t.width, h = v(!0), C = h[0], L = h[1], E = v(!1), k = E[0], I = E[1];
		return b(function() {
			var t = n.current;
			if (t != null) {
				var r = null, s = null, h = async function() {
					try {
						if (!navigator.gpu) {
							o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WebGPU not supported in this browser"]))), L(!1);
							return;
						}
						o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Initializing WebGPU renderer for NV12 texture"])));
						var n = await navigator.gpu.requestAdapter();
						if (!n) {
							o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["No suitable WebGPU adapter found"]))), L(!1);
							return;
						}
						var h = await n.requestDevice();
						if (!h) {
							o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Failed to create WebGPU device"]))), L(!1);
							return;
						}
						var y = t.getContext("webgpu");
						if (!y) {
							o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Failed to get WebGPU context"]))), L(!1);
							return;
						}
						var C = "bgra8unorm";
						y.configure({
							device: h,
							format: C
						});
						var b = l * a, v = l / 2 * (a / 2) * 2;
						if (i.length < b + v) {
							o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
								"Invalid NV12 data size. Expected at least ",
								" bytes, got ",
								""
							])), b + v, i.length), L(!1);
							return;
						}
						var E = i.slice(0, b), k = i.slice(b, b + v);
						r = h.createTexture({
							size: {
								width: l,
								height: a,
								depthOrArrayLayers: 1
							},
							format: "r8unorm",
							usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
						}), s = h.createTexture({
							size: {
								width: l / 2,
								height: a / 2,
								depthOrArrayLayers: 1
							},
							format: "rg8unorm",
							usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
						}), h.queue.writeTexture({ texture: r }, E, {
							offset: 0,
							bytesPerRow: l,
							rowsPerImage: a
						}, {
							width: l,
							height: a,
							depthOrArrayLayers: 1
						}), h.queue.writeTexture({ texture: s }, k, {
							offset: 0,
							bytesPerRow: l,
							rowsPerImage: a / 2
						}, {
							width: l / 2,
							height: a / 2,
							depthOrArrayLayers: 1
						});
						var T = h.createSampler({
							magFilter: "linear",
							minFilter: "linear"
						}), D = h.createBindGroupLayout({ entries: [
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
						] }), x = h.createBindGroup({
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
									resource: T
								}
							]
						}), $ = h.createShaderModule({ code: S }), P = h.createShaderModule({ code: R }), N = h.createRenderPipeline({
							layout: h.createPipelineLayout({ bindGroupLayouts: [D] }),
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
							var e = h.createCommandEncoder(), t = { colorAttachments: [{
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
							n.setPipeline(N), n.setBindGroup(0, x), n.draw(6, 1, 0, 0), n.end(), h.queue.submit([e.finish()]), o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["NV12 texture rendered successfully using WebGPU"])));
						};
						M(), I(!0), o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["WebGPU renderer initialized and NV12 texture rendered"])));
					} catch (e) {
						o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["Failed to initialize WebGPU: ", ""])), e), L(!1);
					}
				};
				return h(), function() {
					r != null && r.destroy(), s != null && s.destroy();
				};
			}
		}, [
			l,
			a,
			i,
			n
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
			!C && y.jsxs("div", {
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
						t && n.current !== t && (n.current = t);
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
					!C && s._(
						/*BTDS*/
						""
					),
					C && k && s._(
						/*BTDS*/
						""
					),
					C && !k && s._(
						/*BTDS*/
						""
					)
				] })
			})
		] });
	}
	L.displayName = L.name + " [from " + i.id + "]", l.default = L;
}), 226);

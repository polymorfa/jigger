__d("WAWebVoipWebWasmSampleWebGPUStaticRgbTexture.react", [
	"fbt",
	"WALogger",
	"WAWebText.react",
	"WAWebVoipWebWasmSampleContainer.react",
	"WDSVars.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _, f, g, h = g || (g = o("react")), y = g, C = y.useEffect, b = y.useState, v = `
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

@group(0) @binding(0) var myTexture: texture_2d<f32>;
@group(0) @binding(1) var mySampler: sampler;

@fragment
fn fs_main(input: VertexOutput) -> @location(0) vec4<f32> {
  return textureSample(myTexture, mySampler, input.texCoord);
}
`;
	function R(t) {
		var n = t.canvasRef, a = t.height, i = t.textureData, l = t.width, g = b(!0), y = g[0], R = g[1], L = b(!1), E = L[0], k = L[1];
		return C(function() {
			var t = n.current;
			if (t != null) {
				var r = async function() {
					try {
						if (!navigator.gpu) {
							o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WebGPU not supported in this browser"]))), R(!1);
							return;
						}
						o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Initializing WebGPU renderer for static RGB texture"])));
						var n = await navigator.gpu.requestAdapter();
						if (!n) {
							o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["No suitable WebGPU adapter found"]))), R(!1);
							return;
						}
						var r = await n.requestDevice();
						if (!r) {
							o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Failed to create WebGPU device"]))), R(!1);
							return;
						}
						var s = t.getContext("webgpu");
						if (!s) {
							o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Failed to get WebGPU context"]))), R(!1);
							return;
						}
						var g = "bgra8unorm";
						s.configure({
							device: r,
							format: g
						});
						for (var h = r.createTexture({
							size: {
								width: l,
								height: a,
								depthOrArrayLayers: 1
							},
							format: "rgba8unorm",
							usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
						}), y = new Uint8Array(l * a * 4), C = 0; C < l * a; C++) {
							var b = C * 3, L = C * 4;
							y[L] = i[b], y[L + 1] = i[b + 1], y[L + 2] = i[b + 2], y[L + 3] = 255;
						}
						r.queue.writeTexture({ texture: h }, y, {
							offset: 0,
							bytesPerRow: l * 4,
							rowsPerImage: a
						}, {
							width: l,
							height: a,
							depthOrArrayLayers: 1
						});
						var E = r.createSampler({
							magFilter: "linear",
							minFilter: "linear"
						}), I = r.createBindGroupLayout({ entries: [{
							binding: 0,
							visibility: GPUShaderStage.FRAGMENT,
							texture: { sampleType: "float" }
						}, {
							binding: 1,
							visibility: GPUShaderStage.FRAGMENT,
							sampler: {}
						}] }), T = r.createBindGroup({
							layout: I,
							entries: [{
								binding: 0,
								resource: h.createView()
							}, {
								binding: 1,
								resource: E
							}]
						}), D = r.createShaderModule({ code: v }), x = r.createShaderModule({ code: S }), $ = r.createRenderPipeline({
							layout: r.createPipelineLayout({ bindGroupLayouts: [I] }),
							vertex: {
								module: D,
								entryPoint: "vs_main"
							},
							fragment: {
								module: x,
								entryPoint: "fs_main",
								targets: [{ format: g }]
							},
							primitive: { topology: "triangle-list" }
						}), P = function() {
							var e = r.createCommandEncoder(), t = { colorAttachments: [{
								view: s.getCurrentTexture().createView(),
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
						P(), k(!0), o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["WebGPU renderer initialized and static RGB texture rendered"])));
					} catch (e) {
						o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Failed to initialize WebGPU: ", ""])), e), R(!1);
					}
				};
				r();
			}
		}, [
			l,
			a,
			i,
			n
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
			!y && h.jsxs("div", {
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
			h.jsx("div", {
				style: { marginTop: "10px" },
				children: h.jsxs("p", { children: [
					s._(
						/*BTDS*/
						""
					),
					" ",
					!y && s._(
						/*BTDS*/
						""
					),
					y && E && s._(
						/*BTDS*/
						""
					),
					y && !E && s._(
						/*BTDS*/
						""
					)
				] })
			})
		] });
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = R;
}), 226);

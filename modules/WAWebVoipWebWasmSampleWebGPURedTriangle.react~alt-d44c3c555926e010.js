__d("WAWebVoipWebWasmSampleWebGPURedTriangle.react", [
	"WALogger",
	"WAWebText.react",
	"WAWebVoipWebWasmSampleContainer.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g = f || (f = o("react")), h = f, y = h.useEffect, C = h.useRef, b = h.useState, v = `
@vertex
fn vs_main(@builtin(vertex_index) vertexIndex: u32) -> @builtin(position) vec4<f32> {
  var pos = array<vec2<f32>, 3>(
    vec2<f32>(-0.5, -0.5),  // Bottom left
    vec2<f32>( 0.5, -0.5),  // Bottom right
    vec2<f32>( 0.0,  0.5)   // Top center
  );
  return vec4<f32>(pos[vertexIndex], 0.0, 1.0);
}
`, S = `
@fragment
fn fs_main() -> @location(0) vec4<f32> {
  return vec4<f32>(1.0, 0.0, 0.0, 1.0); // Red color
}
`;
	function R() {
		var t = C(null), n = b(!0), a = n[0], i = n[1], l = b(!1), f = l[0], h = l[1];
		return y(function() {
			var n = t.current;
			if (n != null) {
				var r = async function() {
					try {
						if (!navigator.gpu) {
							o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WebGPU not supported in this browser"]))), i(!1);
							return;
						}
						o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Initializing WebGPU renderer for red triangle"])));
						var t = await navigator.gpu.requestAdapter();
						if (!t) {
							o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["No suitable WebGPU adapter found"]))), i(!1);
							return;
						}
						var r = await t.requestDevice();
						if (!r) {
							o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Failed to create WebGPU device"]))), i(!1);
							return;
						}
						var a = n.getContext("webgpu");
						if (!a) {
							o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Failed to get WebGPU context"]))), i(!1);
							return;
						}
						var l = "bgra8unorm";
						a.configure({
							device: r,
							format: l
						});
						var f = r.createShaderModule({ code: v }), g = r.createShaderModule({ code: S }), y = r.createRenderPipeline({
							layout: "auto",
							vertex: {
								module: f,
								entryPoint: "vs_main"
							},
							fragment: {
								module: g,
								entryPoint: "fs_main",
								targets: [{ format: l }]
							},
							primitive: { topology: "triangle-list" }
						}), C = function() {
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
							n.setPipeline(y), n.draw(3, 1, 0, 0), n.end(), r.queue.submit([e.finish()]), o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Red triangle rendered successfully using WebGPU"])));
						};
						C(), h(!0), o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["WebGPU renderer initialized and red triangle rendered"])));
					} catch (e) {
						o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Failed to initialize WebGPU: ", ""])), e), i(!1);
					}
				};
				r();
			}
		}, []), g.jsxs(r("WAWebVoipWebWasmSampleContainer.react"), { children: [
			g.jsx(o("WAWebText.react").WAWebTextLarge, { children: "WebGPU Red Triangle Demo" }),
			g.jsx("p", { children: "This demo renders a red triangle using WebGPU." }),
			g.jsx("p", { children: "Note: This demo requires WebGPU support (Chrome 113+, Edge 113+, or Firefox with webgpu enabled)" }),
			!a && g.jsxs("div", {
				style: {
					color: "red",
					marginBottom: "10px"
				},
				children: [g.jsx("p", { children: "⚠️ WebGPU is not supported in this browser." }), g.jsx("p", { children: "Please use Chrome 113+, Edge 113+, or Firefox with WebGPU enabled." })]
			}),
			g.jsx("canvas", {
				ref: t,
				style: { border: "2px solid red" },
				width: 640,
				height: 480
			}),
			g.jsx("div", {
				style: { marginTop: "10px" },
				children: g.jsxs("p", { children: [
					"Status:",
					" ",
					a ? f ? "Red Triangle Rendered ✓" : "Initializing..." : "WebGPU Not Supported"
				] })
			})
		] });
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = R;
}), 98);

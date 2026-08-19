__d("WAWebVoipWebWasmSampleWebGPURedTriangle.react", [
	"WALogger",
	"WAWebText.react",
	"WAWebVoipWebWasmSampleContainer.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g = f || (f = o("react")), h = f, y = h.useEffect, C = h.useRef, b = h.useState, v = "\n@vertex\nfn vs_main(@builtin(vertex_index) vertexIndex: u32) -> @builtin(position) vec4<f32> {\n  var pos = array<vec2<f32>, 3>(\n    vec2<f32>(-0.5, -0.5),  // Bottom left\n    vec2<f32>( 0.5, -0.5),  // Bottom right\n    vec2<f32>( 0.0,  0.5)   // Top center\n  );\n  return vec4<f32>(pos[vertexIndex], 0.0, 1.0);\n}\n", S = "\n@fragment\nfn fs_main() -> @location(0) vec4<f32> {\n  return vec4<f32>(1.0, 0.0, 0.0, 1.0); // Red color\n}\n";
	function R() {
		var t = C(null), a = b(!0), i = a[0], l = a[1], f = b(!1), h = f[0], R = f[1];
		return y(function() {
			var r = t.current;
			if (r != null) {
				var a = (function() {
					var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
						try {
							if (!navigator.gpu) {
								o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WebGPU not supported in this browser"]))), l(!1);
								return;
							}
							o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Initializing WebGPU renderer for red triangle"])));
							var t = yield navigator.gpu.requestAdapter();
							if (!t) {
								o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["No suitable WebGPU adapter found"]))), l(!1);
								return;
							}
							var n = yield t.requestDevice();
							if (!n) {
								o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Failed to create WebGPU device"]))), l(!1);
								return;
							}
							var a = r.getContext("webgpu");
							if (!a) {
								o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Failed to get WebGPU context"]))), l(!1);
								return;
							}
							var i = "bgra8unorm";
							a.configure({
								device: n,
								format: i
							});
							var f = n.createShaderModule({ code: v }), g = n.createShaderModule({ code: S }), h = n.createRenderPipeline({
								layout: "auto",
								vertex: {
									module: f,
									entryPoint: "vs_main"
								},
								fragment: {
									module: g,
									entryPoint: "fs_main",
									targets: [{ format: i }]
								},
								primitive: { topology: "triangle-list" }
							}), y = function() {
								var e = n.createCommandEncoder(), t = { colorAttachments: [{
									view: a.getCurrentTexture().createView(),
									clearValue: {
										r: 0,
										g: 0,
										b: 0,
										a: 1
									},
									loadOp: "clear",
									storeOp: "store"
								}] }, r = e.beginRenderPass(t);
								r.setPipeline(h), r.draw(3, 1, 0, 0), r.end(), n.queue.submit([e.finish()]), o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Red triangle rendered successfully using WebGPU"])));
							};
							y(), R(!0), o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["WebGPU renderer initialized and red triangle rendered"])));
						} catch (e) {
							o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["Failed to initialize WebGPU: ", ""])), e), l(!1);
						}
					});
					return function() {
						return t.apply(this, arguments);
					};
				})();
				a();
			}
		}, []), g.jsxs(r("WAWebVoipWebWasmSampleContainer.react"), { children: [
			g.jsx(o("WAWebText.react").WAWebTextLarge, { children: "WebGPU Red Triangle Demo" }),
			g.jsx("p", { children: "This demo renders a red triangle using WebGPU." }),
			g.jsx("p", { children: "Note: This demo requires WebGPU support (Chrome 113+, Edge 113+, or Firefox with webgpu enabled)" }),
			!i && g.jsxs("div", {
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
					i ? h ? "Red Triangle Rendered ✓" : "Initializing..." : "WebGPU Not Supported"
				] })
			})
		] });
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = R;
}), 98);

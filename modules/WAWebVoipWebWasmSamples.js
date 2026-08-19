__d("WAWebVoipWebWasmSamples", [
	"$InternalEnum",
	"WAWebVoipWebWasmSampleJsWorkerThread.react",
	"WAWebVoipWebWasmSampleVideo.react",
	"WAWebVoipWebWasmSampleVideoColorbars.react",
	"WAWebVoipWebWasmSampleVoipUI.react",
	"WAWebVoipWebWasmSampleWebGPUCamera.react",
	"WAWebVoipWebWasmSampleWebGPUNV12Texture.react",
	"WAWebVoipWebWasmSampleWebGPURedTriangle.react",
	"WAWebVoipWebWasmSampleWebGPUStaticRgbTexture.react",
	"WAWebVoipWebWasmSampleWebcodecLoopback.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useRef, d = n("$InternalEnum")({
		Video: "Video demo",
		WebcodecCameraLoopback: "Webcodec camera loopback",
		WebGPURedTriangle: "WebGPU Red Triangle",
		WebGPUStaticRgbTexture: "WebGPU Static RGB Texture",
		WebGPUNV12Texture: "WebGPU NV12 Texture",
		WebGPUCamera: "WebGPU Camera",
		VoipUI: "Voip video call UI",
		VoipWebGLUI: "Voip video call UI (WebGL)",
		JsWorkerThreads: "JS Worker Threads demo",
		VideoColorbars: "Video colorbars"
	});
	function m() {
		var e = o("react-compiler-runtime").c(1), t = c(null), n = p, a;
		if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
			var i = n();
			a = u.jsx(r("WAWebVoipWebWasmSampleWebGPUStaticRgbTexture.react"), {
				canvasRef: t,
				width: i.width,
				height: i.height,
				textureData: i.data
			}), e[0] = a;
		} else a = e[0];
		return a;
	}
	function p() {
		for (var e = new Uint8Array(18e4), t = 0; t < 200; t++) for (var n = 0; n < 300; n++) {
			var r = (t * 300 + n) * 3;
			n < 100 ? (e[r] = 255, e[r + 1] = 0, e[r + 2] = 0) : n < 200 ? (e[r] = 0, e[r + 1] = 255, e[r + 2] = 0) : (e[r] = 0, e[r + 1] = 0, e[r + 2] = 255);
		}
		return {
			width: 300,
			height: 200,
			data: e
		};
	}
	function _() {
		var e = o("react-compiler-runtime").c(1), t = c(null), n = f, a;
		if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
			var i = n();
			a = u.jsx(r("WAWebVoipWebWasmSampleWebGPUNV12Texture.react"), {
				canvasRef: t,
				width: i.width,
				height: i.height,
				nv12Data: i.data
			}), e[0] = a;
		} else a = e[0];
		return a;
	}
	function f() {
		for (var e = new Uint8Array(9e4), t = [
			{
				y: 77,
				u: 85,
				v: 255
			},
			{
				y: 150,
				u: 43,
				v: 21
			},
			{
				y: 29,
				u: 255,
				v: 107
			}
		], n = 0; n < 200; n++) for (var r = 0; r < 300; r++) {
			var o = n * 300 + r, a = void 0;
			r < 100 ? a = 0 : r < 200 ? a = 1 : a = 2, e[o] = t[a].y;
		}
		for (var i = 0; i < 100; i++) for (var l = 0; l < 150; l++) {
			var s = 6e4 + (i * 150 + l) * 2, u = l * 2, c = void 0;
			u < 100 ? c = 0 : u < 200 ? c = 1 : c = 2, e[s] = t[c].u, e[s + 1] = t[c].v;
		}
		return {
			width: 300,
			height: 200,
			data: e
		};
	}
	var g = (e = {}, e[d.JsWorkerThreads] = r("WAWebVoipWebWasmSampleJsWorkerThread.react"), e[d.Video] = r("WAWebVoipWebWasmSampleVideo.react"), e[d.WebcodecCameraLoopback] = r("WAWebVoipWebWasmSampleWebcodecLoopback.react"), e[d.WebGPURedTriangle] = r("WAWebVoipWebWasmSampleWebGPURedTriangle.react"), e[d.WebGPUStaticRgbTexture] = m, e[d.WebGPUNV12Texture] = _, e[d.WebGPUCamera] = r("WAWebVoipWebWasmSampleWebGPUCamera.react"), e[d.VoipUI] = r("WAWebVoipWebWasmSampleVoipUI.react"), e[d.VideoColorbars] = r("WAWebVoipWebWasmSampleVideoColorbars.react"), e);
	l.WasmSamplesList = d, l.WAWebVoipWebWasmSamples = g;
}), 98);

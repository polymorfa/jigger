__d("WAWebVoipWebWasmSampleVideo.react", [
	"VultureJSDeadComponent.react",
	"WAWebRgbaCanvas.react",
	"WAWebText.react",
	"WAWebVoipGatingUtils",
	"WAWebVoipWebWasmSampleContainer.react",
	"WAWebVoipWebWasmSampleVideoCamera.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u() {
		if (!o("WAWebVoipGatingUtils").isCallingEnabled()) return s.jsx(r("WAWebVoipWebWasmSampleContainer.react"), { children: s.jsx(o("WAWebText.react").WAWebTextLarge, { children: "VoIP WASM not available." }) });
		for (var e = new Uint8Array(360 * 640 * 4), t = 0, n = 0; n < e.length / 4; n += 4) e[n] = t % 2 === 1 ? 255 : 0, e[n + 1] = 0, e[n + 2] = t % 2 === 0 ? 255 : 0, e[n + 3] = 255;
		for (var a = e.length / 4; a < 2 * e.length / 4; a += 4) e[a] = 0, e[a + 1] = 255, e[a + 2] = 0, e[a + 3] = 255;
		for (var i = 2 * e.length / 4; i < 3 * e.length / 4; i += 4) e[i] = t % 2 === 0 ? 255 : 0, e[i + 1] = 0, e[i + 2] = t % 2 === 1 ? 255 : 0, e[i + 3] = 255;
		for (var l = 3 * e.length / 4; l < e.length; l += 4) e[l] = 255, e[l + 1] = 255, e[l + 2] = 0, e[l + 3] = 255;
		var u = s.jsx(r("WAWebRgbaCanvas.react"), {
			className: "waweb-voip-canvas",
			height: 360,
			rgbaBuffer: e.buffer,
			width: 640
		});
		return s.jsxs(r("WAWebVoipWebWasmSampleContainer.react"), { children: [
			s.jsx(o("WAWebText.react").WAWebTextLarge, { children: "Video Voip WASM loopback example" }),
			s.jsx(r("WAWebVoipWebWasmSampleVideoCamera.react"), {}),
			u,
			s.jsx(r("VultureJSDeadComponent.react"), { name: "WAWebVoipWebWasmSampleVideoCanvas2D" })
		] });
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);

__d("WAWebVoipWebWasmSampleVideo.react", [
	"VultureJSDeadComponent.react",
	"WAWebRgbaCanvas.react",
	"WAWebText.react",
	"WAWebVoipGatingUtils",
	"WAWebVoipWebWasmSampleContainer.react",
	"WAWebVoipWebWasmSampleVideoCamera.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u() {
		var e = o("react-compiler-runtime").c(5);
		if (!o("WAWebVoipGatingUtils").isCallingEnabled()) {
			var t;
			return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s.jsx(r("WAWebVoipWebWasmSampleContainer.react"), { children: s.jsx(o("WAWebText.react").WAWebTextLarge, { children: "VoIP WASM not available." }) }), e[0] = t) : t = e[0], t;
		}
		var n;
		if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
			for (var a = new Uint8Array(921600), i = 0; i < a.length / 4; i = i + 4, i) a[i] = 0, a[i + 1] = 0, a[i + 2] = 255, a[i + 3] = 255;
			for (var l = a.length / 4; l < 2 * a.length / 4; l = l + 4, l) a[l] = 0, a[l + 1] = 255, a[l + 2] = 0, a[l + 3] = 255;
			for (var u = 2 * a.length / 4; u < 3 * a.length / 4; u = u + 4, u) a[u] = 255, a[u + 1] = 0, a[u + 2] = 0, a[u + 3] = 255;
			for (var c = 3 * a.length / 4; c < a.length; c = c + 4, c) a[c] = 255, a[c + 1] = 255, a[c + 2] = 0, a[c + 3] = 255;
			n = s.jsx(r("WAWebRgbaCanvas.react"), {
				className: "waweb-voip-canvas",
				height: 360,
				rgbaBuffer: a.buffer,
				width: 640
			}), e[1] = n;
		} else n = e[1];
		var d = n, m, p;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (m = s.jsx(o("WAWebText.react").WAWebTextLarge, { children: "Video Voip WASM loopback example" }), p = s.jsx(r("WAWebVoipWebWasmSampleVideoCamera.react"), {}), e[2] = m, e[3] = p) : (m = e[2], p = e[3]);
		var _;
		return e[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = s.jsxs(r("WAWebVoipWebWasmSampleContainer.react"), { children: [
			m,
			p,
			d,
			s.jsx(r("VultureJSDeadComponent.react"), { name: "WAWebVoipWebWasmSampleVideoCanvas2D" })
		] }), e[4] = _) : _ = e[4], _;
	}
	l.default = u;
}), 98);

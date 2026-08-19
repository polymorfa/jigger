__d("useWAWebVoipCameraHealthCheck", [
	"WALogger",
	"WAWebVoipCameraHealthCheckModal.react",
	"WAWebVoipVideoCameraCapture",
	"WAWebVoipVideoRendererInterface",
	"WAWebVoipVideoRendererRegistry",
	"react",
	"useWAWebVoipModalManager"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useEffect, f = m.useRef;
	function g(t) {
		var n = r("useWAWebVoipModalManager")(), a = n.closeModal, i = n.openModal, l = f(t);
		_(function() {
			l.current = t;
		}, [t]);
		var c = p(function() {
			if (o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.hasReceivedFirstFrameForJid(o("WAWebVoipVideoRendererInterface").selfPreviewJid)) {
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraHealthCheck] suppressing modal because self preview rendered a frame"])));
				return;
			}
			o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraHealthCheck] showing camera not working modal"]))), i(d.jsx(r("WAWebVoipCameraHealthCheckModal.react"), { onDismiss: a }));
		}, [i, a]);
		_(function() {
			var e = function() {
				o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraHealthCheck] health check failed (isCallActive=", ")"])), String(l.current)), l.current && c();
			};
			return o("WAWebVoipVideoCameraCapture").VideoDeviceEvents.on("cameraHealthCheckFailed", e), function() {
				o("WAWebVoipVideoCameraCapture").VideoDeviceEvents.off("cameraHealthCheckFailed", e);
			};
		}, [c]);
	}
	l.default = g;
}), 98);

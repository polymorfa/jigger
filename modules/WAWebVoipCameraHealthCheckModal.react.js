__d("WAWebVoipCameraHealthCheckModal.react", [
	"fbt",
	"WALogger",
	"WAWebConfirmPopup.react",
	"WAWebVoipStackInterface",
	"WAWebVoipVideoRendererInterface",
	"WAWebVoipVideoRendererRegistry",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useRef;
	function f(t) {
		var a = t.onDismiss, i = _(!1);
		p(function() {
			i.current = !0;
			var t = !1, n = function(r) {
				!t && (r == null || r === o("WAWebVoipVideoRendererInterface").selfPreviewJid) && o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.hasReceivedFirstFrameForJid(o("WAWebVoipVideoRendererInterface").selfPreviewJid) && (t = !0, o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraHealthCheck] self preview recovered, auto-dismissing modal"]))), a());
			}, r = o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.addFirstFrameReceivedListener(n);
			return n(), function() {
				i.current = !1, r();
			};
		}, [a]);
		var l = m(function() {
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
					(e == null ? void 0 : e.type) === "web" && (yield e.setCallVideoMute(!0));
				} finally {
					i.current && a();
				}
			})();
		}, [a]);
		return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOverlayClick: a,
			onOK: a,
			onCancel: l,
			testid: "voip-camera-health-check-modal",
			cancelText: s._(
				/*BTDS*/
				""
			),
			title: s._(
				/*BTDS*/
				""
			),
			children: c.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body2",
				children: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);

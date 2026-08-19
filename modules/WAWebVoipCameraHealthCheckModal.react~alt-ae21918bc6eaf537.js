__d("WAWebVoipCameraHealthCheckModal.react", [
	"fbt",
	"WALogger",
	"WAWebConfirmPopup.react",
	"WAWebVoipStackInterface",
	"WAWebVoipVideoRendererInterface",
	"WAWebVoipVideoRendererRegistry",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useRef;
	function f(t) {
		var n = t.onDismiss, a = _(!1);
		p(function() {
			a.current = !0;
			var t = !1, r = function(a) {
				!t && (a == null || a === o("WAWebVoipVideoRendererInterface").selfPreviewJid) && o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.hasReceivedFirstFrameForJid(o("WAWebVoipVideoRendererInterface").selfPreviewJid) && (t = !0, o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: [CameraHealthCheck] self preview recovered, auto-dismissing modal"]))), n());
			}, i = o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.addFirstFrameReceivedListener(r);
			return r(), function() {
				a.current = !1, i();
			};
		}, [n]);
		var i = m(function() {
			(async function() {
				try {
					var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
					(e == null ? void 0 : e.type) === "web" && await e.setCallVideoMute(!0);
				} finally {
					a.current && n();
				}
			})();
		}, [n]);
		return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOverlayClick: n,
			onOK: n,
			onCancel: i,
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

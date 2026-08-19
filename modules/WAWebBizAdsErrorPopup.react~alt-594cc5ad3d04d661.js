__d("WAWebBizAdsErrorPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebStopEvent",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useEffect;
	function d(e) {
		var t = e.fallback;
		return c(function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				okButtonType: "primary",
				okText: s._(
					/*BTDS*/
					""
				),
				onOK: function() {
					window.location.reload();
				},
				onOverlayClick: o("WAWebStopEvent").preventDefault,
				title: s._(
					/*BTDS*/
					""
				),
				children: u.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body1",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}), { blockClose: !0 });
		}, []), t;
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);

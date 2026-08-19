__d("WAWebBizAdsErrorPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebStopEvent",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useEffect;
	function d(e) {
		var t = o("react-compiler-runtime").c(1), n = e.fallback, r;
		return t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = [], t[0] = r) : r = t[0], c(m, r), n;
	}
	function m() {
		o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			okButtonType: "primary",
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: p,
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
	}
	function p() {
		window.location.reload();
	}
	l.default = d;
}), 226);

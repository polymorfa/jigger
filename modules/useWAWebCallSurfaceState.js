__d("useWAWebCallSurfaceState", [
	"WAWebPipController",
	"WAWebVoipUiDocPipPortalContainer.react",
	"WAWebVoipUiPopoutWindowPortalContainer.react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = o("react-compiler-runtime").c(9), n, a, i;
		t[0] !== e ? (n = e != null ? [e.id.toString() + "_pip_did_open", e.id.toString() + "_pip_did_close"] : [], a = function() {
			return e != null ? r("WAWebPipController").isOpened(e) : !1;
		}, i = [e], t[0] = e, t[1] = n, t[2] = a, t[3] = i) : (n = t[1], a = t[2], i = t[3]);
		var l = r("useWAWebEventTargetValue")(r("WAWebPipController"), n, a, i), c = r("useWAWebEventTargetValue")(o("WAWebVoipUiPopoutWindowPortalContainer.react").WAWebVoipUiPopoutWindowEventEmitter, "setPopoutWindowProps", u), d = r("useWAWebEventTargetValue")(o("WAWebVoipUiDocPipPortalContainer.react").WAWebVoipUiDocPipEventEmitter, "docPipOpenStateChanged", s), m = l || c || d, p;
		return t[4] !== d || t[5] !== c || t[6] !== l || t[7] !== m ? (p = {
			isPipOpen: l,
			isInPopout: c,
			isInDocPip: d,
			isAnySurfaceOpen: m
		}, t[4] = d, t[5] = c, t[6] = l, t[7] = m, t[8] = p) : p = t[8], p;
	}
	function s() {
		return o("WAWebVoipUiDocPipPortalContainer.react").getIsDocPipWindowOpen();
	}
	function u() {
		return o("WAWebVoipUiPopoutWindowPortalContainer.react").getIsCallActiveInPopoutWindow();
	}
	l.default = e;
}), 98);

__d("useWAWebVoipPeerHasReceivedFrame", [
	"WAWebNoop",
	"WAWebVoipVideoRendererRegistry",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useSyncExternalStore;
	function d(e) {
		var t = o("react-compiler-runtime").c(4), n;
		t[0] !== e ? (n = function(n) {
			return e == null || e === "" ? r("WAWebNoop") : o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.addFirstFrameReceivedListener(function(t) {
				t === e && n();
			});
		}, t[0] = e, t[1] = n) : n = t[1];
		var a = n, i;
		t[2] !== e ? (i = function() {
			return e != null && e !== "" ? o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.hasReceivedFirstFrameForJid(e) : !1;
		}, t[2] = e, t[3] = i) : i = t[3];
		var l = i;
		return c(a, l);
	}
	l.default = d;
}), 98);

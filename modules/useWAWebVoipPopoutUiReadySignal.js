__d("useWAWebVoipPopoutUiReadySignal", [
	"WAWebVoipPopoutWindowState",
	"WAWebVoipUiPopoutWindowContext",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useContext, c = s.useEffect;
	function d() {
		var e = o("react-compiler-runtime").c(4), t = u(r("WAWebVoipUiPopoutWindowContext")), n = (t == null ? void 0 : t.isContextInPopoutWindow) === !0, a = t == null ? void 0 : t.windowEl, i, l;
		e[0] !== n || e[1] !== a ? (i = function() {
			if (!(!n || a == null)) {
				var e = null, t = a.requestAnimationFrame(function() {
					o("WAWebVoipPopoutWindowState").isWindowClosed(a) || (e = a.requestAnimationFrame(function() {
						o("WAWebVoipPopoutWindowState").isWindowClosed(a) || (o("WAWebVoipPopoutWindowState").markPopoutUiReady(), o("WAWebVoipPopoutWindowState").WAWebVoipUiPopoutWindowEventEmitter.trigger("popoutUiReady", void 0));
					}));
				});
				return (function() {
					o("WAWebVoipPopoutWindowState").isWindowClosed(a) || (a.cancelAnimationFrame(t), e != null && a.cancelAnimationFrame(e));
				});
			}
		}, l = [n, a], e[0] = n, e[1] = a, e[2] = i, e[3] = l) : (i = e[2], l = e[3]), c(i, l);
	}
	l.default = d;
}), 98);

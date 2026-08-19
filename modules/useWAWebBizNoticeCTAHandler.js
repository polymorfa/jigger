__d("useWAWebBizNoticeCTAHandler", [
	"WAWebExternalLink.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e || (e = o("react"))).useCallback;
	function u(e, t) {
		var n = o("react-compiler-runtime").c(3), r;
		return n[0] !== e || n[1] !== t ? (r = function() {
			if (t != null) {
				t();
				return;
			}
			(e == null ? void 0 : e.url) != null && o("WAWebExternalLink.react").openExternalLink(e.url);
		}, n[0] = e, n[1] = t, n[2] = r) : r = n[2], r;
	}
	l.default = u;
}), 98);

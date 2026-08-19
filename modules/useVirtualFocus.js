__d("useVirtualFocus", [
	"cr:518",
	"cr:522",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useState;
	function d() {
		var e, t = c(null), r = t[0], o = t[1], a = (e = n("cr:522") == null ? void 0 : n("cr:522").isVirtualCursorTriggered()) != null ? e : !1, i = u(function(e) {
			(a || n("cr:518") != null && n("cr:518").isKeyDown()) && o(e);
		}, [a]), l = u(function() {
			(a || n("cr:518") != null && n("cr:518").isKeyDown()) && o(null);
		}, [a]);
		return {
			focusedButton: r,
			handleFocus: i,
			handleBlur: l
		};
	}
	l.default = d;
}), 98);

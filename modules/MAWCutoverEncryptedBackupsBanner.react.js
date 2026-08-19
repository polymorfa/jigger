__d("MAWCutoverEncryptedBackupsBanner.react", [
	"CometErrorBoundary.react",
	"cr:3127",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(4), a = e.isShown, i;
		t[0] !== a ? (i = a && n("cr:3127") ? s.jsx(r("CometErrorBoundary.react"), {
			fallback: c,
			children: s.jsx(n("cr:3127"), {})
		}) : null, t[0] = a, t[1] = i) : i = t[1];
		var l;
		return t[2] !== i ? (l = s.jsx(s.Fragment, { children: i }), t[2] = i, t[3] = l) : l = t[3], l;
	}
	function c() {
		return null;
	}
	l.default = u;
}), 98);

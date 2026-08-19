__d("MAWCondWrapper.react", [
	"MAWCondSetup.react",
	"MAWSetupWrapperOnce.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(3), n = e.children, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = s.jsx(r("MAWCondSetup.react"), {}), t[0] = a) : a = t[0];
		var i;
		return t[1] !== n ? (i = s.jsx(r("MAWSetupWrapperOnce.react"), {
			setupComponent: a,
			children: n
		}), t[1] = n, t[2] = i) : i = t[2], i;
	}
	l.default = u;
}), 98);

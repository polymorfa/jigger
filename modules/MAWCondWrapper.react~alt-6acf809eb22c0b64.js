__d("MAWCondWrapper.react", [
	"MAWCondSetup.react",
	"MAWSetupWrapperOnce.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.children;
		return s.jsx(r("MAWSetupWrapperOnce.react"), {
			setupComponent: s.jsx(r("MAWCondSetup.react"), {}),
			children: t
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);

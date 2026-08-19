__d("CometAppShell.react", [
	"BaseToasterStateManagerProvider.react",
	"CometNUXManager.react",
	"FDSCalloutManager.react",
	"VideoPlayerGlobalComponents.react",
	"cr:2099",
	"cr:39984",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = u || (u = o("react")), d = (e = n("cr:2099")) != null ? e : { DocumentTranslationStatusProvider: c.Fragment }, m = d.DocumentTranslationStatusProvider, p = (s = n("cr:39984")) != null ? s : c.Fragment;
	function _(e) {
		var t = o("react-compiler-runtime").c(6), n = e.ToasterStateManagerProvider, a = e.children, i = e.toaster, l = n === void 0 ? r("BaseToasterStateManagerProvider.react") : n, s;
		t[0] !== a ? (s = c.jsx(r("FDSCalloutManager.react"), { children: c.jsx(p, { children: c.jsx(r("CometNUXManager.react"), { children: c.jsx(r("VideoPlayerGlobalComponents.react"), { children: a }) }) }) }), t[0] = a, t[1] = s) : s = t[1];
		var u;
		return t[2] !== l || t[3] !== s || t[4] !== i ? (u = c.jsx(m, { children: c.jsxs(l, { children: [s, i] }) }), t[2] = l, t[3] = s, t[4] = i, t[5] = u) : u = t[5], u;
	}
	l.default = _;
}), 98);

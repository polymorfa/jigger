__d("CometMapIconMarker.react", [
	"BaseMapLibreGLMarker.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(8), n = e.icon, a = e.lngLat, i = e.offset, l = e.popup, u;
		t[0] !== i || t[1] !== l ? (u = l ? s.cloneElement(l, { offset: i }) : null, t[0] = i, t[1] = l, t[2] = u) : u = t[2];
		var c;
		return t[3] !== n || t[4] !== a || t[5] !== i || t[6] !== u ? (c = s.jsx(r("BaseMapLibreGLMarker.react"), {
			lngLat: a,
			offset: i,
			popup: u,
			children: n
		}), t[3] = n, t[4] = a, t[5] = i, t[6] = u, t[7] = c) : c = t[7], c;
	}
	l.default = u;
}), 98);

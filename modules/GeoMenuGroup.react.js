__d("GeoMenuGroup.react", [
	"GeoBaseRowLayout.react",
	"GeoHeading.react",
	"GeoMenuSeparator.react",
	"GeoPrivateMakeComponent",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(8), n = e.children, a = e.label, i = e.tooltip, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = s.jsx(r("GeoMenuSeparator.react"), {}), t[0] = l) : l = t[0];
		var u;
		t[1] !== a || t[2] !== i ? (u = a != null && s.jsxs(r("GeoBaseRowLayout.react"), {
			accessibilityRole: null,
			children: [s.jsx(r("GeoHeading.react"), {
				level: 4,
				children: a
			}), i]
		}), t[1] = a, t[2] = i, t[3] = u) : u = t[3];
		var c;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (c = s.jsx(r("GeoMenuSeparator.react"), {}), t[4] = c) : c = t[4];
		var d;
		return t[5] !== n || t[6] !== u ? (d = s.jsxs(s.Fragment, { children: [
			l,
			u,
			n,
			c
		] }), t[5] = n, t[6] = u, t[7] = d) : d = t[7], d;
	}
	var c = o("GeoPrivateMakeComponent").makeGeoComponent("GeoMenuGroup", u);
	l.default = c;
}), 98);

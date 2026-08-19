__d("WAWebBizProfileAddressFieldMap.react", [
	"WAWebMap.react",
	"WAWebResizeObserver",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useRef, m = u.useState, p = 140;
	function _(e) {
		var t = o("react-compiler-runtime").c(10), n = e.latitude, a = e.longitude, i = e.serviceAreaRadius, l = e.value, u = d(null), _ = m(0), f = _[0], g = _[1], h, y;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (h = function() {
			var e = u.current;
			if (e != null) {
				var t = e.offsetWidth;
				return t > 0 && g(t), o("WAWebResizeObserver").observe(e, function(e) {
					e.width > 0 && g(e.width);
				});
			}
		}, y = [], t[0] = h, t[1] = y) : (h = t[0], y = t[1]), c(h, y);
		var C;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "xkh2ocl xde1mab x17smslp" }, t[2] = C) : C = t[2];
		var b;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (b = { className: "x1hx6dwl x15udqip x19c2an0 x1yujic9 xhjk10j x6ikm8r x10wlt62 xh8yej3" }, t[3] = b) : b = t[3];
		var v;
		return t[4] !== n || t[5] !== a || t[6] !== f || t[7] !== i || t[8] !== l ? (v = s.jsx("div", babelHelpers.extends({}, C, { children: s.jsx("div", babelHelpers.extends({ ref: u }, b, { children: s.jsx(r("WAWebMap.react"), {
			lat: n,
			lng: a,
			name: l,
			radiusMeters: i,
			width: f,
			height: p
		}) })) })), t[4] = n, t[5] = a, t[6] = f, t[7] = i, t[8] = l, t[9] = v) : v = t[9], v;
	}
	l.default = _;
}), 98);

__d("WAWebBizProfileAddressFieldMap.react", [
	"WAWebMap.react",
	"WAWebResizeObserver",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useRef, m = u.useState, p = 140;
	function _(e) {
		var t = e.latitude, n = e.longitude, a = e.serviceAreaRadius, i = e.value, l = d(null), u = m(0), _ = u[0], f = u[1];
		return c(function() {
			var e = l.current;
			if (e != null) {
				var t = e.offsetWidth;
				return t > 0 && f(t), o("WAWebResizeObserver").observe(e, function(e) {
					e.width > 0 && f(e.width);
				});
			}
		}, []), s.jsx("div", {
			className: "xkh2ocl xde1mab x17smslp",
			children: s.jsx("div", {
				ref: l,
				className: "x1hx6dwl x15udqip x19c2an0 x1yujic9 xhjk10j x6ikm8r x10wlt62 xh8yej3",
				children: s.jsx(r("WAWebMap.react"), {
					lat: t,
					lng: n,
					name: i,
					radiusMeters: a,
					width: _,
					height: p
				})
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);

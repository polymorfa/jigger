__d("WAWebBizAdCreationLocationMap.react", ["WAWebMap.react", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useLayoutEffect, d = u.useRef, m = u.useState;
	function p(e) {
		var t = e.latitude, n = e.longitude, o = e.radiusMeters, a = e.showPin, i = a === void 0 ? !0 : a, l = e.zoom, u = d(null), p = m({
			height: 0,
			width: 0
		}), _ = p[0], f = p[1];
		return c(function() {
			if (u.current) {
				var e = u.current, t = e.offsetHeight, n = e.offsetWidth;
				n > 0 && t > 0 && f({
					height: t,
					width: n
				});
			}
		}, []), s.jsx("div", {
			ref: u,
			className: "xyi3aci xwf5gio x1p453bz x1suzm8a x5yr21d x6ikm8r x10wlt62 xh8yej3",
			children: _.width > 0 && _.height > 0 ? s.jsx(r("WAWebMap.react"), {
				height: _.height,
				lat: t,
				linkify: !1,
				lng: n,
				loadingVariant: "shimmer",
				radiusMeters: o,
				showMarker: i,
				width: _.width,
				zoom: l
			}) : null
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);

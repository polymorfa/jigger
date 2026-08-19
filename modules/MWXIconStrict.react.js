__d("MWXIconStrict.react", [
	"BaseIsDecorativeContext",
	"BaseSVGIcon.react",
	"MWXThreadThemeColor",
	"react",
	"react-compiler-runtime",
	"react-strict-dom",
	"useMDSIconColors"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { root: {
		display: "x1lliihq",
		forcedColorAdjust: "x1tzjh5l",
		$$css: !0
	} };
	function c(e) {
		var t = o("react-compiler-runtime").c(16), n = e.backgroundEnabled, a = e.color, i = e.icon, l = e.size, c = e.alt, d = e.isDecorative, m = n === void 0 ? !1 : n, p = a === void 0 ? "primary" : a, _ = d === void 0 ? !0 : d, f = r("useMDSIconColors")(!1), g = p instanceof o("MWXThreadThemeColor").MWXThreadThemeColor ? p.color : f[p];
		if (m !== !0) {
			var h;
			t[0] !== c || t[1] !== g || t[2] !== i.component.component || t[3] !== l ? (h = s.jsx(r("BaseSVGIcon.react"), {
				alt: c,
				color: g,
				icon: i.component.component,
				size: l,
				xstyle: u.root
			}), t[0] = c, t[1] = g, t[2] = i.component.component, t[3] = l, t[4] = h) : h = t[4];
			var y;
			return t[5] !== _ || t[6] !== h ? (y = s.jsx(r("BaseIsDecorativeContext").Provider, {
				value: _,
				children: h
			}), t[5] = _, t[6] = h, t[7] = y) : y = t[7], y;
		}
		var C = .5555555555555556 * l, b;
		t[8] !== c || t[9] !== g || t[10] !== i.originalComponent.component || t[11] !== C ? (b = s.jsx(o("react-strict-dom").html.div, { children: s.jsx(r("BaseSVGIcon.react"), {
			alt: c,
			color: g,
			icon: i.originalComponent.component,
			size: C,
			xstyle: u.root
		}) }), t[8] = c, t[9] = g, t[10] = i.originalComponent.component, t[11] = C, t[12] = b) : b = t[12];
		var v;
		return t[13] !== _ || t[14] !== b ? (v = s.jsx(r("BaseIsDecorativeContext").Provider, {
			value: _,
			children: b
		}), t[13] = _, t[14] = b, t[15] = v) : v = t[15], v;
	}
	l.default = c;
}), 98);

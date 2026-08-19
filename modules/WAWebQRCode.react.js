__d("WAWebQRCode.react", [
	"WAWeb-qrcode",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useRef;
	function p(t) {
		var n = t.colorDark, o = t.correctLevel, a = t.data, i = t.onChange, l = t.size, s = m(null), c = m(null);
		return d(function() {
			if (a == null) {
				var e;
				(e = c.current) == null || e.clear();
			} else c.current ? c.current.makeCode(a) : s.current && (c.current = new (r("WAWeb-qrcode"))(s.current, babelHelpers.extends({
				correctLevel: r("WAWeb-qrcode").CorrectLevel[o != null ? o : "L"],
				height: l,
				text: a,
				width: l
			}, n != null && { colorDark: n })));
			i == null || i(s.current);
		}, [
			a,
			l,
			i,
			n,
			o
		]), t.children ? t.children(s) : u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(t.xstyle), { ref: s }));
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);

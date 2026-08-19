__d("useWAWebMeasure", [
	"WAWebPREGatingUtils",
	"WAWebResizeObserver",
	"react",
	"react-compiler-runtime",
	"useWAWebDebouncedCallback"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useLayoutEffect, c = s.useState, d = {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(6), n = e === void 0 ? 100 : e, a = c(null), i = a[0], l = a[1], s = c(d), m = s[0], p = s[1], _ = r("useWAWebDebouncedCallback")(p, n), f, g;
		t[0] !== i || t[1] !== _ ? (f = function() {
			if (i) return o("WAWebResizeObserver").observe(i, o("WAWebPREGatingUtils").isPREResizeEnabled() ? _ : p);
		}, g = [i, _], t[0] = i, t[1] = _, t[2] = f, t[3] = g) : (f = t[2], g = t[3]), u(f, g);
		var h;
		return t[4] !== m ? (h = [l, m], t[4] = m, t[5] = h) : h = t[5], h;
	}
	l.default = m;
}), 98);

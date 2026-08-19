__d("WAWebWindowSizeProvider.react", [
	"WAWebPREGatingUtils",
	"WAWebWindowSizeContext",
	"react",
	"react-compiler-runtime",
	"useWAWebDebouncedCallback"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(8), n = e.children, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = _(), t[0] = a) : a = t[0];
		var i = m(a), l = i[0], u = i[1], c;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (c = function() {
			u(_());
		}, t[1] = c) : c = t[1];
		var p = c, f = r("useWAWebDebouncedCallback")(p, 10), g, h;
		t[2] !== f ? (g = function() {
			var e = o("WAWebPREGatingUtils").isPREResizeEnabled() ? f : p, t = o("WAWebPREGatingUtils").isPREResizeEnabled() ? !0 : void 0;
			return window.addEventListener("resize", e, t), (function() {
				window.removeEventListener("resize", e, t);
			});
		}, h = [p, f], t[2] = f, t[3] = g, t[4] = h) : (g = t[3], h = t[4]), d(g, h);
		var y;
		return t[5] !== n || t[6] !== l ? (y = s.jsx(r("WAWebWindowSizeContext").Provider, {
			value: l,
			children: n
		}), t[5] = n, t[6] = l, t[7] = y) : y = t[7], y;
	}
	function _() {
		return {
			width: window.innerWidth,
			height: window.innerHeight
		};
	}
	l.default = p;
}), 98);

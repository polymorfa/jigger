__d("WAWebWindowSizeProvider.react", [
	"WAWebPREGatingUtils",
	"WAWebWindowSizeContext",
	"react",
	"useWAWebDebouncedCallback"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useState;
	function p(e) {
		var t = e.children, n = m(_()), a = n[0], i = n[1], l = c(function() {
			i(_());
		}, []), u = r("useWAWebDebouncedCallback")(l, 10);
		return d(function() {
			var e = o("WAWebPREGatingUtils").isPREResizeEnabled() ? u : l, t = o("WAWebPREGatingUtils").isPREResizeEnabled() ? !0 : void 0;
			return window.addEventListener("resize", e, t), function() {
				window.removeEventListener("resize", e, t);
			};
		}, [l, u]), s.jsx(r("WAWebWindowSizeContext").Provider, {
			value: a,
			children: t
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _() {
		return {
			width: window.innerWidth,
			height: window.innerHeight
		};
	}
	l.default = p;
}), 98);

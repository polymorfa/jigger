__d("WAWebResizeObserver.react", [
	"WAWebClassnames",
	"react",
	"useMergeRefs",
	"useWAWebMeasure",
	"useWAWebPrevious",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s = [
		"children",
		"className",
		"component",
		"debounceMs",
		"onResize"
	], u, c = u || (u = o("react")), d = u.useLayoutEffect;
	function m(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.children, l = a.className, u = a.component, m = a.debounceMs, p = a.onResize, _ = babelHelpers.objectWithoutPropertiesLoose(a, s), f = u != null ? u : "div", g = r("useWAWebStableCallback")(p), h = r("useWAWebMeasure")(m), y = h[0], C = h[1], b = r("useMergeRefs")(y, n), v = r("useWAWebPrevious")(C);
		return d(function() {
			if (v != null && (C.width !== v.width || C.height !== v.height)) {
				var e = C.height, t = C.width;
				g({
					width: t,
					height: e
				});
			}
		}, [
			C,
			v,
			g
		]), c.jsx(f, babelHelpers.extends({}, _, {
			className: o("WAWebClassnames").classnamesConvertMeToStylexPlease("x1n2onr6", l),
			ref: b,
			children: i
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);

__d("WAWebResizeObserver.react", [
	"WAWebClassnames",
	"react",
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(23), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l, u, m, p, _, f;
		if (n[3] !== a) {
			var g = a;
			l = g.children, u = g.className, m = g.component, p = g.debounceMs, _ = g.onResize, f = babelHelpers.objectWithoutPropertiesLoose(g, s), n[3] = a, n[4] = l, n[5] = u, n[6] = m, n[7] = p, n[8] = _, n[9] = f;
		} else l = n[4], u = n[5], m = n[6], p = n[7], _ = n[8], f = n[9];
		var h = m != null ? m : "div", y = r("useWAWebStableCallback")(_), C = r("useWAWebMeasure")(p), b = C[0], v = C[1], S = r("useMergeRefs")(b, i), R = r("useWAWebPrevious")(v), L, E;
		n[10] !== y || n[11] !== R || n[12] !== v ? (L = function() {
			if (R != null && (v.width !== R.width || v.height !== R.height)) {
				var e = v.height, t = v.width;
				y({
					width: t,
					height: e
				});
			}
		}, E = [
			v,
			R,
			y
		], n[10] = y, n[11] = R, n[12] = v, n[13] = L, n[14] = E) : (L = n[13], E = n[14]), d(L, E);
		var k;
		n[15] !== u ? (k = o("WAWebClassnames").classnamesConvertMeToStylexPlease("x1n2onr6", u), n[15] = u, n[16] = k) : k = n[16];
		var I;
		return n[17] !== h || n[18] !== l || n[19] !== S || n[20] !== f || n[21] !== k ? (I = c.jsx(h, babelHelpers.extends({}, f, {
			className: k,
			ref: S,
			children: l
		})), n[17] = h, n[18] = l, n[19] = S, n[20] = f, n[21] = k, n[22] = I) : I = n[22], I;
	}
	l.default = m;
}), 98);

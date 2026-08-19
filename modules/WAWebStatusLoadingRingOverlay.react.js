__d("WAWebStatusLoadingRingOverlay.react", [
	"WAWebStatusGetters",
	"WAWebStatusImageRing.react",
	"react",
	"react-compiler-runtime",
	"useWAWebStatusValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = "status_loading_ring_overlay", c = { spinner: {
		insetInlineStart: "x1o0tod",
		left: null,
		right: null,
		pointerEvents: "x47corl",
		position: "x10l6tqk",
		top: "x13vifvy",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(11), n = e.children, r = e.customUnreadRingColor, a = e.id, i = e.size, l = e.stroke, d = r === void 0 ? null : r, m;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = [o("WAWebStatusGetters").getIsLoading, o("WAWebStatusGetters").getUnreadCount], t[0] = m) : m = t[0];
		var p = o("useWAWebStatusValues").useStatusValues(a, m), _ = p[0], f = p[1], g;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (g = { className: "x3nfvp2 x1n2onr6" }, t[1] = g) : g = t[1];
		var h;
		t[2] !== d || t[3] !== _ || t[4] !== i || t[5] !== l || t[6] !== f ? (h = _ ? s.jsx(o("WAWebStatusImageRing.react").StatusLoadingRingSpinner, {
			customUnreadRingColor: d,
			positioning: c.spinner,
			respectAppTheme: !0,
			size: i,
			stroke: l,
			testid: u,
			unreadCount: f
		}) : null, t[2] = d, t[3] = _, t[4] = i, t[5] = l, t[6] = f, t[7] = h) : h = t[7];
		var y;
		return t[8] !== n || t[9] !== h ? (y = s.jsxs("div", babelHelpers.extends({}, g, { children: [n, h] })), t[8] = n, t[9] = h, t[10] = y) : y = t[10], y;
	}
	l.default = d;
}), 98);

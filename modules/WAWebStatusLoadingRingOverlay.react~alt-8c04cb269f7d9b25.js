__d("WAWebStatusLoadingRingOverlay.react", [
	"WAWebStatusGetters",
	"WAWebStatusImageRing.react",
	"react",
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
		var t = e.children, n = e.customUnreadRingColor, r = n === void 0 ? null : n, a = e.id, i = e.size, l = e.stroke, d = o("useWAWebStatusValues").useStatusValues(a, [o("WAWebStatusGetters").getIsLoading, o("WAWebStatusGetters").getUnreadCount]), m = d[0], p = d[1];
		return s.jsxs("div", {
			className: "x3nfvp2 x1n2onr6",
			children: [t, m ? s.jsx(o("WAWebStatusImageRing.react").StatusLoadingRingSpinner, {
				customUnreadRingColor: r,
				positioning: c.spinner,
				respectAppTheme: !0,
				size: i,
				stroke: l,
				testid: u,
				unreadCount: p
			}) : null]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

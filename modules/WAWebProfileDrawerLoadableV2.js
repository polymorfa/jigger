__d("WAWebProfileDrawerLoadableV2", [
	"CometPlaceholder.react",
	"JSResourceForInteraction",
	"WAWebLoadingDrawer.react",
	"lazyLoadComponent",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = r("JSResourceForInteraction")("WAWebProfileDrawer.react").__setRef("WAWebProfileDrawerLoadableV2"), c = r("lazyLoadComponent")(u);
	function d(e) {
		var t = o("react-compiler-runtime").c(3), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = s.jsx(r("WAWebLoadingDrawer.react"), { error: !1 }), t[0] = n) : n = t[0];
		var a;
		return t[1] !== e ? (a = s.jsx(r("CometPlaceholder.react"), {
			fallback: n,
			name: "ProfileDrawerFlowLoadableV2",
			children: s.jsx(c, babelHelpers.extends({}, e))
		}), t[1] = e, t[2] = a) : a = t[2], a;
	}
	l.default = d;
}), 98);

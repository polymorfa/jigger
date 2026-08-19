__d("WAWebSkeleton.react", [
	"BaseGlimmer.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { block: {
		backgroundColor: "x1518k6t",
		$$css: !0
	} };
	function c(e) {
		var t = o("react-compiler-runtime").c(5), n = e.index, a = e.xstyle, i = n === void 0 ? 0 : n, l;
		t[0] !== a ? (l = [u.block, a], t[0] = a, t[1] = l) : l = t[1];
		var c;
		return t[2] !== i || t[3] !== l ? (c = s.jsx(r("BaseGlimmer.react"), {
			index: i,
			isDecorative: !0,
			startPaused: !1,
			xstyle: l
		}), t[2] = i, t[3] = l, t[4] = c) : c = t[4], c;
	}
	l.default = c;
}), 98);

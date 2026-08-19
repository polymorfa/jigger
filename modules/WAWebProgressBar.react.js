__d("WAWebProgressBar.react", [
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = { progress: {
		appearance: "xjyslct",
		width: "xh8yej3",
		color: "x1v5yvga",
		backgroundColor: "x151df2",
		verticalAlign: "x5jf7z8",
		"::-webkit-progress-bar_backgroundColor": "xnoatus",
		"::-webkit-progress-value_backgroundColor": "x1pfndiv",
		"::-webkit-progress-value_transitionProperty": "x1mil1q",
		"::-webkit-progress-value_transitionDuration": "x1yicwq7",
		"::-webkit-progress-value_transitionTimingFunction": "x15e8anl",
		"::-moz-progress-bar_backgroundColor": "x1xy4dik",
		"::-moz-progress-bar_transitionProperty": "x12wcalf",
		"::-moz-progress-bar_transitionDuration": "x18uf0o4",
		"::-moz-progress-bar_transitionTimingFunction": "x174ylx0",
		$$css: !0
	} };
	function d(t) {
		var n = o("react-compiler-runtime").c(6), a = t.max, i = t.value, l = t.xstyle, s = a === void 0 ? 100 : a, d;
		n[0] !== l ? (d = (e || (e = r("stylex"))).props(c.progress, l), n[0] = l, n[1] = d) : d = n[1];
		var m;
		return n[2] !== s || n[3] !== d || n[4] !== i ? (m = u.jsx("progress", babelHelpers.extends({
			value: i,
			max: s
		}, d)), n[2] = s, n[3] = d, n[4] = i, n[5] = m) : m = n[5], m;
	}
	l.default = d;
}), 98);

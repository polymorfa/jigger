__d("WAWebProgressBar.react", ["react", "stylex"], (function(t, n, r, o, a, i, l) {
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
		var n = t.max, o = n === void 0 ? 100 : n, a = t.value, i = t.xstyle;
		return u.jsx("progress", babelHelpers.extends({
			value: a,
			max: o
		}, (e || (e = r("stylex"))).props(c.progress, i)));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

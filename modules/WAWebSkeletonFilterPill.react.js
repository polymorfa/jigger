__d("WAWebSkeletonFilterPill.react", [
	"WAWebSkeleton.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { filterPill: {
		flexShrink: "x2lah0s",
		height: "x10w6t97",
		borderStartStartRadius: "xt8t1vi",
		borderStartEndRadius: "x1xc408v",
		borderEndEndRadius: "x129tdwq",
		borderEndStartRadius: "x15urzxu",
		$$css: !0
	} }, c = {
		pill0: {
			width: "x187nhsf",
			$$css: !0
		},
		pill1: {
			width: "xni59qk",
			$$css: !0
		},
		pill2: {
			width: "x29ncy0",
			$$css: !0
		},
		pill3: {
			width: "x13zx6y",
			$$css: !0
		}
	}, d = [
		c.pill0,
		c.pill1,
		c.pill2,
		c.pill3
	];
	function m(e) {
		var t = o("react-compiler-runtime").c(2), n = e.variant, a = d[n], i;
		return t[0] !== a ? (i = s.jsx(r("WAWebSkeleton.react"), { xstyle: [u.filterPill, a] }), t[0] = a, t[1] = i) : i = t[1], i;
	}
	l.default = m;
}), 98);

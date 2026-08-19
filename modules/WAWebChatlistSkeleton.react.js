__d("WAWebChatlistSkeleton.react", [
	"WAWebSkeleton.react",
	"WAWebSkeletonFilterPill.react",
	"WAWebSkeletonRow.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = 8, c = 4, d = {
		"--glimmer-opacity-min": "x1sv5zqs",
		"--glimmer-opacity-max": "x1tomd6h",
		"--glimmer-animation-direction": "x1bpithf",
		"--glimmer-animation-timing-function": "x1srzqgc",
		"--glimmer-stagger-time": "xvevfp2",
		"--glimmer-animation-duration": "x1uskrxl xp52qmy",
		$$css: !0
	}, m = { searchBar: {
		width: "xh8yej3",
		height: "x1vqgdyp",
		borderStartStartRadius: "xt8t1vi",
		borderStartEndRadius: "x1xc408v",
		borderEndEndRadius: "x129tdwq",
		borderEndStartRadius: "x15urzxu",
		$$css: !0
	} };
	function p() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = { className: "x1sv5zqs x1tomd6h x1bpithf x1srzqgc xvevfp2 x1uskrxl xp52qmy x78zum5 xdt5ytf x1iyjqo2 x2lwn1j x6ikm8r x10wlt62 x1280gxy" }, e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = s.jsxs("div", babelHelpers.extends({}, t, {
			"aria-hidden": !0,
			"data-testid": "chatlist_pane_skeleton",
			children: [
				s.jsx("div", {
					className: "x9f619 x106a9eq x1xnnf8n x1nn3v0j x1120s5i x2lah0s",
					children: s.jsx(r("WAWebSkeleton.react"), { xstyle: m.searchBar })
				}),
				s.jsx("div", {
					className: "x9f619 x78zum5 x6s0dn4 xfex06f x106a9eq x1xnnf8n x1y1aw1k x1ug4tga x2lah0s",
					children: Array.from({ length: c }, f)
				}),
				s.jsx("div", {
					className: "x1iyjqo2 x6ikm8r x10wlt62",
					children: Array.from({ length: u }, _)
				})
			]
		})), e[1] = n) : n = e[1], n;
	}
	function _(e, t) {
		return s.jsx(r("WAWebSkeletonRow.react"), {
			index: t,
			variant: t % 4
		}, t);
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e, t) {
		return s.jsx(r("WAWebSkeletonFilterPill.react"), { variant: t }, t);
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = p;
}), 98);

__d("WAWebLazyLoadLoading.story", ["WAWebLazyLoadLoading.react", "react"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		storyName: "WAWebLazyLoadLoading",
		component: r("WAWebLazyLoadLoading.react"),
		description: "Loading indicator for lazy loaded components",
		examples: [{
			title: "Loading state",
			example: function() {
				return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !1 }, "loading");
			}
		}, {
			title: "Error state",
			example: function() {
				return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !0 }, "error");
			}
		}]
	};
	l.default = u;
}), 98);

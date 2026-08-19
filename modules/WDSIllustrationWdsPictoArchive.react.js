__d("WDSIllustrationWdsPictoArchive.react", ["WDSIllustrationSvgComponentBase.react", "react"], (function(t, n, r, o, a, i, l) {
	var e;
	function s(e) {
		if (e == null) throw new TypeError("Cannot destructure " + e);
	}
	var u = e || (e = r("react")), c = "wds-picto-archive";
	function d(e) {
		var t = babelHelpers.extends({}, (s(e), e));
		return u.jsx(r("WDSIllustrationSvgComponentBase.react"), babelHelpers.extends({}, t, { children: u.jsxs("svg", {
			viewBox: "0 0 88 88",
			height: 88,
			width: 88,
			preserveAspectRatio: "xMidYMid meet",
			fill: "none",
			children: [
				u.jsx("title", { children: c }),
				u.jsx("path", {
					fill: "#25d366",
					stroke: "#111b21",
					strokeMiterlimit: 10,
					strokeWidth: 1.5,
					d: "M14.09 26.36V67.4c0 3.54 2.85 6.4 6.35 6.4h47.12a6.4 6.4 0 0 0 6.35-6.4V26.36q0-.91-.45-1.7l-4.1-7.23a6.3 6.3 0 0 0-5.51-3.23h-39.7a6.4 6.4 0 0 0-5.52 3.23l-4.09 7.23q-.45.79-.45 1.7Z"
				}),
				u.jsx("path", {
					fill: "#25d366",
					stroke: "#111b21",
					strokeMiterlimit: 10,
					strokeWidth: 1.5,
					d: "M65.4 25.9H22.6q-.15-.02-.1-.16l2.46-4.92c.29-.6.9-.97 1.55-.97H61.5c.66 0 1.26.38 1.55.97l2.46 4.92c.04.08-.02.17-.1.17zM49.97 47.87v-12.5c0-1.38-1.1-2.5-2.47-2.5h-7a2.5 2.5 0 0 0-2.47 2.5v12.5h-5.67c-2.64 0-4 3.19-2.18 5.12L41.7 65.26a3.16 3.16 0 0 0 4.62 0l11.51-12.27a3.04 3.04 0 0 0-2.18-5.12z"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

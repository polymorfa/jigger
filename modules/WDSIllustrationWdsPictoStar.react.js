__d("WDSIllustrationWdsPictoStar.react", ["WDSIllustrationSvgComponentBase.react", "react"], (function(t, n, r, o, a, i, l) {
	var e;
	function s(e) {
		if (e == null) throw new TypeError("Cannot destructure " + e);
	}
	var u = e || (e = r("react")), c = "wds-picto-star";
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
					d: "M44 76.99a33 33 0 0 0 33-33A33 33 0 0 0 44 11a33 33 0 0 0 0 66z"
				}),
				u.jsx("path", {
					fill: "#25d366",
					stroke: "#111b21",
					strokeMiterlimit: 10,
					strokeWidth: 1.5,
					d: "M70.13 44a26.13 26.13 0 1 1-52.24 0 26.13 26.13 0 0 1 52.23 0Z"
				}),
				u.jsx("path", {
					stroke: "#111b21",
					strokeLinejoin: "round",
					strokeWidth: 1.5,
					d: "M43.98 29.46q.54 0 1.04.23.42.19.78.63l3.3 6.63q.16.34.55.4l7.6 1.18q.75.24 1.16.84a2.4 2.4 0 0 1 .35 2.15q-.09.3-.3.62l-5.28 4.98a.8.8 0 0 0-.22.67l1.19 7.38q0 1.02-.68 1.7-.73.74-1.64.72h-.01l-.16-.02-.45-.07-6.85-3.96a.8.8 0 0 0-.66-.04l-.1.04-6.9 4-.19.03-.36.02q-.93.02-1.66-.72a2.2 2.2 0 0 1-.67-1.7L35 47.74a.8.8 0 0 0-.22-.66l-5.23-4.95q-.22-.3-.3-.62-.11-.36-.11-.72a2.4 2.4 0 0 1 1.58-2.28l7.6-1.16a.8.8 0 0 0 .55-.41l3.3-6.63q.34-.44.78-.63.5-.23 1.03-.23Z"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);

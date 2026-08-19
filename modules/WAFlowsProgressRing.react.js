__d("WAFlowsProgressRing.react", ["react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = 12, c = 1.25, d = u - c * 2, m = 2 * Math.PI * d;
	function p(e) {
		var t = e.progress, n = (100 - t) / 100 * m;
		return s.jsxs("svg", {
			"data-testid": void 0,
			height: u * 2,
			width: u * 2,
			children: [
				s.jsx("title", { children: "Progress Ring" }),
				s.jsx("circle", {
					"data-testid": void 0,
					cx: u,
					cy: u,
					r: d,
					fill: "none",
					stroke: "var(--WDS-persistent-always-white)",
					strokeWidth: c
				}),
				s.jsx("circle", {
					"data-testid": void 0,
					stroke: "var(--WDS-accent)",
					fill: "transparent",
					strokeWidth: c,
					strokeDasharray: m,
					style: { strokeDashoffset: n },
					r: d,
					cx: u,
					cy: u,
					transform: "rotate(-90 " + u + " " + u + ")"
				})
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);

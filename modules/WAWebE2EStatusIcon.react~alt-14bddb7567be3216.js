__d("WAWebE2EStatusIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "e2e-status";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				fill: "none",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						stroke: "#8696A0",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 1.4,
						d: "M20.34 11.58a8.4 8.4 0 0 1-6.77 8.6M5.61 6.4a8.37 8.37 0 0 1 10.8-1.58M10.3 20.18A8.4 8.4 0 0 1 3.98 9.23"
					}),
					u.jsx("path", {
						stroke: "#8696A0",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 1.4,
						d: "M17.28 11.94a5.34 5.34 0 1 1-2.52-4.53"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.E2EStatusIcon = d;
}), 98);
